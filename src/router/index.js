import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import SoftwareDetail from '../views/SoftwareDetail.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: '快捷键仓库 - 提高工作效率的快捷键集合'
    }
  },
  {
    path: '/software/:id',
    name: 'SoftwareDetail',
    component: SoftwareDetail,
    meta: {
      title: '快捷键详情 - 快捷键仓库'
    }
  },
  {
    // 404 页面重定向到首页
    path: '/:pathMatch(.*)*',
    redirect: '/'
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // 如果有保存的滚动位置，则恢复
    if (savedPosition) {
      return savedPosition
    }
    // 否则滚动到顶部
    return { top: 0 }
  }
})

// 路由守卫 - 设置页面标题
router.beforeEach((to, from, next) => {
  // 设置页面标题
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

export default router