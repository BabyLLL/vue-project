//主要的路由模块
import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'

//注册路由组件
Vue.use(VueRouter)

export default new VueRouter({
  mode:'history',
  routes
})
