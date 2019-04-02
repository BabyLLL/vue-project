<template>
  <div>
    <div class="categoryItem-wrap" v-for="(categoryModule,index) in homeData.categoryModule?homeData.categoryModule:[]">
      <a class="category-img" href="javascript:;">
        <img :src="categoryModule.titlePicUrl+'?imageView&quality=65&thumbnail=280x280'" alt="">
      </a>

      <div class="category-wrap" :class="'category-wrap_'+index">
        <ul class="category-list">
          <li v-for="(category,index) in categoryModule.itemList" :key="index">
            <a href="javascript:;">
              <div class="images"><img :src="category.primaryPicUrl+'?imageView&quality=65&thumbnail=280x280'" alt=""></div>
              <div><span>{{category.name}}</span></div>
              <div class="category-money"><span>￥{{category.counterPrice}}</span></div>
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

    mounted(){
      if(!this.homeData.categoryModule){
        return
      }
      this.myScroll = new BScroll('.category-wrap',{
        click:true,
        scrollX: true
      })

    },

    computed:{
      ...mapState({
        homeData:state => state.home.homeData
      })
    },
    watch:{
      homeData(){
        this.$nextTick(() => {
          for (let i = 0; i < this.homeData.categoryModule.length; i++) {
            new BScroll('.category-wrap_'+i,{
              click:true,
              scrollX: true
            })
          }
        })
      }
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
