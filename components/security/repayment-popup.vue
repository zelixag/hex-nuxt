<template>
  <div class='popup repayment-popup'>
    <div class="mask"></div>
    <div class='mask-content'>
      <div class="head">
        <span class='title head-title'>{{$t('leverage.returning')}}</span>
        <span class="close" @click='close(0)'>
          <img src="@/static/images/an_close.png" alt="">
        </span>
      </div>

      <div class='info'>
        <div class="auth-content_group">
          <!--杠杆账户 对应币种交易对-->
          <p class="title clearfix">
            <span class="left">{{$t("wallet.leveraged")}}</span>
          </p>
          <div class="coinName">{{_symblename}}</div>
        </div>

        <div class="auth-content_group">
          <!--应该归还的数量-->
          <p class="title clearfix">
            <span class="left">{{$t("leverage.quantity")}}</span>
          </p>
          <div class="coinName">{{global_get_tofixed(_loanamount, global_get_decimal(_loancurrencyname).a)}} {{_loancurrencyname}}</div>
        </div>

        <div class="auth-content_group">
          <!--贷款数量 && 利息-->
          <el-row type="flex" justify="">
            <el-col :span="12">
              <p class="title clearfix">
                <span class="left">{{$t("leverage.loans")}}</span><br/>
                <small class="amount-set">
                  {{global_get_tofixed(_loancurrencyamount, global_get_decimal(_loancurrencyname).a)}} {{_loancurrencyname}}
                </small>
              </p>
            </el-col>

            <el-col :span="12">
              <p class="title clearfix">
                <span class="left">{{$t("leverage.totalInterestPaid")}}</span><br/>
                <small class="amount-set">
                  {{global_get_tofixed(_interest, global_get_decimal(_loancurrencyname).a)}} {{_loancurrencyname}}
                </small>
              </p>
            </el-col>
          </el-row>
        </div>

        <div class="auth-content_group">
          <!--归还数量 && 可用余额-->
          <p class="title clearfix">
            <span class="left">{{$t('leverage.returns')}}</span>
            <span class="right fr">{{$t('manage.Balance')}} {{amount}} {{_loancurrencyname}}</span>
          </p>

          <div class="deal_input">
            <form class="deal_input_num" novalidate>
              <input type="number" v-model="$v.repayment.$model"/>
            </form>

            <p class="deal_input_tip">
              <span class="tip_title">{{_loancurrencyname}}</span>

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
    name: "leverage-amount",
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
    computed: {
      _symblename: function () {
        return this.symblename && this.symblename.toUpperCase()
      },
      _loancurrencyamount: function () {
        return this.loancurrencyamount;
      },
      _interest: function () {
        return this.interest;
      },
      _loancurrencyname: function () {
        return this.loancurrencyname && this.loancurrencyname.toUpperCase();
      },
      _loanamount: function () {
        return this.loanamount;
      },
    },
    watch: {
      'ctid': function (val) {
        this.currentCtid = val;
        this.getLeverageInfo(val);
      },
      'loancurrencyname': function (val) {
        this.getLeverageInfo();
      }
    },
    props: ['symblename', 'ctid', 'loancurrencyamount', 'interest', 'loancurrencyname', 'loanamount'],
    data() {
      return {
        amount: 0,
        loading: false,
        repayment: '',
        currentCtid: '',
      }
    },
    mounted() {
    },
    methods: {
      repaymentAllLoan() {
        this.repayment = this.global_get_tofixed(this._loanamount, this.global_get_decimal(this._loancurrencyname).a);
      },
      confirmToRepayment() {
        const repaymentModel = this.$v.repayment;

        repaymentModel.$touch();

        if (repaymentModel.$ismin) {
          this.$store.commit('set_message', {type: 'error', text: this.$t('leverage.amountZero')});

          return;
        }
        
        this.$emit("confirmToRepayment", this);
      },
      close(val) {
        this.repayment = '';
        this.loading = false;
        this.$v.$reset();

        this.$emit('closePopup', val);
      },
      closeLoading() {
        this.loading = false;
      },
      getLeverageInfo(ctid) {
        let _ = ctid ? ctid : this.currentCtid;

        this.$store.dispatch('userborrowmoney_user_mortgageassets_infos', {ctid: _}).then(({data}) => {
          if (data) {//_loancurrencyname
            if (data[0].tcurrencyname.toUpperCase() == this._loancurrencyname) {
              this.amount = data[0].tamount;
            } else if (data[0].fcurrencyname.toUpperCase() == this._loancurrencyname) {
              this.amount = data[0].famount;
            }
          }
        })
      },
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
      color: #14a2a5 !important;
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
</style>
