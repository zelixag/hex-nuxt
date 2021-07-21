<style lang='less' scoped>
@import "../../static/styles/auth.less";
.head{
  border-bottom: 1px solid #dfe2e7;
  padding-right:20px ;
}
.popup .mask-content{
  padding-left: 0;
  padding-right: 0;
  width: 680px;
}
.calculator-tab{
    height: 52px;
    line-height: 52px;
    width: 105px;
    display: inline-block;
    cursor: pointer;
    font-size: 14px;
    text-align: center;
    position: relative;
}
.close{
  margin-top: 15px;
}
.calculator-tab.active{
  color: #14a2a5;
}
.calculator-tab.active:after{
  content:"";
  width: 50%;
  height: 2px;
  background: #14a2a5;
  position: absolute;
  bottom: 0;
  left: 25%;
}
.content-wrapped{
  padding: 30px 20px 0;
}
.content-in{
    width: 304px;
    font-size: 14px;
    color: #9aa5b5;
    display: inline-block;
}
button {
    height: 36px;
    line-height: 36px;
    font-size: 14px;
}
 .long-button {
    width: calc((100% - 22px) / 2);
    margin-bottom: 16px;
    background: #f8f9fb;
    color: #9aa5b5;
}
.long-button:hover{
  background: #E5EBF5;
}
.long-button.active{
  background: #14a2a5;
  color: #fff;
}
.lever-button {
    color: #232a4a;
    position: relative;
    width: calc((100% - 77px) / 4);
    background: #fff;
    border-radius: 2px;
    border: 1px solid #dfe2e7;
    margin-left: 20px;
}
.lever-button.active{
   border-color: #14A2A5;
}
.lever-button.active:after {
    content: "";
    position: absolute;
    right: -1px;
    bottom: -1px;
    background: url(../../static/images/selected.svg) no-repeat top center;
    width: 20px;
    height: 20px;
}
.input-title {
    margin-top: 12px;
    font-size: 12px;
    line-height: 24px;
}
input {
    outline: none;
    border-radius: 2px;
}
.calculate-input {
    width: 100%;
    height: 36px;
    font-size: 14px;
    padding-left: 10px;
    padding-right: 10px;
    background-color: #fff;
    border: 1px solid #d1d3df;
    color: #232a4a;
}
.calculate-input:focus{
  border-color: #14A2A5;
}
.calculate-button {
    margin-top: 24px;
    height: 100%;
    width: 100%;
    color: #fff;
    background-color: #14A2A5;
}
.calculate-button:disabled {
    background-color: #d1d3df;
    color: hsla(0,0%,100%,.8);
    cursor: not-allowed;
}
.content-right {
    width: 308px;
    border-radius: 2px;
    border: 1px solid #dfe2e7;
    background: rgba(244,247,250,.4);
    padding: 16px;
    font-size: 14px;
    display: inline-block;
    float: right;
    height: 364px;
}
.display-box-item {
    line-height: 44px;
    text-align: right;
}
.display-box-font-explain {
    float: left;
    color: #9aa5b5;
}
.display-box-font-number {
    color: #232a4a;
    font-size: 20px;
}
.transparent-button {
    font-size: 12px;
    float: right;
    background: transparent;
    color: #14a2a5;
    line-height: normal; 
    height: auto;
}
.calculate-input:disabled {
    background-color: rgba(209,211,223,.4);
    border-color: rgba(209,211,223,.4);
}
.content-right-top{
  height: 230px;
}
.content-right-bto{
  display: inline-block;
  margin-top: 17px;
  background: rgba(224,147,0,.05);
  border: 1px solid rgba(224,147,0,.3);
  border-radius: 3px;
  padding: 8px 16px;
  color: #e09300;
  font-size: 12px;
  line-height: 20px;
  width: 308px;
}
.content-right-last{
  float:right;
  width: 308px;
}
</style>

<template>
  <div class="popup repayment-popup">
    <div class="mask"></div>
    <div class="mask-content">
      <div class="head">
        <span class="calculator-tab" :class="{'active':msg==1}" @click="switchType(1)">{{$t('contract.income')}}</span>
        <span class="calculator-tab" :class="{'active':msg==2}" @click="switchType(2)">{{$t('contract.closingPrice')}}</span>
        <span class="calculator-tab" :class="{'active':msg==3}" @click="switchType(3)">{{$t('contract.strongPrice')}}</span>
        <span class="close" @click="close(0)">
          <img src="@/static/images/an_close.png" alt />
        </span>
      </div>
      <div v-if="msg==1" class="content-wrapped clearfix">
        <div class="content-in">
          <button class="long-button" style="margin-right: 16px;" :class="{'active':zod==1}" @click="zod=1">{{$t('contract.doMore')}}</button>
          <button class="long-button" :class="{'active':zod==2}" @click="zod=2">{{$t('contract.short')}}</button>
          <button class="lever-button " style="margin-left: 0;" :class="{'active':sod==1}" @click="sod=1">1x</button>
          <button class="lever-button" :class="{'active':sod==5}" @click="sod=5">5x</button>
          <button class="lever-button" :class="{'active':sod==10}" @click="sod=10">10x</button>
          <button class="lever-button" :class="{'active':sod==20}" @click="sod=20">20x</button>
          <div class="input-box">
            <p class="input-title">{{$t('contract.openingPrice')}}(USDT)</p>
            <input class="calculate-input" v-model="openprice">
          </div>
          <div class="input-box">
            <p class="input-title">{{$t('contract.closingPrice')}}(USDT)</p>
            <input class="calculate-input" v-model="closeprice">
          </div>
          <div class="input-box">
            <p class="input-title">{{$t('contract.numberOfOpenPositions')}}({{this.symblefrom}})</p>
            <input class="calculate-input" v-model="openamount">
          </div>
          <div class="input-box">
            <button :disabled="!allowClick" class="blue-button calculate-button" @click="caluType1" >{{$t('contract.calculation')}}</button>
          </div>
        </div>
        <div class="content-right">
          <div class="display-box-item clearfix">
            <span class="display-box-font-explain">{{$t('contract.openMargin')}} ({{this.symblefrom}})</span>
            <span class="display-box-font-number">{{global_get_tofixed(opensecurity,global_get_decimal(this.symblefrom).a)}}</span>
          </div>
          <div class="display-box-item clearfix">
            <span class="display-box-font-explain">{{$t('contract.income')}} ({{this.symblefrom}})</span>
            <span class="display-box-font-number">{{global_get_tofixed(income,global_get_decimal(this.symblefrom).a)}}</span>
          </div>
          <div class="display-box-item clearfix">
            <span class="display-box-font-explain">{{$t('contract.rate')}}</span>
            <span class="display-box-font-number">{{global_get_tofixed(rate * 100,2)}}%</span>
          </div>
        </div>
      </div>
      <div v-if="msg==2" class="content-wrapped clearfix">
        <div class="content-in">
          <button class="long-button" style="margin-right: 16px;" :class="{'active':zod==1}" @click="zod=1">{{$t('contract.doMore')}}</button>
          <button class="long-button" :class="{'active':zod==2}" @click="zod=2">{{$t('contract.short')}}</button>
          <button class="lever-button " style="margin-left: 0;" :class="{'active':sod==1}" @click="sod=1">1x</button>
          <button class="lever-button" :class="{'active':sod==5}" @click="sod=5">5x</button>
          <button class="lever-button" :class="{'active':sod==10}" @click="sod=10">10x</button>
          <button class="lever-button" :class="{'active':sod==20}" @click="sod=20">20x</button>
          <div class="input-box">
            <p class="input-title">{{$t('contract.openingPrice')}}(USDT)</p>
            <input class="calculate-input" v-model="openprice">
          </div>
          <div class="input-box">
            <p class="input-title">{{$t('contract.numberOfOpenPositions')}}({{this.symblefrom}})</p>
            <input v-if="selectSecurity" class="calculate-input" v-model="openamount">
            <input v-else disabled class="calculate-input" value="">
          </div>
          <div v-if="selectSecurity" class="input-box">
            <p class="input-title">{{$t('contract.income')}}({{this.symblefrom}})
              <button class="transparent-button" @click="switchSecurity">{{$t('contract.switchToYield')}}</button>
            </p>
            <input class="calculate-input" v-model="income"/>
          </div>
          <div v-else class="input-box">
            <p class="input-title">{{$t('contract.rate')}}(%)
              <button class="transparent-button" @click="switchSecurity" >{{$t('contract.switchToEarnings')}}</button>
            </p>
            <input class="calculate-input" v-model="rate" />
          </div>
          <div class="input-box">
            <button :disabled="!allowClick" class="blue-button calculate-button" @click="caluType2">{{$t('contract.calculation')}}</button>
          </div>
        </div>
        <div class="content-right">
          <div class="display-box-item clearfix">
            <span class="display-box-font-explain">{{$t('contract.closingPrice')}} (USDT)</span>
            <span class="display-box-font-number">{{global_get_tofixed(closeprice,global_get_decimal('USDT').a) }}</span>
          </div>
        </div>
      </div>
      <div v-if="msg==3" class="content-wrapped clearfix">
        <div class="content-in">
          <button class="long-button" style="margin-right: 16px;" :class="{'active':zod==1}" @click="zod=1">{{$t('contract.doMore')}}</button>
          <button class="long-button" :class="{'active':zod==2}" @click="zod=2">{{$t('contract.short')}}</button>
          <button class="lever-button " style="margin-left: 0;" :class="{'active':sod==1}" @click="sod=1">1x</button>
          <button class="lever-button" :class="{'active':sod==5}" @click="sod=5">5x</button>
          <button class="lever-button" :class="{'active':sod==10}" @click="sod=10">10x</button>
          <button class="lever-button" :class="{'active':sod==20}" @click="sod=20">20x</button>
          <div class="input-box">
            <p class="input-title">{{$t('contract.openingPrice')}}(USDT)</p>
            <input class="calculate-input" v-model="openprice">
          </div>
          <div class="input-box">
            <p class="input-title">{{$t('contract.numberOfOpenPositions')}}({{this.symblefrom}})</p>
            <input class="calculate-input" v-model="openamount">
          </div>
          <div class="input-box">
            <p class="input-title">{{$t('contract.accountEquity')}}({{this.symblefrom}})</p>
            <input class="calculate-input" v-model="accountequity">
          </div>
          <div class="input-box">
            <button class="blue-button calculate-button" @click="caluType3">{{$t('contract.calculation')}}</button>
          </div>
        </div>
        <div class="content-right-last clearfix">
          <div class="content-right content-right-top">
              <div class="display-box-item clearfix">
                <span class="display-box-font-explain">{{$t('contract.strongPrice')}} (USDT)</span>
                <span class="display-box-font-number">{{takeoverres?$t('contract.unableToCalculate') : liquidationprice}}</span>
              </div>
              <!-- <div class="display-box-item clearfix">
                <span class="display-box-font-explain">接管价格 (USDT)</span>
                <span class="display-box-font-number">{{global_get_tofixed(takeoverprice,global_get_decimal('USDT').a) }}</span>
              </div> -->
              <div class="display-box-item clearfix">
                <span class="display-box-font-explain">{{$t('contract.adjustmentrate')}}</span>
                <span class="display-box-font-number">{{adjustmentrate * 100}}%</span>
              </div>
          </div>
          <div class="content-right-bto">
            {{$t('contract.tip')}}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "in-popup",
  validations: {
  },
  computed: {},
  props: ["symblefrom"],
  data() {
    return {
        msg:1, //选择 方式 1 收益 2 平仓价格 3 强平价格
        zod:1,  // 1 做多 2 做空
        sod:1, //合约杠杆率
        openprice:'', //开仓价
        closeprice:'', //平仓价
        openamount:'', //开仓数量
        selectSecurity:true, // 平仓时  默认选择收益
        opensecurity:'',//开仓保证金
        income:'',//收益
        rate:'', //收益率,
        allowClick:false, //按钮是否允许被点击
        accountequity: '', //账户权益
        liquidationprice: '', //强平价格
        takeoverres: false,
        takeoverprice: '', //接管价格
        adjustmentrate: '', //调整系数
        adjustmentlist:[
          {
            coin: 'ETH',
            sod: 1,
            adjustfactor: 0.015
          },
          {
            coin: 'ETH',
            sod: 5,
            adjustfactor: 0.075
          },
          {
            coin: 'ETH',
            sod: 10,
            adjustfactor: 0.16
          },
          {
            coin: 'ETH',
            sod: 20,
            adjustfactor: 0.32
          },
          {
            coin: 'BTC',
            sod: 1,
            adjustfactor: 0.01
          },
          {
            coin: 'BTC',
            sod: 5,
            adjustfactor: 0.06
          },
          {
            coin: 'BTC',
            sod: 10,
            adjustfactor: 0.12
          },
          {
            coin: 'BTC',
            sod: 20,
            adjustfactor: 0.22
          },
          {
            coin: 'LTC',
            sod: 1,
            adjustfactor: 0.015
          },
          {
            coin: 'LTC',
            sod: 5,
            adjustfactor: 0.075
          },
          {
            coin: 'LTC',
            sod: 10,
            adjustfactor: 0.16
          },
          {
            coin: 'LTC',
            sod: 20,
            adjustfactor: 0.32
          }
        ]
    };
  },
  watch: {
    symblename(newVal, oldVal) {
      if (newVal !== oldVal) {
      }
    },
    infoChange: {
      handler: function(val) {
        if (this.msg == 1 && val.openprice > 0 && val.closeprice > 0 && val.openamount > 0) {
          this.allowClick = true
        }else if (this.msg == 2 && val.openprice > 0) {
          if (val.selectSecurity == true && val.income > 0 && val.openamount > 0) {
            this.allowClick = true
          } else if (val.selectSecurity == false && val.rate > 0) {
            this.allowClick = true
          }
        }else {
          this.allowClick = false
        }
      },
      deep: true
    }
  },
   computed: {
    infoChange() {
      const { openprice, closeprice, openamount, income,rate,selectSecurity,accountequity,liquidationprice,takeoverprice,adjustmentrate} = this;
      return {
        openprice,
        closeprice,
        openamount,
        income,
        rate,
        selectSecurity,
        accountequity,
        liquidationprice,
        takeoverprice,
        adjustmentrate,
        takeoverres: false
      };
    }
   },
  methods: {
    setType(type) {
      this.$emit("confirmCurrencyUnit", type);
      this.$emit("closePopup", 0);
    },
    close() {
      this.$v.$reset();
      this.$emit("closePopup", 0);
    },
    //收益 和收益率
    switchSecurity() {
      this.selectSecurity = !this.selectSecurity

      if (this.selectSecurity == true && this.income > 0 && this.openamount > 0) {
        this.allowClick = true
      } else if (this.selectSecurity == false && this.rate > 0) {
        this.allowClick = true
      }else {
        this.allowClick = false
      }
    },
    switchType(type) {
      this.msg = type
      this.sod = 1 //合约杠杆率
      this.openprice = ''//开仓价
      this.closeprice = ''//平仓价
      this.openamount = '' //开仓数量
      this.selectSecurity = true // 平仓时  默认选择收益
      this.opensecurity = ''//开仓保证金
      this.income = ''//收益
      this.rate = '' //收益率
      this.allowClick = false
      this.accountequity= '' // 账户权益
      this.liquidationprice = '' //强平价格
      this.takeoverprice = '' //接管价格
      this.adjustmentrate = '' //调整系数
    },
    /* 计算收益
      保证金 = (合约总金额)/最新成交价/杠杆倍数
      多仓实现盈亏 =（1/open均价 - 1/最新成交价）* 多仓合约张数* 合约面值
      空仓实现盈亏 =（1/最新成交价 - 1/open均价）* 空仓合约张数* 合约面值
      （盈亏 / 持仓保证金）*100%
    */
    caluType1(){
      this.opensecurity = this.openamount / this.sod

      if (this.zod == 1) {//做多 收益 = (平仓价 - 开仓价) / * 开仓数量 / 平仓价
        this.income =  (this.closeprice - this.openprice) * this.openamount / this.closeprice
      } else{
        this.income =  (this.openprice - this.closeprice) * this.openamount / this.closeprice
      }
      this.rate = this.income / this.opensecurity
    },
    /** 计算平仓价格
      *保证金 = (多仓合约张数* 合约面值)/最新成交价/杠杆倍数
      * 最新成交价 = 1/ (1/open均价 - 多仓实现盈亏/(多仓合约张数* 合约面值))
      * 最新成交价 = 1/ (1/open均价 + 空仓实现盈亏/(空仓合约张数* 合约面值))

      *  收益率计算 平仓价 
      *（盈亏) = rate / 100 * 最新成交价/杠杆倍数
      * 盈亏 = 收益率/100 * (多仓合约张数* 合约面值)/最新成交价/杠杆倍数 
      * 最新成交价 = 1/ (1/open均价 - 收益率/100 /最新成交价/杠杆倍数  == [1 + (rate/100 * mult)] * open
      * 最新成交价 = 1/ (1/open均价 + 收益率/100 /最新成交价/杠杆倍数) == [1 - (rate/100 * mult)] * open
    */
    caluType2(){
      if (this.selectSecurity == true) {
         if (this.zod == 1) {//做多
          this.closeprice = this.openprice * this.openamount / (this.openamount - this.income)
        } else{
          this.closeprice = this.openprice * this.openamount / (Number(this.openamount) + Number(this.income))
        }
      } else {
        if (this.zod == 1) {//做多
          this.closeprice = this.sod * this.openprice / (this.sod - this.rate / 100)
        } else{
          this.closeprice = this.sod * this.openprice / (Number(this.sod) + Number(this.rate / 100))
        }
      }
    },
    /* 保证金率 = ( 账户权益 / 占用保证金 ) * 100% - 调整系数
     *【账户权益 +  （1- 当前价/开仓价）】（倍数*当前价 ）= 0.01 系数 （开仓价 * 开仓数）
     【账户权益 +  （1- 当前价/开仓价）】（倍数*当前价 ）
      */
   caluType3(){
      this.takeoverres = false
      var adjust = this.adjustmentlist.filter((item)=>{
        return item.coin == this.symblefrom && item.sod == this.sod
      })
      this.adjustmentrate = adjust[0].adjustfactor
      if (this.zod == 1) {//做多
        this.liquidationprice = (Number(this.adjustmentrate * this.openprice * this.openamount) + Number(this.sod * this.openprice * this.openamount)) / (Number(this.sod * this.accountequity) + Number(this.sod * this.openamount))
        this.takeoverprice = this.sod / (Number(this.sod / this.openprice) + Number(this.accountequity / this.openamount / this.openprice))
      }else{
        // if(Number(this.accountequity) <= Number(this.openamount)){
        //   console.log(this.accountequity , this.openamount)
        //   this.takeoverres = true
        // }
        this.liquidationprice = (Number(this.adjustmentrate * this.openprice * this.openamount) - Number(this.sod * this.openprice * this.openamount)) / (Number(this.sod * this.accountequity) - Number(this.sod * this.openamount))
        console.log("333",this.accountequity ,this.openamount,this.liquidationprice)
        this.takeoverprice = this.sod / (Number(this.sod / this.openprice) - Number(this.accountequity / this.openamount / this.openprice))
      }
      if (this.liquidationprice < 0) {
        this.liquidationprice= this.$t('contract.cannotBeLeveled')
      } else {
        this.liquidationprice = this.global_get_tofixed(this.liquidationprice,this.global_get_decimal('USDT').a)
      }
    }
  },
  mounted() {}
};
</script>