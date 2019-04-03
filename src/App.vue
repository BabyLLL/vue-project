<template>
  <div id="app">

    <keep-alive>
      <router-view/>
    </keep-alive>

    <FooderGuide v-if="$route.meta.isShow"/>
  </div>

</template>

<script>
  import FooderGuide from './components/FooderGuide/FooderGuide.vue'
  export default {
    components:{
      FooderGuide
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

  #app
    height 100%
    width 100%

</style>
