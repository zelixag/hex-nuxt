<template>
  <div class='popup repayment-popup'>
    <div class="mask"></div>
    <div class='mask-content'>
      <div class="head">
        <span class='title head-title'>{{$t('leverage.transferPrincipal')}}</span>
        <span class="close" @click='close(0)'>
          <img src="@/static/images/an_close.png" alt="">
        </span>
      </div>

      <div class='info'>
        <div class="auth-content_group transfer">
          <el-row type="flex" justify="">
            <el-col :span="2">
              <span class="left">{{$t('leverage.from')}}</span>
            </el-col>

            <el-col :span="22">
              <div class="coinName">{{currencyPair}} {{$t('wallet.leveraged')}}</div>
            </el-col>
          </el-row>
        </div>
        <div class="transfer">
          <img src="/images/leverage/in_out.png" alt="ILEX">
        </div>
        <div class="auth-content_group transfer" style="margin-top: 0">
          <el-row type="flex" justify="">
            <el-col :span="2">
              <span class="left">{{$t('leverage.To')}}</span>
            </el-col>

            <el-col :span="22">
              <div class="coinName">{{$t('leverage.transactionAccount')}}</div>
            </el-col>
          </el-row>
        </div>

        <div class="auth-content_group">
          <p class="title clearfix">
            <span class="left">{{$t('wallet.coin')}}</span>
          </p>
          <el-row type="flex" justify="">
            <el-col :span="12">
              <div class="currency-type" :class="(currencyChoice==currencyPair.split('/')[0])?'active':''"
                   @click="setAssetType(currencyPair.split('/')[0])">
                {{currencyPair.split('/')[0]}}
              </div>
            </el-col>

            <el-col :span="12">
              <div class="currency-type" :class="(currencyChoice==currencyPair.split('/')[1])?'active':''"
                   @click="setAssetType(currencyPair.split('/')[1])">
                {{currencyPair.split('/')[1]}}
              </div>
            </el-col>
          </el-row>
        </div>

        <div class="auth-content_group">
          <p class="title clearfix">
            <span class="left">{{$t('deal.count')}}</span>
            <span
              class="right fr">
              {{$t('leverage.Transferable')}}
              {{global_get_tofixed(availableBalance, global_get_decimal(currencyChoice).a)}}
              {{currencyChoice}}
            </span>
          </p>

          <div class="deal_input">
            <form class="deal_input_num" novalidate>
              <input type="number" v-model="$v.repayment.$model"/>
            </form>

            <p class="deal_input_tip">
              <span class="tip_title">{{currencyChoice}}</span>

              <span class="tip_all" @click="repaymentAllLoan()">{{$t('manage.all')}}</span>
            </p>
          </div>
        </div>

        <button class='commitBtn button-loading--por'
                v-loading="loading"
                @click="confirmToRepayment">{{$t("formMenu.confirm")}}
        </button>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: "in-popup",
    validations: {
      repayment: {
        $ismin(val) {
          val = parseFloat(val)

          let _state = true

          if (val > 0) {
            _state = false
          }
          return _state
        }
      }
    },
    computed: {},
    props: ['symblename', 'leverage_assets_data', 'whichOne'],
    data() {
      return {
        loading: false,
        repayment: '',
        currencyPair: '',
        currencyChoice: '',
        currencyid: 0,
        availableBalance: 0,
        storeCurrencyData: [],
        leverage_assets_data_recieve: {},
      }
    },
    watch: {
      symblename(newVal, oldVal) {
        if (newVal !== oldVal) {
          this.currencyPair = newVal.toUpperCase();
          this.currencyChoice = (newVal.toUpperCase()).split('/')[0];
        }
      },
      leverage_assets_data(newVal, oldVal) {
        if (newVal !== oldVal) {
          this.leverage_assets_data_recieve = newVal;
          this.assetsBalance();
        }
      },
      whichOne(newVal, oldVal) {
        if (newVal !== oldVal) {
          this.currencyChoice = newVal.toUpperCase();
          this.assetsBalance();
        }
      }
    },
    methods: {
      repaymentAllLoan() {
        this.repayment = this.global_get_tofixed(this.availableBalance, this.global_get_decimal(this.currencyChoice).a);
      },
      confirmToRepayment() {
        this.loading = true;
        const repaymentModel = this.$v.repayment;

        repaymentModel.$touch();

        if (repaymentModel.$ismin) {
          this.$store.commit('set_message', {type: 'error', text: this.$t('leverage.amountZero')});

          this.loading = false;

          return;
        }

        this.$emit("confirmToRepayment", {amount: this.repayment, currencyid: this.currencyid, itype: 2});
      },
      //设置资产类型以及资产金额
      setAssetType(val) {
        this.repayment = '';
        this.currencyChoice = val;

        let data = this.leverage_assets_data_recieve;
        if (data.fcurrencyname.toUpperCase() === val.toUpperCase()) {
          this.currencyid = data.fid;
          this.availableBalance = data.famount;

          return
        } else if (data.tcurrencyname.toUpperCase() === val.toUpperCase()) {
          this.currencyid = data.tid;
          this.availableBalance = data.tamount;

          return
        }
      },
      //根据交易账户的不同资产类型查询对应资产余额
      assetsBalance() {
        let data = this.leverage_assets_data_recieve;
        if (data.fcurrencyname != undefined && data.fcurrencyname.toUpperCase() === this.currencyChoice.toUpperCase()) {
          this.currencyid = data.fid;
          this.availableBalance = data.famount;

          return
        } else if (data.fcurrencyname != undefined &&  data.tcurrencyname.toUpperCase() === this.currencyChoice.toUpperCase()) {
          this.currencyid = data.tid;
          this.availableBalance = data.tamount;

          return
        }
      },
      close() {
        this.loading = false;
        this.repayment = '';
        // this.currencyid = 0;
        this.$v.$reset();

        this.$emit('closePopup', 1);
      },
      closeLoading() {
        this.loading = false;
      }
    },
    mounted() {
    }
  };
</script>
<style lang='less' scoped>
  @import "../../static/styles/auth.less";

  .popup {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 10000;
  }

  .close {
    cursor: pointer
  }

  .auth-content_group_mail .mail_code {
    height: 40px;
  }

  .auth-content_group.auth-content_group_code .title.clearfix {
    width: 400px;
  }

  .auth-content_group.auth-content_group_code .title.clearfix .left {
    width: 270px;
  }

  .auth-content_group.auth-content_group_code .title.clearfix .fr {
    color: #bbb;
  }

  .auth-content_group.auth-content_group_code .title .left,
  .popup .mask-content span {
    font-size: 12px;
    height: inherit;
    color: @cl_fff;
  }

  .popup .mask-content .left, .popup .mask-content .right,
  .auth-content_group.auth-content_group_code .title .cl_ccc span,
  .auth-content_group_input .el-checkbox__label .label-tip {
    color: rgba(102, 102, 102, 1);
  }

  .popup .mask-content .right {
    color: #aaa;
    font-weight: normal;
  }

  .auth-content_group input {
    color: rgb(51, 51, 51);
  }

  .auth-content_group .form_error {
    font-size: 12px;
    margin-top: 4px;
    color: #CD4559;
  }

  .deal_input {
    height: 46px;
    border-radius: 2px;
    border: 1px solid #dcdfe6;
    display: flex;
    flex-direction: row;
    .deal_input_num {
      flex: auto;
      padding: 0 15px;
      line-height: 44px;
      input {
        font-size: 16px;
        width: 100%;
        border: none;
        padding-left: 0;
        height: 30px;
        line-height: 30px;
      }
    }
    .deal_input_tip {
      line-height: 44px;
      font-size: 0;
    }
    .tip_title, .tip_all {
      padding: 4px 20px;
      font-size: 14px;
    }
    .tip_title {
      color: #999999 !important;
      border-right: 1px solid #EEEEEE
    }
    .tip_all {
      color: @cl_link !important;
      cursor: pointer;
    }
  }

  .coinName {
    height: 40px;
    line-height: 40px;
    padding-left: 10px;
    color: #666;
    font-size: 12px;
    width: 400px;
    background: rgba(240, 240, 240, 1);
  }

  .head span.title {
    font-size: 16px;
    color: #333333;
    font-weight: 600;
    display: initial;
  }

  .commitBtn {
    cursor: pointer;
  }

  /*usdt提现*/
  .el-radio-group {
    margin-bottom: 10px
  }

  .amount-set {
    font-size: 12px;
    color: #aaaaaa;
  }

  .transfer {
    .left {
      line-height: 40px;
    }
    img {
      width: 30px;
      margin: 4px 0;
      transform: translateX(-9px);
    }

    .coinName {
      width: 100%;
    }
  }

  .currency-type {
    background-color: #f0f0f0;
    text-align: center;
    color: #aaa;
    height: 40px;
    line-height: 40px;
    font-size: 12px;
    cursor: pointer;
  }

  .currency-type.active {
    background: url('/images/leverage/sign.png') no-repeat right bottom @cl_link;
    color: #fff;
  }
</style>
