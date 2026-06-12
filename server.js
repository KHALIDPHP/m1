const express = require('express');
const cors = require('cors');
const { RouterOSAPI } = require('node-routeros');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Enable CORS and JSON parsing
app.use(cors());
app.use(express.json());

// Serve static frontend files
app.use(express.static(path.join(__dirname, 'public')));

// Helper function to extract router connection info from request headers
function getRouterCredentials(req) {
    const host = req.headers['x-router-host'];
    const user = req.headers['x-router-user'] || 'admin';
    const password = req.headers['x-router-pass'] || '';
    const port = parseInt(req.headers['x-router-port']) || 8728;
    const type = req.headers['x-router-type'] || 'api'; // 'api', 'api-ssl', or 'rest'

    if (!host) {
        throw new Error('Missing MikroTik Host address in headers (X-Router-Host)');
    }

    return { host, user, password, port, type };
}

// Helper function to execute a MikroTik command using node-routeros
async function executeRouterCommand(credentials, command, args = []) {
    const isSSL = credentials.type === 'api-ssl' || credentials.port === 8729;
    
    const apiOptions = {
        host: credentials.host,
        port: credentials.port,
        user: credentials.user,
        password: credentials.password,
        timeout: 15
    };

    if (isSSL) {
        apiOptions.tls = {
            rejectUnauthorized: false // Often self-signed on routers
        };
    }

    const api = new RouterOSAPI(apiOptions);

    try {
        await api.connect();
        // node-routeros write expects: write(command, args)
        // e.g. api.write('/ip/address/print')
        const data = await api.write(command, args);
        await api.close();
        return data;
    } catch (error) {
        // Ensure connection is closed on error
        try {
            await api.close();
        } catch (closeErr) {
            // ignore close error if it was never connected
        }
        throw error;
    }
}

// Endpoint to test connection and fetch system resources
app.post('/api/test', async (req, res) => {
    try {
        const credentials = getRouterCredentials(req);
        // Fetch system resources to verify connection
        const systemResource = await executeRouterCommand(credentials, '/system/resource/print');
        const identity = await executeRouterCommand(credentials, '/system/identity/print');
        
        res.json({
            success: true,
            message: 'Connected successfully!',
            data: {
                system: systemResource[0] || {},
                identity: identity[0] || { name: 'MikroTik' }
            }
        });
    } catch (error) {
        console.error('Test Connection Error:', error);
        res.status(500).json({
            success: false,
            message: error.message || 'Failed to connect to MikroTik router'
        });
    }
});

// Generic endpoint to execute any RouterOS command
app.post('/api/run', async (req, res) => {
    try {
        const credentials = getRouterCredentials(req);
        const { command, args } = req.body;

        if (!command) {
            return res.status(400).json({ success: false, message: 'Missing command in request body' });
        }

        const data = await executeRouterCommand(credentials, command, args);
        res.json({
            success: true,
            data: data
        });
    } catch (error) {
        console.error(`Run Command Error [${req.body.command}]:`, error);
        res.status(500).json({
            success: false,
            message: error.message || 'Error executing command on MikroTik router'
        });
    }
});

// Fallback to index.html for SPA routing
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start the server
app.listen(PORT, () => {
    console.log(`MikroTik Web Panel server running on port ${PORT}`);
});
