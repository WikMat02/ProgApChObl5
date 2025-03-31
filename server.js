const express = require('express');
const os = require('os');

const app = express();
const PORT = 8080;

app.get('/', (req, res) => {
    const ipAddress = Object.values(os.networkInterfaces())
        .flat()
        .filter((iface) => iface.family === 'IPv4' && !iface.internal)
        .map((iface) => iface.address)[0] || 'Unknown';

    const hostname = os.hostname();
    const version = process.env.APP_VERSION || 'unknown';

    res.send(`
        <h1>Server Information - Lab5</h1>
        <p><strong>IP Address:</strong> ${ipAddress}</p>
        <p><strong>Hostname:</strong> ${hostname}</p>
        <p><strong>Application Version:</strong> ${version}</p>
    `);
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
