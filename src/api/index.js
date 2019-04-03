/*
* 优化ajax封装
* */
import ajax from './ajax'

const URL = ''

const api ='/api'

export const reqHomeData = () => ajax(URL+'/mock/home')

export const reqCategory = () => ajax(URL+'/mock/category')

export const reqMsg = (keywordPrefix) => ajax(api+'/xhr/search/searchAutoComplete.json',{keywordPrefix})

export const reqTab = () => ajax(api+'/topic/v1/find/getTabs.json')

export const reqManual= () => ajax(api+'/topic/v1/find/recManual.json')

// http://m.you.163.com/topic/v1/find/recManual.json


// http://m.you.163.com/topic/v1/find/getTabs.json

// http://localhost:8081/api/xhr/search/searchAutoComplete.json?keywordPrefix=a
// http://localhost:8080/api/xhr/search/searchAutoComplete.json?keywordPrefix=a
// http://m.you.163.com/xhr/search/searchAutoComplete.json?csrf_token=29c2d6669c619d172a33deb5c6c9a837&keywordPrefix=duan
