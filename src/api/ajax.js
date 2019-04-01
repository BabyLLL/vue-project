/*
* 此模块封装ajax
* */

import axios from 'axios'

export default function (url,data={},type='GET') {
  return new Promise((resolve,reject) => {
    let promise

    //发送ajax
    if(type === 'GET'){
      promise = axios.get(url,{
        params:data
      })
    }else{
      promise = axios.post(url,data)
    }

    //接收成功状态
    promise.then((response) => {
      resolve(response)
    }).catch((err) => {
      console.log('网路稳定',err)
    })

  })
}
