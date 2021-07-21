<style scoped lang="less">
  @import "css/order-list";

  .hex_table_body {
    color: #5E6573;
    &:hover {
      background: #f5f5f8;
    }

    .repayment {
      /*padding: 2px 8px;*/
      /*background: linear-gradient(135deg, #14a2a5 0%, #14a2a5 100%);*/
      color: #14a2a5;
      cursor: pointer;
    }

    .repayment_no {
      color: #c9c8cc;
      background: transparent;
      padding: 0;
    }
  }
  .hex_table_header.br{
    border-bottom: 1px solid #dbdaea;
    }
</style>

<template>
  <div class="traded">
    <div class="traded-block">
      <div class="traded_table_content">
        <table class="hex_table abc">
          <thead class="hex_table_header padding br">
          <tr>
            <th class="lt">
              <div>{{$t('leverage.application')}}</div>
            </th>
            <th class="lt">
              <div>{{$t('wallet.leveraged')}}</div>
            </th>
            <th class="lt">
              <div>{{$t('legalTrad.Currencies')}}</div>
            </th>
            <th class="rt">
              <div>{{$t('leverage.loans')}}</div>
            </th>
            <th class="rt">
              <div>{{$t('leverage.returned')}}</div>
            </th>
            <th class="rt">
              <div>{{$t("leverage.multiple")}}</div>
            </th>
            <th class="rt">
              <div>{{$t('leverage.dailyInterestRate')}}</div>
            </th>
            <th class="rt">
              <div>{{$t('leverage.totalInterestPaid')}}</div>
            </th>
            <th class="rt">
              <div>{{$t('leverage.interestSettlementTime')}}</div>
            </th>
            <th class="rt">
              <div>{{$t('memberCenter.statue')}}</div>
            </th>
            <th class="rt">
              <div>{{$t('home.tradeOperation')}}</div>
            </th>
          </tr>
          </thead>
          <tbody class="deal-tbody">

          <tr class="hex_table_body padding"
              v-for="(coins,index) in orderDetail"
              :key="index">
            <td class="lt">
              {{getRecordTime(coins)}}
            </td>
            <td class="lt">
              {{global_get_uppercase(coins.symblename)}}
            </td>
            <td class="lt">
              {{global_get_uppercase(coins.loancurrencyname)}}
            </td>
            <td class="rt">
              {{coins.loancurrencyamount}}
            </td>
            <td class="rt">
              {{coins.paymentamount}}
            </td>
            <td class="rt">
              {{coins.borrowmultiple}}X
            </td>
            <td class="rt">
              {{global_get_tofixed(coins.dayrate, 5)*100}}%
            </td>
            <td class="rt">
              {{global_get_tofixed(coins.totalpaymentinterest, global_get_decimal(coins.loancurrencyname).a)}}
            </td>
            <td class="rt">
              {{getPaidTime(coins.paymenttime)}}
            </td>
            <td class="rt">
              {{global_get_leverage_state(Number(coins.istatus))}}
            </td>
            <td class="rt orderstatus">
              <span v-if="coins.istatus==1" @click="showPop(coins)"
                    class="repayment">{{$t('leverage.repayment')}}</span>
              <span v-else class="repayment repayment_no">{{$t('leverage.repayment')}}</span>
            </td>
          </tr>
          </tbody>
        </table>
      </div>

      <div class="loadingPic deal" v-hex-loading="loading" v-if="loading"></div>

      <!--无数据&&未登录占位-->
      <div class="anonymous" v-if="found">
        <div v-if="$userinfo.uid">
          <div class="anonymous-pic">
            <img src="~/static/images/user/anonymous.svg" alt="ILEX">
          </div>

        </div>
        <div v-else class="islogin">
          <nuxt-link to="/login">{{$t('home.headLogin')}}</nuxt-link>
          /
          <nuxt-link to="/register"> {{$t('home.headRegister')}}</nuxt-link>
        </div>
      </div>

      <div class="deal-paging-source" v-if="total>0">
        <el-pagination
          background
          @current-change="handChange"
          :page-size="20"
          popper-class="paging"
          layout="prev, pager, next"
          :total="total">
        </el-pagination>
      </div>
    </div>
    <!--归还借贷popup-->
    <repayment-popup
      :ctid="ctid"
      :symblename="symblename"
      :loancurrencyamount="loancurrencyamount"
      :loanamount="loanamount"
      :interest="interest"
      :loancurrencyname="loancurrencyname"
      @closePopup="closePopup"
      @confirmToRepayment="confirmToRepayment"
      v-show="popupstate"
      ref="popup"/>
  </div>
</template>

<script>
  import repaymentPopup from '../security/repayment-popup';

  export default {
    name: 'articles',
    components: {
      'repayment-popup': repaymentPopup,
    },
    data() {
      return {
        loading: true,
        found: false,
        popupstate: false,
        id: '',
        ctid: '',
        symblename: '',
        loancurrencyname: '',
        interest: 0,//支付利息
        loanamount: 0,//应还数量
        loancurrencyamount: 0,//贷款数量
        total: 0,
        page: {
          pageindex: 1,
          pagesize: 20,
        },
        orderDetail: [],
        currencyData: [],
      }
    },
    props: ['applicationApproved','leverageCtidInfo'],
    watch: {
      applicationApproved(newVal, oldVal) {
        if (newVal) {
          this.getUserDeal()
        }
      },
      leverageCtidInfo(newVal, oldVal) {
        if (newVal) {
          this.getUserDeal()
          console.log(newVal)
        }
      },
    },
    computed: {
      hedge: function () {
        let allbtc = 0;

        this.currencyData.forEach((item) => {
          allbtc += this.$store.getters.get_btc_exchange_rate(item.currency.currencyname, item.financingamount)
        });
        return this.global_get_tofixed(allbtc, this.global_get_decimal('btc').a);
      },
    },
    mounted() {
      this.getUserDeal();
      this.getWalletInfo();
    },
    subscribe() {
      return {
        //订阅更新orderlist 消息
        getOrderList() {
          this.getUserDeal();
        }
      }
    },
    created() {
    },
    methods: {
      closePopup() {
        this.popupstate = !this.popupstate;
      },
      showPop(val) {
        this.popupstate = !this.popupstate;
        this.symblename = val.symblename;//对称币种名
        this.loancurrencyname = val.loancurrencyname;//币种名
        this.loanamount = val.loanamount;//应还数量
        this.loancurrencyamount = val.loancurrencyamount;//贷款数量
        this.interest = val.totalpaymentinterest;//应付利息
        this.id = val.id;//订单id
        this.ctid = val.ctid;
      },
      //获得账户的对冲金额
      getWalletInfo() {
        const _self = this;
        if (this.$userinfo.uid) {  
        _self.$store.dispatch('user_assets_get', {
            assetstype: 1,
            rows: 100
          }).then(({data}) => {
            if (data) {
              this.currencyData = data;
            }
          })
        }
      },
      confirmToRepayment(_this) {
        const _self = this;

        _this.loading = true;

        const params = Object.assign({}, {
          id: this.id,
          uid: this.$userinfo.uid,
          key: this.$userinfo.secretkey,
          repaymentamount: _this.repayment,
        });

        this.$store.dispatch('userborrowmoney_user_borrow_back', params)
          .then((res) => {
            if (res.data) {
              this.$store.commit('set_message', {
                type: 'ok',
                text: res.msg
              });

              _self.$emit('repayment:success');
              _self.getUserDeal();
              // _self.$refs.popup.getLeverageInfo(this.ctid)
              window.location.reload()
              _self.$refs.popup.close();
            } else {
              _self.$refs.popup.closeLoading();
            }
          })
      },
      getRecordTime: function (coins) {
        return (coins.createtime) ? this.global_get_local_time(coins.createtime).format('YYYY-MM-DD HH:mm:ss') : '--'
      },
      getPaidTime: function (paymenttime) {
        var year = new Date(paymenttime).getFullYear()
        return year != 1 ? this.global_get_local_time(paymenttime).format('YYYY-MM-DD HH:mm:ss') : '--'
      },
      handChange(val) {
        this.getUserDeal(val)
      },
      getUserDeal(pageIndex) {
        if (this.$userinfo.uid && this.leverageCtidInfo.ctid) {
          const postData = Object.assign({}, this.page, {ctid:this.leverageCtidInfo.ctid,uid: this.$userinfo.uid, key: this.$userinfo.secretkey});
          pageIndex ? postData.pageindex = pageIndex : postData.pageindex = 1;

          this.$store.dispatch('userborrowmoney_user_borrow_infos', postData).then(({data}) => {
            if (data) {
              this.total = data.totalitemcount;
              this.orderDetail = data.pagedata;
              this.found = false;
            } else {
              this.found = true;
              this.total = 0;
              this.orderDetail = [];
            }
            this.loading = false;
          })
        } else {
          this.$nextTick(() => {
            this.total = 0;
            this.loading = false;
            this.found = true;
          })
        }
      }
    }
  }

</script>
