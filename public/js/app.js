/* ==========================================================================
   SMART MIKROTIK WEB PANEL - APP LOGIC (JAVASCRIPT)
   ========================================================================== */

// --------------------------------------------------------------------------
// 1. LOCALIZATION DICTIONARY (ARABIC & ENGLISH)
// --------------------------------------------------------------------------
const translations = {
    ar: {
        conn_subtitle: "أدخل بيانات اتصال راوتر مايكروتك الخاص بك للتحكم به من أي مكان في العالم.",
        saved_routers: "الراوترات المحفوظة",
        no_saved_routers: "لا يوجد راوترات محفوظة حالياً",
        new_connection: "اتصال جديد بالراوتر",
        label_conn_name: "اسم الاتصال",
        label_ip: "عنوان الراوتر (IP / DDNS)",
        label_conn_type: "نوع الاتصال",
        label_port: "المنفذ (Port)",
        label_user: "اسم المستخدم",
        label_pass: "كلمة المرور",
        btn_save: "حفظ الجهاز",
        btn_connect: "اتصال الآن",
        helper_title: "كيف أقوم بإعداد المايكروتك ليتصل بالإنترنت؟",
        help_step1: "قم بتسجيل الدخول للراوتر عبر برنامج Winbox.",
        help_step2: "اذهب إلى IP -> Services وقم بتفعيل الخدمة api (منفذ 8728) أو api-ssl (منفذ 8729).",
        help_step3: "لالاتصال من خارج الشبكة، قم بتفعيل خدمة الـ DDNS المجانية بالذهاب إلى IP -> Cloud وتفعيل خيار DDNS Enabled ثم نسخ العنوان الظاهر.",
        help_step4: "إذا كان المايكروتك خلف مودم إنترنت، يجب عمل Port Forwarding للمنفذ 8728 أو 8729 من المودم إلى الآيبي الخاص بالمايكروتك.",
        menu_dashboard: "الرئيسية",
        menu_hotspot: "الهوتسبوت",
        menu_clients: "العملاء & DHCP",
        menu_logs: "السجلات",
        menu_tools: "الأدوات والتحكم",
        btn_disconnect: "قطع الاتصال",
        stat_cpu: "المعالج CPU",
        stat_ram: "الذاكرة RAM",
        stat_free: "حر",
        stat_disk: "المساحة HDD",
        stat_uptime: "وقت التشغيل",
        traffic_title: "مراقبة حركة الشبكة الفورية",
        select_interface: "الواجهة النشطة:",
        graph_download: "التحميل (Download):",
        graph_upload: "الرفع (Upload):",
        hotspot_tab_active: "المستخدمين النشطين",
        hotspot_tab_accounts: "حسابات الهوتسبوت",
        hotspot_tab_profiles: "البروفايلات",
        hotspot_active_title: "المستخدمين المتصلين بالإنترنت حالياً",
        table_user: "اسم المستخدم",
        table_ip: "عنوان IP",
        table_mac: "عنوان MAC",
        table_uptime: "وقت الاتصال",
        table_bytes: "حجم البيانات (تحميل/رفع)",
        table_actions: "التحكم",
        table_loading: "جاري تحميل البيانات...",
        add_hotspot_user: "إنشاء مستخدم هوتسبوت جديد",
        label_hs_user: "اسم المستخدم",
        label_hs_pass: "كلمة المرور",
        label_hs_profile: "الملف الشخصي (Profile)",
        label_hs_uptime: "حد وقت التشغيل",
        label_hs_bytes: "حد الاستهلاك (حجم البيانات)",
        label_hs_comment: "ملاحظة / تعليق",
        btn_rand: "توليد عشوائي",
        btn_create_ticket: "إنشاء كرت / مستخدم",
        hotspot_users_title: "الحسابات المخزنة",
        table_pass: "كلمة المرور",
        table_profile: "الملف",
        table_comment: "الملاحظة",
        hotspot_profiles_title: "ملفات تعريف مستخدمي الهوتسبوت",
        table_profile_name: "اسم الملف",
        table_shared_users: "المشتركين بنفس الحساب",
        table_rate_limit: "السرعة المحددة (Rate Limit)",
        table_keepalive: "وقت بقاء الاتصال (Keepalive)",
        clients_tab_dhcp: "عقود DHCP Leases",
        clients_tab_ppp: "مشتركي PPPoE / PPP",
        dhcp_leases_title: "توزيع عناوين الآيبي النشطة (DHCP Leases)",
        table_host_name: "اسم الجهاز",
        table_status: "الحالة",
        ppp_active_title: "مستخدمي الـ PPP والاشتراكات المتصلة",
        table_service: "الخدمة",
        table_caller_id: "عنوان المتصل (Caller ID)",
        logs_title: "سجل عمليات جهاز المايكروتك (System Logs)",
        btn_refresh: "تحديث",
        btn_clear_view: "مسح الشاشة",
        tool_ping_title: "أداة فحص الاتصال (Ping)",
        tool_ping_desc: "أرسل حزم اختبار ping مباشرة من جهاز المايكروتك إلى أي خادم خارجي أو موقع ويب للتحقق من الاتصال بالإنترنت.",
        btn_run_ping: "بدء الفحص",
        ping_results_title: "النتائج الفورية:",
        tool_power_title: "إجراءات الطاقة والتحكم",
        tool_power_desc: "إجراءات هامة للتحكم بجهاز الراوتر عن بعد. يرجى توخي الحذر عند إرسال هذه الأوامر.",
        btn_reboot_router: "إعادة تشغيل الراوتر",
        btn_shutdown_router: "إيقاف تشغيل الراوتر",
        btn_cancel: "إلغاء",
        btn_confirm: "نعم، تنفيذ الإجراء",
        ticket_modal_title: "تذكرة الهوتسبوت الجاهزة للطباعة",
        ticket_card_title: "كرت اتصال بالإنترنت",
        ticket_username: "اسم المستخدم (User):",
        ticket_password: "كلمة المرور (Pass):",
        ticket_qr_desc: "امسح الكود للاتصال السريع",
        ticket_footer_disclaimer: "شكراً لاستخدامك شبكتنا. يحظر استخدامه في أعمال غير قانونية.",
        btn_print: "طباعة التذكرة",
        toast_conn_success: "تم الاتصال بالراوتر بنجاح!",
        toast_conn_failed: "فشل الاتصال بالراوتر! تحقق من العنوان والمنفذ.",
        toast_fill_fields: "يرجى تعبئة الحقول المطلوبة.",
        toast_router_saved: "تم حفظ الراوتر في القائمة بنجاح.",
        toast_router_deleted: "تم حذف الراوتر.",
        toast_user_disconnected: "تم فصل المستخدم بنجاح.",
        toast_user_created: "تم إنشاء مستخدم الهوتسبوت بنجاح!",
        toast_user_deleted_ok: "تم حذف المستخدم بنجاح.",
        toast_ping_success: "اكتمل فحص الاتصال بنجاح.",
        toast_reboot_sent: "تم إرسال أمر إعادة التشغيل للراوتر.",
        toast_shutdown_sent: "تم إرسال أمر إيقاف التشغيل للراوتر."
    },
    en: {
        conn_subtitle: "Enter your MikroTik credentials to connect and manage it from anywhere in the world.",
        saved_routers: "Saved Routers",
        no_saved_routers: "No saved routers yet.",
        new_connection: "New Router Connection",
        label_conn_name: "Connection Name",
        label_ip: "Router Address (IP / DDNS)",
        label_conn_type: "Connection Type",
        label_port: "Port",
        label_user: "Username",
        label_pass: "Password",
        btn_save: "Save Device",
        btn_connect: "Connect Now",
        helper_title: "How to configure MikroTik for remote access?",
        help_step1: "Log into the router using Winbox.",
        help_step2: "Go to IP -> Services and enable api (port 8728) or api-ssl (port 8729).",
        help_step3: "For external access, enable DDNS by going to IP -> Cloud, check DDNS Enabled, and copy the domain.",
        help_step4: "If MikroTik is behind a modem, port forward 8728/8729 from your modem to the MikroTik IP.",
        menu_dashboard: "Dashboard",
        menu_hotspot: "Hotspot",
        menu_clients: "Clients & DHCP",
        menu_logs: "Logs",
        menu_tools: "Tools & Power",
        btn_disconnect: "Disconnect",
        stat_cpu: "CPU Usage",
        stat_ram: "RAM Memory",
        stat_free: "Free",
        stat_disk: "Disk Space",
        stat_uptime: "Uptime",
        traffic_title: "Real-time Traffic Monitor",
        select_interface: "Active Interface:",
        graph_download: "Download Speed:",
        graph_upload: "Upload Speed:",
        hotspot_tab_active: "Active Users",
        hotspot_tab_accounts: "Hotspot Accounts",
        hotspot_tab_profiles: "User Profiles",
        hotspot_active_title: "Currently Connected Hotspot Users",
        table_user: "Username",
        table_ip: "IP Address",
        table_mac: "MAC Address",
        table_uptime: "Uptime",
        table_bytes: "Traffic Data (Down/Up)",
        table_actions: "Actions",
        table_loading: "Loading table data...",
        add_hotspot_user: "Create Hotspot User",
        label_hs_user: "Username",
        label_hs_pass: "Password",
        label_hs_profile: "User Profile",
        label_hs_uptime: "Uptime Limit",
        label_hs_bytes: "Data Limit (Bytes)",
        label_hs_comment: "Comment / Note",
        btn_rand: "Generate Random",
        btn_create_ticket: "Create & Print Ticket",
        hotspot_users_title: "Stored Accounts",
        table_pass: "Password",
        table_profile: "Profile",
        table_comment: "Comment",
        hotspot_profiles_title: "Hotspot User Profiles",
        table_profile_name: "Profile Name",
        table_shared_users: "Shared Users",
        table_rate_limit: "Rate Limit (Upload/Download)",
        table_keepalive: "Keepalive Timeout",
        clients_tab_dhcp: "DHCP Leases",
        clients_tab_ppp: "PPPoE Leases",
        dhcp_leases_title: "Active IP Leases (DHCP Leases)",
        table_host_name: "Host Name",
        table_status: "Status",
        ppp_active_title: "PPP Active Subscribers",
        table_service: "Service",
        table_caller_id: "Caller ID",
        logs_title: "MikroTik System Logs",
        btn_refresh: "Refresh Logs",
        btn_clear_view: "Clear View",
        tool_ping_title: "Diagnostic Ping Tool",
        tool_ping_desc: "Send ping packets from your MikroTik router to verify connection to external servers.",
        btn_run_ping: "Run Ping",
        ping_results_title: "Results Output:",
        tool_power_title: "Power Controls",
        tool_power_desc: "Perform hardware management actions on the router. Please use caution.",
        btn_reboot_router: "Reboot Router",
        btn_shutdown_router: "Shutdown Router",
        btn_cancel: "Cancel",
        btn_confirm: "Yes, Confirm Action",
        ticket_modal_title: "Printable Voucher Ticket",
        ticket_card_title: "Internet Access Voucher",
        ticket_username: "Username (User):",
        ticket_password: "Password (Pass):",
        ticket_qr_desc: "Scan QR Code for fast login",
        ticket_footer_disclaimer: "Thank you for using our service. Illegal use is strictly prohibited.",
        btn_print: "Print Ticket",
        toast_conn_success: "Connected to router successfully!",
        toast_conn_failed: "Connection failed! Check IP/Port configuration.",
        toast_fill_fields: "Please fill in all required fields.",
        toast_router_saved: "Router saved successfully.",
        toast_router_deleted: "Router removed from list.",
        toast_user_disconnected: "Active user disconnected successfully.",
        toast_user_created: "Hotspot user created successfully!",
        toast_user_deleted_ok: "User deleted successfully.",
        toast_ping_success: "Ping completed successfully.",
        toast_reboot_sent: "Reboot instruction sent.",
        toast_shutdown_sent: "Shutdown instruction sent."
    }
};

// --------------------------------------------------------------------------
// 2. STATE APP VARIABLES
// --------------------------------------------------------------------------
let currentLang = "ar";
let activeRouter = null; // Stored router connection headers
let savedRouters = [];
let dashboardInterval = null;
let trafficInterval = null;
let trafficChart = null;

// Traffic Monitor Tracking Variables
let lastRxBytes = 0;
let lastTxBytes = 0;
let lastTime = 0;
let chartLabels = [];
let chartRxData = [];
let chartTxData = [];

// --------------------------------------------------------------------------
// 3. INITIALIZATION
// --------------------------------------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
    // 1. Initialize Icons
    lucide.createIcons();

    // 2. Load Language Preference
    const storedLang = localStorage.getItem("app_lang");
    if (storedLang) {
        currentLang = storedLang;
    }
    applyLocalization(currentLang);

    // 3. Load Saved Routers
    loadSavedRouters();

    // 4. Attach Event Listeners
    setupEventListeners();
});

// --------------------------------------------------------------------------
// 4. LOCALIZATION FUNCTIONS
// --------------------------------------------------------------------------
function applyLocalization(lang) {
    currentLang = lang;
    localStorage.setItem("app_lang", lang);

    // Set Document Direction
    const dir = lang === "ar" ? "rtl" : "ltr";
    document.documentElement.dir = dir;
    document.documentElement.lang = lang;

    // Apply translations
    document.querySelectorAll("[data-localize]").forEach(el => {
        const key = el.getAttribute("data-localize");
        if (translations[lang] && translations[lang][key]) {
            // Check if element is input or has placeholders
            if (el.tagName === "INPUT" && el.hasAttribute("placeholder")) {
                el.placeholder = translations[lang][key];
            } else {
                el.innerHTML = translations[lang][key];
            }
        }
    });

    // Toggle button labels update
    const btnConnToggle = document.getElementById("lang-toggle-conn");
    const btnPanelToggle = document.getElementById("lang-toggle-panel");
    if (btnConnToggle) btnConnToggle.innerText = lang === "ar" ? "English" : "العربية";
    if (btnPanelToggle) btnPanelToggle.innerText = lang === "ar" ? "English" : "العربية";

    // Change input alignment styles dynamically
    lucide.createIcons();
}

// --------------------------------------------------------------------------
// 5. TOAST COMPONENT HELPER
// --------------------------------------------------------------------------
function showToast(messageKey, type = "info", literalMessage = null) {
    const toast = document.getElementById("toast");
    const toastMessage = document.getElementById("toast-message");
    
    // Set message
    let msgText = literalMessage || (translations[currentLang][messageKey] || messageKey);
    toastMessage.innerText = msgText;

    // Reset classes
    toast.className = "toast";
    
    // Set status styling class
    if (type === "success") toast.classList.add("success");
    else if (type === "danger") toast.classList.add("danger");
    
    // Reveal
    toast.classList.remove("hidden");
    
    // Auto Hide after 3.5s
    setTimeout(() => {
        toast.classList.add("hidden");
    }, 3500);
}

// --------------------------------------------------------------------------
// 6. ROUTER PROFILES MANAGEMENT
// --------------------------------------------------------------------------
function loadSavedRouters() {
    const data = localStorage.getItem("saved_routers");
    if (data) {
        try {
            savedRouters = JSON.parse(data);
        } catch (e) {
            savedRouters = [];
        }
    }
    renderSavedRoutersList();
}

function saveRoutersToLocalStorage() {
    localStorage.setItem("saved_routers", JSON.stringify(savedRouters));
    renderSavedRoutersList();
}

function renderSavedRoutersList() {
    const container = document.getElementById("saved-routers-list");
    container.innerHTML = "";

    if (savedRouters.length === 0) {
        container.innerHTML = `<div class="empty-routers-list" data-localize="no_saved_routers">${translations[currentLang]["no_saved_routers"]}</div>`;
        return;
    }

    savedRouters.forEach((router, index) => {
        const card = document.createElement("div");
        card.className = "router-card";
        card.dataset.index = index;
        
        card.innerHTML = `
            <div class="router-card-info" onclick="selectRouter(${index})">
                <span class="router-card-name">${escapeHtml(router.name)}</span>
                <span class="router-card-host">${escapeHtml(router.host)}:${router.port}</span>
            </div>
            <div class="router-card-actions">
                <button onclick="editRouter(${index})" title="تعديل"><i data-lucide="edit-2" style="width: 14px; height: 14px;"></i></button>
                <button class="btn-delete-card" onclick="deleteRouter(event, ${index})" title="حذف"><i data-lucide="trash-2" style="width: 14px; height: 14px;"></i></button>
            </div>
        `;
        container.appendChild(card);
    });
    lucide.createIcons();
}

function selectRouter(index) {
    const router = savedRouters[index];
    if (!router) return;

    document.getElementById("router-index").value = index;
    document.getElementById("router-name").value = router.name;
    document.getElementById("router-host").value = router.host;
    document.getElementById("router-type").value = router.type;
    document.getElementById("router-port").value = router.port;
    document.getElementById("router-user").value = router.user;
    document.getElementById("router-pass").value = router.pass;

    // Highlight card
    document.querySelectorAll(".router-card").forEach(el => el.classList.remove("active"));
    const selectedCard = document.querySelector(`.router-card[data-index="${index}"]`);
    if (selectedCard) selectedCard.classList.add("active");
}

function editRouter(index) {
    selectRouter(index);
}

function deleteRouter(e, index) {
    e.stopPropagation(); // Stop trigger selectRouter card click
    savedRouters.splice(index, 1);
    saveRoutersToLocalStorage();
    showToast("toast_router_deleted", "success");
    
    // Reset Form
    document.getElementById("router-index").value = "";
    document.getElementById("router-form").reset();
}

// --------------------------------------------------------------------------
// 7. BACKEND API CLIENT CALLS
// --------------------------------------------------------------------------
async function apiRequest(endpoint, body = {}) {
    if (!activeRouter) {
        throw new Error("No active router session established.");
    }

    const headers = {
        "Content-Type": "application/json",
        "X-Router-Host": activeRouter.host,
        "X-Router-User": activeRouter.user,
        "X-Router-Pass": activeRouter.pass,
        "X-Router-Port": activeRouter.port,
        "X-Router-Type": activeRouter.type
    };

    const response = await fetch(endpoint, {
        method: "POST",
        headers: headers,
        body: JSON.stringify(body)
    });

    const resJson = await response.json();
    if (!response.ok || !resJson.success) {
        throw new Error(resJson.message || "API error occurred");
    }

    return resJson;
}

// Test Router connection with direct inputs (before saving session)
async function testConnection(credentials) {
    const headers = {
        "Content-Type": "application/json",
        "X-Router-Host": credentials.host,
        "X-Router-User": credentials.user,
        "X-Router-Pass": credentials.pass,
        "X-Router-Port": credentials.port,
        "X-Router-Type": credentials.type
    };

    const response = await fetch("/api/test", {
        method: "POST",
        headers: headers
    });

    const resJson = await response.json();
    if (!response.ok || !resJson.success) {
        throw new Error(resJson.message || "Failed connecting to router");
    }

    return resJson;
}

// --------------------------------------------------------------------------
// 8. FLOW LOGIC - CONNECTING TO ROUTER
// --------------------------------------------------------------------------
async function connectToRouter(credentials) {
    const connectBtn = document.getElementById("btn-connect-router");
    const originalText = connectBtn.innerHTML;
    
    // Display Loader
    connectBtn.disabled = true;
    connectBtn.innerHTML = `<span class="animate-pulse">Loading...</span>`;

    try {
        // Test connection on server
        const connData = await testConnection(credentials);
        
        // Setup Active Session
        activeRouter = credentials;
        
        // Show panel
        document.getElementById("connection-screen").classList.add("hidden");
        document.getElementById("main-panel").classList.remove("hidden");
        
        // Setup details
        document.getElementById("connected-router-name").innerText = connData.data.identity.name || "MikroTik";
        document.getElementById("router-ip-display").innerText = credentials.host;
        
        // Show success toast
        showToast("toast_conn_success", "success");

        // Start Dashboard Loop
        startDashboardPolling(connData.data);
        
        // Start live chart init
        initTrafficChart();

    } catch (e) {
        console.error(e);
        showToast("toast_conn_failed", "danger", e.message);
    } finally {
        connectBtn.disabled = false;
        connectBtn.innerHTML = originalText;
    }
}

// --------------------------------------------------------------------------
// 9. POLLING LOOPS: DASHBOARD STATS
// --------------------------------------------------------------------------
function startDashboardPolling(initialData) {
    // Render initial data
    renderDashboardResources(initialData.system);

    // Start interval every 3 seconds
    dashboardInterval = setInterval(async () => {
        try {
            const systemRes = await apiRequest("/api/run", { command: "/system/resource/print" });
            if (systemRes.data && systemRes.data[0]) {
                renderDashboardResources(systemRes.data[0]);
            }
        } catch (err) {
            console.error("Dashboard poll error:", err);
        }
    }, 3000);
}

function renderDashboardResources(sys) {
    // 1. CPU
    const cpu = parseInt(sys["cpu-load"]) || 0;
    document.getElementById("stat-cpu-val").innerText = cpu;
    document.getElementById("stat-cpu-bar").style.width = `${cpu}%`;

    // 2. RAM
    const freeMemory = parseFloat(sys["free-memory"]) / (1024 * 1024); // MB
    const totalMemory = parseFloat(sys["total-memory"]) / (1024 * 1024); // MB
    const ramUsedPercent = totalMemory > 0 ? Math.round(((totalMemory - freeMemory) / totalMemory) * 100) : 0;
    
    document.getElementById("stat-ram-val").innerText = ramUsedPercent;
    document.getElementById("stat-ram-free").innerText = freeMemory.toFixed(1);
    document.getElementById("stat-ram-bar").style.width = `${ramUsedPercent}%`;

    // 3. HDD (Disk)
    const freeHDD = parseFloat(sys["free-hdd-space"]) / (1024 * 1024); // MB
    const totalHDD = parseFloat(sys["total-hdd-space"]) / (1024 * 1024); // MB
    const diskUsedPercent = totalHDD > 0 ? Math.round(((totalHDD - freeHDD) / totalHDD) * 100) : 0;

    document.getElementById("stat-disk-val").innerText = diskUsedPercent;
    document.getElementById("stat-disk-free").innerText = freeHDD.toFixed(1);
    document.getElementById("stat-disk-bar").style.width = `${diskUsedPercent}%`;

    // 4. Uptime & Board
    document.getElementById("stat-uptime-val").innerText = sys["uptime"] || "0s";
    document.getElementById("stat-board-val").innerText = sys["board-name"] || "MikroTik Board";
}

// --------------------------------------------------------------------------
// 10. REAL-TIME TRAFFIC MONITOR
// --------------------------------------------------------------------------
function initTrafficChart() {
    // Fetch interfaces to populate dropdown
    fetchInterfaces();

    const ctx = document.getElementById("trafficChart").getContext("2d");
    
    // Clear old chart if exists
    if (trafficChart) {
        trafficChart.destroy();
    }

    chartLabels = Array(15).fill("");
    chartRxData = Array(15).fill(0);
    chartTxData = Array(15).fill(0);

    const isDark = document.body.classList.contains("dark-theme");
    const gridColor = isDark ? "rgba(255, 255, 255, 0.05)" : "rgba(0, 0, 0, 0.05)";
    const textColor = isDark ? "#9ca3af" : "#475569";

    trafficChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: chartLabels,
            datasets: [
                {
                    label: translations[currentLang]["graph_download"],
                    data: chartRxData,
                    borderColor: '#06b6d4',
                    backgroundColor: 'rgba(6, 182, 212, 0.1)',
                    borderWidth: 2,
                    fill: true,
                    tension: 0.3,
                    pointRadius: 0
                },
                {
                    label: translations[currentLang]["graph_upload"],
                    data: chartTxData,
                    borderColor: '#8b5cf6',
                    backgroundColor: 'rgba(139, 92, 246, 0.1)',
                    borderWidth: 2,
                    fill: true,
                    tension: 0.3,
                    pointRadius: 0
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { display: false }
            },
            scales: {
                x: {
                    grid: { display: false },
                    ticks: { color: textColor }
                },
                y: {
                    grid: { color: gridColor },
                    ticks: {
                        color: textColor,
                        callback: function(value) {
                            return formatSpeed(value);
                        }
                    }
                }
            }
        }
    });

    // Reset speeds
    lastRxBytes = 0;
    lastTxBytes = 0;
    lastTime = Date.now();

    // Start traffic poller
    startTrafficPolling();
}

async function fetchInterfaces() {
    const select = document.getElementById("interface-select");
    select.innerHTML = `<option value="">Loading...</option>`;

    try {
        const result = await apiRequest("/api/run", { command: "/interface/print" });
        select.innerHTML = "";
        
        if (result.data && result.data.length > 0) {
            result.data.forEach(iface => {
                const opt = document.createElement("option");
                opt.value = iface.name;
                opt.innerText = `${iface.name} (${iface.type})`;
                
                // Set default choice (usually ether1, ether-gateway or wlan1/sfp)
                if (iface.name.toLowerCase().includes("ether1") || iface.name.toLowerCase().includes("wan")) {
                    opt.selected = true;
                }
                
                select.appendChild(opt);
            });
        } else {
            select.innerHTML = `<option value="">No Interfaces Found</option>`;
        }
    } catch (err) {
        console.error("Fetch interfaces error:", err);
        select.innerHTML = `<option value="">Error loading</option>`;
    }
}

function startTrafficPolling() {
    if (trafficInterval) clearInterval(trafficInterval);

    trafficInterval = setInterval(async () => {
        const activeInterface = document.getElementById("interface-select").value;
        if (!activeInterface) return;

        try {
            // Read specific interface details (rx-byte, tx-byte)
            const result = await apiRequest("/api/run", { 
                command: "/interface/print",
                args: [`?name=${activeInterface}`] 
            });

            if (result.data && result.data[0]) {
                const data = result.data[0];
                const rxBytes = parseInt(data["rx-byte"]) || 0;
                const txBytes = parseInt(data["tx-byte"]) || 0;
                const now = Date.now();

                if (lastTime > 0 && lastRxBytes > 0) {
                    const timeDiff = (now - lastTime) / 1000; // in seconds
                    
                    // Speeds in Bytes per second
                    const rxSpeed = Math.max(0, (rxBytes - lastRxBytes) / timeDiff);
                    const txSpeed = Math.max(0, (txBytes - lastTxBytes) / timeDiff);

                    // Update UI Labels
                    document.getElementById("live-download-rate").innerText = formatSpeed(rxSpeed);
                    document.getElementById("live-upload-rate").innerText = formatSpeed(txSpeed);

                    // Push to chart data
                    chartRxData.push(rxSpeed);
                    chartTxData.push(txSpeed);
                    chartRxData.shift();
                    chartTxData.shift();

                    // Update chart
                    if (trafficChart) {
                        trafficChart.data.datasets[0].data = chartRxData;
                        trafficChart.data.datasets[1].data = chartTxData;
                        trafficChart.update('none'); // silent update
                    }
                }

                // Cache metrics
                lastRxBytes = rxBytes;
                lastTxBytes = txBytes;
                lastTime = now;
            }
        } catch (err) {
            console.error("Traffic poll error:", err);
        }
    }, 2000);
}

// --------------------------------------------------------------------------
// 11. HOTSPOT TAB OPERATIONS
// --------------------------------------------------------------------------

// Active Users
async function loadHotspotActiveUsers() {
    const tbody = document.getElementById("hotspot-active-list");
    tbody.innerHTML = `<tr><td colspan="6" class="table-loading">${translations[currentLang]["table_loading"]}</td></tr>`;

    try {
        const result = await apiRequest("/api/run", { command: "/ip/hotspot/active/print" });
        tbody.innerHTML = "";

        if (result.data && result.data.length > 0) {
            result.data.forEach(user => {
                const tr = document.createElement("tr");
                
                const upBytes = parseInt(user["bytes-in"]) || 0;
                const downBytes = parseInt(user["bytes-out"]) || 0;
                const totalBytesFormatted = `${formatBytes(downBytes)} / ${formatBytes(upBytes)}`;

                tr.innerHTML = `
                    <td><strong>${escapeHtml(user.user)}</strong></td>
                    <td>${escapeHtml(user.address)}</td>
                    <td>${escapeHtml(user["mac-address"] || '-')}</td>
                    <td>${escapeHtml(user.uptime)}</td>
                    <td>${totalBytesFormatted}</td>
                    <td class="row-actions">
                        <button class="btn-row-action btn-row-action-delete" onclick="disconnectHotspotUser('${user['.id']}')" title="فصل">
                            <i data-lucide="user-x" style="width: 15px; height: 15px;"></i>
                        </button>
                    </td>
                `;
                tbody.appendChild(tr);
            });
            lucide.createIcons();
        } else {
            tbody.innerHTML = `<tr><td colspan="6" class="table-loading">لا يوجد مستخدمين متصلين حالياً</td></tr>`;
        }
    } catch (err) {
        console.error(err);
        tbody.innerHTML = `<tr><td colspan="6" class="table-loading text-danger">فشل في جلب البيانات: ${err.message}</td></tr>`;
    }
}

async function disconnectHotspotUser(id) {
    if (!confirm(currentLang === 'ar' ? 'هل أنت متأكد من فصل هذا المستخدم؟' : 'Are you sure you want to disconnect this user?')) return;
    
    try {
        await apiRequest("/api/run", {
            command: "/ip/hotspot/active/remove",
            args: [`=.id=${id}`]
        });
        showToast("toast_user_disconnected", "success");
        loadHotspotActiveUsers();
    } catch (err) {
        showToast(err.message, "danger");
    }
}

// User Profiles list (e.g. 1 Hour, 1 Day, default)
async function loadHotspotProfiles() {
    const tbody = document.getElementById("hotspot-profiles-list");
    const profileSelect = document.getElementById("hs-profile");
    
    tbody.innerHTML = `<tr><td colspan="4" class="table-loading">${translations[currentLang]["table_loading"]}</td></tr>`;
    profileSelect.innerHTML = "";

    try {
        const result = await apiRequest("/api/run", { command: "/ip/hotspot/user/profile/print" });
        tbody.innerHTML = "";

        if (result.data && result.data.length > 0) {
            result.data.forEach(profile => {
                // Renders table rows
                const tr = document.createElement("tr");
                tr.innerHTML = `
                    <td><strong>${escapeHtml(profile.name)}</strong></td>
                    <td>${escapeHtml(profile["shared-users"] || '1')}</td>
                    <td>${escapeHtml(profile["rate-limit"] || '-')}</td>
                    <td>${escapeHtml(profile["keepalive-timeout"] || '-')}</td>
                `;
                tbody.appendChild(tr);

                // Populate form dropdown select
                const opt = document.createElement("option");
                opt.value = profile.name;
                opt.innerText = profile.name;
                profileSelect.appendChild(opt);
            });
        } else {
            tbody.innerHTML = `<tr><td colspan="4" class="table-loading">لا يوجد بروفايلات هوتسبوت</td></tr>`;
            profileSelect.innerHTML = `<option value="default">default</option>`;
        }
    } catch (err) {
        console.error(err);
        tbody.innerHTML = `<tr><td colspan="4" class="table-loading text-danger">خطأ: ${err.message}</td></tr>`;
        profileSelect.innerHTML = `<option value="default">default</option>`;
    }
}

// Stored accounts users list
async function loadHotspotUsers() {
    const tbody = document.getElementById("hotspot-users-list");
    tbody.innerHTML = `<tr><td colspan="5" class="table-loading">${translations[currentLang]["table_loading"]}</td></tr>`;

    try {
        const result = await apiRequest("/api/run", { command: "/ip/hotspot/user/print" });
        tbody.innerHTML = "";

        if (result.data && result.data.length > 0) {
            result.data.forEach(user => {
                // Skip the default system/profile template users if name is default-trial
                if (user.name === 'default-trial') return;

                const tr = document.createElement("tr");
                tr.innerHTML = `
                    <td><strong>${escapeHtml(user.name)}</strong></td>
                    <td>${escapeHtml(user.password || '-')}</td>
                    <td>${escapeHtml(user.profile)}</td>
                    <td>${escapeHtml(user.comment || '-')}</td>
                    <td class="row-actions">
                        <button class="btn-row-action btn-row-action-print" onclick="openTicketModal('${user.name}', '${user.password}', '${user.profile}', '${user['limit-uptime']}', '${user['limit-bytes-total']}')" title="طباعة كرت">
                            <i data-lucide="printer" style="width: 14px; height: 14px;"></i>
                        </button>
                        <button class="btn-row-action btn-row-action-delete" onclick="deleteHotspotUser('${user['.id']}')" title="حذف">
                            <i data-lucide="trash-2" style="width: 14px; height: 14px;"></i>
                        </button>
                    </td>
                `;
                tbody.appendChild(tr);
            });
            lucide.createIcons();
        } else {
            tbody.innerHTML = `<tr><td colspan="5" class="table-loading">لا يوجد حسابات مخزنة</td></tr>`;
        }
    } catch (err) {
        console.error(err);
        tbody.innerHTML = `<tr><td colspan="5" class="table-loading text-danger">خطأ: ${err.message}</td></tr>`;
    }
}

async function deleteHotspotUser(id) {
    if (!confirm(currentLang === 'ar' ? 'هل أنت متأكد من حذف هذا الحساب نهائياً؟' : 'Are you sure you want to delete this account permanently?')) return;

    try {
        await apiRequest("/api/run", {
            command: "/ip/hotspot/user/remove",
            args: [`=.id=${id}`]
        });
        showToast("toast_user_deleted_ok", "success");
        loadHotspotUsers();
    } catch (err) {
        showToast(err.message, "danger");
    }
}

// Create Hotspot Ticket Account Form
async function handleCreateHotspotUser(e) {
    e.preventDefault();

    const username = document.getElementById("hs-username").value.trim();
    const password = document.getElementById("hs-password").value.trim();
    const profile = document.getElementById("hs-profile").value;
    const uptimeLimit = document.getElementById("hs-uptime").value.trim();
    const bytesLimit = document.getElementById("hs-bytes").value.trim();
    const comment = document.getElementById("hs-comment").value.trim() || "Created via Web Panel";

    if (!username) {
        showToast("toast_fill_fields", "danger");
        return;
    }

    // Build args array
    const args = [
        `=name=${username}`,
        `=password=${password}`,
        `=profile=${profile}`,
        `=comment=${comment}`
    ];

    if (uptimeLimit) args.push(`=limit-uptime=${uptimeLimit}`);
    if (bytesLimit) args.push(`=limit-bytes-total=${bytesLimit}`);

    try {
        await apiRequest("/api/run", {
            command: "/ip/hotspot/user/add",
            args: args
        });

        showToast("toast_user_created", "success");
        
        // Reset form inputs except profile selection
        document.getElementById("hs-username").value = "";
        document.getElementById("hs-password").value = "";
        document.getElementById("hs-uptime").value = "";
        document.getElementById("hs-bytes").value = "";
        document.getElementById("hs-comment").value = "";

        // Reload list
        loadHotspotUsers();

        // Automatically open the ticket for printing!
        openTicketModal(username, password, profile, uptimeLimit, bytesLimit);

    } catch (err) {
        showToast(err.message, "danger");
    }
}

function generateRandomCredentials() {
    const chars = "123456789"; // numbers only make it easy for hotspots card inputs, or letters
    const alphabet = "abcdefghijkmnpqrstuvwxyz23456789"; // clean readable characters (no o/0, l/1)
    
    let user = "";
    let pass = "";
    
    // Generate 6 random letters for username
    for (let i = 0; i < 5; i++) {
        user += alphabet.charAt(Math.floor(Math.random() * alphabet.length));
    }
    // Generate 4 random numbers for password
    for (let i = 0; i < 4; i++) {
        pass += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    document.getElementById("hs-username").value = user;
    document.getElementById("hs-password").value = pass;
}

// --------------------------------------------------------------------------
// 12. TICKET GRAPHICAL PRINT MODAL
// --------------------------------------------------------------------------
function openTicketModal(username, password, profile, uptimeLimit, bytesLimit) {
    const modal = document.getElementById("ticket-modal");
    
    document.getElementById("ticket-val-username").innerText = username;
    
    const passWrap = document.getElementById("ticket-cred-pass-wrapper");
    if (password) {
        passWrap.classList.remove("hidden");
        document.getElementById("ticket-val-password").innerText = password;
    } else {
        passWrap.classList.add("hidden");
    }

    // Limits
    const limitUptimeText = currentLang === 'ar' ? 'حد التشغيل: ' : 'Time Limit: ';
    const limitBytesText = currentLang === 'ar' ? 'حد البيانات: ' : 'Data Limit: ';
    
    document.getElementById("ticket-val-limit").innerText = uptimeLimit ? `${limitUptimeText}${uptimeLimit}` : `${limitUptimeText}${currentLang === 'ar' ? 'غير محدود' : 'Unlimited'}`;
    document.getElementById("ticket-val-bytes").innerText = bytesLimit ? `${limitBytesText}${bytesLimit}` : `${limitBytesText}${currentLang === 'ar' ? 'غير محدود' : 'Unlimited'}`;

    // Generate QR Code
    // We encode a login link or username/password. Standard MikroTik hotspot login accepts:
    // http://<hotspot-ip>/login?username=xxx&password=yyy
    const qrCanvas = document.getElementById("ticket-qr");
    
    // Generate standard query format
    const qrString = `http://${activeRouter.host}/login?username=${encodeURIComponent(username)}&password=${encodeURIComponent(password)}`;
    
    const qr = new QRious({
        element: qrCanvas,
        value: qrString,
        size: 100,
        background: '#ffffff',
        foreground: '#0f172a',
        level: 'H'
    });

    modal.classList.remove("hidden");
}

function closeTicketModal() {
    document.getElementById("ticket-modal").classList.add("hidden");
}

function printTicket() {
    window.print();
}

// --------------------------------------------------------------------------
// 13. CLIENTS & DHCP TAB OPERATIONS
// --------------------------------------------------------------------------
async function loadDHCPLeases() {
    const tbody = document.getElementById("dhcp-leases-list");
    tbody.innerHTML = `<tr><td colspan="5" class="table-loading">${translations[currentLang]["table_loading"]}</td></tr>`;

    try {
        const result = await apiRequest("/api/run", { command: "/ip/dhcp-server/lease/print" });
        tbody.innerHTML = "";

        if (result.data && result.data.length > 0) {
            result.data.forEach(lease => {
                const tr = document.createElement("tr");
                tr.innerHTML = `
                    <td><strong>${escapeHtml(lease.address)}</strong></td>
                    <td>${escapeHtml(lease["mac-address"])}</td>
                    <td>${escapeHtml(lease["host-name"] || '-')}</td>
                    <td><span class="status-badge ${lease.status}">${escapeHtml(lease.status)}</span></td>
                    <td>${escapeHtml(lease.comment || '-')}</td>
                `;
                tbody.appendChild(tr);
            });
        } else {
            tbody.innerHTML = `<tr><td colspan="5" class="table-loading">لا يوجد عقود DHCP نشطة حالياً</td></tr>`;
        }
    } catch (err) {
        console.error(err);
        tbody.innerHTML = `<tr><td colspan="5" class="table-loading text-danger">خطأ: ${err.message}</td></tr>`;
    }
}

async function loadPPPConnections() {
    const tbody = document.getElementById("ppp-active-list");
    tbody.innerHTML = `<tr><td colspan="5" class="table-loading">${translations[currentLang]["table_loading"]}</td></tr>`;

    try {
        const result = await apiRequest("/api/run", { command: "/interface/ppp-active/print" });
        tbody.innerHTML = "";

        if (result.data && result.data.length > 0) {
            result.data.forEach(conn => {
                const tr = document.createElement("tr");
                tr.innerHTML = `
                    <td><strong>${escapeHtml(conn.name)}</strong></td>
                    <td>${escapeHtml(conn.service)}</td>
                    <td>${escapeHtml(conn["caller-id"] || '-')}</td>
                    <td>${escapeHtml(conn.address)}</td>
                    <td>${escapeHtml(conn.uptime)}</td>
                `;
                tbody.appendChild(tr);
            });
        } else {
            tbody.innerHTML = `<tr><td colspan="5" class="table-loading">لا يوجد مشتركي PPPoE متصلين حالياً</td></tr>`;
        }
    } catch (err) {
        console.error(err);
        tbody.innerHTML = `<tr><td colspan="5" class="table-loading text-danger">خطأ: ${err.message}</td></tr>`;
    }
}

// --------------------------------------------------------------------------
// 14. LOGS CONSOLE DISPLAY
// --------------------------------------------------------------------------
async function loadSystemLogs() {
    const consoleBox = document.getElementById("logs-console");
    consoleBox.innerHTML = translations[currentLang]["table_loading"];

    try {
        // Fetch last 60 log entries
        const result = await apiRequest("/api/run", { command: "/log/print" });
        consoleBox.innerHTML = "";

        if (result.data && result.data.length > 0) {
            // Take the last 60 logs
            const logs = result.data.slice(-60);
            
            logs.forEach(log => {
                const logLine = document.createElement("div");
                logLine.className = "log-line";
                
                // Add specific style for warning or errors
                const topics = log.topics || "";
                if (topics.includes("error") || topics.includes("critical")) {
                    logLine.classList.add("error");
                } else if (topics.includes("warning")) {
                    logLine.classList.add("warning");
                }

                logLine.innerHTML = `
                    <span class="log-time">[${escapeHtml(log.time)}]</span>
                    <span class="log-topics">&lt;${escapeHtml(topics)}&gt;</span>
                    <span class="log-message">${escapeHtml(log.message)}</span>
                `;
                consoleBox.appendChild(logLine);
            });
            
            // Auto scroll to bottom
            const wrapper = consoleBox.parentElement;
            wrapper.scrollTop = wrapper.scrollHeight;
        } else {
            consoleBox.innerHTML = "لا يوجد سجلات في الذاكرة حالياً.";
        }
    } catch (err) {
        console.error(err);
        consoleBox.innerHTML = `<span class="text-danger">خطأ أثناء جلب السجلات: ${err.message}</span>`;
    }
}

// --------------------------------------------------------------------------
// 15. TOOLS & POWER MANAGEMENT
// --------------------------------------------------------------------------
async function runPingTest(e) {
    e.preventDefault();
    const hostInput = document.getElementById("ping-host").value.trim();
    const output = document.getElementById("ping-output");
    const resultsWrapper = document.getElementById("ping-results-wrapper");
    const pingBtn = document.getElementById("btn-ping");

    if (!hostInput) return;

    pingBtn.disabled = true;
    pingBtn.innerText = "Running...";
    resultsWrapper.classList.remove("hidden");
    output.innerText = "Pinging host from router, please wait...\n";

    try {
        // Execute ping with count=4 to prevent hangs
        const result = await apiRequest("/api/run", {
            command: "/ping",
            args: [`=address=${hostInput}`, "=count=4"]
        });

        output.innerText = "";
        
        if (result.data && result.data.length > 0) {
            result.data.forEach(pkg => {
                // Check format
                if (pkg.status) {
                    output.innerText += `${pkg.status}\n`;
                } else if (pkg.host) {
                    output.innerText += `Received from ${pkg.host}: seq=${pkg.sent} size=${pkg.size || 56} ttl=${pkg.ttl || 64} time=${pkg.time}\n`;
                } else {
                    output.innerText += JSON.stringify(pkg) + "\n";
                }
            });
            
            // Render totals at end if returned
            const lastRow = result.data[result.data.length - 1];
            if (lastRow && lastRow["packet-loss"]) {
                output.innerText += `\n--- Ping Statistics ---\nPackets: Sent=${lastRow.sent}, Received=${lastRow.received}, Loss=${lastRow["packet-loss"]}\n`;
            }
            showToast("toast_ping_success", "success");
        } else {
            output.innerText = "لم يتم تلقي أي استجابة من الفحص.";
        }
    } catch (err) {
        console.error(err);
        output.innerText = `فشل الفحص: ${err.message}`;
        showToast(err.message, "danger");
    } finally {
        pingBtn.disabled = false;
        pingBtn.innerText = translations[currentLang]["btn_run_ping"];
    }
}

let pendingPowerAction = null; // 'reboot' or 'shutdown'

function openPowerConfirm(action) {
    pendingPowerAction = action;
    const modal = document.getElementById("power-confirm-modal");
    const title = document.getElementById("confirm-modal-title");
    const desc = document.getElementById("confirm-modal-desc");

    if (action === "reboot") {
        title.innerText = currentLang === 'ar' ? 'إعادة تشغيل الراوتر؟' : 'Reboot Router?';
        desc.innerText = currentLang === 'ar' ? 'هل أنت متأكد من رغبتك في إعادة تشغيل جهاز المايكروتك عن بعد؟ سيتوقف اتصال الإنترنت لبضع دقائق.' : 'Are you sure you want to reboot the MikroTik router? This will temporarily interrupt internet access for all users.';
    } else {
        title.innerText = currentLang === 'ar' ? 'إيقاف تشغيل الراوتر؟' : 'Shutdown Router?';
        desc.innerText = currentLang === 'ar' ? 'هل أنت متأكد من رغبتك في إيقاف التشغيل؟ لن تتمكن من الاتصال بالراوتر عن بعد مرة أخرى إلا بتشغيله يدوياً.' : 'Are you sure you want to shut down the router? You will not be able to reconnect remotely until it is powered on manually.';
    }

    modal.classList.remove("hidden");
}

function closePowerConfirm() {
    document.getElementById("power-confirm-modal").classList.add("hidden");
    pendingPowerAction = null;
}

async function executePowerAction() {
    if (!pendingPowerAction) return;
    
    const action = pendingPowerAction;
    closePowerConfirm();

    try {
        if (action === "reboot") {
            // Execute system reboot asynchronously
            apiRequest("/api/run", { command: "/system/reboot" }).catch(() => {});
            showToast("toast_reboot_sent", "success");
        } else {
            // Execute system shutdown
            apiRequest("/api/run", { command: "/system/shutdown" }).catch(() => {});
            showToast("toast_shutdown_sent", "success");
        }

        // Auto disconnect since the router will go offline
        setTimeout(() => {
            disconnectActiveSession();
        }, 1500);

    } catch (err) {
        showToast(err.message, "danger");
    }
}

// --------------------------------------------------------------------------
// 16. SESSION TEARDOWN & TABS NAVIGATION
// --------------------------------------------------------------------------
function disconnectActiveSession() {
    // Stop timers
    if (dashboardInterval) clearInterval(dashboardInterval);
    if (trafficInterval) clearInterval(trafficInterval);

    activeRouter = null;

    // Reset views
    document.getElementById("main-panel").classList.add("hidden");
    document.getElementById("connection-screen").classList.remove("hidden");

    // Reset selected routers active classes
    document.querySelectorAll(".router-card").forEach(el => el.classList.remove("active"));
    document.getElementById("router-index").value = "";
}

function handleTabNavigation(e) {
    e.preventDefault();
    const targetTab = this.getAttribute("data-tab");

    // Toggle menu active status
    document.querySelectorAll(".menu-item").forEach(item => item.classList.remove("active"));
    this.classList.add("active");

    // Toggle tab visibility
    document.querySelectorAll(".tab-section").forEach(tab => tab.classList.add("hidden"));
    
    const targetSection = document.getElementById(`tab-${targetTab}`);
    if (targetSection) {
        targetSection.classList.remove("hidden");
    }

    // Load tab specific data
    if (targetTab === "dashboard") {
        // Automatically restarts traffic monitor
        startTrafficPolling();
    } else {
        // Pause traffic monitor to save bandwidth when not on dashboard
        if (trafficInterval) clearInterval(trafficInterval);
    }

    if (targetTab === "hotspot") {
        loadHotspotActiveUsers();
        loadHotspotUsers();
        loadHotspotProfiles();
    } else if (targetTab === "clients") {
        loadDHCPLeases();
        loadPPPConnections();
    } else if (targetTab === "logs") {
        loadSystemLogs();
    }
}

// --------------------------------------------------------------------------
// 17. EVEN LISTENERS WIREUP
// --------------------------------------------------------------------------
function setupEventListeners() {
    // 1. Language Toggle Buttons
    document.getElementById("lang-toggle-conn").addEventListener("click", () => {
        applyLocalization(currentLang === "ar" ? "en" : "ar");
    });
    document.getElementById("lang-toggle-panel").addEventListener("click", () => {
        applyLocalization(currentLang === "ar" ? "en" : "ar");
    });

    // 2. Theme Toggle (Light / Dark)
    document.getElementById("theme-toggle").addEventListener("click", () => {
        const body = document.body;
        const sun = document.getElementById("theme-icon-sun");
        const moon = document.getElementById("theme-icon-moon");

        body.classList.toggle("light-theme");
        
        if (body.classList.contains("light-theme")) {
            sun.classList.remove("hidden");
            moon.classList.add("hidden");
        } else {
            sun.classList.add("hidden");
            moon.classList.remove("hidden");
        }

        // If traffic chart initialized, adjust grid text colors
        if (trafficChart) {
            const isDark = !body.classList.contains("light-theme");
            const gridColor = isDark ? "rgba(255, 255, 255, 0.05)" : "rgba(0, 0, 0, 0.05)";
            const textColor = isDark ? "#9ca3af" : "#475569";

            trafficChart.options.scales.x.ticks.color = textColor;
            trafficChart.options.scales.y.ticks.color = textColor;
            trafficChart.options.scales.y.grid.color = gridColor;
            trafficChart.update();
        }
    });

    // 3. Router Form Connection Type Change
    document.getElementById("router-type").addEventListener("change", (e) => {
        const type = e.target.value;
        const portInput = document.getElementById("router-port");
        
        // Auto update default port recommendations
        if (type === "api") portInput.value = "8728";
        else if (type === "api-ssl") portInput.value = "8729";
    });

    // 4. Save Router Profile Action
    document.getElementById("btn-save-router").addEventListener("click", () => {
        const name = document.getElementById("router-name").value.trim();
        const host = document.getElementById("router-host").value.trim();
        const type = document.getElementById("router-type").value;
        const port = parseInt(document.getElementById("router-port").value) || 8728;
        const user = document.getElementById("router-user").value.trim();
        const pass = document.getElementById("router-pass").value;
        const indexVal = document.getElementById("router-index").value;

        if (!name || !host || !user) {
            showToast("toast_fill_fields", "danger");
            return;
        }

        const routerObj = { name, host, type, port, user, pass };

        if (indexVal !== "") {
            // Update existing
            savedRouters[parseInt(indexVal)] = routerObj;
            document.getElementById("router-index").value = "";
        } else {
            // Add new
            savedRouters.push(routerObj);
        }

        saveRoutersToLocalStorage();
        showToast("toast_router_saved", "success");
        document.getElementById("router-form").reset();
        document.getElementById("router-port").value = "8728";
        document.getElementById("router-user").value = "admin";
    });

    // 5. Connect Router Form Submission
    document.getElementById("router-form").addEventListener("submit", (e) => {
        e.preventDefault();

        const host = document.getElementById("router-host").value.trim();
        const type = document.getElementById("router-type").value;
        const port = parseInt(document.getElementById("router-port").value) || 8728;
        const user = document.getElementById("router-user").value.trim();
        const pass = document.getElementById("router-pass").value;

        if (!host || !user) {
            showToast("toast_fill_fields", "danger");
            return;
        }

        const credentials = { host, type, port, user, pass };
        connectToRouter(credentials);
    });

    // 6. Router Setup Helper Accordion Toggle
    document.getElementById("helper-toggle").addEventListener("click", () => {
        const toggle = document.getElementById("helper-toggle");
        const content = document.getElementById("helper-content");
        
        toggle.classList.toggle("open");
        content.classList.toggle("hidden");
    });

    // 7. Disconnect Button Action
    document.getElementById("btn-disconnect").addEventListener("click", () => {
        disconnectActiveSession();
    });

    // 8. Sidebar Tabs Navigation
    document.querySelectorAll(".menu-item").forEach(item => {
        item.addEventListener("click", handleTabNavigation);
    });

    // 9. Hotspot Sub-tabs Navigation
    document.querySelectorAll('[data-subtab^="hotspot-"]').forEach(btn => {
        btn.addEventListener("click", function() {
            // Toggle active subtab button
            const tabSection = this.closest(".tab-section");
            tabSection.querySelectorAll(".sub-tab-btn").forEach(b => b.classList.remove("active"));
            this.classList.add("active");

            // Toggle contents
            const targetId = this.getAttribute("data-subtab");
            tabSection.querySelectorAll(".subtab-content").forEach(c => c.classList.add("hidden"));
            document.getElementById(`subtab-${targetId}`).classList.remove("hidden");

            // Fetch specific lists on reveal
            if (targetId === "hotspot-active") loadHotspotActiveUsers();
            else if (targetId === "hotspot-users") {
                loadHotspotUsers();
                loadHotspotProfiles();
            }
            else if (targetId === "hotspot-profiles") loadHotspotProfiles();
        });
    });

    // 10. Clients & DHCP Sub-tabs Navigation
    document.querySelectorAll('[data-subtab^="clients-"]').forEach(btn => {
        btn.addEventListener("click", function() {
            const tabSection = this.closest(".tab-section");
            tabSection.querySelectorAll(".sub-tab-btn").forEach(b => b.classList.remove("active"));
            this.classList.add("active");

            const targetId = this.getAttribute("data-subtab");
            tabSection.querySelectorAll(".subtab-content").forEach(c => c.classList.add("hidden"));
            document.getElementById(`subtab-${targetId}`).classList.remove("hidden");

            if (targetId === "clients-dhcp") loadDHCPLeases();
            else if (targetId === "clients-ppp") loadPPPConnections();
        });
    });

    // 11. Refresh Tables Click Handlers
    document.getElementById("btn-refresh-active").addEventListener("click", loadHotspotActiveUsers);
    document.getElementById("btn-refresh-users").addEventListener("click", loadHotspotUsers);
    document.getElementById("btn-refresh-profiles").addEventListener("click", loadHotspotProfiles);
    document.getElementById("btn-refresh-dhcp").addEventListener("click", loadDHCPLeases);
    document.getElementById("btn-refresh-ppp").addEventListener("click", loadPPPConnections);
    document.getElementById("btn-refresh-logs").addEventListener("click", loadSystemLogs);

    // 12. Create Hotspot User Actions
    document.getElementById("create-user-form").addEventListener("submit", handleCreateHotspotUser);
    document.getElementById("btn-generate-rand").addEventListener("click", generateRandomCredentials);

    // 13. Close Ticket Voucher Modal
    document.getElementById("btn-close-ticket").addEventListener("click", closeTicketModal);
    document.getElementById("btn-print-ticket").addEventListener("click", printTicket);

    // 14. Diagnostic Ping Submit Form
    document.getElementById("ping-form").addEventListener("submit", runPingTest);

    // 15. Power Management Actions
    document.getElementById("btn-reboot").addEventListener("click", () => openPowerConfirm("reboot"));
    document.getElementById("btn-shutdown").addEventListener("click", () => openPowerConfirm("shutdown"));
    document.getElementById("btn-confirm-cancel").addEventListener("click", closePowerConfirm);
    document.getElementById("btn-confirm-execute").addEventListener("click", executePowerAction);

    // 16. Console Logs view clear console
    document.getElementById("btn-clear-logs-view").addEventListener("click", () => {
        document.getElementById("logs-console").innerText = "";
    });

    // 17. Active interface change event listener
    document.getElementById("interface-select").addEventListener("change", () => {
        // Reset speed metrics and restart poller
        lastRxBytes = 0;
        lastTxBytes = 0;
        lastTime = Date.now();
        chartRxData = Array(15).fill(0);
        chartTxData = Array(15).fill(0);
        if (trafficChart) {
            trafficChart.data.datasets[0].data = chartRxData;
            trafficChart.data.datasets[1].data = chartTxData;
            trafficChart.update();
        }
    });
}

// --------------------------------------------------------------------------
// 18. FORMATTER UTILITY HELPERS
// --------------------------------------------------------------------------
function formatBytes(bytes) {
    if (bytes === 0) return '0 B';
    const k = 1024;
    const dm = 2;
    const sizes = ['B', 'KB', 'MB', 'GB', 'TB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}

function formatSpeed(bytesPerSec) {
    const kbps = (bytesPerSec * 8) / 1000;
    if (kbps >= 1000) {
        return (kbps / 1000).toFixed(2) + " Mbps";
    }
    return kbps.toFixed(2) + " Kbps";
}

function escapeHtml(string) {
    const matchHtmlRegExp = /["'&<>]/;
    const str = '' + string;
    const match = matchHtmlRegExp.exec(str);

    if (!match) {
        return str;
    }

    let escape;
    let html = '';
    let index = 0;
    let lastIndex = 0;

    for (index = match.index; index < str.length; index++) {
        switch (str.charCodeAt(index)) {
            case 34: // "
                escape = '&quot;';
                break;
            case 38: // &
                escape = '&amp;';
                break;
            case 39: // '
                escape = '&#39;';
                break;
            case 60: // <
                escape = '&lt;';
                break;
            case 62: // >
                escape = '&gt;';
                break;
            default:
                continue;
        }

        if (lastIndex !== index) {
            html += str.substring(lastIndex, index);
        }

        lastIndex = index + 1;
        html += escape;
    }

    return lastIndex !== index
        ? html + str.substring(lastIndex, index)
        : html;
}
