<style scoped lang="less">
  @import "css/order-list";
    .tooltip-icon:hover {
        background-image: url("../../static/images/trade/tip-active.svg");
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
</style>

<template>
  <div class="traded">
    <div class="traded-block">
      <div class="traded_table_content">
        <table class="hex_table abc">
          <thead class="  hex_table_header padding br">
          <tr>
            <th class="lt">
              <div>{{$t('memberCenter.orderTime')}}</div>
            </th>
            <th class="lt">
              <div>{{$t('memberCenter.dealTime')}}</div>
            </th>
            <th class="lt">
              <div>{{$t('memberCenter.market')}}</div>
            </th>
            <th class="rt">
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
            <th class="rt">
              <div>{{$t('wallet.serviceCharge')}}</div>
            </th>
            <th class="rt">
              <div>{{$t('memberCenter.statue')}}</div>
            </th>
          </tr>
          </thead>
          <tbody class="deal-tbody">
          <tr class="hex_table_body padding"
              v-for="(coins,index) in orderDetail"
              :key="index">
            <td class="lt">
              {{global_get_local_time(coins.createtime).format('YYYY-MM-DD HH:mm:ss')}}
            </td>
            <td class="lt">
              {{coins.orderstatus==2?"--":global_get_local_time(coins.updatetime).format('YYYY-MM-DD HH:mm:ss')}}
            </td>
            <td class="lt">
              {{global_get_uppercase(coins.symble)}}
            </td>
            <td class="rt">
              {{global_get_order_type(Number(coins.ordertype))}}
            </td>
            <td class="rt" :class="{'success':coins.direction==1,'fail':coins.direction==-1}">
              {{global_get_order_direction(coins.direction)}}
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
            <td class="rt" v-else>
              {{global_get_tofixed(coins.transactionamount,global_get_decimal(coins.symble).a)}}
            </td>
            <td class="rt">
              {{global_get_tofixed(getavgprice(coins),global_get_decimal(coins.symble).p)}}
            </td>
            <td class="rt">
              {{global_get_tofixed(global_get_fee(coins).toFixed(9).replace(/\.?0+$/, ""),8)}}
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
      <div class="loadingPic deal" v-hex-loading="loading" v-if="loading"></div>
      <div class="anonymous" v-if="found">
        <div v-if="$userinfo.uid">
          <div class="anonymous-pic">
            <img src="~/static/images/user/anonymous.svg" alt=""
                 v-if="$store.state.hex_client_background.active=='day'">
            <img src="~/static/images/user/anonymous_black.svg" v-else alt="">
          </div>
          <!--<p class="anonymous-tip">-->
          <!--{{$t('legalTrad.record')}}，{{$t('legalTrad.Go')}}<span>{{$t('legalTrad.Trade')}}</span>-->
          <!--</p>-->
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

  </div>
</template>

<script>

  export default {
    name: 'articles',
    props: ['isSelect', 'symbleto','changeState','margin'],
    data() {
      return {
        loading: true,
        found: false,
        total: 0,
        serachOrder: {
          pagesize: 20,
          pageindex: 1,
          orderstatus: '2,3,4'
        },
        searchParam: {},
        orderDetail: [],
        market: [],
      }
    },
    watch: {
      'isSelect': function (val) {
        this.getUserDeal();
      },
      'changeState': function (val) {
        if (val == 2) {
          this.getUserDeal();
        }
      }
    },
    mounted() {
      this.getUserDeal();
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
      handChange(val) {
        this.serachOrder.pageindex = val
        this.getUserDeal()
      },
      getavgprice(m) {
        const ary = [1, 3, 4];
        if (ary.indexOf(m.orderstatus) < 0) {
          return '--'
        } else {
          return m.tradeavgprice
        }
      },
      getVolume(coin) {// 已成交=委托量/成交均价
        return this.$np.divide(coin.transactionamount, this.getavgprice(coin))
      },
      getAllPrice(coins) {
        const p = this.$np.times(coins.tradeavgprice, coins.transactionamount)
        if (!p) return p.toFixed(2);
        return this.global_get_tofixed(p);
      },
      // 过去用户交易记录
      getUserDeal() {
        if (this.$userinfo.uid) {
          let serachOrder = Object.assign({}, this.serachOrder)
          this.isSelect ? serachOrder.symble = this.isSelect : delete serachOrder.symble;

          serachOrder.itype = (this.margin === 'margin') ? 1 : 0;

          this.$store.dispatch('trading_order_search', serachOrder).then(({data}) => {
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
