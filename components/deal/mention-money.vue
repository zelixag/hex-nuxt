<style lang='less' scoped>
  @import "../../static/styles/color";
  @import "../../static/styles/person";
  @import "../../static/styles/auth.less";

  .mention-money_tip {
    font-size: 18px;
    font-weight: bold;
    margin-right: 20px;
  }

  .mention-money_info {
    font-size: 14px;
    text-align: left;
    padding: 20px;
    box-shadow: 0 1px 0 0 rgba(133, 131, 172, 0.2);
    color: @cl_666;
    // position: relative;
  }

  .mention-money_info .btc {
    color: @cl_buy;
    font-size: 30px;
    font-weight: bold;
    margin-right: 5px;
  }

  .mention-money_info .cny {
    color: @cl_link;
    font-size: 30px;
    font-weight: bold;
    margin-right: 5px;
  }

  .mention-money_info .br {
    margin: 0 20px;
    border-right: 1px solid @cl_858;
    display: inline-block;
    height: 20px;
  }

  .mention-money_info_title {
    line-height: 36px;
    margin-bottom: 8px;
  }

  .mention-money_info_num {
    padding: 4px 0;
  }

  .mention-money_info_address_button {
    color: @cl_link;
    margin-top: 16px;
  }

  .mention-money-block {
    margin-top: 10px;
    background-color: @cl_fff;
  }

  .mention-money-block-title {
    padding: 18px 20px;
  }

  .mention-money-block-title .title_tip {
    font-size: 16px;
    font-weight: bold;
  }

  .hex_table_body .size0 {
    font-size: 0;
  }

  .hex_table_body .handle {
    color: @cl_link;
    font-size: 12px;
    margin-left: 30px;
  }

  .mention-money_address {
    font-size: 14px;
    width: 400px;
    display: inline-table;
    border-collapse: separate;
  }

  .mention-money_address input {
    height: 40px;
    line-height: 40px;
    border: 1px solid #DDDDDD;
    display: table-cell;
    width: 100%;
    padding: 5px 10px;
  }

  .mention-money_address .search-tip {
    display: table-cell;
    width: 80px;
    background-color: @cl_link;
    color: @cl_fff;
    border: 1px solid @cl_link;
    text-align: center;
  }

  .mention-money-block-search .search-tip::placeholder {
    color: @cl_bbb;
  }

  .mention-money_scan {
    display: inline-block;
  }

  .mention-money_scan span {
    line-height: 40px;
    height: 40px;
    margin-left: 10px;
    width: 100px;
    background-color: @cl_f0e;
    color: @cl_333;
    font-size: 14px;
    text-align: center;
    display: inline-block;
  }

  .mention-money_group {
    width: auto;
  }

  .mention-money_hint {
    padding: 10px;
    background-color: @cl_f9f;
    color: @cl_666;
    font-size: 12px;
    line-height: 24px;
    margin-top: 20px;
  }

  .mention-money_hint .title {
    color: @cl_999;
  }

  .mention-money_hint .tip {
    color: @cl_cd4;
    font-size: 14px;
    font-weight: 600;
  }

  .mention-money_hint .row {
    color: @cl_666;
  }

  .auth-content_group {
    width: 580px;
  }

  .auth-content_group input {
    width: 100%
  }

  .auth-content_group.mention {
    width: 100%;
    margin-top: 0;
    // overflow: hidden;
  }

  .auth-content_group .mentionAddress .left.choice {
    // overflow: hidden;
    width: 580px;
    background: rgba(255, 255, 255, 1);
    float: left;
    input {
      height: 35px;
      font-size: 14px;
      line-height: 20px;
      border: none;
    }
  }

  .comment {
    margin-top: 4px;
  }

  .manage {
    margin-left: 4px;
  }

  .manage p {
    height: 40px;
    font-size: 14px;
    line-height: 40px;
    color: rgb(0, 118, 230);
    padding: 0 10px 0 34px;
    border: 1px solid rgba(240, 239, 255, 1);
    display: inline-block;
    margin-left: 5px;
    cursor: pointer;
    background: url('../../static/images/user/icon_add.png') no-repeat 10px center;
  }

  .userAddress {
    height: 32px;
    padding-left: 10px;
    line-height: 32px;
  }

  .manage .manageaddress {
    background: url('../../static/images/user/icon_setting.png') no-repeat 10px center;

  }

  .canuse_amount {
    color: @cl_289;
  }

  .mention-money_info .auth-content_group.left,
  .mention-money_info .auth-content_group.right {
    width: 280px;
  }

  .auth-content_group_mail .input {
    width: 449px;
  }

  .auth-content_group_account {
    font-size: 12px;
  }

  .auth-content_button {
    margin: 10px 0 0 0;
    width: 580px;
  }

  .auth-content_group--error /deep/ .baseselect > .ipt_hover {
    border: 1px solid #CD4559 !important;
    color: #CD4559 !important;
  }

  .sanj {
    position: absolute;
    top: -6px;
    border: 1px solid #fff;
    border-bottom: 0 none;
    border-right: 0 none;
    width: 12px;
    height: 12px;
    -webkit-transform: rotate(45deg);
    box-sizing: border-box;
    background: #fff;
  }

  .zhLocation {
    right: 60px;
  }

  .enLocation {
    right: 140px;
  }

  .auth-content_group .coinName {
    height: 40px;
    line-height: 40px;
    padding-left: 10px;
    border: 1px solid #dddddd;
    color: #000;
    font-size: 14px;
    width: 100%;
    background: #f0f0f0;
  }
  .pl120{
    padding-left: 120px;
  }
  .redt{
    color: red;
  }
  .gray_color{
    color: #888;
  }
</style>
<template>
  <div v-if="withdrawType1 === 'cardLoad'" class="mention-money_info" >
    <!-- this is card load page -->
    <div class="auth-content_group metion" style="margin-top:0;">
      <p class="title clearfix">
        Card No.
      </p>
     <!--  <input class="input ipt_hover"
             type="number"
             step=""
             v-model.trim="upi_card_number"
             placeholder="Please complete your card application."
             readonly
             > -->
      <span class="input ipt_hover" style="margin: 10px 20px 0px">{{upi_card_number}}</span>
      <p class="title clearfix">
      <!-- <span class="gray_color">Please complete your card application.</span> -->
      </p>
    </div>
     <div
      :class="['sanj',$store.state.hex_lang.locale=='zh_cn'?'zhLocation':'enLocation']"></div>
    <div class="auth-content_group"
         :class="{'auth-content_group--error':$v.mentionCoin.amount.$error}">
      <p class="title clearfix">
        <span class="left"> {{$t('wallet.mentionCount')}}</span>
        <span class="right">
         {{$t('wallet.usable')}}：<span class="canuse_amount">{{canuseamount}}</span>
          {{$t('wallet.quota')}}：<span>{{quota}} {{currencyAll.currency.currencyname.toUpperCase()}}</span>
        </span>
      </p>
      <input class="input ipt_hover"
             type="text"
             step="0.00000001"
             v-model.trim="$v.mentionCoin.amount.$model"
             :placeholder="$t('wallet.mentionCountInput')">
      <span v-if="total_amount_verfiy_upi === 1" style="color: red;margin-left: 10px;">{{$t('wallet.upiMixWithdraw')}}</span>
      <span v-else-if="total_amount_verfiy_upi === 2" style="color: red;margin-left: 10px;">{{$t('wallet.upiMaxWithdraw')}}</span>
      <span v-else-if="total_amount_verfiy_upi === 3" style="color: red;margin-left: 10px;">{{$t('wallet.upiMixFointsWithdraw')}}</span>
      <span v-else-if="total_amount_verfiy_upi === 4" style="color: red;margin-left: 10px;">{{$t('wallet.canuseAmountWithdraw')}}</span>
    </div>
    <!--手机验证-->
    <!-- <div class="auth-content_group auth-content_group_code mention-money"
         v-if="$userinfo.isphoneauthed"
         :class="{'auth-content_group--error':$v.addressCode.smsverifycode.$error}">
      <p class="title clearfix">
        <span class="left">{{$t('formMenu.noteInputVerification')}}</span>
        <span class="normal-tip_error right"
              v-if="!$v.addressCode.smsverifycode.required">{{$t('formMenu.phoneCodeVerificationNone')}}</span>
      </p>
      <div class="auth-content_group_mail">
        <input class="input"
               :placeholder="$t('formMenu.phoneInputVerification')"
               type="text"
               v-model.trim="$v.addressCode.smsverifycode.$model">
        <verifycode :phone="$userinfo.phone"></verifycode>
      </div>
    </div> -->
        <!--邮箱验证-->
    <div class="auth-content_group auth-content_group_code mention-money"
         v-if="$userinfo.isemailauthed"
         :class="{'auth-content_group--error':$v.addressCode.emailverifycode.$error}">
      <p class="title clearfix">
        <span class="left">{{$t('formMenu.emailCodeVerification')}}</span>
        <span class="normal-tip_error right"
              v-if="!$v.addressCode.emailverifycode.required">{{$t('formMenu.emailCodeVerificationNone')}}</span>
      </p>
      <div class="auth-content_group_mail">
        <input class="input"
               :placeholder="$t('formMenu.emialInputVerification')"
               type="text"
               v-model.trim="$v.addressCode.emailverifycode.$model">
        <verifycode :email="$userinfo.email"></verifycode>
      </div>
    </div>

    <!--  -->
    <div class="auth-content_group"
         v-if="$userinfo.isopenpaypassword&&ismax2btc"
         :class="{'auth-content_group--error':$v.addressCode.paypassword.$error}">
      <p class="title clearfix">
        <span class="left">{{$t('wallet.payPassword')}}</span>
        <span class="normal-tip_error right"
              v-if="!$v.addressCode.paypassword.required">{{$t('wallet.payPasswordNone')}}</span>
      </p>
      <input class="input ipt_hover"
             v-model.trim="$v.addressCode.paypassword.$model"
             :placeholder="$t('wallet.payPasswordInput')"
             type="password">
    </div>
     <!--  -->
    <div class="auth-content_group auth-content_group_account clearfix">
      <span
        class="left">{{$t("wallet.serviceCharge")}}：{{upi_fee}} USDT</span>
      <span class="pl120">USDT = {{imove_exchange_rate}} USD</span>
      <span class="right">{{$t("wallet.actual")}}： ≈ {{upi_amount}} USD</span>
    </div>
     <!--  -->
    <div class="auth-content_button button-loading--por"
         v-loading="addstate"
         @click="confirMention">{{$t("wallet.confirmMention")}}
    </div>
 </div>
  <div v-else-if="withdrawType1 === 'withdrawalImove'" class="mention-money_info">
    <!-- this is imove withdraw page -->
     <div
      :class="['sanj',$store.state.hex_lang.locale=='zh_cn'?'zhLocation':'enLocation']"></div>
    <div class="auth-content_group"
         :class="{'auth-content_group--error':imove_account_no_verfiy}">

      <input class="input ipt_hover"
             type="text" v-model.trim="mentionCoin.address" placeholder="imove No.">
      <span v-if="imove_account_no_verfiy" style="color: red;margin-left: 10px;">{{$t('wallet.imoveAccounNoError')}}</span>
    <p class="title clearfix">
       <!--  <span class="left gray_color">We will transfer the fund to your own imove account.
</span> -->
      </p>
    </div>
    <!--标签-->
    <div class="auth-content_group" v-if="mentionCoin.remarktag">
      <p class="title clearfix">
        <span class="left ">{{$t("c2c.Addresslabel")}}</span>
      </p>
      <div class="coinName">{{mentionCoin.remarktag}}</div>
    </div>

    <div class="auth-content_group"
         :class="{'auth-content_group--error':total_amount_verfiy_imove != 0}">
      <p class="title clearfix">
        <span class="left"> {{$t('wallet.mentionCount')}}</span>
        <span class="right">
         {{$t('wallet.usable')}}：<span class="canuse_amount">{{canuseamount}}</span>
          {{$t('wallet.quota')}}：<span>{{quota}} {{currencyAll.currency.currencyname.toUpperCase()}}</span>
        </span>
      </p>
      <input class="input ipt_hover"
             type="text"
             step="0.00000001"
             v-model.trim="$v.mentionCoin.amount.$model"
             :placeholder="$t('wallet.mentionCountInput')">
      <span v-if="total_amount_verfiy_imove == 1" style="color: red;margin-left: 10px;">{{$t('wallet.imoveMixWithdraw')}}</span>
      <span v-else-if="total_amount_verfiy_imove == 2" style="color: red;margin-left: 10px;">{{$t('wallet.imoveMaxWithdraw')}}</span>
      <span v-else-if="total_amount_verfiy_imove == 3" style="color: red;margin-left: 10px;">{{$t('wallet.imoveMixFointsWithdraw')}}</span>
      <span v-else-if="total_amount_verfiy_imove == 4" style="color: red;margin-left: 10px;">{{$t('wallet.canuseAmountWithdraw')}}</span>
    </div>
    <!--手机验证-->
    <!-- <div class="auth-content_group auth-content_group_code mention-money"
         v-if="$userinfo.isphoneauthed"
         :class="{'auth-content_group--error':$v.addressCode.smsverifycode.$error}">
      <p class="title clearfix">
        <span class="left">{{$t('formMenu.noteInputVerification')}}</span>
        <span class="normal-tip_error right"
              v-if="!$v.addressCode.smsverifycode.required">{{$t('formMenu.phoneCodeVerificationNone')}}</span>
      </p>
      <div class="auth-content_group_mail">
        <input class="input"
               :placeholder="$t('formMenu.phoneInputVerification')"
               type="text"
               v-model.trim="$v.addressCode.smsverifycode.$model">
        <verifycode :phone="$userinfo.phone"></verifycode>
      </div>
    </div> -->
    <!--邮箱验证-->
    <div class="auth-content_group auth-content_group_code mention-money"
         v-if="$userinfo.isemailauthed"
         :class="{'auth-content_group--error':$v.addressCode.emailverifycode.$error}">
      <p class="title clearfix">
        <span class="left">{{$t('formMenu.emailCodeVerification')}}</span>
        <span class="normal-tip_error right"
              v-if="!$v.addressCode.emailverifycode.required">{{$t('formMenu.emailCodeVerificationNone')}}</span>
      </p>
      <div class="auth-content_group_mail">
        <input class="input"
               :placeholder="$t('formMenu.emialInputVerification')"
               type="text"
               v-model.trim="$v.addressCode.emailverifycode.$model">
        <verifycode :email="$userinfo.email"></verifycode>
      </div>
    </div>

    <!--小于2btc只校验资金密码-->
    <!--交易密码验证-->
    <div class="auth-content_group"
         v-if="$userinfo.isopenpaypassword&&ismax2btc"
         :class="{'auth-content_group--error':$v.addressCode.paypassword.$error}">
      <p class="title clearfix">
        <span class="left">{{$t('wallet.payPassword')}}</span>
        <span class="normal-tip_error right"
              v-if="!$v.addressCode.paypassword.required">{{$t('wallet.payPasswordNone')}}</span>
      </p>
      <input class="input ipt_hover"
             v-model.trim="$v.addressCode.paypassword.$model"
             :placeholder="$t('wallet.payPasswordInput')"
             type="password">
    </div>
    <div v-else-if="!ismax2btc" class="auth-content_group clearfix" style="margin-top: 0">
      <!--交易密码验证-->
      <div class="auth-content_group"
           v-if="$userinfo.isopenpaypassword"
           :class="{'auth-content_group--error':$v.addressCode.paypassword.$error,'left':$userinfo.isopengoogleverify}">
        <p class="title clearfix">
          <span class="left">{{$t('wallet.payPassword')}}</span>
          <span class="normal-tip_error right"
                v-if="!$v.addressCode.paypassword.required">{{$t('wallet.payPasswordNone')}}</span>
        </p>
        <input class="input ipt_hover"
               v-model.trim="$v.addressCode.paypassword.$model"
               :placeholder="$t('wallet.payPasswordInput')"
               type="password">
      </div>
      <!--谷歌验证码-->
      <div class="auth-content_group right"
           v-if="$userinfo.isopengoogleverify"
           :class="{'auth-content_group--error':$v.addressCode.googleverifycode.$error}">
        <p class="title clearfix">
          <span class="left">{{$t('formMenu.googleCodeVerification')}}</span>
          <span class="normal-tip_error right"
                v-if="!$v.addressCode.googleverifycode.required">{{$t('formMenu.googleCodeVerificationNone')}}</span>
        </p>
        <input class="input ipt_hover"
               v-model.trim="$v.addressCode.googleverifycode.$model"
               :placeholder="$t('formMenu.googleInputVerification')"
               type="text">
      </div>
    </div>
    <div class="auth-content_group auth-content_group_account clearfix">
      <span
        class="left">{{$t("wallet.serviceCharge")}}：{{imove_fee}} USDT</span>
         <span class="left pl120">USDT = {{imove_exchange_rate}} USD</span>
      <span class="right">{{$t("wallet.actual")}}：≈ {{imove_amount}} USD</span>
    </div>

    <div class="auth-content_button button-loading--por"
         v-loading="addstate"
         @click="confirMention">{{$t("wallet.confirmMention")}}
    </div>

    <popup v-show='popupState'
           @closePopup="showAddress"
           :currency='currencyAll.currency'/>
    </div>
  <div v-else class="mention-money_info">
    <div
      :class="['sanj',$store.state.hex_lang.locale=='zh_cn'?'zhLocation':'enLocation']"></div>
    <div class="auth-content_group mention">
      <p class="title">{{$t('wallet.mentionTo')}}</p>
      <div class='mentionAddress clearfix'>
        <div class='left choice clearfix' :class="{'auth-content_group--error':!addressState}">
          <addressselect
            :currency='currencyAll.currency'
            @address:change="changeAddress"
            @address:removechange="removechangeAddress"
            :mentionCoin='mentionCoin.currency'/>
        </div>
        <div class='left manage'>
          <p @click="showAddress">{{$t('wallet.addressManageAdd')}}</p>
          <nuxt-link
            to='/person/address/mention-site'
            class="manageaddress"
            tag="p">{{$t('wallet.addressManage')}}
          </nuxt-link>
        </div>
      </div>
    </div>
    <!--标签-->
    <div class="auth-content_group" v-if="mentionCoin.remarktag">
      <p class="title clearfix">
        <span class="left ">{{$t("c2c.Addresslabel")}}</span>
      </p>
      <div class="coinName">{{mentionCoin.remarktag}}</div>
    </div>

    <div class="auth-content_group"
         :class="{'auth-content_group--error':$v.mentionCoin.amount.$error}">
      <p class="title clearfix">
        <span class="left"> {{$t('wallet.mentionCount')}}</span>
        <span class="right">
         {{$t('wallet.usable')}}：<span class="canuse_amount">{{canuseamount}}</span>
          {{$t('wallet.quota')}}：<span>{{quota}} {{currencyAll.currency.currencyname.toUpperCase()}}</span>
        </span>
      </p>
      <input class="input ipt_hover"
             type="number"
             step="0.00000001"
             v-model.trim="$v.mentionCoin.amount.$model"
             :placeholder="$t('wallet.mentionCountInput')">
    <span v-if="total_amount_verfiy_upi === 6" style="color: red;margin-left: 10px;">{{$t('wallet.upiIntegerWithdraw')}}</span>
    </div>
    <!--手机验证-->
    <!-- <div class="auth-content_group auth-content_group_code mention-money"
         v-if="$userinfo.isphoneauthed"
         :class="{'auth-content_group--error':$v.addressCode.smsverifycode.$error}">
      <p class="title clearfix">
        <span class="left">{{$t('formMenu.noteInputVerification')}}</span>
        <span class="normal-tip_error right"
              v-if="!$v.addressCode.smsverifycode.required">{{$t('formMenu.phoneCodeVerificationNone')}}</span>
      </p>
      <div class="auth-content_group_mail">
        <input class="input"
               :placeholder="$t('formMenu.phoneInputVerification')"
               type="text"
               v-model.trim="$v.addressCode.smsverifycode.$model">
        <verifycode :phone="$userinfo.phone"></verifycode>
      </div>
    </div> -->
    <!--邮箱验证-->
    <div class="auth-content_group auth-content_group_code mention-money"
         v-if="$userinfo.isemailauthed"
         :class="{'auth-content_group--error':$v.addressCode.emailverifycode.$error}">
      <p class="title clearfix">
        <span class="left">{{$t('formMenu.emailCodeVerification')}}</span>
        <span class="normal-tip_error right"
              v-if="!$v.addressCode.emailverifycode.required">{{$t('formMenu.emailCodeVerificationNone')}}</span>
      </p>
      <div class="auth-content_group_mail">
        <input class="input"
               :placeholder="$t('formMenu.emialInputVerification')"
               type="text"
               v-model.trim="$v.addressCode.emailverifycode.$model">
        <verifycode :email="$userinfo.email"></verifycode>
      </div>
    </div>

    <!--小于2btc只校验资金密码-->
    <!--交易密码验证-->
    <div class="auth-content_group"
         v-if="$userinfo.isopenpaypassword&&ismax2btc"
         :class="{'auth-content_group--error':$v.addressCode.paypassword.$error}">
      <p class="title clearfix">
        <span class="left">{{$t('wallet.payPassword')}}</span>
        <span class="normal-tip_error right"
              v-if="!$v.addressCode.paypassword.required">{{$t('wallet.payPasswordNone')}}</span>
      </p>
      <input class="input ipt_hover"
             v-model.trim="$v.addressCode.paypassword.$model"
             :placeholder="$t('wallet.payPasswordInput')"
             type="password">
    </div>
    <div v-else-if="!ismax2btc" class="auth-content_group clearfix" style="margin-top: 0">
      <!--交易密码验证-->
      <div class="auth-content_group"
           v-if="$userinfo.isopenpaypassword"
           :class="{'auth-content_group--error':$v.addressCode.paypassword.$error,'left':$userinfo.isopengoogleverify}">
        <p class="title clearfix">
          <span class="left">{{$t('wallet.payPassword')}}</span>
          <span class="normal-tip_error right"
                v-if="!$v.addressCode.paypassword.required">{{$t('wallet.payPasswordNone')}}</span>
        </p>
        <input class="input ipt_hover"
               v-model.trim="$v.addressCode.paypassword.$model"
               :placeholder="$t('wallet.payPasswordInput')"
               type="password">
      </div>
      <!--谷歌验证码-->
      <div class="auth-content_group right"
           v-if="$userinfo.isopengoogleverify"
           :class="{'auth-content_group--error':$v.addressCode.googleverifycode.$error}">
        <p class="title clearfix">
          <span class="left">{{$t('formMenu.googleCodeVerification')}}</span>
          <span class="normal-tip_error right"
                v-if="!$v.addressCode.googleverifycode.required">{{$t('formMenu.googleCodeVerificationNone')}}</span>
        </p>
        <input class="input ipt_hover"
               v-model.trim="$v.addressCode.googleverifycode.$model"
               :placeholder="$t('formMenu.googleInputVerification')"
               type="text">
      </div>
    </div>
    <div class="auth-content_group auth-content_group_account clearfix">
      <span
        class="left">{{$t("wallet.serviceCharge")}}：{{currencyAll.currency.withdrawminfee}}</span>
      <span class="right">{{$t("wallet.actual")}}：{{mentionCoin.account}}</span>
    </div>

    <div class="auth-content_button button-loading--por"
         v-loading="addstate"
         @click="confirMention">{{$t("wallet.confirmMention")}}
    </div>

    <popup v-show='popupState'
           @closePopup="showAddress"
           :currency='currencyAll.currency'/>
  </div>
</template>

<script>
  import {required} from 'vuelidate/lib/validators'
  import addressselect from '@/components/security/mantion-address-select'
  import popup from '@/components/security/popup-add-mantion-address'
  import verifycode from '@/components/public/verifycode'
  import crypto from "@/plugins/axios/crypto"

  export default {
    name: 'mention-money',
    components: {
      addressselect,
      popup,
      verifycode
    },
    props: ['currencyAll', 'maxmount', 'decimal', 'withdrawType1'],
    validations: {
      mentionCoin: {
        amount: {//数量
          required,
          isUnique(value) {
      
            if (value === '') return true
            if (Number(value) <= this.currencyAll.currency.withdrawminfee) {
              return false
            } else {
              return true
            }
          }
        }
      },
      addressCode: {
        emailverifycode: {
          required
        },
        smsverifycode: {
          required
        },
        googleverifycode: {
          required
        },
        paypassword: {
          required
        }
      }
    },
    computed: {
      canuseamount: function () {
        return this.global_get_tofixed(this.currencyAll.canuseamount, this.decimal.a);
      },
      quota: function () {
        return this.global_get_tofixed(this.$store.getters.get_exchange_rate(this.currencyAll.currency.currencyname, this.maxmount), this.decimal.a);
      },
      ismax2btc: function () {
        return (this.$store.state.user_allwithdrawlimtperday - this.$userinfo.withdrawlimtperday) <= 2
      }
    },
    watch: {
      'mentionCoin.amount': function () {
        this.mentionCoin.amount = this.mentionCoin.amount.replace(/[^\d\.]/g, '')
        if(this.withdrawType1 == 'withdrawalImove'){
          this.imove_exchange_rate = this.global_get_tofixed(this.$store.getters.get_exchange_rate_by_name('usdt','usd')*0.99,8)
          if(this.mentionCoin.amount < 50){
            this.total_amount_verfiy_imove = 1
          }else if(Number(this.mentionCoin.amount) > this.canuseamount){
            this.total_amount_verfiy_imove = 4
          }else if (this.mentionCoin.amount > 50000) {
            this.total_amount_verfiy_imove = 2
          }else{
            var is_lttwofoints_imove = this.mentionCoin.amount.match(/^\d+(\.\d{1,8})?$/)
            if(is_lttwofoints_imove === null){
              this.total_amount_verfiy_imove = 3
            }else{
              this.total_amount_verfiy_imove = 0
            }
          }

          this.currencyAll.currency.withdrawminfee = this.global_get_tofixed(this.mentionCoin.amount*0.0085,8)
          this.imove_fee = this.currencyAll.currency.withdrawminfee
          this.imove_amount = this.global_get_tofixed(this.$np.minus(this.mentionCoin.amount, this.currencyAll.currency.withdrawminfee) * this.imove_exchange_rate,2)
        }else if (this.withdrawType1 == 'cardLoad') {
          this.imove_exchange_rate = this.global_get_tofixed(this.$store.getters.get_exchange_rate_by_name('usdt','usd')*0.99,8)
          if(this.mentionCoin.amount < 50){
            this.total_amount_verfiy_upi = 1
          }else if(Number(this.mentionCoin.amount) > this.canuseamount){
            this.total_amount_verfiy_upi = 4
          }else if (this.mentionCoin.amount > 8000) {
            this.total_amount_verfiy_upi = 2
          }else{
            var is_lttwofoints_upi = this.mentionCoin.amount.match(/^\d+(\.\d{1,2})?$/)
            if(is_lttwofoints_upi === null){
              this.total_amount_verfiy_upi = 3
            }else{
              this.total_amount_verfiy_upi = 0
            }
          }

          this.currencyAll.currency.withdrawminfee = this.global_get_tofixed(this.mentionCoin.amount*0.025,8) < 10 ? 10 : this.global_get_tofixed(this.mentionCoin.amount*0.025,8)
          this.upi_fee = this.currencyAll.currency.withdrawminfee
          this.upi_amount = this.global_get_tofixed(this.$np.minus(this.mentionCoin.amount, this.currencyAll.currency.withdrawminfee) * this.imove_exchange_rate,2)
        } else{
          if (this.currencyAll.currency.currencyname.toUpperCase() == 'NEO') {
            var is_ltint = this.mentionCoin.amount.match(/^[1-9]\d*$/)
            if(is_ltint === null){
              this.total_amount_verfiy_upi = 6
            }else{
              this.total_amount_verfiy_upi = 0
            }
          }
          const num = this.$np.minus(this.mentionCoin.amount, this.currencyAll.currency.withdrawminfee)
          this.mentionCoin.account = parseFloat(num) <= 0 ? 0 : num
        }
      },
      'mentionCoin.address':function () {
        if(this.withdrawType1 == 'withdrawalImove'){
          this.mentionCoin.address = this.mentionCoin.address.replace(/\D/g, '')

          var is_imove_no_effective = this.mentionCoin.address.toString().length
          if(is_imove_no_effective != 6){
            this.imove_account_no_verfiy = true
          }else{
            this.imove_account_no_verfiy = false
          }
        }
      }
    },
    data() {
      return {
        popupState: '',
        choiceCion: '',
        mentionCoin: this.initMention(),
        addstate: false,
        addressCode: {
          googleverifycode: '',
          emailverifycode: '',
          smsverifycode: '',
          paypassword: ''
        },
        addressState: true,
        ctype: '',
        imove_exchange_rate: this.global_get_tofixed(this.$store.getters.get_exchange_rate_by_name('usdt','usd')*0.99,8),
        imove_amount: 0,
        imove_fee: 0,
        imove_account_no_verfiy: false,
        total_amount_verfiy_imove: 0,
        total_amount_verfiy_upi: 0,
        upi_amount: 0,
        upi_fee: 0,
        upi_card_number: this.$parent.upi_card_number_f,
      }
    },
    mounted() {
      if (this.initverify()) {
        this.$store.commit('set_message', {type: 'error', text: this.$t('patch.popengoogle')});
        this.$router.push('/person/security')
      }
      if(this.withdrawType1 == 'withdrawalImove' || this.withdrawType1 == 'cardLoad'){
        this.currencyAll.currency.withdrawminfee = 0
        this.imove_exchange_rate = this.global_get_tofixed(this.$store.getters.get_exchange_rate_by_name('usdt','usd')*0.99,8)
      }
    },
    created() {
    },
    methods: {
      initverify() {
        /*已提数量大于2btc并且没有开启谷歌验证*/
        return !this.ismax2btc && !this.$userinfo.isopengoogleverify
      },
      verifyCount() {
        const coin = this.$v.mentionCoin
        if (!coin.amount.isUnique) {
          this.$store.commit('set_message', {
            type: 'error', text: this.$t('patch.mentionFell')
          })
        }
      },
      confirMention() {
        const _self = this
        const coin = Object.assign({}, _self.mentionCoin)
        let state = false
        const _coin = _self.$v.mentionCoin
        _coin.$touch()
        if (_coin.$invalid) {
          state = true
        }
        if(this.withdrawType1 == 'withdrawalImove'){
          if(coin.address == '') this.imove_account_no_verfiy = true;
          if(coin.amount == '') this.total_amount_verfiy_imove = 1;
          if(this.total_amount_verfiy_imove !== 0)  state = true;
          if(this.imove_account_no_verfiy) state = true;
        }else if (this.withdrawType1 == 'cardLoad') {
          coin.address = this.upi_card_number
          if(coin.amount == '') this.total_amount_verfiy_upi = 1;
          if(this.total_amount_verfiy_upi !== 0)  state = true
        }else{
          this.verifyCount()
        }
        if (!coin.address) {
          this.addressState = false
          state = true
        } else {
          this.addressState = true
        }

        if (this.$userinfo.isopenpaypassword) {
          const e = _self.$v.addressCode.paypassword
          e.$touch()
          if (e.$invalid) {
            state = true
          }
        }
        //大于单日已提币数量并且打开goole验证
        if (!this.ismax2btc && this.$userinfo.isopengoogleverify) {
          const e = _self.$v.addressCode.googleverifycode
          e.$touch()
          if (e.$invalid) {
            state = true
          }
        }

        // if (this.$userinfo.isphoneauthed) {
        //   const e = _self.$v.addressCode.smsverifycode
        //   e.$touch()
        //   if (e.$invalid) {
        //     state = true
        //   }
        // } else 
        if (this.$userinfo.isemailauthed) {
          const e = _self.$v.addressCode.emailverifycode
          e.$touch()
          if (e.$invalid) {
            state = true
          }
        }

        if (state) {
          return
        }
        if (Number(coin.amount) > this.canuseamount) {
          _self.$store.commit('set_message', {
            type: 'error', text: this.$t('patch.usableCount')
          })
          return
        }
        if (Number(coin.amount) > this.quota) {
          _self.$store.commit('set_message', {
            type: 'error', text: this.$t('patch.exceedMention')
          })
          return
        }
        if (this.ismax2btc) {
          delete coin.googleverifycode
        } else {
          coin.googleverifycode = this.addressCode.googleverifycode
        }
        if (this.$userinfo.isphoneauthed) {
          coin.smsverifycode = this.addressCode.smsverifycode
          delete coin.emailverifycode
        } else {
          coin.emailverifycode = this.addressCode.emailverifycode
          delete coin.smsverifycode
        }

        coin.currencyid = this.currencyAll.currency.id
        coin.fee = this.currencyAll.currency.withdrawminfee

        if (this.currencyAll.currency.currencyname.toLowerCase() === 'usdt') {
          if (this.withdrawType1 == 'withdrawalImove') {
            coin.ctype = 'imove'
            coin.address = 'imove:'+ coin.address
          }else if(this.withdrawType1 == 'cardLoad'){
            coin.ctype = 'upi'
            coin.address = 'upi:'+ coin.address
          }else{
            coin.ctype = ((this.ctype == null || this.ctype == '' || this.ctype === 'btc') ? 'btc' : 'eth')
          }
        } else {
          delete coin.ctype
        }

        if (this.addressCode.paypassword) {
          coin.paypassword = crypto.md5String(this.addressCode.paypassword)
        }

        if (_self.addstate) return
        _self.addstate = true
        _self.$store.dispatch('user_assets_withdraw', coin)
          .then(({data, msg}) => {
            if (data) {
              /*更新用户当日可提币的数量*/
              return _self.global_refresh_user_info()
                .then(() => {
                  _self.$store.commit('set_message', {
                    type: 'ok', text: msg
                  })
                  _self.$parent.showDetailRow(_self.currencyAll, 'mentionMoney')
                  _self.$emit('wallet:getInfo')
                })
            }
          })
          .then((data) => {
            _self.addstate = false
          })
      },
      changeAddress(res) {
        const address = res.address
        if (address) {
          this.addressState = true
        }
        if (res.remarktag) {
          this.mentionCoin.remarktag = res.remarktag
        }

        this.ctype = res.ctype
        this.mentionCoin.address = address
      },
      removechangeAddress(res) {
        if (res.address == this.mentionCoin.address) {
          this.mentionCoin.remarktag = ''
          this.mentionCoin.address = ''
          this.addressState = false
        }
      },
      initMention() {
        const mention = {
          remarktag: '',
          currencyid: '',
          address: '',
          amount: '',
          fee: 0,
          account: 0
        }
        mention.currency = this.currencyAll.currency.currencyname
        return mention
      },
      showAddress(val) {
        if (val == 0) {
        }
        this.popupState = !this.popupState
      }
    }
  }
</script>
