<template>
  <div class="min-h-screen bg-base-100">
    <!-- 导航栏 -->
    <div class="navbar bg-base-100 shadow-lg fixed top-0 left-0 right-0 z-50">
      <div class="navbar-start">
        <button @click="goBack" class="btn btn-ghost">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>
          返回
        </button>
      </div>
      
      <div class="navbar-center">
        <a class="btn btn-ghost text-xl font-bold text-primary">⌨️ 快捷键仓库</a>
      </div>
      
      <div class="navbar-end">
        <!-- 搜索框 -->
        <div class="form-control">
          <input 
            v-model="searchQuery" 
            type="text" 
            placeholder="搜索快捷键..." 
            class="input input-bordered input-sm w-full max-w-xs" 
          />
        </div>
      </div>
    </div>

    <div v-if="software" class="container mx-auto px-4 py-8 pt-24">
      <!-- 软件信息头部 -->
      <div class="text-center mb-8">
        <div class="text-8xl mb-4">{{ software.icon }}</div>
        <h1 class="text-4xl font-bold text-base-content mb-2">{{ software.name }}</h1>
        <p class="text-base-content/70 text-lg mb-4">{{ software.description }}</p>
        
        <!-- 官方文档链接 -->
        <div v-if="software.officialDocs" class="mb-4">
          <a 
            :href="software.officialDocs" 
            target="_blank" 
            class="btn btn-outline btn-primary btn-sm"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
            官方文档
          </a>
        </div>
      </div>

      <!-- 系统选择 Tabs -->
      <div class="tabs tabs-boxed justify-center mb-8 bg-base-200">
        <button 
          v-for="(system, systemId) in software.systems" 
          :key="systemId"
          :class="['tab', { 'tab-active': activeSystem === systemId }]"
          @click="activeSystem = systemId"
        >
          {{ system.name }}
        </button>
      </div>

      <!-- 快捷键内容 -->
      <div v-if="currentSystemData" class="max-w-6xl mx-auto">
        <div class="grid gap-6">
          <div 
            v-for="category in filteredShortcuts" 
            :key="category.category"
            class="card bg-base-100 shadow-xl"
          >
            <div class="card-body">
              <h3 class="card-title text-2xl text-primary mb-4">
                {{ category.category }}
                <div class="badge badge-secondary">{{ category.items.length }}</div>
              </h3>
              
              <div class="overflow-x-auto">
                <table class="table table-zebra w-full">
                  <thead>
                    <tr>
                      <th class="text-base-content">快捷键</th>
                      <th class="text-base-content">功能描述</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(shortcut, index) in category.items" :key="index">
                      <td>
                        <div class="flex flex-wrap gap-1">
                          <kbd 
                            v-for="key in parseKeys(shortcut.keys)" 
                            :key="key"
                            class="kbd kbd-sm"
                          >
                            {{ key }}
                          </kbd>
                        </div>
                      </td>
                      <td class="text-base-content">{{ shortcut.description }}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        <!-- 空状态 -->
        <div v-if="filteredShortcuts.length === 0" class="text-center py-12">
          <div class="text-6xl mb-4">🔍</div>
          <h3 class="text-xl font-semibold text-base-content mb-2">未找到匹配的快捷键</h3>
          <p class="text-base-content/70">尝试调整搜索关键词或选择其他系统</p>
        </div>
      </div>
    </div>

    <!-- 软件不存在的情况 -->
    <div v-else class="container mx-auto px-4 py-8 pt-24 text-center">
      <div class="text-6xl mb-4">❌</div>
      <h2 class="text-2xl font-bold text-base-content mb-2">软件不存在</h2>
      <p class="text-base-content/70 mb-4">请检查URL或返回主页选择其他软件</p>
      <button @click="goBack" class="btn btn-primary">返回主页</button>
    </div>

    <!-- Toast 提示 -->
    <!-- 已删除复制功能的Toast提示 -->
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { getSoftwareById } from '../data/shortcuts.js'

const route = useRoute()
const router = useRouter()

// 响应式数据
const software = ref(null)
const activeSystem = ref('')
const searchQuery = ref('')

// 计算属性
const currentSystemData = computed(() => {
  if (!software.value || !activeSystem.value) return null
  return software.value.systems[activeSystem.value]
})

const filteredShortcuts = computed(() => {
  if (!currentSystemData.value) return []
  
  const query = searchQuery.value.toLowerCase().trim()
  if (!query) return currentSystemData.value.shortcuts
  
  return currentSystemData.value.shortcuts
    .map(category => ({
      ...category,
      items: category.items.filter(item => 
        item.keys.toLowerCase().includes(query) || 
        item.description.toLowerCase().includes(query)
      )
    }))
    .filter(category => category.items.length > 0)
})

// 方法
const loadSoftware = () => {
  const softwareId = route.params.id
  const softwareData = getSoftwareById(softwareId)
  
  if (softwareData) {
    software.value = softwareData
    // 设置默认系统（优先Windows，然后是第一个可用系统）
    const systems = Object.keys(softwareData.systems)
    activeSystem.value = systems.includes('windows') ? 'windows' : systems[0]
  }
}

const parseKeys = (keyString) => {
  return keyString.split(' + ').map(key => key.trim())
}

const goBack = () => {
  router.push('/')
}

// 生命周期
onMounted(() => {
  loadSoftware()
})

// 监听路由变化
watch(() => route.params.id, () => {
  loadSoftware()
})
</script>

<style scoped>
.kbd {
  background-color: hsl(var(--b3));
  border: 1px solid hsl(var(--bc) / 0.2);
  color: hsl(var(--bc));
}

.table th {
  background-color: hsl(var(--b2));
  font-weight: 600;
}

.table-zebra tbody tr:nth-child(even) {
  background-color: hsl(var(--b2) / 0.5);
}

.tabs-boxed {
  background-color: hsl(var(--b2));
  padding: 0.5rem;
  border-radius: 0.5rem;
}

.tab {
  border-radius: 0.375rem;
  transition: all 0.2s ease;
}

.tab-active {
  background-color: hsl(var(--p));
  color: hsl(var(--pc));
}

.toast {
  z-index: 1000;
}
</style>