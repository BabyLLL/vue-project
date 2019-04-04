<template>
  <div class="login-wrap">
    <!--头部-->
    <div class="loginHeader">
      <span @click="$router.replace('/home')"><i class="iconfont icon-shouye"></i></span>
      <span class="login-img"></span>
      <div class="searchShop">
        <span><i class="iconfont icon-sousuo" @click="$router.push('/search')"></i></span>
        <span><i class="iconfont icon-gouwuche"></i></span>
      </div>
    </div>

    <!--首屏-->
    <div v-if="!isShowPhone && !isShowEmail" class="login-first">
      <!--logo-->
      <div class="logo">
        <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="">
      </div>

      <!--login按钮-->
      <div class="loginBtton">
        <div class="phone" @click="isShowPhone = !isShowPhone">
          <i class="iconfont icon-smartphone"></i>
          <span>手机号码登录</span>
        </div>
        <div class="e-mail" @click="isShowEmail = !isShowEmail">
          <i class="iconfont icon-shoujianxiang"></i>
          <span>邮箱账号登录</span>
        </div>
        <div class="regin"><span>手机号快捷注册<i class="iconfont icon-jiantou"></i></span></div>
      </div>

      <!--底部-->
      <ul class="weichat">
        <li>
          <span><i class="iconfont icon-weixin"></i></span>
          <span>微信</span>
        </li>
        <li>|</li>
        <li>
          <span><i class="iconfont icon-qq"></i></span>
          <span>QQ</span>
        </li>
        <li>|</li>
        <li>
          <span><i class="iconfont icon-weibo1"></i></span>
          <span>微博</span>
        </li>
      </ul>
    </div>

    <!--手机和邮箱登录-->
    <div class="login" v-if="isShowPhone || isShowEmail">
      <div class="login-img"><img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt=""></div>
      <div class="form-wrap">
        <form @submit.prevent="foo">
          <div class="form-phone" v-if="isShowPhone">
            <input type="text" placeholder="请输入手机号" v-model="phoneMsg">
            <span v-text="msgValue" style="color: red"></span>
            <input type="text" placeholder="请输入短信验证码" v-model="phoneCode">
            <div class="form-code">获取验证码</div>
            <div class="p-wrap">
              <p>遇到的问题?</p>
              <p>使用密码验证登录</p>
            </div>
          </div>
          <div class="form-phone" v-if="isShowEmail">
            <input type="text" placeholder="邮箱账号">
            <input type="text" placeholder="密码">
            <div class="p-wrap">
              <p>注册账号</p>
              <p>忘记密码</p>
            </div>
          </div>
          <button class="btn">登录</button>
        </form>
        <div class="login-footer">
          <button @click="isShowPhone=false,isShowEmail=false">其他登录方式</button>
          <p>注册账号 > </p>
        </div>
      </div>

    </div>

  </div>
</template>
<script>
  export default {

    data(){
      return{
        isShowPhone:false,
        isShowEmail:false,
        phoneMsg:'',
        msgValue:'',
        phoneCode:''
      }
    },

    methods:{
      foo(e){
        e.preventDefault();
        if (!this.someRequiredData) {
          return false;
        } else {
          return true;
        }
      }
    },

    watch:{
      phoneMsg(e){
        if(e.trim()){
          if(!(/^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/.test(e))){
            this.msgValue = '请输入正确的手机号'
            if(e.length>11 || e.length<11){
              this.msgValue = '手机号位11位'
            }
            return
          }else{
            this.msgValue=''
          }

        }else{
          this.msgValue = '不能为空'
          return
        }

      }
    }
  }
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  .login-wrap
    width 100%
    height 100%
    background-color #F2F6F5
    .loginHeader
      width 100%
      height 87px
      background-color #FBFBFB
      display flex
      padding 0 20px
      justify-content space-between
      align-items center
      box-sizing border-box
      position relative
      .searchShop
        display flew
        span
          margin-left 20px
      .iconfont
        font-size 44px
      .login-img
        height 54px
        width 172px
        position absolute
        left 50%
        top 50%
        transform translate(-50%,-50%)
        background-image url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/hd-s9f33319f5a-b1aa4c35e6.png)
        background-position-y -550px
        background-size 100%
    .login-first
      .logo
        width 100%
        height 410px
        position relative
        img
          width 268px
          height 90px
          position absolute
          left 50%
          top 50%
          transform translate(-50%,-50%)

      .loginBtton
        width 100%
        height 600px
        .phone
          width 670px
          height 88px
          line-height 88px
          background-color #C71423
          border 1px solid #C71423
          border-radius 4px
          color #fff
          text-align center
          margin 0 auto
          margin-bottom 40px
          display flex
          align-items center
          justify-content center
        .iconfont
          margin-right 10px
          font-size 40px
        .e-mail
          width 670px
          height 88px
          text-align center
          color #C71423
          border 2px solid #C71423
          border-radius 4px
          display flex
          align-items center
          justify-content center
          margin 0 auto
          .iconfont
            margin-right 10px
        .regin
          margin-top 40px
          font-size 32px
          text-align center
          .icon-jiantou
            font-size 32px
      .weichat
        width 100%
        height 20px
        display flex
        justify-content center
        margin-top 60px
        color #7E7E7E
      li
        padding 0 15px
    .login
      height 100%
      background-color white
      .login-img
        text-align center
        padding-top 50px
        img
          width 192px

      .form-wrap
        margin-top 50px
        padding 0 30px
        .form-phone
          padding-top 150px
          display flex
          flex-direction column
          position relative
          input
            width 97%
            height 90px
            margin 20px 0
            outline none
            border-bottom 1px solid #eee
            &::-webkit-input-placeholder
                font-size 28px
          .form-code
            position absolute
            right 20px
            bottom 160px
            font-size 27px
            border 2px solid #000
            padding 13px
            border-radius 13px

          .p-wrap
            display flex
            font-size 30px
            padding 50px 0
            justify-content space-between
        .btn
          height 100px
          width 100%
          background-color #b4282d
          border-radius 10px
          border none
          font-size 30px
          color white
      .login-footer
        text-align center
        font-size 28px
        button
          width 100%
          height 100px
          border 2px solid #b4282d
          border-radius 10px
          background-color white
          margin 40px 0
          color #b4282d
          font-size 30px
</style>
