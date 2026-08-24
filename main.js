const { app, BrowserWindow } = require('electron');

function createWindow() {
  const win = new BrowserWindow({
    width: 450,
    height: 615
  });

  win.loadFile('index.html');
}

app.whenReady().then(createWindow);