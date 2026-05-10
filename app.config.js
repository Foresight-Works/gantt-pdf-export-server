
const path = require('path');

const logPath = process.pkg
    ? path.join(process.execPath, '..', 'log')
    : path.join(__dirname, 'log');

const config = {
    // HTTP server port
    "http": 9090,

    // HTTPS server port
    "https": 9091,

    "websocket": true,

    // CORS headers are always set, this config defined value for Access-Control-Allow-Origin header
    "cors": "*",

    // Maximum size of the uploaded data
    "maximum": "300mb",

    // Path to static resources to be served. See readme.md for details
    "resources": "/resource",

    // True to pass `--no-sandbox` flag to the chromium
    "no-sandbox": true,

    // True to disable web security (CORS, CSP, etc)
    "disable-web-security": false,

    // Maximum amount of parallel puppeteer instances to run
    "max-workers": 5,

    // Log level. Possible values: error, warn, info, verbose
    "level": "verbose",
    "outputDir": '/var/www/html/pdf-output',

    // Pass true to wait for page load only (fonts may be missing). Reduces page loading time by at least .5s
    "quick": false,

    // Request timeout time in seconds
    "timeout": 300,

    // Configuration options for logger
    // Set `false` to output log to the console
    "logger": {
        "rotate": {
            "dirname": logPath,
            "filename": "export-server-%DATE%.log",
            "datePattern": "YYYY-MM-DD",
            "maxSize": "20mb",
            "maxFiles": "30d"
        }
    }
};

module.exports = { config };

