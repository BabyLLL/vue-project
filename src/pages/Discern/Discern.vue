<template>
  <div class="discern-wrap">
   <header class="header-wrap">
     <div class="header-top">
       <div class="skip-home">
         <a href="javascript:;">
           <i class="iconfont icon-shouye"></i>
         </a>
       </div>
       <div class="main-content">
         <a href="javascript:;" class="active">发现</a>
         <a href="javascript:;">甄选家</a>
       </div>
       <div class="skip-search">
         <a href="javascript:;">
           <i class="iconfont icon-sousuo"></i>
         </a>
         <a href="javascript:;">
           <i class="iconfont icon-gouwuche"></i>
         </a>
       </div>
     </div>

     <div class="header-tab">
       <ul class="header-list">
         <li :class="{active:index === tabIndex}" v-for="(tab,index) in tabs" :key="index" @click="handleTab(index)">
           <a href="javascript:;"><span>{{tab.tabName}}</span></a>
         </li>
       </ul>
     </div>

   </header>


  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import BScroll from 'better-scroll'
  export default {
    data(){
      return{
        tabIndex:0
      }
    },
    mounted(){
      this.$store.dispatch('getTab',() => {
        this.$nextTick(() => {
          new BScroll('.header-tab',{
            click:true,
            scrollX:true
          })
        })
      })
    },
    computed:{
      ...mapState({
        tabs:state => state.discern.tabs
      })
    },
    methods:{
      handleTab(index){
        this.tabIndex = index
        this.$router.push('/discern/suggest')
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

  .discern-wrap
    .header-wrap
      .header-top
        padding 0 20px
        display flex
        justify-content space-between
        height 100px
        background-color #fafafa
        line-height 100px
        font-size 28px
        border-bottom 1px solid #d9d9d9
        i
          font-size 50px
        .main-content
          margin-left 40px
          a
            margin-left 20px
            &.active
              font-size 40px
              font-weight bold
              color red

        .skip-search
          a
            &:last-child
              margin-left 20px
    .header-tab
      display flex
      background-color #fafafa
      border-bottom 1px solid #d9d9d9
      .header-list
        display flex
        li
          position relative
          padding 20px
          font-size 28px
          &.active
            a
              color red
            &:before
              content ''
              position absolute
              bottom 0
              left 50%
              transform translate(-50%)
              width 70%
              height 5px
              background-color red
              color red
          a
            white-space nowrap

</style>
