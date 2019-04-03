/**
 * Created by Lenovo on 2019/4/2.
 */

import {RECEIVE_DISCERN} from '../mutations-types'
import {reqTab} from '../../api'

const state = {
  tabs:[]
}

const mutations = {
  [RECEIVE_DISCERN](state,{tabs}){
    state.tabs = tabs
  }
}

const actions = {
 async getTab({commit},callback){
   const result = await reqTab()
   if(result.data.code === '200'){
     const tabs = result.data.data
     commit(RECEIVE_DISCERN,{tabs})
     typeof callback === 'function' && callback()
   }
  }
}

const getters = {

}









export default {
  state,
  mutations,
  actions,
  getters
}
