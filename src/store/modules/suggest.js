/**
 * Created by Lenovo on 2019/4/3.
 */
import {RECEIVE_SUGGEST} from '../mutations-types'
import {reqManual} from '../../api'

const state = {
  manualData:[]

}
const mutations = {
  [RECEIVE_SUGGEST](state,{manualData}){
    state.manualData = manualData
  }
}
const actions = {
  async getManual({commit},callback){
    const result = await reqManual()
    if(result.data.code === '200'){
      const manualData = result.data.data
      commit(RECEIVE_SUGGEST,{manualData})
      typeof callback === 'function' && callback()
    }

   }

}
const getters = {


}




export default {
  state,
  actions,
  mutations,
  getters
}
