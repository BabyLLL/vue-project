<template>
  <div class="bscoll-wrap">
    <div class="advise-wrap">

      <!--轮播图-->
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(List,index) in homeData.focusList" :key="List.id">
            <img v-lazy="List.picUrl+'?imageView&quality=75&thumbnail=750x0'" alt="">
          </div>

        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination swiper-pagination-customs"></div>
      </div>

      <!--网易自营服务-->
      <div class="service">
        <ul class="service-list">
          <li v-for="(policyDesc,index) in homeData.policyDescList">
            <a class="service-item" href="javascript:;">
              <i class="iconfont icon-account"></i>
              <span>{{policyDesc.desc}}</span>
            </a>
          </li>
        </ul>

      </div>

      <!--居家列表-->
      <div class="user_nav">
        <ul class="user-list" :style="{backgroundColor:homeData.kingKongModule ? homeData.kingKongModule.norColor:'#000'}">
          <li v-for="(kingKong,index) in homeData.kingKongModule ? homeData.kingKongModule.kingKongList:[]" :key="index">
            <a :href="kingKong.schemeUrl">
              <img v-lazy="kingKong.picUrl" alt="">
              <p>{{kingKong.text}}</p>
            </a>
          </li>
        </ul>
      </div>

      <!--新人专享-->
      <div class="newExclusive">
        <div class="new-header">
          <span>新人专享礼</span>
        </div>
        <div class="new-main">
          <div class="new-left">
            <a href="javascript:;">
              <p>新人专享礼包</p>
              <div class="new-img">
                <div>
                  <img v-lazy="'//yanxuan.nosdn.127.net/ba4d635ec94ad95b28bfab6500900659.png'" alt="">
                </div>
              </div>
            </a>
          </div>
          <div class="new-right">
            <div class="weal-wrap">
              <a class="new-weal" href="javascript:;">
                <div class="weal-list">
                  <p>福利社</p>
                  <p>今日特价</p>
                </div>
                <div class="weal-img">
                  <img
                    v-lazy="'http://yanxuan.nosdn.127.net/9f43502719c1a669d9063e199605bf0f.png?imageView&thumbnail=200x200&quality=75'"
                    alt="">
                  <div class="new-money">
                    <p>￥109</p>
                    <p>￥169</p>
                  </div>
                </div>
              </a>
            </div>
            <div class="weal-wrap">
              <a class="new-weal" href="javascript:;">
                <div class="weal-list">
                  <p>新人拼团</p>
                  <p class="new-mail">1元起包邮</p>
                </div>
                <div class="weal-img">
                  <img
                    v-lazy="'https://yanxuan.nosdn.127.net/b60e3b6a07a7a1673c82b0c1e1104382.png?imageView&thumbnail=200x200&quality=75'"
                    alt="">
                  <div class="new-money">
                    <p>￥1</p>
                    <p>￥9.9</p>
                  </div>
                </div>
              </a>
            </div>

          </div>
        </div>
      </div>

      <!--品牌制造商直供-->
      <div class="direct">
        <div class="direct-header">
          <span>品牌制造商直供</span>
          <a href="javascript:;">
            <span>更多</span>
            <i class="iconfont icon-jiantou"></i>
          </a>
        </div>
        <ul class="direct-main">
          <li v-for="(newProduct,index) in homeData.manufacturer?homeData.manufacturer.newProduct:[]" :key="index">
            <a class="main-wrap" href="javascript:;">
              <div class="main-img">
                <div class="img-header">
                  <p>{{newProduct.name}}</p>
                  <p>
                    <span>{{newProduct.price}}</span>
                    <span class="new-active">上新</span>
                  </p>
                </div>
                <img v-lazy="newProduct.image" alt="">
              </div>

            </a>
          </li>
          <li v-for="(product,index) in homeData.manufacturer?homeData.manufacturer.product:[]" :key="'product-'+index">
            <a class="main-wrap" href="javascript:;">
              <div class="main-img">
                <div class="img-header">
                  <p>{{product.name}}</p>
                  <p>
                    <span>{{product.price}}</span>
                  </p>
                </div>
                <img v-lazy="product.image" alt="">
              </div>
            </a>
          </li>
        </ul>
      </div>

      <!--热搜榜-->
      <div class="hot-bot">
        <div class="hot-header">
          <p>类目热销榜</p>
        </div>
        <div class="hot-main">

          <div class="main-header">
            <a class="item" href="javascript:;" v-for="(hot,index) in homeData.hotBot?homeData.hotBot.hots:[]" :key="index">
              <p>{{hot.name}}</p>
              <img v-lazy="hot.image" alt="">
            </a>
          </div>

          <div class="main-bottom">
            <ul class="main-list">
              <li v-for="(commodity,index) in homeData.hotBot?homeData.hotBot.commoditys:[]" :key="'commodity-'+index">
                <a href="javascript:;">
                  <p>{{commodity.name}}</p>
                  <img v-lazy="commodity.image" alt="">
                </a>
              </li>
            </ul>
          </div>

        </div>

      </div>

      <!--人气推荐-->
      <div class="recommend">
        <div class="recommend-header">
          <span>人气推荐</span>
          <a href="javascript:;">
            <span>更多</span>
            <i class="iconfont icon-jiantou"></i>
          </a>
        </div>
        <a class="recommend-main" href="javascript:;">
          <div>
            <img
              v-lazy="homeData.popularItemList?homeData.popularItemList.popularMain.primaryPicUrl+'?imageView&quality=65&thumbnail=280x280':''" alt="">
          </div>
          <div class="every">
            <span class="item">每单满299减69</span>
            <span class="item">每单满299减69</span>
            <p>泰国制造天然乳胶枕护颈</p>
            <p>0合成SGS全程监控</p>
            <p>￥199</p>
          </div>
        </a>
        <div class="recommend-bottom">
          <ul class="recommend-list">
            <li v-for="(popular,index) in homeData.popularItemList?homeData.popularItemList.populars:[]">
              <a href="javascript:;">
                <div class="img">
                  <img :src="popular.primaryPicUrl+'?imageView&quality=65&thumbnail=280x280'" alt="">
                </div>
                <div>
                  <span>{{popular.name}}</span>
                  <span class="money">￥{{popular.counterPrice}}</span>
                </div>
                <div>
                  <span class="hot-sale">爆品</span>
                  <span class="hot-sale">限时购</span>
                </div>

              </a>
            </li>
          </ul>
        </div>

      </div>

      <!--实时好评-->
      <div class="scene_light">
        <ul class="scene-list">
          <li v-for="(scenes,index) in homeData.sceneLightShoppingGuideModule?homeData.sceneLightShoppingGuideModule:[]" :key="index">
            <p>{{scenes.styleItem.title}}</p>
            <p>{{scenes.styleItem.desc}}</p>
            <div class="img-list">
              <span v-for="(scene,index) in scenes.styleItem.picUrlList" :key="index">
                <img :src="scene+'?imageView&quality=65&thumbnail=280x280'" alt="">
              </span>
            </div>
          </li>
        </ul>
      </div>

      <!--引入外部组件为分类-->
      <CategoryItem/>
    </div>
  </div>

</template>

<script>
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.css'
  import BScroll from 'better-scroll'
  import CategoryItem from '../../../components/CategoryItem/CategoryItem.vue'
  import {mapState} from 'vuex'
  export default {

    components:{
      CategoryItem
    },

    mounted() {
      new BScroll('.bscoll-wrap',{
        click:true,
        mouseWheel: true,
        scrollbar: {
          fade: true,
          interactive: false // 1.8.0 新增
        }
      })

    },

    methods: {
      _initSwiper() {
        var mySwiper = new Swiper(".swiper-container", {
          direction: "horizontal",
          loop: true,
          autoplay: true, //自动轮播
          speed: 1000,
          pagination: {
            el: ".swiper-pagination",
            type: "custom",
            renderCustom: function(swiper, current, total) {
              var customPaginationHtml = "";
              for (var i = 0; i < total; i++) {
                //判断哪个分页器此刻应该被激活
                if (i == current - 1) {
                  customPaginationHtml +=
                    '<span class="swiper-pagination-customs swiper-pagination-customs-active"></span>';
                } else {
                  customPaginationHtml +=
                    '<span class="swiper-pagination-customs"></span>';
                }
              }
              return '<span class="swiperPag">'+customPaginationHtml+'</span>';
            }
          }
        });
      }
    },

    computed:{
      ...mapState({
        homeData:state => state.home.homeData
      })
    },

    watch:{
      homeData(){
        this.$nextTick(() => {
          this._initSwiper();
        })
      }
    }


  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .bscoll-wrap
    position absolute
    top 0
    bottom 100px
    width 750px
    .advise-wrap
      padding-top 140px
    .swiper-container
      width 100%
      height 400px
      .swiper-wrapper
        .swiper-slide
          img
            width 100%
            height 100%
      .swiper-pagination
        width 100%
        height 50px
        .swiper-pagination-customs
          display inline-block
          width 40px
          height 2px
          margin 0 5px
          background-color rgba(255,255,255,.5)
        .swiper-pagination-customs-active
          width 40px
          height 2px
          display: inline-block
          background-color: red


    .service
      background-color white
      .service-list
        display flex
        justify-content space-around
        width 100%
        height 72px
        align-items center
        li
          .service-item
            display flex
            align-items center
            color #B4282D
            font-size 24px
            i
              margin-right 10px


    .user_nav
      .user-list
        display flex
        flex-wrap wrap
        li
          width 110px
          height 165px
          margin 10px 20px 0
          a
            width 100%
            height 100%
            img
              width 110px
              height 110px
            p
              text-align center
    .scene_light
      background-color white
      padding 0 20px 20px
      margin-bottom 20px
      .scene-list
        display flex
        flex-wrap wrap
        li
          width 48%
          margin 0 5px 5px 0
          box-sizing border-box
          padding 20px
          margin 10px 0 0 10px
          background-color #eee
          .img-list
            display flex
            img
              width 150px
              height 150px
          p:nth-child(1)
            font-size 30px
            padding-bottom 10px

    .newExclusive
      margin-bottom 20px
      padding-bottom 20px
      background-color white
      .new-header
        text-align center
        height 90px
        line-height 90px
        font-size 30px
        vertical-align middle
        &:before
          content ''
          display inline-block
          width 30px
          height 4px
          margin-right 20px
          background-color #000
          vertical-align middle
        &:after
          content ''
          display inline-block
          width 30px
          height 4px
          margin-left 20px
          background-color #000
          vertical-align middle
      .new-main
        display flex
        padding 0 40px 20px
        .new-left
          width 48%
          padding 40px 0 0 20px
          background-color #F9E9CF
          a
            display flex
            flex-direction column
            p
              font-size 30px
            .new-img
              width 100%
              text-align center
              margin-top 40px
              img
                width 258px
                height 257px

        .new-right
          width 50%
          margin-left 5px
          .weal-wrap
            padding-top 10px
            &:first-child
              background-color #FBE2D3
              margin-bottom 5px
            &:last-child
              background-color #FFECC2
            .new-weal
              display flex
              justify-content space-around
              .weal-img
                width 200px
                height 200px
                position relative
                .new-money
                  position absolute
                  top 0
                  right 30px
                  width 80px
                  height 80px
                  box-sizing border-box
                  border-radius 50%
                  background-color #F59524
                  padding 20px 5px
                  color white
                  opacity .8
                  p
                    text-align center
                    &:last-child
                      font-size 10px
                      text-decoration line-through
                img
                  width 100%
                  height 100%
              .weal-list
                p
                  margin 20px 0 0 20px
                  white-space nowrap
                  &:first-child
                    font-size 30px
                  &.new-mail
                    box-sizing border-box
                    padding 4px
                    background-color #CBB693
                    color white
                    white-space nowrap
    .direct
      background-color white
      padding 0 30px 30px
      margin-bottom 30px
      .direct-header
        font-size 30px
        height 100px
        line-height 100px
        a
          float right

      .direct-main
        display flex
        flex-wrap wrap
        li
          width 48%
          margin 5px
          .main-wrap
            display flex
            flex-direction column
            .main-img
              position relative
              .img-header
                position absolute
                left 50%
                transform translate(-50%)
                top 20px
                p
                  margin-top 10px
                  &:first-child
                    font-size 28px
                    white-space nowrap
                    text-align center
                  &:last-child
                    text-align center
                    .new-active
                      height 20px
                      padding 5px
                      display inline-block
                      background-color #CBB693
                      color white
                      text-align center
                      line-height 15px
              img
                width 100%
                height 100%

    .hot-bot
      padding 0 20px 30px
      margin-bottom 20px
      background-color white
      .hot-header
        height 100px
        font-size 30px
        line-height 100px

      .hot-main
        .main-header
          display flex
          .item
            flex 1
            display flex
            justify-content space-around
            margin-left 10px
            &:first-child
              background-color #F9F3E4
            &:last-child
              background-color #EBEFF6
            p
              position relative
              line-height 170px
              font-size 28px
              &:after
                content ''
                position absolute
                left 0
                top 60%
                width 50px
                height 4px
                background-color #000
            img
              width 200px
              height 200px
        .main-bottom
          .main-list
            display flex
            flex-wrap wrap
            li
              width 23%
              background-color #eee
              margin 10px 0 0 10px
              padding-right 4px
              a
                display flex
                flex-direction column
                align-items center
                padding 10px 0
                img
                  width 120px
                  height 120px


    .recommend
      background-color white
      padding 0 30px 40px
      margin-bottom 20px
      .recommend-header
        font-size 30px
        display flex
        justify-content space-between
        height 100px
        line-height 100px

      .recommend-main
        width 690px
        height 280px
        display flex
        justify-content space-around
        align-items center
        background-color #FEF0DF
        img
          width 280px
          height 280px
        .every
          .item
            display inline-block
            border 1px solid red
            color red
            margin-bottom 10px
            &:nth-child(2)
              margin-left 10px
        p
          margin-top 10px
          &:nth-child(3)
            font-size 28px
          &:nth-child(5)
            color red

      .recommend-bottom
        .recommend-list
          display flex
          li
            width 33%
            &:nth-child(2)
              margin 0 4px
            a
              display flex
              flex-direction column
              .img
                background-color #eee
                img
                  width 216px
                  height 216px
              .money
                color red
              .hot-sale
                display inline-block
                color red
                border 2px solid red
                padding 5px
                border-radius 5px
              .full
                display inline-block
                border 2px solid red
                color red
</style>
