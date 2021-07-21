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
  .entrust-list{
    border-top: none!important;
    height: 748px!important;
  }
  .entrust-list .entrust-list_title .select_list_tab .all,
   .entrust-list .entrust-list_title .select_list_tab .buy,
   .entrust-list .entrust-list_title .select_list_tab .sell{
    width: 24px!important;
    height: 20px!important;
    margin: 5px 5px;
    border: none;
    border-radius: 3px;
  }
  .entrust-list .entrust-list_title .select_list_tab .buy.active,
  .entrust-list .entrust-list_title .select_list_tab .all.active,
   .entrust-list .entrust-list_title .select_list_tab .sell.active{
    border: 1px solid #14a2a5!important;
  }
  .knockdown-list{
    border-top: none!important;
    height: 410px!important;
  }
  .knockdown-list_title{
    display: none!important;
  }
  .knockdown-list .knockdown-list_content .knockdown-list_content_body{
    height: 380px!important;
  }
  .exchange-block_tnav{
    line-height: 35px;
    position: relative;
    border-bottom: 1px solid #292E39;
  }
  .tnav{
    display: inline-block;
    width: 76px;
    text-align: center;
    font-size: 14px;
    border-top: 2px solid transparent;
    cursor: pointer;
    color: #8790A1;
  }
  .tnav.active{
    background-color: #292E39;
    color: #14a2a5;
    border-top: 2px solid #14a2a5;
  }
  .exchange-block_snav{
    padding: 12px 10px 5px;
    border-bottom: none!important;
  }
  .snav{
    height: 24px;
    margin-right: 6px;
    line-height: 22px!important;
    background:transparent;
    border-radius: 2px;
    border: 1px solid #556380;
  }
  .snav:hover{
   border-color: #14a2a5;
   color: #14a2a5;
  }
  .snav.active{
    color: #14a2a5;
    border: 1px solid #14a2a5!important;
  }
  .money-exchange-content .exchange-block{
    height: 333px;
  }
 .exchange-block_snav .margin-operate .meuns{
    margin-right: 6px;
    padding: 0 10px;
    border: 1px solid #556380;
    font-size: 14px;
    background: transparent;
    border-radius: 2px;
    cursor: pointer;
 }
 .exchange-block_snav .margin-operate .meuns:hover{
   border-color: #14a2a5;
   color: #14a2a5!important;
 }
 .ac{
   margin-right: 6px;
   display: inline-block;
   font-size: 14px;
   border-bottom: 1px dashed #9aa5b5;
   cursor: pointer;
   color: #8790A1;
 }
 .ac:hover{
   color: #8790A1!important;
 }
 .ac_img{
   width: 15px;
   vertical-align: middle;
   cursor: pointer;
 }
 .exchange-block_title{
   color: rgba(255,255,255,0.9);
   text-align: center;
   font-weight: bold;
 }
 .tnav_content,
 .exchange-block_tnav .margin-operate{
   position: absolute;
 }
 .exchange-block_tnav .margin-operate{
   float:none!important;
   right: 10px;
   top: 0;
 }
 .exchange-block_tnav .margin-operate a,
 .exchange-block_tnav .margin-operate span{
   color: #14a2a5;
   cursor: pointer;
 }
 .exchange-block_tnav .margin-operate span:hover{
   color: #14a2a5!important;
 }
 .exchange-block_tnav .margin-operate span{
   margin-right: 10px;
 }
 .tooltip-hover{
  display: inline-block;
}
.tooltip-inner {
    position: relative;
    z-index: 500;
    left: 0;
    display: none;
}
.tooltip-inner .tooltip-arrow, .tooltip-inner .tooltip-text {
    position: absolute;
    box-shadow: 0 10px 20px 0 rgba(0,0,0,.4);
}
.tooltip-inner .tooltip-text {
    word-spacing: 0;
    display: block;
    font-size: 12px;
    color: #1c242c;
    word-wrap: break-word;
    border-radius: 3px;
    padding: 10px;
    bottom: 22px;
    text-align: justify;
    width: 208px;
    font-style: normal;
    background-color: #fff;
}
.tooltip-inner .tooltip-arrow {
    left: 10px;
    bottom: 17px;
    background-color: transparent;
    display: inline-block;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 5px solid #fff;
}
.tooltip-hover:hover .tooltip-inner{
    display: block;
}
.tnav2.active{
  border-color: #d74e5a!important;
}
.exchange-block_content{
     max-height: 254px;
}
.left-list > .dealcoin-list:first-child{
  height: 442px;
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
            <!--资产信息-->
            <hex-coininfo
              class="margin"
              :dailyDetail="dailyDetail"
              :marginData="marginData"
              :symbleto="symbleto"
              :symblefrom="symblefrom"
              @getSymbleInfo="getSymbleInfo">
            </hex-coininfo>
            <!--资产信息end-->
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
            <div class="exchange-block" style="overflow:inherit;">
            <div class="exchange-block_tnav clearfix">
              <div class="tnav_content">
                <span class="tnav" :class="{'active':openType==1}" @click="setOpenType(1)">{{$t('contract.openPosition')}}</span>
                <span class="tnav tnav2" :class="{'active':openType==2}" @click="setOpenType(2)">{{$t('contract.closePosition')}}</span>
              </div>
              <div class="exchange-block_title">{{symblefrom}}{{$t('contract.perpetualContract')}}</div>
              <div class="margin-operate">
                <nuxt-link tag="span" @click.native="showCalu()" to="" class="meuns">{{$t('contract.calculator')}}</nuxt-link>
                <a href="https://www.ilexexchange.com/help/help-detail?type=3576&id=1565690004857571746&title=service" class="meuns" target="_blank">{{$t('contract.feerate')}}</a>
              </div>
            </div>
              <div class="exchange-block_nav exchange-block_snav">
                <span class="snav" :class="{'active':orderType==1}" @click="setOrderType(1)">{{$t('deal.limitedDeal')}}</span>
                <span class="snav" v-show="openType == 1" :class="{'active':orderType==2}" @click="setOrderType(2)">{{$t('deal.marketDeal')}}</span>
                <span class="snav" :class="{'active':orderType==3}" @click="setOrderType(3)">{{$t('deal.stopLoss')}}</span>
                <div class="tooltip-hover">
                  <img class="ac_img" src="../../static/images/trade/plaint.svg">
                    <div class="tooltip-inner ">
                      <em class="tooltip-text" style="left: -8px;">{{$t('contract.marketTip')}} </em>
                      <i class="tooltip-arrow" style="left: 3px;"></i>
                    </div>
                </div>
                <!-- <span class="snav" :class="{'active':orderType==3}" @click="setOrderType(3)">{{$t('deal.stopLoss')}}</span> -->
                <div class="margin-operate">
                  <span class="ac tooltip-hover">{{$t('contract.allPosition')}}
                     <div class="tooltip-inner ">
                      <em class="tooltip-text" style="width:250px;">{{$t('contract.allPositionTip')}}</em>
                      <i class="tooltip-arrow"></i>
                    </div>
                  </span>
                  <!-- <nuxt-link tag="span" @click.native="showPop()" to="" -->
                    <nuxt-link tag="span" to=""
                             class="meuns tooltip-hover">{{this.currencyUnitType == 1 ? $t('contract.positionunit'):symblefrom}}
                    <div class="tooltip-inner ">
                      <em class="tooltip-text" style="width:70px; text-align:center;">{{$t('contract.tradingUnit')}}</em>
                      <i class="tooltip-arrow"></i>
                    </div>
                  </nuxt-link>
                  <nuxt-link tag="span" @click.native="setLeverage()" to=""
                            class="meuns tooltip-hover">{{this.currencyLeverage == "" ? "10":this.currencyLeverage}}
                    <div class="tooltip-inner ">
                      <em class="tooltip-text" style="left: -12px;width:120px; text-align:center;">{{$t('contract.multTip')}}</em>
                      <i class="tooltip-arrow" style="left:1px;"></i>
                    </div>
                  </nuxt-link>
                 <!-- <nuxt-link tag="span" :to="{path:`/margin/center/${symblefrom.toLowerCase()}_${symbleto.toLowerCase()}`}"
                            class="meuns">{{$t('leverage.return')}}</nuxt-link> -->
                  <div class="tooltip-hover">
                    <img class="ac_img" src="../../static/images/trade/plaint.svg">
                    <div class="tooltip-inner ">
                        <em class="tooltip-text" style="left: -8px; width:120px;">{{$t('contract.multTip2')}}</em>
                        <i class="tooltip-arrow" style="left: 3px;"></i>
                    </div>
                  </div>
               </div>
              </div>
              <!--限价交易start-->
              <hex-limit
                v-show="orderType==1"
                :dcs='dcs'
                :openType="openType"
                :contract="margin"
                :multiple="currencyLeverage"
                :listhaveorderinfos="listhaveorderinfos"
                :currencyUnitType="currencyUnitType"
                :symbleParameArray="symbleParameArray"
                :symblefrom="symblefrom"
                :symbleto="symbleto"
                :tradingDealTo="tradingDealTo"
                :tradingDealFrom="tradingDealFrom"
                :dailyDetail="dailyDetail"
                :entrustSaleRate="entrustBuyRate"
                :entrustBuyRate="entrustSaleRate"
                :entrustSaleNum="entrustSaleNum"
                :entrustBuyNum="entrustBuyNum"></hex-limit>
              <!--限价交易end-->

              <!--市价交易start-->
              <hex-market
                 v-show="openType == 1 && orderType==2"
                :dcs='dcs'
                :openType="openType"
                :contract="margin"
                :symbleParameString="symbleParameString"
                :multiple="currencyLeverage"
                :listhaveorderinfos="listhaveorderinfos"
                :currencyUnitType="currencyUnitType"
                :margin="margin"
                :symblefrom="symblefrom"
                :symbleto="symbleto"
                :tradingDealTo="tradingDealTo"
                :tradingDealFrom="tradingDealFrom"
                :dailyDetail="dailyDetail"
                :entrustSaleRate="entrustBuyRate"
                :entrustBuyRate="entrustSaleRate"></hex-market>
              <!--市价交易end-->

              <!--止盈止损交易start-->
              <hex-profit-loss
                v-if="orderType==3"
                :dcs='dcs'
                :openType="openType"
                :contract="margin"
                :symbleParameString="symbleParameString"
                :multiple="currencyLeverage"
                :listhaveorderinfos="listhaveorderinfos"
                :currencyUnitType="currencyUnitType"
                :margin="margin"
                :symbleParameArray="symbleParameArray"
                :symblefrom="symblefrom"
                :symbleto="symbleto"
                :tradingDealTo="tradingDealTo"
                :tradingDealFrom="tradingDealFrom"
                :dailyDetail="dailyDetail"
                :entrustSaleRate="entrustBuyRate"
                :entrustBuyRate="entrustSaleRate"
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
            <div class="exchange-block" style="overflow:inherit;height:unset;width:280px;border-bottom: none;">
            <div class="exchange-block_nav">
            <span :class="{'active':entrustType==8}" @click="setEntrustType(8)">{{$t('deal.entrustList')}}</span>
            <!-- <span :class="{'active':entrustType==9}" @click="setEntrustType(9)">{{$t('deal.newargain')}}</span> -->
            </div>
            </div>
            <hex-entrust
              :dcs="dcs"
              v-show="entrustType==8"
              @entrust:getEntrustRate="getEntrustRate"
              :symbleParameString="symbleParameString"
              :symblefrom="symblefrom"
              :symbleto="symbleto"
              :dailyDetail="dailyDetail"></hex-entrust>
            <!--委托列表end-->
            <!--最新成交start-->
            <hex-knockdown
              :dcs="dcs"
              v-show="entrustType==9"
              :symblefrom="symblefrom"
              :symbleto="symbleto"
              :symbleParameString="symbleParameString"></hex-knockdown>
            <!--最新成交end-->
          </div>

        </div>
        <!--用户订单列表start-->
        <hex-order
          :symbleto="symbleto"
          :margin="margin"
          :ordersymble="ordersymble"
          :symbleParameString="symbleParameString"
          :dailyDetail="dailyDetail"
          :multiple="currencyLeverage"
          :currencyUnitType="currencyUnitType"
          :symblefrom="symblefrom"
          :entrustBuyRate="entrustSaleRate"
          :entrustSaleRate="entrustBuyRate"
          ref="hexorder"
                        ></hex-order>
    <hex-currency-unit
      :symblefrom="symblefrom"
      @confirmCurrencyUnit="confirmCurrencyUnit"
      @closePopup="closePopup"
      v-show="pop_in"
      ref="child_in"/>
    <hex-calu
      :symblefrom="symblefrom"
      @confirmCurrencyUnit="confirmCurrencyUnit"
      @closePopup="showCalu"
      v-show="calu_in"
     />
    <hex-currency-leverage
      :symblefrom="symblefrom"
      :symbleto="symbleto"
      :dailyDetail="dailyDetail"
      @confirmCurrencyLeverage="confirmCurrencyLeverage"
      @reloadLeverage="reloadLeverage"
      @closePopup="setLeverage"
      v-show="leverageShow"
    />
      </div>
    </div>
  </div>
</template>
<script>
  import chart from '@/components/deal/chart'
  import limit from '@/components/deal/limit-contract'
  import market from '@/components/deal/market-contract'
  import coininfo from '@/components/deal/coin-info-contract'
  import profitLoss from '@/components/deal/profit-loss-contract'
  import orderList from '@/components/deal/order-list-contract'
  import entrust from '@/components/deal/entrust'
  import knockdown from '@/components/deal/knockdown-contract'
  import newMoney from '@/components/deal/new-money'
  import coinList from '@/components/deal/coin-list-contract'
  import marginToken from '@/components/margin/margin-token'
  import coin from '@/components/public/coin'
  import provider from '@/components/deal/js/chart-provider.js'
  import borrow from '@/components/deal/order-list-borrow'
  import currencyUnit from '@/components/security/currency-unit';
  import calu from '@/components/security/currency-calu';
  import currencyLeverage from '@/components/security/currency-leverage';
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
      'hex-currency-unit': currencyUnit,
      'hex-currency-leverage': currencyLeverage,
      'hex-out': outPop,
      'hex-calu': calu,
      'hex-coininfo':coininfo
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
          this.$socket.url.usercontract_order_search,
          this.$socket.url.usercontract_contract_getindexprice
        ],
        /*卸载socket订阅*/
        sockettype: [
          this.$socket.type.quotation_marketing_depth_get,
          this.$socket.type.quotation_daily_getall,
          this.$socket.type.quotation_trading_details_get,
          this.$socket.type.quotation_daily_get,
          this.$socket.type.quotation_kline_get,
          this.$socket.type.usercontract_order_search,
          this.$socket.type.usercontract_contract_getindexprice
        ],
        leverageShow: false,
        dcs: {},
        background: false,
        notice: false,
        orderType: 1,
        pop_in: false,
        calu_in:false,
        pop_out:false,
        loading: false,
        symblename: "",
        ctid: 0,
        entrustType: 8,
        openType:1,
        leverage_assets_data: {},
        titleCurrency: [],
        currencyMore: [],
        marginData: [],
        marginDataMatch:{},
        activeStatus: '-1',
        noDataText: false,
        searchtitle: false,
        moreStatus: false,
        storeCion: "",//币种
        searchStr: '',
        listhaveorderinfos: [],
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
        currencyUnitType:"",
        currencyLeverage:"10",
        margin: 'contract'//杠杆订单标识
      }
    },
    async asyncData({store, params, redirect}) {
      if (!params.id) {
        return {}
      }

      const symble = params.id.replace('_', '')
      const symble_filter = params.id.replace('_', '/')
  
      const daily = await store.dispatch('quotation_daily_get', {symble: symble,isContract:1})
      const contract = await store.dispatch('usercontract_contract_symbols')

      console.log(daily)
      if (daily.code == 0 || contract.code == 0) {
        redirect('/')

        return;
      }
      let _ = (contract.data).filter((item) => {
        return (item.descriptions.toLowerCase() == symble_filter.toLowerCase());
      });
      return {
        dailyDetail: daily.data,
        marginData: contract.data,
        marginDataMatch: _[0],
      }
    },
    methods: {
      //交易数据接口(用户交易对信息)
      getSymbleInfo() {
        if (this.$userinfo.uid && this.symbleParameString) {

          const params = Object.assign({}, {
            ctid:this.dailyDetail.ctid,
            uid: this.$userinfo.uid,
            key: this.$userinfo.secretkey
          });
          this.$store.dispatch('usercontract_user_contractassets_infos', params).then(({data}) => {
            if (data) {
              this.listhaveorderinfos = data[0].listhaveorderinfos
              this.tradingDealFrom = Object.assign({}, {canuseamount: Number(data[0].canuseamount)});
              this.tradingDealTo = Object.assign({}, {canuseamount: Number(data[0].canuseamount)});
              //更新用户资产
              this.global_refresh_user_assets();
              /*更新交易状态*/
              this.$pubsub.publish(this.$pubsub.changeDealState);
            }
          })
        }
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
        //设置订单类型
      setEntrustType(num) {
        this.entrustType = num
      },
      
      setOpenType(num) {
        this.margin = num == 1? "":"contract"
        this.openType = num
      },
      setLeverage(){
        this.leverageShow = !this.leverageShow 
      },
      closePopup() {
        this.pop_in = !this.pop_in;
      },
      closePopupOut() {
        this.pop_out = !this.pop_out;
      },
      showPop() {
        this.pop_in = !this.pop_in;
      },
      showCalu() {
        this.calu_in = !this.calu_in;
      },
      confirmCurrencyUnit(UnitType) {
        console.log(UnitType)
        this.currencyUnitType = UnitType
      },
      confirmCurrencyLeverage(Type) {
        console.log(Type)
        this.currencyLeverage = Type
        this.getSymbleInfo()
      },
      reloadLeverage(Type) {
        this.currencyLeverage = Type
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
                  // console.log(_self.leverageCtidInfo)
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
          params: {symble: this.symbleParameString,isContract: 1},
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
        this.$store.dispatch(this.$socket.url.quotation_daily_get, {symble: this.symbleParameString,isContract: 1})
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
      console.log(this.dcs)
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
