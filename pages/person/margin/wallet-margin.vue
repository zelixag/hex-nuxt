<style lang='less' scoped>
  @import "../../../static/styles/color";
  @import "../../../static/styles/person";
  @import "../../../static/styles/table";

  .balance_tip {
    font-size: 18px;
    font-weight: bold;
    margin-right: 20px;
  }

  .balance_info {
    font-size: 14px;
  }

  .balance_info .btc {
    color: @cl_buy;
    font-size: 30px;
    font-weight: bold;
    margin-right: 5px;
  }

  .balance_info .cny {
    color: @cl_link;
    font-size: 30px;
    font-weight: bold;
    margin-right: 5px;
  }

  .balance_info .br {
    margin: 0 20px;
    border-right: 1px solid @cl_858;
    display: inline-block;
    height: 20px;
  }

  .balance_info_title {
    line-height: 36px;
  }

  .balance_info_num {
    padding: 4px 0;
  }

  .balance_info_address_button {
    color: @cl_link;
    margin-top: 16px;
    cursor: pointer;
  }

  .balance-block {
    margin-top: 10px;
    background-color: @cl_fff;
  }

  .balance-block-title {
    padding: 18px 20px 8px 20px;
  }

  .balance-block-title .title_tip {
    font-size: 16px;
    font-weight: bold;
  }

  .balance-block-search {
    margin-left: 20px;
    font-size: 14px;
    width: 220px;
    display: inline-table;
    border-collapse: separate;
  }

  .balance-block-search input {
    height: 30px;
    line-height: 30px;
    border: 1px solid #DDDDDD;
    display: table-cell;
    width: 100%;
    padding: 5px 10px;
  }

  .balance-block-search .search-tip {
    display: table-cell;
    width: 60px;
    background-color: @cl_link;
    color: @cl_fff;
    border: 1px solid @cl_link;
    text-align: center;
  }

  .balance-block-search .search-tip::placeholder {
    color: @cl_bbb;
  }

  .hex_table_action {
    position: relative;
  }

  .hex_table_action .deal_buttons {
    position: absolute;
    color: @cl_link;
    font-size: 12px;
    padding: 5px 0;
    bottom: -35px;
    right: -5px;
    box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.2);
    z-index: 1;
    background-color: #fff;
  }

  .hex_table_action .deal_buttons li {
    line-height: 32px;
    text-align: left;
    padding: 0 10px;
    cursor: pointer;
  }

  .hex_table_action .deal_buttons li:hover {
    background-color: @cl_f0e;
  }

  .person-block {
    padding-top: 17px;
    padding-bottom: 16px;
  }

  .hex_table_row .hash_code_tip {
    display: inline-block;
    min-width: 400px;
    a {
      text-decoration: underline;
      color: #14a2a5
    }
  }

  .hex_table_row .fee_tip {
    display: inline-block;
    min-width: 100px;
  }

  .hex_table_row .hash_code_tip,
  .hex_table_row .time_tip,
  .hex_table_row .fee_tip {
    color: @cl_333;
  }

  .hex_table_row_tip {
    width: 990px;
    top: 0;
    padding: 0 25px;
    border-bottom: 1px solid @cl_858_2;
  }

  .balance-block-title span.title_tip {
    padding: 0 12px;
    font-size: 14px;
    border: 1px solid #dddde4;
    height: 30px;
    cursor: pointer;
    line-height: 28px;
  }

  .balance-block-title span.title_tip.cur {
    color: white;
    background: @cl_link;
    border: 1px solid @cl_link;
  }

  .hex_table_row {
    height: 40px;
    line-height: 40px;
  }

  .lookover span {
    cursor: pointer;
  }

  .borrow-money {
    width: 80px;
    height: 36px;
    background: linear-gradient(135deg, #14a2a5 0%, #14a2a5 100%);
    font-size: 14px;
    color: white;
    position: relative;
  }

  .repayment {
    /*padding: 2px 8px;*/
    /*background: linear-gradient(135deg, #14a2a5 0%, #14a2a5 100%);*/
    color: rgb(111, 143, 241);
    cursor: pointer;
  }

  .repayment_no {
    color: #c9c8cc;
    background: transparent;
  }

  .assets-flow {
    text-align: left;
    padding-left: 20px;
    .el-date-editor .el-range-separator {
      line-height: 30px !important;
    }
    .el-date-editor {
      vertical-align: middle
    }
    .el-input__inner, .el-date-editor {
      border-radius: 0 !important;
    }
    .traded-block-search_button {
      display: inline-block;
      height: 32px;
      line-height: 32px;
      text-align: center;
      color: @cl_fff;
      background-color: @cl_link;
      font-size: 14px;
      width: 60px;
      cursor: pointer;
      vertical-align: middle;
    }
  }
</style>
<template>
  <div class="balance">
    <div class="person-block">
      <span class="person-block_icon wallet"></span>
      <div class="person-block_info balance_info">
        <p class="balance_info_title">
          <span class="balance_tip">{{$t('leverage.debitRecords')}}</span>
          <button class='borrow-money fr' @click="toLeverage">{{$t('leverage.borrow')}}
          </button>
        </p>
      </div>
    </div>

    <div class="balance-block">
      <!--Tab-->
      <div class="balance-block-title clearfix">
        <span class="title_tip left"
              :class="records==1?'cur':''"
              @click="tabComponent(1)">{{$t('leverage.debitRecords')}}</span>
        <span class="title_tip left"
              :class="records==2?'cur':''"
              @click="tabComponent(2)">{{$t('leverage.funds')}}</span>
      </div>

      <!--借币记录-->
      <template v-if="records==1">
        <table class="hex_table">
          <thead class="hex_table_header padding br">
          <tr>
            <!--申请时间-->
            <th class="lt">
              <div>{{$t('leverage.application')}}</div>
            </th>
            <!--杠杆账户-->
            <th class="lt">
              <div>{{$t('wallet.leveraged')}}</div>
            </th>
            <!--币种-->
            <th class="lt">
              <div>{{$t('legalTrad.Currencies')}}</div>
            </th>
            <!--借款数量-->
            <th class="lt">
              <div>{{$t('leverage.loans')}}</div>
            </th>
            <!--已归还数量-->
            <th class="rt">
              <div>{{$t('leverage.returned')}}</div>
            </th>
            <!--倍数-->
            <th class="rt">
              <div>{{$t('leverage.multiple')}}</div>
            </th>
            <!--日利率-->
            <th class="rt">
              <div>{{$t('leverage.dailyInterestRate')}}</div>
            </th>
            <!--总计支付利息-->
            <th class="rt">
              <div>{{$t('leverage.totalInterestPaid')}}</div>
            </th>
            <!--利息结算时间-->
            <th class="rt">
              <div>{{$t('leverage.interestSettlementTime')}}</div>
            </th>
            <!--状态-->
            <th class="rt">
              <div>{{$t('memberCenter.statue')}}</div>
            </th>
            <!--操作-->
            <th class="rt">
              <div>{{$t('home.tradeOperation')}}</div>
            </th>
          </tr>
          </thead>
          <tbody>
          <template v-for="(coins,index) in loanDetails">
            <tr class="hex_table_body padding"
                :key="index">
              <!--申请时间-->
              <td class="fw lt">
                {{getRecordTime(coins)}}
              </td>
              <!--账户类型-->
              <td class="lt">
                {{global_get_uppercase(coins.symblename)}}
              </td>
              <!--币种-->
              <td class="lt">
                {{global_get_uppercase(coins.loancurrencyname)}}
              </td>
              <!--借款数量-->
              <td class="lt">
                {{coins.loancurrencyamount}}
              </td>
              <!--已归还-->
              <td class="rt">
                {{coins.paymentamount}}
              </td>
              <!--倍数-->
              <td class="rt">
                {{coins.borrowmultiple}}X
              </td>
              <!--日利率-->
              <td class="rt">
                {{global_get_tofixed(coins.dayrate, 2)}}
              </td>
              <!--总计支付利息-->
              <td class="rt">
                {{global_get_tofixed(coins.totalpaymentinterest, global_get_decimal(coins.loancurrencyname).a)}}
              </td>
              <!--利息支付时间-->
              <td class="rt">
                {{getPaidTime(coins.paymenttime)}}
              </td>
              <!--状态-->
              <td class="rt">
                <span>{{global_get_leverage_state(Number(coins.istatus))}}</span>
              </td>
              <!--操作 传入各个记录对应的交易对名称 coins 是数组遍历的对象-->
              <td class="rt">
                <span v-if="coins.istatus==1" @click="showPop(coins)"
                      class="repayment">{{$t('leverage.repayment')}}</span>
                <span v-else class="repayment repayment_no">{{$t('leverage.repayment')}}</span>
              </td>
            </tr>
          </template>
          </tbody>
        </table>
        <!--暂无记录logo-->
        <div class="anonymous" v-if="found">
          <div class="anonymous-pic">
            <img src="~/static/images/user/anonymous.svg" alt="">
          </div>
          <nuxt-link tag="p" to="/margin/btc_usdt" class="anonymous-tip">
            {{$t('legalTrad.record')}}，{{$t('legalTrad.Go')}}<span> {{$t('legalTrad.Trade')}}</span>
          </nuxt-link>
        </div>

        <div class="paging-source" v-if="total>0">
          <el-pagination
            background
            @current-change="handChange"
            :current-page.sync="currentPage"
            :page-size="20"
            popper-class="paging"
            layout="prev, pager, next"
            :total="total">
          </el-pagination>
        </div>
        <div class="loadingPic por" v-hex-loading="loading" v-if="loading"></div>
      </template>

      <!--资金明细-->
      <template v-else>
        <table class="hex_table">
          <!--<caption class="assets-flow">-->
          <!--&lt;!&ndash;类型&ndash;&gt;-->
          <!--<el-select size="small" v-model="optionsTypeSelect" :placeholder="$t('memberCenter.type')"-->
          <!--@change="selectedTypeEvent">-->
          <!--<el-option-->
          <!--v-for="item in optionsType"-->
          <!--:key="item.value"-->
          <!--:label="item.label"-->
          <!--:value="item.value">-->
          <!--</el-option>-->
          <!--</el-select>-->
          <!--&lt;!&ndash;币种&ndash;&gt;-->
          <!--<el-select size="small" v-model="optionsCoinsSelect" :placeholder="$t('wallet.coin')"-->
          <!--@change="selectedCoinsEvent">-->
          <!--<el-option-->
          <!--v-for="item in optionsCoins"-->
          <!--:key="item.value"-->
          <!--:label="(item.label).toUpperCase()"-->
          <!--:value="item.value">-->
          <!--</el-option>-->
          <!--</el-select>-->
          <!--&lt;!&ndash;时间&ndash;&gt;-->
          <!--<el-date-picker-->
          <!--@change="selectedDateEvent"-->
          <!--size="small"-->
          <!--v-model="initDate"-->
          <!--type="datetimerange"-->
          <!--:range-separator="$t('leverage.to')"-->
          <!--:start-placeholder="$t('leverage.startDate')"-->
          <!--:end-placeholder="$t('leverage.endDate')">-->
          <!--</el-date-picker>-->

          <!--<span class="traded-block-search_button" @click="searchAssetsDetails">{{$t('wallet.inquire')}}</span>-->
          <!--</caption>-->

          <thead class="hex_table_header padding br">
          <tr>
            <!--时间-->
            <th class="lt">
              <div>{{$t('deal.time')}}</div>
            </th>
            <!--流水ID-->
            <th class="lt">
              <div>{{$t('leverage.flow')}}</div>
            </th>
            <!--结算订单ID-->
            <th class="lt">
              <div>{{$t('wallet.coin')}}</div>
            </th>
            <!--流水类型-->
            <th class="lt">
              <div>{{$t('leverage.flowType')}}</div>
            </th>
            <!--金额-->
            <th class="rt">
              <div>{{$t('memberCenter.prices')}}</div>
            </th>
            <!--备注-->
            <th class="rt">
              <div>{{$t('Waddress.remark')}}</div>
            </th>
          </tr>
          </thead>
          <tbody>
          <template v-for="(coins,index) in assetsDetails">
            <tr class="hex_table_body padding"
                :key="index">
              <td class="fw lt">
                {{getRecordTime(coins)}}
              </td>
              <td class="lt">
                {{coins.id}}
              </td>
              <td class="lt">
                {{global_get_uppercase(coins.currencyname)}}
              </td>
              <td class="lt">
                {{coins.typename}}
              </td>
              <td class="rt">
                {{global_get_tofixed(coins.amount, global_get_decimal(coins.currencyname).a)}}
              </td>
              <td class="rt">
                {{coins.remark}}
              </td>
            </tr>
          </template>
          </tbody>
        </table>

        <div class="anonymous" v-if="found">
          <div class="anonymous-pic">
            <img src="~/static/images/user/anonymous.svg" alt="">
          </div>
          <nuxt-link tag="p" to="/margin/btc_usdt" class="anonymous-tip">
            {{$t('legalTrad.record')}}，{{$t('legalTrad.Go')}}<span> {{$t('legalTrad.Trade')}}</span>
          </nuxt-link>
        </div>
        <div class="paging-source" v-if="total>0">
          <el-pagination
            background
            @current-change="handChange"
            :current-page.sync="currentPage"
            :page-size="20"
            popper-class="paging"
            layout="prev, pager, next"
            :total="total">
          </el-pagination>
        </div>
        <div class="loadingPic por" v-hex-loading="loading" v-if="loading"></div>
      </template>

      <!--归还借贷popup-->
      <repayment-popup
        :hedge="hedge"
        :symblename="symblename"
        :loancurrencyamount="loancurrencyamount"
        :loanamount="loanamount"
        :interest="interest"
        :loancurrencyname="loancurrencyname"
        @closePopup="closePopup"
        @confirmToRepayment="confirmToRepayment"
        v-show="popupstate"
        ref="child"/>
    </div>
  </div>
</template>
<script>
  import repaymentPopup from '@/components/security/repayment-popup';

  export default {
    name: 'wallet_leverage',
    components: {
      'repayment-popup': repaymentPopup,
    },
    data() {
      return {
        found: false,
        loading: true,
        popupstate: false,
        id: '',
        symblename: '',
        loancurrencyname: '',
        loanDetails: [],
        currencyData: [],
        assetsDetails: [],
        total: 0,
        interest: 0,//支付利息
        loanamount: 0,//应还数量
        records: 1,
        currentPage: 1,//防止由于公用变量引起的页码相互影响
        loancurrencyamount: 0,//贷款数量
        page: {
          pageindex: 1,
          pagesize: 20,
        },
        searchParams: {
          type: '',
          currencyname: '',
          endtime: '',
          starttime: '',
        },
        optionsType: [{
          value: 4,
          label: this.$t('memberCenter.sell')
        }, {
          value: 5,
          label: this.$t('memberCenter.buy')
        }, {
          value: 6,
          label: this.$t('wallet.serviceCharge')
        }],
        initDate: [],//初始化起始日期
        optionsCoins: [],//币种列表
        optionsTypeSelect: [],//el-select 必须绑定默认值 不然警告
        optionsCoinsSelect: [],
      }
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
      this.getUserCoin();
      this.getWalletInfo();
//      this.getCoinsType();
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
      },
      getRecordTime: function (coins) {
        return (coins.createtime) ? this.global_get_local_time(coins.createtime).format('YYYY-MM-DD HH:mm:ss') : '--'
      },
      getPaidTime: function (paymenttime) {
        return paymenttime ? this.global_get_local_time(paymenttime).format('YYYY-MM-DD HH:mm:ss') : '--'
      },

      //分页 event
      handChange(val) {
        if (this.records === 1)
        //借币
          this.getUserCoin(val);
        else
        //资金
          this.getUserAssetsDetails(val);
      },

      //借币明细记录
      getUserCoin(pageIndex) {
        this.loading = true;
        this.found = false;
        this.loanDetails = [];

        const postData = Object.assign({}, this.page, {uid: this.$userinfo.uid, key: this.$userinfo.secretkey});

        pageIndex ? postData.pageindex = pageIndex : postData.pageindex = 1;

        this.$store.dispatch("userborrowmoney_user_borrow_infos", postData)
          .then(({data}) => {
            if (data) {
              this.total = data.totalitemcount;
              this.loanDetails = data.pagedata;
              this.total ? this.found = false : this.found = true;
            } else {
              this.total = 0;
              this.found = true;
              this.loanDetails = [];
            }
            this.loading = false;
          })
      },
      //Tab 切换两种列表
      tabComponent(val) {
        this.records = val;
        this.currentPage = 1;
        //切换时候默认自动加载借币明细数据
        if (this.records === 1) {
          this.getUserCoin();
        } else {
          this.getUserAssetsDetails();
        }
      },
      //search event
//      searchAssetsDetails() {
//        if (!this.searchParams.type || !this.searchParams.currencyname || !this.searchParams.starttime || !this.searchParams.endtime) {
//          this.$store.commit('set_message', {
//            type: 'error',
//            text: this.$t('leverage.criteria')
//          });
//
//          return
//        } else {
//          this.getUserAssetsDetails(1);
//        }
//      },
      //search 才会触发查询数据
      getUserAssetsDetails(pageIndex) {
        this.loading = true;
        this.found = false;
        this.assetsDetails = [];

        const postData = Object.assign({}, this.page, {
          uid: this.$userinfo.uid,
          key: this.$userinfo.secretkey
        }, this.searchParams);

        pageIndex ? postData.pageindex = pageIndex : postData.pageindex = 1;

        this.$store.dispatch("userborrowmoney_assets_record_getlist", postData)
          .then(({data}) => {
            if (data) {
              this.total = data.totalitemcount;
              this.assetsDetails = data.pagedata;
              this.total ? this.found = false : this.found = true;
            } else {
              this.total = 0;
              this.found = true;
            }
            this.loading = false;
          })
      },
      //获得账户的对冲金额
      getWalletInfo() {
        const _self = this;

        _self.$store.dispatch('user_assets_get', {
          assetstype: 1,
          rows: 100
        }).then(({data}) => {
          if (data) {
            this.currencyData = data;
          }
        })
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

        this.$store.dispatch('userborrowmoney_user_borrow_back', params).then((res) => {
          if (res.data) {
            this.$store.commit('set_message', {
              type: 'ok',
              text: res.msg
            })
          }

          _self.getUserCoin();
          _self.$refs.child.close();
        }).catch((err) => {
          _self.$refs.child.closeLoading();
        })
      },
//      getCoinsType() {
//        this.$store.dispatch("quotation_frenchcurrency").then(({data}) => {
//          if (data) {
//            data.map((item) => {
//              let result = {};
//
//              result['label'] = item;
//              result['value'] = item;
//
//              this.optionsCoins.push(result);
//            });
//          }
//        })
//      },
//      selectedTypeEvent(val) {
//        this.searchParams.type = val;
//      },
//      selectedCoinsEvent(val) {
//        this.searchParams.currencyname = val;
//      },
//      selectedDateEvent(val) {
//        this.searchParams.starttime = (val[0]).getTime();
//        this.searchParams.endtime = (val[1]).getTime();
//      }
      toLeverage() {
        this.$router.push('/margin/center/btc_usdt');
      },
    }
  }
</script>
