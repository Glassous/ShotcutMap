// 快捷键数据结构：软件 -> 系统 -> 具体快捷键
export const shortcutsData = {
  idea: {
    name: 'IntelliJ IDEA',
    icon: '💡',
    description: '强大的Java集成开发环境',
    officialDocs: 'https://www.jetbrains.com/help/idea/mastering-keyboard-shortcuts.html',
    systems: {
      windows: {
        name: 'Windows',
        shortcuts: [
          {
            category: '编辑',
            items: [
              { keys: 'Ctrl + D', description: '复制当前行' },
              { keys: 'Ctrl + Y', description: '删除当前行' },
              { keys: 'Ctrl + /', description: '注释/取消注释' },
              { keys: 'Ctrl + Shift + /', description: '块注释' },
              { keys: 'Alt + Enter', description: '显示意图操作' },
              { keys: 'Ctrl + Alt + L', description: '格式化代码' },
              { keys: 'Ctrl + X', description: '剪切行' },
              { keys: 'Ctrl + C', description: '复制行' },
              { keys: 'Ctrl + V', description: '粘贴' },
              { keys: 'Ctrl + Z', description: '撤销' },
              { keys: 'Ctrl + Shift + Z', description: '重做' },
              { keys: 'Shift + Alt + ↓', description: '向下复制行' },
              { keys: 'Shift + Alt + ↑', description: '向上复制行' },
              { keys: 'Alt + ↓', description: '向下移动行' },
              { keys: 'Alt + ↑', description: '向上移动行' }
            ]
          },
          {
            category: '导航',
            items: [
              { keys: 'Ctrl + N', description: '查找类' },
              { keys: 'Ctrl + Shift + N', description: '查找文件' },
              { keys: 'Ctrl + E', description: '最近文件' },
              { keys: 'Ctrl + B', description: '跳转到声明' },
              { keys: 'Alt + F7', description: '查找用法' },
              { keys: 'Ctrl + F12', description: '文件结构' },
              { keys: 'Ctrl + G', description: '跳转到行' },
              { keys: 'Ctrl + F', description: '查找' },
              { keys: 'Ctrl + R', description: '替换' },
              { keys: 'Ctrl + Shift + F', description: '全局查找' },
              { keys: 'Ctrl + Shift + R', description: '全局替换' },
              { keys: 'Alt + ←', description: '后退' },
              { keys: 'Alt + →', description: '前进' },
              { keys: 'Ctrl + Alt + ←', description: '上次编辑位置' }
            ]
          },
          {
            category: '调试',
            items: [
              { keys: 'F9', description: '恢复程序' },
              { keys: 'F8', description: '单步跳过' },
              { keys: 'F7', description: '单步进入' },
              { keys: 'Shift + F8', description: '单步跳出' },
              { keys: 'Ctrl + F8', description: '切换断点' },
              { keys: 'Ctrl + Shift + F8', description: '查看断点' },
              { keys: 'Alt + F9', description: '运行到光标' },
              { keys: 'Alt + F8', description: '计算表达式' }
            ]
          },
          {
            category: '重构',
            items: [
              { keys: 'Shift + F6', description: '重命名' },
              { keys: 'Ctrl + Alt + M', description: '提取方法' },
              { keys: 'Ctrl + Alt + V', description: '提取变量' },
              { keys: 'Ctrl + Alt + F', description: '提取字段' },
              { keys: 'Ctrl + Alt + C', description: '提取常量' },
              { keys: 'Ctrl + Alt + P', description: '提取参数' },
              { keys: 'Ctrl + Alt + N', description: '内联' }
            ]
          },
          {
            category: '运行',
            items: [
              { keys: 'Shift + F10', description: '运行' },
              { keys: 'Shift + F9', description: '调试' },
              { keys: 'Ctrl + Shift + F10', description: '运行上下文配置' },
              { keys: 'Ctrl + Shift + F9', description: '调试上下文配置' },
              { keys: 'Ctrl + F2', description: '停止' }
            ]
          }
        ]
      },
      mac: {
        name: 'macOS',
        shortcuts: [
          {
            category: '编辑',
            items: [
              { keys: 'Cmd + D', description: '复制当前行' },
              { keys: 'Cmd + Backspace', description: '删除当前行' },
              { keys: 'Cmd + /', description: '注释/取消注释' },
              { keys: 'Cmd + Shift + /', description: '块注释' },
              { keys: 'Option + Enter', description: '显示意图操作' },
              { keys: 'Cmd + Option + L', description: '格式化代码' },
              { keys: 'Cmd + X', description: '剪切行' },
              { keys: 'Cmd + C', description: '复制行' },
              { keys: 'Cmd + V', description: '粘贴' },
              { keys: 'Cmd + Z', description: '撤销' },
              { keys: 'Cmd + Shift + Z', description: '重做' },
              { keys: 'Shift + Option + ↓', description: '向下复制行' },
              { keys: 'Shift + Option + ↑', description: '向上复制行' },
              { keys: 'Option + ↓', description: '向下移动行' },
              { keys: 'Option + ↑', description: '向上移动行' }
            ]
          },
          {
            category: '导航',
            items: [
              { keys: 'Cmd + O', description: '查找类' },
              { keys: 'Cmd + Shift + O', description: '查找文件' },
              { keys: 'Cmd + E', description: '最近文件' },
              { keys: 'Cmd + B', description: '跳转到声明' },
              { keys: 'Option + F7', description: '查找用法' },
              { keys: 'Cmd + F12', description: '文件结构' },
              { keys: 'Cmd + L', description: '跳转到行' },
              { keys: 'Cmd + F', description: '查找' },
              { keys: 'Cmd + R', description: '替换' },
              { keys: 'Cmd + Shift + F', description: '全局查找' },
              { keys: 'Cmd + Shift + R', description: '全局替换' },
              { keys: 'Cmd + [', description: '后退' },
              { keys: 'Cmd + ]', description: '前进' },
              { keys: 'Cmd + Option + ←', description: '上次编辑位置' }
            ]
          },
          {
            category: '调试',
            items: [
              { keys: 'F9', description: '恢复程序' },
              { keys: 'F8', description: '单步跳过' },
              { keys: 'F7', description: '单步进入' },
              { keys: 'Shift + F8', description: '单步跳出' },
              { keys: 'Cmd + F8', description: '切换断点' },
              { keys: 'Cmd + Shift + F8', description: '查看断点' },
              { keys: 'Option + F9', description: '运行到光标' },
              { keys: 'Option + F8', description: '计算表达式' }
            ]
          },
          {
            category: '重构',
            items: [
              { keys: 'Shift + F6', description: '重命名' },
              { keys: 'Cmd + Option + M', description: '提取方法' },
              { keys: 'Cmd + Option + V', description: '提取变量' },
              { keys: 'Cmd + Option + F', description: '提取字段' },
              { keys: 'Cmd + Option + C', description: '提取常量' },
              { keys: 'Cmd + Option + P', description: '提取参数' },
              { keys: 'Cmd + Option + N', description: '内联' }
            ]
          },
          {
            category: '运行',
            items: [
              { keys: 'Ctrl + R', description: '运行' },
              { keys: 'Ctrl + D', description: '调试' },
              { keys: 'Ctrl + Shift + R', description: '运行上下文配置' },
              { keys: 'Ctrl + Shift + D', description: '调试上下文配置' },
              { keys: 'Cmd + F2', description: '停止' }
            ]
          }
        ]
      },
      linux: {
        name: 'Linux',
        shortcuts: [
          {
            category: '编辑',
            items: [
              { keys: 'Ctrl + D', description: '复制当前行' },
              { keys: 'Ctrl + Y', description: '删除当前行' },
              { keys: 'Ctrl + /', description: '注释/取消注释' },
              { keys: 'Ctrl + Shift + /', description: '块注释' },
              { keys: 'Alt + Enter', description: '显示意图操作' },
              { keys: 'Ctrl + Alt + L', description: '格式化代码' },
              { keys: 'Ctrl + X', description: '剪切行' },
              { keys: 'Ctrl + C', description: '复制行' },
              { keys: 'Ctrl + V', description: '粘贴' },
              { keys: 'Ctrl + Z', description: '撤销' },
              { keys: 'Ctrl + Shift + Z', description: '重做' },
              { keys: 'Shift + Alt + ↓', description: '向下复制行' },
              { keys: 'Shift + Alt + ↑', description: '向上复制行' },
              { keys: 'Alt + ↓', description: '向下移动行' },
              { keys: 'Alt + ↑', description: '向上移动行' }
            ]
          },
          {
            category: '导航',
            items: [
              { keys: 'Ctrl + N', description: '查找类' },
              { keys: 'Ctrl + Shift + N', description: '查找文件' },
              { keys: 'Ctrl + E', description: '最近文件' },
              { keys: 'Ctrl + B', description: '跳转到声明' },
              { keys: 'Alt + F7', description: '查找用法' },
              { keys: 'Ctrl + F12', description: '文件结构' },
              { keys: 'Ctrl + G', description: '跳转到行' },
              { keys: 'Ctrl + F', description: '查找' },
              { keys: 'Ctrl + R', description: '替换' },
              { keys: 'Ctrl + Shift + F', description: '全局查找' },
              { keys: 'Ctrl + Shift + R', description: '全局替换' },
              { keys: 'Alt + ←', description: '后退' },
              { keys: 'Alt + →', description: '前进' },
              { keys: 'Ctrl + Alt + ←', description: '上次编辑位置' }
            ]
          },
          {
            category: '调试',
            items: [
              { keys: 'F9', description: '恢复程序' },
              { keys: 'F8', description: '单步跳过' },
              { keys: 'F7', description: '单步进入' },
              { keys: 'Shift + F8', description: '单步跳出' },
              { keys: 'Ctrl + F8', description: '切换断点' },
              { keys: 'Ctrl + Shift + F8', description: '查看断点' },
              { keys: 'Alt + F9', description: '运行到光标' },
              { keys: 'Alt + F8', description: '计算表达式' }
            ]
          },
          {
            category: '重构',
            items: [
              { keys: 'Shift + F6', description: '重命名' },
              { keys: 'Ctrl + Alt + M', description: '提取方法' },
              { keys: 'Ctrl + Alt + V', description: '提取变量' },
              { keys: 'Ctrl + Alt + F', description: '提取字段' },
              { keys: 'Ctrl + Alt + C', description: '提取常量' },
              { keys: 'Ctrl + Alt + P', description: '提取参数' },
              { keys: 'Ctrl + Alt + N', description: '内联' }
            ]
          },
          {
            category: '运行',
            items: [
              { keys: 'Shift + F10', description: '运行' },
              { keys: 'Shift + F9', description: '调试' },
              { keys: 'Ctrl + Shift + F10', description: '运行上下文配置' },
              { keys: 'Ctrl + Shift + F9', description: '调试上下文配置' },
              { keys: 'Ctrl + F2', description: '停止' }
            ]
          }
        ]
      }
    }
  },
  vscode: {
    name: 'Visual Studio Code',
    icon: '📝',
    description: '轻量级代码编辑器',
    officialDocs: 'https://code.visualstudio.com/docs/getstarted/keybindings',
    systems: {
      windows: {
        name: 'Windows',
        shortcuts: [
          {
            category: '编辑',
            items: [
              { keys: 'Ctrl + C', description: '复制行/选择' },
              { keys: 'Ctrl + X', description: '剪切行/选择' },
              { keys: 'Ctrl + V', description: '粘贴' },
              { keys: 'Ctrl + Z', description: '撤销' },
              { keys: 'Ctrl + Y', description: '重做' },
              { keys: 'Shift + Alt + ↓', description: '向下复制行' },
              { keys: 'Shift + Alt + ↑', description: '向上复制行' },
              { keys: 'Alt + ↓', description: '向下移动行' },
              { keys: 'Alt + ↑', description: '向上移动行' },
              { keys: 'Ctrl + Shift + K', description: '删除行' },
              { keys: 'Ctrl + Enter', description: '在下方插入行' },
              { keys: 'Ctrl + Shift + Enter', description: '在上方插入行' },
              { keys: 'Ctrl + ]', description: '增加缩进' },
              { keys: 'Ctrl + [', description: '减少缩进' },
              { keys: 'Ctrl + /', description: '切换行注释' },
              { keys: 'Shift + Alt + A', description: '切换块注释' },
              { keys: 'Ctrl + K Ctrl + F', description: '格式化选择' },
              { keys: 'Shift + Alt + F', description: '格式化文档' }
            ]
          },
          {
            category: '导航',
            items: [
              { keys: 'Ctrl + P', description: '快速打开文件' },
              { keys: 'Ctrl + Shift + P', description: '命令面板' },
              { keys: 'Ctrl + G', description: '跳转到行' },
              { keys: 'Ctrl + F', description: '查找' },
              { keys: 'Ctrl + H', description: '替换' },
              { keys: 'Ctrl + Shift + F', description: '全局查找' },
              { keys: 'Ctrl + Shift + H', description: '全局替换' },
              { keys: 'F12', description: '跳转到定义' },
              { keys: 'Alt + F12', description: '查看定义' },
              { keys: 'Shift + F12', description: '查找所有引用' },
              { keys: 'Ctrl + T', description: '显示所有符号' },
              { keys: 'Ctrl + Shift + O', description: '跳转到符号' },
              { keys: 'Alt + ←', description: '后退' },
              { keys: 'Alt + →', description: '前进' },
              { keys: 'Ctrl + M', description: '切换Tab键移动焦点' }
            ]
          },
          {
            category: '窗口管理',
            items: [
              { keys: 'Ctrl + N', description: '新建文件' },
              { keys: 'Ctrl + O', description: '打开文件' },
              { keys: 'Ctrl + S', description: '保存' },
              { keys: 'Ctrl + Shift + S', description: '另存为' },
              { keys: 'Ctrl + K S', description: '保存所有' },
              { keys: 'Ctrl + W', description: '关闭编辑器' },
              { keys: 'Ctrl + K Ctrl + W', description: '关闭所有编辑器' },
              { keys: 'Ctrl + Shift + T', description: '重新打开关闭的编辑器' },
              { keys: 'Ctrl + Tab', description: '切换编辑器' },
              { keys: 'Ctrl + \\', description: '拆分编辑器' },
              { keys: 'Ctrl + 1', description: '聚焦第一个编辑器组' },
              { keys: 'Ctrl + 2', description: '聚焦第二个编辑器组' },
              { keys: 'Ctrl + 3', description: '聚焦第三个编辑器组' }
            ]
          },
          {
            category: '调试',
            items: [
              { keys: 'F5', description: '开始调试' },
              { keys: 'Ctrl + F5', description: '运行而不调试' },
              { keys: 'F9', description: '切换断点' },
              { keys: 'F10', description: '单步跳过' },
              { keys: 'F11', description: '单步进入' },
              { keys: 'Shift + F11', description: '单步跳出' },
              { keys: 'Shift + F5', description: '停止调试' }
            ]
          },
          {
            category: '集成终端',
            items: [
              { keys: 'Ctrl + `', description: '显示集成终端' },
              { keys: 'Ctrl + Shift + `', description: '创建新终端' },
              { keys: 'Ctrl + Shift + C', description: '复制终端选择' },
              { keys: 'Ctrl + Shift + V', description: '粘贴到活动终端' }
            ]
          }
        ]
      },
      mac: {
        name: 'macOS',
        shortcuts: [
          {
            category: '编辑',
            items: [
              { keys: 'Cmd + C', description: '复制行/选择' },
              { keys: 'Cmd + X', description: '剪切行/选择' },
              { keys: 'Cmd + V', description: '粘贴' },
              { keys: 'Cmd + Z', description: '撤销' },
              { keys: 'Shift + Cmd + Z', description: '重做' },
              { keys: 'Shift + Option + ↓', description: '向下复制行' },
              { keys: 'Shift + Option + ↑', description: '向上复制行' },
              { keys: 'Option + ↓', description: '向下移动行' },
              { keys: 'Option + ↑', description: '向上移动行' },
              { keys: 'Shift + Cmd + K', description: '删除行' },
              { keys: 'Cmd + Enter', description: '在下方插入行' },
              { keys: 'Shift + Cmd + Enter', description: '在上方插入行' },
              { keys: 'Cmd + ]', description: '增加缩进' },
              { keys: 'Cmd + [', description: '减少缩进' },
              { keys: 'Cmd + /', description: '切换行注释' },
              { keys: 'Shift + Option + A', description: '切换块注释' },
              { keys: 'Cmd + K Cmd + F', description: '格式化选择' },
              { keys: 'Shift + Option + F', description: '格式化文档' }
            ]
          },
          {
            category: '导航',
            items: [
              { keys: 'Cmd + P', description: '快速打开文件' },
              { keys: 'Shift + Cmd + P', description: '命令面板' },
              { keys: 'Ctrl + G', description: '跳转到行' },
              { keys: 'Cmd + F', description: '查找' },
              { keys: 'Option + Cmd + F', description: '替换' },
              { keys: 'Shift + Cmd + F', description: '全局查找' },
              { keys: 'Shift + Cmd + H', description: '全局替换' },
              { keys: 'F12', description: '跳转到定义' },
              { keys: 'Option + F12', description: '查看定义' },
              { keys: 'Shift + F12', description: '查找所有引用' },
              { keys: 'Cmd + T', description: '显示所有符号' },
              { keys: 'Shift + Cmd + O', description: '跳转到符号' },
              { keys: 'Ctrl + -', description: '后退' },
              { keys: 'Ctrl + Shift + -', description: '前进' }
            ]
          },
          {
            category: '窗口管理',
            items: [
              { keys: 'Cmd + N', description: '新建文件' },
              { keys: 'Cmd + O', description: '打开文件' },
              { keys: 'Cmd + S', description: '保存' },
              { keys: 'Shift + Cmd + S', description: '另存为' },
              { keys: 'Option + Cmd + S', description: '保存所有' },
              { keys: 'Cmd + W', description: '关闭编辑器' },
              { keys: 'Cmd + K Cmd + W', description: '关闭所有编辑器' },
              { keys: 'Shift + Cmd + T', description: '重新打开关闭的编辑器' },
              { keys: 'Ctrl + Tab', description: '切换编辑器' },
              { keys: 'Cmd + \\', description: '拆分编辑器' },
              { keys: 'Cmd + 1', description: '聚焦第一个编辑器组' },
              { keys: 'Cmd + 2', description: '聚焦第二个编辑器组' },
              { keys: 'Cmd + 3', description: '聚焦第三个编辑器组' }
            ]
          },
          {
            category: '调试',
            items: [
              { keys: 'F5', description: '开始调试' },
              { keys: 'Cmd + F5', description: '运行而不调试' },
              { keys: 'F9', description: '切换断点' },
              { keys: 'F10', description: '单步跳过' },
              { keys: 'F11', description: '单步进入' },
              { keys: 'Shift + F11', description: '单步跳出' },
              { keys: 'Shift + F5', description: '停止调试' }
            ]
          },
          {
            category: '集成终端',
            items: [
              { keys: 'Ctrl + `', description: '显示集成终端' },
              { keys: 'Ctrl + Shift + `', description: '创建新终端' },
              { keys: 'Cmd + C', description: '复制终端选择' },
              { keys: 'Cmd + V', description: '粘贴到活动终端' }
            ]
          }
        ]
      },
      linux: {
        name: 'Linux',
        shortcuts: [
          {
            category: '编辑',
            items: [
              { keys: 'Ctrl + C', description: '复制行/选择' },
              { keys: 'Ctrl + X', description: '剪切行/选择' },
              { keys: 'Ctrl + V', description: '粘贴' },
              { keys: 'Ctrl + Z', description: '撤销' },
              { keys: 'Ctrl + Y', description: '重做' },
              { keys: 'Shift + Alt + ↓', description: '向下复制行' },
              { keys: 'Shift + Alt + ↑', description: '向上复制行' },
              { keys: 'Alt + ↓', description: '向下移动行' },
              { keys: 'Alt + ↑', description: '向上移动行' },
              { keys: 'Ctrl + Shift + K', description: '删除行' },
              { keys: 'Ctrl + Enter', description: '在下方插入行' },
              { keys: 'Ctrl + Shift + Enter', description: '在上方插入行' },
              { keys: 'Ctrl + ]', description: '增加缩进' },
              { keys: 'Ctrl + [', description: '减少缩进' },
              { keys: 'Ctrl + /', description: '切换行注释' },
              { keys: 'Shift + Alt + A', description: '切换块注释' },
              { keys: 'Ctrl + K Ctrl + F', description: '格式化选择' },
              { keys: 'Shift + Alt + F', description: '格式化文档' }
            ]
          },
          {
            category: '导航',
            items: [
              { keys: 'Ctrl + P', description: '快速打开文件' },
              { keys: 'Ctrl + Shift + P', description: '命令面板' },
              { keys: 'Ctrl + G', description: '跳转到行' },
              { keys: 'Ctrl + F', description: '查找' },
              { keys: 'Ctrl + H', description: '替换' },
              { keys: 'Ctrl + Shift + F', description: '全局查找' },
              { keys: 'Ctrl + Shift + H', description: '全局替换' },
              { keys: 'F12', description: '跳转到定义' },
              { keys: 'Alt + F12', description: '查看定义' },
              { keys: 'Shift + F12', description: '查找所有引用' },
              { keys: 'Ctrl + T', description: '显示所有符号' },
              { keys: 'Ctrl + Shift + O', description: '跳转到符号' },
              { keys: 'Alt + ←', description: '后退' },
              { keys: 'Alt + →', description: '前进' },
              { keys: 'Ctrl + M', description: '切换Tab键移动焦点' }
            ]
          },
          {
            category: '窗口管理',
            items: [
              { keys: 'Ctrl + N', description: '新建文件' },
              { keys: 'Ctrl + O', description: '打开文件' },
              { keys: 'Ctrl + S', description: '保存' },
              { keys: 'Ctrl + Shift + S', description: '另存为' },
              { keys: 'Ctrl + K S', description: '保存所有' },
              { keys: 'Ctrl + W', description: '关闭编辑器' },
              { keys: 'Ctrl + K Ctrl + W', description: '关闭所有编辑器' },
              { keys: 'Ctrl + Shift + T', description: '重新打开关闭的编辑器' },
              { keys: 'Ctrl + Tab', description: '切换编辑器' },
              { keys: 'Ctrl + \\', description: '拆分编辑器' },
              { keys: 'Ctrl + 1', description: '聚焦第一个编辑器组' },
              { keys: 'Ctrl + 2', description: '聚焦第二个编辑器组' },
              { keys: 'Ctrl + 3', description: '聚焦第三个编辑器组' }
            ]
          },
          {
            category: '调试',
            items: [
              { keys: 'F5', description: '开始调试' },
              { keys: 'Ctrl + F5', description: '运行而不调试' },
              { keys: 'F9', description: '切换断点' },
              { keys: 'F10', description: '单步跳过' },
              { keys: 'F11', description: '单步进入' },
              { keys: 'Shift + F11', description: '单步跳出' },
              { keys: 'Shift + F5', description: '停止调试' }
            ]
          },
          {
            category: '集成终端',
            items: [
              { keys: 'Ctrl + `', description: '显示集成终端' },
              { keys: 'Ctrl + Shift + `', description: '创建新终端' },
              { keys: 'Ctrl + Shift + C', description: '复制终端选择' },
              { keys: 'Ctrl + Shift + V', description: '粘贴到活动终端' }
            ]
          }
        ]
      }
    }
  },
  chrome: {
    name: 'Google Chrome',
    icon: '🌐',
    description: '谷歌浏览器',
    officialDocs: 'https://support.google.com/chrome/answer/157179',
    systems: {
      windows: {
        name: 'Windows',
        shortcuts: [
          {
            category: '标签页管理',
            items: [
              { keys: 'Ctrl + T', description: '打开新标签页' },
              { keys: 'Ctrl + Shift + T', description: '重新打开关闭的标签页' },
              { keys: 'Ctrl + W', description: '关闭当前标签页' },
              { keys: 'Ctrl + Shift + W', description: '关闭当前窗口' },
              { keys: 'Ctrl + Tab', description: '切换到下一个标签页' },
              { keys: 'Ctrl + Shift + Tab', description: '切换到上一个标签页' },
              { keys: 'Ctrl + 1-8', description: '切换到指定标签页' },
              { keys: 'Ctrl + 9', description: '切换到最后一个标签页' },
              { keys: 'Ctrl + N', description: '打开新窗口' },
              { keys: 'Ctrl + Shift + N', description: '打开无痕窗口' },
              { keys: 'Ctrl + Shift + Delete', description: '清除浏览数据' }
            ]
          },
          {
            category: '导航',
            items: [
              { keys: 'Alt + ←', description: '后退' },
              { keys: 'Alt + →', description: '前进' },
              { keys: 'F5', description: '刷新页面' },
              { keys: 'Ctrl + F5', description: '强制刷新' },
              { keys: 'Ctrl + R', description: '刷新页面' },
              { keys: 'Ctrl + Shift + R', description: '强制刷新' },
              { keys: 'Ctrl + L', description: '跳转到地址栏' },
              { keys: 'Ctrl + K', description: '从地址栏搜索' },
              { keys: 'Ctrl + Enter', description: '在地址栏添加www.和.com' },
              { keys: 'Ctrl + D', description: '添加书签' },
              { keys: 'Ctrl + Shift + D', description: '为所有打开的标签页添加书签' },
              { keys: 'Ctrl + H', description: '打开历史记录' },
              { keys: 'Ctrl + J', description: '打开下载页面' }
            ]
          },
          {
            category: '页面操作',
            items: [
              { keys: 'Ctrl + F', description: '在页面中查找' },
              { keys: 'Ctrl + G', description: '查找下一个' },
              { keys: 'Ctrl + Shift + G', description: '查找上一个' },
              { keys: 'Ctrl + +', description: '放大页面' },
              { keys: 'Ctrl + -', description: '缩小页面' },
              { keys: 'Ctrl + 0', description: '重置缩放' },
              { keys: 'Space', description: '向下滚动页面' },
              { keys: 'Shift + Space', description: '向上滚动页面' },
              { keys: 'Home', description: '跳转到页面顶部' },
              { keys: 'End', description: '跳转到页面底部' },
              { keys: 'Ctrl + U', description: '查看页面源代码' },
              { keys: 'Ctrl + S', description: '保存页面' }
            ]
          },
          {
            category: '开发者工具',
            items: [
              { keys: 'F12', description: '打开开发者工具' },
              { keys: 'Ctrl + Shift + I', description: '打开开发者工具' },
              { keys: 'Ctrl + Shift + J', description: '打开控制台' },
              { keys: 'Ctrl + Shift + C', description: '选择元素' },
              { keys: 'Ctrl + Shift + Delete', description: '清除浏览数据' },
              { keys: 'Ctrl + Shift + B', description: '显示/隐藏书签栏' }
            ]
          },
          {
            category: '其他功能',
            items: [
              { keys: 'Ctrl + Shift + O', description: '书签管理器' },
              { keys: 'Ctrl + Shift + A', description: '搜索标签页' },
              { keys: 'Ctrl + M', description: '切换用户' },
              { keys: 'Alt + F', description: '打开Chrome菜单' },
              { keys: 'Alt + E', description: '打开Chrome菜单' },
              { keys: 'F11', description: '全屏模式' },
              { keys: 'Ctrl + Shift + F', description: '搜索书签' }
            ]
          }
        ]
      },
      mac: {
        name: 'macOS',
        shortcuts: [
          {
            category: '标签页管理',
            items: [
              { keys: 'Cmd + T', description: '打开新标签页' },
              { keys: 'Cmd + Shift + T', description: '重新打开关闭的标签页' },
              { keys: 'Cmd + W', description: '关闭当前标签页' },
              { keys: 'Cmd + Shift + W', description: '关闭当前窗口' },
              { keys: 'Cmd + Option + →', description: '切换到下一个标签页' },
              { keys: 'Cmd + Option + ←', description: '切换到上一个标签页' },
              { keys: 'Cmd + 1-8', description: '切换到指定标签页' },
              { keys: 'Cmd + 9', description: '切换到最后一个标签页' },
              { keys: 'Cmd + N', description: '打开新窗口' },
              { keys: 'Cmd + Shift + N', description: '打开无痕窗口' },
              { keys: 'Cmd + Shift + Delete', description: '清除浏览数据' }
            ]
          },
          {
            category: '导航',
            items: [
              { keys: 'Cmd + ←', description: '后退' },
              { keys: 'Cmd + →', description: '前进' },
              { keys: 'Cmd + R', description: '刷新页面' },
              { keys: 'Cmd + Shift + R', description: '强制刷新' },
              { keys: 'Cmd + L', description: '跳转到地址栏' },
              { keys: 'Cmd + K', description: '从地址栏搜索' },
              { keys: 'Cmd + Enter', description: '在地址栏添加www.和.com' },
              { keys: 'Cmd + D', description: '添加书签' },
              { keys: 'Cmd + Shift + D', description: '为所有打开的标签页添加书签' },
              { keys: 'Cmd + Y', description: '打开历史记录' },
              { keys: 'Cmd + Shift + J', description: '打开下载页面' }
            ]
          },
          {
            category: '页面操作',
            items: [
              { keys: 'Cmd + F', description: '在页面中查找' },
              { keys: 'Cmd + G', description: '查找下一个' },
              { keys: 'Cmd + Shift + G', description: '查找上一个' },
              { keys: 'Cmd + +', description: '放大页面' },
              { keys: 'Cmd + -', description: '缩小页面' },
              { keys: 'Cmd + 0', description: '重置缩放' },
              { keys: 'Space', description: '向下滚动页面' },
              { keys: 'Shift + Space', description: '向上滚动页面' },
              { keys: 'Cmd + ↑', description: '跳转到页面顶部' },
              { keys: 'Cmd + ↓', description: '跳转到页面底部' },
              { keys: 'Cmd + Option + U', description: '查看页面源代码' },
              { keys: 'Cmd + S', description: '保存页面' }
            ]
          },
          {
            category: '开发者工具',
            items: [
              { keys: 'Cmd + Option + I', description: '打开开发者工具' },
              { keys: 'Cmd + Option + J', description: '打开控制台' },
              { keys: 'Cmd + Option + C', description: '选择元素' },
              { keys: 'Cmd + Shift + Delete', description: '清除浏览数据' },
              { keys: 'Cmd + Shift + B', description: '显示/隐藏书签栏' }
            ]
          },
          {
            category: '其他功能',
            items: [
              { keys: 'Cmd + Option + B', description: '书签管理器' },
              { keys: 'Cmd + Shift + A', description: '搜索标签页' },
              { keys: 'Cmd + Shift + M', description: '切换用户' },
              { keys: 'Cmd + ,', description: '打开偏好设置' },
              { keys: 'Cmd + Ctrl + F', description: '全屏模式' }
            ]
          }
        ]
      },
      linux: {
        name: 'Linux',
        shortcuts: [
          {
            category: '标签页管理',
            items: [
              { keys: 'Ctrl + T', description: '打开新标签页' },
              { keys: 'Ctrl + Shift + T', description: '重新打开关闭的标签页' },
              { keys: 'Ctrl + W', description: '关闭当前标签页' },
              { keys: 'Ctrl + Shift + W', description: '关闭当前窗口' },
              { keys: 'Ctrl + Tab', description: '切换到下一个标签页' },
              { keys: 'Ctrl + Shift + Tab', description: '切换到上一个标签页' },
              { keys: 'Ctrl + 1-8', description: '切换到指定标签页' },
              { keys: 'Ctrl + 9', description: '切换到最后一个标签页' },
              { keys: 'Ctrl + N', description: '打开新窗口' },
              { keys: 'Ctrl + Shift + N', description: '打开无痕窗口' },
              { keys: 'Ctrl + Shift + Delete', description: '清除浏览数据' }
            ]
          },
          {
            category: '导航',
            items: [
              { keys: 'Alt + ←', description: '后退' },
              { keys: 'Alt + →', description: '前进' },
              { keys: 'F5', description: '刷新页面' },
              { keys: 'Ctrl + F5', description: '强制刷新' },
              { keys: 'Ctrl + R', description: '刷新页面' },
              { keys: 'Ctrl + Shift + R', description: '强制刷新' },
              { keys: 'Ctrl + L', description: '跳转到地址栏' },
              { keys: 'Ctrl + K', description: '从地址栏搜索' },
              { keys: 'Ctrl + Enter', description: '在地址栏添加www.和.com' },
              { keys: 'Ctrl + D', description: '添加书签' },
              { keys: 'Ctrl + Shift + D', description: '为所有打开的标签页添加书签' },
              { keys: 'Ctrl + H', description: '打开历史记录' },
              { keys: 'Ctrl + J', description: '打开下载页面' }
            ]
          },
          {
            category: '页面操作',
            items: [
              { keys: 'Ctrl + F', description: '在页面中查找' },
              { keys: 'Ctrl + G', description: '查找下一个' },
              { keys: 'Ctrl + Shift + G', description: '查找上一个' },
              { keys: 'Ctrl + +', description: '放大页面' },
              { keys: 'Ctrl + -', description: '缩小页面' },
              { keys: 'Ctrl + 0', description: '重置缩放' },
              { keys: 'Space', description: '向下滚动页面' },
              { keys: 'Shift + Space', description: '向上滚动页面' },
              { keys: 'Home', description: '跳转到页面顶部' },
              { keys: 'End', description: '跳转到页面底部' },
              { keys: 'Ctrl + U', description: '查看页面源代码' },
              { keys: 'Ctrl + S', description: '保存页面' }
            ]
          },
          {
            category: '开发者工具',
            items: [
              { keys: 'F12', description: '打开开发者工具' },
              { keys: 'Ctrl + Shift + I', description: '打开开发者工具' },
              { keys: 'Ctrl + Shift + J', description: '打开控制台' },
              { keys: 'Ctrl + Shift + C', description: '选择元素' },
              { keys: 'Ctrl + Shift + Delete', description: '清除浏览数据' },
              { keys: 'Ctrl + Shift + B', description: '显示/隐藏书签栏' }
            ]
          },
          {
            category: '其他功能',
            items: [
              { keys: 'Ctrl + Shift + O', description: '书签管理器' },
              { keys: 'Ctrl + Shift + A', description: '搜索标签页' },
              { keys: 'Ctrl + Shift + M', description: '切换用户' },
              { keys: 'Alt + F', description: '打开Chrome菜单' },
              { keys: 'F11', description: '全屏模式' },
              { keys: 'Ctrl + Shift + F', description: '搜索书签' }
            ]
          }
        ]
      }
    }
  }
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