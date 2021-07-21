<style lang="less" scoped>
  @import "../../static/styles/color";

  .dealcoin-list {
    height: 434px;
    overflow: hidden;
    background-color: @cl_fff;
    margin-bottom: 6px;
    .coin-title {
      color: @cl_5E6573;
      border-bottom: 4px solid @cl_f5f;
      font-size: 14px;
      .coin-title_item {
        line-height: 36px;
        height: 36px;
        float: left;
        text-align: center;
        padding: 0 10px;
        cursor: pointer;
        font-weight: 600;
      }

      .coin-title_item.active {
        color: @cl_link;
        border-bottom: 2px solid @cl_link;
        line-height: 36px;
      }
      .coin-title_item.hex-li {
        display: none;
      }
      .coin-title_item:hover {
        color: @cl_link;
      }
    }

    .coin-content {
      position: relative;
      font-size: 12px;
      color: #8790A1;
      .market {
        width: 130px;
      }
      .market-symble {
        width: 110px;
      }
      .multiple {
        margin-left: 8px;
      }
      .price {
        width: 150px;
        .sort {
          line-height: 7px;
          padding-top: 7px;
          padding-left: 3px;
          display: inline-block;
          height: 30px;
          i {
            display: block;
            width: 10px;
            height: 8px;
          }
          i.sortup {
            background: url('../../static/images/s_up.png') no-repeat center center;
          }
          i.sortdown {
            background: url('../../static/images/s_down.png') no-repeat center center;
          }
        }
        & > span.fl {
          padding-left: 8px;
        }
      }

      .limit {
        width: 100px;
      }

      .market img {
        width: 20px;
        height: 20px;
        vertical-align: middle;
        margin-right: 10px;
        border-radius: 100%;
      }
      .colour {
        color: #8790A1;
        .market_from {
          color: #333;
          font-weight: 600;
        }
      }

      .coin-list_content .body > *,
      .coin-list_header > * {
        float: left;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      .coin-list_header {
        font-size: 12px;
        color: @cl_5E6573;
        display: table;
        width: 100%;
        line-height: 30px;
        padding: 0 8px 0 8px;
        border-bottom: 1px solid #dbdaea;
        .select {
          width: 14px;
          margin-right: 8px;
          height: 30px;

        }
      }
      .coin-list_content {
        overflow-x: hidden;
        height: 305px;
        padding-bottom: 5px;

        .select {
          width: 24px;
          margin-right: 4px;
          height: 100%;
          i {
            border: 1px solid #14a2a5;
            border-radius: 3px;
            color: #14a2a5;
            padding: 1px 3px;
            font-style: normal;
          }
        }

        .body {
          height: 30px;
          line-height: 30px;
          padding: 0 10px 0 10px;
          cursor: pointer;
          .riskrate-color {
            color: #e6a23c;
          }
        }

        .body:hover, .body.active {
          background-color: #14a2a5;
          color: @cl_fff;
          .market_from, .colour, span {
            color: @cl_fff!important;
          }
          .riskrate-color {
            color: #e6a23c!important;
            font-weight: bold;
          }
          .select {
            i {
              border-color: @cl_fff;
              color: @cl_fff;
            }
          }
        }
      }

      .el-scrollbar__thumb {
        background-color: rgba(41, 50, 76, 1);
      }

      .el-scrollbar__thumb:hover {
        background-color: rgba(41, 50, 76, 1);
      }

      .collect {
        background-image: url('../../static/images/collect.svg');
        background-repeat: no-repeat;
        background-size: 14px, 14px;
        background-position: left center;
        cursor: pointer;
      }

      .collect.active {
        background-image: url('../../static/images/collect-active.svg');
      }
    }
    .nodata {
      text-align: center;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      width: 100%;
      font-size: 14px;
      color: @cl_8790A1;
      .repeal {
        color: @cl_link;
      }
    }
  }

  .sorts {
    color: @cl_999;
    padding-left: 3px;
    display: inline-block;
    height: 30px;
    i {
      display: inline-block;
      width: 10px;
      height: 6px;
      position: relative;
      top: -1px;
    }
    i.sortup {
      background: url('../../static/images/s_up.png') no-repeat center center;
    }
    i.sortdown {
      background: url('../../static/images/s_down.png') no-repeat center center;
    }
    i.sortup.active {
      background: url('../../static/images/s_up_check.svg') no-repeat center center;
    }
    i.sortdown.active {
      background: url('../../static/images/s_down_check.svg') no-repeat center center;
    }
  }
</style>
<template>
  <div class="dealcoin-list">
    <ul class="coin-title clearfix">
      <!-- <li
        v-for='(title , index) in $store.state.bbTitleList'
        :key="index"
        :class="{'active':isSelectCoin==title}"
        @click.stop="selectCoin(title)"
        class="coin-title_item">
        {{global_get_uppercase(title)}}
      </li> -->
      <li class="active coin-title_item">{{$t('home.all')}}</li>
    </ul>

    <div class="coin-content">
      <div class="coin-list_header">
        <span class="market ovh cursor">
          <span
            class='fl'
            @click="setsorttype('symble')">{{$t('home.tradeOn')}}</span>
          <span class='fl sorts' v-if="sorttypelistactive.type=='symble'">
            <i class="sortup active"
               v-if="sorttypelistactive.value==2"
               @click="setsorttype('symble')"></i>
            <i class="sortdown active"
               v-if="sorttypelistactive.value==1"
               @click="setsorttype('symble')"></i>
          </span>
        </span>

        <span class="price ovh cursor">
          <span
            class='fl'
            @click="setsorttype('price')">{{$t('memberCenter.price')}}</span>
          <span class='fl sorts' v-if="sorttypelistactive.type=='price'">
            <!--<i class="sortup"-->
            <!--v-if="sorttypelistactive.value==2"-->
            <!--:class="initsorttypeclass('price',2)"-->
            <!--@click="setsorttype('price')"></i>-->
            <!--<i class="sortdown"-->
            <!--v-if="sorttypelistactive.value==1"-->
            <!--:class="initsorttypeclass('price',1)"-->
            <!--@click="setsorttype('price')"></i>-->
          </span>
        </span>

        <span class="multiple ovh cursor">
          <span
            class='fl'
            @click="setsorttype('riskrate')">{{$t('leverage.riskRate')}}</span>
          <span class='fl sorts' v-if="sorttypelistactive.type=='riskrate'">
            <i class="sortup"
               v-if="sorttypelistactive.value==2"
               @click="setsorttype('riskrate')"></i>
            <i class="sortdown"
               v-if="sorttypelistactive.value==1"
               @click="setsorttype('riskrate')"></i>
          </span>
        </span>
      </div>

      <div v-bar
           v-hex-loading="coinlistloading"
           ref="coin-list"
           class="coin-list_content hex-loading">
        <div>
          <div class="body clearfix"
               :class='{"active":item.descriptions.toUpperCase()===(symblefrom+"/"+symbleto)}'
               v-for="(item,i) in searchlist"
               @click="goDeal(item.descriptions.toLowerCase())"
               :key="i">
            <span class="select"><i>{{item.borrowmultiple}}X</i></span>

            <div class='market-symble'>
              <span class='colour'>
                <span class="market_from">{{getSymble(item.descriptions).from}}</span>/{{getSymble(item.descriptions).to}}</span>
            </div>
            <div class="price">
              <span style="color:#222">{{global_get_tofixed(item.c, global_get_decimal(item.descriptions).p)}}</span>

              <span>{{$store.getters.get_client_exchange_rate_name.mark}}{{getClientExchangeRate(item)}}</span>
            </div>

            <div>
              <span class="riskrate-color">{{(Number(item.riskrate) * 100)>99999?99999:global_get_tofixed((Number(item.riskrate) * 100), 0)}}%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    watch: {
      'sorttypelistactive': {
        handler: function (val) {
          this.changesearchlist()
        },
        deep: true
      },
      'isSelectCoin': function (val) {
        this._changesearchlist()
      },
      '$store.state.bbTitleList': function () {
        this.gettitlelistFilter()
      },
      '$store.state.hex_lang.locale': function (val) {
        this.$store.dispatch('frenchcurrency_get_bb')
          .then((res) => {
            if (res.data) {
              this.$store.commit('set_coin_bb', res.data);
            }
          });

        if (val == 'en_us' && this.isSelectCoin == '全部') {
          this.isSelectCoin = 'ALL'
        } else if (val == 'zh_cn' && this.isSelectCoin == 'ALL') {
          this.isSelectCoin = '全部'
        }
      },
      '$store.state.exchangeRate': function (val) {
        this.exchangeRate = val
      },
      'leverageCtidInfoCombine': function (val) {
        this.leverageCtidInfoCombineFromProps = val;
        this.changesearchlist();
      }
    },
    props: ['symblefrom', 'symbleto', 'leverageCtidInfoCombine'],
    data() {
      return {
        searchlist: [],
        selectcut: false,
        coinList: [],
        coinListFilter: [],
        exchangeRate: [],//汇率匹配源
        socketcoinlist: [],
        collectchangeval: null,
        isSelectCoin: 'ALL',
        isselectcoinlist: [],
        coinlistloading: false,
        noDataText: false,
        sorttypelistactive: {
          type: 'symble',
          value: '1'
        },
        sub: 'market.tickers',
        leverageCtidInfoCombineFromProps: []
      };
    },
    /*订阅socket相关*/
    sockets() {
      return {
        /*订阅的类型*/
        type: this.$socket.type.quotation_daily_getall,
        receive(res) {
          if (res && res.topic == this.sub && !this.coinlistloading) {
            let data = res.data
            if (!Array.isArray(data)) {
              data = data.result
            }
            data.map((item) => {
              delete item.self
            })
            this.coinListFilter = data
          }
        }
      }

    },
    mounted() {
      if (this.$store.state.bbTitleList.length > 0) {
        this.gettitlelistFilter()
      }

      if (this.$store.state.exchangeRate) {
        this.exchangeRate = this.$store.state.exchangeRate
      }

      if (this.symbleto == '--') {
        if (this.$store.state.hex_lang.locale == 'en_us') {
          this.isSelectCoin = 'ALL'
        } else if (this.$store.state.hex_lang.locale == 'zh_cn') {
          this.isSelectCoin = '全部'
        }
      } else {
        if (this.$store.state.bbTitleList.indexOf(this.symbleto) < 0) {
          if (this.$store.state.hex_lang.locale == 'en_us') {
            this.isSelectCoin = 'ALL'
          } else if (this.$store.state.hex_lang.locale == 'zh_cn') {
            this.isSelectCoin = '全部'
          } else {
            this.isSelectCoin = this.symbleto
          }
        }
      }
    },
    methods: {
      getClientExchangeRate(tradeData) {
        if (tradeData.descriptions) {
          let symble = tradeData.descriptions.split('/');
          if (symble.length > 1) {
            symble = symble[1]
          }
          return this.$store.getters.get_client_exchange_rate(symble, tradeData.c)
        }
      },
      gettitlelistFilter() {
        if (this.coinlistloading) {
          return
        }

        this.coinlistloading = true
        this.coinListFilter = []

        this.$store.dispatch(this.$socket.url.quotation_daily_getall, {ctype: 'all',iscontract: -1})
          .then(({data}) => {
            if (data) {
              this.coinListFilter = data;

              this.gettitlelist();
            }

            this.$nextTick(() => {
              this.coinlistloading = false

              this.$socket.invoke({
                sub: this.sub,
                type: this.$socket.type.quotation_daily_getall
              })
            })
          })
      },
      gettitlelist() {
        this.coinList = [];

        this.$store.dispatch('userborrowmoney_borrow_symbols').then(({data}) => {
          if (data) {
            data.forEach((m) => {
              this.coinListFilter.forEach((n) => {
                if (m.descriptions.toLowerCase() === n.symble.toLowerCase()) {
                  m.c = n.c;

                  this.coinList.push(m);
                }
              })
            });

            this._changesearchlist();
            this.filterCurrencyTokenId();
          }
        })
      },
      /*过滤对应的交易对 传递交易对id给父组件使用*/
      filterCurrencyTokenId() {
        this.coinList.map((item, i) => {
          if (item.descriptions.toLowerCase() === (`${this.symblefrom}/${this.symbleto}`).toLowerCase())
            this.$emit('getCtid', item.id, item.borrowrate)
        })
      },
      _changesearchlist() {
        this.changecoinlist()
        this.changesearchlist()
      },
      /*选择了哪个交易对币种或者 全部交易对  进行排序操作*/
      changesearchlist() {
        let _ = [];
        const _this = this;
        /*排序*/
        const sorttype = _this.sorttypelistactive;
        /*当前选中的交易对对应的币种信息*/
        let searchlist = _this.isselectcoinlist;
        /*排序筛选*/
        if (sorttype.type) {
          searchlist.sort((a, b) => {
            let newa, newb

            if (sorttype.type == 'symble') {
              newa = a.descriptions.toLowerCase()
              newb = b.descriptions.toLowerCase()

              if (sorttype.value == 1) {
                if (newa > newb) {
                  return 1;
                }
                if (newa < newb) {
                  return -1;
                }
                return 0;
              } else {
                if (newa < newb) {
                  return 1;
                }
                if (newa > newb) {
                  return -1;
                }
                return 0;
              }

            } else if (sorttype.type === 'riskrate') {//价格排序暂无法使用 因为返回数据没有实时价格数据
              newa = a.riskrate;
              newb = b.riskrate;
            }

            return sorttype.value == 1 ? newb - newa : newa - newb
          })
        }

        searchlist.map((m, i) => {
          _this.leverageCtidInfoCombineFromProps.map((n, j) => {
            if (m.id == n.ctid) {
              _.push(Object.assign({}, m, {riskrate: n.riskrate}))
            }
          });

          if (i == searchlist.length - 1) {
            this.searchlist = _;
          }
        })
      },
      /*选择了哪个交易对币种或者 全部交易对*/
      changecoinlist(data) {
        data = data ? data : this.coinList
        let _list = []

        if ((this.isSelectCoin).toLowerCase() == 'all' || this.isSelectCoin == '全部') {
          _list = data;
        } else {
          data.forEach((_d) => {/*接口返回的大小写没规律 忽大忽小*/
//            if ((_d.descriptions.toLowerCase()).indexOf(this.isSelectCoin.toLowerCase()) > -1) {
//              _list.push(_d)
//            }
            if ((_d.descriptions.split('/')[1].toLowerCase()) == this.isSelectCoin.toLowerCase()) {
              _list.push(_d)
            }
          })
        }

        this.coinlistloading = false;
        this.isselectcoinlist = _list
      },
      setsorttype(type) {// val:2 小到大  1 大到小
        let v = this.sorttypelistactive.value
        v = v == 1 ? 2 : 1
        this.sorttypelistactive.type = type
        this.sorttypelistactive.value = v
      },
      getSymble(s) {
        s = this.global_get_uppercase(s)
        const symble = s.split('/')
        return {
          from: symble[0],
          to: symble[1]
        }
      },
      /*Which currency did you choose*/
      selectCoin(i) {
        this.isSelectCoin = i
      },
      /*router link*/
      goDeal(coinid) {
        coinid = coinid.replace('/', '_');
        this.$router.push({path: '/margin/center/' + coinid})
      }
    }
  };

</script>

