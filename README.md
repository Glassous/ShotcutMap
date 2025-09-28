# ShortcutMap - 快捷键仓库

一个现代化的快捷键管理应用，帮助用户快速查找和学习各种软件的键盘快捷键，提高工作效率。

## 🌟 项目特色

- **现代化界面** - 基于Vue 3 + Vite构建，响应式设计
- **多主题支持** - 内置多种主题，支持自动跟随系统主题
- **跨平台支持** - 支持Windows、macOS等不同操作系统的快捷键
- **智能搜索** - 支持快捷键和功能描述的模糊搜索
- **分类管理** - 按软件类别组织，便于查找
- **美观交互** - 使用DaisyUI组件库，提供优秀的用户体验

## 🚀 技术栈

- **前端框架**: Vue 3 (Composition API)
- **构建工具**: Vite
- **样式框架**: Tailwind CSS + DaisyUI
- **路由管理**: Vue Router 4
- **图标**: SVG图标
- **字体**: Inter字体家族

## 📦 项目结构

```
shortcutmap/
├── public/                 # 静态资源
│   ├── ShortcutMap.png     # 应用图标
│   └── software-icons/     # 软件图标
├── src/
│   ├── components/         # 组件目录
│   │   ├── WelcomeSection.vue    # 欢迎区域组件
│   │   ├── SoftwareGrid.vue      # 软件网格组件
│   │   └── FeedbackForm.vue      # 反馈表单组件
│   ├── views/              # 页面组件
│   │   ├── Home.vue              # 首页
│   │   └── SoftwareDetail.vue   # 软件详情页
│   ├── data/               # 数据目录
│   │   └── shortcuts.js          # 快捷键数据
│   ├── router/            # 路由配置
│   │   └── index.js              # 路由定义
│   ├── main.js            # 应用入口
│   └── style.css          # 全局样式
├── package.json           # 项目配置
├── vite.config.js        # Vite配置
├── tailwind.config.js    # Tailwind配置
└── postcss.config.js     # PostCSS配置
```

## 🛠️ 安装与运行

### 环境要求

- Node.js 16.0 或更高版本
- npm 或 yarn 包管理器

### 安装依赖

```bash
npm install
# 或
yarn install
```

### 开发模式

```bash
npm run dev
# 或
yarn dev
```

应用将在 `http://localhost:5173` 启动

### 构建生产版本

```bash
npm run build
# 或
yarn build
```

### 预览生产版本

```bash
npm run preview
# 或
yarn preview
```

## 📱 功能特性

### 首页功能
- **欢迎区域**: 显示软件数量和快捷键统计
- **软件网格**: 按分类展示所有支持的软件
- **主题切换**: 支持亮色/暗色/自动主题
- **响应式设计**: 适配桌面和移动设备

### 软件详情页
- **系统切换**: 支持不同操作系统的快捷键显示
- **分类展示**: 按功能分类显示快捷键
- **搜索功能**: 实时搜索快捷键和功能描述
- **美观键盘**: 自定义键盘按键样式
- **官方文档链接**: 快速访问软件官方文档

### 用户体验
- **滚动记忆**: 返回首页时保持之前的滚动位置
- **平滑动画**: 丰富的交互动画效果
- **键盘友好**: 支持键盘导航和操作

## 🎨 主题系统

项目内置了丰富的主题选择：

- **默认主题**: 自定义的light/dark主题
- **DaisyUI主题**: 包含30+种预设主题
- **自动主题**: 跟随系统主题自动切换

## 🔧 配置说明

### Tailwind CSS 配置
项目使用自定义的Tailwind配置，集成了DaisyUI组件库。

### Vite 配置
使用Vite作为构建工具，支持热重载和快速构建。

### 路由配置
使用Vue Router 4进行单页面应用路由管理。

## 🤝 贡献指南

欢迎贡献代码！请遵循以下步骤：

1. Fork 项目
2. 创建功能分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 开启 Pull Request

## 📄 许可证

本项目基于 MIT 许可证开源 - 查看 [LICENSE](LICENSE) 文件了解详情。

## 🙏 致谢

- [Vue.js](https://vuejs.org/) - 渐进式JavaScript框架
- [Vite](https://vitejs.dev/) - 下一代前端构建工具
- [Tailwind CSS](https://tailwindcss.com/) - 实用优先的CSS框架
- [DaisyUI](https://daisyui.com/) - Tailwind CSS组件库
- [Inter字体](https://rsms.me/inter/) - 优秀的开源字体

## 📞 联系方式

如有问题或建议，请通过以下方式联系：

- 项目GitHub: [ShortcutMap](https://github.com/Glassous/ShotcutMap)
- 提交Issue: [GitHub Issues](https://github.com/Glassous/ShotcutMap/issues)

---

**ShortcutMap** - 让快捷键查询变得简单高效！ 🚀