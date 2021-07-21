<style lang='less' scoped>
@import "../../static/styles/auth.less";
.head-title{
    font-size: 16px;
    color: #333333;
    font-weight: 600;
}
ul{
   margin: 50px 0;
   text-align: center;
 } 
.border-blue-disabled {

    pointer-events: none;
}
.cursor {
    cursor: not-allowed;
}
 ul li{
    display: inline-block;
    color: #9194a4;
    width: 80px;
    cursor: pointer;
    margin-right: 20px;
    border-radius: 4px;
    font-size: 32px;
    height: 60px;
    line-height: 60px;
    border: 1px solid #d1d3df;
 } 
 li:hover{
   color:#14a2a5;
 }
 li:active{
   background: #EDEDF2;
 }
 li.active {
   background: #14a2a5;
   color: #fff;
   border-color: #14a2a5;
 }
 p{
   border-top: 1px solid #d1d3df;
   padding-top: 10px ;
   font-size: 12px;
   text-align: center;
   color: #e09300;
 }
 .popup .mask-content{
   top: calc(50% - 272px);
 }
</style>

<template>
  <div class="popup repayment-popup">
    <div class="mask"></div>
    <div class="mask-content">
      <div class="head">
        <span class="title head-title"> {{$t('contract.leverage')}}</span>
        <span class="close" @click="close(0)">
          <img src="@/static/images/an_close.png" alt />
        </span>
      </div>
       <ul class="trade-unit-alert-inner-list"  :class="[{'cursor':leverageDisabled==true}]" >
         <li v-for="cvalue in cvalueData" :key="cvalue" :disabled="true" :class="[{'active':openType==cvalue},{'border-blue-disabled':leverageDisabled==true}]" @click="setCvalue(cvalue)">
           {{cvalue}}
         </li>
        </ul>
         <p> {{$t('contract.tip2')}}<br> {{$t('contract.tip3')}}</p>
    </div>
  </div>
  
</template>
<script>
export default {
  name: "in-popup",
  validations: {
  },
  computed: {},
  props: {
      dailyDetail: {
        type: Object,
        default: function () {
          return {}
        }
      },
      symblefrom:"",
      symbleto:""
  },
  data() {
    return {
      cvalueData:[],
      multiple:0,
      serachOrder: {
        pageindex: 1,
        pagesize: 5,
        orderstatus: '0,1',
      },
      openType:10,
      leverageDisabled:false
    };
  },
  watch: {
    symblename(newVal, oldVal) {
      if (newVal !== oldVal) {
      }
    }
  },
  mounted(){
    this.getcontractinfo()
    this.getUserDeal()
    this.getUserDeal2()
  },
  methods: {
    setCvalue(type) {
      this.$emit("confirmCurrencyLeverage", type);
      this.$emit("closePopup", 0);
      this.openType = type
    },
    close() {
      this.$v.$reset();
      this.$emit("closePopup", 0);
    },
    getcontractinfo() {
      this.$store.dispatch("com_constants_getconstantsinfo", {
        uid: this.$userinfo.uid,
        id: 1101092
      }).then(data => {
        if (data) {
          var cvalueData = JSON.parse(data.data.cvalue); 
          cvalueData.forEach(cur =>{
            if (this.symblefrom.toUpperCase() == cur.symbol) {
              this.cvalueData = cur.available_level_rate.split(","); //字符分割
            }
            
          });
        }
      });
    },
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
              var orderDetail = data[0].listhaveorderinfos;
              if (orderDetail.length > 0) {
                this.openType =  data[0].multiple
                this.$emit("reloadLeverage",this.openType)
                this.leverageDisabled = true
              }
            }
          });
        }
    },
         //获取委托订单
      getUserDeal2() {
        if (this.$userinfo.uid) {
          let serachOrder = Object.assign({}, this.serachOrder)
          this.isSelect ? serachOrder.symble = this.isSelect : delete serachOrder.symble;
          serachOrder.symble = this.symblefrom +'/' +this.symbleto
    

          serachOrder.itype = (this.margin === 'margin') ? 1 : 0;

          this.$store.dispatch('usercontract_order_search', serachOrder).then(data =>{
             if (data.data && data.data.pagedata.length > 0)  {
                  /*更新交易对明细*/
                  this.openType =  data.data.pagedata[0].multiple
                  this.leverageDisabled = true
                  this.$emit("reloadLeverage",this.openType)
                }
          })
        }
      }
  }
};
</script>

