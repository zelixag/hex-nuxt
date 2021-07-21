<style lang='less' scoped>
  @import "../../static/styles/color";
  .hex-flex{color:#3B4251;background-color:#fff;}
  img{width: unset;vertical-align: middle;}
  .n-banner3{
    text-align: center;
  }
  .n-wrap2 {
    width: 1200px;
    margin: 0 auto;
  }
  .forgot_ps {
    margin-top: 100px;
    margin-bottom: 120px;
  }
  .n-banner3 .thank_you_new {
    margin-bottom: 40px;
    padding-top: 140px;
    font-size: 50px;
    font-weight: 700;
    color: #14a2a5;
  }
  .n-banner3 p {
    color: #676d7d;
    font-size: 18px;
    line-height: 28px;
  }
  .n-sign {
    border-radius: 5px;
    text-align: center;
    display: inline-block;
  }
  .b_contant {
    background: linear-gradient(180deg,#2cdfcc,#1bc3b2);
    box-shadow: 2px 4px 13px rgba(31,201,183,.34);
    width: 205px;
    line-height: 51px;
  }
  .b_contant:hover {
    background: linear-gradient(180deg, #21D7C4, #12AB9B);
  }
    .new_thank_btn {
      margin-top: 100px;
    }
    .n-vite a {
      color: #fff;
      font-size: 18px;
      font-weight: 700;
    }
  @media only screen and (max-width: 768px){
    .n-wrap2 {
      width: 100%!important;
      text-align: left!important;
      padding: 0 20px;
    }
  }
</style>

<template>
  <div class="hex-flex">
    <div class="auth hex-flex_auto">
      <div class="lp_top">
    <div class="n-banner3 n-wrap2 forgot_ps">
        <h2 class="thank_you_new" style="padding-top: 0;margin-top: 0;">Thank You!</h2>
        <p>
            Thanks for applying giraffeclick affiliate program. <br>
            Giraffeclick sent a email to your registered mail address, please check.
        </p>
        <div class="n-sign n-vite n-content b_contant new_ps_media_btn new_thank_btn"><nuxt-link to="/">BACK TO
            HOME</nuxt-link></div>
    </div>
</div>
    </div>
  </div>
</template>

<script>
  import $ from 'jquery'
  export default {
    name: 'person_kyc',
    components: {},
    mounted() {},
    data() {
      return {
      		}
		},
    methods: {
    }

  }
</script>
