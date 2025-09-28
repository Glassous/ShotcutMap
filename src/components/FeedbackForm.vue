<template>
  <div class="feedback-section bg-base-100 py-8 px-4">
    <div class="max-w-4xl mx-auto">
      <h2 class="text-2xl font-bold text-center mb-6 text-primary">意见反馈</h2>
      <p class="text-center text-base-content/70 mb-8">
        我们非常重视您的意见！请告诉我们您对ShortcutMap的使用体验或建议。
      </p>
      
      <form 
        ref="feedbackForm"
        class="space-y-6"
        @submit.prevent="handleSubmit"
      >
        <!-- Web3Forms Access Key -->
        <input type="hidden" name="access_key" value="913c1710-5fee-4a7a-a46f-2700bf248ed0">
        
        <!-- 防止垃圾邮件 -->
        <input type="checkbox" name="botcheck" class="hidden" style="display: none;">
        
        <!-- 重定向页面（可选） -->
        <input type="hidden" name="redirect" value="https://web3forms.com/success">
        
        <!-- 表单主题 -->
        <input type="hidden" name="subject" value="ShortcutMap 用户反馈">
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <!-- 姓名 -->
          <div>
            <label for="name" class="block text-sm font-medium mb-2 text-base-content">
              姓名（可选）
            </label>
            <input
              type="text"
              id="name"
              name="name"
              class="input input-bordered w-full"
              placeholder="请输入您的姓名"
            >
          </div>
          
          <!-- 邮箱 -->
          <div>
            <label for="email" class="block text-sm font-medium mb-2 text-base-content">
              邮箱（可选）
            </label>
            <input
              type="email"
              id="email"
              name="email"
              class="input input-bordered w-full"
              placeholder="请输入您的邮箱"
            >
          </div>
        </div>
        
        <!-- 反馈类型 -->
        <div>
          <label for="feedback_type" class="block text-sm font-medium mb-2 text-base-content">
            反馈类型
          </label>
          <select
            id="feedback_type"
            name="feedback_type"
            class="select select-bordered w-full"
            required
          >
            <option value="" disabled selected>请选择反馈类型</option>
            <option value="bug">错误报告</option>
            <option value="feature">功能建议</option>
            <option value="improvement">改进建议</option>
            <option value="other">其他</option>
          </select>
        </div>
        
        <!-- 反馈内容 -->
        <div>
          <label for="message" class="block text-sm font-medium mb-2 text-base-content">
            反馈内容 *
          </label>
          <textarea
            id="message"
            name="message"
            rows="6"
            class="textarea textarea-bordered w-full"
            placeholder="请详细描述您的反馈内容..."
            required
          ></textarea>
        </div>
        
        <!-- 提交按钮 -->
        <div class="text-center">
          <button
            type="submit"
            class="btn btn-primary px-8"
            :disabled="isSubmitting"
          >
            <span v-if="isSubmitting" class="loading loading-spinner"></span>
            {{ isSubmitting ? '提交中...' : '提交反馈' }}
          </button>
        </div>
      </form>
      
      <!-- 提交成功提示 -->
      <div v-if="showSuccess" class="alert alert-success mt-6">
        <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <span>感谢您的反馈！我们会尽快处理您的意见。</span>
      </div>
      
      <!-- 提交失败提示 -->
      <div v-if="showError" class="alert alert-error mt-6">
        <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <span>提交失败，请稍后重试或直接联系我们。</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const feedbackForm = ref(null)
const isSubmitting = ref(false)
const showSuccess = ref(false)
const showError = ref(false)

const handleSubmit = async (event) => {
  event.preventDefault()
  
  if (isSubmitting.value) return
  
  isSubmitting.value = true
  showSuccess.value = false
  showError.value = false
  
  try {
    // 收集表单数据
    const formData = new FormData(feedbackForm.value)
    const data = {
      access_key: '913c1710-5fee-4a7a-a46f-2700bf248ed0',
      name: formData.get('name') || '',
      email: formData.get('email') || '',
      feedback_type: formData.get('feedback_type') || '',
      message: formData.get('message') || '',
      subject: 'ShortcutMap 用户反馈',
      botcheck: false,
      timestamp: new Date().toISOString()
    }
    
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(data)
    })
    
    const result = await response.json()
    
    if (result.success) {
      showSuccess.value = true
      feedbackForm.value.reset()
      
      // 3秒后隐藏成功提示
      setTimeout(() => {
        showSuccess.value = false
      }, 3000)
    } else {
      showError.value = true
      
      // 3秒后隐藏错误提示
      setTimeout(() => {
        showError.value = false
      }, 3000)
    }
  } catch (error) {
    console.error('提交反馈失败:', error)
    showError.value = true
    
    // 3秒后隐藏错误提示
    setTimeout(() => {
      showError.value = false
    }, 3000)
  } finally {
    isSubmitting.value = false
  }
}
</script>

<style scoped>
.feedback-section {
  border-top: 1px solid hsl(var(--b3));
  border-bottom: 1px solid hsl(var(--b3));
}

.alert {
  animation: fadeIn 0.3s ease-in-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>