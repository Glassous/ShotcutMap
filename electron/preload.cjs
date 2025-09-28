const { contextBridge, ipcRenderer } = require('electron')

// 暴露受保护的方法，允许渲染进程使用 ipcRenderer，而不会暴露整个对象
contextBridge.exposeInMainWorld('electronAPI', {
  // 可以在这里添加需要暴露给渲染进程的API
  platform: process.platform,
  versions: process.versions
})

// 所有的 Node.js API 都可以在预加载进程中使用
// 它拥有与Chrome扩展一样的沙盒
window.addEventListener('DOMContentLoaded', () => {
  const replaceText = (selector, text) => {
    const element = document.getElementById(selector)
    if (element) element.innerText = text
  }

  for (const dependency of ['chrome', 'node', 'electron']) {
    replaceText(`${dependency}-version`, process.versions[dependency])
  }
})