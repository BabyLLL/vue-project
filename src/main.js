import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'lib-flexible/flexible'
import store from './store'
import VueLazyload from 'vue-lazyload'
import loading from './common/img/loading.gif'


Vue.use(VueLazyload, {
  loading
})

import './mock'

Vue.config.productionTip = false


new Vue({
  el: '#app',
  render:h => h(App),
  template: '<App/>',
  router , //配置路由
  store //定义状态数据
})
