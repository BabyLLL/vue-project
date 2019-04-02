/*
* mock数据模拟后台数据
* */

import Mock from 'mockjs'
import homeData from './data/homeData.json'
import category from './data/category.json'
import categoryList from './data/categoryList.json'


Mock.mock('/mock/home',{
  code:0,data:homeData
})

Mock.mock('/mock/category',{
  code:0,data:category
})

Mock.mock('/mock/categorylist',{
  code:0,data:categoryList
})

