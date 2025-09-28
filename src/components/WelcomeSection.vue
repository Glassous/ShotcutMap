<template>
  <div class="hero min-h-96 bg-base-200">
    <div class="hero-content text-center">
      <div class="max-w-md">
        <h1 class="text-5xl font-bold text-primary">快捷键仓库</h1>
        <p class="py-6 text-base-content">
          收集整理各种软件的快捷键，提高你的工作效率。支持多种操作系统，让你随时随地查找需要的快捷键。
        </p>
        <div class="flex justify-center gap-4">
          <div class="stat">
            <div class="stat-figure text-primary">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <div class="stat-title">软件数量</div>
            <div class="stat-value text-primary">{{ softwareCount }}</div>
            <div class="stat-desc">持续更新中</div>
          </div>
          
          <div class="stat">
            <div class="stat-figure text-secondary">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4"></path>
              </svg>
            </div>
            <div class="stat-title">快捷键总数</div>
            <div class="stat-value text-secondary">{{ shortcutCount }}+</div>
            <div class="stat-desc">覆盖主流软件</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { getSoftwareList } from '../data/shortcuts.js'

const softwareList = getSoftwareList()
const softwareCount = computed(() => softwareList.length)

// 计算快捷键总数
const shortcutCount = computed(() => {
  let total = 0
  softwareList.forEach(software => {
    Object.values(software.systems).forEach(system => {
      system.shortcuts.forEach(category => {
        total += category.items.length
      })
    })
  })
  return total
})
</script>

<style scoped>
.hero {
  background: linear-gradient(135deg, hsl(var(--b2)) 0%, hsl(var(--b3)) 100%);
}
</style>