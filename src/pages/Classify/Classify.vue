<template>
  <div class="classify-wrap">
    <header class="header">
      <div class="header-main">
        <a href="javascript:;">
          <i class="iconfont icon-sousuo"></i>
          <span>搜索商品，共2222款好物</span>
        </a>
      </div>
    </header>

    <div class="classify-main">
      <div class="classify">
        <ul class="calssify-list">
          <li v-for="(category,index) in categoryList" :key="index" :class="{active:category.name === categoryList[categoryIndex].name}" @click="handleCategory(index,category)">{{category.name}}</li>
        </ul>
      </div>

      <CategoryId :categorys="categorys" :categoryImg="categoryImg"/>


    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  import CategoryId from '../../components/CategoryId/CategoryId.vue'
  import {mapState} from 'vuex'
  export default {

    data(){
      return{
        categoryIndex:0,
        categorys:[],
        categoryImg:''
      }
    },

    components:{
      CategoryId
    },

    mounted(){
      new BScroll('.classify',{
        click:true,
        mouseWheel: true,
      })
    },

    computed:{
    ...mapState({
        categoryList:state => state.category.categoryList
      }),
    },

    methods:{
      handleCategory(index,category){
        this.categoryIndex = index
        this.categorys = category.subCateList
        this.categoryImg = category.wapBannerUrl

      }
    },
    watch:{
      categoryList(event){
        this.categorys = event[0].subCateList
        this.categoryImg = event[0].wapBannerUrl
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

  .classify-wrap
    height 100%
    .header
      position fixed
      left 0
      top 0
      z-index 2
      box-sizing border-box
      height 88px
      padding 15px 40px
      background-color white
      border-bottom 1px solid #eee
      width 100%
      .header-main
        height 100%
        background-color #eee
        border-radius 5px
        text-align center
        line-height 55px
        font-size 28px

    .classify-main
      position absolute
      top 0
      left 0
      bottom 100px
      display flex
      padding-top 88px
      .classify
        width 25%
        height 95%
        padding 30px 0 40px
        border-right 1px solid #eee
        .calssify-list
          font-size 27px
          text-align center
          li
            position relative
            padding-top 40px
            height 50px
            line-height 50px
            &.active
              color #ab2b2b
              &:before
                content ''
                position absolute
                left 0
                bottom 0
                width 6px
                height 50px
                background-color #ab2b2b

</style>
