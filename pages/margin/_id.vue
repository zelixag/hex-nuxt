<style lang='less'>

  @import "../../static/styles/color";

  .money-exchange-content {
    background-color: @cl_global;
    .left-list,
    .center-list,
    .right-list {
      float: left;
    }
    .left-list {
      width: 280px;
      height: 782px;
      margin-right: 6px;
      margin-bottom: 6px;
    }
    .center-list {
      margin-right: 6px;
      margin-bottom: 6px;
    }
    .right-list {
      margin-bottom: 6px;
      width: 280px;
      height: 782px;
    }

    .money-exchange {
      width: 1200px;
      min-width: 1200px;
      margin: auto;
      .content {
        position: relative;
        overflow: hidden;
        width: 100%;
      }
      .content:after {
        content: '';
        display: block;
        clear: both;
      }
      .chart-block {
        height: 442px;
        width: 628px;
        background-color: @cl_content;
        overflow: hidden;
        margin-bottom: 6px;
      }
    }

    @import "../deal/exchangeblock";
  }
  .exchange-block_content{
    overflow: hidden;
    max-height: 259px;
  }
  .exchange-block_nav{
    position: relative;
  }
   .notice{
    position: absolute;
    z-index: 99;
    background: url(../../static/images/notice.png) no-repeat left 10px center,#14a2a5;
    border-radius: 5px;
    padding-left: 30px;
    padding-right: 6px;
    line-height: 30px;
    font-size: 12px;
    color: #fff;
    right: -10px;
    top: -35px;
  }
  .notice a{
    margin-left: 5px;
    display:inline-block;
    background:rgba(255,255,255,0.9);
    border-radius: 5px;
    color: #14a2a5;
    line-height: 24px;
    font-size: 12px;
    padding: 0 5px;
    min-width: 40px;
    text-align: center;
  }
  .notice a:hover{
    background:rgba(255,255,255, 1);
  }
  .notice:after{
    content: " ";
    position: absolute;
    top: 29px;
    left: calc(75% - 39px);
    background:url(../../static/images/ardo.png) no-repeat top center;
    width: 15px;
    height: 10px;
  }
  .close{
    background: url(../../static/images/close.png) no-repeat top center;
    width: 15px;
    height: 10px;
    display: inline-block;
    opacity: 0.8;
    cursor: pointer;
  }
  .close:hover{
    opacity: 1;
  }
  .el-slider__button-wrapper {
    z-index: 99;
  }
</style>
<template>
  <div class="hex-flex">
    <div class="money-exchange-content hex-flex_auto">
      <div class="money-exchange">
        <!--24小时行情start-->
        <hex-new-money
          :dcs="dcs"
          :symbleParameArray="symbleParameArray"
          :symblefrom="symblefrom"
          :symbleto="symbleto"
          :symbleParameString="symbleParameString"
          :dailyDetail="dailyDetail"></hex-new-money>
        <!--24小时行情end-->
        <div class="content">

          <div class="left-list">
            <!--币种列表-->
            <hex-coinlist
              class="margin"
              :dailyDetail="dailyDetail"
              :marginData="marginData"
              :symbleto="symbleto">
            </hex-coinlist>
            <!--币种列表end-->
            <!--最新成交start-->
            <hex-knockdown
              :dcs="dcs"
              :symblefrom="symblefrom"
              :symbleto="symbleto"
              :symbleParameString="symbleParameString"></hex-knockdown>
            <!--最新成交end-->
          </div>

          <!--中间交易模块-->
          <div class="center-list">
            <div class="chart-block" style="height: 442px;">
              <!-- TradingView Widget BEGIN -->
              <no-ssr>
                <hex-chart class="hex-chart-margin"
                           :symbleParameString="symbleParameString"
                           :from="symblefrom"
                           :to="symbleto"></hex-chart>
              </no-ssr>
              <!-- TradingView Widget END -->
          </div>
              <!--账户杠杆信息-->
              <hex-margin-token
                v-show=true
                :dcs="dcs"
                :marginDataMatch="marginDataMatch"
                :symblefrom="symblefrom"
                :symbleto="symbleto"
                ref="child_margin"
                ></hex-margin-token>
              <!--账户杠杆信息 END-->
           
            <div class="exchange-block" style="overflow:inherit;">
              <div class="exchange-block_nav">
                <div class="notice" v-if="notice=== false">
                  {{$t('deal.notice01')}}
                  <!-- <a href="/person/margin">{{$t('deal.notice02')}}</a> -->
                  <div class="close" @click="HideNotice"></div>
                </div> 
                <span :class="{'active':orderType==1}" @click="setOrderType(1)">{{$t('deal.limitedDeal')}}</span>
                <span :class="{'active':orderType==2}" @click="setOrderType(2)">{{$t('deal.marketDeal')}}</span>
                <span :class="{'active':orderType==3}" @click="setOrderType(3)">{{$t('deal.stopLoss')}}</span>

                <span class="margin-operate">
                  <nuxt-link tag="span" @click.native="showPop(leverageCtidInfo,symblefrom)" to=""
                             class="meuns">{{$t('leverage.into')}}</nuxt-link>
                  <nuxt-link tag="span" @click.native="showPopOut(leverageCtidInfo,symblefrom)" to=""
                             class="meuns">{{$t('leverage.transferOut')}}</nuxt-link>
                 <nuxt-link tag="span" @click.native="setBorrowShow()" to=""
                            class="meuns">{{$t('leverage.loan')}}</nuxt-link>
                 <!-- <nuxt-link tag="span" :to="{path:`/margin/center/${symblefrom.toLowerCase()}_${symbleto.toLowerCase()}`}"
                            class="meuns">{{$t('leverage.return')}}</nuxt-link> -->
               </span>
              </div>
              <!--限价交易start-->
              <hex-limit
                v-if="orderType==1"
                :dcs='dcs'
                :margin="margin"
                :symbleParameArray="symbleParameArray"
                :symblefrom="symblefrom"
                :symbleto="symbleto"
                :tradingDealTo="tradingDealTo"
                :tradingDealFrom="tradingDealFrom"
                :dailyDetail="dailyDetail"
                :entrustSaleRate="entrustSaleRate"
                :entrustBuyRate="entrustBuyRate"
                :entrustSaleNum="entrustSaleNum"
                :entrustBuyNum="entrustBuyNum"></hex-limit>
              <!--限价交易end-->

              <!--市价交易start-->
              <hex-market
                v-if="orderType==2"
                :dcs='dcs'
                :margin="margin"
                :symblefrom="symblefrom"
                :symbleto="symbleto"
                :tradingDealTo="tradingDealTo"
                :tradingDealFrom="tradingDealFrom"
                :dailyDetail="dailyDetail"
                :entrustSaleRate="entrustSaleRate"
                :entrustBuyRate="entrustBuyRate"></hex-market>
              <!--市价交易end-->

              <!--止盈止损交易start-->
              <hex-profit-loss
                v-if="orderType==3"
                :dcs='dcs'
                :margin="margin"
                :symbleParameArray="symbleParameArray"
                :symblefrom="symblefrom"
                :symbleto="symbleto"
                :tradingDealTo="tradingDealTo"
                :tradingDealFrom="tradingDealFrom"
                :dailyDetail="dailyDetail"
                :entrustSaleRate="entrustSaleRate"
                :entrustBuyRate="entrustBuyRate"
                :triggerPriceBuy="triggerPriceBuy"
                :triggerPriceSale="triggerPriceSale"
                :entrustSaleNum="entrustSaleNum"
                :entrustBuyNum="entrustBuyNum"></hex-profit-loss>
              <!--止盈止损交易end-->
            </div>
          </div>
          <!--中间交易模块-->

          <div class="right-list">
            <!--委托列表start-->
            <hex-entrust
              :dcs="dcs"
              @entrust:getEntrustRate="getEntrustRate"
              :symbleParameString="symbleParameString"
              :symblefrom="symblefrom"
              :symbleto="symbleto"
              :dailyDetail="dailyDetail"></hex-entrust>
            <!--委托列表end-->
          </div>

        </div>
        <!--用户订单列表start-->
        <hex-order
          :symbleto="symbleto"
          :margin="margin"
          :ordersymble="ordersymble"
          :symbleParameString="symbleParameString"
          :dailyDetail="dailyDetail"
          ref="hexorder"
                        ></hex-order>
    <hex-in
      :symblename="symblename"
      :whichOne="whichOne"
      @confirmToRepayment="confirmToRepayment"
      @closePopup="closePopup"
      v-show="pop_in"
      ref="child_in"/>
    <hex-out
      :symblename="symblename"
      :whichOne="whichOne"
      :leverage_assets_data="leverage_assets_data"
      @confirmToRepayment="confirmToRepayment"
      @closePopup="closePopupOut"
      v-show="pop_out"
      ref="child_out"/>
        <!--用户订单列表end-->
      </div>
    </div>
    <hex-borrow
    v-show="borrowShow"
    @closePopup="setBorrowShow"
    :symblefrom = "symblefrom.toLowerCase()"
    :symbleto = "symbleto.toLowerCase()"
    @repayment:success="repaymentSuccess"
    :ordersymble = "symblefrom.toLowerCase() + '/' + symbleto.toLowerCase()"
    ref="borrow"
    >
    </hex-borrow>
  </div>
</template>
<script>
  import chart from '@/components/deal/chart'
  import limit from '@/components/deal/limit'
  import market from '@/components/deal/market'
  import profitLoss from '@/components/deal/profit-loss'
  import orderList from '@/components/deal/order-list'
  import entrust from '@/components/deal/entrust'
  import knockdown from '@/components/deal/knockdown'
  import newMoney from '@/components/deal/new-money'
  import coinList from '@/components/deal/coin-list-margin'
  import marginToken from '@/components/margin/margin-token'
  import coin from '@/components/public/coin'
  import provider from '@/components/deal/js/chart-provider.js'
  import borrow from '@/components/deal/order-list-borrow'
  import inPop from '@/components/security/in-popup';
  import outPop from '@/components/security/out-popup';
  export default {
    name: 'Home',
    components: {
      'hex-chart': chart,
      'hex-limit': limit,
      'hex-profit-loss': profitLoss,
      'hex-market': market,
      'hex-order': orderList,
      'hex-entrust': entrust,
      'hex-knockdown': knockdown,
      'hex-new-money': newMoney,
      'hex-coin': coin,
      'hex-coinlist': coinList,
      'hex-margin-token': marginToken,
      'hex-borrow': borrow,
      'hex-in': inPop,
      'hex-out': outPop,
    },
    computed: {
      symbleParameArray: function () {
        if (!this.$route.params.id) return null
        const ary = this.$route.params.id.split('_')
        return ary.length != 2 ? null : ary
      },
      ordersymble: function () {
        if (!this.$route.params.id) return '';
        return this.$route.params.id.replace('_', '/');
      },
      symbleParameString: function () {
        if (!this.$route.params.id) return '';
        return this.$route.params.id.replace('_', '')
      },
      //获取产品
      symblefrom: function () {
        return this.symbleParameArray ? this.symbleParameArray[0].toUpperCase() : '--'
      },
      //获取货币
      symbleto: function () {
        return this.symbleParameArray ? this.symbleParameArray[1].toUpperCase() : '--'
      },
      sub: function () {
        return `market.${this.symbleParameString}.detail`
      }
    },
    data() {
      return {
        /*卸载轮询订阅*/
        sockettimer: [
          this.$socket.url.quotation_marketing_depth_get,
          this.$socket.url.quotation_daily_getall,
          this.$socket.url.quotation_trading_details_get,
          this.$socket.url.quotation_daily_get,
          this.$socket.url.quotation_kline_get,
          this.$socket.url.trading_order_search
        ],
        /*卸载socket订阅*/
        sockettype: [
          this.$socket.type.quotation_marketing_depth_get,
          this.$socket.type.quotation_daily_getall,
          this.$socket.type.quotation_trading_details_get,
          this.$socket.type.quotation_daily_get,
          this.$socket.type.quotation_kline_get
        ],
        borrowShow: false,
        dcs: {},
        background: false,
        notice: false,
        orderType: 1,
        pop_in: false,
        pop_out:false,
        loading: false,
        symblename: "",
        whichOne: "",
        ctid: 0,
        leverage_assets_data: {},
        titleCurrency: [],
        currencyMore: [],
        marginData: [],
        activeStatus: '-1',
        noDataText: false,
        searchtitle: false,
        moreStatus: false,
        storeCion: "",//币种
        searchStr: '',
        ctidMargin: 0,//对应杠杆币种交易对id
        //获取用户交易对信息
        tradingDealTo: {
          canuseamount: 0
        },
        tradingDealFrom: {
          canuseamount: 0
        },
        //设置触发价
        triggerPriceBuy: '',
        triggerPriceSale: '',
        //设置买入卖出价
        entrustBuyRate: '',
        entrustSaleRate: '',
        entrustBuyNum: '',
        entrustSaleNum: '',
        dailyDetail: {},
        title: '',
        margin: 'margin'//杠杆订单标识
      }
    },
    async asyncData({store, params, redirect}) {
      if (!params.id) {
        return {}
      }

      const symble = params.id.replace('_', '')
      const symble_filter = params.id.replace('_', '/')

      const daily = await store.dispatch('quotation_daily_get', {symble: symble})
      const margin = await store.dispatch('userborrowmoney_borrow_symbols')

      if (daily.code == 0 || margin.code == 0) {
        redirect('/')

        return;
      }

      let _ = (margin.data).filter((item) => {
        return (item.descriptions.toLowerCase() == symble_filter.toLowerCase());
      });

      return {
        dailyDetail: daily.data,
        marginData: margin.data,
        marginDataMatch: _[0],
      }
    },
    methods: {
      //交易数据接口(用户交易对信息)
      getSymbleInfo() {
        if (this.$userinfo.uid && this.symbleParameString) {
          let _ = this.dailyDetail.ctid;

          this.$store.dispatch('userborrowmoney_user_mortgageassets_infos', {ctid: _}).then(({data}) => {
            if (data) {
              this.tradingDealFrom = Object.assign({}, {canuseamount: Number(data[0].famount)});
              this.tradingDealTo = Object.assign({}, {canuseamount: Number(data[0].tamount)});
              //更新用户资产
              this.global_refresh_user_assets();
              /*更新交易状态*/
              this.$pubsub.publish(this.$pubsub.changeDealState);
            }
          })
        }

//        console.log(this.symbleParameString)//bhdeth
//        if (this.$userinfo.uid && this.symbleParameString) {
//          this.$store.dispatch('user_assets_get', {assetstype: 1, symble: this.symbleParameString}).then(({data}) => {
//            if (data) {
//              console.log(data)
//              data.map((item) => {
//                if (item.currency.currencyname.toLowerCase() == this.symblefrom.toLowerCase()) {
//                  this.tradingDealFrom = item
//                } else {
//                  this.tradingDealTo = item
//                }
//              })
//              //更新用户资产
//              this.global_refresh_user_assets()
//
//              /*更新交易状态*/
//              this.$pubsub.publish(this.$pubsub.changeDealState)
//            }
//          })
//        }
      },
      repaymentSuccess() {
        // this.$refs.hexorder.updatedata()
        window.location.reload()
      },
      HideNotice() {
        this.notice = true
        // localStorage.setItem('notice', true)
      },
      changeCoinTitleTab(coin) {
        if (this.coinTitleActive == coin) {
          this.coinTitleActive = ''
        } else {
          this.coinTitleActive = coin;
        }
      },
      searchCoin() {
      },
      limitPrice: function (c, o) {
        let limit_price = Number((((c - o) / o) * 100).toFixed(4));
        return isNaN(limit_price) ? 0 : limit_price;
      },
      //设置买入价卖出价 触发价
      getEntrustRate(m) {
        this.entrustBuyRate = this.global_get_tofixed(m.p, this.dcs.p)
        this.entrustSaleRate = this.global_get_tofixed(m.p, this.dcs.p)
        this.triggerPriceBuy = this.global_get_tofixed(m.p, this.dcs.p)
        this.triggerPriceSale = this.global_get_tofixed(m.p, this.dcs.p)
        this.entrustBuyNum = this.global_get_tofixed(m.alltotal, this.dcs.a)
        this.entrustSaleNum = this.global_get_tofixed(m.alltotal, this.dcs.a)
      },
      //设置订单类型
      setOrderType(num) {
        this.orderType = num
      },
      setBorrowShow(){
        this.borrowShow = !this.borrowShow 
      },
      closePopup() {
        this.pop_in = !this.pop_in;
      },
      closePopupOut() {
        this.pop_out = !this.pop_out;
      },
      showPop(data, which) {
        this.pop_in = !this.pop_in;
        this.ctid = data.ctid;
        this.symblename = data.symblename;
        this.whichOne = which;
      },
      showPopOut(data, which) {
        this.pop_out = !this.pop_out;
        this.ctid = data.ctid;
        this.symblename = data.symblename;
        this.leverage_assets_data = data;
        this.whichOne = which;
      },
      confirmToRepayment(_this) {
        const _selt = this;

        const params = Object.assign({}, _this, {
          ctid: this.ctid,
          uid: this.$userinfo.uid,
          key: this.$userinfo.secretkey
        });


        _selt.$store.dispatch('userborrowmoney_user_transfer_inorout', params).then((res) => {
          if (res.data) {
            _selt.$store.commit('set_message', {
              type: 'ok', text: res.msg
            });

            _selt.getLeverageInfo(_selt.id);
            /*更新资产*/
            _selt.pop_in ? _selt.$refs.child_in.close() : _selt.$refs.child_out.close();
            window.location.reload()
          } else {
            _selt.pop_in ? _selt.$refs.child_in.close() : _selt.$refs.child_out.close();
            _selt.pop_in ? _selt.$refs.child_in.closeLoading() : _selt.$refs.child_out.closeLoading();
          }
        })
      },
            /*获取对应杠杆账户资产信息*/
      getLeverageInfo(id) {
        const _self = this;
        let _ = [];

        _self.$store.dispatch('userborrowmoney_user_mortgageassets_infos', {ctid: 0}).then(({data}) => {
          if (data) {
            data.map((item, i) => {
                if (item.ctid === id) {
                  if (Number(item.riskrate) <= 1.1 && Number(item.riskrate) > 0) {
                    _self.percentage = '100%';
                  } else if (Number(item.riskrate) > 1.1 && Number(item.riskrate) < 2) {
                    _self.percentage = `${((item.riskrate - 1.1) / (2 - 1.1)) * 100}%`;
                  } else {
                    _self.percentage = 0;
                  }

                  _self.leverageCtidInfo = item;
                  console.log(_self.leverageCtidInfo)
                }

                _.push(Object.assign({}, {ctid: item.ctid, riskrate: item.riskrate}))
            });

            _self.leverageCtidInfoCombine = _;
          }
        })
      },
      //获取交易对行情
      _getDaily() {
        const _self = this
        if (!this.symbleParameString) {
          return
        }
        _self.$store.dispatch('getIntervalData', {
          url: this.$socket.url.quotation_daily_get,
          params: {symble: this.symbleParameString},
          timer: this.$socket.timer.quotation_daily_get,
          callback: ({data}) => {
            if (data) {
              this.dailyDetail = data
            }
          }
        })
      },
      getDaily() {
        if (!this.symbleParameString) {
          return
        }
        this.$store.dispatch(this.$socket.url.quotation_daily_get, {symble: this.symbleParameString})
          .then(({data}) => {
            if (data) {
              this.dailyDetail = data;
            }
          })
          .then(() => {
            this.$socket.invoke({
              sub: this.sub,
              type: this.$socket.type.quotation_daily_get
            })
          })
      },
      cleartimer() {
        this.$socket.cleartimer(this.sockettimer)
        for (let item in provider.timer) {
          provider.timer[item] = -1
        }
      }
    },
    /*订阅socket相关*/
    sockets() {
      return {
        /*订阅的类型*/
        type: this.$socket.type.quotation_daily_get,
        /*订阅*/
        receive(res) {
          if (res && res.topic == this.sub) {
            setTimeout(() => {
              res.data && delete res.data.self
              Object.assign(this.dailyDetail, res.data)
            }, 6)
          }
        },
        /*重新订阅*/
        reinvoke() {
          this.cleartimer()
        },
        /*触发轮询*/
        polling: {
          url: this.$socket.url.quotation_daily_get,
          callback: this._getDaily
        }
      }
    },
    /*订阅相关消息*/
    subscribe() {
      return {
        /*获取用户交易对信息*/
        getSymbleInfo() {
          this.$refs.child_margin.getLeverageInfo()
          this.$refs.child_out.assetsBalance()
          this.$refs.child_in.assetsBalance()
          this.$refs.borrow.getLeverageInfo()
          this.getSymbleInfo()
        },
        /*更新交易卖出买入量*/
        entrustSaleRate(v) {
          if (v) {
            this.entrustSaleRate = v
          }
        },
        entrustBuyRate(v) {
          if (v) {
            this.entrustBuyRate = v
          }
        }
      }
    },
    created() {
      this.dcs = this.global_get_decimal(this.ordersymble)
      if (this.$userinfo.uid) {
        this.getLeverageInfo(this.dailyDetail.ctid)
      }  
    },
    mounted() {
      this.global_init_meiqia(false)
      //交易数据接口(用户交易对信息)
      this.getSymbleInfo()
      //24小时行情
      this.getDaily()
    },
    beforeDestroy() {
      this.cleartimer()
      this.global_init_meiqia(true)
      this.$socket.uninvoke(this.sockettype)
    }
  }
</script>
