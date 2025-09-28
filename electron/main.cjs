const { app, BrowserWindow, protocol } = require('electron')
const path = require('path')
const { readFile } = require('fs')
const { URL } = require('url')
const isDev = process.env.NODE_ENV === 'development'

function createWindow() {
  // 创建浏览器窗口
  const mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      enableRemoteModule: false,
      preload: path.join(__dirname, 'preload.cjs'),
      webSecurity: false // 允许加载本地文件
    },
    icon: path.join(__dirname, '../src/assets/icons/ShortcutMap.png'),
    show: false,
    titleBarStyle: 'default'
  })

  // 加载应用
  if (isDev) {
    mainWindow.loadURL('http://localhost:5173')
    // 开发环境下打开开发者工具
    mainWindow.webContents.openDevTools()
  } else {
    mainWindow.loadFile(path.join(__dirname, '../dist/index.html'))
  }

  // 窗口准备好后显示
  mainWindow.once('ready-to-show', () => {
    mainWindow.show()
  })

  // 处理窗口关闭
  mainWindow.on('closed', () => {
    mainWindow = null
  })
}

// 当 Electron 完成初始化并准备创建浏览器窗口时调用此方法
app.whenReady().then(() => {
  // 注册自定义协议来处理静态文件
  protocol.registerFileProtocol('file', (request, callback) => {
    const pathname = decodeURI(request.url.replace('file:///', ''))
    callback(pathname)
  })
  
  createWindow()
})

// 当所有窗口都关闭时退出应用
app.on('window-all-closed', () => {
  // 在 macOS 上，应用和菜单栏通常会保持活动状态，直到用户使用 Cmd + Q 显式退出
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  // 在 macOS 上，当单击 dock 图标并且没有其他窗口打开时，通常会在应用中重新创建一个窗口
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})

// 在此文件中，您可以包含应用程序的其余特定主进程代码
// 您也可以将它们放在单独的文件中并在此处引入