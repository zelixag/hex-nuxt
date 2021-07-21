<template>
  <div class='popup amount-popup'>
    <div class="mask"></div>
    <div class='mask-content'>
      <div class="head">
        <span class='title head-title'>{{$t('leverage.transfer')}}</span>
        <span class="close" @click='close(0)'>
          <img src="@/static/images/an_close.png" alt="">
        </span>
      </div>

      <div class='info'>
        <div class="auth-content_group set-el-select-style">
          <p class="title clearfix">
            <span class="left">{{$t('wallet.coin')}}</span>
          </p>
          <el-select
            style="width: 100%"
            v-model="coinSelectModel"
            :popper-append-to-body="false"
            :placeholder="$t('formMenu.select')">

            <el-option
              v-for="(item,i) in contractsSelectList"
              :key="i"
              :label="global_get_uppercase(item.descriptions.split('/')[0])"
              :value="item.id+',' + item.fcurrencyid + ','+ item.canuseamount_contract + ',' + item.canuseamount_coin+','+item.descriptions.split('/')[0]"
            >
            </el-option>
          </el-select>
        </div>

        <div class="auth-content_group transfer">
          <el-row type="flex" justify="">
            <el-col :span="2">
              <span class="left cl_link">{{$t('leverage.from')}}</span>
            </el-col>

            <el-col :span="22">
              <div class="coinName animated">{{contractTransferType[0].label}}</div>
            </el-col>
          </el-row>
        </div>
        <div class="transfer-icon" v-loading="transferContractType" element-loading-spinner="">
          <img src="/images/leverage/in_out.png" alt="ILEX" @click="changeTransferType">
        </div>
        <div class="auth-content_group transfer" style="margin-top: 0">
          <el-row type="flex" justify="">
            <el-col :span="2">
              <span class="left cl_link">{{$t('leverage.To')}}</span>
            </el-col>

            <el-col :span="22">
              <div class="coinName animated">{{contractTransferType[1].label}}</div>
            </el-col>
          </el-row>
        </div>

        <div class="auth-content_group">
          <p class="title clearfix">
            <span class="left">{{$t('deal.count')}}</span>
            <span
              class="right fr">
              {{$t('leverage.Transferable')}}
              {{global_get_tofixed(amount, global_get_decimal(coinSelectModel.split(',')[4]).a)}}
              {{coinSelectModel.split(',')[4]}}
            </span>
          </p>

          <div class="deal_input">
            <form class="deal_input_num" novalidate>
              <input type="number" v-model="$v.amountModel.$model" :disabled="disabledInput?'disabled':false"
                     @input="updateInput"/>
            </form>

            <p class="deal_input_tip">
              <span class="tip_title">{{coinSelectModel.split(',')[4]}}</span>

              <span class="tip_all" @click="setAllGo()">{{$t('manage.all')}}</span>
            </p>
          </div>
        </div>

        <button class='commitBtn button-loading--por'
                :disabled="contractTransferType[0].type == 4 && leverageDisabled == true"
                v-loading="loading"
                @click="confirmToTransferContract">{{$t("formMenu.confirm")}}
        </button>
      </div>
    </div>
  </div>
</template>
<script>
  import {required} from 'vuelidate/lib/validators';

  export default {
    name: "contract-transfer-popup",
    validations: {
      amountModel: {
        $ismin(val) {
          val = parseFloat(val)

          let _state = true

          if (val > 0) {
            _state = false
          }
          return _state
        }
      },
      coinSelectModel: {
        required
      }
    },
    computed: {},
    props: ['contractsSelectList','systemName'],
    data() {
      return {
        timer: null,
        loading: false,
        disabledInput: true,
        transferContractType: false,
        amount: '',
        currencyPair: '',
        currencyChoice: '',
        coinSelectModel: '',
        amountModel: '',
        availableBalance: 0,
        storeCurrencyData: [],
        leverageDisabled:false,
        serachOrder: {
          pageindex: 1,
          pagesize: 5,
          orderstatus: '0,1'
        },
        contractTransferType: [
          {label: this.$t('contract.ccAcc'), type: 3},
          {label: this.$t('contract.contractAcc'), type: 4}
        ],
      }
    },
    subscribe() {
    },
    watch: {
      'coinSelectModel': function (val) {
        if (val) {
          this.disabledInput = false;
          this.amountModel = "";

          if (this.contractTransferType[0].type === 3) {
            this.amount = this.global_get_tofixed(Number(val.split(',')[3]) < 0 ? 0 : val.split(',')[3], this.global_get_decimal(val.split(',')[4]).a);
          } else {
            this.amount = this.global_get_tofixed(val.split(',')[2], this.global_get_decimal(val.split(',')[4]).a);
          }
        }
      },
      'systemName': function (val) {
      },
      'contractTransferType': function (val) {
        if (val) {
          this.amountModel = "";
          /*超过17位数字的运算 js会出问题*/
          const P1 = Number(this.coinSelectModel.split(',')[2]);
          const P2 = Number(this.coinSelectModel.split(',')[3]);
          const P3 = this.coinSelectModel.split(',')[4];

          if (val[0].type === 3) {
            this.amount = this.global_get_tofixed(P2 < 0 ? 0 : P2, this.global_get_decimal(P3).a);
          } else {
            this.amount = this.global_get_tofixed(P1 < 0 ? 0 : P1, this.global_get_decimal(P3).a);
          }
        }
      },
    },
    methods: {
      updateInput(e) {/*监控数值边界*/
        let num = e.target.value;

        if (num > Number(this.amount)) {
          this.amountModel = Number(this.amount);
        } else if (num < 0) {
          this.amountModel = 0;
        }
      },
      setAllGo() {/*是否全部划转*/
        if (this.coinSelectModel) {
          const P1 = Number(this.coinSelectModel.split(',')[2]);
          const P2 = Number(this.coinSelectModel.split(',')[3]);
          const P3 = this.coinSelectModel.split(',')[4];

          if (this.contractTransferType[0].type === 3) {
            this.amountModel = P2 <= 0 ? 0 : P2;
          } else {
            this.amountModel = P1 <= 0 ? 0 : P1;
          }
        } else {
          this.$store.commit('set_message', {type: 'error', text: this.$t('Waddress.selectCion')});

          return;
        }
      },
      confirmToTransferContract() {
        this.loading = true;
        const amountModel = this.$v.amountModel;
        const coinSelectModel = this.$v.coinSelectModel;

        amountModel.$touch();
        coinSelectModel.$touch();

        if (coinSelectModel.$invalid) {
          this.$store.commit('set_message', {type: 'error', text: this.$t('Waddress.selectCion')});

          this.loading = false;

          return;
        }

        if (amountModel.$ismin) {
          this.$store.commit('set_message', {type: 'error', text: this.$t('leverage.amountZero')});

          this.loading = false;

          return;
        }

        /*this.contractTransferType[0].type  币币 合约/合约 币币 转账类型值
        * this.coinSelectModel.split(',')[0] 交易对id
        * this.coinSelectModel.split(',')[1] 币种id
        * this.coinSelectModel.split(',')[2] 合约账户某币种可用余额
        * this.coinSelectModel.split(',')[3] 币币账户某币种可用余额
        * this.coinSelectModel.split(',')[4] 币名
        * */

        this.$emit("confirmToTransferContract", {
          amount: this.amountModel,
          ctid: this.coinSelectModel.split(',')[0],
          currencyid: this.coinSelectModel.split(',')[1],
          itype: this.contractTransferType[0].type
        });
        setTimeout(() => {
          this.$emit('getSymbleInfo');
        }, 200);
        
      },
      getUserDeal() {
        if (this.$userinfo.uid) {
          const params = Object.assign({},{
              ctid: this.coinSelectModel.split(',')[0],
              uid: this.$userinfo.uid,
              key: this.$userinfo.secretkey
            }
          );
          this.$store.dispatch("usercontract_user_contractassets_infos", params).then(({ data }) => {
            if (data && data.length > 0) {
              var orderDetail = data[0].listhaveorderinfos;
              if (orderDetail.length > 0) {
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
    
          serachOrder.symble = this.coinSelectModel.split(',')[4].toLowerCase()+"/"+"yx"


          serachOrder.itype = 0;

          this.$store.dispatch('usercontract_order_search', serachOrder).then(data =>{
            console.log("aaa",data)
             if (data.data && data.data.pagedata.length > 0)  {
                  this.leverageDisabled = true
                }
          })
        }
      },
      close() {
        this.loading = false;
        this.amountModel = '';
        this.coinSelectModel= this.contractsSelectList[0].id+',' + this.contractsSelectList[0].fcurrencyid + ','+ this.contractsSelectList[0].canuseamount_contract + ',' + this.contractsSelectList[0].canuseamount_coin+','+this.contractsSelectList[0].descriptions.split('/')[0]
        this.$v.$reset();

        this.$emit('closePopup');
        this.$emit('getContractAssetsInfo');
      },
      closeLoading() {
        this.loading = false;
      },
      changeTransferType() {/*改变划转类型*/
        this.transferContractType = true;
        this.contractTransferType.reverse();

        document.getElementsByClassName('coinName')[0].classList.add('fadeIn');
        document.getElementsByClassName('coinName')[1].classList.add('fadeIn');

        this.timer = setTimeout(() => {
          document.getElementsByClassName('coinName')[0].classList.remove('fadeIn');
          document.getElementsByClassName('coinName')[1].classList.remove('fadeIn');

          this.transferContractType = false;
        }, 800)
      }
    },
    beforeDestroy() {
      clearInterval(this.timer);
      this.timer = null;
    },
    mounted() {
        var coinModel = this.contractsSelectList.find(coin => coin.fcurrencyname == this.systemName)
        var val = coinModel.id+',' + coinModel.fcurrencyid + ','+ coinModel.canuseamount_contract + ',' + coinModel.canuseamount_coin+','+coinModel.descriptions.split('/')[0]
        setTimeout(() => {
          this.coinSelectModel = coinModel.id + ',' + coinModel.fcurrencyid + ','+ coinModel.canuseamount_contract + ',' + coinModel.canuseamount_coin+','+coinModel.descriptions.split('/')[0]
        }, 800);
        this.disabledInput = false;
        this.amountModel = "";
        this.getUserDeal()
        this.getUserDeal2()
        if (this.contractTransferType[0].type === 3) {
          this.amount = this.global_get_tofixed(Number(val.split(',')[3]) < 0 ? 0 : val.split(',')[3], this.global_get_decimal(val.split(',')[4]).a);
        } else {
          this.amount = this.global_get_tofixed(val.split(',')[2], this.global_get_decimal(val.split(',')[4]).a);
        }
    }
  };
</script>
<style lang='less' scoped>
  @import "../../static/styles/auth.less";
  @import "../../static/styles/rewrite.less";

  .cl_link {
    color: @cl_link !important;
  }

  .popup {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 10000;
  }

  .el-input__inner {
    border-color: #bbb
  }

  .close {
    cursor: pointer
  }

  .popup .mask-content span {
    font-size: 12px;
    height: inherit;
  }

  .popup .mask-content .left, .popup .mask-content .right {
    color: rgba(102, 102, 102, 1);
  }

  .popup .mask-content .right {
    color: #aaa;
    font-weight: normal;
  }

  .auth-content_group input {
    color: rgb(51, 51, 51);
  }

  .auth-content_group .form_error {
    font-size: 12px;
    margin-top: 4px;
    color: #CD4559;
  }

  .deal_input {
    height: 42px;
    border-radius: 2px;
    border: 1px solid #dcdfe6;
    display: flex;
    flex-direction: row;
    .deal_input_num {
      flex: auto;
      padding: 0 15px;
      line-height: 38px;
      input {
        font-size: 16px;
        width: 100%;
        border: none;
        padding-left: 0;
        height: 30px;
        line-height: 30px;
      }
    }
    .deal_input_tip {
      line-height: 40px;
      font-size: 0;
    }
    .tip_title, .tip_all {
      padding: 4px 20px;
      font-size: 14px;
    }
    .tip_title {
      color: #999999 !important;
      border-right: 1px solid #EEEEEE
    }
    .tip_all {
      color: @cl_link !important;
      cursor: pointer;
    }
  }

  .coinName {
    height: 40px;
    line-height: 40px;
    padding-left: 10px;
    color: #666;
    font-size: 15px;
    width: 400px;
  }

  .head span.title {
    font-size: 16px;
    color: #333333;
    font-weight: 600;
    display: initial;
  }

  .commitBtn {
    cursor: pointer;
  }
  .commitBtn:disabled{
    background-color: #aaaaaa;
    cursor: not-allowed;
  }
  .amount-set {
    font-size: 12px;
    color: #aaaaaa;
  }

  .transfer {
    .left {
      line-height: 40px;
    }

    .coinName {
      width: 100%;
    }
  }

  .transfer-icon {
    text-align: right;
    img {
      width: 36px;
      vertical-align: middle;
      cursor: pointer;
    }
  }

  .currency-type {
    background-color: #f0f0f0;
    text-align: center;
    color: #aaa;
    height: 40px;
    line-height: 40px;
    font-size: 12px;
    cursor: pointer;
  }

  .currency-type.active {
    background: url('/images/leverage/sign.png') no-repeat right bottom @cl_link;
    color: #fff;
  }

  @-webkit-keyframes fadeIn {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }

  .fadeIn {
    -webkit-animation-name: fadeIn;
    animation-name: fadeIn;
  }

  .animated {
    -webkit-animation-duration: 1s;
    animation-duration: 1s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
  }

</style>
