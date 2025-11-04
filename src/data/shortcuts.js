// 导入各个软件的快捷键数据
import ideaData from "./shortcuts/idea.json";
import vscodeData from "./shortcuts/vscode.json";
import chromeData from "./shortcuts/chrome.json";
import systemData from "./shortcuts/system.json";
import wordData from "./shortcuts/word.json";
import excelData from "./shortcuts/excel.json";
import powerpointData from "./shortcuts/powerpoint.json";
import edgeData from "./shortcuts/edge.json";
import firefoxData from "./shortcuts/firefox.json";
import photoshopData from "./shortcuts/photoshop.json";
import illustratorData from "./shortcuts/illustrator.json";
import premiereData from "./shortcuts/premiere.json";
import aftereffectsData from "./shortcuts/aftereffects.json";
import figmaData from "./shortcuts/figma.json";
import pycharmData from "./shortcuts/pycharm.json";
import terminalData from "./shortcuts/terminal.json";
import gitData from "./shortcuts/git.json";
import dockerData from "./shortcuts/docker.json";

// 使用 import.meta.glob 动态导入所有图标
const icons = import.meta.glob("../assets/icons/*.svg", {
  eager: true,
  as: "url",
});
const pngIcons = import.meta.glob("../assets/icons/*.png", {
  eager: true,
  as: "url",
});
Object.assign(icons, pngIcons);

// 快捷键数据结构：软件 -> 系统 -> 具体快捷键
export const shortcutsData = {
  idea: ideaData,
  vscode: vscodeData,
  chrome: chromeData,
  system: systemData,
  word: wordData,
  excel: excelData,
  powerpoint: powerpointData,
  edge: edgeData,
  firefox: firefoxData,
  photoshop: photoshopData,
  illustrator: illustratorData,
  premiere: premiereData,
  aftereffects: aftereffectsData,
  figma: figmaData,
  pycharm: pycharmData,
  terminal: terminalData,
  git: gitData,
  docker: dockerData,
};

// 获取所有软件列表
export const getSoftwareList = () => {
  return Object.keys(shortcutsData).map((key) => {
    const software = shortcutsData[key];
    const iconPath = `../assets/icons${software.icon}`;
    return {
      id: key,
      ...software,
      icon: icons[iconPath],
    };
  });
};

// 根据软件ID获取软件信息
export const getSoftwareById = (id) => {
  const software = shortcutsData[id];
  if (!software) return null;
  const iconPath = `../assets/icons${software.icon}`;
  return {
    ...software,
    icon: icons[iconPath],
  };
};

// 获取软件的系统列表
export const getSystemsBy软件Id = (softwareId) => {
  const software = getSoftwareById(softwareId);
  if (!software) return [];

  return Object.keys(software.systems).map((key) => ({
    id: key,
    ...software.systems[key],
  }));
};
