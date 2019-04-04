<template>
  <div class="search-wrap">

    <div class="top-search">
      <div class="search">
        <div class="search-img"><img
          src="//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/search2-2fb94833aa.png"
          alt=""></div>
        <input type="text" placeholder="请输入搜索内容" v-model="msg" @keyup.enter="handleSend">
      </div>
      <span @click="$router.back()">取消</span>
      <div class="search-result" v-if="list.length !== 0">
        <ul class="result-list">
          <li v-for="(li,index) in list" :key="index">{{li}}</li>
        </ul>
      </div>
      <div class="del" v-if="msg" @click="handleDle">x</div>
    </div>

    <div class="search-content" v-if="list.length === 0">
      <p class="hot-search">热门搜索</p>
      <ul class="search-list">
        <li>哈哈哈哈啊啊啊</li>
        <li>哈哈哈哈啊啊啊</li>
        <li>哈哈哈哈啊啊啊</li>
        <li>哈哈哈哈啊啊啊</li>
        <li>哈哈哈哈啊啊啊</li>
        <li>哈哈哈哈啊啊啊</li>
        <li>哈哈哈哈啊啊啊</li>
        <li>哈哈哈哈啊啊啊</li>
        <li>哈哈哈哈啊啊啊</li>
        <li>哈哈哈哈啊啊啊</li>
        <li>哈哈哈哈啊啊啊</li>
        <li>哈哈哈哈啊啊啊</li>
      </ul>
    </div>

  </div>
</template>

<script>
  import {reqMsg} from '../../api'
  export default {
    data(){
      return{
        msg:'',
        list:[]
      }
    },

    watch:{
     async msg(e){
       const result = await reqMsg(e)
       if(result.data.code === "200"){
         this.list = result.data.data
       }
      }
    },

    methods:{
      handleDle(){
        this.msg = ''
      },
      handleSend(){
        window.location.href = `https://m.you.163.com/search?keyword=${this.msg}`
//        https://m.you.163.com/search?keyword=aaa&_stat_search=userhand
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

  .search-wrap
    .top-search
      padding 20px 20px 0
      display flex
      justify-content space-between
      width 690px
      height 56px
      line-height 56px
      font-size 28px
      position relative
      .search
        position relative
        display flex
        width 90%
        .search-img
          width 10%
          position absolute
          top 50%
          left 10px
          transform translateY(-50%)
          line-height 15px
          img
            width 28px
            height 28px
        input
          background-color #eee
          width 90%
          padding-left 50px
          outline none
      .search-result
        position absolute
        left 0
        top 75px
        height 100px
        width 100%
        background-color #fff
        padding-left 20px
        li
          padding-top 20px
          font-size 30px
      .del
        position absolute
        right 100px
        top 60%
        transform translateY(-50%)
        width 40px
        height 40px
        background-color #000
        border-radius 50%
        color white
        text-align center
        line-height 40px
        font-size 40px
    .search-content
      padding 30px 0 0 30px
      p
        font-size 28px
      .search-list
        margin-top 30px
        display flex
        flex-wrap wrap
        li
          height 46px
          border 1px solid #eee
          margin 0 30px 30px 0
          text-align center
          line-height 46px
</style>
