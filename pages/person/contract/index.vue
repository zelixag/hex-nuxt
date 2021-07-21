<style lang='less' scoped>
  @import "../../../static/styles/color";
  @import "../../../static/styles/person";
  @import "../../../static/styles/table";

  .balance_tip {
    font-size: 18px;
    font-weight: bold;
    margin-right: 20px;
  }

  .person-block {
    padding-bottom: 16px;
  }
  .pd{
    color:#E63550;
  }
  .pu{
    color: #18CA64;
  }
  .balance_info {
    font-size: 14px;
    flex: 1;
  }

  .balance_info:first-child {
    min-width: 485px;
  }

  .balance_info:first-child {
    border-right: 1px solid rgba(133, 131, 172, 0.2);
  }

  .balance_info .btc {
    color: @cl_buy;
    font-size: 18px;
    font-weight: bold;
    margin-right: 5px;
  }

  .person-block .person-block_info.manage {
    padding-left: 40px;
  }

  .manage.balance_info .btc {
    font-size: 18px;
  }

  .manage.balance_info .cny {
    font-size: 14px;
    color: #333;
    font-weight: normal;
  }

  .manage.balance_info .coin {
    font-size: 12px;
  }

  .balance_info .cny {
    color: @cl_link;
    font-size: 18px;
    font-weight: bold;
    margin-right: 5px;
  }

  .balance_info .br {
    margin: 0 20px;
    border-right: 1px solid rgba(133, 131, 172, 0.2);
    display: inline-block;
    height: 20px;
  }

  .balance_info_title {
    line-height: 36px;
  }

  .balance_contract {
    font-size: 13px;
    span:nth-of-type(1), small {
      color: #aaa;
    }
    span:nth-of-type(2) {
      color: #03BF7B;
      font-size: 18px;
      font-weight: bold;
      margin-right: 5px;
    }
  }
  .hold_positions_amount {
    color: #aaa !important;
  }

  .balance_info_num {
    padding: 4px 0;
  }

  .balance_info_address_button {
    color: @cl_link;
    margin-top: 16px;
    cursor: pointer;
  }

  .balance-block {
    margin-top: 10px;
    background-color: @cl_fff;
  }

  .balance-block-title {
    padding: 18px 20px 8px 20px;
  }

  .balance-block-title .title_tip {
    font-size: 16px;
    font-weight: bold;
  }

  .balance-block-search {
    margin-left: 20px;
    font-size: 14px;
    width: 220px;
    display: inline-flex;
    flex-direction: row;
    height: 30px;
    line-height: 28px;
  }

  .balance-block-search input {
    border: 1px solid #DDDDDD;
    width: 100%;
    padding: 5px 10px;
  }

  .balance-block-search input.ipt_hover:hover {
    border-right: 0 !important;
  }

  .balance-block-search .search-tip {
    width: 60px;
    background-color: @cl_link;
    color: @cl_fff;
    border: 1px solid @cl_link;
    text-align: center;
  }

  .balance-block-search .search-tip::placeholder {
    color: @cl_bbb;
  }

  .hex_table_body .handle {
    color: @cl_link;
    font-size: 12px;
    margin-left: 6px;
    cursor: pointer;
  }

  .hex_table_body .handle_no {
    color: @cl_c9c;
    font-size: 12px;
    margin-left: 6px;
    cursor: pointer;
  }

  .hex_table_body {
    line-height: 12px;
    td {
      padding: 12px 0;
      border-bottom: 1px solid #f5f5f8
    }
    small {
      color: #aaa
    }
  }

  .hex_table_action {
    position: relative;
  }

  .hex_table_action .deal_buttons {
    position: absolute;
    color: @cl_link;
    font-size: 12px;
    padding: 5px 0;
    top: 35px;
    right: 25px;
    box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.2);
    z-index: 1;
    background-color: #fff;
  }

  .hex_table_action span.deal {
    line-height: 44px;
    height: 44px;
    display: inline-block;
  }

  .hex_table_action .deal_buttons li {
    line-height: 32px;
    text-align: left;
    padding: 0 10px;
    cursor: pointer;
  }

  .hex_table_action .deal_buttons li:hover {
    background-color: @cl_f0e;
  }

  .hex_table_symble_icon {
    width: 20px;
    height: 20px;
    vertical-align: middle;
    background: white;
    border-radius: 50%;
  }

  .hex_table_action .deal_buttons li.sanj {
    top: -6px;
    right: 12px;
    background: white;
    padding: 0;
    border-bottom-right-radius: 16px;
    border: 1px solid #f3f3f3;
    border-bottom: 0 none;
    border-right: 0 none;
  }

  .coinNane {
    position: relative;
    top: 1px;
    padding-left: 5px;
  }

  .hex_table_body:last-child {
    border-bottom: none;
  }

  .flex {
    display: flex;
    flex-direction: row;
  }

  .manage-icon {
    padding: 0px 4px;
    background: @cl_link;
    color: white;
    font-size: 10px;
    border-radius: 2px;
  }

  /*11111111111*/
  .trade-top_tip {
    position: relative;
    display: inline-block;
  }

  .trade-top_tip.active > i {
    background-image: url("../../../static/images/trade/tip-active.svg");
  }

  .trade-top_tip > i {
    display: inline-block;
    width: 16px;
    height: 32px;
    vertical-align: middle;
    background-repeat: no-repeat;
    background-size: 13px 13px;
    background-position: center;
    background-image: url("../../../static/images/trade/tip.svg");
    cursor: pointer;
    position: relative;
    top: -2px;
  }

  .trade-top_tip .tip_modal {
    padding: 10px;
    width: 320px;
    line-height: 18px;
    font-size: 12px;
    border-radius: 4px;
    background: #21283e;
    box-shadow: 0 2px 4px 0 rgba(100, 107, 140, 0.3);
    opacity: 0.9;
    position: absolute;
    top: 0px;
    left: 25px;
    z-index: 2001;
    .row {
      padding-left: 10px;
      position: relative;
      color: #dee0e6;
      dt {
        position: absolute;
        left: 0;
        top: 7px;
        display: inline-block;
        width: 4px;
        height: 4px;
        background-color: #9094a4;
        border-radius: 200px;
      }
    }
  }

  .trade-top_tip.freeze-coin-hx {
    position: absolute;
    top: 2px;
  }

  .trade-top_tip .tip_modal:before {
    content: '';
    display: inline-block;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 5.5px 5.5px 7px 17.5px;
    border-color: #ff000008 #21283e #003eff00 #00ff2b00;
    position: absolute;
    top: 13px;
    left: -22px;
  }

  .trade-top_tip.freeze-coin-hx .tip_modal {
    display: none;
    top: 0;
  }

  .trade-top_tip.freeze-coin-hx:hover .tip_modal {
    display: block;
  }

  /*usdt充值提现*/
  .usdt-recharge {
    padding: 20px;
    li {
      cursor: pointer;
      float: left;
      &:nth-of-type(2) {
        margin: 0 20px;
      }
      &.active span {
        background-color: #14a2a5;
        color: #fff
      }
      span {
        font-size: 12px;
        padding: 2px 6px;
        background-color: @cl_f0f;
        color: #aaa;
      }
    }
  }

  .hex_table_body_more_head, .hex_table_body_more_body {
    padding-left: 20px;
    color: @cl_999;
    font-size: 12px;
    margin: 10px 0;
  }

  .hex_table_body_more_body {
    color: @cl_333;
  }
  .over_table{
    width: 99%;
    text-align: left;
    margin: 0 auto;
    line-height: 20px;
    border: 1px solid #dbdaea;
    padding: 10px 5%;
     .hex_table_header.padding th:first-child,
     .hex_table_body.padding td:first-child{
        padding-left: 0!important;
     }
     .hex_table_header.padding th:last-child, 
     .hex_table_body.padding td:last-child{
        padding-right: 0 !important;
     }
     th{
       line-height: 16px;
       padding-bottom: 5px;
     }
     dt{
       border-bottom: 1px dashed #14a2a5;
       cursor: pointer;
    }
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
  <div class="balance">
    <div class="person-block">
      <span class="person-block_icon wallet"></span>
      <div class="flex">
        <div class="person-block_info">
          <p class="balance_info_title">
            <span class="balance_tip">{{$t('contract.contractAcc')}}</span>
          </p>
          <p class="balance_contract">
            <span>{{$t('contract.balances')}}</span>
            <span>{{global_get_tofixed(contractsAllAmount,8)}} BTC</span>
            <small>≈ {{global_get_tofixed(contractsAllAmountTo,2)  }} {{$store.getters.get_client_exchange_rate_name.name}}</small>
          </p>
        </div>
      </div>
    </div>
    <div class="balance-block">
      <div class="balance-block-title clearfix">
        <div class="right">
          <el-checkbox v-model="checked">
            <span class="label-tip">{{$t('wallet.hideCoin')}}</span>
          </el-checkbox>

          <div class="balance-block-search">
            <input type="text"
                   :placeholder="$t('wallet.searchCion')"
                   class='ipt_hover'
                   v-model="search"
                   @keyup.enter="searchCoin">
            <span class="search-tip">{{$t('home.searchButton')}}</span>
          </div>
        </div>
      </div>
      <table class="hex_table">
        <thead class="hex_table_header padding br">
        <tr>
          <th class="lt">{{$t('contract.class')}}</th>
          <th class="lt">{{$t('contract.equity')}}</th>
          <th class="rt">{{$t('contract.aviMargin')}}</th>
          <th class="rt">{{$t('contract.position')}}</th>
          <th class="rt">{{$t('contract.frozen')}}</th>
          <th class="rt">{{$t('contract.unrealized')}}</th>
          <th class="rt">{{$t('contract.realized')}}</th>
          <th class="rt">{{$t('contract.ratio')}}</th>
          <th class="rt">{{$t('contract.liquidation')}}</th>
          <th class="rt">{{$t('home.tradeOperation')}}</th>
        </tr>
        </thead>
        <tbody>
        <template v-for="(m,i) in searchList">
          <tr class="hex_table_body padding"
              :key="`body-${m.id}`">
            <td>
              {{m.symblename.toUpperCase()}}
            </td>
            <td class="lt">
              <div>{{global_get_tofixed(m.accountequity, global_get_decimal(replaceCurrency(m.symblename+"/yx")).a)}}</div>
              <small>≈ {{currencyExchange(m.symblename,Number(m.accountequity))}} {{$store.getters.get_client_exchange_rate_name.name}}</small>
            </td>
            <td class="rt">
              {{global_get_tofixed(m.canuseamount, global_get_decimal(replaceCurrency(m.symblename+"/yx")).a)}} <br/>
            </td>
            <td class="rt">
             {{global_get_tofixed(m.holdpositionsamount, global_get_decimal(replaceCurrency(m.symblename+"/yx")).a)}} <br/>
            </td>
            <td class="rt">{{global_get_tofixed(m.frozenamount, global_get_decimal(replaceCurrency(m.symblename+"/yx")).a)}}</td>
            <td class="rt">
              {{global_get_tofixed(m.unrealizedprofitandlossamount, global_get_decimal(replaceCurrency(m.symblename+"/yx")).a)}}
              
            </td>
            <td class="rt">
              {{global_get_tofixed(m.profitandlossamount, global_get_decimal(replaceCurrency(m.symblename+"/yx")).a)}}
            </td>
            <td class="rt">
              {{global_get_tofixed(m.marginrate, global_get_decimal(replaceCurrency(m.symblename+"/yx")).a)}}
            </td>
            <td class="rt">

              {{global_get_tofixed(m.explosionprice, global_get_decimal(replaceCurrency('USDT')).a)}}
              USDT               
            </td>
            <td class="rt size0">
              <div class="hex_table_action">
                <!--划转-->
                <span class="handle" @click="showPop(m)">{{$t('leverage.transfer')}}</span>
                <!--交易-->
                <span class="handle deal"
                      @mouseenter="showDeal(i,true)"
                      @mouseleave="showDeal(i,false)"
                >{{$t('wallet.deal')}}</span>
                <!--查看-->
                <span v-show="m.holdpositionsamount>0" class="handle" @click="showMoreContracts(m.id)">{{$t('wallet.lookOver')}}</span>
                <span v-show="m.holdpositionsamount<=0" class="handle hold_positions_amount">{{$t('wallet.lookOver')}}</span>

                <ul class="deal_buttons"
                    @mouseenter="showDeal(i,true)"
                    @mouseleave="showDeal(i,false)"
                    v-show="isShowDeal(i)">
                  <li class="sanj"></li>
                  <li @click="toDeal(m.ctid)">
                    {{(m.symblename).toUpperCase()}}
                  </li>
                </ul>
              </div>
            </td>
          </tr>

          <tr :key="`more-thead-${m.id}`" v-if="isShowMoreContracts(m.id)">
            <td colspan="11">
              <table class="over_table">
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
                    <span>({{replaceCurrency(m.symblename)}})</span>
                  </th>
                  <th class="rt">
                    <dt class="tooltip-hover">{{$t('contract.unrealized')}}
                      <div class="tooltip-inner ">
                        <em class="tooltip-text ">{{$t('contract.unrealizedTip')}}</em>
                        <i class="tooltip-arrow "></i>
                      </div>
                    </dt><br>
                    <span>({{replaceCurrency(m.symblename)}})</span>
                  </th>
                  <th class="rt">
                    <dl class="clearfix">
                    <dt class="tooltip-hover">{{$t('contract.realized')}}
                      <div class="tooltip-inner ">
                        <em class="tooltip-text ">{{$t('contract.realizedTip')}}</em>
                        <i class="tooltip-arrow "></i>
                      </div>
                    </dt><br>
                    <span>({{replaceCurrency(m.symblename)}})</span>
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
                </tr>
              </thead>
              <tbody class="deal-tbody">
                <tr class="hex_table_body_more_body" 
                    v-for="(n) in m.listhaveorderinfos"
                    :key="`more-body-${n.id}`">
                  <td class="pu" v-if="n.direction == 1">{{n.symblename}}</td>
                  <td class="pd" v-else>{{n.symblename}}</td>
                  <td class="lt">{{global_get_tofixed(n.openavgprice, global_get_decimal(replaceCurrency(m.symblename+"/yx")).p)}}</td>
                  <td class="rt">{{global_get_tofixed(n.holdpositionsavgprice, global_get_decimal(replaceCurrency(m.symblename+"/yx")).p)}}</td>
                  <td class="rt">{{global_get_tofixed(n.holdpositionsamount, global_get_decimal(replaceCurrency(m.symblename+"/yx")).a)}}</td>
                  <td class="rt">{{global_get_tofixed(n.unrealizedprofitandlossamount, global_get_decimal(replaceCurrency(m.symblename+"/yx")).a)}}</td>
                  <td class="rt">{{global_get_tofixed(n.profitamount, global_get_decimal(replaceCurrency(m.symblename+"/yx")).a)}}</td>
                  <td class="rt">{{getprofitrate(n)}}%</td>
                  <td class="rt">
                    {{global_get_tofixed(n.openinterest, global_get_decimal(replaceCurrency(m.symblename+"/yx")).p)}}
                  </td>
                  <td class="rt" style="line-height: 18px;">
                    <div class="tooltip-hover">
                      {{global_get_tofixed(n.openinterest - n.frozenamount, global_get_decimal(replaceCurrency(m.symblename+"/yx")).p)}}
                        <div class="tooltip-inner ">
                          <em v-if="currencyUnitType == 1" class="tooltip-text" style="left: -8px;width: auto;white-space: nowrap;">可平量(张)={{global_get_tofixed(n.openinterest - n.frozenamount, 2)}}/{{contract_size}}={{global_get_tofixed((n.openinterest - n.frozenamount) / 10, 0)}}(张) </em>
                          <em v-else class="tooltip-text" style="left: -8px;width: auto;white-space: nowrap;">可平量({{replaceCurrency(m.symblename)}})={{global_get_tofixed(n.openinterest - n.frozenamount, 2)}}/{{newmoney}}={{global_get_tofixed((n.openinterest - n.frozenamount)/newmoney, global_get_decimal(replaceCurrency(m.symblename+"/yx")).p)}}({{replaceCurrency(m.symblename).toUpperCase()}})  </em>
                          <i class="tooltip-arrow" style="left: 3px;"></i>
                        </div>
                    </div>
                </td>
              <td class="rt">
                {{global_get_tofixed(n.frozenamount, global_get_decimal(replaceCurrency(m.symblename+"/yx")).p)}}
              </td>
       
                </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </template>
        </tbody>
      </table>
      <div v-if="!loading">
        <div class="anonymous" v-if="foundData">
          <div class="anonymous-pic">
            <img src="~/static/images/user/anonymous.svg" alt="">
          </div>
          <p class="anonymous-tip">
            {{$t('legalTrad.record')}}<span></span>
          </p>
        </div>
      </div>
      <div v-if="loading" class="loadingPic por" v-hex-loading="loading"></div>
    </div>
    <!--transfer_pop-->
    <hex-transfer-contract
      :contractsSelectList="contractsSelectList"
      :systemName="symblename"
      @confirmToTransferContract="confirmToTransferContract"
      @closePopup="closePopup"
      v-if="transfer_pop"
      ref="ref_transfer"/>
  </div>
</template>

<script>
  import transferPop from '@/components/security/contract-transfer-popup';

  export default {
    name: 'articles',
    components: {
      'hex-transfer-contract': transferPop,
    },
    computed: {
      searchList: function () {
        const _this = this;
        const _isCheck = this.checked;
        const list = _this.currencyData;
        const value = _this.search.replace(/\s+/g, "");
        let searchary = [];
        if (value) {
          const reg = new RegExp(value, 'gim');

          list.map((item) => {
            if ((item.symblename).match(reg)) {
              searchary.push(item)
            }
          });
          return _this.hideDriblet(searchary, _isCheck);
        } else {
          return _this.hideDriblet(list, _isCheck);
        }
      },
      contractsAllAmountTo: function () {
        return this.$store.getters.get_client_exchange_rate('btc', this.contractsAllAmount);
      },
    },
    data() {
      return {
        List: [],
        decimal: {},
        foundData: false,
        loading: true,
        checked: false,
        transfer_pop: false,
        currencyData: [],
        search: "",
        contractsAllAmount: 0,
        dealtimer: {},
        contractsSelectList: [],
        showMoreContractsArr: [],
        usercontract_contract_symbols: [],
        leverage_assets_data: {},
        currencyUnitType:1,
        symblename:""
      }
    },
    methods: {
      getprofitrate(coins){
        console.log(coins)
        var rate = this.global_get_tofixed((coins.profitamount +　coins.unrealizedprofitandlossamount) / coins.holdpositionsamount * 100, 2)
        return rate
      },
      toDeal(s) {
        for (let i of this.usercontract_contract_symbols) {
          if (i.id == s) {
            s = `${i.descriptions.split('/')[0]}_yx`.toLowerCase();
            this.$router.push({path: '/contract/'+ s})
          }
        }
      },
      showDeal(i, m) {
        this.dealtimer[i] && clearTimeout(this.dealtimer[i]);
        if (!m) {
          this.dealtimer[i] = setTimeout(() => {
            this.currencyData[i].showDeal = m;
            this.$forceUpdate()
          }, 300)
        } else {
          this.currencyData[i].showDeal = m;
          this.$forceUpdate()
        }
      },
      isShowDeal(i) {
        return !!this.currencyData[i].showDeal
      },
      //隐藏小额币种
      hideDriblet(arr, isCheck) {
        if (isCheck) {
          let filterList = [];
          arr.forEach((item) => {
            if (Number(item.famount) > 0) {
              filterList.push(item)
            }
          });
          filterList.length > 0 ? this.foundData = false : this.foundData = true;
          return filterList;
        } else {
          arr.length > 0 ? this.foundData = false : this.foundData = true;
          return arr;
        }
      },
      //在已有结果里面搜索某个币种
      searchCoin() {
        this.search = !this.search;
      },
      currencyExchange(symblename,amount) {
        return this.$store.getters.get_client_exchange_rate(this.replaceCurrency(symblename), amount);
      },
      replaceCurrency(symble) {
        return symble.toUpperCase().replace(this.$t('contract.swap'),'');
      },
      getContractsInfo() {
        const _self = this;
        if (!this.$userinfo.uid) {
          return 
        }
        const params = Object.assign({}, {
          // ctid: 0,
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
            _selt.getContractsSymbols();
            _selt.$refs.ref_transfer.close();
          } else {
            _selt.$refs.ref_transfer.closeLoading();
          }
        })
      },
      closePopup() {
        this.transfer_pop = !this.transfer_pop;
      },
      showPop(m) {
        this.transfer_pop = !this.transfer_pop;
        this.symblename = this.replaceCurrency(m.symblename)
      },
      setExplosionPrice(n, m) {
        if (n <= 0) {
          return 0;
        } else {
          return this.global_get_tofixed(n, this.global_get_decimal(m).a);
        }
      },
      showMoreContracts(id) {
        if (this.showMoreContractsArr.indexOf(id) > -1) {
          this.showMoreContractsArr.splice(this.showMoreContractsArr.indexOf(id), 1)
        } else {
          this.showMoreContractsArr.push(id)
        }
      },
      isShowMoreContracts(id) {
        return this.showMoreContractsArr.indexOf(id) > -1;
      },
      //合约交易对信息
      async getContractsSymbols() {
        let store = [];
        const _selt = this;

        const params = Object.assign({}, {
          uid: this.$userinfo.uid,
          key: this.$userinfo.secretkey
        });

        let usercontract_contract_symbols = await _selt.$store.dispatch('usercontract_contract_symbols', params);
        let user_assets_get = await _selt.$store.dispatch('user_assets_get', {assetstype: 1});

        if (usercontract_contract_symbols.code == 200 && user_assets_get.code == 200) {
          this.usercontract_contract_symbols = usercontract_contract_symbols.data;

          for (let a of usercontract_contract_symbols.data) {
            for (let b of this.currencyData) {
              if (a.id === b.ctid) {
                a.canuseamount_contract = b.canuseamount;

                store.push(a);
              }
            }

            for (let c of user_assets_get.data) {
              if (a.fcurrencyid === c.currency.id) {
                a.canuseamount_coin = c.canuseamount;

                store.push(a);
              }
            }
          }

          this.contractsSelectList = Array.from(new Set(store));
        }
      }
    },
    mounted() {
      this.getContractsInfo();
      this.getContractsSymbols();
    }
  }
</script>
