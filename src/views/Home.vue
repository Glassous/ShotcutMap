<template>
  <div class="min-h-screen bg-base-100">
    <!-- 导航栏 -->
    <div class="navbar bg-base-100 shadow-lg fixed top-0 left-0 right-0 z-50">
      <div class="navbar-start">
        <a class="btn btn-ghost text-xl font-bold text-primary">ShortcutMap</a>
      </div>
      
      <div class="navbar-end">
        <!-- 主题切换按钮 -->
        <button @click="toggleTheme" class="btn btn-ghost">
          <svg v-if="currentTheme === 'light'" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clip-rule="evenodd"></path>
          </svg>
          <svg v-else-if="currentTheme === 'dark'" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
          </svg>
          <svg v-else class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z" clip-rule="evenodd"></path>
          </svg>
        </button>
        
        <!-- GitHub 链接 -->
        <a href="https://github.com/Glassous/ShotcutMap" target="_blank" class="btn btn-ghost">
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clip-rule="evenodd"></path>
          </svg>
        </a>
      </div>
    </div>

    <!-- 欢迎区域 -->
    <WelcomeSection class="pt-16" />
    
    <!-- 软件网格 -->
    <SoftwareGrid @select-software="handleSoftwareSelect" />
    
    <!-- 页脚 -->
    <footer class="footer footer-center p-10 bg-base-200 text-base-content">
      <aside>
        <p class="font-bold">
          ShortcutMap
          <br/>
          提高工作效率的快捷键集合
        </p> 
        <p>Copyright © 2025 - All right reserved</p>
      </aside>
    </footer>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { useRouter } from 'vue-router'
import WelcomeSection from '../components/WelcomeSection.vue'
import SoftwareGrid from '../components/SoftwareGrid.vue'

const router = useRouter()

// 滚动位置管理
const scrollPosition = ref(0)

const saveScrollPosition = () => {
  scrollPosition.value = window.scrollY
  sessionStorage.setItem('homeScrollPosition', scrollPosition.value.toString())
}

const restoreScrollPosition = () => {
  const savedPosition = sessionStorage.getItem('homeScrollPosition')
  if (savedPosition) {
    // 使用 nextTick 确保DOM已渲染完成
    setTimeout(() => {
      window.scrollTo(0, parseInt(savedPosition))
    }, 100)
  }
}

// 主题管理
const currentTheme = ref('auto')
const themes = ['auto', 'light', 'dark']

const toggleTheme = () => {
  const currentIndex = themes.indexOf(currentTheme.value)
  const nextIndex = (currentIndex + 1) % themes.length
  const nextTheme = themes[nextIndex]
  setTheme(nextTheme)
}

const setTheme = (theme) => {
  currentTheme.value = theme
  if (theme === 'auto') {
    // 检测系统主题
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    document.documentElement.setAttribute('data-theme', prefersDark ? 'dark' : 'light')
  } else {
    document.documentElement.setAttribute('data-theme', theme)
  }
  localStorage.setItem('theme', theme)
}

// 处理软件选择
const handleSoftwareSelect = (softwareId) => {
  // 保存当前滚动位置
  saveScrollPosition()
  // 跳转到软件详情页
  router.push(`/software/${softwareId}`)
}

// 初始化
onMounted(() => {
  const savedTheme = localStorage.getItem('theme') || 'auto'
  setTheme(savedTheme)
  
  // 恢复滚动位置
  restoreScrollPosition()
  
  // 监听滚动事件，定期保存位置
  window.addEventListener('scroll', saveScrollPosition)
})

onBeforeUnmount(() => {
  // 清理事件监听器
  window.removeEventListener('scroll', saveScrollPosition)
})
</script>

<style scoped>
.navbar {
  backdrop-filter: blur(10px);
  background-color: hsl(var(--b1) / 0.9);
}

.footer {
  margin-top: 4rem;
}
</style>