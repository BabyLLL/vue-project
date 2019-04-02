<template>
  <div class="categoryId-wrap">
    <div class="category-id">

      <div class="category-img">
        <img :src="categoryImg" alt="">
      </div>

      <div class="category-wrap">
        <ul class="category-list">
          <li v-for="(category,index) in categorys" :key="category.id">
            <a href="javascript:;">
              <div><img
                v-lazy="category.bannerUrl+'?imageView&quality=85&thumbnail=144x144'"
                alt=""></div>
              <div>
                <span>{{category.name}}</span>
              </div>
            </a>
          </li>
        </ul>
      </div>



    </div>


  </div>

</template>

<script>
  import BScroll from 'better-scroll'
  import {mapState} from 'vuex'
  export default {

    props:{
      categorys:Array,
      categoryImg:String
    },
    mounted(){
      this.$store.dispatch('getCategory',() => {
        this.$nextTick(() => {
          new BScroll('.categoryId-wrap',{
            click:true,
            mouseWheel: true,
            scrollbar: {
              fade: true,
              interactive: false // 1.8.0 新增
            }
          })
        })
      })
    },
    watch:{
      categoryImg(e){
        this.imgUrl = e
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .categoryId-wrap
    width 80%
    height 100%
    .category-id
        padding 20px
      .category-img
        img
          width 100%
      .category-wrap
        .category-list
          display flex
          flex-wrap wrap
          margin-top 30px
          li
            width 150px
            margin-right 25px
            a
              display flex
              flex-direction column
              text-align center
              img
                width 100%
</style>
