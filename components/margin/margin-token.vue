<template>
  <!--账户杠杆信息-->
  <div class="leverage-account_block">
    <div class="leverage-account_block-bg">
      <el-popover
        popperClass="test"
        width="540"
        placement="bottom"
        trigger="hover">
        <div>
          <el-row type="flex" justify="space-between">
            <el-col :span="6">
              <p>
                <small>
                  {{$t('wallet.usable')}} {{symblefrom.toUpperCase()}}
                </small>
              </p>
              <p>
                <small>
                  {{$t('wallet.freeze3')}} {{symblefrom.toUpperCase()}}
                </small>
              </p>
              <p>
                <small>
                  {{$t('leverage.canBorrow')}} {{symblefrom.toUpperCase()}}
                </small>
              </p>
              <p>
                <small>
                  {{$t('leverage.borrowed')}} {{symblefrom.toUpperCase()}}
                </small>
              </p>
            </el-col>
            <el-col :span="6" style="border-right: 1px dashed #aaa;text-align: right;padding-right: 20px;">
              <p>
                <small>
                  {{leverageCtidInfo.famount ? global_get_tofixed(leverageCtidInfo.famount, dcs.a) : 0}}
                </small>
              </p>
              <p>
                <small>
                  {{leverageCtidInfo.ffrozenamount ? global_get_tofixed(leverageCtidInfo.ffrozenamount, dcs.a) : 0}}
                </small>
              </p>
              <p>
                <small>
                  {{leverageCtidInfo.fcanborrowamount ? global_get_tofixed(leverageCtidInfo.fcanborrowamount, dcs.a) : 0}}
                </small>
              </p>
              <p>
                <small>
                  {{leverageCtidInfo.tborrowamount ? global_get_tofixed(leverageCtidInfo.fborrowamount, dcs.a) : 0}}
                </small>
              </p>
            </el-col>
            <el-col :span="6" style="padding-left: 20px;">
              <p>
                <small>
                  {{$t('wallet.usable')}} {{symbleto.toUpperCase()}}
                </small>
              </p>
              <p>
                <small>
                  {{$t('wallet.freeze3')}} {{symbleto.toUpperCase()}}
                </small>
              </p>
              <p>
                <small>
                  {{$t('leverage.canBorrow')}} {{symbleto.toUpperCase()}}
                </small>
              </p>
              <p>
                <small>
                  {{$t('leverage.borrowed')}} {{symbleto.toUpperCase()}}
                </small>
              </p>
            </el-col>
            <el-col :span="6" style="text-align: right">
              <p>
                <small>
                  {{leverageCtidInfo.tamount ? global_get_tofixed(leverageCtidInfo.tamount, dcs.a) : 0}}
                </small>
              </p>
              <p>
                <small>
                  {{leverageCtidInfo.tfrozenamount ? global_get_tofixed(leverageCtidInfo.tfrozenamount, dcs.a) : 0}}
                </small>
              </p>
              <p>
                <small>
                  {{leverageCtidInfo.tcanborrowamount ? global_get_tofixed(leverageCtidInfo.tcanborrowamount, dcs.a) : 0}}
                </small>
              </p>
              <p>
                <small>
                  {{leverageCtidInfo.tborrowamount ? global_get_tofixed(leverageCtidInfo.tborrowamount, dcs.a) : 0}}
                </small>
              </p>
            </el-col>
          </el-row>
          <p style="padding-top: 10px;">
            <small>{{$t('leverage.triggerBurst')}}</small>
          </p>
        </div>
        <small slot="reference" class="margin-coin">
          <span>{{`${symblefrom.toUpperCase()}/${symbleto.toUpperCase()}`}}</span>
          <span><i>{{borrowmultiple}}X</i></span>
        </small>
      </el-popover>

      <span
        style="padding:0 10px;">{{$t('leverage.explosivePrice')}}({{symbleto}}) {{setExplosionPrice(leverageCtidInfo.explosionprice, symbleto)}}</span>

      <el-popover
        popperClass="test"
        width="auto"
        placement="bottom"
        trigger="hover">
        <div>{{$t('leverage.riskRate1')}}</div>
        <em slot="reference">
          <span>{{$t('leverage.riskRate')}}</span>
        </em>
      </el-popover>

      <span
        v-if="Number(leverageCtidInfo.riskrate)>=2||Number(leverageCtidInfo.riskrate)==0">({{$t('leverage.risk')}})</span>
      <span v-if="Number(leverageCtidInfo.riskrate)<2&&Number(leverageCtidInfo.riskrate)>0">({{$t('leverage.haveRisk')}})</span>

      <div class="leverage-progress" :style="{width:(professional==='pro'?'300px':'auto')}" v-if="Number(leverageCtidInfo.riskrate)<2&&Number(leverageCtidInfo.riskrate)>0">
        <div class="leverage-progress-text">{{`${global_get_tofixed(leverageCtidInfo.riskrate*100,0)}%`}}</div>
        <div class="leverage-progress-bar" :style="{display:(professional==='pro'?'inline-block':'none')}">
          <div class="leverage-progress-bar_outer">
            <div class="leverage-progress-bar_inner" :style="{width:percentage}">
            </div>
          </div>
        </div>
        <div class="leverage-progress-text" :style="{display:(professional==='pro'?'inline-block':'none')}">200%</div>
      </div>
    </div>
  </div>
  <!--账户杠杆信息 END-->
</template>
<script>
  export default {
    name: 'margin-token',
    components: {},
    computed: {},
    props: ['marginDataMatch', 'symblefrom', 'symbleto', 'dcs','professional'],
    data() {
      return {
        percentage: 0,
        borrowmultiple: 0,
        leverageCtidInfo: {}
      }
    },
    mounted() {
      if (this.$userinfo.uid) {
        this.getLeverageInfo();

        return;
      }else{
        this.borrowmultiple = this.marginDataMatch.borrowmultiple
      }
    },
    watch: {},
    methods: {
      setExplosionPrice(n, m) {
        if (Number(n) <= 0) {
          return 0;
        } else {
          return this.global_get_tofixed(n, this.global_get_decimal(m).a);
        }
      },
      getLeverageInfo() {
        this.$store.dispatch('userborrowmoney_user_mortgageassets_infos', {
          ctid: this.marginDataMatch.id,
          uid: this.$userinfo.uid,
          key: this.$userinfo.secretkey
        }).then(({data}) => {
          if (data) {
            this.leverageCtidInfo = data[0]
            this.borrowmultiple = this.marginDataMatch.borrowmultiple;

            if (Number(data[0].riskrate) <= 1.1 && Number(data[0].riskrate) > 0) {
              this.percentage = '100%';
            } else if (Number(data[0].riskrate) > 1.1 && Number(data[0].riskrate) < 2) {
              this.percentage = `${((data[0].riskrate - 1.1) / (2 - 1.1)) * 100}%`;
            } else {
              this.percentage = 0;
            }
          }
        })
      }
    }
  }
</script>

<style lang='less'>
  .el-popover {
    background: #13161c;
    border-color: #1e222a;
    color: #b0b8db;
    box-shadow: inset 0 0 2px #14a2a5
  }
</style>
<style lang='less' scoped>
  .leverage-account_block {
    color: #b0b8db;
    font-size: 12px;
    padding: 6px 0;
    .leverage-account_block-bg {
      background-color: #2a2a33;
      padding: 6px 10px;
      small {
        cursor: default;
        color: #b0b8db;
        background: url(../../static/images/leverage/open.svg) no-repeat 0 0;
        padding-left: 16px;
        i {
          font-style: normal;
          border: 1px solid #14a2a5;
          padding: 0 3px;
          border-radius: 2px;
          color: #14a2a5;
          display: inline-block;
          height: 15px;
          line-height: 13px;
        }
        &:hover {
          color: #14a2a5;
          background: url(../../static/images/leverage/fold.svg) no-repeat 0 6px;
        }
      }
      .tooltip-icon:hover {
        background-image: url("../../static/images/trade/tip-active.svg");
      }
      .tooltip-icon {
        display: inline-block;
        width: 14px;
        height: 14px;
        vertical-align: bottom;
        background-repeat: no-repeat;
        background-size: 14px 14px;
        background-position: center;
        background-image: url("../../static/images/trade/tip.svg");
        cursor: pointer;
      }
      em {
        font-style: normal;
        cursor: default;
        color: #b0b8db;
        background-image: url("../../static/images/trade/plaint.svg");
        background-repeat: no-repeat;
        padding-left: 18px;
        background-position: 0 1px;
        &:hover {
          color: #14a2a5;
          background-image: url("../../static/images/trade/plaint-active.svg");
        }
      }
    }

    .el-popover.test {
      background: #1E222A;
      border-radius: 0;
      border: 1px solid #1E222A;
      color: #CED3DD;
    }

    .margin-coin {
      span {
        display: inline-block;
      }
      div {
        display: inline
      }
    }
    .leverage-progress {
      display: inline-block;
      position: relative;
      line-height: 1;
      .leverage-progress-bar {
        display: inline-block;
        vertical-align: middle;
        width: 62%;
        box-sizing: border-box;
        .leverage-progress-bar_outer {
          height: 6px;
          border-radius: 100px;
          background-color: #13161c;
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
        }
      }
      .leverage-progress-text {
        font-size: 12px;
        color: #e6a23c;
        display: inline-block;
        /*vertical-align: middle;*/
        line-height: 1;
      }

      .toast-icon {
        display: inline-block;
        width: 16px;
        height: 16px;
        vertical-align: sub;
        background-image: url("../../static/images/trade/tip-active.svg");
      }
    }
  }
</style>
