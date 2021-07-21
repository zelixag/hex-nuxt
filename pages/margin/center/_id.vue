<template>
  <div class="hex-flex">
    <div class="leverage hex-flex_auto">
      <div class='w1200 pdt20 pdb20 clearfix'>
        <div class='leverage-token'>
          <h2>
            <nuxt-link tag="a" to="/person/margin">{{$t('wallet.leveraged')}}</nuxt-link>
            <span class="text-arr-right">></span> {{$t('leverage.management')}}
            <nuxt-link class='borrow-money fr'
                       :to="{path:`/margin/${symblefrom.toLowerCase()}_${symbleto.toLowerCase()}`}">
              {{$t('leverage.trade')}}
            </nuxt-link>
          </h2>
        </div>

        <div class="clearfix">
          <div class='fl'>
            <hex-coinlist-leverage
              @getCtid="getCtid"
              :symblefrom="symblefrom"
              :leverageCtidInfoCombine="leverageCtidInfoCombine"
              :symbleto="symbleto">
            </hex-coinlist-leverage>
          </div>

          <div class="right">
            <div class='leverage-account'>
              <p><b>{{symblefrom}}</b>/{{symbleto}} {{$t('wallet.leveraged')}} <span
                class="toast-icon"/>{{$t('leverage.triggerBurst')}}</p>
            </div>
            <div class="leverage-operate">
              <el-row type="flex" justify="space-around">
                <el-col :span="6">
                  <dl>
                    <dt>{{$t('wallet.generalAssets') + symblefrom}}</dt>
                    <template>
                      <dd>{{leverageCtidInfo.famount ? global_get_tofixed( Number(leverageCtidInfo.famount) +leverageCtidInfo.ffrozenamount,global_get_decimal(leverageCtidInfo.fcurrencyname).a) : 0}} <span
                        class="handle"
                        @click="showPop(leverageCtidInfo,symblefrom)">{{$t('leverage.into')}}</span>
                         <span
                        class="handle" @click="showPopOut(leverageCtidInfo,symblefrom)">{{$t('leverage.transferOut')}}</span>
                      </dd>
                    </template>
                  </dl>
                </el-col>

                <el-col :span="6">
                  <dl>
                    <dt>{{$t('wallet.generalAssets') + symbleto}}</dt>
                    <template>
                      <dd>{{leverageCtidInfo.tamount ? global_get_tofixed(Number(leverageCtidInfo.tamount) + leverageCtidInfo.tfrozenamount, global_get_decimal(leverageCtidInfo.tcurrencyname).a) : 0}} <span
                        class="handle" @click="showPop(leverageCtidInfo,symbleto)">{{$t('leverage.into')}}</span>
                       <span
                        class="handle" @click="showPopOut(leverageCtidInfo,symbleto)">{{$t('leverage.transferOut')}}</span>
                      </dd>
                    </template>
                  </dl>
                </el-col>

                <el-col :span="6">
                  <dl>
                    <dt>{{$t('leverage.explosivePrice')}}({{symbleto}})</dt>
                    <dd>{{setExplosionPrice(leverageCtidInfo.explosionprice, symbleto)}}</dd>
                  </dl>
                </el-col>

                <el-col :span="6">
                  <dl>
                    <dt>{{$t('leverage.riskRate')}}
                      <el-tooltip placement="top">
                        <div slot="content">{{$t('leverage.riskRate1')}}</div>
                        <el-button><i class="tooltip-icon"></i></el-button>
                      </el-tooltip>
                    </dt>
                    <dd class="pdt5px">
                      <p class="text-right"
                         v-if="Number(leverageCtidInfo.riskrate)>=2||Number(leverageCtidInfo.riskrate)==0">
                        {{$t('leverage.risk')}}</p>
                      <p class="text-right"
                         v-if="Number(leverageCtidInfo.riskrate)<2&&Number(leverageCtidInfo.riskrate)>0">
                        {{$t('leverage.haveRisk')}}</p>
                      <div class="leverage-progress">
                        <div class="leverage-progress-text">110%</div>
                        <div class="leverage-progress-bar">
                          <div class="leverage-progress-bar_outer">
                            <div class="leverage-progress-bar_inner" :style="{width:percentage}">
                            </div>
                            <div class="leverage-progress-bar_inner_text">
                              <small v-if="(leverageCtidInfo.riskrate)&&Number(leverageCtidInfo.riskrate)<2">
                                {{`${global_get_tofixed(leverageCtidInfo.riskrate*100,0)}%`}}
                              </small>
                            </div>
                          </div>
                        </div>
                        <div class="leverage-progress-text">200%</div>
                      </div>
                    </dd>
                  </dl>
                </el-col>
              </el-row>

              <div class="el-divider--horizontal el-divider"/>

              <div class="leverage-operate-borrow">
                <el-row type="flex" justify="space-between">
                  <el-col :span="11">
                    <h2>{{symblefrom}} {{$t('leverage.borrowing')}}</h2>
                    <el-row type="flex" justify="space-between">
                      <el-col :span="8">
                        <dl>
                          <dt>{{$t('leverage.borrowed')}}</dt>
                          <dd>
                            {{leverageCtidInfo.fborrowamount ? global_get_tofixed(leverageCtidInfo.fborrowamount, dcs.a) : 0}}
                          </dd>
                        </dl>
                      </el-col>

                      <el-col :span="8">
                        <dl>
                          <dt>{{$t('leverage.canBorrow')}}
                            <el-tooltip placement="top">
                              <div slot="content">{{$t('leverage.canBorrow1')}}</div>
                              <el-button><i class="tooltip-icon"></i></el-button>
                            </el-tooltip>
                          </dt>
                          <dd>
                            {{leverageCtidInfo.fcanborrowamount ? global_get_tofixed(leverageCtidInfo.fcanborrowamount, dcs.a) : 0}}
                          </dd>
                        </dl>
                      </el-col>

                      <el-col :span="8">
                        <dl>
                          <dt>{{$t('leverage.dailyInterestRate')}}
                            <el-tooltip placement="top">
                              <div slot="content">
                                {{$t('leverage.dailyInterestRate1')}}<br/>{{$t('leverage.dailyInterestRate2')}}
                              </div>
                              <el-button><i class="tooltip-icon"></i></el-button>
                            </el-tooltip>
                          </dt>
                          <dd>{{borrowrate}}</dd>
                        </dl>
                      </el-col>
                    </el-row>
                    <!--application A-->
                    <hex-loan
                      :dcs='dcs'
                      :distinguish="from"
                      :symble="symblefrom"
                      @loan:success="loanSuccess"
                      :canLoanCurrencyInfo="leverageCtidInfo"></hex-loan>
                  </el-col>

                  <el-col :span="11">
                    <h2>{{symbleto}} {{$t('leverage.borrowing')}}</h2>
                    <el-row type="flex" justify="space-between">
                      <el-col :span="8">
                        <dl>
                          <dt>{{$t('leverage.borrowed')}}</dt>
                          <dd>
                            {{leverageCtidInfo.tborrowamount ? global_get_tofixed(leverageCtidInfo.tborrowamount, dcs.a) : 0}}
                          </dd>
                        </dl>
                      </el-col>

                      <el-col :span="8">
                        <dl>
                          <dt>{{$t('leverage.canBorrow')}}
                            <el-tooltip placement="top">
                              <div slot="content">{{$t('leverage.canBorrow1')}}</div>
                              <el-button><i class="tooltip-icon"></i></el-button>
                            </el-tooltip>
                          </dt>
                          <dd>
                            {{leverageCtidInfo.tcanborrowamount ? global_get_tofixed(leverageCtidInfo.tcanborrowamount, dcs.a) : 0}}
                          </dd>
                        </dl>
                      </el-col>

                      <el-col :span="8">
                        <dl>
                          <dt>{{$t('leverage.dailyInterestRate')}}
                            <el-tooltip placement="top">
                              <div slot="content">
                                {{$t('leverage.dailyInterestRate1')}}<br/>{{$t('leverage.dailyInterestRate2')}}
                              </div>
                              <el-button><i class="tooltip-icon"></i></el-button>
                            </el-tooltip>
                          </dt>
                          <dd>{{borrowrate}}</dd>
                        </dl>
                      </el-col>
                    </el-row>
                    <!--application B-->
                    <hex-loan
                      :dcs='dcs'
                      :distinguish="to"
                      :symble="symbleto"
                      @loan:success="loanSuccess"
                      :canLoanCurrencyInfo="leverageCtidInfo"></hex-loan>
                  </el-col>
                </el-row>
              </div>
            </div>
          </div>
        </div>
       
        <!--当前申请记录-->
        <div class="leverage-loan-record-title">
          <a href="javascript:;" @click="msg=0" :class="{'cur':msg===0}">{{$t('leverage.currentApplication')}}</a>
          <a href="javascript:;" @click="msg=1" :class="{'cur':msg===1}">{{$t('leverage.capitalFlow')}}</a>
        </div>
        <div class="leverage-loan-record" v-if="msg===0">
          <hex-leverage-loan @repayment:success="repaymentSuccess" :leverageCtidInfo="leverageCtidInfo" :applicationApproved="applicationApproved"/>
        </div>
        <div class="leverage-loan-record" v-if="msg===1">
          <hex-leverage-capitalflow @repayment:success="repaymentSuccess" :leverageCtidInfo="leverageCtidInfo" :applicationApproved="applicationApproved"/>
        </div>
      </div>
    </div>

    <hex-in
      :symblename="symblename"
      :whichOne="whichOne"
      @confirmToRepayment="confirmToRepayment"
      @closePopup="closePopup"
      v-show="pop_in"
      ref="child_in"/>
    <hex-out
      :symblename="symblename"
      :whichOne="whichOne"
      :leverage_assets_data="leverage_assets_data"
      @confirmToRepayment="confirmToRepayment"
      @closePopup="closePopupOut"
      v-show="pop_out"
      ref="child_out"/>
  </div>
</template>
<script>
  import coinList from '@/components/deal/leverage-coin-list';
  import inPop from '@/components/security/in-popup';
  import outPop from '@/components/security/out-popup';
  import listloan from '@/components/deal/order-list-loan';
  import capitalFlow from '@/components/deal/order-list-capitalflow';
  import loans from '@/components/margin/loans';

  export default {
    name: 'articles',
    components: {
      'hex-in': inPop,
      'hex-out': outPop,
      'hex-loan': loans,
      'hex-coinlist-leverage': coinList,
      'hex-leverage-loan': listloan,
      'hex-leverage-capitalflow': capitalFlow,
    },
    data() {
      return {
        id: '',
        to: 'to',
        msg: 0,
        from: 'from',
        pop_in: false,
        pop_out:false,
        loading: false,
        symblename: "",
        whichOne: "",
        ctid: 0,
        borrowrate: 0,
        percentage: 0,
        leverage_assets_data: {},
        canBorrowCurrencyFrom: 0,//币种A可借金额
        canBorrowCurrencyTo: 0,//币种B可借金额
        amountLoanApplied: 0,
        leverageCtidInfo: {},
        leverageCtidInfoCombine: [],
        applicationApproved: false
      }
    },
    computed: {
      ordersymble: function () {
        if (!this.$route.params.id) return '';
        return this.$route.params.id.replace('_', '/');
      },
      symbleParameArray: function () {
        if (!this.$route.params.id) return null
        const ary = this.$route.params.id.split('_')
        return ary.length != 2 ? null : ary
      },
      //获取产品
      symblefrom: function () {
        return this.symbleParameArray ? this.symbleParameArray[0].toUpperCase() : '--'
      },
      //获取货币
      symbleto: function () {
        return this.symbleParameArray ? this.symbleParameArray[1].toUpperCase() : '--'
      },
    },
    methods: {
      loanSuccess() {
        this.applicationApproved = true;
        this.getLeverageInfo(this.id);
      },
      repaymentSuccess() {
        this.getLeverageInfo(this.id);
      },
      /*获取对应杠杆账户资产信息*/
      getLeverageInfo(id) {
        const _self = this;
        let _ = [];

        _self.$store.dispatch('userborrowmoney_user_mortgageassets_infos', {ctid: 0}).then(({data}) => {
          if (data) {
            data.map((item, i) => {
                if (item.ctid === id) {
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
      getCtid(id, rate) {
        this.id = id;
        this.getLeverageInfo(id);
        this.borrowrate = `${rate * 100}%`;
      },
      closePopup() {
        this.pop_in = !this.pop_in;
      },
      closePopupOut() {
        this.pop_out = !this.pop_out;
      },
      showPop(data, which) {
        this.pop_in = !this.pop_in;
        this.ctid = data.ctid;
        this.symblename = data.symblename;
        this.whichOne = which;
      },
      showPopOut(data, which) {
        this.pop_out = !this.pop_out;
        this.ctid = data.ctid;
        this.symblename = data.symblename;
        this.leverage_assets_data = data;
        this.whichOne = which;
      },
      confirmToRepayment(_this) {
        const _selt = this;

        const params = Object.assign({}, _this, {
          ctid: this.ctid,
          uid: this.$userinfo.uid,
          key: this.$userinfo.secretkey
        });


        _selt.$store.dispatch('userborrowmoney_user_transfer_inorout', params).then((res) => {
          if (res.data) {
            _selt.$store.commit('set_message', {
              type: 'ok', text: res.msg
            });

            _selt.getLeverageInfo(_selt.id);
            /*更新资产*/
            _selt.pop_in ? _selt.$refs.child_in.close() : _selt.$refs.child_out.close();
            // window.location.reload()
          } else {
            _selt.pop_in ? _selt.$refs.child_in.close() : _selt.$refs.child_out.close();
            _selt.pop_in ? _selt.$refs.child_in.closeLoading() : _selt.$refs.child_out.closeLoading();
          }
        })
      },
      setExplosionPrice(n, m) {
        if (Number(n) <= 0) {
          return 0;
        } else {
          return this.global_get_tofixed(n, this.global_get_decimal(m).a);
        }
      }
    },
    created() {
      this.dcs = this.global_get_decimal(this.ordersymble)//对应交易对的小数位信息
    },
    mounted() {

    },
    /*根据路由判断是否存在该交易对 不存在则跳转/ 存在则返回该交易对的信息 如果需要使用这个信息 请保证是 长连接 因为是实时更新的数据 当前组件未加入长连接相关代码*/
    async asyncData({store, params, redirect}) {
      if (!store.state.hex_uid.value) {
        redirect('/login')

        return
      }

      if (!params.id) {
        return
      }

      const symble = params.id.replace('_', '');

      const daily = await store.dispatch('quotation_daily_get', {symble: symble});

      if (daily.code == 0) {
        redirect('/')
      }

      return
    }
  }

</script>
<style lang='less' scoped>
  .right {
    width: 820px;
  }

  .leverage {
    .pdt5px {
      padding-top: 5px !important;
    }
    .text-right {
      text-align: right
    }
    background: #f5f5f8;
    font-size: 14px;
    color: #333;
    .fl {
      background-color: #fff;
      width: 360px;
      margin-right: 20px;
    }

    .text-arr-right {
      font-weight: 200;
      font-size: 14px;
      padding: 0 10px;
    }

    .leverage-token {
      background: #fff url(../../../static/images/leverage/leverage.svg) no-repeat 4px;
      background-size: 36px auto;
      h2 {
        font-size: 18px;
        font-weight: 400;
        height: 54px;
        margin-bottom: 20px;
        line-height: 36px;
        padding: 9px 9px 9px 40px;
        a:nth-of-type(1) {
          color: #14a2a5;
        }
      }
    }

    .leverage-account {
      color: #5E6573;
      background: #fff;
      padding: 8px 20px;
      margin-bottom: 4px;
    }
    .leverage-operate {
      padding: 15px 20px;
      background: #fff;
      dt {
        color: #aaa;
      }
      dd {
        font-size: 12px;
        padding-top: 15px;
      }

      .handle {
        color: #14a2a5;
        cursor: pointer;
      }

      .leverage-operate-borrow {
        dl {
          font-size: 12px;
        }
        h2 {
          font-weight: normal;
          margin-bottom: 15px;
        }
      }
    }
    .leverage-loan-record-title, .leverage-loan-record {
      color: #5E6573;
      background: @cl_fff;
    }
    .leverage-loan-record-title, .leverage-loan-record {
      padding: 0;
      margin-top: 20px;
    }
    .leverage-loan-record-title a{
        font-size: 14px;
        font-weight: 600;
        color: #5e6573;
        padding: 0 10px;
        line-height: 36px;
        display: inline-block;
    }
    .leverage-loan-record-title a.cur{
        color: #14a2a5;
        border-bottom: 2px solid #14a2a5;
    }
    .leverage-loan-record {
      padding: 8px 0;
      margin-top: 4px;
    }
    .toast-icon {
      background: url(../../../static/images/leverage/toast.svg) no-repeat;
      display: inline-block;
      width: 16px;
      height: 16px;
      vertical-align: sub;
    }

    .tooltip-icon:hover {
      background-image: url("../../../static/images/trade/tip-active.svg");
    }
    .tooltip-icon {
      display: inline-block;
      width: 14px;
      height: 14px;
      vertical-align: bottom;
      background-repeat: no-repeat;
      background-size: 14px 14px;
      background-position: center;
      background-image: url("../../../static/images/trade/tip.svg");
      cursor: pointer;
    }
    .el-button {
      padding: 0;
      border: none;
      background: #fff
    }

    .el-divider--horizontal {
      display: block;
      height: 1px;
      width: 100%;
      margin: 10px 0 24px 0;
    }
    .el-divider {
      background-color: #eee;
      position: relative;
    }
    .leverage-progress {
      position: relative;
      line-height: 1;
      .leverage-progress-bar {
        display: inline-block;
        vertical-align: middle;
        width: 62%;
        box-sizing: border-box;
        .leverage-progress-bar_outer {
          height: 15px;
          border-radius: 100px;
          background-color: #ebeef5;
          overflow: hidden;
          position: relative;
          vertical-align: middle;
          .leverage-progress-bar_inner {
            background-color: #e6a23c;
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            text-align: right;
            border-radius: 100px;
            line-height: 1;
            white-space: nowrap;
          }
          .leverage-progress-bar_inner_text {
            position: absolute;
            left: 6px;
            top: 0;
            line-height: 14px;
            color: @cl_fff;
            small {
              color: red;
            }
          }
        }
      }
      .leverage-progress-text {
        font-size: 12px;
        color: #606266;
        display: inline-block;
        vertical-align: middle;
        line-height: 1;
      }
    }
    .borrow-money {
      text-align: center;
      height: 36px;
      background: linear-gradient(135deg, #14a2a5 0%, #14a2a5 100%);
      font-size: 14px;
      color: white;
      position: relative;
      padding: 0 20px;
      border-radius: 4px;
    }

    @import "loan";
  }
  .el-col-11 {
    width: 48%!important;
}
</style>
