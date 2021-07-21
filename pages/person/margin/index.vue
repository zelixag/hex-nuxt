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
    line-height: 20px;
    td{padding:12px 0;border-bottom: 1px solid #f5f5f8}
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
    right: -5px;
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
        color: #fff;
      }
      span {
        font-size: 12px;
        padding: 2px 6px;
        background-color: #f0f0f0;
        color: #aaa;
      }
    }
  }
</style>
<template>
  <div class="balance">
    <div class="person-block">
      <span class="person-block_icon wallet"></span>
      <div class="flex">
        <div class="person-block_info">
          <p class="balance_info_title">
            <span class="balance_tip">{{$t('wallet.leveraged')}}</span>
          </p>
        </div>
      </div>
    </div>
    <div class="balance-block">
      <div class="balance-block-title clearfix">
        <div class="">
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
          <th class="lt">
            <div>{{$t('wallet.leveraged')}}</div>
          </th>
          <th class="rt">
            <div>{{$t('wallet.available')}}</div>
          </th>
          <th class="rt">
            <div>{{$t('wallet.freeze2')}}</div>
          </th>
          <th class="rt">
            <div>{{$t('wallet.generalAssets')}}</div>
          </th>
          <th class="rt">{{$t('leverage.borrowed')}}</th>
          <th class="rt">{{$t('leverage.riskRate')}}</th>
          <th class="rt">{{$t('leverage.stormPrice')}}</th>
          <th class="rt">
            <div>{{$t('home.tradeOperation')}}</div>
          </th>
        </tr>
        </thead>
        <tbody>
        <template v-for="(m,i) in searchList">
          <tr class="hex_table_body padding"
              :key="`body-${m.id}`">
            <td>
              {{(m.symblename).toUpperCase()}}
            </td>
            <td class="rt">
              {{(m.famount == 0) ? 0 : global_get_tofixed(m.famount, global_get_decimal(m.fcurrencyname).a)}} {{m.fcurrencyname.toUpperCase()}}<br/>
              {{(m.tamount == 0) ? 0 : global_get_tofixed(m.tamount, global_get_decimal(m.tcurrencyname).a)}} {{m.tcurrencyname.toUpperCase()}}
            </td>
            <td class="rt">
              {{(m.ffrozenamount == 0) ? 0 : global_get_tofixed(m.ffrozenamount, global_get_decimal(m.fcurrencyname).a)}} {{m.fcurrencyname.toUpperCase()}}<br/>
              {{(m.tfrozenamount == 0) ? 0 : global_get_tofixed(m.tfrozenamount, global_get_decimal(m.tcurrencyname).a)}} {{m.tcurrencyname.toUpperCase()}}
            </td>
            <td class="rt">
              {{Number(m.famount) + m.ffrozenamount > 0 ? global_get_tofixed(Number(m.famount) +m.ffrozenamount,  global_get_decimal(m.fcurrencyname).a) : 0}} {{m.fcurrencyname.toUpperCase()}}<br/>
              {{Number(m.tamount) + m.tfrozenamount > 0 ? global_get_tofixed(Number(m.tamount) +m.tfrozenamount,  global_get_decimal(m.tcurrencyname).a) : 0}} {{m.tcurrencyname.toUpperCase()}}
            </td>
            <td class="rt">
              {{(m.fborrowamount == 0) ? 0 : global_get_tofixed(m.fborrowamount, global_get_decimal(m.fcurrencyname).a)}} {{m.fcurrencyname.toUpperCase()}}<br/>
              {{(m.tborrowamount == 0) ? 0 : global_get_tofixed(m.tborrowamount, global_get_decimal(m.tcurrencyname).a)}} {{m.tcurrencyname.toUpperCase()}}
            </td>
            <td class="rt">{{(m.riskrate) == 0 ? $t('leverage.risk') : `${((m.riskrate) * 100).toFixed(1)}%`}}</td>
            <td class="rt">
              {{setExplosionPrice(m.explosionprice, m.tcurrencyname)}}
            </td>
            <td class="rt size0">
              <div class="hex_table_action">
                <!--转入-->
                <span class="handle" @click="showPop(0,m)">{{$t('leverage.into')}}</span>
                <!--转出-->
                <span class="handle" @click="showPop(1,m)">{{$t('leverage.transferOut')}}</span>
                <!--杠杆-->
                <span class="handle" @click="toLeverage(m.symblename)">{{$t('leverage.lever')}}</span>
                <!--交易-->
                <span class="handle deal"
                      @mouseenter="showDeal(i,true)"
                      @mouseleave="showDeal(i,false)"
                >{{$t('wallet.deal')}}</span>

                <ul class="deal_buttons"
                    @mouseenter="showDeal(i,true)"
                    @mouseleave="showDeal(i,false)"
                    v-show="isShowDeal(i)">
                  <li class="sanj"></li>
                  <li @click="toDeal(m.symblename)">
                    {{(m.symblename).toUpperCase()}}
                  </li>
                </ul>
              </div>
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

    <hex-in
      :symblename="symblename"
      @confirmToRepayment="confirmToRepayment"
      @closePopup="closePopup"
      v-show="pop_in"
      ref="child_in"/>

    <hex-out
      :symblename="symblename"
      :leverage_assets_data="leverage_assets_data"
      @confirmToRepayment="confirmToRepayment"
      @closePopup="closePopup"
      v-show="pop_out"
      ref="child_out"/>
  </div>
</template>

<script>
  import inPop from '@/components/security/in-popup';
  import outPop from '@/components/security/out-popup';

  export default {
    name: 'articles',
    components: {
      'hex-in': inPop,
      'hex-out': outPop,
    },
    computed: {
      searchList: function () {
        const _this = this;
        const _isCheck = this.checked;
        const list = _this.currencyData;
        const value = _this.search.toLowerCase().replace(/ /g, '');
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
      }
    },
    data() {
      return {
        List: [],
        tipstate: false,
        decimal: {},
        foundData: false,
        loading: true,
        checked: false,
        pop_in: false,
        pop_out: false,
        currencyData: [],
        search: "",
        symblename: "",
        ctid: 0,
        dealtimer: {},
        leverage_assets_data: {},
      }
    },
    methods: {
      //交易K线页路由
      legalDeal(val) {
        this.$router.push({
          name: 'trade',
          query: {
            direction: val
          }
        })
      },
      toLeverage(s) {
        s = s.replace('/', '_').toLowerCase();

        this.$router.push({name: 'margin-center-id', params: {id: s}})
      },
      toDeal(s) {
        s = s.replace('/', '_').toLowerCase();

        this.$router.push({name: 'margin-id', params: {id: s}})
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
      getLeverageInfo() {
        const _self = this;

        _self.$store.dispatch('userborrowmoney_user_mortgageassets_infos').then(({data}) => {
          if (data) {
            this.currencyData = data;
          }

          this.loading = false;
        })
      },
      confirmToRepayment(_this) {
        const _selt = this;

        const params = Object.assign({}, _this, {
          ctid: this.ctid,
          uid: this.$userinfo.uid,
          key: this.$userinfo.secretkey
        });

        _selt.$store.dispatch('userborrowmoney_user_transfer_inorout', params).then((data) => {
          if (data.data) {
            _selt.$store.commit('set_message', {
              type: 'ok', text: data.msg
            });

            _selt.getLeverageInfo();

            _selt.pop_in ? _selt.$refs.child_in.close() : _selt.$refs.child_out.close();
          } else {
            _selt.pop_in ? _selt.$refs.child_in.close() : _selt.$refs.child_out.close();
            _selt.pop_in ? _selt.$refs.child_in.closeLoading() : _selt.$refs.child_out.closeLoading();
          }
        })
      },
      closePopup(val) {
        switch (val) {
          case 0:
            this.pop_in = !this.pop_in;
            break;
          case 1:
            this.pop_out = !this.pop_out;
            break;
        }
      },
      showPop(val, data) {
        switch (val) {
          case 0:
            this.pop_in = !this.pop_in;
            break;
          case 1:
            this.pop_out = !this.pop_out;
            this.leverage_assets_data = data;
            break;
        }

        this.ctid = data.ctid;
        this.symblename = data.symblename;
      },
      setExplosionPrice(n, m) {
        if (n <= 0) {
          return 0;
        } else {
          return this.global_get_tofixed(n, this.global_get_decimal(m).a);
        }
      }
    },
    mounted() {
      if (this.$userinfo.uid) {
        this.getLeverageInfo();
      } 
    }
  }
</script>

