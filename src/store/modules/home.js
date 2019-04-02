/*
* home的vuex模块
* */

import {reqHomeData} from '../../api'
//引入公共名字
import {
  RECEIVE_HOME
} from '../mutations-types'

//状态
const state = {
  homeData:{}


}

/*改变状态*/
const mutations = {
  [RECEIVE_HOME](state,{homeData}){
    state.homeData = homeData
  }


}

/*发送请求*/
const actions = {
 async getHomeData({commit}){
   const result = await reqHomeData()
   const homeData = result.data.data
   if(result.data.code === 0){
     commit(RECEIVE_HOME,{homeData})

   }

  }

}

/*计算熟悉*/
const getters = {

}



export default{
  state,
  mutations,
  actions,
  getters
}
