<template>
  <div class="container mx-auto px-4 py-8">
    <div class="text-center mb-8">
      <h2 class="text-3xl font-bold text-base-content mb-4">选择软件</h2>
      <p class="text-base-content/70">点击下方软件图标查看对应的快捷键</p>
    </div>
    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
      <div 
        v-for="software in softwareList" 
        :key="software.id"
        class="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2"
        @click="$emit('selectSoftware', software.id)"
      >
        <div class="card-body items-center text-center">
          <div class="mb-4">
            <img 
              :src="getSoftwareIcon(software.id)" 
              :alt="software.name" 
              class="w-16 h-16 object-contain"
            />
          </div>
          <h3 class="card-title text-xl text-base-content">{{ software.name }}</h3>
          <p class="text-base-content/70 text-sm mb-4">{{ software.description }}</p>
          
          <div class="flex flex-wrap gap-2 mb-4">
            <div 
              v-for="(system, systemId) in software.systems" 
              :key="systemId"
              class="badge badge-outline badge-sm"
            >
              {{ system.name }}
            </div>
          </div>
          
          <div class="card-actions justify-end w-full">
            <button class="btn btn-primary btn-sm w-full">
              查看快捷键
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
    
    <!-- 空状态 -->
    <div v-if="softwareList.length === 0" class="text-center py-12">
      <div class="text-6xl mb-4">📱</div>
      <h3 class="text-xl font-semibold text-base-content mb-2">暂无软件</h3>
      <p class="text-base-content/70">软件列表正在建设中...</p>
    </div>
  </div>
</template>

<script setup>
import { getSoftwareList } from '../data/shortcuts.js'

// 定义事件
defineEmits(['selectSoftware'])

// 获取软件列表
const softwareList = getSoftwareList()

// 获取软件图标路径
const getSoftwareIcon = (softwareId) => {
  const iconMap = {
    'idea': '/intellij-idea-1.svg',
    'vscode': '/visual-studio-code-1.svg',
    'chrome': '/chrome-modern-.svg'
  }
  return iconMap[softwareId] || '/ShortcutMap.png'
}
</script>

<style scoped>
.card {
  border: 1px solid hsl(var(--bc) / 0.1);
}

.card:hover {
  border-color: hsl(var(--p) / 0.3);
  box-shadow: 0 25px 50px -12px hsl(var(--p) / 0.25);
}

.badge {
  font-size: 0.75rem;
}
</style>