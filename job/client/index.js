const { app, BrowserWindow } = require('electron');
const path = require('path');

require('dotenv').config();

function createWindow () {
    const window = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            // Api it is
            preload: path.join(__dirname, '/src/preload.js')
        }
    });
    window.loadFile(path.join(__dirname, '/src/login/index.html'));
    console.log("Preload path:", path.join(__dirname, '/src/preload.js'));
}

app.whenReady().then(createWindow);