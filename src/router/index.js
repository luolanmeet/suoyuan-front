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
const article = () => import('@/pages/Article')
const settings = () => import('@/pages/Settings')
const communityIndex = () => import('@/pages/CommunityIndex')
const topic = () => import('@/pages/Topic')
const createTopic = () => import('@/pages/CreateTopic')
const notify = () => import('@/pages/Notify')

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
        // 查看别人的日志也是这个组件
        path: "/diary",
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
      },
      {
        path: "/article",
        component: article
      },
      {
        path: "/community",
        component: communityIndex
      },
      {
        path: "/topic",
        component: topic
      },
      {
        path: "/createTopic",
        component: createTopic
      },
      {
        path: "/notify",
        component: notify
      }
    ]
})
