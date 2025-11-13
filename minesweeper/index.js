const { app, BrowserWindow } = require('electron');
const path = require('path');

const ROWS = 20;
const COLS = 20;
const TILE_SIZE = 30;
const GAP = 2;

function createWindow() {
  const width = COLS * TILE_SIZE + (COLS - 1) * GAP + 50;
  const height = ROWS * TILE_SIZE + (ROWS - 1) * GAP + 80;

  const win = new BrowserWindow({
    width: width,
    height: height,
    resizable: false,   // prevent resizing
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  });

  win.loadFile('index.html');
}

app.whenReady().then(createWindow);
