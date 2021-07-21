<style scoped lang="less">
  @import "css/order-list";

  .hex_table_body {
    // color: #5E6573;
    // &:hover {
    //   background: #f5f5f8;
    // }

    .repayment {
      /*padding: 2px 8px;*/
      /*background: linear-gradient(135deg, #14a2a5 0%, #14a2a5 100%);*/
      color: rgb(111, 143, 241);
      cursor: pointer;
    }

    .repayment_no {
      color: #c9c8cc;
      background: transparent;
      padding: 0;
    }
  }
  // .hex_table_header.br{
  //   border-bottom: 1px solid #dbdaea;
  //   }
  .money-exchange-content.exchange-full .exchange-record .traded_table_content {
    overflow: auto;
  }
    .hex_table th {
  line-height: 18px;
  padding-top: 7px;
  padding-bottom: 7px;
}
  .hex_table_body{
  line-height: 18px;
}
.hex_table_body td{
  padding-top: 11px;
  padding-bottom: 11px;
}
</style>

<template>
  <div class="traded">
    <div class="traded-block">
      <div class="traded_table_content">
        <table class="hex_table abc">
          <thead class="hex_table_header padding br">
          <tr>
            <th class="lt">
              <div>{{$t('leverage.flow')}}</div>
            </th>
            <th class="lt">
              <div>{{$t('leverage.Currency')}}</div>
            </th>
            <th class="rt">
              <div>{{$t('leverage.Tradetype')}}</div>
            </th>
            <th class="rt">
              <div>{{$t('leverage.totalAssetsBeforeTheChange')}}</div>
            </th>
            <th class="rt">
              <div>{{$t("leverage.thisNumberOfTimes")}}</div>
            </th>
            <th class="rt">
              <div>{{$t('leverage.totalAssetsAfterTheChange')}}</div>
            </th>
            <th class="rt">
              <div>{{$t('leverage.CreateTime')}}</div>
            </th>
          </tr>
          </thead>
          <tbody class="deal-tbody">

          <tr class="hex_table_body padding"
              v-for="(coins,index) in orderDetail"
              :key="index">
            <td class="lt">
              {{coins.id}}
            </td>
            <td class="lt">
             {{global_get_uppercase(coins.currencyname)}}
            </td>
            <td class="rt">
              {{coins.typename}}
            </td>
            <td class="rt">
              {{global_get_tofixed(coins.amountbefore, global_get_decimal(coins.currencyname).a)}}
            </td>
            <td class="rt">
              {{global_get_tofixed(coins.amount, global_get_decimal(coins.currencyname).a)}}
            </td>
            <td class="rt">
              {{global_get_tofixed(coins.amountafter, global_get_decimal(coins.currencyname).a)}}
            </td>
            <td class="rt">
              {{getRecordTime(coins)}}
            </td>
  
          </tr>
          </tbody>
        </table>
      </div>

      <div class="loadingPic deal" v-hex-loading="loading" v-if="loading"></div>

      <!--无数据&&未登录占位-->
      <div class="anonymous anonymous_s" v-if="found">
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
  import repaymentPopup from '../security/repayment-popup';

  export default {
    name: 'articles',
    components: {
      'repayment-popup': repaymentPopup,
    },
    data() {
      return {
        loading: true,
        found: false,
        popupstate: false,
        id: '',
        loancurrencyname: '',
        interest: 0,//支付利息
        loanamount: 0,//应还数量
        loancurrencyamount: 0,//贷款数量
        total: 0,
        page: {
          pageindex: 1,
          pagesize: 20,
        },
        orderDetail: [],
        currencyData: [],
        link:"",
      }
    },
    props: ['isSelect','applicationApproved', 'leverageCtidInfo', 'symbleParameString'],
    watch: {
      applicationApproved(newVal, oldVal) {
        if (newVal) {
          this.getUserDeal()
        }
      },
      leverageCtidInfo(newVal, oldVal) {
        if (newVal) {

        }
      },
      isSelect(newVal, oldVal) {
        this.getUserDeal()
      },
      '$store.state.hex_lang.locale': function (val) {
        this.getUserDeal()
      },
      symblename(newVal, oldVal) {
        if (newVal) {
  
        }
      }
    },
    computed: {
      hedge: function () {
        let allbtc = 0;

        this.currencyData.forEach((item) => {
          allbtc += this.$store.getters.get_btc_exchange_rate(item.currency.currencyname, item.financingamount)
        });
        return this.global_get_tofixed(allbtc, this.global_get_decimal('btc').a);
      },
    },
    mounted() {
      // 判断访问的页面 
      if(this.$route.path.indexOf('margin') >= 1){
        this.link = "margin"
      }else {
        this.link = "contract"
      }
      this.getUserDeal();
      this.getWalletInfo();

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

      //获得账户的对冲金额
      getWalletInfo() {
        const _self = this;
        if (this.$userinfo.uid) {  
          _self.$store.dispatch('user_assets_get', {
            assetstype: 1,
            rows: 100
          }).then(({data}) => {
            if (data) {
              this.currencyData = data;
            }
          })
        }
      },
      getRecordTime: function (coins) {
        return (coins.createtime) ? this.global_get_local_time(coins.createtime).format('YYYY-MM-DD HH:mm:ss') : '--'
      },
      getPaidTime: function (paymenttime) {
        return paymenttime ? this.global_get_local_time(paymenttime).format('YYYY-MM-DD HH:mm:ss') : '--'
      },
      handChange(val) {
        this.getUserDeal(val)
      },
      getUserDeal(pageIndex) {
        if (this.$userinfo.uid) {
          var type
          if (this.link == "contract") {
            type = -2
          } else {
            type = -1
          }
          var postData = Object.assign({}, this.page, {type: type, uid: this.$userinfo.uid, key: this.$userinfo.secretkey});
          if (this.isSelect !="") {
            postData.oid = this.leverageCtidInfo.id
          }
          console.log(postData,this.link)
          pageIndex ? postData.pageindex = pageIndex : postData.pageindex = 1;
          this.$store.dispatch('userborrowmoney_assets_record_getlist', postData).then(({data}) => {
            if (data) {
              if (this.isSelect !="") {
                this.orderDetail = data.pagedata.filter((item) => {
                  return this.global_get_uppercase(item.currencyname) == this.isSelect.split('/')[0].toUpperCase()
                })
              }else{
                this.orderDetail = data.pagedata;
              }
              this.total = data.totalitemcount;
              this.found = false;
              
            } else {
              this.found = true;
              this.total = 0;
              this.orderDetail = [];
            }
            this.loading = false;
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
