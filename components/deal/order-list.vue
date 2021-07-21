<style scoped lang="less">
  @import "../../static/styles/color";

  .exchange-record {
    background-color: @cl_content;
    margin-bottom: 20px;
    font-size: 12px;
    color: @cl_CED3DD;
    .exchange-record_table_body .sale {
      color: @cl_sell;
    }

    .exchange-record_table span.tr {
      text-align: right;
    }
    .exchange-record_title {
      color: @cl_8790A1;
      font-size: 14px;
      border-bottom: 1px solid @cl_292E39;
      > span {
        font-weight: bold;
        line-height: 30px;
        text-align: center;
        display: inline-block;
        cursor: pointer;
        padding: 0 10px;
      }
      .active {
        border-top: 2px solid @cl_link;
        background-color: @cl_292E39;
        color: @cl_link;
      }
    }

    .exchange-record_table {
      display: table;
      width: 100%;
    }

    .exchange-record_table_header {
      font-size: 12px;
      color: @cl_8790A1;
      display: table-header-group;
    }

    .exchange-record_table_header span,
    .exchange-record_table_body span {
      display: table-cell;
      padding: 8px 20px;
      line-height: 22px;
    }

    .exchange-record_table_body {
      background-color: @cl_1a2;
      font-size: 12px;
      color: @cl_c5c;
      display: table-row;
    }

    .exchange-record_table_body .buy {
      color: @cl_buy;
    }
    .anonymous {
      background: none;
    }

    .entrust-list_title {
      padding: 0;
    }
    p.entrust-list_title:first-child {
      margin: 0 10px;
    }

    .entrust-list_title {
      color: rgba(197, 195, 221, 1);
    }
    .entrust-list_title.active {
      border-bottom: 2px solid @cl_link;
      color: white;
    }
    /*分页*/
    .paging-source-deal {
      padding: 10px 0;
      text-align: center;
      .el-pagination.is-background .btn-next, .el-pagination.is-background .btn-prev, .el-pagination.is-background .el-pager li {
        background: rgba(26, 33, 52, 1);
        border: 1px solid rgba(52, 75, 108, 1);
        color: rgba(189, 188, 203, 1);
      }
    }
    .repeal {
      color: @cl_link;
      cursor: pointer;
    }
  }

  .hide-trading .el-checkbox .el-checkbox__label .label-tip {
    font-size: 12px;
    font-weight: 400;
    color: rgba(135, 144, 161, 1);
    line-height: 14px;
  }

  .el-checkbox__inner {
    background: none !important;
  }
</style>
<template>
  <div class="exchange-record">
    <div class="exchange-record_title">
      <span
        :class="{'active':changeState==1}"
        @click="tabChange(1)">{{$t('patch.OpenOrder')}}</span>
      <span
        :class="{'active':changeState==2}"
        @click="tabChange(2)">{{$t('patch.TradeHistory')}}</span>
      <span
         v-show="marginPage"
        :class="{'active':changeState==3}"
        @click="tabChange(3)">{{$t('leverage.currentApplication')}}</span>
      <span
         v-show="marginPage"
        :class="{'active':changeState==4}"
        @click="tabChange(4)">{{$t('leverage.capitalFlow')}}</span>
      <span class="right hide-trading">
            <el-checkbox v-model="checked">
              <span class="label-tip">{{$t('c2c.hideCoin')}}</span>
            </el-checkbox>
          </span>
    </div>
    <hex-entrust
      v-show="changeState==1"
      :changeState="changeState"
      :symbleto="symbleto"
      :isSelect="isSelect"
      :margin="margin"
    />
    <hex-transaction
      v-show="changeState==2"
      :changeState="changeState"
      :symbleto="symbleto"
      :isSelect="isSelect"
      :margin="margin"
    />
    <hex-leverage-loan 
      v-if="changeState==3"
      @repayment:success="repaymentSuccess" 
      :isSelect="isSelect"
      :leverageCtidInfo="leverageCtidInfo" 
      :applicationApproved="applicationApproved"
      ref="leverageloan" />
    <hex-leverage-capitalflow 
      v-if="changeState==4"
      :isSelect="isSelect"
      @repayment:success="repaymentSuccess" 
      :leverageCtidInfo="leverageCtidInfo" 
      :applicationApproved="applicationApproved"
      ref="leveragecap"
      />
  </div>
</template>
<script>
  import entrust from '@/components/deal/order-list-entrust'
  import transaction from '@/components/deal/order-list-transaction'
  import listloan from '@/components/deal/order-list-loan-full';
  import capitalFlow from '@/components/deal/order-list-capitalflow-full';

  export default {
    name: 'order-list',
    components: {
      'hex-entrust': entrust,
      'hex-transaction': transaction,
      'hex-leverage-loan': listloan,
      'hex-leverage-capitalflow': capitalFlow,
    },
    props: {
      margin: '',
      symbleto: '',
      ordersymble: '',
      symbleParameString: '',
      dailyDetail: {
        type: Object,
        default: function () {
          return {}
        }
      },
    },
    watch: {
      'checked': function (val) {
        if (val) {
          this.isSelect = this.ordersymble;
        } else {
          this.isSelect = '';
        }
      }
    },
    data() {
      return {
        //交易记录
        checked: false,
        found: false,
        total: 0,
        applicationApproved: false,
        leverageCtidInfo:{},
        tradingRecord: [],
        changeState: 1,
        isSelect: '',
        marginPage: false
      }
    },
    created() {
    },
    mounted() {
      if (this.$userinfo.uid) {
        this.getLeverageInfo();
      }
      
      if(this.$route.path.indexOf('margin') >= 1){
        this.marginPage = true
      }else {
        this.marginPage = false
      }
    },
    methods: {
      //设置订单类型
      tabChange(num) {
        this.changeState = num
      },
      repaymentSuccess() {
        this.$refs.leverageloan.getUserDeal()
        this.$refs.leveragecap.getUserDeal()
        this.getLeverageInfo();
      },
      updatedata() {
        this.$refs.leverageloan.getUserDeal()
        this.$refs.leveragecap.getUserDeal()
      },
         /*获取对应杠杆账户资产信息*/
      getLeverageInfo() {
        const _self = this;
        let _ = [];

        _self.$store.dispatch('userborrowmoney_user_mortgageassets_infos', {ctid: 0}).then(({data}) => {
          if (data) {
            data.map((item, i) => {
              console.log(item,_self.ordersymble.toUpperCase())
                if (item.symblename === _self.ordersymble.toUpperCase()) {
                  if (Number(item.riskrate) <= 1.1 && Number(item.riskrate) > 0) {
                    _self.percentage = '100%';
                  } else if (Number(item.riskrate) > 1.1 && Number(item.riskrate) < 2) {
                    _self.percentage = `${((item.riskrate - 1.1) / (2 - 1.1)) * 100}%`;
                  } else {
                    _self.percentage = 0;
                  }

                  _self.leverageCtidInfo = item;
                  console.log(_self.leverageCtidInfo)
                }

                _.push(Object.assign({}, {ctid: item.ctid, riskrate: item.riskrate}))
            });

            _self.leverageCtidInfoCombine = _;
          }
        })
      },
    }
  }
</script>
