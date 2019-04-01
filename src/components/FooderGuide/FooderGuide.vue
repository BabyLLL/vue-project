<template>
  <footer class="footer-wrap">
    <ul class="content">
      <li @click="handleSkip('/home')" :class="{active:$route.path.indexOf('/home') !== -1 }">
        <span>
          <i class="iconfont icon-shouye"></i>
        </span>
        <span>
          首页
        </span>
      </li>
      <li @click="handleSkip('/classify')" :class="{active:$route.path === '/classify'}">
        <span>
          <i class="iconfont icon-fenleiguanli"></i>
        </span>
        <span>
          分类
        </span>
      </li>
      <li @click="handleSkip('/discern')" :class="{active:$route.path === '/discern'}">
        <span>
          <i class="iconfont icon--dangan"></i>
        </span>
        <span>
          识物
        </span>
      </li>
      <li @click="handleSkip('/shop')" :class="{active:$route.path === '/shop'}">
        <span>
          <i class="iconfont icon-gouwuche"></i>
        </span>
        <span>
          购物车
        </span>
      </li>
      <li @click="handleSkip('/person')" :class="{active:$route.path === '/person'}">
        <span>
          <i class="iconfont icon-geren"></i>
        </span>
        <span>
          个人
        </span>
      </li>

    </ul>
  </footer>

</template>

<script>
  export default {
    methods:{
      handleSkip(path){
        this.$router.push(path)
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .footer-wrap
    position fixed
    left 0
    bottom 0
    width 100%
    height 100px
    background-color #fafafa
    .content
      display flex
      width 100%
      height 100%
      li
        flex 1
        display flex
        flex-direction column
        align-items center
        justify-content center
        &.active
          color purple
        span
          padding-top 10px
          i
            font-size 38px

</style>
