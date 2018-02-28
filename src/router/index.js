import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// 页面
const testRouter = () => import('@/components/TestRouter')

// 设置路由
export default new Router({
    mode: "history",  // 去除路径上的 # 号
    base: __dirname,
    routes: [
      {
        path: "/hw",
        component: testRouter
      }
    ]
})
