/*
* store核心模块
* */
import Vue from 'vue'
import Vuex from 'vuex'
import home from './modules/home'
import category from './modules/category'
import discern from './modules/discern'
import suggest from './modules/suggest'
import user from './modules/user'

Vue.use(Vuex)
export default new Vuex.Store({

  modules:{
    home,
    category,
    discern,
    suggest,
    user
  }


})
