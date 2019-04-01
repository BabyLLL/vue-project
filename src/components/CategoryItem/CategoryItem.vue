<template>
  <div class="categoryItem-wrap">
    <a class="category-img" href="javascript:;">
      <img src="../../../static/img/fenlei.jpg" alt="">
    </a>

    <div class="category-wrap">
      <ul class="category-list">
        <li v-for="(category,index) in categorys" :key="index">
          <a href="javascript:;">
            <div class="images"><img src="../../../static/img/fenlei1.png" alt=""></div>
            <div><span>网易智造T300无线吸尘器</span></div>
            <div class="category-money"><span>￥1599</span></div>
          </a>
        </li>
      </ul>
    </div>

  </div>

</template>

<script>
  import BScroll from 'better-scroll'
  export default {
    data(){
      return{
        categorys:['1','1','1','1','1','1','1','1']
      }
    },
    mounted(){
      new BScroll('.category-wrap',{
        click:true,
        scrollX: true
      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .categoryItem-wrap
    width 100%
    background-color white
    padding-bottom 50px
    margin-top 20px
    .category-img
      width 100%
      img
        width 100%
        height 100%

    .category-wrap
      width 100%
      padding 0 20px 20px 20px
      display flex
      .category-list
        display flex
        margin-top 20px
        li
          margin-right 10px
          width 200px
          a
            display flex
            flex-direction column
            .images
              background-color #eee
              img
                width 200px
                height 200px
            .category-money
              color red
</style>
