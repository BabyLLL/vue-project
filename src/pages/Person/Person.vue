<template>
<div>Person</div>
</template>

<script>
  export default {
    beforeRouteEnter(to,from,next){
      next((component) => {
        if(component.$store.state.user.user.__id){
          next()
        }else{
          next('/login')
        }
      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
