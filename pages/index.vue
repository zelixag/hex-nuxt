<template>
  <div class="home hex-flex">
    <div class='headarea'>
      <div class='welcome'>
<!--        <div class="ad"><nuxt-link to="/LICO"><img src="../static/images/ad.png"/></nuxt-link></div>-->
        <div class='bannel'>
          <Bannelarticle style="position: absolute;top: 0;"/>
          <p class='hex'>{{ $t("home.bannelTitle") }}</p>
          <p class='perceive_hex'>{{$t("home.bannelMarkedWords") }}</p>
          <swiper/>
          <currency/>
        </div>
      </div>
    </div>
    <div class='area'>
      <trade/>
      <exprience/>
      <terminal/>
    </div>
<!--    <div class="download_load" :class="{'download_load_block':IsPhone}">-->
<!--      <img v-if="$store.state.hex_lang.locale=='ja_jp'" src="../static/images/load_jp.png" alt="">-->
<!--      <img v-if="$store.state.hex_lang.locale=='en_us'" src="../static/images/load_en.png" alt=""> -->
<!--      <img v-if="$store.state.hex_lang.locale=='zh_cn'" src="../static/images/load_zh.png" alt="">  -->
<!--    </div>-->
  </div>
</template>
<script>
  import trade from "@/components/home/trade";
  import exprience from "@/components/home/exprience";
  import terminal from "@/components/home/terminal";
  import swiper from "@/components/home/swiper";
  import Bannelarticle from "@/components/home/banner-article";
  import currency from "@/components/home/currency-figure";

  export default {
    name: "Home",
    watch: {
      '$store.state.hex_lang.locale': function () {
        // this.getarticle()
      }
    },
    components: {
      trade,
      exprience,
      terminal,
      swiper,
      Bannelarticle,
      currency
    },
    data() {
      return {
        IsPhone: false
      };
    },
    methods: {
      isphone() {
        var userAgentInfo = navigator.userAgent;
        var Agents = new Array("Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod");
        var flag = false;
        for (var v = 0; v < Agents.length; v++) {
          if (userAgentInfo.indexOf(Agents[v]) > 0) {
            flag = true;
            break;
          }
        }
        this.IsPhone = flag;
      }
    },
    mounted() {
      this.isphone();
    },
    created() {

    },
    beforeDestroy() {
      this.$socket.cleartimer(this.$socket.url.quotation_daily_getall_figure)
    }
  };

</script>
<style lang='less' scoped>
  .swiper-container {
    margin-top: 60px !important;
  }

  .headarea {
    min-width: 1200px;
    background: #131316;
    background-size: 100% auto;
    background-image:url(../static/images/banner.4f895372.png);
    }

  .por.area {
    /*  padding-top:142px;*/
    padding-top: 40px;
  }

  .headarea .bg1c {
    background: rgba(28, 27, 54, 0.1098);
  }

  .headarea .bg1c /deep/ .header {
    background-color: rgba(30, 34, 42, 1);
  }

  .welcome {
    padding-top: 40px;
    position: relative;
  }

  .swiper_area {
    width: 1200px;
    position: absolute;
    top: -70px;
    left: 0;
    right: 0;
    margin: auto;
  }

  .hex {
    text-align: center;
    font-size: 30px;
  }

  .perceive_hex {
    text-align: center;
    margin-top: 10px;
    font-size: 32px;
  }

  .bgf5 {
    .h400 {
      height: 400px;
      background: #1c1b36;
    }
    background: #f5f5f8;
  }

  .home {
    background: white;
    color: black;
  }

  .bannel {
    min-height: 400px;
    margin-top: 59px;
    color: white;
    text-align: center;
    .bannel-logo {
      width: 50px;
      height: 63px;
      margin: 0px auto 20px;
    }
  }

  .menu-cur {
    background: #14a2a5;
    color: white;
  }

  .download_load {
    position: absolute;
    bottom: 0;
    z-index: 5;
    right: 5px;
    text-align: right;
  }
  .download_load img{
    width:50%;
  }

  .download_load_block {
    display: block;
  }
  .ad{
    position: absolute;
    right: 10%;
  }
  .ad img{
    width: 200px;
  }
  .ad img:hover{
    width: 210px;
  }
</style>
