<style lang="less" scoped>
@import "../../static/styles/color";
.dealcoin-list{
  height: 333px;
  background: #2A2A33;
  color: #8790A1;
}
.dealcoin-title{
  line-height: 30px;
  font-weight: bold;
  font-size: 14px;
  padding: 0 10px;
  border-bottom: 1px solid #292E39;
}
.dealcoin-title a{
  display: inline-block;
  float: right;
  font-size: 12px;
  color: #14a2a5;
  font-weight: normal;
}
dl{
  padding: 0 10px;
  font-size: 12px;
}
dt,dd{
  margin: 10px 0 4px;
  display: inline-block;
}
dt{
  cursor: pointer;
  float: left;
  border-bottom:1px dashed #14a2a5;
}
dd{
   float: right;
   color: #fff;
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
</style>
<template>
  <div class="dealcoin-list">
    <div class="dealcoin-title clearfix">{{symblefrom}}{{$t('contract.assets')}}<a @click="showPop()"> {{$t('leverage.transfer')}}</a></div>
    <dl class="clearfix">
      <dt class="tooltip-hover">{{$t('contract.accountEquity')}}({{symblefrom}})
        <div class="tooltip-inner ">
          <em class="tooltip-text ">{{$t('contract.accountEquityTip')}}</em>
          <i class="tooltip-arrow "></i>
        </div>
      </dt>
      <dd>{{global_get_tofixed(contractInfo.accountequity, global_get_decimal(symblefrom).a)}}</dd>
    </dl>
    <dl class="clearfix">
      <dt class="tooltip-hover">{{$t('contract.profitandlossamount')}}({{symblefrom}})
        <div class="tooltip-inner ">
          <em class="tooltip-text ">{{$t('contract.profitandlossamountTip')}}</em>
          <i class="tooltip-arrow "></i>
        </div>
      </dt>
      <dd>{{global_get_tofixed(contractInfo.profitandlossamount, global_get_decimal(symblefrom).a)}}</dd>
    </dl>
    <dl class="clearfix">
      <dt class="tooltip-hover">{{$t('contract.unrealizedprofitandlossamount')}}({{symblefrom}})
        <div class="tooltip-inner ">
          <em class="tooltip-text ">{{$t('contract.unrealizedprofitandlossamountTip')}}</em>
          <i class="tooltip-arrow "></i>
        </div>
      </dt>
      <dd>{{global_get_tofixed(contractInfo.unrealizedprofitandlossamount, global_get_decimal(symblefrom).a)}}</dd>
    </dl>
    <dl class="clearfix">
      <dt class="tooltip-hover">{{$t('contract.canuseamount')}}({{symblefrom}})
        <div class="tooltip-inner ">
          <em class="tooltip-text ">{{$t('contract.canuseamountTip')}}</em>
          <i class="tooltip-arrow "></i>
        </div>
      </dt>
      <dd>{{global_get_tofixed(contractInfo.canuseamount, global_get_decimal(symblefrom).a)}}</dd>
    </dl>
    <dl class="clearfix">
      <dt class="tooltip-hover">{{$t('contract.holdpositionsamount')}}({{symblefrom}})
        <div class="tooltip-inner ">
          <em class="tooltip-text ">{{$t('contract.holdpositionsamountTip')}}</em>
          <i class="tooltip-arrow "></i>
        </div>
      </dt>
      <dd>{{global_get_tofixed(contractInfo.holdpositionsamount, global_get_decimal(symblefrom).a)}}</dd>
    </dl>
    <dl class="clearfix">
      <dt class="tooltip-hover">{{$t('contract.frozenamount')}}({{symblefrom}})
        <div class="tooltip-inner ">
          <em class="tooltip-text ">{{$t('contract.frozenamountTip')}}</em>
          <i class="tooltip-arrow "></i>
        </div>
      </dt>
      <dd>{{contractInfo.frozenamount}}</dd>
    </dl>
    <dl class="clearfix">
      <dt class="tooltip-hover">{{$t('contract.explosionprice')}}(USDT)
        <div class="tooltip-inner ">
          <em class="tooltip-text ">{{$t('contract.explosionpriceTip')}}</em>
          <i class="tooltip-arrow "></i>
        </div>
      </dt>
      <dd>{{global_get_tofixed(contractInfo.explosionprice, global_get_decimal('USDT').a) }}</dd>
    </dl>
    <dl class="clearfix">
      <dt class="tooltip-hover">{{$t('contract.marginrate')}}
        <div class="tooltip-inner ">
          <em class="tooltip-text ">{{$t('contract.marginrateTip')}}</em>
          <i class="tooltip-arrow "></i>
        </div>
      </dt>
      <dd>{{global_get_tofixed(contractInfo.marginrate, 2) }}%</dd>
    </dl>
    <dl class="clearfix">
      <dt class="tooltip-hover">{{$t('contract.adjustmentrate')}}
        <div class="tooltip-inner ">
          <em class="tooltip-text ">{{$t('contract.adjustmentrateTip')}}</em>
          <i class="tooltip-arrow "></i>
        </div>
      </dt>
      <dd>{{global_get_tofixed( contractInfo.adjustmentrate, 2)}}%</dd>
    </dl>

  <!--transfer_pop-->
  <hex-transfer-contract
    v-if="transfer_pop"
    :systemName="symblefrom"
    :contractsSelectList="contractsSelectList"
    @confirmToTransferContract="confirmToTransferContract"
    @getSymbleInfo="getSymbleInfo"
    @closePopup="closePopup"
    @getContractAssetsInfo="getContractAssetsInfo"
    ref="ref_transfer"/>
  </div>
</template>
<script>
import transferPop from '@/components/security/contract-transfer-popup';
export default {    
  name: 'contract',
  components: {
    'hex-transfer-contract': transferPop,
  },
  watch: {},
  props: {
      symblefrom:"",
      symbleto:"",
      dailyDetail: {
        type: Object,
        default: function () {
          return {}
        }
      },
  },
  data() {
    return {
      List: [],
        decimal: {},
        foundData: false,
        loading: true,
        checked: false,
        currencyData:[],
        search: "",
        contractsAllAmount: 0,
        dealtimer: {},
        contractsSelectList: [],
        showMoreContractsArr: [],
        usercontract_contract_symbols: [],
        leverage_assets_data: {},
        contractInfo: {},
        transfer_pop:false
    };
  },
  watch:{
      transfer_pop : function (val) {
        this.getContractsSymbols();
        this.getContractsInfo();
      }
  },
  subscribe() {
    return {
      changeNewMoney(res) {
      /*更新最新价格*/
        this.getContractAssetsInfo();
      },
      coinContractInfo(){
        this.getContractAssetsInfo();
      }
    }
  },
  created() {
    this.getContractsSymbols();
    this.getContractsInfo();
  },
  mounted() {
    if (this.$userinfo.uid) {
      this.getContractAssetsInfo();
      
    }
  },
  /*订阅socket相关*/
  sockets() {},
  methods: {
    showPop() {
      this.transfer_pop = !this.transfer_pop;
    },
    closePopup() {
      this.transfer_pop = !this.transfer_pop;
    },
    getSymbleInfo() {
      this.$emit('getSymbleInfo');
    },
  //合约交易对信息
      async getContractsSymbols() {
        let store = [];
        const _selt = this;
        if (!this.$userinfo.uid) {
          return 
        }
        const params = Object.assign({}, {
          uid: this.$userinfo.uid,
          key: this.$userinfo.secretkey
        });

        let usercontract_contract_symbols = await _selt.$store.dispatch('usercontract_contract_symbols', params);
        let user_assets_get = await _selt.$store.dispatch('user_assets_get', {assetstype: 1});

        if (usercontract_contract_symbols.code == 200 && user_assets_get.code == 200) {
          this.usercontract_contract_symbols = usercontract_contract_symbols.data;
console.log('0000',usercontract_contract_symbols.data)
          for (let a of usercontract_contract_symbols.data) {
            for (let b of this.currencyData) {
              if (a.id === b.ctid) {
                a.canuseamount_contract = b.canuseamount;

                store.push(a);
              }
            }

            for (let c of user_assets_get.data) {
              if (a.fcurrencyid === c.currency.id) {
                           console.log(44444,a.fcurrencyid === c.currency.id)
                a.canuseamount_coin = c.canuseamount;

                store.push(a);
              }
            }
          }

          this.contractsSelectList = Array.from(new Set(store));
          
          this.contractsSelectList = this.contractsSelectList.filter((item) => {
            return this.global_get_uppercase(item.descriptions.split('/')[0]) === this.symblefrom
          })
          console.log(333333,this.contractsSelectList)
        }
      },
    getContractsInfo() {
        const _self = this;
        if (!this.$userinfo.uid) {
          return 
        }
        const params = Object.assign({}, {
          ctid: 0,
          uid: this.$userinfo.uid,
          key: this.$userinfo.secretkey
        });


        _self.$store.dispatch('usercontract_user_contractassets_infos', params).then(({data}) => {
          if (data) {
            let N = 0;

            this.currencyData = data;

            data.map((item, i) => {
              N += item.accountequitybtc;
            });

            this.contractsAllAmount = N;
          }else {  console.log(this.$userinfo.uid,this.$userinfo.secretkey) 
          }

          this.loading = false;
        })
      },
    confirmToTransferContract(_this) {
        const _selt = this;

        const params = Object.assign({}, _this, {
          uid: this.$userinfo.uid,
          key: this.$userinfo.secretkey
        });

        _selt.$store.dispatch('usercontract_user_transfer_inorout', params).then(({data}) => {
          if (data) {
            _selt.$store.commit('set_message', {
              type: 'ok', text: data.msg
            });
            _selt.getContractsInfo();
            _selt.getSymbleInfo()
            // _selt.getContractsSymbols();
            _selt.$refs.ref_transfer.close();
          } else {
            _selt.$refs.ref_transfer.closeLoading();
          }
        })
      },
    getContractAssetsInfo() {
      if (!this.$userinfo.uid) {
        return 
      }
      const params = Object.assign(
        {},
        {
          ctid: this.dailyDetail.ctid,
          uid: this.$userinfo.uid,
          key: this.$userinfo.secretkey
        }
      );

      this.$store
        .dispatch("usercontract_user_contractassets_infos", params)
        .then(({ data }) => {
          if (data && data.length > 0) {
            this.contractInfo = data[0];
            console.log(
              "usercontract_user_contractassets_infos",
              this.contractInfo
            );
          }
        });
    }
  }
};
</script>

