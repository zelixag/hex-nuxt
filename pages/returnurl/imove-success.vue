<style lang='less' scoped>
  // @import "../../static/styles/color";
</style>

<template>
  <div class="hex-flex">
    <div class="auth hex-flex_auto">
      <div class="lp_top2 " style="color:white;">
        <div class="n-banner3 n-wrap2 forgot_ps">
          <h2 class="thank_you_new" style="padding-top: 0; ">Thank You!</h2>
          <p>
            Thank you for contacting us!<br> We'll get back to you as soon as possible.
          </p>
          <div class="n-sign n-vite n-content b_contant new_ps_media_btn new_thank_btn">
            <router-link :to="{path: '/index.html'}">BACK TO HOME
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import $ from 'jquery'
  export default {
    name: 'imovesuccess',
    layout: 'default2',
    components: {},
    mounted() {},
  }
</script>
