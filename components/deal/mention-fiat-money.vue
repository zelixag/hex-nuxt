<style lang='less' scoped>
  @import "../../static/styles/color";
  @import "../../static/styles/person";
  @import "../../static/styles/auth.less";
  .mention-money_tip {
    font-size: 18px;
    font-weight: bold;
    margin-right: 20px;
  }

  .mention-money_info {
    font-size: 14px;
    text-align: left;
    padding: 20px;
    box-shadow: 0 1px 0 0 rgba(133, 131, 172, 0.2);
    color: @cl_666;
    position: relative;
  }

  .mention-money_info .btc {
    color: @cl_buy;
    font-size: 30px;
    font-weight: bold;
    margin-right: 5px;
  }

  .mention-money_info .cny {
    color: @cl_link;
    font-size: 30px;
    font-weight: bold;
    margin-right: 5px;
  }

  .mention-money_info .br {
    margin: 0 20px;
    border-right: 1px solid @cl_858;
    display: inline-block;
    height: 20px;
  }

  .mention-money_info_title {
    line-height: 36px;
    margin-bottom: 8px;
  }

  .mention-money_info_num {
    padding: 4px 0;
  }

  .mention-money_info_address_button {
    color: @cl_link;
    margin-top: 16px;
  }

  .mention-money-block {
    margin-top: 10px;
    background-color: @cl_fff;
  }

  .mention-money-block-title {
    padding: 18px 20px;
  }

  .mention-money-block-title .title_tip {
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

  .mention-money_address {
    font-size: 14px;
    width: 400px;
    display: inline-table;
    border-collapse: separate;
  }

  .mention-money_address input {
    height: 40px;
    line-height: 40px;
    border: 1px solid #dddddd;
    display: table-cell;
    width: 100%;
    padding: 5px 10px;
  }

  .mention-money_address .search-tip {
    display: table-cell;
    width: 80px;
    background-color: @cl_link;
    color: @cl_fff;
    border: 1px solid @cl_link;
    text-align: center;
  }

  .mention-money-block-search .search-tip::placeholder {
    color: @cl_bbb;
  }

  .mention-money_scan {
    display: inline-block;
  }

  .mention-money_scan span {
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

  .mention-money_group {
    width: auto;
  }

  .mention-money_hint {
    padding: 10px;
    background-color: @cl_f9f;
    color: @cl_666;
    font-size: 12px;
    line-height: 24px;
    margin-top: 20px;
  }

  .mention-money_hint .title {
    color: @cl_999;
  }

  .mention-money_hint .tip {
    color: @cl_cd4;
    font-size: 14px;
    font-weight: 600;
  }

  .mention-money_hint .row {
    color: @cl_666;
  }

  .auth-content_group {
    width: 580px;
  }

  .auth-content_group input {
    width: 100%;
  }

  .auth-content_group.mention {
    width: 100%;
    margin-top: 0;
    // overflow: hidden;
  }

  .auth-content_group .mentionAddress .left.choice {
    // overflow: hidden;
    width: 580px;
    background: rgba(255, 255, 255, 1);
    float: left;
    input {
      height: 35px;
      font-size: 14px;
      line-height: 20px;
      border: none;
    }
  }

  .comment {
    margin-top: 4px;
  }

  .manage {
    margin-left: 4px;
  }

  .manage p {
    height: 40px;
    font-size: 14px;
    line-height: 40px;
    color: rgb(0, 118, 230);
    padding: 0 10px 0 34px;
    border: 1px solid rgba(240, 239, 255, 1);
    display: inline-block;
    margin-left: 5px;
    cursor: pointer;
    background: url("../../static/images/user/icon_add.png") no-repeat 10px center;
  }

  .userAddress {
    height: 32px;
    padding-left: 10px;
    line-height: 32px;
  }

  .manage .manageaddress {
    background: url("../../static/images/user/icon_setting.png") no-repeat 10px center;
  }

  .canuse_amount {
    color: @cl_289;
  }

  .mention-money_info .auth-content_group.left,
  .mention-money_info .auth-content_group.right {
    width: 280px;
  }

  .auth-content_group_mail .input {
    width: 449px;
  }

  .auth-content_group_account {
    font-size: 12px;
  }

  .auth-content_button {
    margin: 10px 0 0 0;
    width: 580px;
  }

  .auth-content_group--error /deep/ .baseselect>.ipt_hover {
    border: 1px solid #cd4559 !important;
    color: #cd4559 !important;
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
    right: 80px;
  }

  .enLocation {
    right: 140px;
  }

  .auth-content_group .coinName {
    height: 40px;
    line-height: 40px;
    padding-left: 10px;
    border: 1px solid #dddddd;
    color: #000;
    font-size: 14px;
    width: 100%;
    background: #f0f0f0;
  }
</style>

<template>
  <div>
    <div v-if="securitylevel == 2" class="mention-money_info">
      <div :class="['sanj',$store.state.hex_lang.locale=='zh_cn'?'zhLocation':'enLocation']"></div>
      <div class="auth-content_group mention">
        <p class="title">{{$t('wallet.imoveNo')}}</p>
        <div class="mentionAddress clearfix">
          <div class="left choice clearfix" :class="{'auth-content_group--error':!addressState}">
            <input class="input ipt_hover" type="number" v-model="address" :placeholder="$t('wallet.imoveNo')">
          </div>
        </div>
      </div>
      <div class="auth-content_group" :class="{'auth-content_group--error':$v.mentionCoin.amount.$error}">
        <p class="title clearfix">
          <span class="left">{{$t('wallet.mentionCount')}}</span>
          <span class="right">
              {{$t('wallet.usable')}}：
              <span class="canuse_amount">{{canuseamount}}</span> {{$t('wallet.quota')}}：
          <span>{{quota}} {{currencyAll.currency.currencyname.toUpperCase()}}</span>
          </span>
        </p>
        <input class="input ipt_hover" type="number" step="0.00000001" v-model.trim="amount" :placeholder="$t('wallet.mentionCountInput')">
      </div>
      <input class="input ipt_hover" v-model="$v.mentionCoin.amount.$model"/>
      <!--手机验证-->
      <!-- <div class="auth-content_group auth-content_group_code mention-money" v-if="$userinfo.isphoneauthed" :class="{'auth-content_group--error':$v.addressCode.smsverifycode.$error}">
        <p class="title clearfix">
          <span class="left">{{$t('formMenu.noteInputVerification')}}</span>
          <span class="normal-tip_error right" v-if="!$v.addressCode.smsverifycode.required">{{$t('formMenu.phoneCodeVerificationNone')}}</span>
        </p>
        <div class="auth-content_group_mail">
          <input class="input" :placeholder="$t('formMenu.phoneInputVerification')" type="text" v-model.trim="$v.addressCode.smsverifycode.$model">
          <verifycode :phone="$userinfo.phone"></verifycode>
        </div>
      </div> -->
      <!--邮箱验证-->
      <div class="auth-content_group auth-content_group_code mention-money" v-if="$userinfo.isemailauthed" :class="{'auth-content_group--error':$v.addressCode.emailverifycode.$error}">
        <p class="title clearfix">
          <span class="left">{{$t('formMenu.emailCodeVerification')}}</span>
          <span class="normal-tip_error right" v-if="!$v.addressCode.emailverifycode.required">{{$t('formMenu.emailCodeVerificationNone')}}</span>
        </p>
        <div class="auth-content_group_mail">
          <input class="input" :placeholder="$t('formMenu.emialInputVerification')" type="text" v-model.trim="$v.addressCode.emailverifycode.$model">
          <verifycode :email="$userinfo.email"></verifycode>
        </div>
      </div>

      <!--小于2btc只校验资金密码-->
      <!--交易密码验证-->
      <div class="auth-content_group" v-if="$userinfo.isopenpaypassword&&ismax2btc" :class="{'auth-content_group--error':$v.addressCode.paypassword.$error}">
        <p class="title clearfix">
          <span class="left">{{$t('wallet.payPassword')}}</span>
          <span class="normal-tip_error right" v-if="!$v.addressCode.paypassword.required">{{$t('wallet.payPasswordNone')}}</span>
        </p>
        <input class="input ipt_hover" v-model.trim="$v.addressCode.paypassword.$model" :placeholder="$t('wallet.payPasswordInput')" type="password">
      </div>
      <div v-else-if="!ismax2btc" class="auth-content_group clearfix" style="margin-top: 0">
        <!--交易密码验证-->
        <div class="auth-content_group" v-if="$userinfo.isopenpaypassword" :class="{'auth-content_group--error':$v.addressCode.paypassword.$error,'left':$userinfo.isopengoogleverify}">
          <p class="title clearfix">
            <span class="left">{{$t('wallet.payPassword')}}</span>
            <span class="normal-tip_error right" v-if="!$v.addressCode.paypassword.required">{{$t('wallet.payPasswordNone')}}</span>
          </p>
          <input class="input ipt_hover" v-model.trim="$v.addressCode.paypassword.$model" :placeholder="$t('wallet.payPasswordInput')" type="password">
        </div>
        <!--谷歌验证码-->
        <div class="auth-content_group right" v-if="$userinfo.isopengoogleverify" :class="{'auth-content_group--error':$v.addressCode.googleverifycode.$error}">
          <p class="title clearfix">
            <span class="left">{{$t('formMenu.googleCodeVerification')}}</span>
            <span class="normal-tip_error right" v-if="!$v.addressCode.googleverifycode.required">{{$t('formMenu.googleCodeVerificationNone')}}</span>
          </p>
          <input class="input ipt_hover" v-model.trim="$v.addressCode.googleverifycode.$model" :placeholder="$t('formMenu.googleInputVerification')" type="text">
        </div>
      </div>
      <div class="auth-content_group auth-content_group_account clearfix">
        <span class="left">{{$t("wallet.serviceCharge")}}：{{mentionCoin.fee}}</span>
        <span class="right">{{$t("wallet.actual")}}：{{mentionCoin.account}}</span>
      </div>

      <div class="auth-content_button button-loading--por" v-loading="addstate" @click="confirMention">{{$t("wallet.confirmMention")}}</div>
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
  </div>
</template>

<script>
  import {
    required
  } from "vuelidate/lib/validators";
  import addressselect from "@/components/security/mantion-address-select";
  import verifycode from "@/components/public/verifycode";
  import crypto from "@/plugins/axios/crypto";

  export default {
    name: "mention-money",
    components: {
      addressselect,
      verifycode
    },
    props: ["currencyAll", "maxmount", "decimal"],
    validations: {
      mentionCoin: {
        amount: {
          //数量
          required,
          isUnique(value) {
            if (value === "") return true;
            return true;
          }
        }
      },
      addressCode: {
        emailverifycode: {
          required
        },
        smsverifycode: {
          required
        },
        googleverifycode: {
          required
        },
        paypassword: {
          required
        }
      }
    },
    watch: {
      address: function(val) {
        this.mentionCoin.ctype = "imove";
        this.mentionCoin.address = "imove:" + val;
        console.log(val);
      },
      amount: function(val) {
        this.mentionCoin.amount = this.$store.getters.get_exchange_torate('usdt', val, 'usd');
        this.mentionCoin.fee = this.$store.getters.get_exchange_torate('usdt', this.global_get_tofixed(
          (0.025 * val + 5),
          this.decimal.a
        ), 'usd');
        this.mentionCoin.account = this.mentionCoin.amount - this.mentionCoin.fee
        console.log(this.mentionCoin.fee);
      }
    },
    computed: {
      canuseamount: function() {
        return this.global_get_tofixed(
          this.currencyAll.canuseamount,
          this.decimal.a
        );
      },
      quota: function() {
        return this.global_get_tofixed(
          this.$store.getters.get_exchange_rate(
            this.currencyAll.currency.currencyname,
            this.maxmount
          ),
          this.decimal.a
        );
      },
      ismax2btc: function() {
        return (
          this.$store.state.user_allwithdrawlimtperday -
          this.$userinfo.withdrawlimtperday <=
          2
        );
      }
    },
    data() {
      return {
        amount: '', // USD 金额
        choiceCion: "",
        mentionCoin: this.initMention(),
        addstate: false,
        address: "",
        addressCode: {
          googleverifycode: "",
          emailverifycode: "",
          smsverifycode: "",
          paypassword: ""
        },
        addressState: true,
        securitylevel: 0,
        dialogVisible: true,
        ctype: ""
      };
    },
    mounted() {
      this.securitylevel = this.$userinfo.securitylevel;
      console.log(this.$userinfo.securitylevel)
      if (this.initverify()) {
        this.$store.commit("set_message", {
          type: "error",
          text: this.$t("patch.popengoogle")
        });
        this.$router.push("/person/security");
      }
    },
    created() {},
    methods: {
      initverify() {
        /*已提数量大于2btc并且没有开启谷歌验证*/
        return !this.ismax2btc && !this.$userinfo.isopengoogleverify;
      },
      gosecurity() {
        this.dialogVisible = false
        // this.$router.push('/person/security')
      },
      verifyCount() {
        const coin = this.$v.mentionCoin;
        if (!coin.amount.isUnique) {
          this.$store.commit("set_message", {
            type: "error",
            text: this.$t("patch.mentionFell")
          });
        }
      },
      confirMention() {
        const _self = this;
        const coin = Object.assign({}, _self.mentionCoin);
        let state = false;
        const _coin = _self.$v.mentionCoin;
        _coin.$touch();
        if (_coin.$invalid) {
          state = true;
        }
        if (!coin.address) {
          this.addressState = false;
          state = true;
        } else {
          this.addressState = true;
        }

        if (this.$userinfo.isopenpaypassword) {
          const e = _self.$v.addressCode.paypassword;
          e.$touch();
          if (e.$invalid) {
            state = true;
          }
        }
        //大于单日已提币数量并且打开goole验证
        if (!this.ismax2btc && this.$userinfo.isopengoogleverify) {
          const e = _self.$v.addressCode.googleverifycode;
          e.$touch();
          if (e.$invalid) {
            state = true;
          }
        }

        if (this.$userinfo.isphoneauthed) {
          const e = _self.$v.addressCode.smsverifycode;
          e.$touch();
          if (e.$invalid) {
            state = true;
          }
        } else if (this.$userinfo.isemailauthed) {
          const e = _self.$v.addressCode.emailverifycode;
          e.$touch();
          if (e.$invalid) {
            state = true;
          }
        }

        this.verifyCount();
        if (state) {
          return;
        }
        if (Number(coin.amount) > this.canuseamount) {
          _self.$store.commit("set_message", {
            type: "error",
            text: this.$t("patch.usableCount")
          });
          return;
        }
        if (Number(coin.amount) > this.quota) {
          _self.$store.commit("set_message", {
            type: "error",
            text: this.$t("patch.exceedMention")
          });
          return;
        }
        if (this.ismax2btc) {
          delete coin.googleverifycode;
        } else {
          coin.googleverifycode = this.addressCode.googleverifycode;
        }
        if (this.$userinfo.isphoneauthed) {
          coin.smsverifycode = this.addressCode.smsverifycode;
          delete coin.emailverifycode;
        } else {
          coin.emailverifycode = this.addressCode.emailverifycode;
          delete coin.smsverifycode;
        }

        coin.currencyid = this.currencyAll.currency.id;
        // coin.fee = this.mentionCoin.fee

        if (this.currencyAll.currency.currencyname === "usdt") {
          coin.ctype = "imove";
        } else {
          delete coin.ctype;
        }

        if (this.addressCode.paypassword) {
          coin.paypassword = crypto.md5String(this.addressCode.paypassword);
        }
        console.log(coin);
        if (_self.addstate) return;
        _self.addstate = true;
        _self.$store
          .dispatch("user_assets_withdraw", coin)
          .then(({
            data,
            msg
          }) => {
            if (data) {
              /*更新用户当日可提币的数量*/
              return _self.global_refresh_user_info().then(() => {
                _self.$store.commit("set_message", {
                  type: "ok",
                  text: msg
                });
                _self.$parent.showDetailRow(_self.currencyAll, "mentionMoney");
                _self.$emit("wallet:getInfo");
              });
            }
          })
          .then(data => {
            _self.addstate = false;
          });
      },
      initMention() {
        const mention = {
          remarktag: "",
          currencyid: "",
          address: "",
          amount: "",
          fee: 0,
          account: 0
        };
        mention.currency = this.currencyAll.currency.currencyname;
        return mention;
      }
    }
  };
</script>

