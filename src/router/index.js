import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// 页面
const testRouter = () => import('@/components/TestRouter')
const noLoginIndex = () => import('@/pages/NoLoginIndex')
const index = () => import('@/pages/Index')
const register = () => import('@/pages/Register')
const login = () => import('@/pages/login')

// 设置路由
export default new Router({
    mode: "history",  // 去除路径上的 # 号
    base: __dirname,
    routes: [
      {
        path: "/",
        component: noLoginIndex
      },
      {
        path: "/1",
        component: index
      },
      {
        path: "/register",
        component: register
      },
      {
        path: "/login",
        component: login
      }
    ]
})
