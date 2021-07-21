<style scoped lang="less">
  @import "css/order-list";
  dt{
  cursor: pointer;
  border-bottom:1px dashed #14a2a5;
}
.hex_table_header th {
  line-height: 18px;
  padding-top: 7px;
  padding-bottom: 7px;
}
input{
  height: 25px;
  width: 70px;
  line-height: 25px;
  padding: 0 5px;
  background: transparent;
  border-radius: 2px;
  border: 1px solid #556380;
  color: #fff;
  -moz-appearance:textfield;
}
input:focus{
  border-color: #14a2a5;
}
.felin-sel {
  position: relative;
}
.felin-in:focus~ .in-sel{
  display: block;
}
.in-sel{
  display: none;
  position: absolute;
  width: 70px;
  line-height: 25px; 
  background: #292e39;
  border-radius: 2px;
  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.2);
  color: #fff;
  right: 2px;
  top: 35px;
  text-align: left;
  color: #8790a1;
  z-index: 9;
}
.in-sel li{
  padding: 0 5px;
  cursor: pointer;
}
.in-sel li:hover{
  background:#333946;
  color: #fff;
}
.repeal button{
  background: transparent;
  height: 30px;
}
.pd{
  color:#E63550;
}
.pu{
  color: #18CA64;
}
.repeal button[disabled]{
  color: #8790A1;
  cursor:not-allowed;
}
</style>
<template>
  <div class="traded">
    <div class="traded-block">
      <div class="traded_table_content">
        <table class="hex_table">
          <thead class="hex_table_header padding br">
          <tr>
            <th class="lt">
              <div>{{$t('contract.contract')}}</div>
            </th>
            <th class="lt">
              <dt class="tooltip-hover">{{$t('contract.opening')}}
                <div class="tooltip-inner ">
                  <em class="tooltip-text ">{{$t('contract.openingTip')}}</em>
                  <i class="tooltip-arrow "></i>
                </div>
              </dt><br>
              <span>(USDT)</span>
              <div>
              </div>
            </th>
            <th class="rt">
              <dt class="tooltip-hover">{{$t('contract.average')}}
                <div class="tooltip-inner ">
                  <em class="tooltip-text ">{{$t('contract.averageTip')}}</em>
                  <i class="tooltip-arrow "></i>
                </div>
              </dt><br>
              <span>(USDT)</span>
            </th>
            <th class="rt">
              <dt class="tooltip-hover">{{$t('contract.position')}}
                <div class="tooltip-inner ">
                  <em class="tooltip-text ">{{$t('contract.positionTip')}}</em>
                  <i class="tooltip-arrow "></i>
                </div>
              </dt><br>
              <span>({{ordersymble.split('/')[0].toUpperCase()}})</span>
            </th>
              <th class="rt">
              <dt class="tooltip-hover">{{$t('contract.leverage')}}
                <div class="tooltip-inner ">
                  <!-- <em class="tooltip-text ">{{$t('contract.leverageTip')}}</em> -->
                  <i class="tooltip-arrow "></i>
                </div>
              </dt><br>
              <span>(X)</span>
            </th>
            <th class="rt">
              <dt class="tooltip-hover">{{$t('contract.unrealized')}}
                <div class="tooltip-inner ">
                  <em class="tooltip-text ">{{$t('contract.unrealizedTip')}}</em>
                  <i class="tooltip-arrow "></i>
                </div>
              </dt><br>
              <span>({{ordersymble.split('/')[0].toUpperCase()}})</span>
            </th>
            <th class="rt">
              <dl class="clearfix">
              <dt class="tooltip-hover">{{$t('contract.realized')}}
                <div class="tooltip-inner ">
                  <em class="tooltip-text ">{{$t('contract.realizedTip')}}</em>
                  <i class="tooltip-arrow "></i>
                </div>
              </dt><br>
              <span>({{ordersymble.split('/')[0].toUpperCase()}})</span>
              </dl>
            </th>
            <th class="rt">
              <dt class="tooltip-hover">{{$t('contract.rate')}}
                <div class="tooltip-inner ">
                  <em class="tooltip-text ">{{$t('contract.rateTip')}}</em>
                  <i class="tooltip-arrow "></i>
                </div>
              </dt><br>
              <span>%</span>
            </th>
            <th class="rt">
              <dt class="tooltip-hover">{{$t('contract.positionZh')}}
                <div class="tooltip-inner ">
                  <em class="tooltip-text ">{{$t('contract.positionZhTip')}}</em>
                  <i class="tooltip-arrow "></i>
                </div>
              </dt><br>
              <span>(USDT)</span>
            </th>
            <th class="rt">
              <dt class="tooltip-hover">{{$t('contract.flatZh')}}
                <div class="tooltip-inner ">
                  <em class="tooltip-text ">{{$t('contract.flatZhTip')}}</em>
                  <i class="tooltip-arrow "></i>
                </div>
              </dt><br>
              <span>(USDT)</span>
            </th>
            <th class="rt">
              <div>{{$t('contract.closeHold')}}<br>(USDT)</div>
            </th>
            <th class="rt">
              <div>{{$t('contract.price')}}<br>(USDT)</div>
            </th>
            <th class="rt">
              <div>{{$t('contract.amount')}}<br>({{ordersymble.split('/')[0].toUpperCase()}})</div>
            </th>
            <th class="rt">
              <div>{{$t('contract.action')}}</div>
            </th>
          </tr>
          </thead>
          <tbody class="deal-tbody">
          <tr class="hex_table_body padding"
              v-for="(coins,index) in orderDetail"
              :key="index">
            <td class="lt">
               {{global_get_uppercase(coins.symblename)}}
            </td>
            <td class="lt">
              {{global_get_tofixed(coins.openavgprice, global_get_decimal(symblefrom.toLowerCase() +"/yx").p)}}
            </td>
            <td class="rt">
               {{global_get_tofixed(coins.holdpositionsavgprice, global_get_decimal(symblefrom.toLowerCase() +"/yx").p)}}
            </td>
            <td class="rt">
               {{global_get_tofixed(coins.holdpositionsamount, global_get_decimal(symblefrom.toLowerCase() +"/yx").a)}}
          
            </td>
            <td class="rt">
               {{global_get_tofixed(coins.multiple,0)}}
          
            </td>
            <td class="rt" >
              {{global_get_tofixed(coins.unrealizedprofitandlossamount, global_get_decimal(symblefrom.toLowerCase() +"/yx").a)}}
            </td>
            <td class="rt">
               {{global_get_tofixed(coins.profitamount, global_get_decimal(symblefrom.toLowerCase() +"/yx").a)}}
            </td>
            <td class="rt">
              {{getprofitrate(coins)}}%
            </td>
            <td class="rt">
              {{global_get_tofixed(coins.openinterest, global_get_decimal(symblefrom.toLowerCase() +"/yx").p)}}
            </td>
            <td class="rt" style="line-height: 18px;">
                <div class="tooltip-hover">
                   {{global_get_tofixed(coins.openinterest - coins.frozenamount, global_get_decimal(symblefrom.toLowerCase() +"/yx").p)}}
                    <div class="tooltip-inner ">
                      <em v-if="currencyUnitType == 1" class="tooltip-text" style="left: -8px;width: auto;white-space: nowrap;">可平量(张)={{global_get_tofixed(coins.openinterest - coins.frozenamount, 2)}}/{{contract_size}}={{global_get_tofixed((coins.openinterest - coins.frozenamount) / 10, 0)}}(张) </em>
                      <em v-else class="tooltip-text" style="left: -8px;width: auto;white-space: nowrap;">可平量({{symblefrom.toUpperCase()}})={{global_get_tofixed(coins.openinterest - coins.frozenamount, 2)}}/{{newmoney}}={{global_get_tofixed((coins.openinterest - coins.frozenamount)/newmoney, global_get_decimal(symblefrom.toLowerCase() +"/yx").a)}}({{symblefrom.toUpperCase()}})  </em>
                      <i class="tooltip-arrow" style="left: 3px;"></i>
                    </div>
                </div>
             
            </td>

            <td class="rt">
              {{global_get_tofixed(coins.frozenamount, global_get_decimal(symblefrom.toLowerCase() +"/yx").p)}}
            </td>
       
            <td class="rt felin">
              <input v-show=" coins.direction == -1 "  @input="changePrice(coins)" type="number" v-model="buyRate"  />
              <input v-show=" coins.direction == 1 " @input="changePrice(coins)" type="number" v-model="saleRate"/>
              <!-- {{global_get_tofixed((coins.ordertype == 2 || coins.ordertype == 6) ? coins.transactionamount : coins.tradeavgprice * coins.transactionamount, global_get_decimal(coins.symble).a)}} -->
            </td>
              
            <td class="rt felin felin-sel" width="80">
              <!-- <input class="felin-in" v-model="selback" /> -->
              <input class="felin-in" v-show="coins.direction == -1" type="number" v-model="buyAmount" />
              <input class="felin-in" v-show="coins.direction == 1" type="number" v-model="saleAmount" />
               <ul class="in-sel">
                <li @mousedown.prevent="selback='10%'" @click="changeAmount(coins, 0.1)">10%</li>
                <li @mousedown.prevent="selback='20%'" @click="changeAmount(coins, 0.2)">20%</li>
                <li @mousedown.prevent="selback='50%'" @click="changeAmount(coins, 0.5)">50%</li>
                <li @mousedown.prevent="selback='100%'" @click="changeAmount(coins, 1)">100%</li>
              </ul>
            </td>
            <td class="rt repeal" >
              <button class="pd" v-if="coins.direction == 1" :disabled="Number(saleAmount)>Number(maxSaleAmount)" @click="repeal(coins.direction)">{{ $t('memberCenter.closePositionDown')}}</button>
              <button class="pu" v-else :disabled="Number(buyAmount)>Number(maxBuyAmount)" @click="repeal(coins.direction)">{{$t('memberCenter.closePositionUp')}}</button>
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
          :page-size="5"
          popper-class="paging"
          layout="prev, pager, next"
          :total="total">
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
  import number from '@/components/public/number'
  export default {
    name: 'articles',
    components: {
      'hex-number': number,
    },
    props: ['isSelect', 'changeState', 'margin','dailyDetail', 'ordersymble', 'multiple', 'currencyUnitType', 'symblefrom', 'entrustBuyRate', 'entrustSaleRate'],
    data() {
      return {
        selback:"",
        loading: false,
        popupstate: false,
        serachOrder: {
          pageindex: 1,
          pagesize: 5,
          orderstatus: '0,1'
        },
        searchParam: {},
        orderDetail: [],
        market: [],
        total: 0,
        found: true,
        //订单数据模型
        dealModel: {
          ctid: '',
          ordertype: 1,
          direction: 1,
          price: 0,
          amount: 0,
          paypassword: '',
          ordersource: 1
        },
        inputPrice: false,
        inputAmount: false,
        contract_size:0,
        saleAmount: '',
        buyAmount: '',
        buyRate: '',
        saleRate: '',
        newmoney:'',
        buyPercentage:1, // 买 百分数
        salePercentage:1, // 卖 百分数
        maxSaleRate:0,
        maxBuyRate:0,
        maxSaleAmount:0,
        maxBuyAmount:0
      }
    },
    watch: {
      'changeState': function (val) {
        if (val == 1) {
          this.getUserDeal();
        }
      },
      'dailyDetail.c':function(val) {
        this.newmoney = val
      },
      'buyRate': function(val){
        this.orderDetail.filter(data => data.direction == -1).map(data=>{
          this.maxBuyAmount = this.global_get_tofixed((data.openinterest - data.frozenamount) / val, this.global_get_decimal(this.symblefrom.toLowerCase() +"/yx").a)
        })
        return val
      },
      'saleRate': function(val){
        this.orderDetail.filter(data => data.direction == 1).map(data=>{
          console.log(123,data)
          this.maxSaleAmount = this.global_get_tofixed((data.openinterest - data.frozenamount) / val, this.global_get_decimal(this.symblefrom.toLowerCase() +"/yx").a)
        })
  
        return val
      },
      'currencyUnitType': function (val) {
      },
      'maxSaleAmount': function (val) {
        console.log("maxSaleAmount",val)
      },
      'maxBuyAmount': function (val) {
        console.log("maxBuyAmount",val)
      }
    },
    mounted() {
      this.newmoney = this.dailyDetail.c
      for (let index = 0; index < 5; index++) {
        setTimeout(() => {
          if(this.entrustBuyRate > 0 || this.entrustSaleRate > 0){
            index = 5
          }
          this.buyRate = this.entrustBuyRate
          this.saleRate = this.entrustSaleRate
        },2000)
      }
      
      this.getUserDeal();
      this.contract_size = this.$store.getters.get__currency_contract_size(this.symblefrom)
    },
    subscribe() {
      return {
        //订阅更新orderlist 消息
        // getOrderList() {
        //   this.getUserDeal();
        // },
        changeNewMoney(res) {
          /*更新最新价格*/
          this.getUserDeal();
        },
      }
    },
    created() {
    },
    methods: {
      changeAmount(data, val) {
        console.log(222)
        if(data.direction == 1){
          this.salePercentage = val
          this.maxSaleAmount = this.global_get_tofixed((data.openinterest - data.frozenamount) / this.saleRate, this.global_get_decimal(this.symblefrom.toLowerCase() +"/yx").a)
          this.saleAmount = this.global_get_tofixed((data.openinterest - data.frozenamount) / this.saleRate * val, this.global_get_decimal(this.symblefrom.toLowerCase() +"/yx").a)
        }else{
          this.buyPercentage = val
          this.maxBuyAmount = this.global_get_tofixed((data.openinterest - data.frozenamount) / this.buyRate, this.global_get_decimal(this.symblefrom.toLowerCase() +"/yx").a)
          this.buyAmount = this.global_get_tofixed((data.openinterest - data.frozenamount) / this.buyRate * val, this.global_get_decimal(this.symblefrom.toLowerCase() +"/yx").a)
        }
      },
      changePrice(data) {
        if(data.direction == 1){
          this.maxSaleAmount = this.global_get_tofixed((data.openinterest - data.frozenamount) / this.saleRate, this.global_get_decimal(this.symblefrom.toLowerCase() +"/yx").a)
          this.saleAmount = this.global_get_tofixed((data.openinterest - data.frozenamount) / this.saleRate * this.salePercentage, this.global_get_decimal(this.symblefrom.toLowerCase() +"/yx").a)
        }else{
          this.maxBuyAmount = this.global_get_tofixed((data.openinterest - data.frozenamount) / this.buyRate, this.global_get_decimal(this.symblefrom.toLowerCase() +"/yx").a)
          this.buyAmount = this.global_get_tofixed((data.openinterest - data.frozenamount) / this.buyRate * this.buyPercentage, this.global_get_decimal(this.symblefrom.toLowerCase() +"/yx").a)
        }
      },
      getnum(coins) {
        return this.global_get_tofixed(coins.transactionamount, this.global_get_decimal(this.symblefrom.toLowerCase() +"/yx").a)
      },
      //（（已实现盈亏+未实现盈亏）/持仓保证金）*100%
      getprofitrate(coins){
        console.log(coins)
        var rate = this.global_get_tofixed((coins.profitamount +　coins.unrealizedprofitandlossamount) / coins.holdpositionsamount * 100, 2)
        return rate
      },
      getavgprice(m) {
        const ary = [1, 3, 4];
        if (ary.indexOf(m.orderstatus) < 0) {
          return '--'
        } else {
          return m.tradeavgprice
        }
      },
      coinDecimal(coin) {
        return coin.split('/')[1];
      },
      popup() {
        this.popupstate = !this.popupstate;
      },
      repeal(direction) {
        if (direction == 1 && (this.saleAmount == '' || this.saleAmount <= 0 || this.saleRate == '' || this.saleRate <= 0)) {
          return
        }else if (direction == -1 && (this.buyAmount == '' || this.buyAmount <= 0 || this.buyRate == '' || this.buyRate <= 0)) {
          return
        }
        this.dealModel.ordertype = 4;
        const dealModel = Object.assign({}, this.dealModel)
        dealModel.price = Number((direction == 1) ? this.saleRate : this.buyRate)
        dealModel.amount = Number((direction == 1) ? this.saleAmount : this.buyAmount)
        dealModel.multiple = Number(this.multiple)
        dealModel.ctid = this.dailyDetail.ctid.toString()
        dealModel.direction = (direction == 1) ? -1 : 1
        this.$store.dispatch('usercontract_order_create', dealModel)
          .then((res) => {
            if (res.data) {
              /*发布*/
              this.$pubsub.publish(this.$pubsub.getOrderList)
              this.$pubsub.publish(this.$pubsub.changeDepthChart)
              this.$store.commit('set_message', {type: 'ok', text: res.msg})
            }
          })
          .then(() => {
            // window.location.reload()
            this.saleAmount = ''
            this.buyAmount = ''
            this.getUserDeal()
          })
          .catch(() => {
            // window.location.reload()
          })
      },

      getAllPrice(coins) {
        const p = this.$np.times(coins.tradeavgprice, coins.transactionamount)
        if (!p) return p.toFixed(2)
        return p.toFixed(8)
      },
      //获取资产列表
      getUserDeal() {
        if (this.$userinfo.uid) {
          const params = Object.assign({},{
              ctid: this.dailyDetail.ctid,
              uid: this.$userinfo.uid,
              key: this.$userinfo.secretkey
            }
          );
          this.$store.dispatch("usercontract_user_contractassets_infos", params).then(({ data }) => {
            if (data && data.length > 0) {
              this.orderDetail = data[0].listhaveorderinfos;
              console.log(
                "usercontract_user_contractassets_infos",
                this.orderDetail
              );
            }
          });
        }
    }
  }
  }
</script>