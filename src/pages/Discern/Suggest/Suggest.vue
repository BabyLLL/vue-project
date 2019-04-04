<template>
  <div class="suggest-wrap">
    <div class="suggest-content">

      <div v-for="(manual,index) in manualData" :key="index">

        <div v-for="(items,index) in manual.topics" :key="index">

            <div class="suggest-type2" v-if="items.type ===2 || items.type ===1 ">
              <a class="item-2" href="javascript:;">
                <div class="left">
                  <div class="item-staff">
                    <span><img :src="items.avatar" alt=""></span>
                    <span>{{items.nickname}}</span>
                  </div>
                  <p>{{items.title}}</p>
                  <p>{{items.subTitle}}</p>
                  <div class="item-look">
                    <i class="iconfont icon-chakan"></i>
                    <span>{{items.readCount}}人看过</span>
                  </div>

                </div>
                <div class="right">
                  <img v-lazy="items.picUrl" alt="">
                </div>
              </a>

            </div>

            <div class="suggest-type0"  v-if="items.type ===0">
              <a href="javascript:;">
                <div class="item-0">
                  <span><img v-lazy="items.avatar" alt=""></span>
                  <span>{{items.nickname}}</span>
                </div>
                <div class="item-title">{{items.title}}</div>
                <div class="item-img"><img v-lazy="items.picUrl" alt=""></div>
                <div class="item-look">
                  <i class="iconfont icon-chakan"></i>
                  <span>{{items.readCount}}k人看过</span>
                </div>

              </a>

            </div>

          <div>

          </div>

          <div>

          </div>

        </div>

      </div>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import BScroll from 'better-scroll'
  export default {

    mounted(){
      this.$store.dispatch('getManual',() => {
        new BScroll('.suggest-wrap',{
          click:true,
          mouseWheel: true,
          scrollbar: {
            fade: true,
            interactive: false // 1.8.0 新增
          }
        })
      })

    },

    computed:{
      ...mapState({
        manualData:state => state.suggest.manualData
      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

  .suggest-wrap
    position absolute
    left 0
    top 0
    bottom 100px
    width 100%
    .suggest-content
      width 100%
      padding-top 190px
      .suggest-type2
        background-color white
        padding 40px
        width 100%
        margin-bottom 20px
        box-sizing border-box
        .item-2
          display flex
          .left
            width 60%
            .item-staff
              display flex
              font-size 28px
              color #000
              span
                vertical-align middle
                line-height 54px
                img
                  width 54px
                  height 54px
                  border-radius 50%
                  margin-right 10px
                  vertical-align middle


            p
              &:nth-of-type(1)
                line-height 45px
                font-size 35px
                color #000
                padding-top 40px
              &:nth-of-type(2)
                padding-top 15px
                font-size 25px
            .item-look
              padding-top 40px
              i
                font-size 20px
          .right
            width 40%
            img
              width 100%
              height 100%
      .suggest-type0
        padding 40px
        background-color white
        margin-bottom 20px
        width 100%
        box-sizing border-box
        .item-0
          display flex
          span
            vertical-align middle
            line-height 54px
            margin-right 20px
            img
              width 54px
              height 54px
              vertical-align middle
              border-radius 50%

        .item-title
          padding-top 20px
          font-size 30px
          line-height 35px
        .item-img
          img
            padding-top 20px
            width 100%
            border-radius 5px

        .item-look
          padding-top 20px
</style>
