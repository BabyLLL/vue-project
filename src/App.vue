<template>
  <div id="app">

    <router-view/>

    <FooderGuide/>
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

</style>
