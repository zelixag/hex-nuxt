<template>
  <div class="exchange-block_content clearfix">
    <div class="exchange-block_content_left left">
      <div>
        <div class="exchange-block_input  ipt_hover">
          <span class="before">{{$t("deal.buyinRate")}}</span>
          <span class="after">USDT</span>
          <p class="market_tip">
            {{$t('deal.markeSell')}}
          </p>
        </div>
        <div class="exchange-block_input  ipt_hover">
          <span class="before">{{$t('deal.count')}}</span>
          <span class="after">{{this.currencyUnitType == 1 ? $t('contract.positionunit'):symblefrom}}</span>
          <hex-number
            :fix="currencyUnitType == 1?0:dcs.a"
            :num.sync="marketEntrustBuyNum"
            @number:focus="showBuyFocus"
            @number:blur="showBuyFocus"
            class='ipt_hover'></hex-number>
          <!-- <span
            v-show="mostBuyPurchases"
            class="exchange-block_owner_tip">≈<span
            class="num">{{getcurrencyUnitNum()}}</span></span> -->
        </div>
        <hex-slider
          :dec="getbuydec"
          @slider:change="getMarketEntrustBuyNum"></hex-slider>
      </div>
      <p
        class="exchange-block_tip tip_exchange">
        <span class="tip">{{openType == 1 ? $t("memberCenter.buyOpenup"):$t("memberCenter.buyCloseup")}}</span>
        <span class="num">{{getBuyAmount}} {{symblefrom}}</span>
        <span class="right">{{$t('deal.usable')}}<span
          class="num">{{getBuyUseAmount}} {{symblefrom}}</span></span>
      </p>
      <div class="exchange-block_button_buy"
           v-loading="marketBuyState"
           @click="marketBuyDeal"
           v-if="$userinfo.uid"
           :class="{'exchange-block_button--unavailable':marketBuyState}">
        {{openType===1 ?$t("memberCenter.buycontract"):$t("memberCenter.buyopencontract")}}
      </div>
      <div class="exchange-block_button_sale no_login" v-else>
        <nuxt-link to="/login" tag="span" class="repeal">{{$t("home.headLogin")}}</nuxt-link>
        /
        <nuxt-link to="/register" tag="span" class="repeal">{{$t('home.headRegister')}}</nuxt-link>
      </div>
    </div>
    <div class="exchange-block_content_right right">

      <div>
        <div class="exchange-block_input">
          <span class="before">{{$t('deal.sellOutPrice')}}</span>
          <span class="after">USDT</span>
          <p class="market_tip">
            {{$t('deal.markebuy')}}
          </p></div>
        <div class="exchange-block_input">
          <span class="before">{{$t('deal.sellQuantity')}}</span>
          <span class="after">{{this.currencyUnitType == 1 ? $t('contract.positionunit'):symblefrom}}</span>
          <hex-number
            :fix="currencyUnitType == 1?0:dcs.a"
            @number:focus="showSaleFocus"
            @number:blur="showSaleFocus"
            :num.sync="marketEntrustSaleNum"
            class='ipt_hover'></hex-number>
          <!-- <span
            v-show="mostSaleAvailable"
            class="exchange-block_owner_tip">≈
            <span
              class="num">{{getSellcurrencyUnitNum()}}</span></span> -->

        </div>
        <hex-slider
          :dec="getsaledec"
          @slider:change="getMarketEntrustSaleNum"></hex-slider>
      </div>
      <p class="exchange-block_tip tip_exchange">
        <span class="tip">{{openType == 1 ? $t("memberCenter.sellOpenup"):$t("memberCenter.sellCloseup")}}</span>
        <span class="num">{{getSaleAmount}} {{symblefrom}}</span>

      <span class="right">{{$t('deal.usable')}}<span
                class="num">{{getSaleUseAmount}} {{symblefrom}}</span></span>
      </p>
      <div class="exchange-block_button_sale"
           v-loading="marketSaleState"
           @click="marketSaleDeal"
           v-if="$userinfo.uid"
           :class="{'exchange-block_button--unavailable':marketSaleState}">
        {{openType===1 ?$t("memberCenter.sellcontract"):$t("memberCenter.sellopencontract")}}
      </div>
      <div class="exchange-block_button_sale no_login" v-else>
        <nuxt-link to="/login" tag="span" class="repeal">{{$t("home.headLogin")}}</nuxt-link>
        /
        <nuxt-link to="/register" tag="span" class="repeal">{{$t('home.headRegister')}}</nuxt-link>
      </div>
    </div>
  </div>
</template>
<script>
  import number from '@/components/public/number'
  import slider from '@/components/public/slider'

  export default {
    name: 'articles',
    components: {
      'hex-number': number,
      'hex-slider': slider,
    },
    computed: {
      getfix() {
        const to = this.symbleto.toLowerCase()
        let fix = this.dcs.a
        if (to == 'btc') {
          fix = 8
        } else if (to == 'usdt') {
          fix = 2
        } else if (to == 'eth') {
          fix = 6
        }
        return fix
      },
      buynum() {
        const num = this.$store.getters.get_to_from_exchange_rate(this.marketEntrustBuyNum, this.dailyDetail.c)
        return this.global_get_tofixed(num, this.dcs.a)
      },
      sellnum() {
        const num = this.$store.getters.get_from_to_exchange_rate(this.marketEntrustSaleNum, this.dailyDetail.c)
        return this.global_get_tofixed(num, this.global_get_decimal(this.symbleto).a)
      },
      //设置买入交易额
      getBuyAmount: function () {
        var n
        if (this.openType == 1) {
          n = this.$np.times(this.tradingDealFrom.canuseamount, this.multiple)
        } else {
          this.listhaveorderinfos.forEach(element => {
            if (element.direction == -1) {
              n = element.cansellamount
            }
          });
        }
        return this.global_get_tofixed(n, this.dcs.s)
      },
      //设置可用买入交易额
      getBuyUseAmount: function () {
        var n
        if (this.openType == 1) {
          n = this.tradingDealFrom.canuseamount
        } else {
          this.listhaveorderinfos.forEach(element => {
            if (element.direction == -1) {
              n = element.cansellamount
            }
          });
        }
        return this.global_get_tofixed(n, this.dcs.s)
      },
      //设置可用卖出交易额
      getSaleUseAmount: function () {
        var n
        if (this.openType == 1) {
          n = this.tradingDealFrom.canuseamount
        } else {
           this.listhaveorderinfos.forEach(element => {
            if (element.direction == 1) {
              n = element.cansellamount
            }
          });
        }
        return this.global_get_tofixed(n, this.dcs.s)
      },
      //设置卖出交易额
      getSaleAmount: function () {
        var n
        if (this.openType == 1) {
          n = this.$np.times(this.tradingDealFrom.canuseamount, this.multiple)
        } else {
           this.listhaveorderinfos.forEach(element => {
            if (element.direction == 1) {
              n = element.cansellamount
            }
          });
        }
        return this.global_get_tofixed(n, this.dcs.s)
      },
      getbuydec() {
        if (!this.tradingDealTo.canuseamount) {
          return 0
        }
        var canuseamount = this.getcanuseAmount(1)
        return (this.marketEntrustBuyNum / canuseamount) * 100
      },
      getsaledec() {
        if (!this.tradingDealFrom.canuseamount) {
          return 0
        }
        var canuseamount = this.getcanuseAmount(-1)
        return (this.marketEntrustSaleNum / canuseamount) * 100
      }
    },
    props: {
      dcs: {
        type: Object,
        default: function () {
          return {}
        }
      },
      dailyDetail: {
        type: Object,
        default: function () {
          return {}
        }
      },
      symblefrom: '',
      symbleto: '',
      symbleParameString:'',
      symbleParameArray: '',
      tradingDealFrom: {
        type: Object,
        default: function () {
          return {
            canuseamount: 0
          }
        }
      },
      openType:0,
      listhaveorderinfos: {
        type: Array,
        default: function () {
          return [{
            cansellamount: 0
          }],[{
            cansellamount: 0
          }]
        }
      },
      tradingDealTo: {
        type: Object,
        default: function () {
          return {
            canuseamount: 0
          }
        }
      },
      contract:'',
      multiple:0,
      currencyUnitType:0
    },
    watch: {
    },
    data() {
      return {
        mostBuyPurchases: false,
        mostSaleAvailable: false,
        marketBuyState: false,
        marketSaleState: false,
        //设置市价买入卖出量
        marketEntrustBuyRate:'',
        marketEntrustBuyNum: '',
        marketEntrustSaleNum: '',
        //订单数据模型
        dealModel: {
          ctid: '',
          ordertype: 2,
          direction: 1,
          price: 0,
          amount: 0,
          paypassword: '',
          ordersource: 1
        },
        contract_size:0
      }
    },
    subscribe() {
      return {
        //订阅下单状态
        changeDealState() {
          this.marketBuyState = false
          this.marketSaleState = false
        },
        changeNewMoney(res) {
          /*更新最新价格*/
          if (res && (res.symble == this.symbleParameString)) {
            
            this.marketEntrustBuyRate = res.price
          }
        }
      }
    },
    mounted() {
      this.contract_size = this.$store.getters.get__currency_contract_size(this.symblefrom)
    },
    methods: {

      /* 根据交易单位，计算相应货币的数量 */
      getcurrencyUnitNum: function () {
   
        if (this.currencyUnitType == 1) {
          var val = this.global_get_tofixed(Number(this.marketEntrustBuyNum) * this.contract_size /Number(this.marketEntrustBuyRate),this.dcs.p)
          return val + this.symblefrom
        } else {
          var val = this.global_get_tofixed(Number(this.marketEntrustBuyRate) * Number(this.marketEntrustBuyNum) / this.contract_size, 0)
          return val + this.$t('contract.positionunit')
        }
      },
      getSellcurrencyUnitNum: function () {
        if (this.currencyUnitType == 1) {
          var val = this.global_get_tofixed(Number(this.marketEntrustSaleNum) * this.contract_size /Number(this.marketEntrustBuyRate),this.dcs.a)
          return val + this.symblefrom
        } else {
          var val = this.global_get_tofixed(Number(this.marketEntrustBuyRate) * Number(this.marketEntrustSaleNum) / this.contract_size, 0)
          return val + this.$t('contract.positionunit')
        }
      },
      showBuyFocus() {
        this.mostBuyPurchases = !this.mostBuyPurchases
      },

      showSaleFocus() {
        this.mostSaleAvailable = !this.mostSaleAvailable
      },
      //设置市价交易买入量
      getMarketEntrustBuyNum(num) {
        var canuseamount = this.getcanuseAmount(1)
        this.marketEntrustBuyNum = this.global_get_tofixed(canuseamount * num, this.dcs.a)
      },
      //设置市价交易卖出量
      getMarketEntrustSaleNum(num) {
        var canuseamount = this.getcanuseAmount(-1)
        this.marketEntrustSaleNum = this.global_get_tofixed(canuseamount * num, this.dcs.a)
      },
      /**
       * side == 1 买 
       * side == -1 卖
       */
      getcanuseAmount(side){
        var rate = this.marketEntrustBuyRate
        var canuseamount
        if (this.openType == 1) {
          if (this.currencyUnitType == 1) {
            canuseamount = this.$np.times(this.tradingDealFrom.canuseamount, this.multiple) / this.contract_size *Number(rate)
          } else {
            canuseamount =  this.$np.times(this.tradingDealFrom.canuseamount, this.multiple)
          }
        } else {
          var amount = side == 1 ? this.getBuyUseAmount  : this.getSaleUseAmount 
          if (this.currencyUnitType == 1) {
            canuseamount = amount/ this.contract_size *Number(rate)
          } else {
            canuseamount = amount
          }
        }
        return canuseamount
      },
      //市价交易买入卖出
      marketBuyDeal() {
        if (this.marketBuyState) return
        this.marketBuyState = true
        const dealModel = Object.assign({}, this.dealModel)
        dealModel.ordertype = (this.openType == 2) ? 5 : 2
        dealModel.ctid = this.dailyDetail.ctid
      
        if (this.currencyUnitType == 1) {
          dealModel.amount = this.global_get_tofixed(Number(this.marketEntrustBuyNum) * this.contract_size /Number(this.marketEntrustBuyRate),this.dcs.p)
        } else {
          dealModel.amount = Number(this.marketEntrustBuyNum)
        }
          console.log(this.currencyUnitType,dealModel.amount)
        if (Number(dealModel.amount) <= 0) {
          this.$store.commit('set_message', {type: 'error', text: this.$t('patch.countLzero')})
          this.marketBuyState = false
          return
        }
 
        dealModel.multiple = Number(this.multiple)
        this.$store.dispatch('usercontract_order_create', dealModel)
          .then((res) => {
            if (res.data) {
              /*发布订阅*/
              this.$pubsub.publish(this.$pubsub.getOrderList)
              this.$pubsub.publish(this.$pubsub.changeDepthChart)
              this.$pubsub.publish(this.$pubsub.entrustBuyRate)
              this.$pubsub.publish(this.$pubsub.coinContractInfo) 
              this.$store.commit('set_message', {type: 'ok', text: res.msg})
            }
          })
          .then(() => {
            this.marketBuyState = false
            // window.location.reload()
          })
          .catch(() => {
            this.marketBuyState = false
          })
      },
      marketSaleDeal() {
        if (this.marketSaleState) return
        this.marketSaleState = true
        const dealModel = Object.assign({}, this.dealModel)
        dealModel.ordertype = (this.openType == 2) ? 5 : 2 // 开仓 '' 平仓contract 
        dealModel.ctid = this.dailyDetail.ctid
        dealModel.direction = -1

        if (this.currencyUnitType == 1) {
          dealModel.amount = this.global_get_tofixed(Number(this.marketEntrustSaleNum) * this.contract_size /Number(this.marketEntrustBuyRate),this.dcs.a)
        } else {
          dealModel.amount = Number(this.marketEntrustSaleNum)
        }
        dealModel.multiple = Number(this.multiple)
        if (Number(dealModel.amount) <= 0) {
          this.$store.commit('set_message', {type: 'error', text: this.$t('patch.countLzero')})
          this.marketSaleState = false
          return
        }
   
        this.$store.dispatch('usercontract_order_create', dealModel)
          .then((res) => {
            if (res.data) {
              /*下单实时更新用户资产和委托订单*/
              this.$pubsub.publish(this.$pubsub.getOrderList)
              this.$pubsub.publish(this.$pubsub.changeDepthChart)
              this.$pubsub.publish(this.$pubsub.entrustSaleRate)
              this.$pubsub.publish(this.$pubsub.coinContractInfo) 
              this.$store.commit('set_message', {type: 'ok', text: res.msg})
            }
          })
          .then(() => {
            this.marketSaleState = false
            // window.location.reload()
          })
          .catch(() => {
            this.marketSaleState = false
          })
      }
    }
  }
</script>
