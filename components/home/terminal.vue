<template>
  <div class='terminal_support'>
    <div class="w1200">
      <div class='terminal pos-r'>
        <div class='phone ovh fl'>
          <p class='terminal-title'>iLex Exchange APP</p>
          <!-- <p class=' terminal-text'>{{$t("home.terminalmultiPlatform")}}</p> -->
          <div class=' download ovh'>
            <div class="fl mgr20 download-apple" @mouseenter="showdownload(true)"
                 @mouseleave="showdownload(false)">
              <span class='apple '>{{$t("home.terminalIOS")}}</span>
            </div>
            <div class="fl download-apple" @mouseenter="com=1"
                 @mouseleave="com=0">
              <!-- <a href="https://images.ihuoqiu.com/XXXXXX/XXXXXX.apk"> -->
                <span class='android'>{{$t("home.terminalAndroid")}}</span>
              <!-- </a> -->
            </div>
          </div>
          <div class=' download'>
          <div v-show="downloadstate" class="qrcode-download">
              <img src="../../static/images/app_q.png" alt="ILEX" class="app">
          </div>
          <div v-show="com===1" class="qrcode-download coms">
              <p>
                <b>
                  <small>{{$t("home.coming")}}</small>
                </b>
              </p>
          </div>
          </div>
          <!--<div class=' download'>
            <div class="fl mgr20 download-apple">
              <a href="itms-services://?action=download-manifest&url=https://images.ihuoqiu.com/XXXXXX/XXXXXX.plist">
                <span class='apple  '>{{$t("c2c.Enterprise")}}</span></a>
            </div>
             <div class="fl download-apple" @mouseenter="showdownload(true)"
                 @mouseleave="showdownload(false)">
              <span class='apple qcode'>{{$t("home.qcode")}}</span>
            </div> 
          </div>-->

          <!--<div class='terminal-android '>-->
          <!--<a href="https://images.ihuoqiu.com/XXXXXX/XXXXXX.apk">-->
          <!--<span class='android'>{{$t("home.terminalAndroid")}}</span>-->
          <!--</a>-->
          <!--</div>-->
        </div>
        <div class="mac fr">
          <img src="~/static/images/imac.png" alt="">
        </div>
      </div>

    </div>
    <div class="index-deal ovh">
      <div class="w1200 index-deal-text">
        <div class="fl ">
        </div>
        <div class="fr logs">
          <nuxt-link v-if="!$userinfo.uid" to="/login" class="a-login">
            <button class="login">{{$t('home.headLogin')}}</button>
          </nuxt-link>
          <nuxt-link v-if="!$userinfo.uid" to="/register">
            <button class="register">{{$t('home.headRegister')}}</button>
          </nuxt-link>
          <nuxt-link v-else to="/deal/btc_usdt">
            <button class="register deal">{{$t('c2c.TradeNow')}}</button>
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import QRcode from 'qrcode'

  export default {
    name: 'terminal',
    data() {
      return {
        qrcode: '',
        com:0,
        downloadstate: false,
        downloadtimer: null,
      };
    },
    methods: {
      showdownload(e) {
        this.downloadtimer && clearTimeout(this.downloadtimer)
        if (!e) {
          this.downloadtimer = setTimeout(() => {
            this.downloadstate = e
          }, 300)
        } else {
          this.downloadstate = e
        }
      }
    },
    mounted() {
      QRcode.toDataURL(this.$store.state.hex_config.mobiledown).then((url) => {
        this.qrcode = url;
      })
    }
  };
</script>

<style lang='less' scoped>
  @import "../../static/styles/color";

  .logs {
    margin-top: 2px;
  }

  .terminal_support {
    padding-top: 10px;
    background: white;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    img.app {
      width: 120px;
      height: 120px;
      border: 1px solid #EEEEEE;
      display: block;
      margin: auto;
    }
    .pos-r {
      position: relative;
      height: 400px;
    }
  }

  h3 {
    padding-top: 60px;
  }

  .index-deal {
    height: 120px;
    background: linear-gradient(90deg, rgba(57, 62, 76, 1) 0%, rgba(41, 44, 56, 1) 100%);
  }

  .index-deal p {
    font-size: 24px;
    font-weight: 300;
    color: white;
    line-height: 50px;
  }

  .index-deal p.come {
    font-size: 14px;
    font-weight: 400;
    color: white;
    line-height: 14px;
    margin-top: 15px;
  }

  .index-deal .index-deal-text {
    padding-top: 30px;

  }

  .index-deal button {
    width: 200px;
    height: 50px;
    border-radius: 2px;
    color: white;
    font-size: 18px;
    display: inline-block;
    cursor: pointer;
  }

  a.a-login {
    margin-right: 20px;
  }

  .index-deal .login {
    margin-right: 20px;
    background: rgba(0, 142, 230, 1);
  }

  .index-deal .login:hover {
    background: rgba(13, 158, 248, 1);
  }

  .index-deal .register {
    background: rgba(3, 191, 123, 1);
  }

  .index-deal .register:hover {
    background: rgba(9, 213, 139, 1);
  }

  .register.deal {
    background: rgba(0, 142, 230, 1);
    line-height: 50px;
    text-align: center;
  }

  .register.deal:hover {
    background: rgba(13, 158, 248, 1);
  }

  .terminal {
    overflow: hidden;
    margin-top: 70px;
    position: relative;
    .phone {
      margin-bottom: 111px;
      .terminal-title {
        font-size: 24px;
        font-weight: 400;
        color: #333;
        line-height: 30px;
      }
      .terminal-text {
        margin-top: 20px;
        font-size: 14px;
        font-weight: 400;
        color: rgba(52, 75, 108, 1);
        line-height: 20px;
      }
      .phone-mode {
        display: inline-block;
        img {
          width: 50px;
          height: 80px;
        }
      }
    }
    .download {
      margin-top: 30px;
      div {
        width: 160px;
        border-radius: 3px;
        border: 1px solid #C6C5D1;
        cursor: pointer;
        .apple {
          font-size: 16px;
          padding-left: 47px;
          background: url('../../static/images/apple.svg') no-repeat 20px 9px;
          background-size: 18px 22px;
          display: block;
          line-height: 40px;
        }
        .qcode {
          background: none;
          padding-left: 0;
          text-align: center;
        }
      }
      div.download-apple:hover {
        color: @cl_link;
        border-color: @cl_link;
        a {
          color: @cl_link;
        }
        .apple {
          background: url('../../static/images/apple_check.svg') no-repeat 20px 9px;
          background-size: 18px 22px;
        }
        .qcode {
          background: none;
        }
      }
      .qrcode-download {
        text-align: center;
        width: 130px;
        padding: 4px;
        position: absolute;
        left: 1%;
      }
      .coms{
        left: 16.3%;
      }
    }
    /*.terminal-android {*/
    /*width: 340px;*/
    /*border-radius: 3px;*/
    /*margin-top: 20px;*/
    /*font-size: 16px;*/
    /*line-height: 22px;*/
    /*border: 1px solid #C6C5D1;*/
    /*text-align: center;*/

    /*}*/
    .android {
      padding-left: 47px;
      background: url('../../static/images/android.svg') no-repeat 20px 9px;
      background-size: 18px 22px;
      line-height: 40px;
      display: block;
    }
    .android:hover {
      color: @cl_link;
      border-color: @cl_link;
      background: url('../../static/images/android_check.svg') no-repeat 20px 9px;
      background-size: 18px 22px;
    }
    
    .computer {
      margin-left: 80px;
      .computer-pic {
        width: 80px;
        height: 72px;
      }
      .pc-download {
        margin-left: 40px;
        div {
          width: 180px;
          height: 40px;
          border: 1px solid #C6C5D1;
          line-height: 40px;
          .mac-load {
            padding-left: 70px;
            background: url('../../static/images/apple.png') no-repeat 31px 9px;
            background-size: 18px 22px;
            line-height: 40px;
          }
          .win-load {
            padding-left: 70px;
            background: url('../../static/images/window.png') no-repeat 31px 9px;
            background-size: 20px 20px;
            line-height: 40px;
          }
        }
      }
    }
  }

  // .mac {
  //   width: 610px;
  //   height: 315px;
  //   background: url("../../static/images/imac.png") no-repeat left top;
  //   background-size: 100% 100%;
  //   position: absolute;
  //   right: 0;

  // }
</style>
