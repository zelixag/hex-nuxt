<style scoped lang="less">
  @import "css/order-list";

  .scroll-bar {
    height: 200px;
  }

  .hex_table_header.padding th:first-child,
  .hex_table_body.padding td:first-child {
    padding-left: 10px !important;
  }

  .hex_table_header.padding th:last-child,
  .hex_table_body.padding td:last-child {
    padding-right: 10px !important;
  }
</style>
<template>
  <div class="traded">
    <div class="traded-block">
      <div class="traded_table_content">
        <div v-bar>
          <div class="scroll-bar">
            <table class="hex_table">
              <thead class="hex_table_header padding br">
              <tr>
                <th class="lt">
                  <div>{{$t('memberCenter.orderTime')}}</div>
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
                  <div>{{$t('deal.entrustPrices')}}</div>
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
                  <div>{{$t('memberCenter.makeprices')}}</div>
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
                  {{global_get_local_time(coins.createtime).format('YYYY-MM-DD HH:mm:ss')}}
                </td>
                <td class="lt">
                  {{global_get_uppercase(coins.symble)}}
                </td>
                <td class="rt">
                  {{global_get_order_type(coins.ordertype)}}
                </td>
                <td class="rt" :class="{'success':coins.direction==1,'fail':coins.direction==-1}">
                  {{global_get_order_direction(coins.direction)}}
                </td>
                <td class="rt" v-if="coins.ordertype==1||coins.ordertype==4">
                  {{global_get_tofixed(coins.price, global_get_decimal(coins.symble).p)}}
                </td>
                <td class="rt" v-else>--</td>
                <td class="rt" v-if="coins.ordertype==3||coins.ordertype==5">
                  {{global_get_tofixed(coins.triggerprice, global_get_decimal(coins.symble).p)}}
                </td>
                <td class="rt" v-else>--</td>
                <td class="rt" v-if="(coins.ordertype==2&&coins.direction==1)||coins.ordertype==6&&coins.direction==1">
                  {{global_get_tofixed(coins.amount, global_get_decimal(coinDecimal(coins.symble)).a)}}
                </td>
                <td class="rt" v-else>
                  {{global_get_tofixed(coins.amount, global_get_decimal(coins.symble).a)}}
                </td>
                <td class="rt">
                  {{global_get_tofixed(getnum(coins),global_get_decimal(coins.symble).a)}}
                </td>
                <td class="rt">
                  {{global_get_tofixed(getavgprice(coins),global_get_decimal(coins.symble).p)}}
                </td>
                <td class="rt">
                  {{global_get_tofixed((coins.ordertype == 2 || coins.ordertype == 6) ? coins.transactionamount : coins.tradeavgprice * coins.transactionamount, global_get_decimal(coins.symble).a)}}
                </td>
                <td class="rt">
                  {{coins.orderstatus==0?$t('memberCenter.unturn'):$t('memberCenter.sectionunturn')}}
                </td>
                <td class="rt repeal" @click="repeal(coins.id)">
                  {{$t('memberCenter.revoke')}}
                </td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div class="loadingPic deal" v-hex-loading="loading" v-if="loading"></div>
      <div class="anonymous" v-if="found">
        <div v-if="$userinfo.uid">
          <div class="anonymous-pic">
            <img src="~/static/images/user/anonymous.svg" alt=""
                 v-if="$store.state.hex_client_background.active=='day'">
            <img src="~/static/images/user/anonymous_black.svg" v-else alt="">
          </div>
          <!--<nuxt-link tag="p" to="/deal/eth_btc" class="anonymous-tip">-->
          <!--{{$t('legalTrad.record')}}，{{$t('legalTrad.Go')}}<span> {{$t('legalTrad.Trade')}}</span>-->
          <!--</nuxt-link>-->
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
    props: ['isSelect','changeState','margin'],
    data() {
      return {
        loading: true,
        popupstate: false,
        serachOrder: {
          pageindex: 1,
          pagesize: 20,
          orderstatus: '0,1'
        },
        searchParam: {},
        orderDetail: [],
        market: [],
        total: 0,
        found: false
      }
    },
    watch: {
      'isSelect': function (val) {
        this.getUserDeal();
      },
      'changeState': function (val) {
        if (val == 1) {
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
      coinDecimal(coin) {
        return coin.split('/')[1];
      },
      getnum(coins) {
        return this.global_get_tofixed(coins.transactionamount, this.global_get_decimal(coins.symble).a)
      },
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
      popup() {
        this.popupstate = !this.popupstate;
      },
      repeal(id) {//订单撤销
        if (this['cancel_' + id]) return
        this['cancel_' + id] = true
        this.$store.dispatch('trading_order_cancel', {orderid: id}).then((res) => {
          if (res.data) {
            let fliterData = [];
            this.orderDetail.forEach((item) => {
              if (item.id != id) {
                fliterData.push(item);
              }
            });
            this.popupstate = !this.popupstate;
            this.orderDetail = fliterData;
            this.$store.commit('set_message', {type: 'ok', text: res.msg})
            this['cancel_' + id] = false
            /*发布更新交易对*/
            this.$pubsub.publish(this.$pubsub.getSymbleInfo)
          }
        })
      },

      getAllPrice(coins) {
        const p = this.$np.times(coins.tradeavgprice, coins.transactionamount)
        if (!p) return p.toFixed(2)
        return p.toFixed(8)
      },
      //获取委托订单
      getUserDeal() {
        if (this.$userinfo.uid) {
          let serachOrder = Object.assign({}, this.serachOrder)
          this.isSelect ? serachOrder.symble = this.isSelect : delete serachOrder.symble;

          this.$socket.cleartimer(this.$socket.url.trading_order_search)

          serachOrder.itype = (this.margin === 'margin') ? 1 : 0;

          this.$store.dispatch('getIntervalData', {
            url: this.$socket.url.trading_order_search,
            params: serachOrder,
            timer: this.$socket.timer.trading_order_search,
            callback: (res) => {
              const data = res.data
              const params = res.params
              if (params.pageindex == this.serachOrder.pageindex) {
                if (data) {

                  this.total = data.totalitemcount;
                  this.orderDetail = data.pagedata;
                  this.found = false;
                } else {
                  this.total = 0;
                  this.found = true;
                  this.orderDetail = [];
                  this.$socket.cleartimer(this.$socket.url.trading_order_search)
                }
                /*更新交易对明细*/
                this.$pubsub.publish(this.$pubsub.getSymbleInfo)
                this.loading = false;
              }
            }
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
