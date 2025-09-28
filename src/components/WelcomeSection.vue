<template>
  <div class="hero min-h-96 bg-base-200">
    <div class="hero-content text-center">
      <div class="max-w-md">
        <h1 class="text-5xl font-bold text-primary">ShortcutMap</h1>
        <p class="py-6 text-base-content">
          收集整理各种软件的快捷键，提高你的工作效率。支持多种操作系统，让你随时随地查找需要的快捷键。
        </p>
        <div class="flex justify-center gap-4">
          <div class="stat">
            <div class="stat-title">软件数量</div>
            <div class="stat-value text-primary">{{ softwareCount }}</div>
          </div>
          
          <div class="stat">
            <div class="stat-title">快捷键总数</div>
            <div class="stat-value text-secondary">{{ shortcutCount }}+</div>
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