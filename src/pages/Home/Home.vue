<template>
  <section class="home-wrap">

    <header class="header">
      <!--头部搜索-->
      <div class="header-search">
        <!--logo图-->
        <h1 class="logo">
          <a href="javascript:;">
            <img src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-a90bdaae6b.png" alt="">
          </a>
        </h1>
        <!--search-->
        <div class="search" @click="handleSearch">
          <img src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/search2-553dba3aff.png" alt="">
          <span>搜索商品，共222件物品</span>
        </div>
        <!--登录-->
        <span class="login">登录</span>
      </div>

      <!--头部导航-->
      <div class="header-nav">
        <div class="nav">
          <ul>
            <li :class="{active:lists[indexs]===list}" v-for="(list,index) in lists" @click="handleList(index)" >{{list}}</li>
          </ul>
        </div>
        <div class="nav-btn" @click="handleBtn">
          <img ref="btnImg" src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/arrow-down-3-799ded53ea.png" alt="">
        </div>
        <div class="nav-all" v-if="isShow">
          <p>全部频道</p>
          <ul class="nav-channel">
            <li>推荐</li>
            <li>居家生活</li>
            <li>服饰鞋包</li>
            <li>美食酒水</li>
            <li>个户清洁</li>
            <li>母婴亲子</li>
            <li>运动旅行</li>
            <li>数码家电</li>
            <li>礼品特色</li>
          </ul>
        </div>
      </div>
    </header>

    <router-view/>

  </section>
</template>

<script>
  import BScroll from 'better-scroll'
  export default {

    //状态数据
    data(){
      return{
        isShow:false,
        lists:['推荐','居家生活','服饰鞋包','美食酒水','个户清洁','母婴亲子','运动旅行','数码家电','礼品特色'],
        indexs:0
      }
    },

    //点击
    methods:{
      handleBtn(){
        this.isShow = !this.isShow
        if(this.isShow){
          this.$refs.btnImg.style.transform = 'rotate(180deg)'
        }else{
          this.$refs.btnImg.style.transform = 'rotate(0)'
        }
      },
      handleList(index){
        this.indexs = index
        this.$router.push('/home/advise')
      },
      handleSearch(){
        this.$router.push('/search')
      }

    },

    //滚动
    mounted(){
      new BScroll('.nav',{
        click:true,
        scrollX: true
      })
      this.$store.dispatch('getHomeData')
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .home-wrap
    position relative
    height 100%
    width 100%
    background-color #eee
    .header
      position fixed
      left 0
      top 0
      z-index 3
      background-color white
      .header-search
        display flex
        padding 8px 15px
        align-items center
        .logo
          a
            display block
            width 138px
            height 40px
            img
              width 100%
              height 100%

        .search
          width 486px
          height 56px
          text-align center
          line-height 56px
          background-color #ededed
          margin  0 10px
          font-size 28px
          img
            height 28px
            width 28px
            vertical-align middle
          span
            vertical-align middle
        .login
          width 78px
          height 44px
          text-align center
          line-height 44px
          border 1px solid #b4282d
          color #b4282d
      .header-nav
        position relative
        height 75px
        .nav
          height 100%
          width 750px
          display flex
          ul
            display flex
            padding-right 70px
            li
              position relative
              font-size 28px
              width 134px
              padding 0 16px
              height 66px
              text-align center
              line-height 66px
              &.active
                color red
                &:after
                  content ''
                  position absolute
                  left 50%
                  bottom 0
                  transform translate(-50%)
                  width 70%
                  height 4px
                  background-color red
        .nav-btn
          position absolute
          right 0
          top 0
          z-index 1
          width 100px
          height 60px
          text-align center
          line-height 60px
          background-color white
          img
            transition all 0.5s
            width 28px
            height 28px


        .nav-all
          position absolute
          left 0
          top 0
          font-size 28px
          width 100%
          background-color white
          p
            padding 20px
          .nav-channel
            clearFix()
            li
              width 165px
              height: 64px
              float left
              margin 8px
              text-align center
              line-height 64px
              background-color #fafafa
              border-radius 8px
              border 2px solid #d9d9d9

</style>
