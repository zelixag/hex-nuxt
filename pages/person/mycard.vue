<style lang='less' scoped>
    img {
        width: unset;
    }

    .content {
        background: white;
        padding: 0 20px 20px 20px;
        margin-bottom: 10px;
    }

    .tag {
        height: 50px;
    }

    .tag a {
        display: inline-block;
        float: left;
        margin-right: 40px;
        line-height: 50px;
        color: #999;
        font-size: 14px;
        font-weight: 700;
    }

    .tag .cur {
        color: #14a2a5 !important;
    }

    .h5_blue {
        color: #14a2a5;
        background: none;
        padding: 0;
        font-weight: 700;
        margin: 10px 0;
    }

    .intro {
        color: #333;
        font-size: 13px;
        line-height: 24px;
        display: inline-block;
    }

    h4 {
        color: #14a2a5;
        font-size: 16px;
        font-weight: 600;
        margin-top: 20px;
    }

    form {
        font-size: 13px;
        color: #666;
    }

    .row {
        margin-left: 15px;
        margin-right: 15px;
    }

    table {
        background-color: transparent;
        border-spacing: 0;
        border-collapse: collapse;
    }

    table tr td, table tr th {
        text-align: left;
        padding: 12px 16px;
        border-bottom: 0.5px solid #e4e6e9;
    }

    table tr th {
        font-weight: 600;
    }

    button, select {
        text-transform: none;
    }

    button, input, optgroup, select, textarea {
        margin: 0;
        font: inherit;
    }

    .select_w {
        appearance: none;
        -moz-appearance: none;
        -webkit-appearance: none;
        outline: none;
        background: url(../../static/images/select_drop_black.png) no-repeat right 6px center, #fff;
        border: 1px solid #cccdcf;
        border-radius: 0px;
        color: #666;
        padding: 10px;
        width: 50%;
        position: relative;
        padding-right: 38px;
    }
    .select_input {
      width: 50%;
    }
    .el-select.select_input.lv2 input {
      width: 100%;
      border-radius: 0;
      }
    .red {
        color: red;
    }

    .tit {
        color: #14a2a5;
        font-weight: 600;
        font-size: 14px;
    }

    .input_w {
        outline: none;
        background: #fff;
        border: 1px solid #cccdcf;
        border-radius: 0px;
        color: #222f44;
        padding: 10px;
        width: 50%;
        position: relative;
        color: #666;
    }

    h5 img {
        margin-right: 8px;
        width: 22px;
        vertical-align: bottom;
    }

    input[type=checkbox] {
        margin: 4px 4px 0 0;
        margin-top: 1px;
        line-height: normal;
        -webkit-appearance: checkbox;
        -moz-appearance: checkbox;
        appearance: checkbox;
        box-sizing: border-box;
        padding: 0;
        font-weight: 600;
    }

    .linkblue {
        color: #14a2a5;
    }

    button, input[type=button], input[type=reset], input[type=submit] {
        -webkit-appearance: button;
        cursor: pointer;
    }

    .btnbig {
        border: 1px solid #14a2a5;
    }

    .bg_aquablue_outline {
        padding: 8px 43px;
        border-radius: 2px;
        color: #2babae;
        margin: 0 5px;
    }

    .bg_aquablue {
        padding: 8px 50px;
        background: #2babae;
        color: #fff;
        border-radius: 2px;
    }

    .bg_aquablue:hover {
        color: #fff;
        background: #1f96a7;
    }

    .mt20 {
        margin-top: 20px;
    }

    .mt10 {
        margin-top: 10px;
    }

    .appli2 h4, .appli3 h4, .appli4 p {
        display: inline-block;
    }

    .img_complete {
        width: 60px;
        margin-right: 10px;
        vertical-align: middle;
    }

    .cardApp_box {
        font-weight: 600;
        padding: 20px;
        border-radius: 10px;
        border: 1px solid #b2cbcc;
        box-shadow: 0px 3px 0px #abcccb;
        font-size: 14px;
        color: #333;

    }
    .el-date-editor.el-input, .el-date-editor.el-input__inner {
      width: 50% !important;
    }
    .el-select.select_input.lv2 input {
      width: 100% !important;
    }
    .el-input__inner {
       width: 100% !important;
    }
    .linkblue {
        color: #14a2a5;
    }

    .ralign {
        text-align: right !important;
        font-size: 14px;
    }

    .appli4 p {
        font-size: 14px;
        color: #333;
        text-align: center;
    }

    .appli4 p a {
        color: #14a2a5;
    }

    .appli4 p a:hover {
        text-decoration: underline;
    }

    .pdtrem {
        padding: 2rem;
    }

    .li_inline {
        text-align: center;
    }

    .mt0_im {
        margin-top: 0 !important;
    }

    .li_inline li {
        padding: 0 30px;
    }

    .li_inline li {
        display: inline-block;
        border-right: 1px solid #f0f0f0;
        font-size: 14px;
        width: 35%;
        color: #333;
    }

    .has-nav-dropdown {
        position: relative;
    }

    .btn:not(:disabled):not(.disabled) {
        cursor: pointer;
    }

    .bgmain_color {
        background-color: #14a2a5 !important;
    }

    .bgmain_color:hover {
        background-color: #294F83 !important;
    }

    .btn.btn-outline-primary {
        border-color: #fff;
        color: #fff;
        font-size: 14px;
        padding: 0.5rem 1.9rem;
        position: relative;
        min-width: 2rem;
        -webkit-border-radius: 1.2rem;
        -moz-border-radius: 1.2rem;
        border-radius: 1.2rem;
        display: inline-block;
    }

    .full-width {
        width: 100% !important;
    }

    .marT25 {
        margin-top: 25px;
    }
    .depositbtn{
        text-align: center;
        background:#14a2a5;
        color: #ffffff ;
        padding: 10px 0px;
        border-radius: 6px;
        border: none;
        font-size: 16px;
        width: 50%;
        margin: 30px 0;
        display: block;
      }
</style>
<template>
  <div>
    <div class="mycard">
        <div class="content tag">
            <a href="javascript:;" @click="msg=0" :class="{'cur':msg===0}">{{$t("mycard.cardApplication")}}</a>
            <a href="javascript:;" @click="msg=1" :class="{'cur':msg===1}">{{$t("mycard.manualInfo")}}</a>
        </div>
        <div class="content" v-show="msg===0">
            <!-- form1 -->
            <div class="appli1" v-if="cardApplication==1">
                <p class="intro mt20"><span
                        class="tit"> {{$t("mycard.spanRow1")}}</span><br/>
                    {{$t("mycard.spanRow2")}}<br/>
                    {{$t("mycard.spanRow3")}}<br/>
                    {{$t("mycard.spanRow3-1")}}<br/>
                </p>
                <form action="" method="post" _lpchecked="1">
                    <h4>{{$t("mycard.cardAppForm")}}</h4>
                    <h5 class="h5_blue"><img src="../../static/images/icon_write.svg">{{$t("mycard.personalDetails")}}</h5>
                    <div class="row">
                        <table cellpadding="0" cellspacing="0" width="100%">
                            <colgroup>
                                <col width="25%">
                                <col width="75%">
                            </colgroup>
                            <tbody>
                            <tr>
                                <th>{{$t("mycard.fullName")}}</th>
                                <td>{{loginInfo.realname}}</td>
                            </tr>
                            <tr>
                                <th>{{$t("mycard.nationality")}}</th>
                                <td>
                                    <!-- {{loginInfo.countryname}} -->
                                    <el-select
                                      filterable
                                      class="select_input lv2 "
                                      popper-class="select_input_popper"
                                      :popper-append-to-body="false"
                                      v-model.trim="loginInfo.countryname"
                                      :placeholder="$t('formMenu.select')"
                                    >
                                      <el-option
                                        v-for="item in countryOptions"
                                        :key="item.countryid"
                                        :label="item.name+' +'+item.areacode"
                                        :value="item.name"
                                      >
                                        <span style="float: left">{{item.name+' +'+item.areacode }}</span>
                                        <span style="float: right;">
                                          <img :src="item.flag" style="width:20px;height:auto;padding-top:11px">
                                        </span>
                                      </el-option>
                                    </el-select>
                                </td>
                            </tr>

                            <tr>
                                <th>{{$t("mycard.cardEmail")}}</th>
                                <td v-if="loginInfo.email">{{loginInfo.email}}</td>
                                <td v-if="!loginInfo.email"><input type="text" class="input_w" v-model="email"></td>
                            </tr>
                            <tr>
                                <th>{{$t("mycard.phoneNO")}}</th>
                                <!-- <td v-if="loginInfo.phone">{{loginInfo.phone}}</td> -->
                                <td><input type="text" class="input_w" v-model="phone"></td>
                            </tr>
                            <tr>
                                <td colspan="2"><span class="red">*</span>{{$t("mycard.spanRow4")}}
                                </td>
                            </tr>
                            <tr>
                                <th>{{$t("mycard.gender")}}</th>
                                <td>

                                     <!--<el-select
                                      filterable
                                      class="select_input lv2"
                                      popper-class="select_input_popper"
                                      :popper-append-to-body="false"
                                      v-model.trim="genderSelected"
                                      :placeholder="$t('formMenu.select')"
                                    >
                                      <el-option v-for="item in sexOptions"
                                                :value="item.value"
                                                :key="item.value">
                                                {{item.text}}
                                      </el-option>
                                    </el-select> !-->

                                    <select class="select_w" v-model="genderSelected">
                                        <option :value="null" :disabled="disabled" selected="selected">{{$t("mycard.pleaseSelect")}}
                                        </option>
                                        <option value="Male">{{$t("mycard.male")}}</option>
                                        <option value="Female">{{$t("mycard.female")}}</option>
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <th>{{$t("mycard.dateOfBirth")}}</th>
                                <td>
                                <el-date-picker
                                    v-model="birthDate"
                                    type="date"
                                    value-format="yyyy-MM-dd"
                                    :placeholder="$t('formMenu.select')"
                                    >
                                  </el-date-picker>
                                  <!-- <input type="date" class="input_w" v-model="birthDate" placeholder="1991-01-01"> -->
                                </td>
                            </tr>
                            <tr>
                                <th>{{$t("mycard.countryOfBirth")}}</th>
                                <td>
                                    <el-select
                                      filterable
                                      class="select_input lv2 "
                                      popper-class="select_input_popper"
                                      :popper-append-to-body="false"
                                      v-model.trim="countrySelected"
                                      :placeholder="$t('formMenu.select')"
                                    >
                                      <el-option
                                        v-for="item in countryOptions"
                                        :key="item.countryid"
                                        :label="item.name+' +'+item.areacode"
                                        :value="item.countryid"
                                      >
                                        <span style="float: left">{{item.name+' +'+item.areacode }}</span>
                                        <span style="float: right;">
                                          <img :src="item.flag" style="width:20px;height:auto;padding-top:11px">
                                        </span>
                                      </el-option>
                                    </el-select>
                                </td>
                            </tr>
                            <tr>
                                <th>{{$t("mycard.civilStatus")}}</th>
                                <td>
                                    <select class="select_w" v-model="civilStatus">
                                        <option :value="null" disabled="disabled" selected="selected">{{$t("mycard.pleaseSelect")}}
                                        </option>
                                        <option value="Single">{{$t("mycard.single")}}</option>
                                        <option value="Married">{{$t("mycard.married")}}</option>
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <th>{{$t("mycard.motherMaldenSurname")}}</th>
                                <td><input type="text" class="input_w" v-model="msName"></td>
                            </tr>
                            <tr>
                                <th>{{$t("mycard.motherFirstName")}}</th>
                                <td><input type="text" class="input_w" v-model="mfName"></td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    <h5 class="h5_blue mt20"><img src="../../static/images/icon_card.svg">{{$t("mycard.cardApplication2")}}</h5>
                    <div class="row">
                        <table cellpadding="0" cellspacing="0" width="100%">
                            <colgroup>
                                <col width="25%">
                                <col width="75%">
                            </colgroup>
                            <tbody>
                            <tr>
                                <th>{{$t("mycard.typeOfCard")}}</th>
                                <td>{{typeCard}}</td>
                            </tr>
                            <tr>
                                <th>{{$t("mycard.applicationAmount")}}</th>
                                <td>{{applicationAmount}}</td>
                            </tr>

                            <tr>
                                <th>{{$t("mycard.cardFee")}}</th>
                                <td>{{cardFee}}USDT</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    <h5 class="h5_blue mt20"><img src="../../static/images/icon_mail01.svg">{{$t("mycard.deliveryAddress")}}</h5>
                    <div class="row">
                        <table cellpadding="0" cellspacing="0" width="100%">
                            <colgroup>
                                <col width="25%">
                                <col width="75%">
                            </colgroup>
                            <tbody>
                            <tr>
                                <th>{{$t("mycard.shippingCountry")}}</th>
                                <td>
                                     <el-select
                                        filterable
                                        class="select_input lv2"
                                        popper-class="select_input_popper"
                                        :popper-append-to-body="false"
                                        v-model.trim="shipCountrySelected"
                                        :placeholder="$t('formMenu.select')"
                                      >
                                        <el-option
                                          v-for="item in countryOptions"
                                          :key="item.countryid"
                                          :label="item.name+' +'+item.areacode"
                                          :value="item.countryid"
                                        >
                                          <span style="float: left">{{item.name+' +'+item.areacode }}</span>
                                          <span style="float: right;">
                                            <img :src="item.flag" style="width:20px;height:auto;padding-top:11px">
                                          </span>
                                        </el-option>
                                      </el-select>
                                </td>
                            </tr>
                            <tr>
                                <th>{{$t("mycard.shippingState")}}</th>
                                <td><input type="text" class="input_w" v-model="shipState"></td>
                            </tr>
                            <tr>
                                <th>{{$t("mycard.shippingCity")}}</th>
                                <td><input type="text" class="input_w" v-model="shipCity" required></td>
                            </tr>
                            <tr>
                                <th>{{$t("mycard.shippingStreet")}}</th>
                                <td><input type="text" class="input_w" v-model="shipStreet"></td>
                            </tr>
                            <tr>
                                <th>{{$t("mycard.shippingCode")}}</th>
                                <td><input type="text" class="input_w" v-model="shipCode" required></td>
                            </tr>
                            <tr>
                                <th>{{$t("mycard.postFee")}}</th>
                                <td>{{postFee}}USDT</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    <h5 class="h5_blue mt20"><img src="../../static/images/icon_mail01.svg">{{$t("mycard.attachment")}}</h5>
                    <div v-if="lang == 'ja_jp'">
                        <p>-><a href="../../file/UPI_Prepaid_Card_Application_Form.pdf"
                                target="_blank" class="linkblue" style="text-decoration: underline">{{$t("mycard.prepaidCard")}}</a>{{$t("mycard.spanRow19")}}
                        <a target="_blank" class="linkblue" style="text-decoration: underline" href="https://use.igsp.cc/guide.html">{{$t("mycard.spanRow21")}}</a>{{$t("mycard.spanRow20")}}</p>
                    </div>
                    <div v-else>
                        <p>{{$t("mycard.spanRow19")}} <a href="../../file/UPI_Prepaid_Card_Application_Form.pdf"
                                target="_blank" class="linkblue" style="text-decoration: underline">{{$t("mycard.prepaidCard")}}</a>{{$t("mycard.spanRow20")}}</p>
                        <a target="_blank" class="linkblue" style="text-decoration: underline" href="https://use.igsp.cc/guide.html">{{$t("mycard.spanRow21")}}</a>
                    </div>
                     <table cellpadding="0" cellspacing="0" width="80%">
                            <colgroup>
                                <col width="50%">
                                <col width="50%">
                            </colgroup>
                            <tbody>
                              <tr>
                                <th>
                                 {{$t("mycard.UploadprepaidCard")}}
                                  </th>
                                  <td>
                                   <el-upload
                                    class=""
                                        action=""
                                        accept="application/pdf"
                                        :http-request="httpRequest"
                                        :limit="1"
                                        :on-remove="handleRemove"
                                        :before-upload="onBeforeUpload"
                                        :file-list="files">
                                        <el-button class="btn bg_aquablue btnbig mt20" size="small" type="primary">{{$t("mycard.uploadCard")}}</el-button>
                                    </el-upload>
                                  </td>
                              </tr>
                            </tbody>
                      </table>
                    <div class="row">
                        <p class="mt20"><input type="checkbox" required="" v-model="terms" name="checkbox"
                                               oninvalid="setCustomValidity('*Please read and agree to the usage clauses after you select the card.');"
                                               oninput="setCustomValidity('');" keyup="setCustomValidity('');"
                                               keydown="setCustomValidity('');"><span class="red">*</span> {{$t("mycard.spanRow5")}} <a
                                href="../../file/UPI_Prepaid_Card_TERMS_AND_CONDITIONS_20190508_ver.pdf"
                                target="_blank" class="linkblue" style="text-decoration: underline">{{$t("mycard.spanRow6")}}</a></p>
                    </div>
                    <p class="mt10">
                        <nuxt-link to="/person"><input type="button"
                                                       class="btn bg_aquablue_outline btnbig mt20"
                                                       :value="$t('legalTrad.Cancel')"></nuxt-link>
                        <input type="button" @click="applicationNext()"
                               class="btn bg_aquablue btnbig mt20" :value="$t('home.next')"></p>
                </form>
            </div>
            <!-- form2 -->
            <div class="appli2" v-if="cardApplication==2">
                <h4>{{$t("mycard.spanRow7")}}</h4>
                <div class="row mt20">
                    <form action="" method="post">
                        <table cellpadding="0" cellspacing="0" width="100%">
                            <tbody>
                            <tr>
                                <th>{{$t("mycard.fullName")}}</th>
                                <td>{{loginInfo.realname}}</td>
                            </tr>
                            <tr>
                                <th>{{$t("mycard.nationality")}}</th>
                                <td>{{loginInfo.countryname}}</td>
                            </tr>

                            <tr>
                                <th>{{$t("mycard.cardEmail")}}</th>
                                <td>{{loginInfo.email}}</td>
                            </tr>
                            <tr>
                                <th>{{$t("mycard.phoneNO")}}</th>
                                <td>{{loginInfo.phone}}</td>
                            </tr>
                            <tr>
                                <th>{{$t("mycard.gender")}}</th>
                                <td>{{genderSelected}}</td>
                            </tr>
                            <tr>
                                <th>{{$t("mycard.dateOfBirth")}}</th>
                                <td>{{birthDate}}</td>
                            </tr>
                            <tr>
                                <th>{{$t("mycard.countryOfBirth")}}</th>
                                <td>{{countryName}}</td>
                            </tr>
                            <tr>
                                <th>{{$t("mycard.civilStatus")}}</th>
                                <td>{{civilStatus}}</td>
                            </tr>
                            <tr>
                                <th>{{$t("mycard.motherMaldenSurname")}}</th>
                                <td>{{msName}}</td>
                            </tr>
                            <tr>
                                <th>{{$t("mycard.motherFirstName")}}</th>
                                <td>{{mfName}}</td>
                            </tr>
                            <tr>
                                <th>{{$t("mycard.typeOfCard")}}</th>
                                <td>{{typeCard}}</td>
                            </tr>
                            <tr>
                                <th>{{$t("mycard.applicationAmount")}}</th>
                                <td>{{applicationAmount}}</td>
                            </tr>
                            <tr>
                                <th>{{$t("mycard.shippingCountry")}}</th>
                                <td>{{shipCountryName}}</td>
                            </tr>
                            <tr>
                                <th>{{$t("mycard.shippingState")}}</th>
                                <td>{{shipState}}</td>
                            </tr>
                            <tr>
                                <th>{{$t("mycard.shippingCity")}}</th>
                                <td>{{shipCity}}</td>
                            </tr>
                            <tr>
                                <th>{{$t("mycard.shippingStreet")}}</th>
                                <td>{{shipStreet}}</td>
                            </tr>
                            <tr>
                                <th>{{$t("mycard.shippingCode")}}</th>
                                <td>{{shipCode}}</td>
                            </tr>
                            <tr>
                                <th>{{$t("mycard.cardFee")}}</th>
                                <td>{{cardFee}}USDT</td>
                            </tr>
                            <tr>
                                <th>{{$t("mycard.postFee")}}</th>
                                <td>{{postFee}}USDT</td>
                            </tr>
                            <!-- <tr>
                                <th>{{$t("mycard.debitCurrency")}}</th>
                                <td>
                                    <label><input type="radio" name="payType" @change="choicePayType" v-model="payType"
                                                  value="0">USDT</label>
                                    <label><input type="radio" name="payType" @change="choicePayType" v-model="payType"
                                                  value="1">BTC</label>
                                </td>
                            </tr> -->
                            <!-- <tr>
                                <th>{{$t("mycard.exchangeRate")}}</th>
                                <td>{{usdtousdt}}</td>
                            </tr> -->
                            <tr>
                                <th>{{$t("mycard.debitAmount")}}</th>
                                <td>{{totalAmount}}</td>
                            </tr>
                            <tr>
                                <th>{{$t("mycard.paymentMethod")}}</th>
                                <td>{{paymentMethods}}</td>
                            </tr>
                            <tr>
                                <th>{{$t("mycard.cardAppForm")}}</th>
                                <td>{{uploadData.dataName}}</td>
                            </tr>
                            </tbody>
                        </table>
                        <p><a href="">
                            <button @click="cancelConfirm()" class="btn bg_aquablue_outline btnbig mt20">{{$t('legalTrad.Cancel')}}</button>
                            </a>
                            <button class="btn bg_aquablue btnbig mt20" @click="Confirm()">{{$t('home.Confirm')}}</button>
                        </p>
                    </form>
                </div>
            </div>
            <!-- form3 -->
            <div class="appli3" v-if="cardApplication==3">
                <h4 class="mt20"><img src="../../static/images/icon_complete.svg" class="img_complete">{{$t("mycard.spanRow8")}}</h4>
                <div class="row mt20">
                    <div class="cardApp_box">{{$t("mycard.spanRow9")}}<br>
                    {{$t("mycard.spanRow10")}} <br>
                        <span class="red">*</span> {{$t("mycard.spanRow11")}}<a href="mailto:support@elitex.io" class="linkblue">support@elitex.io</a>.
                    </div>
                    <p class="ralign">
                        <nuxt-link to="/person"><input type="button" class="btn bg_aquablue_outline btnbig mt20"
                                                       value="Close"></nuxt-link>
                    </p>
                </div>
            </div>
            <!-- form4 -->
            <div class="appli4" v-if="cardApplication==4">
                <p class="mt20">{{$t("mycard.spanRow12")}}<a
                        href="/person/wallet">{{$t("mycard.spanRow13")}}</a>.</p>
            </div>
        </div>
        <div class="content" v-show="msg===1">
            <div class="row">
                <div class="pdtrem">
                    <ul class="li_inline mt0_im">
                        <li class="col-sm-2 has-nav-dropdown hover-dropdown">
                            <p class="ng-binding">{{$t("mycard.spanRow14")}}</p>
                            <a :href="pdfhref"
                               target="_blank">
                                <button class="btn btn-outline-primary marT25 marT0-xs full-width ng-binding bgmain_color"
                                        ng-click="">{{$t("mycard.spanRow15")}}
                                </button>
                            </a>
                        </li>
                        <li class="col-sm-2">
                            <p class="ng-binding">{{$t("mycard.spanRow16")}} &amp; {{$t("mycard.spanRow17")}}</p>
                            <a href="../../file/CARDS_EN_UPI_Prepaid_Card_UserManual_20190617_ver1.1.5.pdf"
                               target="_blank">
                                <button class="btn btn-outline-primary marT25 marT0-xs full-width ng-binding bgmain_color"
                                        ng-click="">{{$t("mycard.spanRow18")}}
                                </button>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>
<script>
    export default {
        name: 'mycard',
        data() {
            return {
                msg: 0,
                terms: 0,
                typeCard: 'UPI Prepaid Card',
                applicationAmount: '1 Card',
                cardFee: '15',
                loginInfo: this.$userinfo,
                email:'',
                phone:'',
                pdfhref:'../../file/CARDS_EN_UPI Prepaid Card-UserManual_20190926_ver2.2.pdf',
                birthDate: '',
                civilStatus: null,
                msName: '',
                mfName: '',
                shipState: '',
                shipCity: '',
                shipStreet: '',
                shipCode: '',
                postFee: '4',
                genderSelected: null,
                disabled: true,
                countrySelected: null,
                shipCountrySelected: null,
                cardApplication: 1,
                countryName: '',
                shipCountryName: '',
                countryOptions: [],
                uploadData: {
                    dataName: "",
                    oldFilePath:""
                },
                files:[],
                sexOptions:[{
                  value:'Male',
                  key:'Male',
                  text:'Male'
                },{
                  value:'Female',
                  key:'Female',
                  text:'Female'
                }],
                paymentMethods: '',
                payType: 0,
                usdtormb: '',
                btctormb: '',
                usdttormb: '',
                usdtousdt: '',
                totalAmount: '19 USDT',
                errMsg: false,
                lang: this.$store.state.hex_lang.locale,
            }
        },
        watch: {
          countrySelected: function (val) {
            this.countryOptions.map((item) => {
                if (item.countryid == val) {
                    this.countryName = item.engname
                }
            })
          },
          shipCountrySelected: function (val) {
            this.countryOptions.map((item) => {
                if (item.countryid == val) {
                    this.shipCountryName = item.engname
                }
            })
          },
          "$store.state.hex_lang.locale": function(val) {
            this.lang = val;
            if (val == "en_us") {
              this.flagShow = true;
              this.pdfhref = '../../file/CARDS_EN_UPI Prepaid Card-UserManual_20190926_ver2.2.pdf';
              this.langpicChange = 2;
              // this.nation.countryid = "";
              this.idType = "";
              // this.$v.$reset();
            } else if(val == "ja_jp") {
              this.pdfhref = '../../file/CARDS_JP_UPI Prepaid Card-UserManual_20190926_ver2.2.pdf';
              this.flagShow = false;
              this.langpicChange = 1;
            }
            else {
              this.pdfhref = '../../file/CARDS_ZH_UPI Prepaid Card-UserManual_20190926_ver2.2.pdf';
              this.flagShow = false;
              this.langpicChange = 1;
            }
            this.countryOptions.map(item => {
              if (val == "en_us") {
                item.chname = item.name;
                item.name = item.engname;
              } else {
                item.name = item.chname;
              }
            });
          },
          "nation.countryid": function(val) {
            //国家id
            (this.state.country = this.countryOptions.find(item => {
              if (item.countryid == "243") {
                if (this.nation.vouchertype == "1") {
                  this.flagShow = false;
                  this.lang == "en_us"
                    ? (this.langpicChange = 2)
                    : (this.langpicChange = 1);
                } else {
                  this.flagShow = true;
                }
              } else {
                this.flagShow = true;
              }
              return item.countryid == val;
            })),
              (this.nation.countryname = this.countryOptions.find(item => {
                //国家名字
                if (item.countryid == val) {
                  return item.name;
                }
              }));
          },
        },
        mounted() {
            this.loginInfo = this.$userinfo;
            this.getRate()
            this.getUPICardApplyInfo()
            // this.$store.dispatch('com_country_getlist').then(({data}) => {
            //     this.countryOptions = data;
            // })

            if(this.lang == "en_us") {
              this.pdfhref = '../../file/CARDS_EN_UPI Prepaid Card-UserManual_20190926_ver2.2.pdf';
              this.langpicChange = 2;
              this.flagShow = true;
            } else if(this.lang == "ja_jp") {
              this.pdfhref = '../../file/CARDS_JP_UPI Prepaid Card-UserManual_20190926_ver2.2.pdf';
              this.flagShow = false;
              this.langpicChange = 1;
            }
            else {
              this.pdfhref = '../../file/CARDS_ZH_UPI Prepaid Card-UserManual_20190926_ver2.2.pdf';
              this.langpicChange = 1;
              this.flagShow = false;
            }
            this.$store.dispatch("com_country_getlist").then(({ data }) => {
              this.countryOptions = data;
              this.countryOptions.map(item => {
                if (this.lang == "en_us") {
                  item.chname = item.name;
                  item.name = item.engname;
                }
              });
            });
          if (this.loginInfo.idauthauditstate != 1) {
              this.$store.commit('set_message', {type: 'error', text: this.$t('card.kycInfo')});
              this.errMsg = true;
              setTimeout(() => {
                this.$router.push('/person/authentication')
              }, 3000);
              return;
          }
        },
        methods: {
            toauthleavel() {
              this.$router.push('/person/authentication')
            },
            handleRemove(files, fileList) {
              this.uploadData.oldFilePath = ""
              this.uploadData.dataName = ""
            },
            onBeforeUpload(file)
            {
              const isPDF = file.type === 'application/pdf';
              const isLt1M = file.size / 1024 / 1024 < 5;

              if (!isPDF) {
                this.$store.commit('set_message', {type: 'error', text: this.$t('card.cardAppExtErr')});
              }
              if (!isLt1M) {
                this.$store.commit('set_message', {type: 'error', text: this.$t('card.cardAppSizeErr')});
              }
              return isPDF && isLt1M;
            },
            httpRequest(options) {
              var _self = this;
              let file = options.file;
              _self.uploadData.dataName = file.name;
              let reader = new FileReader();
              reader.readAsDataURL(file);
              reader.onload = e => {
                let base64Str = e.currentTarget.result;
                _self.CardUpload(
                    base64Str,
                    '.pdf'
                );
              };
            },
            // 上传文件
            CardUpload(base64Str,type) {
              const _self = this;
              _self.$store
                .dispatch("com_image_upload", {
                  imgbase64: base64Str.split(",")[1],
                  width: "310",
                  height: "186",
                  filename: new Date().getTime() + Number(Math.random() * 1000000000) + type
                })
                .then(res => {
                  console.log(res)
                  if (res.code == 200) {
                    _self.uploadData.oldFilePath = res.data.imgurl
                    return true;
                  }
                })
            },
            getUPICardApplyInfo() {
                this.$store.dispatch("get_user_upi_card_info",
                    {
                        "uid": this.loginInfo.uid,
                        "key": this.loginInfo.secretkey,
                        "ip": this.loginInfo.lastloginip
                    }
                ).then((res) => {
                    console.log(res)
                    if (res.code == 200) {
                        if(res.data == undefined){
                            this.cardApplication = 1
                        }else if (res.data.status == 1 || res.data.status == 2) {
                            this.cardApplication = 3
                        } else if (res.data.status == 3) {
                            this.cardApplication = 1
                        } else if (res.data.status == 4) {
                            this.cardApplication = 4
                        }
                    } else {
                        this.cardApplication = 1
                    }
                })
            },
            selectBirthCountry() {
                if (this.countrySelected != -1) {
                    this.countryOptions.map((item) => {
                        if (item.countryid == this.countrySelected) {
                            this.countryName = item.engname
                        }
                    })
                }
            },
            selectShippCountry() {
                if (this.shipCountrySelected != -1) {
                    this.countryOptions.map((item) => {
                        if (item.countryid == this.shipCountrySelected) {
                            this.shipCountryName = item.engname
                        }
                    })
                }
            },
            applicationNext() {
              if (this.email) {
                this.loginInfo.email = this.email
              }
              if (this.phone) {
                this.loginInfo.phone = this.phone
              }
              this.validatorData()
              if (this.errMsg) {
                  this.cardApplication = 1;
                  return false
              } else {
                  this.cardApplication = 2;
                  this.payType = 0;
                  console.log(this.shipCountrySelected)
                  // this.civilStatus = this.civilStatus == null ? '' : this.civilStatus;
                  // this.genderSelected = this.genderSelected == null ? '' : this.genderSelected;
                  // this.countrySelected = this.countrySelected == null ? '' : this.countrySelected;
                  // this.shipCountrySelected = this.shipCountrySelected == null ? '' : this.shipCountrySelected;
                  this.paymentMethods = 'iLex Exchange Account Payment';
                  this.usdtousdt = '1:' + parseFloat(this.usdtormb / this.usdttormb).toFixed(10);
                  // this.totalAmount = ((parseInt(this.cardFee) + parseInt(this.postFee)) * parseFloat(this.usdtormb / this.usdttormb)).toFixed(10) + 'USDT';
                  console.log(this.usdtousdt)
              }
            },
            format(num){
                return num.toString().replace(/^(\d)$/, "0$1");
            },
            isAdult(birthday){
              console.log(birthday)
                var n = new Date(),
                    b = birthday.replace(/\-(\d{1})(\b)/g, "-0$1").replace(/\-/g,""),
                    // b = (birthday.getFullYear()) + this.format(birthday.getMonth()+1) + this.format(birthday.getDate()),
                    t = (n.getFullYear()-18) + this.format(n.getMonth()+1) + this.format(n.getDate());
                    console.log(birthday,t)
                return (b - t <= 0);
            },
            readTerms() {
              if (condition) {

              }
                this.terms = !this.terms
            },
            choicePayType() {
                if (this.payType == 0) {
                    this.usdtousdt = '1:' + parseFloat(this.usdtormb / this.usdttormb).toFixed(10)
                    // this.totalAmount = ((parseInt(this.cardFee) + parseInt(this.postFee)) * parseFloat(this.usdtormb / this.usdttormb)).toFixed(10) + 'USDT'
                } else if (this.payType == 1) {
                    this.usdtousdt = '1:' + parseFloat(this.usdtormb / this.btctormb).toFixed(10)
                    console.log(((parseInt(this.cardFee) + parseInt(this.postFee)) * parseFloat(this.usdtormb / this.btctormb)))
                    // this.totalAmount = ((parseInt(this.cardFee) + parseInt(this.postFee)) * parseFloat(this.usdtormb / this.btctormb)).toFixed(10) + 'BTC'
                }
            },
            getRate() {
                const _self = this
                _self.$store.dispatch('getIntervalData', {
                    url: 'quotation_getrateinfo_get',
                    timer: 1000 * 60,
                    callback: ({data}) => {
                        console.log(data)
                        if (data && data.length > 0) {
                            data.map((item) => {
                                if (item.currceyname == 'usd') {
                                    this.usdtormb = item.price
                                }
                                if (item.currceyname == 'btc') {
                                    this.btctormb = item.price
                                }
                                if (item.currceyname == 'usdt') {
                                    this.usdttormb = item.price
                                }
                            })
                        }
                    }
                })
            },
            cancelConfirm() {
                this.cardApplication = 1
            },
            Confirm() {
              console.log('Confirm')
                this.$store.dispatch("user_upi_card_application",
                    {
                        "conutryid": this.countrySelected,
                        "email": this.loginInfo.email,
                        "mobile_number": this.loginInfo.phone,
                        "telephone_number": this.loginInfo.phone,
                        "givil_status": this.civilStatus,
                        "mmsname": this.msName,
                        "mfname": this.mfName,
                        "fullname":this.loginInfo.realname,
                        "sex":this.genderSelected,
                        "countryofbirthday":this.countryName,
                        "platform": this.typeCard,
                        "birthday":this.birthDate,
                        "billing_street": this.shipStreet,
                        "billing_city": this.shipCity,
                        "billing_state": this.shipState,
                        "billing_country": this.shipCountryName,
                        "billing_code": this.shipCode,
                        // "street": this.shipStreet,
                        "country": this.loginInfo.countryname,
                        // "state": this.shipState,
                        "pdffile": this.uploadData.oldFilePath,
                        "card_fee": this.cardFee,
                        "uid": this.loginInfo.uid,
                        "key": this.loginInfo.secretkey,
                        "ip": this.loginInfo.lastloginip
                    }
                ).then((res) => {
                    if (res.code == 200) {
                        this.cardApplication = 3
                    } else {
                        this.cardApplication = 1
                    }
                })

            },
            validatorData() {
                console.log(this.uploadData)

                const isNum = /^[0-9a-zA-Z]*$/;
                if (this.loginInfo.idauthauditstate != 1) {
                    this.$store.commit('set_message', {type: 'error', text: this.$t('card.kycInfo')});
                    this.errMsg = true;
                    setTimeout(() => {
                      this.$router.push('/person/authentication')
                    }, 2000);
                    return;
                }
                if (!this.loginInfo.email) {
                    this.$store.commit('set_message', {type: 'error', text: this.$t('card.email')});
                    this.errMsg = true;
                    return;
                }
                var emailpatt = this.loginInfo.email.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
                if (emailpatt == null) {
                    this.$store.commit('set_message', {type: 'error', text: this.$t('card.email2')});
                    this.errMsg = true;
                    return;
                }
                if (!this.loginInfo.phone) {
                    this.$store.commit('set_message', {type: 'error', text: this.$t('card.phone')});
                    this.errMsg = true;
                    return;
                }
                var phonepatt = this.loginInfo.phone.match(/^[0-9]{0,14}$/)
                if (phonepatt == null) {
                    this.$store.commit('set_message', {type: 'error', text: this.$t('card.phone2')});
                    this.errMsg = true;
                    return;
                }
                if (this.genderSelected == -1 || this.genderSelected == null) {
                    this.$store.commit('set_message', {type: 'error', text: this.$t('card.genderSelected')});
                    this.errMsg = true;
                    return;
                }
                if (!this.birthDate) {
                    this.$store.commit('set_message', {type: 'error', text: this.$t('card.birthDate')});
                    this.errMsg = true;
                    return;
                }
                if (!this.isAdult(this.birthDate)) {
                    this.$store.commit('set_message', {type: 'error', text: this.$t('card.birthDate2')});
                    this.errMsg = true;
                    return;
                }
                if (this.countrySelected == -1 || this.countrySelected == null) {
                    this.$store.commit('set_message', {type: 'error', text: this.$t('card.selectBirthCountry')});
                    this.errMsg = true;
                    return;
                }
                if (this.civilStatus == -1 || this.civilStatus == null) {
                    this.$store.commit('set_message', {type: 'error', text: this.$t('card.civilStatus')});
                    this.errMsg = true;
                    return;
                }
                if (!this.msName) {
                    this.$store.commit('set_message', {type: 'error', text: this.$t('card.msName')});
                    this.errMsg = true;
                    return;
                }
                var msNamepatt = this.msName.match(/^[a-zA-Z\u0020]+$/)
                if (msNamepatt == null) {
                    this.$store.commit('set_message', {type: 'error', text: this.$t('card.msName2')});
                    this.errMsg = true;
                    return;
                }
                if (!this.mfName) {
                    this.$store.commit('set_message', {type: 'error', text: this.$t('card.mfName')});
                    this.errMsg = true;
                    return;
                }
                var mfNamepatt = this.mfName.match(/^[a-zA-Z\u0020]+$/)
                if (mfNamepatt == null) {
                    this.$store.commit('set_message', {type: 'error', text: this.$t('card.mfName2')});
                    this.errMsg = true;
                    return;
                }
                if (this.shipCountrySelected == -1 || this.shipCountrySelected == null) {
                    this.$store.commit('set_message', {type: 'error', text: this.$t('card.shipCountrySelected')});
                    this.errMsg = true;
                    return;
                }
                if (!this.shipState) {
                    this.$store.commit('set_message', {type: 'error', text: this.$t('card.shipState')});
                    this.errMsg = true;
                    return;
                }
                var shipStatepatt = this.shipState.match(/^[a-zA-Z\d\-\\u0020\/\'\\ ]+$/)
                if (shipStatepatt == null) {
                    this.$store.commit('set_message', {type: 'error', text: this.$t('card.shipState2')});
                    this.errMsg = true;
                    return;
                }
                if (!this.shipCity) {
                    this.$store.commit('set_message', {type: 'error', text: this.$t('card.shipCity')});
                    this.errMsg = true;
                    return;
                }
                var shipCitypatt = this.shipCity.match(/^[a-zA-Z\d\-\\u0020\/\'\\ ]+$/)
                if (shipCitypatt == null) {
                    this.$store.commit('set_message', {type: 'error', text: this.$t('card.shipCity2')});
                    this.errMsg = true;
                    return;
                }
                if (!this.shipStreet) {
                    this.$store.commit('set_message', {type: 'error', text: this.$t('card.shipStreet')});
                    this.errMsg = true;
                    return;
                }
                var shipStreetpatt = this.shipStreet.match(/^[a-zA-Z\d\-\\u0020\/\'\\ ]+$/)
                if (shipStreetpatt == null) {
                    this.$store.commit('set_message', {type: 'error', text: this.$t('card.shipStreet2')});
                    this.errMsg = true;
                    return;
                }
                if (!this.shipCode) {
                    this.$store.commit('set_message', {type: 'error', text: this.$t('card.shipCode')});
                    this.errMsg = true;
                    return;
                }
                if (!isNum.test(this.shipCode)) {
                    this.$store.commit('set_message', {type: 'error', text: this.$t('card.shipCodeNumber')});
                    this.errMsg = true;
                    return;
                }
                if (this.uploadData.oldFilePath == "") {
                    this.$store.commit('set_message', {type: 'error', text: this.$t('card.uploadCompleted')});
                    this.errMsg = true;
                    return;
                }
                if (this.terms == 0) {
                    this.$store.commit('set_message', {type: 'error', text: this.$t('card.termsTip')});
                    this.errMsg = true;
                    return;
                }
                this.errMsg = false;
                return
            }
        }
    }
</script>
