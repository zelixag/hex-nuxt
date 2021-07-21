<template>
  <div class="exchange-block_content clearfix">
    <div class="exchange-block_content_left left">
      <div>
        <div class="exchange-block_input  ipt_hover">
          <span class="before">{{$t("deal.buyinRate")}}</span>
          <span class="after">USDT</span>
          <hex-number
            :fix="dcs.p"
            @number:focus="showBuyPriceFocus"
            @number:blur="showBuyPriceFocus"
            :num.sync="copeEntrustBuyRate"
            class='ipt_hover'></hex-number>
          <span
            v-show="mostBuyPricePurchases"
            class="exchange-block_owner_tip">
            <span class="num">
              ≈<span>{{getBuyClientRate}}</span>
              <span class="tip"> {{$store.getters.get_client_exchange_rate_name.name}}</span>
            </span>
          </span>
        </div>
        <!--买入量-->
        <div class="exchange-block_input ipt_hover">
          <span class="before">{{$t("deal.purchases")}}</span>
          <span class="after">{{this.currencyUnitType == 1 ? $t('contract.positionunit'):symblefrom}}</span>
          <hex-number
            :fix="currencyUnitType == 1?0:dcs.a"
            :num.sync="copeEntrustBuyNum"
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
          @slider:change="getEntrustBuyNum"></hex-slider>
      </div>
      <p
        class="exchange-block_tip tip_exchange">
        <span class="tip">{{openType == 1 ? $t("memberCenter.buyOpenup"):$t("memberCenter.buyCloseup")}}</span>
        <span>{{getBuyAmount}} {{symblefrom}}</span>
        <span class="right">
          <div v-if="openType !== 1" class="tooltip-hover">
            <img class="ac_img" src="../../static/images/trade/plaint.svg">
              <div class="tooltip-inner ">
                <em class="tooltip-text" style="left: -8px;">{{$t('contract.buyCloseupTip')}} </em>
                <i class="tooltip-arrow" style="left: 3px;"></i>
              </div>
          </div>
          {{openType == 1 ? $t('deal.usable') : $t('contract.flatZh')}}<span
          >{{getBuyUseAmount}}  {{openType == 1 ?symblefrom:"USDT"}}</span></span>
      </p>
      <div class="exchange-block_button_buy"
           v-loading="buyState"
           v-if="$userinfo.uid"
           @click="buyDeal"
           :class="{'exchange-block_button--unavailable':(buyState)}">{{openType===1 ?$t("memberCenter.buycontract"):$t("memberCenter.buyopencontract")}}
      </div>
      <div class="exchange-block_button_buy no_login" v-else>
        <nuxt-link to="/login" tag="span" class="repeal">{{$t("home.headLogin")}}</nuxt-link>
        /
        <nuxt-link to="/register" tag="span" class="repeal">{{$t("home.headRegister")}}</nuxt-link>
      </div>
    </div>
    <div class="exchange-block_content_right right">

      <div>
        <div class="exchange-block_input">
          <span class="before">{{$t('deal.sellOutPrice')}}</span>
          <span class="after">USDT</span>
          <hex-number
            :fix="dcs.p"
            @number:focus="showSalePriceFocus"
            @number:blur="showSalePriceFocus"
            :num.sync="copeEntrustSaleRate" class='ipt_hover'></hex-number>
          <span
            v-show="mostSalePricePurchases"
            class="exchange-block_owner_tip">
            <span class="num">
              ≈<span>{{getSaleClientRate}}</span>
              <span class="tip"> {{$store.getters.get_client_exchange_rate_name.name}}</span>
            </span>
          </span>
        </div>
        <div class="exchange-block_input">
          <span class="before">{{$t('deal.sellQuantity')}}</span>
          <span class="after">{{currencyUnitType == 1 ? $t('contract.positionunit'):symblefrom}}</span>
          <hex-number
            :fix="currencyUnitType == 1?0:dcs.a"
            :num.sync="copeEntrustSaleNum"
            @number:focus="showSaleFocus"
            @number:blur="showSaleFocus"
            class='ipt_hover'></hex-number>
          <!-- <span
            v-show="mostSaleAvailable"
            class="exchange-block_owner_tip">≈
            <span
              class="num">{{getSellcurrencyUnitNum()}}</span></span> -->

        </div>
        <hex-slider
          :dec="getsaledec"
          @slider:change="getEntrustSaleNum"></hex-slider>
      </div>
      <p class="exchange-block_tip tip_exchange">
        <span class="tip">{{openType == 1 ? $t("memberCenter.sellOpenup"):$t("memberCenter.sellCloseup")}}</span>
        <span>{{getSaleAmount}} {{symblefrom}}</span>

      <span class="right">
          <div v-if="openType !== 1" class="tooltip-hover">
            <img class="ac_img" src="../../static/images/trade/plaint.svg">
              <div class="tooltip-inner ">
                <em class="tooltip-text" style="left: -8px;">{{$t('contract.saleCloseupTip')}} </em>
                <i class="tooltip-arrow" style="left: 3px;"></i>
              </div>
          </div>
        {{openType == 1 ? $t('deal.usable') : $t('contract.flatZh')}}<span>
        {{getSaleUseAmount}} {{openType == 1 ?symblefrom:"USDT"}}</span></span>
      </p> 
      <div class="exchange-block_button_sale"
           v-loading="saleState"
           @click="saleDeal"
           v-if="$userinfo.uid"
           :class="{'exchange-block_button--unavailable':(saleState)}">
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
      getbuydec() {
        if (!this.tradingDealFrom.canuseamount) {
          return 0
        }
        var canuseamount = this.getcanuseAmount(1)
        return (this.copeEntrustBuyNum / canuseamount) * 100
      },
      getsaledec() {
        if (!this.tradingDealFrom.canuseamount) {
          return 0
        }
        var canuseamount = this.getcanuseAmount(-1)
        return (this.copeEntrustSaleNum / canuseamount) * 100
      },
      /*根据最新价计算买入价的小数位数*/
      getnumfix() {
        const ratefix = 1 / parseFloat(this.dailyDetail.c)
        let fix
        if (ratefix >= 500) {
          fix = 8
        } else if (ratefix >= 100) {
          fix = 6
        } else if (ratefix >= 0) {
          fix = 4
        }
        return fix
      },
      /*根据买入价格的小数位数计算买入量的小数位数*/
      getnumfixbyprice: function () {
        const ratefix = 1 / parseFloat(this.copeEntrustBuyRate)
        return this.getfix(ratefix)
      },
      /*根据买入价格的小数位数计算买入量的小数位数*/
      getnumfixbypricesell: function () {
        const ratefix = 1 / parseFloat(this.copeEntrustSaleRate)
        return this.getfix(ratefix)
      },
      //获取本地货币汇率
      getBuyClientRate: function () {
        if (this.symbleParameArray) {
          return this.$store.getters.get_client_exchange_rate(this.symbleto, this.copeEntrustBuyRate)
        }
        return 0
      },
      getSaleClientRate: function () {
        if (this.symbleParameArray) {
          return this.$store.getters.get_client_exchange_rate(this.symbleto, this.copeEntrustSaleRate)
        }
        return 0
      },
      //设置买入交易额
      getBuyAmount: function () {
        var n
        if (this.openType == 1) {
          n = this.$np.times(this.tradingDealFrom.canuseamount, this.multiple)
        } else {
          this.listhaveorderinfos.forEach(element => {
            if (element.direction == -1) {
              n = element.cansellamount / this.copeEntrustBuyRate
            }
          });
        }
        if (n == undefined) {
          return "--"
        }
        if (this.copeEntrustBuyRate > 0) {
          return this.global_get_tofixed(n, this.dcs.s)
        }else{
          return "--"
        }
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
          return this.global_get_tofixed(n, 2)
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
          return this.global_get_tofixed(n, 2)
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
              n = element.cansellamount / this.copeEntrustSaleRate
            }
          });
        }if (n == undefined) {
          return "--"
        }
        if (this.copeEntrustSaleRate > 0) {
          return this.global_get_tofixed(n, this.dcs.s)
        }else{
          return "--"
        }
      },
      //计算可买量
      buyable: function () {
        const a = this.global_get_tofixed(this.tradingDealFrom.canuseamount, this.global_get_decimal(this.symbleto).a)
        const num = this.$store.getters.get_to_from_exchange_rate(a, this.copeEntrustBuyRate)
        return num
      },

    },
    props: {
      dailyDetail: {
        type: Object,
        default: function () {
          return {}
        }
      },
      symblefrom: '',
      symbleto: '',
      symbleParameArray: '',
      //买入卖出价
      entrustSaleRate: '',
      entrustBuyRate: '',
      //设置限价买入卖出量
      entrustBuyNum: '',
      entrustSaleNum: '',
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
      tradingDealFrom: {
        type: Object,
        default: function () {
          return {
            canuseamount: 0
          }
        }
      },
      openType:0,
      tradingDealTo: {
        type: Object,
        default: function () {
          return {
            canuseamount: 0
          }
        }
      },
      dcs: {
        type: Object,
        default: function () {
          return {}
        }
      },
      contract:'',
      multiple:0,
      currencyUnitType:0
    },
    watch: {
      'entrustBuyRate': function (val) {
        this.copeEntrustBuyRate = this.global_get_tofixed(val, this.dcs.p)
      },
      'entrustSaleRate': function (val) {
        this.copeEntrustSaleRate = this.global_get_tofixed(val, this.dcs.p)
      },
      'entrustBuyNum': function (val) {
        let newval = val
        if (Number(this.buyable) < Number(val)) {
          newval = this.buyable
        }

        this.copeEntrustBuyNum = this.global_get_tofixed(newval, this.dcs.a)
      },
      'entrustSaleNum': function (val) {
        let newval = val
        if (Number(this.tradingDealFrom.canuseamount) < Number(val)) {
          newval = this.tradingDealFrom.canuseamount
        }
        this.copeEntrustSaleNum = this.global_get_tofixed(newval, this.dcs.a)
      }
    },
    data() {
      return {
        //下单状态
        buyState: false,
        saleState: false,
        //最多购买状态
        mostBuyPricePurchases: false,
        mostBuyPurchases: false,
        mostSaleAvailable: false,
        mostSalePricePurchases: false,
        copeEntrustBuyRate: this.entrustBuyRate,
        copeEntrustSaleRate: this.entrustSaleRate,
        copeEntrustBuyNum: this.entrustBuyNum,
        copeEntrustSaleNum: this.entrustSaleNum,
        buydecimals: 0,
        saledecimals: 0,
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
        contract_size:0
      }
    },
    mounted() {
      this.contract_size = this.$store.getters.get__currency_contract_size(this.symblefrom)
    },
    subscribe() {
      return {
        //订阅下单状态
        changeDealState() {
          this.buyState = false
          this.saleState = false
        }
      }
    },
    created() {
    },
    methods: {


      /* 根据交易单位，计算相应货币的数量 */
      getcurrencyUnitNum: function () {
        
        if (this.currencyUnitType == 1) {
          var val = this.global_get_tofixed(Number(this.copeEntrustBuyNum) * this.contract_size /Number(this.copeEntrustBuyRate),this.dcs.p)
          var rate = this.$store.getters.get_exchange_rate_by_name(this.symblefrom,this.symbleto)
          return val + this.symblefrom
        } else {
          var val = this.global_get_tofixed(Number(this.copeEntrustBuyRate) * Number(this.copeEntrustBuyNum) / this.contract_size, 0)
          return val + this.$t('contract.positionunit')
        }
      },
      getSellcurrencyUnitNum: function () {
        if (this.currencyUnitType == 1) {
          var val = this.global_get_tofixed(Number(this.copeEntrustSaleNum) * this.contract_size /Number(this.copeEntrustSaleRate),this.dcs.a)
          return val + this.symblefrom
        } else {
          var val = this.global_get_tofixed(Number(this.copeEntrustSaleRate) * Number(this.copeEntrustSaleNum) / this.contract_size, 0)
          return val + this.$t('contract.positionunit')
        }
      },
      getfix(val) {
        let fix
        if (val >= 500) {
          fix = 2
        } else if (val >= 100) {
          fix = 3
        } else if (val >= 0) {
          fix = 4
        }
        return fix
      },
      formatTooltip(val) {
        return val + "%";
      },
      //设置买入量
      getEntrustBuyNum(num) {
        this.buydecimals = num
        var canuseamount = this.getcanuseAmount(1)
        this.copeEntrustBuyNum = this.global_get_tofixed(canuseamount * num, this.dcs.a)
      },
      //设置卖出量
      getEntrustSaleNum(num) {
        this.saledecimals = num
        var canuseamount = this.getcanuseAmount(-1)
        this.copeEntrustSaleNum = this.global_get_tofixed(canuseamount * num, this.dcs.a)
      },
      /**
       * side == 1 买 
       * side == -1 卖
       */
      getcanuseAmount(side){
        var rate = side == 1 ? this.copeEntrustBuyRate : this.copeEntrustSaleRate
        var canuseamount
        if (this.openType == 1) {
          if (this.currencyUnitType == 1) {
            canuseamount = this.$np.times(this.tradingDealFrom.canuseamount, this.multiple) / this.contract_size *Number(rate)
          } else {
            canuseamount =  this.$np.times(this.tradingDealFrom.canuseamount, this.multiple)
          }
        } else {
          var amount = side == 1 ? this.getBuyAmount  : this.getSaleAmount 
          var price = side == 1 ? this.copeEntrustBuyRate : this.copeEntrustSaleRate
          if (this.currencyUnitType == 1) {
            canuseamount = amount/ this.contract_size *Number(rate)
          } else {
            canuseamount = amount
          }
        }
   
        return canuseamount
      },
      showBuyFocus() {
        this.mostBuyPurchases = !this.mostBuyPurchases
      },
      showBuyPriceFocus() {
        this.mostBuyPricePurchases = !this.mostBuyPricePurchases
      },
      showSalePriceFocus() {
        this.mostSalePricePurchases = !this.mostSalePricePurchases
      },
      showSaleFocus() {
        this.mostSaleAvailable = !this.mostSaleAvailable
      },
      Login() {
        this.$router.push('/login')
      },
      //买入卖出交易
      buyDeal() {
        if (this.buyState) return
        this.buyState = true
        this.copeEntrustBuyNum = this.global_get_replace_dot(this.copeEntrustBuyNum)
        this.copeEntrustBuyRate = this.global_get_replace_dot(this.copeEntrustBuyRate)
        
        const dealModel = Object.assign({}, this.dealModel)
        dealModel.price = Number(this.copeEntrustBuyRate)
        dealModel.ordertype = (this.openType == 2) ? 4 : 1; // 开仓 '' 平仓contract 
        if (this.currencyUnitType == 1) {
          dealModel.amount = Number(this.copeEntrustBuyNum) * this.contract_size / Number(this.copeEntrustBuyRate)
        } else {
          dealModel.amount = Number(this.copeEntrustBuyNum)
        }
        dealModel.multiple = Number(this.multiple)

        dealModel.ctid = this.dailyDetail.ctid.toString()
        dealModel.direction = 1
        if (Number(this.getBuyAmount) <= 0) {
          this.$store.commit('set_message', {type: 'error', text: this.$t('patch.volumeLzero')})
          this.buyState = false
          return
        }
        
        this.$store.dispatch('usercontract_order_create', dealModel)
          .then((res) => {
            if (res.data) {
              /*发布*/
              this.$pubsub.publish(this.$pubsub.getOrderList)
              this.$pubsub.publish(this.$pubsub.changeDepthChart)
              this.$pubsub.publish(this.$pubsub.entrustBuyRate)
              this.$pubsub.publish(this.$pubsub.coinContractInfo) 
              this.$store.commit('set_message', {type: 'ok', text: res.msg})
            }
          })
          .then(() => {
            this.buyState = false
            this.copeEntrustBuyNum = ''
            // window.location.reload()
          })
          .catch(() => {
            this.buyState = false
          })
      },
      saleDeal() {
        if (this.saleState) return
        this.saleState = true
        const dealModel = Object.assign({}, this.dealModel)
        dealModel.ordertype = (this.openType == 2) ? 4 : 1;
        dealModel.price = Number(this.copeEntrustSaleRate)
        if (this.currencyUnitType == 1) {
          dealModel.amount = Number(this.copeEntrustSaleNum) * this.contract_size / Number(this.copeEntrustSaleRate)
        } else {
          dealModel.amount = Number(this.copeEntrustSaleNum)
        }
        dealModel.ctid = this.dailyDetail.ctid
        dealModel.direction = -1
        dealModel.multiple = Number(this.multiple)
        if (Number(this.getSaleAmount) <= 0) {
          this.$store.commit('set_message', {type: 'error', text: this.$t('patch.volumeLzero')})
          this.saleState = false
          return
        }
        this.$store.dispatch('usercontract_order_create', dealModel)
          .then((res) => {
            if (res.data) {
              /*发布*/
              this.$pubsub.publish(this.$pubsub.getOrderList)
              this.$pubsub.publish(this.$pubsub.changeDepthChart)
              this.$pubsub.publish(this.$pubsub.entrustSaleRate)
              this.$pubsub.publish(this.$pubsub.coinContractInfo) 
              this.$store.commit('set_message', {type: 'ok', text: res.msg})
            }
          })
          .then(() => {
            this.saleState = false
            this.copeEntrustSaleNum = ''
            // window.location.reload()
          })
          .catch(() => {
            this.saleState = false
          })
      },
    }
  }
</script>

