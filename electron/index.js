const { app, BrowserWindow } = require("electron");
const isDev = require("electron-is-dev");
const path = require("path");

// Função de criação da janela
let window;
function createWindow() {
  window = new BrowserWindow({
    width: 1280,
    height: 720,
    minWidth: 640,
    minHeight: 480,
    show: false
  });

  // Maximizar a tela antes de mostrá-la
  window.maximize();
  window.show();

  // Carregar localhost na versão de desenvolvimento
  // e o arquivo HTML na versão de produção
  window.loadURL(isDev ? "http://localhost:3000" : `file://${path.join(__dirname, "../build/index.html")}`);
}

// Execução do createWindow
app.on("ready", createWindow);

// Código boilerplate para sistemas operacionais
// Windows e Linux
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});

// MacOS
app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) createWindow();
});
