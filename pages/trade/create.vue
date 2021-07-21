<style lang='less' scoped>
  @import "../../static/styles/color";

  .create {
    background-color: @cl_fff;
  }

  .el-button {
    padding: 0;
    border: none
  }

  .create-title {
    font-size: 18px;
    color: @cl_212;
    font-weight: 600;
    margin-bottom: 20px;
  }

  .create-tip {
    padding: 20px 54px;
    background-color: @cl_faf;
    color: @cl_212;
    font-size: 14px;
    line-height: 20px;
    margin-bottom: 30px;
  }

  .create-content {
    width: 1200px;
    margin: auto;
    padding: 30px 0;
    .require_tip {
      color: @cl_e96;
    }
    .create_info, .create_time {
      float: left;
      width: 50%;
      padding-left: 55px;
    }
    .create_time_deadline {
      width: 100%;
    }
    .create-group {
      padding-left: 26px;
      position: relative;
      .group_tip {
        position: absolute;
        display: inline-block;
        width: 16px;
        height: 16px;
        line-height: 16px;
        border-radius: 2px;
        text-align: center;
        color: @cl_fff;
        background-color: @cl_cec;
        font-size: 14px;
        left: 0;
        top: 4px;
      }
      .group_title {
        font-size: 16px;
        line-height: 22px;
        color: @cl_212;
        font-weight: 600;
      }
      .title {
        font-size: 12px;
        color: @cl_646;
        margin-bottom: 6px;
        margin-top: 20px;
        line-height: 16px;
      }
    }
    .section_group {
      width: 190px;
      height: 40px;
      line-height: 40px;
    }
    .section_tip {
      display: inline-block;
      width: 20px;
      height: 40px;
      line-height: 40px;
      color: @cl_344;
      text-align: center;
      font-size: 24px;
    }
    .create_info_type {
      margin-bottom: 30px;
      .type_group {
        display: inline-block;
        width: 190px;
        margin-right: 20px;
        .select {
          width: 100%;
          height: 40px;
          line-height: 40px;
        }
      }
    }
    .create_info_info {
      .info_group {
        display: inline-block;
        width: 400px;
      }
      .info_quota .section_group {
        display: flex;
        flex-direction: row;
        background-color: #ffffff;
        border: 1px solid #dddddd;
        border-radius: 4px;
      }
      .info_quota .section_group.readonly {
        background-color: #FBFCFE;
        .input_tip {
          background-color: #FBFCFE;
        }
      }
      .info_quota .section_group .input_tip {
        flex: auto;
        width: 100%;
        padding-left: 10px;
        font-size: 14px;
      }
      .info_quota .section_group .quota_tip {
        padding: 0 10px;
        white-space: nowrap;
      }

      .tooltip-icon:hover {
        background-image: url("../../static/images/trade/tip-active.svg");
      }
      .tooltip-icon {
        display: inline-block;
        width: 14px;
        height: 14px;
        vertical-align: sub;
        background-repeat: no-repeat;
        background-size: 14px 14px;
        background-position: center;
        background-image: url("../../static/images/trade/tip.svg");
        cursor: pointer;
      }
    }
    .select-account {
      width: 400px;
      padding: 10px 0 10px 10px;
      border-radius: 4px;
      border: 1px solid @cl_ddd;
      .title {
        font-size: 12px;
        color: @cl_344;
        margin-top: 0;
        margin-bottom: 4px;
      }
      .block.active {
        border: 1px solid @cl_link;
        position: relative;
      }
      .block.active:after {
        content: '';
        display: inline-block;
        width: 16px;
        height: 16px;
        position: absolute;
        bottom: 0;
        right: 0;
        background-image: url("../../static/images/trade/account-active.svg");
        background-size: cover;
        background-repeat: no-repeat;
      }
      .block {
        font-size: 14px;
        display: inline-block;
        width: 119px;
        height: 34px;
        line-height: 32px;
        border: 1px solid #DDDDE4;
        border-radius: 3px;
        margin: 10px 10px 0 0;
        cursor: pointer;
        float: left;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .icon {
        width: 14px;
        height: 14px;
        margin: 0 10px;
        vertical-align: middle;
      }
      .block.block-add {
        background-image: url("../../static/images/trade/add.svg");
        background-repeat: no-repeat;
        background-size: 18px 18px;
        background-position: center;
      }
    }

    .create_protocol {
      display: inline-block;
      cursor: pointer;
      font-size: 14px;
      margin-top: 30px;
    }
    .create_protocol .checkbox {
      display: inline-block;
      width: 14px;
      height: 14px;
      background-repeat: no-repeat;
      background-size: cover;
      background-image: url("../../static/images/trade/select.svg");
      vertical-align: middle;
      position: relative;
      top: -1px;
      margin-right: 10px;
    }
    .create_protocol .checkbox.active {
      background-image: url("../../static/images/trade/select-active.svg");
    }
    .create_protocol_tip {
      color: @cl_link;
    }
    .create-button {
      display: inline-block;
      width: 180px;
      height: 40px;
      line-height: 40px;
      text-align: center;
      color: @cl_fff;
      background: @cl_37b_00a;
      font-size: 14px;
      border-radius: 4px;
      margin-top: 30px;
      cursor: pointer;
    }
    .create-button.disabled {
      background: #d4d4d4;
    }
    .auto-response {
      .title {
        line-height: 20px;
      }
      .auto-response_tip {
        margin-right: 10px;
        vertical-align: middle;
      }
      .area {
        width: 400px;
        max-width: 400px;
        height: 112px;
        border: 1px solid @cl_ddd;
        border-radius: 4px;
        font-size: 14px;
        padding: 10px;
        line-height: 20px;
      }
      .area::placeholder {
        font-size: 14px;
        color: #BDBCCB;
      }
    }
  }
</style>
<style lang='less'>
  @import "../../static/styles/color";

  .create-content {
    .group--error {
      .el-input__inner,
      .el-input__inner:hover,
      .input-number,
      .select-account {
        border: 1px solid @cl_cd4;
      }
    }
    .create_info_info .group--error {
      .info_quota .section_group {
        border: 1px solid @cl_cd4;
      }
    }
    .create-button .el-loading-spinner {
      .circular {
        width: 30px;
      }
      .path {
        stroke: @cl_link;
      }
    }
  }

  .refresh {
    color: @cl_link;
    padding-right: 10px;
    cursor: pointer;
  }

  .refresh:before {
    content: '';
    width: 11px;
    height: 11px;
    display: inline-block;
    background: url('../../static/images/legal/refresh.svg') no-repeat center center;
    background-size: cover;
    margin-right: 5px;
    margin-top: 2px;
    vertical-align: top;
  }

</style>
<template>
  <div class="hex-flex set-el-select-style">
    <div class="create hex-flex_auto">
      <div class="create-content">
        <p class="create-title">{{$t('legalTrad.CreateTitle')}}</p>
        <div class="create-tip">
          <p>{{$t('legalTrad.clause1')}}</p>
          <p>{{$t('legalTrad.clause2')}}</p>
          <p>{{$t('legalTrad.clause3')}}</p>
          <p>{{$t('legalTrad.clause4')}}</p>
        </div>
        <div class="clearfix">
          <div class="create_info">
            <div class="create-group create_info_type">
              <span class="group_tip">1</span>
              <div class="group_content">
                <p class="group_title">{{$t('legalTrad.Tradetype')}}</p>
                <div>
                  <div class="type_group" :class="{'group--error':$v.ordermodel.direction.$error}">
                    <p class="title clearfix">
                      <span class="left">{{$t('legalTrad.Tradetype')}} <span class="require_tip">*</span></span>
                      <span v-if="$v.ordermodel.direction.$error"
                            class="right require_tip">{{$t('c2c.Required')}}</span>
                    </p>
                    <el-select class="select" v-model="$v.ordermodel.direction.$model"
                               :placeholder="$t('formMenu.select')">
                      <el-option
                        v-for="item in directionoption"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                      </el-option>
                    </el-select>
                  </div>
                  <div class="type_group" :class="{'group--error':$v.ordermodel.currencyid.$error}">
                    <p class="title clearfix">
                      <span class="left">{{$t('wallet.coin')}} <span class="require_tip">*</span></span>
                      <span v-if="$v.ordermodel.currencyid.$error"
                            class="right require_tip">{{$t('c2c.Required')}}</span>
                    </p>
                    <el-select class="select" v-model="$v.ordermodel.currencyid.$model"
                               :placeholder="$t('formMenu.select')">
                      <el-option
                        v-for="item in filterCurrenCyoption"
                        :key="item.assetsid"
                        :label="global_get_uppercase(item.currency.currencyname)"
                        :value="item.currency.id">
                      </el-option>
                    </el-select>

                  </div>
                </div>
                <div>
                  <div class="type_group" :class="{'group--error':$v.ordermodel.countryid.$error}">
                    <p class="title clearfix">
                      <span class="left">{{$t('legalTrad.Region')}} <span class="require_tip">*</span></span>
                      <span v-if="$v.ordermodel.countryid.$error"
                            class="right require_tip">{{$t('c2c.Required')}}</span>
                    </p>
                    <el-select class="select" v-model="$v.ordermodel.countryid.$model"
                               :placeholder="$t('formMenu.select')">
                      <el-option
                        v-for="(item,index) in areaoption"
                        :key="index"
                        :label="`${item.engname} (${item.name}) `"
                        :value="item.countryid">
                      </el-option>
                    </el-select>
                  </div>
                  <div class="type_group" :class="{'group--error':$v.ordermodel.legaltype.$error}">
                    <p class="title clearfix">
                      <span class="left">{{$t('legalTrad.currency')}} <span class="require_tip">*</span></span>
                      <span v-if="$v.ordermodel.legaltype.$error"
                            class="right require_tip">{{$t('c2c.Required')}}</span>
                    </p>
                    <el-select class="select" v-model="$v.ordermodel.legaltype.$model"
                               :placeholder="$t('formMenu.select')">
                      <el-option
                        v-for="item in legaltypeoption"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                      </el-option>
                    </el-select>
                  </div>
                </div>
              </div>
            </div>
            <!--交易信息-->
            <div class="create-group create_info_info">
              <span class="group_tip">2</span>
              <div class="group_content">
                <p class="group_title">{{$t('legalTrad.Tradeinformation')}}</p>
                <div class="info_group" :class="{'group--error':$v.ordermodel.premium.$error}">
                  <p class="title clearfix">
                    <span class="left">{{$t('legalTrad.Premium')}} <span class="require_tip">*</span>
                    <el-tooltip placement="top">
                      <div slot="content">{{$t('legalTrad.premium1')}}<br/>{{$t('legalTrad.premium2')}}</div>
                      <el-button><i class="tooltip-icon"></i></el-button>
                    </el-tooltip>
                    </span>
                    <span v-if="$v.ordermodel.premium.$error" class="right require_tip">{{$t('c2c.Required')}}</span>
                    <span v-if="judgeDigits == false" class="right require_tip">{{$t('legalTrad.digitsError')}}</span>
                  </p>
                  <trade-number
                    lose="true"
                    :min="-15"
                    :max="15"
                    :num.sync="$v.ordermodel.premium.$model"
                    tip="%"></trade-number>
                </div>
                <div class="info_group info_quota">
                  <p class="title">{{$t('legalTrad.Reference')}}
                    <el-tooltip placement="top">
                      <div slot="content">{{$t('legalTrad.reference1')}}</div>
                      <el-button><i class="tooltip-icon"></i></el-button>
                    </el-tooltip>
                  </p>
                  <div class="section_group readonly" style="width: 100%;">
                    <input type="number" readonly v-model="getReferencePrice" class="input_tip">
                    <span class="quota_tip">{{getReferencePriceType}}</span>
                  </div>
                </div>
                <div class="info_group" :class="{'group--error':$v.ordermodel.limitprice.$error}">
                  <p class="title clearfix">
                    <span
                      class="left">{{ordermodel.direction == 1 ? $t('c2c.MaximumPrice') : $t('legalTrad.Lowest')}} <span
                      class="require_tip">*</span>
                    <el-tooltip placement="top">
                      <div slot="content">{{$t('c2c.MaximumPrice1')}}<br/>{{$t('c2c.MaximumPrice2')}}</div>
                      <el-button><i class="tooltip-icon"></i></el-button>
                    </el-tooltip>
                    </span>
                    <span v-if="$v.ordermodel.limitprice.$error" class="right require_tip">{{$t('c2c.Required')}}</span>
                  </p>
                  <trade-number
                    :num.sync="$v.ordermodel.limitprice.$model"
                    :tip="getReferencePriceType"></trade-number>
                </div>
                <!--卖出数量-->
                <div class="info_group" :class="{'group--error':$v.ordermodel.amount.$error}">
                  <p class="title clearfix">
                    <span
                      class="left">{{ordermodel.direction == 1 ? $t('memberCenter.buy') : $t('memberCenter.sell')}}{{$t('memberCenter.amount')}} <span
                      class="require_tip">*</span></span>
                    <span v-if="$v.ordermodel.amount.$error&&$v.ordermodel.amount.$ismax"
                          class="right require_tip">{{$t('c2c.Required')}}</span>
                    <span v-if="!$v.ordermodel.amount.$ismax"
                          class="right require_tip ts--opacity">{{$t('legalTrad.MaxQuantity')}} {{maxamount}}</span>
                  </p>
                  <trade-number
                    :num.sync="$v.ordermodel.amount.$model"
                    :tip="parseFrom"></trade-number>
                  <el-checkbox v-model="ischeckavailable" v-if="ordermodel.direction == -1 " >
                    <span class="label-tip">{{$t("wallet.available")}}:{{maxamount}}</span>
                  </el-checkbox>
                </div>
                <div class="info_group"
                     :class="{'group--error':$v.ordermodel.minprice.$error||$v.ordermodel.maxprice.$error}">
                  <p class="title clearfix">
                    <span class="left">{{$t('legalTrad.Tradequota')}}
                    <el-tooltip placement="top">
                      <div slot="content">{{$t('legalTrad.Tradequota1')}}<br/>{{$t('legalTrad.Tradequota2')}}</div>
                      <el-button><i class="tooltip-icon"></i></el-button>
                    </el-tooltip>
                    </span>
                    <span v-if="!$v.ordermodel.minprice.$isthan||!$v.ordermodel.maxprice.$isless"
                          class="right require_tip">{{$t('c2c.Incorrect')}}</span>
                  </p>
                  <div class="clearfix info_quota">
                    <div class="section_group left">
                      <input type="number" class="input_tip" v-model="$v.ordermodel.minprice.$model">
                      <span class="quota_tip">{{parseTo}}</span>
                    </div>
                    <span class="section_tip left">-</span>
                    <div class="section_group left">
                      <input v-if="ordermodel.maxprice == 99999999" type="number" class="input_tip" placeholder="No Limit" v-model="$v.ordermodel.maxprice.$model">
                      <input v-if="ordermodel.maxprice != 99999999" type="number" class="input_tip" placeholder="No Limit" v-model="$v.ordermodel.maxprice.$model">
                      <span class="quota_tip">{{parseTo}}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="create_time">
            <div class="create-group create_info_info">
              <span class="group_tip">3</span>
              <div class="group_content">
                <p class="group_title">{{$t('legalTrad.Trademethod')}}</p>
                <div class="info_group">
                  <p class="title">{{$t('legalTrad.opening')}}
                    <el-tooltip placement="top">
                      <div slot="content">{{$t('legalTrad.opening1')}}<br/>{{$t('legalTrad.opening2')}}</div>
                      <el-button><i class="tooltip-icon"></i></el-button>
                    </el-tooltip>
                  </p>
                  <div class="clearfix">
                    <el-time-select
                      class="section_group left"
                      v-model="ordermodel.openbegintime"
                      :picker-options="{
                          start: '00:00',
                          step: '00:30',
                          end: '24:00'
                        }"
                      :placeholder="$t('legalTrad.opening')">
                    </el-time-select>
                    <span class="section_tip left">-</span>
                    <el-time-select
                      class="section_group left"
                      v-model="ordermodel.openendtime"
                      :picker-options="{
                          start: '00:00',
                          step: '00:30',
                          end: '24:00'
                        }"
                      :placeholder="$t('legalTrad.opening')">
                    </el-time-select>
                  </div>
                </div>
                <div class="info_group">
                  <p class="title">{{$t('legalTrad.deadline')}}
                    <el-tooltip placement="top">
                      <div slot="content">{{$t('legalTrad.deadline1')}}<br/>{{$t('legalTrad.deadline2')}}</div>
                      <el-button><i class="tooltip-icon"></i></el-button>
                    </el-tooltip>
                  </p>
                  <el-select class="create_time_deadline" v-model="ordermodel.orderexpiredtime"
                             :placeholder="$t('formMenu.select')">
                    <el-option
                      v-for="item in orderexpiredtime"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value">
                    </el-option>
                  </el-select>
                </div>
                <div class="info_group" :class="{'group--error':$v.ordermodel.paytype.$error}">
                  <p class="title clearfix">
                    <span class="left">{{$t('legalDeal.Collection')}} <span class="require_tip">*</span></span>
                    <span v-if="$v.ordermodel.paytype.$error" class="right require_tip">{{$t('c2c.Required')}}</span>
                  </p>
                  <div class="select-account">
                    <p class="title">{{$t('legalTrad.multiple')}}
                      <span class="fr refresh" @click="getaccount">{{$t('c2c.refresh')}}</span></p>
                    <div class="clearfix">

                      <span
                        @click="showDetailRow(item.typeid)"
                        v-for="(item,index) in paytypeoption"
                        :key="index"
                        :class="{'active':isVisibleDetailRow(item.typeid)}"
                        class="block">
                        <img class="icon" :src="item.icon"
                             alt="">{{lang == 'zh_cn' ? item.typename : item.engtypename}}</span>

                      <a target="_blank" href="/person/payment" class="block block-add"></a>
                    </div>
                  </div>
                </div>
                <div class="auto-response">
                  <div class="title">
                    <span class="auto-response_tip">{{$t('legalTrad.Automatic')}}</span>
                    <el-switch
                      v-model="autoreplystate"
                      active-color="#13ce66"
                      inactive-color="#ff4949">
                    </el-switch>
                  </div>
                  <textarea
                    v-model="ordermodel.autoreply"
                    :placeholder="$t('legalTrad.Automatically')"
                    class="area" name="">
                </textarea>
                </div>
                <div class="create_protocol ovh">
                  <p class="fl" @click="ischecked=!ischecked">
                    <span class="checkbox" :class="{'active':ischecked}"></span>
                    <span class="">{{$t('legalTrad.agreed')}}</span>
                  </p>
                  <span class="create_protocol_tip fl" @click="popup">{{$t('legalTrad.agreement')}}</span>
                </div>
                <terms @close="popup" v-show="popupStatue" :article="article"/>
                <div>
                  <span class="create-button"
                        @click="createorder"
                        v-loading="orderloading"
                        :class="{'disabled':!ischecked}">{{$t('legalTrad.Release')}}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import tradeNumber from '@/components/public/trade-number'
  import {required} from 'vuelidate/lib/validators'
  import terms from "@/components/public/terms-service.vue";

  export default {
    name: "trade",
    validations: {
      ordermodel: {
        direction: {
          required
        },
        legaltype: {
          required
        },
        countryid: {
          required
        },
        currencyid: {
          required
        },
        limitprice: {
          required
        },
        premium: {
          required
        },
        amount: {
          $ismax(val) {
            val = parseFloat(val)
            const min = parseFloat(this.maxamount)
            let _state = true
            if (this.ordermodel.direction == -1 && val && min >= 0 && val > min) {
              _state = false
            }
            return _state
          },
          required
        },
        paytype: {
          required
        },
        minprice: {
          $isthan(val) {
            val = parseFloat(val)
            const max = parseFloat(this.ordermodel.maxprice)
            let _state = true
            if (val >= max) {
              _state = false
            }
            return _state
          }
        },
        maxprice: {
          $isless(val) {
            val = parseFloat(val)
            const min = parseFloat(this.ordermodel.minprice)
            let _state = true
            if (val < min) {
              _state = false
            }
            return _state
          }
        }
      }
    },
    components: {
      tradeNumber, terms
    },
    computed: {
      /*获取参考价格*/
      from: function () {
        const from = this.currencyoption.find((item) => {
          return item.currency.id === this.ordermodel.currencyid
        })
        return from ? from.currency.currencyname : ''
      },
      to: function () {
        const to = this.legaltypeoption.find((item) => {
          return item.value === this.ordermodel.legaltype
        })
        return to ? to.name : ''
      },
      /*计算最大可卖出量*/
      maxamount: function () {
        const assets = this.$store.state.hex_server_user_assets.value.list && this.$store.state.hex_server_user_assets.value.list.find((item) => {
          return item.currency.currencyname == this.from
        })
        if (assets) {
          const dcs = this.global_get_decimal(this.from)
          return this.global_get_tofixed(assets.canuseamount, dcs.a)
        }
        return 0
      },
      parseFrom: function () {
        return this.from ? this.from.toUpperCase() : '--'
      },
      parseTo: function () {
        return this.to ? this.to.toUpperCase() : '--'
      },
      getReferencePrice: function () {
        var reference = this.$store.getters.get_exchange_rate_by_name(this.from, this.to)
        return reference
      },
      /*获取参考价选择的币种类型*/
      getReferencePriceType: function () {
        return this.parseTo + '/' + this.parseFrom
      },
      /*获取支付方式*/
      getpaytype: function () {
        return this.visibleDetailRows.join(',')
      }
    },
    watch: {
      'visibleDetailRows': function (val) {
        this.ordermodel.paytype = val.join(',')
      },
      ischeckavailable: function(val) {
        if (val == true) {
          this.ordermodel.amount = this.maxamount
        } else {
          this.ordermodel.amount = ''
        }
      },
      'ordermodel.direction': function(val) {
        if (val == 1) {
          if (window.localStorage.getItem('premium') == null) {
            this.ordermodel.premium = '0'
          }
          this.ordermodel.limitprice = this.global_get_tofixed(this.getReferencePrice * 1.02,8)
        }else {
          if (window.localStorage.getItem('premium') == null) {
            this.ordermodel.premium = '0'
          }
          this.ordermodel.limitprice = this.global_get_tofixed(this.getReferencePrice * 0.98,8)
        }        
      },
      getReferencePrice: function(reference) {
        if (this.ordermodel.direction == 1) {
          this.ordermodel.limitprice = this.global_get_tofixed(reference * 1.02,8)
          
        } else {
          this.ordermodel.limitprice = this.global_get_tofixed(reference * 0.98,8)
        }
      },
      '$store.state.hex_lang.locale': function (val) {
        this.lang = val;
      },
      'currencyoption': function () {
        this.filterTo();
      },
      'ordermodel.premium': function (val){
        var isDecimals = val.match(/^-?\d+(\.\d{1,8})?$/)
        if(isDecimals === null){
          this.judgeDigits = false
        }else{
          this.judgeDigits = true
        }
      },
      'ordermodel.legaltype': function (val){
        var _self = this
        console.log(val)
        if (val === 0) { //CNY
        console.log(_self.defaultValue)
          _self.ordermodel.minprice = _self.defaultValue.minQuota.CNY
          _self.ordermodel.maxprice = _self.defaultValue.maxQuota.CNY
        } else {  //USD
          _self.ordermodel.minprice = _self.defaultValue.minQuota.USD
          _self.ordermodel.maxprice = _self.defaultValue.maxQuota.USD
        }
      }

    },
    data() {
      return {
        lang: this.$store.state.hex_lang.locale,
        defaultValue: {
        },
        directionoption: [
          {
            value: 1,
            label: this.$t('memberCenter.buy')
          },
          {
            value: -1,
            label: this.$t('memberCenter.sell')
          }
        ],
        legaltypeoption: [
          {
            value: 0,
            name: 'CNY',
            label: this.$t('legalTrad.legalrem')
          },
          {
            value: 1,
            name: 'USD',
            label: this.$t('legalTrad.legalde')
          },
          {
            value: 2,
            name: 'JPY',
            label: this.$t('legalTrad.legaljpy')
          },
          {
            value: 3,
            name: 'TWD',
            label: this.$t('legalTrad.legaltwd')
          },
          {
            value: 4,
            name: 'HKD',
            label: this.$t('legalTrad.legalhkd')
          },
          {
            value: 5,
            name: 'KRW',
            label: this.$t('legalTrad.legalkrw')
          },
          {
            value: 6,
            name: 'EUR',
            label: this.$t('legalTrad.legaleur')
          },
          {
            value: 7,
            name: 'GBP',
            label: this.$t('legalTrad.legalgbp')
          },
          {
            value: 8,
            name: 'MYR',
            label: this.$t('legalTrad.legalmyr')
          },
          {
            value: 9,
            name: 'PHP',
            label: this.$t('legalTrad.legalphp')
          },
          {
            value: 10,
            name: 'IDR',
            label: this.$t('legalTrad.legalidr')
          },
        ],
        orderexpiredtime: [
          {
            value: 30,
            label: this.$t('legalTrad.minute3')
          },
          {
            value: 60,
            label: this.$t('legalTrad.minute6')
          },
          {
            value: 90,
            label: this.$t('legalTrad.minute9')
          },
          {
            value: 120,
            label: this.$t('legalTrad.minute12')
          }],
        currencyoption: [],
        filterCurrenCyoption: [],
        paytypeoption: [],
        areaoption: [],
        ordermodel:{},
        value: '',
        num: '',
        ischecked: true,
        ischeckavailable: false,
        timestart: '',
        timeend: '',
        orderstate: true,
        orderloading: false,
        autoreplystate: true,
        visibleDetailRows: [],
        popupStatue: false,
        judgeDigits: true,
        article: {
          "zh_cn": 676904,
          "en_us": 676957
        }
      };
    },
    beforeRouteEnter(to, from, next) {
      next((vm) => {
        const user = vm.$userinfo;
        if (user.securitylevel != 2) {
          vm.$router.push('/trade');
        }
      })
    },
    methods: {
      getUcGet() {
        this.$store.dispatch('user_assets_uc_get', {assetstype: 1})
          .then((res) => {
            const _assets = res.data ? res.data : res.hexdata
            if (_assets) {
              this.$store.commit('set_server_user_assets_uc', _assets)
            }
          })
      },
      popup() {
        this.popupStatue = !this.popupStatue;
      },
      getnewmodel() {
        this.visibleDetailRows = []
        return {
          direction: 1,
          legaltype: '',
          countryid: '',
          currencyid: '',
          limitprice: '',
          premium: window.localStorage.getItem('premium')?window.localStorage.getItem('premium') : '0',
          amount: '',
          minprice: '',
          maxprice: '',
          orderexpiredtime: window.localStorage.getItem('tradeDeadine')?window.localStorage.getItem('tradeDeadine') : 30,
          openbegintime: window.localStorage.getItem('dailyTimebegin')?window.localStorage.getItem('dailyTimebegin') : '09:00',
          openendtime: window.localStorage.getItem('dailyTimeend')?window.localStorage.getItem('dailyTimeend') : '21:00',
          autoreply: '',
          paytype: ''
        }
      },
      gettime(t) {
        return t ? t.replace(':', '.') : ''
      },
      createorder() {
        let _state = false
        if (!this.ischecked) {
          return
        }
        if (this.orderloading) {
          _state = true
        }
        this.$v.$touch()
        if (this.$v.$invalid) {
          _state = true
        }

        if (_state) {
          return
        }
        const newmodel = Object.assign({}, this.ordermodel)
        newmodel.paytype = this.getpaytype
        newmodel.openbegintime = this.gettime(newmodel.openbegintime)
        newmodel.openendtime = this.gettime(newmodel.openendtime)
        newmodel.areacode = this.ordermodel.countryid;
        newmodel.orderexpiredtime = newmodel.orderexpiredtime ? newmodel.orderexpiredtime : 0
        newmodel.minprice = newmodel.minprice ? newmodel.minprice : 0
        newmodel.maxprice = newmodel.maxprice ? newmodel.maxprice : 0

        // updata LocalStroge
        if (newmodel.legaltype == 0) { //CNY
          window.localStorage.setItem('minQuotaCNY',newmodel.minprice)
          window.localStorage.setItem('maxQuotaCNY',newmodel.maxprice)
        } else {  //USD
          window.localStorage.setItem('minQuotaUSD',newmodel.minprice)
          window.localStorage.setItem('maxQuotaUSD',newmodel.maxprice)
        }



        window.localStorage.setItem('dailyTimebegin',newmodel.openbegintime)
        window.localStorage.setItem('dailyTimeend',newmodel.openendtime)

        window.localStorage.setItem('tradeDeadine',newmodel.orderexpiredtime)
        window.localStorage.setItem('premium',newmodel.premium)

        /*溢价处理*/
        newmodel.premium = newmodel.premium / 100
        if (!this.autoreplystate) {
          newmodel.autoreply = ''
        }
        this.orderloading = true;
        this.$store.dispatch('trading_c2c_goods_add', newmodel)
          .then(({data}) => {
            if (data) {
              this.getUcGet();
              this.$store.commit('set_message', {type: 'ok', text: this.$t('c2c.OrderSuccessful')})
              this.$nextTick(() => {
                this.$router.push({
                  name: 'trade',
                  query: {
                    direction: this.ordermodel.direction
                  }
                })
                this.ordermodel = this.getnewmodel();
                this.$v.$reset();
              })
            } else {
              this.$store.commit('set_message', {type: 'error', text: this.$t('c2c.OrderFailed')})
            }
          })
          .then(() => {
            this.orderloading = false
          })
      },
      showsearch(e) {
        this.searchstatetimer && clearTimeout(this.searchstatetimer)
        if (!e) {
          this.searchstatetimer = setTimeout(() => {
            this.searchstate = e
          }, 300)
        } else {
          this.searchstate = e
        }
      },
      showtip(e) {
        this.tipstatetimer && clearTimeout(this.tipstatetimer)
        if (!e) {
          this.tipstatetimer = setTimeout(() => {
            this.tipstate = e
          }, 300)
        } else {
          this.tipstate = e
        }
      },
      isVisibleDetailRow(id) {
        return this.visibleDetailRows.indexOf(id) >= 0
      },
      showDetailRow(id) {
        if (!this.isVisibleDetailRow(id)) {
          this.visibleDetailRows.push(id)
        } else {
          this.visibleDetailRows.splice(this.visibleDetailRows.indexOf(id), 1);
        }
        this.$forceUpdate()
      },
      getaccount() { /*获取收款账号*/
        this.$store.dispatch('user_user_payments_getlist').then(({data}) => {
          if (data) {
            this.paytypeoption = [];
            data.forEach((item) => {
              item.payconfig && this.paytypeoption.push(item)
            })
          }
        })
      },
      filterTo() {
        this.$store.dispatch('frenchcurrency_get_c2c').then(({data}) => {
          if (data) {
            this.currencyoption.map((item) => {
              for (let i in data) {
                if (item.currency.currencyname &&　item.currency.currencyname.toLowerCase() === data[i].toLowerCase()) {

                  this.filterCurrenCyoption.push(item);
                }
              }
            })
          }
        })
      }
    },
    mounted() {

      this.ordermodel = this.getnewmodel()
      /*过去国家列表*/
      this.$store.dispatch('com_country_getlist', {
        c2cmarket: 1
      }).then(({data}) => {
        if (data) {
          this.areaoption = data
        }
      })
      /*获取收款账号*/
      this.getaccount();
      this.defaultValue ={
          minQuota:{
            CNY:window.localStorage.getItem('minQuotaCNY')?window.localStorage.getItem('minQuotaCNY') : 500,
            USD:window.localStorage.getItem('minQuotaUSD')?window.localStorage.getItem('minQuotaUSD') : 50,
          },
          maxQuota:{
            CNY:window.localStorage.getItem('maxQuotaCNY')?window.localStorage.getItem('maxQuotaCNY') : 99999999,
            USD:window.localStorage.getItem('maxQuotaUSD')?window.localStorage.getItem('maxQuotaUSD') : 99999999,
          }
        },
      /*或许场外交易币种列表*/
      this.$store.dispatch('user_assets_uc_get', {assetstype: 1}).then(({data}) => {
        if (data) {
          this.currencyoption = data.list
        }
      })
    }
  };

</script>

