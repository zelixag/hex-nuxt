<style lang='less' scoped>
  @import "../../static/styles/color";
  @import "../../static/styles/person";
  @import "../../static/styles/table";

  .traded_tip {
    font-size: 18px;
    font-weight: bold;
    margin-right: 10px;
  }

  .traded_info {
    font-size: 14px;
  }

  .traded_info .btc {
    color: @cl_buy;
    font-size: 30px;
    font-weight: bold;
    margin-right: 5px;
  }

  .traded_info .cny {
    color: @cl_link;
    font-size: 30px;
    font-weight: bold;
    margin-right: 5px;
  }

  .traded_info .br {
    margin: 0 20px;
    border-right: 1px solid @cl_858;
    display: inline-block;
    height: 20px;
  }

  .traded_info_title {
  }
  .tooltip-icon {
      display: inline-block;
      width: 14px;
      height: 14px;
      vertical-align: sub;
      background-repeat: no-repeat;
      background-size: 14px 14px;
      background-position: center;
      background-image: url("../../static/images/trade/tip-active.svg");
      cursor: pointer;
    }
  .tooltip-icon:hover {
    background-image: url("../../static/images/trade/tip-active.svg");
  }
  .traded_info_num {
    padding: 4px 0;
  }

  .traded_info_address_button {
    color: @cl_link;
    margin-top: 16px;
  }

  .traded-block {
    margin-top: 10px;
    background-color: @cl_fff;
  }

  .traded-block-title {
    padding: 18px 20px 8px 20px;
  }

  .traded-block-title .title_tip {
    font-size: 16px;
    font-weight: bold;
  }

  .traded-block-search {
    margin-right: 10px;
    font-size: 14px;
    min-width: 130px;
    display: inline-table;
    border-collapse: separate;
  }

  .traded-block-search input {
    height: 30px;
    line-height: 30px;
    border: 1px solid #DDDDDD;
    display: table-cell;
    width: 100%;
    padding: 5px 10px;
  }

  .traded-block-search .search-tip {
    display: table-cell;
    width: 60px;
    background-color: @cl_link;
    color: @cl_fff;
    border: 1px solid @cl_link;
    text-align: center;
  }

  .traded-block-search .search-tip::placeholder {
    color: @cl_bbb;
  }

  .traded-block-search_button {
    display: inline-block;
    height: 30px;
    line-height: 30px;
    text-align: center;
    color: @cl_fff;
    background-color: @cl_link;
    font-size: 14px;
    width: 60px;
    cursor: pointer;
  }

  .traded-block-reset_button {
    display: inline-block;
    height: 30px;
    line-height: 30px;
    text-align: center;
    color: @cl_link;
    font-size: 14px;
    width: 60px;
    margin-left: 10px;
    cursor: pointer;

  }

  .traded .person-block_info {
    line-height: 36px;
  }

  .person-block {
    padding: 18px 20px 16px 20px;
  }

  .traded-block .search-market {
    margin: 14px 0 10px 20px;
  }

  .ordertab {
    padding: 10px 20px;
  }

  .ordertab span {
    font-size: 14px;
    padding-bottom: 3px;

  }

  .ordertab span.entrust {
    margin-right: 20px;
  }

  .ordertab span.cur {
    color: #14a2a5;
    border-bottom: 2px solid #14a2a5;
  }

  .hex_table .rt {
    text-align: right;
  }

  .hex_table_body td {
    padding: 0 7px;
    line-height: 20px;
    min-width: 40px;
  }

  .hex_table_body td:first-child{
    width: 100px;
    word-break: break-word;
    line-height: 20px;
  }

  .hex_table_header th {
    padding: 0 7px;
  }

  .rt.orderstatus {
    width: 82px;
    line-height: 22px;
  }

  .hex_table_body.padding td.rt.orderstatus {
    padding-right: 15px !important;
  }

  .hex_table_body.padding td, .hex_table_header.padding th {
    padding: 10px 2px;
  }
</style>
<template>
  <div class="traded">
    <div class="traded-block">
      <div class="left search-market  clearfix" v-if="isSelect">
        <div class="traded-block-search">
          <hex-select ref="ordertype"
                      :type="$i18n.t('patch.Type')"
                      :order="ordertype"
                      :market="ordertypetext"
                      @searchData="searchData"
                      @change="change"
                      @clearCurrentState="clearCurrentState"/>
        </div>
        <div class="traded-block-search">
          <hex-select ref="dirction"
                      :type="$i18n.t('patch.Side')"
                      :order="direction"
                      :market="directiontext"
                      @searchData="searchData"
                      @change="change"
                      @clearCurrentState="clearCurrentState"/>
        </div>
        <div class="traded-block-search">
          <hex-select ref="market"
                      :type="$i18n.t('patch.Market')"
                      :order="market"
                      :market="markettext"
                      :margin="margin"
                      @searchData="searchData"
                      @change="change"
                      @clearCurrentState="clearCurrentState"/>
        </div>
        <div class="traded-block-search">
          <hex-select ref="orderstatus"
                      :type="$i18n.t('patch.Status')"
                      :order="orderstatusselect"
                      :market="orderstatusselecttext"
                      @searchData="searchData"
                      @change="change"
                      @clearCurrentState="clearCurrentState"/>
        </div>
        <span class="traded-block-search_button" @click="getUserDeal(false)">{{$t('wallet.inquire')}}</span>
        <span class="traded-block-reset_button" @click="resetSelect">{{$t('memberCenter.reset')}}</span>

      </div>
      <table class="hex_table abc">
        <thead class="  hex_table_header padding br">
        <tr>
          <th class="lt" style="min-width:147px;">
            <div>{{$t('memberCenter.orderTime')}}</div>
          </th>
          <th class="lt" style="min-width:132px;">
            <div>{{$t('memberCenter.dealTime')}}</div>
          </th>
          <th class="lt">
            <div>{{$t('memberCenter.market')}}</div>
          </th>
          <th class="rt" style="min-width: 56px;">
            <div>{{$t('memberCenter.type')}}</div>
          </th>
          <th class="rt">
            <div>{{$t('memberCenter.direction')}}</div>
          </th>
          <th class="rt">
            <div>{{$t("deal.entrustPrices")}}</div>
          </th>
          <th class="rt">
            <div>{{$t('deal.trigger')}}</div>
          </th>
          <th class="rt">
            <div>{{$t('deal.entrustNumber')}}</div>
          </th>
          <th class="rt">
            <div>{{$t('memberCenter.turnover')}}</div>
          </th>
          <th class="rt">
            <div>{{$t('deal.bargainPrice')}}</div>
          </th>
          <th class="rt" style="min-width: 93px;">
            <div>{{$t('wallet.serviceCharge')}}</div>
          </th>
          <th class="rt">
            <div>{{$t('memberCenter.statue')}}</div>
          </th>
        </tr>
        </thead>
        <tbody>
        <tr class="hex_table_body padding"
            v-for="(coins,index) in orderDetail"
            :key="index">
          <td class="lt">
            {{global_get_local_time(coins.createtime).format('YYYY-MM-DD HH:mm:ss')}}
          </td>
          <td class="lt">
            {{global_get_order_state(coins.orderstatus)==$t('patch.cancelled')?'--':global_get_local_time(coins.updatetime).format('YYYY-MM-DD HH:mm:ss')}}
            <!--{{global_get_local_time(coins.updatetime).format('YYYY-MM-DD HH:mm:ss')}}-->
          </td>
          <td class="lt"> {{global_get_uppercase(coins.symble).replace('/YX', $t('contract.swap'))}}
          </td>
          <td class="rt">
            {{global_get_contract_order_type(Number(coins.ordertype),coins.triggerprice)}}
          </td>
          <td class="rt" :class="{'success':coins.direction==1,'fail':coins.direction==-1}">
            {{global_get_contract_order_direction(coins.ordertype,coins.direction)}}
          </td>
          <td class="rt" v-if="(coins.ordertype==1)||(coins.ordertype==4)">
            {{global_get_tofixed(coins.price,global_get_decimal(coins.symble).p)}}
          </td>
          <td class="rt" v-else>--</td>
          <td class="rt" v-if="coins.ordertype==3||coins.ordertype==5">
            {{global_get_tofixed(coins.triggerprice, global_get_decimal(coins.symble).p)}}
          </td>
          <td class="rt" v-else>--</td>
          <td class="rt" v-if="(coins.ordertype==2&&coins.direction==1)||(coins.ordertype==6&&coins.direction==1)">
            {{global_get_tofixed(coins.amount,global_get_decimal(symbleto).a)}}
          </td>
          <td class="rt" v-else>
            {{global_get_tofixed(coins.amount,global_get_decimal(coins.symble).a)}}
          </td>
          <td class="rt" v-if="(coins.ordertype==2&&coins.direction==1)||(coins.ordertype==6&&coins.direction==1)">
            {{global_get_tofixed(getVolume(coins),global_get_decimal(coins.symble).a)}}
          </td>
          <td class="rt"  v-else>
            {{global_get_tofixed(coins.transactionamount,global_get_decimal(coins.symble).a)}}
          </td>
          <td class="rt">
            {{global_get_tofixed(getavgprice(coins),global_get_decimal(coins.symble).p)}}
          </td>
          <td class="rt">
            {{global_get_tofixed(global_get_fee(coins),8)}}
            <el-tooltip v-if="coins.licofee > 0" placement="top">
              <div slot="content">{{$t('legalTrad.licofee')}}: {{coins.licofee}}</div>
              <i class="tooltip-icon"></i>
            </el-tooltip>
          </td>
  
          <td class="rt orderstatus">
            {{global_get_order_state(coins.orderstatus)}}
          </td>
        </tr>
        </tbody>
      </table>
    </div>
    <div class="loadingPic por" v-hex-loading="loading" v-if="loading"></div>
    <div class="anonymous" v-if="found">
      <div class="anonymous-pic">
        <img src="~/static/images/user/anonymous.svg" alt="">
      </div>
        <nuxt-link v-if="this.margin === 'contract'" tag="p" to="/contract/eth_yx" class="anonymous-tip">
          {{$t('legalTrad.record')}}，{{$t('legalTrad.Go')}}
          <span>{{$t('legalTrad.Trade')}}</span>
        </nuxt-link>
        <nuxt-link v-else-if="this.margin === 'margin'" tag="p" to="/margin/btc_usdt" class="anonymous-tip">
          {{$t('legalTrad.record')}}，{{$t('legalTrad.Go')}}
          <span>{{$t('legalTrad.Trade')}}</span>
        </nuxt-link>
        <nuxt-link v-else tag="p" to="/deal/btc_usdt" class="anonymous-tip">
          {{$t('legalTrad.record')}}，{{$t('legalTrad.Go')}}
           <span>{{$t('legalTrad.Trade')}}</span>
        </nuxt-link>
    </div>
    <div class="paging-source" v-if="total>0">
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
</template>

<script>
  import more from '@/components/public/more'
  import select from '@/components/security/deal_select'

  export default {
    name: 'articles',
    props:['isSelect','margin'],
    components: {
      'hex-more': more,
      "hex-select": select
    },
    computed: {
      orderstatusselect: function () {
        return [
          {
            id: 3,
            value: this.$t('person.traded'),//未成交
            type: 'orderstatus'
          },
          {
            id: 4,
            value: this.$t('person.Partial'),//部分成交
            type: 'orderstatus'
          },
          {
            id: '2,5',
            value: this.$t('person.withdrawn'),//已撤单
            type: 'orderstatus'
          }
        ]
      },
      ordertype: function () {
        if (this.margin === 'margin') {
          return [
            {//类型
              id: 4,//状态
              value: this.$t('deal.limitedDeal'),//杠杆限价交易
              type: 'ordertype'
            }, {
              id: 6,
              value: this.$t('deal.marketDeal'),//杠杆市价交易
              type: 'ordertype'
            }, {
              id: 5,
              value: this.$t('deal.stopLoss'),//杠杆止盈止损
              type: 'ordertype'
            }]
        } else if (this.margin === 'contract') {
          return [
            {//类型
              id: 1,//状态
              value: this.$t('contract.openLimit'),//开仓限价交易
              type: 'ordertype'
            }, {
              id: 2,
              value: this.$t('contract.openMarket'),//开仓市价交易
              type: 'ordertype'
            }, {
              id: 3,
              value: this.$t('contract.openStop'),//开仓止盈止损交易
              type: 'ordertype'
            },{//类型
              id: 4,//状态
              value: this.$t('contract.closeLimit'),//平仓限价交易
              type: 'ordertype'
            }, {
              id: 6,
              value: this.$t('contract.closeStop'),//平仓止盈止损交易
              type: 'ordertype'
            }]
        }
        else {
          return [
            {//类型

              id: 1,//状态
              value: this.$t('deal.limitedDeal'),//限价交易
              type: 'ordertype'
            }, {
              id: 2,
              value: this.$t('deal.marketDeal'),//市价交易
              type: 'ordertype'
            }, {
              id: 3,
              value: this.$t('deal.stopLoss'),//止盈止损
              type: 'ordertype'
            }]
        }
      },
      direction: function () {
        return [
          {//方向
            id: 1,
            value: this.$t('memberCenter.buy'),//买入
            type: 'direction'
          }, {
            id: -1,
            value: this.$t('memberCenter.sell'),//卖出
            type: 'direction'
          }
        ]
      }
    },
    data() {
      return {
        loading:true,
        found: false,
        total: 0,
        orderState: true,
        serachOrder: {
          pagesize: 20,
          pageindex: 1,
          orderstatus: '2,3,4'
        },
        searchParam: {},
        directiontext: "direction",
        ordertypetext: "ordertype",
        markettext: "symble",
        orderstatusselecttext: "orderstatus",
        orderDetail: [],
        market: [],
      }
    },
    mounted() {
      this.getUserDeal(true);
    },
    methods: {
      handChange(val) {
        this.getUserDeal(false, val);
      },
      change(val) {
        const _self = this;
        switch (val) {
          case 'direction':
            _self.$refs.ordertype.changeBack();
            _self.$refs.market.changeBack();
            _self.$refs.orderstatus.changeBack();
            break;
          case 'ordertype':
            _self.$refs.dirction.changeBack();
            _self.$refs.market.changeBack();
            _self.$refs.orderstatus.changeBack();
            break;
          case 'symble':
            _self.$refs.dirction.changeBack();
            _self.$refs.ordertype.changeBack();
            _self.$refs.orderstatus.changeBack();
            break;
          case 'orderstatus':
            _self.$refs.dirction.changeBack();
            _self.$refs.ordertype.changeBack();
            _self.$refs.market.changeBack();
            break;
        }
      },
      getavgprice(m) {
        const ary = [1, 3, 4];
        if (ary.indexOf(m.orderstatus) < 0) {
          return '--'
        } else {
          return m.tradeavgprice
        }
      },
      getVolume(coin){// 已成交=委托量/成交均价
        return coin.amount / this.getavgprice(coin)
      },
      coinDecimal(coin){
         return coin.split('/')[1];
      },
      clearCurrentState(id) {
        this.searchParam[id] = {};
      },
      resetSelect() {
        this.$refs.dirction.clearStatus();
        this.$refs.ordertype.clearStatus();
        this.$refs.market.clearStatus();
        this.$refs.orderstatus.clearStatus();
        this.searchParam = {};
      },
      searchData(val) {//用于存子组件传过来数据
        this.searchParam[val.type] = val;
      },
      getAllPrice(coins) {
        const p = coins.tradeavgprice * coins.transactionamount;
        if (!p) return p.toFixed(2);
        return this.global_get_tofixed(p);
      },
      // 过去用户交易记录
      getUserDeal(val, pageIndex) {
        if(this.isSelect){
          this.$refs.dirction.changeBack();
          this.$refs.ordertype.changeBack();
          this.$refs.market.changeBack();
          this.$refs.orderstatus.changeBack();
        }
        let serachOrder = this.serachOrder;
        const _params = this.searchParam;
        val || !pageIndex ? serachOrder.pageindex = 1 : serachOrder.pageindex = pageIndex;
        let symble, direction, ordertype, orderstatus;
        _params.symble == undefined ? symble = [] : symble = Object.getOwnPropertyNames(_params.symble);
        _params.direction == undefined ? direction = [] : direction = Object.getOwnPropertyNames(_params.direction);
        _params.ordertype == undefined ? ordertype = [] : ordertype = Object.getOwnPropertyNames(_params.ordertype);
        _params.orderstatus == undefined ? orderstatus = [] : orderstatus = Object.getOwnPropertyNames(_params.orderstatus);
        ordertype.length > 0 ? serachOrder[_params.ordertype.type] = _params.ordertype.id : delete serachOrder.ordertype;
        direction.length > 0 ? serachOrder[_params.direction.type] = _params.direction.id : delete serachOrder.direction;
        symble.length > 0 ? serachOrder[_params.symble.type] = _params.symble.value : delete serachOrder.symble;
        orderstatus.length > 0 ? serachOrder[_params.orderstatus.type] = _params.orderstatus.id : serachOrder['orderstatus'] = '2,3,4';

        serachOrder.itype = (this.margin === 'margin') ? 1 : 0;
        var url 
        if (this.margin == "contract") {
          url = 'usercontract_order_search'
        } else {
          url = 'trading_order_search'
        }
        this.$store.dispatch(url, serachOrder).then(({data}) => {
          if (data) {
            this.total = data.totalitemcount;
            this.orderDetail=data.pagedata;
            this.found = false;

          } else {
            this.found = true;
            this.total = 0;
            this.orderDetail = [];
          }
          this.loading = false;
        })
      }
    }
  }
</script>

