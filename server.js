const express = require('express');
const cors = require('cors');
const { RouterOSAPI } = require('node-routeros');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// ============================================================
// PRE-CONFIGURED ROUTER (set these in Railway Environment Variables)
// ROUTER_HOST = IP or DDNS of your MikroTik (e.g. 195.69.230.107)
// ROUTER_USER = MikroTik username (default: admin)
// ROUTER_PASS = MikroTik password (default: empty)
// ROUTER_PORT = API port (default: 8728)
// ROUTER_NAME = Display name (default: My MikroTik)
// ============================================================
const ENV_ROUTER = {
    host: process.env.ROUTER_HOST || '',
    user: process.env.ROUTER_USER || 'admin',
    pass: process.env.ROUTER_PASS || '',
    port: parseInt(process.env.ROUTER_PORT) || 8728,
    type: process.env.ROUTER_TYPE || 'api',
    name: process.env.ROUTER_NAME || 'My MikroTik'
};

// Enable CORS and JSON parsing
app.use(cors());
app.use(express.json());

// Serve static frontend files
app.use(express.static(path.join(__dirname, 'public')));

// ============================================================
// NEW: /api/config — returns pre-configured router info to frontend
// Frontend uses this to auto-connect on page load if ROUTER_HOST is set
// ============================================================
app.get('/api/config', (req, res) => {
    if (ENV_ROUTER.host) {
        res.json({
            autoConnect: true,
            router: {
                name: ENV_ROUTER.name,
                host: ENV_ROUTER.host,
                user: ENV_ROUTER.user,
                port: ENV_ROUTER.port,
                type: ENV_ROUTER.type
                // Note: password is NOT sent to client for security
                // It is stored server-side and injected automatically
            }
        });
    } else {
        res.json({ autoConnect: false });
    }
});

// Helper function to extract router connection info from request headers
// Falls back to environment variables if headers not provided
function getRouterCredentials(req) {
    // Use env vars if headers say "use-env-config"
    if (req.headers['x-use-env-config'] === 'true' && ENV_ROUTER.host) {
        return {
            host: ENV_ROUTER.host,
            user: ENV_ROUTER.user,
            password: ENV_ROUTER.pass,
            port: ENV_ROUTER.port,
            type: ENV_ROUTER.type
        };
    }

    const host = req.headers['x-router-host'];
    const user = req.headers['x-router-user'] || 'admin';
    const password = req.headers['x-router-pass'] || '';
    const port = parseInt(req.headers['x-router-port']) || 8728;
    const type = req.headers['x-router-type'] || 'api';

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
