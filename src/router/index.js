import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// 页面
const testRouter = () => import('@/components/TestRouter')
const noLoginIndex = () => import('@/pages/NoLoginIndex')
const index = () => import('@/pages/Index')
const myIndex = () => import('@/pages/MyIndex')
const register = () => import('@/pages/Register')
const login = () => import('@/pages/login')
const now = () => import('@/pages/Now')
const wirteDiary = () => import('@/pages/WirteDiary')
const settings = () => import('@/pages/Settings')

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
        path: "/index",
        component: index
      },
      {
        path: "/myindex",
        component: myIndex
      },
      {
        path: "/register",
        component: register
      },
      {
        path: "/login",
        component: login
      },
      {
        path: "/now",
        component: now
      },
      {
        path: "/write",
        component: wirteDiary
      },
      {
        path: "/settings",
        component: settings
      }
    ]
})
