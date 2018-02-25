// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import TestRouter from './components/TestRouter'

Vue.config.productionTip = false

Vue.use(VueRouter)

// 设置路由
const router = new VueRouter({
    mode: "history",  // 去除路径上的 # 号
    base: __dirname,
    routes: [
      {path: "/hw", component: TestRouter}
    ]
})

/* eslint-disable no-new */
new Vue({
  router,
  el: '#app',
  components: { App },
  template: '<App/>'
})
