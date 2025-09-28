// 导入各个软件的快捷键数据
import ideaData from './shortcuts/idea.json';
import vscodeData from './shortcuts/vscode.json';
import chromeData from './shortcuts/chrome.json';

// 快捷键数据结构：软件 -> 系统 -> 具体快捷键
export const shortcutsData = {
  idea: ideaData,
  vscode: vscodeData,
  chrome: chromeData
};

// 获取所有软件列表
export const getSoftwareList = () => {
  return Object.keys(shortcutsData).map(key => ({
    id: key,
    ...shortcutsData[key]
  }));
};

// 根据软件ID获取软件信息
export const getSoftwareById = (id) => {
  return shortcutsData[id] || null;
};

// 获取软件的系统列表
export const getSystemsBy软件Id = (softwareId) => {
  const software = getSoftwareById(softwareId);
  if (!software) return [];
  
  return Object.keys(software.systems).map(key => ({
    id: key,
    ...software.systems[key]
  }));
};