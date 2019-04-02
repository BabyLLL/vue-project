/**
 * Created by Lenovo on 2019/4/2.
 */
/*
* category数据
* */
import {RECEIVE_CATEGORY} from '../mutations-types'
import {reqCategory} from '../../api'

const state = {
  categoryList:[]
}
const mutations = {
  [RECEIVE_CATEGORY](state,{categoryList}){
    state.categoryList = categoryList
  }

}
const actions = {
  async getCategory({commit},callback) {
    const result = await reqCategory()
    if(result.data.code === 0){
      const categoryList = result.data.data.categoryL1List
      commit(RECEIVE_CATEGORY,{categoryList})
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
