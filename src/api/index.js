/*
* 优化ajax封装
* */
import ajax from './ajax'

const URL = ''

export const reqHomeData = () => ajax(URL+'/mock/home')

export const reqCategory = () => ajax(URL+'/mock/category')




