<style lang='less' scoped>
  @import "../../static/styles/color";

  .charge-money_tip {
    font-size: 18px;
    font-weight: bold;
    margin-right: 20px;
  }

  .charge-money_info {
    font-size: 14px;
    text-align: left;
    padding: 20px;
    box-shadow: 0 1px 0 0 rgba(133, 131, 172, 0.2);
    color: @cl_666;
    // position: relative;
  }

  .charge-money_info .title {
    margin-bottom: 7px;
    font-size: 12px;
  }

  .charge-money_info .btc {
    color: @cl_buy;
    font-size: 30px;
    font-weight: bold;
    margin-right: 5px;
  }

  .charge-money_info .cny {
    color: @cl_link;
    font-size: 30px;
    font-weight: bold;
    margin-right: 5px;
  }

  .charge-money_info .br {
    margin: 0 20px;
    border-right: 1px solid @cl_858;
    display: inline-block;
    height: 20px;
  }

  .charge-money_info_title {
    line-height: 36px;
    margin-bottom: 8px;
  }

  .charge-money_info_num {
    padding: 4px 0;
  }

  .charge-money_info_address_button {
    color: @cl_link;
    margin-top: 16px;
  }

  .charge-money-block {
    margin-top: 10px;
    background-color: @cl_fff;
  }

  .charge-money-block-title {
    padding: 18px 20px;
  }

  .charge-money-block-title .title_tip {
    font-size: 16px;
    font-weight: bold;
  }

  .hex_table_body .size0 {
    font-size: 0;
  }

  .hex_table_body .handle {
    color: @cl_link;
    font-size: 12px;
    margin-left: 30px;
  }

  .charge-money_address {
    font-size: 14px;
    width: 450px;
    position: relative;
  }

  .charge-money_address input {
    height: 40px;
    line-height: 40px;
    border: 1px solid #DDDDDD;
    width: 100%;
    padding: 5px 90px 5px 10px;
  }

  .charge-money_address .search-tip {
    width: 80px;
    background-color: @cl_link;
    color: @cl_fff;
    border: 1px solid @cl_link;
    text-align: center;
    display: inline-block;
    position: absolute;
    right: 0;
    top: 0;
    line-height: 40px;
    height: 40px;
  }

  .charge-money-block-search .search-tip::placeholder {
    color: @cl_bbb;
  }

  .charge-money_scan {
    display: inline-block;
  }

  .charge-money_scan span {
    line-height: 40px;
    height: 40px;
    margin-left: 10px;
    width: 100px;
    background-color: @cl_f0e;
    color: @cl_333;
    font-size: 14px;
    text-align: center;
    display: inline-block;
  }

  .charge-money_group {
    width: auto;
  }

  .charge-money_hint {
    padding: 10px;
    background-color: @cl_f9f;
    color: @cl_666;
    font-size: 12px;
    line-height: 24px;
    margin-top: 20px;
  }
  .charge-money_hint_master {
    padding: 10px;
    background-color: @cl_f9f;
    color: @cl_666;
    font-size: 12px;
  }
  .charge-money_hint .title {
    color: @cl_999;
  }

  .charge-money_info .title.tag {
    margin-top: 20px;
  }

  .charge-money_hint .tip {
    color: @cl_cd4;
    font-size: 14px;
    font-weight: 600;
  }

  .charge-money_hint .row {
    color: @cl_666;
  }

  .charge-money_follow {
    font-size: 12px;
    margin-top: 20px;
  }

  .charge-money_follow .charge-money_follow_tip {
    color: @cl_link;
    cursor: pointer;
  }

  .charge-money_address input[readonly] {
    background-color: @cl_f0f;
    color: @cl_000;
  }

  .charge-money_scan .code {
    width: 140px;
    height: 140px;
    position: absolute;
    right: -160px;
    top: 0;
    border: 1px solid #dddddd;
    background: white;
  }

  .charge-money_scan .code:before {
    content: '';
    position: absolute;
    top: 13px;
    left: -4px;
    z-index: 3;
    border: 1px solid #ccc;
    border-bottom: 0 none;
    border-right: 0 none;
    width: 8px;
    height: 8px;
    transform: rotate(-50deg);
    box-sizing: border-box;
    background: #fff;
  }

  .charge-money_scan .code.tag {
    bottom: -20px;
    top: inherit;
  }

  .charge-money_scan .code.tag:before {
    content: '';
    position: absolute;
    top: 95px;
    left: -4px;
    z-index: 3;
    border: 1px solid #ccc;
    border-bottom: 0 none;
    border-right: 0 none;
    width: 8px;
    height: 8px;
    transform: rotate(-50deg);
    box-sizing: border-box;
    background: #fff;
  }

  .charge-money_scan .get-code {
    position: relative;
  }

  .marked_words {

    display: none;
    width: 100px;
    right: -8px;
    top: 25px;
    background: rgba(255, 255, 255, 1);
    box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.2);
    padding: 4px 0;
    z-index: 100;
    .triangle {
      position: absolute;
      top: -6px;
      right: 17px;
      box-shadow: 0px -1px 2px 0px rgba(0, 0, 0, .2);
      border-bottom: 0 none;
      border-right: 0 none;
      width: 8px;
      height: 8px;
      -webkit-transform: rotate(45deg);
      -o-transform: rotate(45deg);
      -moz-transform: rotate(45deg);
      -ms-transform: rotate(45deg);
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      background: white;
    }
    span {
      display: block;
      text-align: center;
      line-height: 32px;
      font-size: 12px;
    }
    span.curret {
      background: rgba(240, 239, 247, 1);
    }
  }

  .sanj {
    position: absolute;
    top: -6px;
    border: 1px solid #fff;
    border-bottom: 0 none;
    border-right: 0 none;
    width: 12px;
    height: 12px;
    -webkit-transform: rotate(45deg);
    box-sizing: border-box;
    background: #fff;
  }

  .zhLocation {
    right: 88px;
  }

  .enLocation {
    right: 182px;
  }

  .erc20 {
    top: -46px;
  }
  .deposit_input{
    width: 50%;
    padding: 10px;
    font-size: 14px;
    border: 1px solid #dddddd;
  }
  .marb20{
    margin-bottom: 20px;
  }
  .tit{
    font-size: 18px;
  }
  .marb10{
    margin-bottom: 10px;
  }
  .fl_l{
    float: left;
  }
  .fl_r{
    float: right;
  }
  .s_tit{
    font-size: 12px;
    color: #999999;
  }
  .text_main{
    margin-top: 12px;
    padding-bottom: 20px;
    width: 50%;
  }
  .depositbtn{
    text-align: center;
    background:#14a2a5;
    color: #ffffff ;
    padding: 10px 0px;
    border-radius: 6px;
    border: none;
    font-size: 16px;
    width: 50%;
    margin: 30px 0;
    display: block;
  }
  .depositbtnmaster{
    text-align: center;
    background:#14a2a5;
    color: #ffffff ;
    padding: 10px 0px;
    border-radius: 6px;
    border: none;
    font-size: 16px;
    width: 50%;
    margin: 20px 0px 15px 0px;
    display: block;
  }
  .mart20{
    margin-top: 20px;
  }
</style>
<template>
  <div class="charge-money_info">
    <!-- imove deposit start -->
    <div v-if="depositType1 === 'Imove'">
      <form id='account_form' :action="$store.state.hex_config.imovesettlement" method="post" target="_blank">
        <input type="hidden" :value="token" name="token" />
        <input type="hidden" :value="$store.state.hex_lang.locale=='zh_cn'? 'zh':$store.state.hex_lang.locale=='en_us'? 'en':'en'" name="from_lang" />
        <p class="marb10">
          <span>{{$t('wallet.paymentAmount')}} (USD)</span>
        </p>
        <input type="text" class="deposit_input" v-model.trim="total_amount" required />
        <span class="normal-tip_error" v-if="total_amount_verfiy == 1" style="color: red;margin-left: 10px;">{{$t('wallet.imoveMixDeposit')}}</span>
        <span class="normal-tip_error" v-else-if="total_amount_verfiy == 2" style="color: red;margin-left: 10px;">{{$t('wallet.imoveMaxDeposit')}}</span>
        <span class="normal-tip_error" v-else-if="total_amount_verfiy == 3" style="color: red;margin-left: 10px;">{{$t('wallet.imoveMixFointsDeposit')}}</span>
        <p class="text_main">
          <span class="fl_l s_tit">USD = {{exchange_rate}} USDT</span>
          <span class="fl_r s_tit">{{$t('wallet.getAmount')}}: ≈ {{usdttotal_amount}} USDT</span>
        </p>
        <!-- <p class="text_main">
          <span class="fl_l s_tit">Fee: 1.23351 USDT</span>
        </p> -->
        <button class="depositbtn" @click="imove_deposit()" type="button">{{$t('wallet.confirm')}}</button>
        <!-- <div class="charge-money_hint">
          <p class="title">{{$t('wallet.safetyTips')}}</p>
          <p class="tip">
            {{$t('wallet.forbid')}}{{currencyname}}{{$t('wallet.forbidM')}}{{currencyname}}{{$t('wallet.forbidE')}}</p>
          <p v-html="currencyAll.tip">
          </p>
          <p v-if="currencyname=='EOS'">3. EOS 币充值当前暂不支持延时交易</p>
        </div> -->
      </form>
    </div>
      <!-- imove deposit end-->

      <!-- Mastercard deposit start -->
    <div v-else-if="depositType1 === 'Mastercard' || depositType1 === 'upi'">
      <!-- this is mastercard page -->
     <div v-if="$userinfo.securitylevel > 1">
      <p class="marb10"><span>{{$t('mycard.fullName')}}</span>:{{$userinfo.realname}}</p>
      <p v-if="depositType1 === 'Mastercard'" style="color: #CD4559;margin-bottom: 10px;font-size: 14px;">{{$t('wallet.Title')}}</p>
      <p v-if="depositType1 === 'upi'" style="color: #CD4559;margin-bottom: 10px;font-size: 14px;">{{$t('wallet.Title1')}}</p>
    
      <p class="marb10"><span>{{$t('wallet.paymentAmount')}} (USD)</span></p>
      <input type="text" v-model.trim="totalAmount" v-on:input="masterDepositFee()"  class="deposit_input" required>
      <span class="normal-tip_error" v-if="totalAmount_verfiy === 1" style="color: red;margin-left: 10px;">{{$t('wallet.masterLimit')}}</span>
      <span class="normal-tip_error" v-else-if="totalAmount_verfiy === 2" style="color: red;margin-left: 10px;">{{$t('wallet.imoveMixFointsDeposit')}}</span>
      <!-- <p class="mart20 marb10"><span>{{$t('wallet.fee')}} (USD)</span></p>
      <input v-model="fee" disabled="disabled" class="deposit_input"> -->
      <p class="text_main">
        <span class="fl_l s_tit">USD = {{masterRate}} USDT</span>
        <span class="fl_r s_tit">{{$t('wallet.getAmount')}}: ≈ {{amount}} USDT</span>
      </p>
      <p class="text_main">
        <span class="fl_l s_tit">{{$t('wallet.fee')}}: {{fee}} USDT</span>
      </p>
      <button @click="masterDeposit()" class="depositbtnmaster">{{$t('wallet.confirm')}} </button>
      <div class="charge-money_hint_master" v-if="depositType1 === 'Mastercard'">
      <p>{{$t('wallet.Span1')}}</p>
      </div>
      <div class="charge-money_hint_master" v-else-if="depositType1 === 'upi'">
        <p>{{$t('wallet.Span1')}}</p>
      </div>
     </div>
     <div v-else>
        <p><span>{{$t('wallet.masterUnauthorizedInfoA')}}<br><br>{{$t('wallet.masterUnauthorizedInfoB')}}</span>
        </p><br>
        <button class="depositbtn" v-loading="loading" @click="to_authverify">
            Verify
        </button>
     </div>
    </div>
    <!-- Mastercard deposit end -->
    <div v-else>
      <div
        :class="['sanj',$store.state.hex_lang.locale=='zh_cn'?'zhLocation':'enLocation',{'erc20':currencyAll.currency.currencyname==='usdt'}]"></div>
      <div class="charge-money_group">
        <p class="title"> {{$t('wallet.rechargeAddress')}}</p>
        <div class="clearfix">
          <div class="charge-money_address left">
            <input v-if="ethRechargeAddressForErc20 && currencyAll.currency.currencyname==='USDT'"
                  readonly
                  type="text"
                  id='keycopy'
                  :class="['ipt_hover','keycopy'+currencyAll.currency.id]"
                  v-model="ethRechargeAddressForErc20">

            <input v-else
                  readonly
                  type="text"
                  id='keycopy'
                  :class="['ipt_hover','keycopy'+currencyAll.currency.id]"
                  v-model="currencyAll.address">
            <span
              :class="['search-tip','recharge_address'+currencyAll.currency.id]"
              :data-clipboard-target="'.keycopy'+currencyAll.currency.id"
              @click="copy(currencyAll.currency.id)">{{$t('wallet.copyAddress')}}</span>
          </div>
          <div class="charge-money_scan left">
            <span class='get-code'
                  @click.stop="getCode">
              {{$t('wallet.scanCode')}}
              <span class="code"
                    v-show="qrcodeState">
                <img :src="qrcode"/>
              </span>
            </span>
          </div>
        </div>
        <div v-if="currencyAll.currency.istagrequired">
          <p class="title tag"> {{$t('c2c.Addresslabel')}}</p>
          <div class="clearfix">
            <div class="charge-money_address left">
              <input readonly
                    type="text"
                    id='keycopys'
                    :class="['ipt_hover','keycopys'+nextUid]"
                    v-model="nextUid">
              <span
                :class="['search-tip','recharge_address'+ nextUid]"
                :data-clipboard-target="'.keycopys'+ nextUid"
                @click="copy(nextUid)">{{$t('wallet.copyAddress')}}</span>
            </div>
            <div class="charge-money_scan left">
            <span class='get-code'
                  @click.stop="getCode('tag')">
              {{$t('wallet.scanCode')}}
              <span class="code tag"
                    v-show="tagQrcodeState">
                <img :src="tagQrcode"/>
              </span>
            </span>
            </div>
          </div>
        </div>

        <p class="charge-money_follow">
          {{$t('wallet.lookOver')}}
          <nuxt-link
            to="/person/wallet-history"
            class="charge-money_follow_tip"
            tag="span"> {{$t('wallet.moneyRecord')}}
          </nuxt-link>
          {{$t('wallet.trackingState')}}
        </p>
      </div>
      <div class="charge-money_hint">
        <p class="title">{{$t('wallet.safetyTips')}}</p>
        <p class="tip">
          {{$t('wallet.forbid')}}{{currencyname}}{{$t('wallet.forbidM')}}{{$t('wallet.forbidE')}}</p>
        <p v-html="currencyAll.tip">
        </p>
        <p v-if="currencyname=='EOS'">{{$t('wallet.EOStip')}}</p>
      </div>
    </div>
  </div>
</template>
<script>
  import coinselect from '@/components/security/coin-select'
  import QRcode from 'qrcode'
  import Clipboard from 'clipboard'
  import CryptoJS from 'crypto-js'
  import $ from 'jquery'

  export default {
    name: 'articles',
    components: {
      coinselect,
    },
    watch: {
      total_amount(old) {  //imvoe
        this.total_amount = this.total_amount.replace(/[^\d\.]/g, '')
        if (old) {
          // const price = this.$store.getters.get_exchange_torate('usd', old, 'usdt')
          this.exchange_rate = this.global_get_tofixed(this.$store.getters.get_exchange_rate_by_name('usd','usdt') * 0.99,8)
          this.usdttotal_amount = this.global_get_tofixed(old*this.exchange_rate,8) 
          if(this.total_amount == '' || old < 10) {
            this.total_amount_verfiy = 1
          }else if(old > 100000) {
            this.total_amount_verfiy = 2
          }else{
            var is_lttwofoints = old.match(/^\d+(\.\d{1,2})?$/)
            if(is_lttwofoints === null){
              this.total_amount_verfiy = 3
            }else{
              this.total_amount_verfiy = 0
            }
          }
        }
      },
      totalAmount(old) {
        if(old) {
          this.totalAmount = this.totalAmount.replace(/[^\d\.]/g, '')
          if(old < 10 || old > 5000) {
            this.totalAmount_verfiy = 1
          }else{
            var is_lttwofoints = old.match(/^\d+\.\d{3,}$/)
            if(is_lttwofoints){
              this.totalAmount_verfiy = 2
            }else{
              this.totalAmount_verfiy = 0
            }
          }
        }
      }
    },
    computed: {
      currencyname: function () {
        if (this.currencyAll.currency.currencyname) {
          return this.currencyAll.currency.currencyname.toUpperCase()
        }
        return ''
      }
    },
    props: {
      ethRechargeAddressForErc20: {
        type: String,
        default: ""
      },
      currencyAll: {
        type: Object,
        default: function () {
          return {}
        }
      },
      depositType1: {
        type: String,
        default: ""
      }
    },
    data() {
      return {
        reminder: '',
        qrcode: '',
        qrcodeState: false,
        tagQrcode: '',
        tagQrcodeState: false,
        nextUid: '',
        exchange_rate: this.global_get_tofixed(this.$store.getters.get_exchange_rate_by_name('usd','usdt')*0.99,8),
        address: '',
        usdttotal_amount: 0,
        total_amount: '',
        total_amount_verfiy: 0,
        token: '',
        IntervalStatus: false,
        imove_id: 0,
        //deposit数据模型
        depositModel: {
          amount: 0,
          fee: 0,
          total_amount: 0,
          ctype: '',
          currencyid: 0,
          uid: 0,
          key: 0
        },
        amount: '',
        fee: 0,
        totalAmount: '',
        totalAmount_verfiy: 0,
        IntervalStatusMaster: false,
        masterResult: '',
        masterRate: 0,
        masterurl: '',
        unique_id: '',
        timer: '',
      }
    },
    mounted() {
      this.$store.dispatch('getIntervalData', {
        url: 'quotation_getrateinfo_get',
        timer: 1000 * 60,
        callback: ({data}) => {
          var that = this
          var usdrate = 0
          var usdtrate = 0
          data.map((item) => {
            if(item.currceyname === 'usd'){
              usdrate = item.price
            }
            if(item.currceyname === 'usdt'){
              usdtrate = item.price
            }
            if (usdrate > 0 && usdtrate > 0) {
              that.masterRate = this.global_get_tofixed((usdrate / usdtrate)*0.99,8)
              this.amount = this.global_get_tofixed((this.totalAmount * 100 - this.fee * 100) / 100 * that.masterRate,8)
            }
          })
        }
      })
      this.address = this.currencyAll.address;
      this.nextUid = this.$userinfo.uid.slice(this.$userinfo.uid.length - 10);
      document.addEventListener('click', () => {
        if (this.qrcodeState || this.tagQrcodeState) {
          this.qrcodeState = false;
          this.tagQrcodeState = false;
        }
      })
    },
    methods: {
      to_authverify() {
        window.location.href = "/person/authentication"
      },
      getCode(val) {
        let address;
        if (val == 'tag') {
          address = this.nextUid;
          this.tagQrcodeState = !this.tagQrcodeState;
          this.qrcodeState = false;
        } else {

          if (this.ethRechargeAddressForErc20) {
            address = this.ethRechargeAddressForErc20;
          } else {
            address = this.currencyAll.address
          }

          this.qrcodeState = !this.qrcodeState;
          this.tagQrcodeState = false;
        }
        if (!address) {
          this.qrcodeState = !this.qrcodeState;
          return;
        }
        QRcode.toDataURL(address).then((url) => {
          val == 'tag' ? this.tagQrcode = url : this.qrcode = url;
        })
      },
      nameWithLang({name, language}) {
        return `${name} — [${language}]`
      },
      mark(val) {
        this.reminder = val;
      },
      copy(val) {
        const _self = this;
        // var clipboard = new Clipboard('.recharge_address' + this.currencyAll.currency.id);
        var clipboard = new Clipboard('.recharge_address' + val);
        clipboard.on('success', e => {
          this.$store.commit('set_message', {type: 'ok', text: _self.$t('wallet.copySuccess')})
          clipboard.destroy()
        })
        clipboard.on('error', e => {
          this.$store.commit('set_message', {type: 'error', text: _self.$t('wallet.copyError')})
          clipboard.destroy()
        })
      },
      cryptoJSAES128(data) {
        var datas = JSON.stringify(data)
        var iv = CryptoJS.enc.Utf8.parse('Q7LJGcf7v85W8qWk')
        var key = CryptoJS.enc.Utf8.parse('SYXwqOwOXLL4NIpi')
        var encrypted = CryptoJS.AES.encrypt(datas, key, {
          iv: iv,
          mode: CryptoJS.mode.CBC,
          padding: CryptoJS.pad.ZeroPadding
        })
        datas = encrypted.toString()
        return datas
      },
      submit_blank() {
        var windowName = 123;
        $('#account_form').attr('target', windowName)
        var iTop = (window.screen.height - 30 - 500) / 2
        var iLeft = (window.screen.width - 10 - 1000) / 2
        var popUp = window.open('about:blank', windowName, 'width=1000, height=500, left=' + iLeft + ', top=' + iTop + ', scrollbars,toolbar=no, resizable,z-look=yes')
        if (popUp == null || typeof(popUp) === 'undefined') {
          alert(this.library.translation('ACCOUNT.AlertMessage') || 'The browser blocks the pop-up window. Please disable the pop-up blocker and refresh browser.')
          return false
        }
        return true
      },
      imove_deposit() {
        if(this.total_amount == ''){
            this.total_amount_verfiy = 1
          }
        if(this.total_amount_verfiy != 0){
          return false;
        }
        const _self = this;
        this.depositModel = {
          amount: this.total_amount,
          fee: 0,
          total_amount: this.total_amount,
          currencyid: this.currencyAll.currency.id,
          uid: this.$userinfo.uid,
          email: this.$userinfo.email,
          key: this.$userinfo.secretkey
        }
        this.$store.dispatch('deposit_imove', this.depositModel)
          .then((res) => {
            if (res.data) {
              /*发布订阅*/
              // this.$pubsub.publish(this.$pubsub.getOrderList)
              // this.$store.commit('set_message', {type: 'ok', text: res.msg})
              this.imove_id = res.data.imove_id
              var contcent = {
                signature: res.data.signature,
                p_num: res.data.p_num,
                orderID: res.data.imove_id,
                title: "iLex Exchange",
                currency: 'USD',
                amount: this.total_amount,
                success_url: this.$store.state.hex_config.imovesuccess,
                fail_url: this.$store.state.hex_config.imovefail,
                return_url: this.$store.state.hex_config.imovereturn
              }
              this.token = this.cryptoJSAES128(contcent)

              setTimeout(() => {
                this.submit_blank()
                $('#account_form').submit()
              }, 200);
            }
          })
          .then(() => {
            this.IntervalStatus = setInterval(x=>{
              var imove_comfirm_data = {
                merchant_txn_id: this.imove_id
              }

              this.$store.dispatch('deposit_imove_confirm', imove_comfirm_data)
              .then((res)=> {
                if(res.success){
                  this.$store.commit('set_message', {type: 'ok', text: _self.$t('wallet.masterSuccess')})
                  clearInterval(this.IntervalStatus);
                  window.location.href = 'wallet'
                }
              })
            },1000)
          })
          .catch(() => {

          })
          clearInterval(this.IntervalStatus);

        // return false
      },
      masterDepositFee() {
        console.log(this.masterRate)
        console.log(this.totalAmount)
        this.fee = this.global_get_tofixed(this.masterRate*this.totalAmount * 0.055,8)
        this.amount = this.global_get_tofixed(this.totalAmount *(1-0.055)* this.masterRate,8)
      },
      masterDeposit() {
        if(this.totalAmount == ''){
            this.totalAmount_verfiy = 1
          }
        if(this.totalAmount === '' || this.totalAmount === undefined || this.totalAmount_verfiy !== 0){
          return false
        }
        this.depositModel = {
          amount: this.totalAmount,
          fee: this.fee,
          total_amount: this.amount,
          ctype: this.depositType1 == 'Mastercard' ? 'mastercard' : 'upi',
          currencyid: this.currencyAll.currency.id,
          uid: this.$userinfo.uid,
          key: this.$userinfo.secretkey
        }
        console.log(this.depositModel)
        this.$store.dispatch('master_deposit', this.depositModel)
        .then((res) => {
          if(res.data){
            this.masterResult = res
            var iTop = (window.screen.height - 30 - 500) / 2
            var iLeft = (window.screen.width - 10 - 1000) / 2
            window.open(res.data.redirect_url, 123, 'width=1000, height=500, left=' + iLeft + ', top=' + iTop + ', scrollbars,toolbar=no, resizable,z-look=yes')
          }
        }).then(() => {
          this.totalAmount = ''
          this.fee = ''
          this.amount = ''
          if(this.masterResult.data){
        
            this.IntervalStatusMaster = setInterval(x=>{
              var masterConfirm = {
                unique_id: this.masterResult.data.unique_id
                // result_code: this.masterResult.code,
                // result: 'test',
                // uid: this.$userinfo.uid,
                // key: this.$userinfo.secretkey
              }
              this.$store.dispatch('master_deposit_confirm', masterConfirm).then((res) => {
                    // alert(2222)
                    console.log(res)
                if(res.success){
                  window.location.reload()
                }
              })
            },2000)
          }
        }).catch(() => {

        })
     
        // this.$store.dispatch('master_deposit', this.depositModel)
        // .then((res) => {
        //   this.unique_id = '';
        //   console.log(res)
        //   if(res.data){
        //     this.unique_id = res.data.unique_id
        //     this.timer = setTimeout(()=>{
        //     this.masterurl =  res.data.redirect_url
        //       this.submit_master_blank()
        //     },100) 
        //   }
        // }).then(() => {
        //   if(this.unique_id != ''){
        //     if(window.localStorage.getItem("masterDeposit")){
        //       window.localStorage.removeItem("masterDeposit")
        //     }

        //     this.IntervalStatusMaster = setInterval(x=>{
        //         // console.log(window.localStorage.getItem("masterDeposit"))
        //         if(window.localStorage.getItem("masterDeposit")){
        //           window.localStorage.removeItem("masterDeposit")
        //           clearInterval(this.IntervalStatusMaster);
        //           window.location.href = 'wallet'
        //         }
        //     },2000)
        //   }
        // }).catch(() => {

        // })
        // clearInterval(this.IntervalStatusMaster);
      },
      submit_master_blank() {
          var iTop = (window.screen.height - 30 - 500) / 2
          var iLeft = (window.screen.width - 10 - 1000) / 2
          // this.masterurl =  this.$store.state.hex_config.mastercardpay+'?unique_id='+this.unique_id+'&type='+this.depositType1.toLowerCase()
          window.open(this.masterurl, 123, 'width=1000, height=500, left=' + iLeft + ', top=' + iTop + ', scrollbars,toolbar=no, resizable,z-look=yes')
      }
    },
    beforeDestroy() {
      clearTimeout(this.timer);
    }
  }
</script>