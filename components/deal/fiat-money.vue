<style lang='less' scoped>
  @import "../../static/styles/color";
  .deposit-img {
    padding-left: 1rem;
    width: 100px;
  }

  .deposit_new {
    vertical-align: middle;
  }

  .deposit_span {
    font-size: 1.1rem;
    padding-left: 2.4rem;
    vertical-align: middle;
  }
</style>

<template>
  <div>
    <div>

      <div v-if="securitylevel === 2">
        <el-dialog title="Deposit USD To ACCOUNT" custom-class="dialog-tip-deposit" :visible.sync="dialogVisible">
          <p class="mar_b20 mar_t20">
            <label><input type="radio" name="deposit_wallet" value="imovedeposit" :checked="true" v-model= "DepositTypeGrade" class="deposit_new"> <img src="~/static/images/imove.png"  @click="openIMoveModal(currenctyFiat)" alt="" class="deposit-img"> <span class="deposit_span">Imove Deposit</span></label>
          </p>
          <p>No imove account? <a :href="$store.state.hex_config.imoveweb" target="_blank" style="color: #14a2a4;"> Click here to register</a></p>
          <span slot="footer" class="dialog-footer dialog-footer-span">
                  <button @click="dialogVisible = false">{{$t('legalTrad.Cancel')}}</button>
                  <button type="primary" @click="gosecurity">{{$t('formMenu.determine')}}</button>
                </span>
        </el-dialog>
      </div>
      <div v-if="securitylevel != 2">
        <el-dialog width="30%" custom-class="dialog-tip-payment" :visible.sync="dialogVisible">
          <p>{{$t('authentication.upgradeLevel')}}</p>
          <span slot="footer" class="dialog-footer dialog-footer-span">
                  <button @click="dialogVisible = false">{{$t('legalTrad.Cancel')}}</button>
                  <button type="primary" @click="gosecurity">{{$t('formMenu.determine')}}</button>
                </span>
        </el-dialog>
      </div>
      <div>
        <el-dialog width="30%" custom-class="dialog-tip-deposit" :visible.sync="Step">
          <form id='account-form' @submit.prevent="imove_deposit()" :action="$store.state.hex_config.imovesettlement" method="post" target="_blank">
            <div class="modal-body">
              <h2>imove deposit</h2>
              <input type="hidden" :value="token" name="token" />
              <label>ID:</label><br>
              <input type="text" name="email" :value="$userinfo.uid" disabled="disabled" /><br>
              <label>Full Name:</label><br>
              <input type="text" name="fullname" :value="$userinfo.email" disabled="disabled" /><br>
              <label>Currency:</label><br>
              <input type="text" name="currency" :value="currencyname" disabled="disabled" /><br>
              <label>Amount:</label><br>
              <input type="text" v-model="total_amount" required /><br>
              <label>USDTAmount ≈≈ </label><br>
              <input type="text" v-model="usdttotal_amount" required /><br>
            </div>
            <div class="modal-footer justify-content-end">
              <button type="button" class="btn btn-outline-primary" ng-click="cancel();">Cancel</button>
              <button type="submit" class="btn btn-primary">next</button>
            </div>
          </form>
          <span slot="footer" class="dialog-footer dialog-footer-span">
                  <button @click="dialogVisible = false">{{$t('legalTrad.Cancel')}}</button>
                  <button type="primary" @click="gosecurity">{{$t('formMenu.determine')}}</button>
                </span>
        </el-dialog>
      </div>
    </div>

  </div>
</template>

<script>
  import $ from 'jquery'
  import CryptoJS from 'crypto-js'
  export default {
    name: 'articles',
    components: {},
    watch: {
      total_amount(old) {
        if (old) {
          const price = this.$store.getters.get_exchange_torate('usd', old, 'usdt')
          this.usdttotal_amount = price
        }
      }
    },
    computed: {
      currencyname: function() {
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
        default: function() {
          return {}
        }
      },
      securitylevel: {
        type: Number,
        default: 0
      }
    },
    data() {
      return {
        DepositTypeGrade: '',
        total_amount: 0,
        usdttotal_amount: 0,
        token: '',
        dialogVisible: false,
        dialogdeposit: false,
        Step: 0,
        IntervalStatus: false,
        //deposit数据模型
        depositModel: {
          amount: 10,
          fee: 0,
          total_amount: 10,
          currencyid: 0,
          uid: 0,
          key: 0
        }

      }
    },
    mounted() {
      this.dialogVisible = true
      // if (this.props.securitylevel != 2) {
      //   this.dialogVisible = true
      // } else {
      //   this.dialogdeposit = true
      // }
    },
    methods: {
      getUSDTPrice() {
        /*判断是否是异常订单*/
        console.log('getUSDTPrice')

        return false
      },
      gosecurity() {
        this.dialogVisible = false
        this.Step = 1
        // this.$router.push('/person/security')
      },
      nameWithLang({
        name,
        language
      }) {
        return `${name} — [${language}]`
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
        $('#account-form').attr('target', windowName)
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
              console.log(contcent)
              this.token = this.cryptoJSAES128(contcent)
              setTimeout(() => {

                this.submit_blank()
                $('#account-form').submit()
              }, 200);
            }
          })
          .then(() => {
            this.IntervalStatus = setInterval(x=>{
              console.log(111)

            },1000)
          })
          .catch(() => {

          })
          clearInterval(this.IntervalStatus);
      }
    }
  }
</script>
