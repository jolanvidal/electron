const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow () {
    const window = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            // Api it is
            preload: path.join(__dirname, '/src/api.js')
        }
    });
    window.loadFile(path.join(__dirname, '/src/weather/index.html'));
}

app.whenReady().then(createWindow);