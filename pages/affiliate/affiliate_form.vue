<style lang='less' scoped>
  @import "../../static/styles/color";
  .hex-flex{color:#3B4251;background-color:#fff; font-size: 13px;}
  img{width: unset;vertical-align: middle;}
  button, input, select, textarea {
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
  }
  .afflite_form_bg{
    background: url(../../static/images/affiliate/bag_affilate_form.png);
    background-size: 100%;
    background-repeat: no-repeat;
    padding: 40px 0;
}
.affilate_from_banner1 h2{
    color: #d5d9ff;
    font-size: 28px;
    text-align: center;
}
.affilate_from_banner1 p{
    color: #d0d2ed;
    font-size: 16px;
    text-align: center;
    margin-top: 10px;
}
.new_affilate_img_form {
    width: 50%;
    overflow: hidden;
    margin: 30px auto 20px;
    overflow: hidden;
    text-align: center;
}
.new_affilate_img_form img{
    width: 50%;
}
.form_affite_new{
    width: 80%;
    box-shadow: 0px 4px 22px 0 rgba(0,0,0,.1);
    margin: 50px auto 50px;
}
.Giraffeclick_new{
    color:#14a2a5;font-weight: 600;font-size: 34px;
}
.n-banner3 .new_back_img_px{
    width: 100%;
    box-shadow: 0px 4px 22px 0 rgba(0,0,0,.1);
    border-radius: 10px;
    padding: 30px;
    margin-top: 40px;
    color: #818693;
    text-align: left;
    background-image: url(../../static/images/affiliate/aaq.png);
    background-repeat: no-repeat;
    background-position-x: 104%;
    background-position-y: -185%;
}
  .mtpc80 {
    padding-bottom: 60px;
  }
  .n-banner3 {
    text-align: center;
  }
  .n-wrap2 {
    width: 1200px;
    margin: 0 auto;
  }
  .form_affite_new {
    width: 80%;
    -webkit-box-shadow: 0 4px 22px 0 rgba(0,0,0,.1);
    box-shadow: 0 4px 22px 0 rgba(0,0,0,.1);
    margin: 50px auto 50px;
  }
  .CustomHtmlSignupForm {
    width: 80%;
    margin: 0 auto;
    text-align: left;
  }
  fieldset {
    text-align: center;
  }
  fieldset, legend {
    padding: 0;
    border: 0;
  }
  .b_tit_afif {
    font-size: 30px;
    font-weight: 700;
    text-align: center;
    padding-bottom: 40px;
    padding-top: 50px;
  }
  legend {
    display: block;
    width: 100%;
    margin-bottom: 20px;
    line-height: inherit;
    color: #333;
    border-bottom: 1px solid #e5e5e5;
  }
  .SignupForm label {
    margin-bottom: 10px;
  }
  .CustomHtmlSignupForm label {
    display: block;
  }
  fieldset label {
    text-align: left;
  }
  label {
    max-width: 100%;
    font-weight: 700;
  }
  .required {
    display: inline-block;
    margin-left: 20px;
    background: #1bc3b2;
    padding: 5px 10px;
    border-radius: 5px;
    color: #fff;
    font-weight: 700;
    font-size: 12px;
  }
  .SignupForm input, .SignupForm select {
    line-height: 50px;
    border-radius: 5px;
    background: #f7f7f9;
    outline: none;
    border: 0;
    color: #515151;
    padding-left: 15px;
    font-size: 17px;
    height: 50px;
  }
  input#checkbox{
    height: auto!important;
  }
  .CustomHtmlSignupForm input, .CustomHtmlSignupForm select, .CustomHtmlSignupForm textarea {
    margin-right: 0;
    margin-bottom: 10px;
    margin-top: 0;
    width: 100%;
  }
  .SignupForm textarea {
    border: none;
    background: #f7f7f9;
    padding: 20px;
    border-radius: 6px;
  }
  textarea {
    resize: none;
    height: 213px;
    overflow: hidden scroll;
    font-size: 12px;
    color: #555;
  }
  input::-webkit-input-placeholder,
  textarea::-webkit-input-placeholder {
    color: #666666 !important;
  }

  input:-moz-placeholder,
  textarea:-moz-placeholder {
    color: #666666 !important;
  }

  input::-moz-placeholder,
  textarea::-moz-placeholder {
    color: #666666 !important;
  }

  input:-ms-input-placeholder,
  textarea:-ms-input-placeholder {
    color: #666666 !important;
  }

  input:focus,
  textarea:focus,
  select:focus {
    outline: none;
  }
textarea::-webkit-scrollbar {
    display: block!important;
    width: 6px;
    cursor: pointer;
  }
textarea::-webkit-scrollbar-thumb{
  border-radius: 6px;
  background-color: rgba(94, 101, 115, 0.6);
}
.CustomHtmlSignupForm .new_fif_media {
    display: inline-block;
    width: 4%;
  }
  .CustomHtmlSignupForm .new_afif_agree {
    display: inline-block;
    width: 90%;
    margin-bottom: 40px;
  }
  .SignupForm .afif_btn {
    background: #1bc3b2;
    margin-bottom: 60px;
    margin-top: 40px;
    -webkit-box-shadow: 2px 4px 13px rgba(31,201,183,.34);
    -ms-box-shadow: 2px 4px 13px rgba(31,201,183,.34);
    box-shadow: 2px 4px 13px rgba(31,201,183,.34);
    color: #fff;
    font-weight: 700;
    cursor: pointer;
  }
  .afif_btn:hover{
    background: -webkit-gradient(linear,left top,left bottom,from(#2cdfcc),to(#1bc3b2));
    background:-ms-gradient(linear,left top,left bottom,from(#2cdfcc),to(#1bc3b2));
    background: linear-gradient(180deg,#2cdfcc,#1bc3b2);
  }
  @media screen and (max-width: 768px){
    .afflite_form_bg {
      background-size: auto!important;
    }
    .wid_pros {
      width: 90%;
      margin: 0 auto;
    }
    .NES_WWW {
        width: 100%;
        display: inline-block;
    }
    .affilate_from_banner1 h2 {
      margin-top: 0;
      font-size: 18px;
    }
    .affilate_from_banner1 p{
      margin-top: 5px;
      font-size: 15px;
    }
    .new_affilate_img_form{
      width: 49%;
      margin: 10px auto 0;
    }
    .mtpc80 {
      margin-top: 80px !important;
    }
    .form_affite_new {
      margin: -40px auto 50px;
      width: 100%;
      box-shadow: none;
    }
    .CustomHtmlSignupForm{
      width: 100%;
    }
  }
</style>

<template>
  <div class="hex-flex">
    <div class="auth hex-flex_auto">
      <div class="lp_top pa_top_0">
    <!-- <Header /> -->
    <div class="n-banner banner_bus b_banner afflite_form_bg new_pading_ppc pading40_0 a_top">
        <div class="">
            <div class="n-wrap2 affilate_from_banner1 affilate_123 wid_pros" data-animation="on">
                <div class="NES_WWW">
                    <h2 class="pd60">Collaboration with <strong class="Giraffeclick_new"> Giraffeclick </strong>to provide
                        the best
                        affiliate program.</h2>
                    <p>Through deep cooperation with giraffeclick, we can offer high-quarlity affiliate program with
                        multi-tiers and
                        high-return lifetime commission.</p>
                </div>
                <div class="new_affilate_img_form">
                    <img src="../../static/images/affiliate/a_b_a_b.png" alt="">
                </div>
            </div>
        </div>
    </div>
    <div class="n-wrap2 n-banner3 b-banner3 wid_pros mtpc80">
        <div class="form_affite_new">
            <form class="CustomHtmlSignupForm" action="https://app.giraffeclick.com/affiliates/signup.php"
                  method="post">
                <div class="SignupForm">
                    <fieldset>
                        <legend class="b_tit_afif">Affiliate Signup</legend>
                        <label><strong>Username/Email</strong>
                            <div class="required">Required</div>
                        </label><input type="email" name="username" required=""
                                       oninvalid="setCustomValidity('*Please enter the Username');"
                                       oninput="setCustomValidity('');" placeholder="Please enter your email">
                        <label><strong>First Name</strong>
                            <div class="required">Required</div>
                        </label><input type="text" name="firstname" required=""
                                       oninvalid="setCustomValidity('*Please enter the firstname');"
                                       oninput="setCustomValidity('');"
                                       placeholder="Please write in half-width alphabets"> <label><strong>Last
                        Name</strong>
                        <div class="required">Required</div>
                    </label><input type="text" name="lastname" required=""
                                   oninvalid="setCustomValidity('*Please enter the lastname');"
                                   oninput="setCustomValidity('');" placeholder="Please write in half-width alphabets">
                        <div id="refid"></div>
                        <input type="hidden" name="parentuserid" id="parentuserid" value=""/>
                    </fieldset>
                    <fieldset>
                        <label>Company name</label><input type="text" name="data2"
                                                          placeholder="Please write in half-width alphabets">
                        <div id="data3"></div>
                        <div id="data4"></div>
                        <div id="data5"></div>
                        <label><strong>Country</strong>
                            <div class="required">Required</div>
                        </label><select name="data6" class="hei50_new_select">
                            <option value="AF">Afghanistan</option>
                            <option value="AX">Aland Islands</option>
                            <option value="AL">Albania</option>
                            <option value="DZ">Algeria</option>
                            <option value="AS">American Samoa</option>
                            <option value="AD">Andorra</option>
                            <option value="AO">Angola</option>
                            <option value="AI">Anguilla</option>
                            <option value="A1">Anonymous Proxy</option>
                            <option value="AQ">Antarctica</option>
                            <option value="AG">Antigua and Barbuda</option>
                            <option value="AR">Argentina</option>
                            <option value="AM">Armenia</option>
                            <option value="AW">Aruba</option>
                            <option value="AP">Asia/PacificRegion</option>
                            <option value="AU">Australia</option>
                            <option value="AT">Austria</option>
                            <option value="AZ">Azerbaijan</option>
                            <option value="BS">Bahamas</option>
                            <option value="BH">Bahrain</option>
                            <option value="BD">Bangladesh</option>
                            <option value="BB">Barbados</option>
                            <option value="BY">Belarus</option>
                            <option value="BE">Belgium</option>
                            <option value="BZ">Belize</option>
                            <option value="BJ">Benin</option>
                            <option value="BM">Bermuda</option>
                            <option value="BT">Bhutan</option>
                            <option value="BO">Bolivia</option>
                            <option value="BA">Bosnia and Herzegovina</option>
                            <option value="BW">Botswana</option>
                            <option value="BV">Bouvet Island</option>
                            <option value="BR">Brazil</option>
                            <option value="IO">British Indian Ocean Territory</option>
                            <option value="BN">Brunei Darussalam</option>
                            <option value="BG">Bulgaria</option>
                            <option value="BF">Burkina Faso</option>
                            <option value="BI">Burundi</option>
                            <option value="KH">Cambodia</option>
                            <option value="CM">Cameroon</option>
                            <option value="CA">Canada</option>
                            <option value="CV">Cape Verde</option>
                            <option value="KY">Cayman Islands</option>
                            <option value="CF">Central African Republic</option>
                            <option value="TD">Chad</option>
                            <option value="CL">Chile</option>
                            <option value="CN">China</option>
                            <option value="CX">Christmas Island</option>
                            <option value="CC">Cocos (Keeling) Islands</option>
                            <option value="CO">Colombia</option>
                            <option value="KM">Comoros</option>
                            <option value="CG">Congo</option>
                            <option value="CD">Congo, The Democratic Republic of the</option>
                            <option value="CK">Cook Islands</option>
                            <option value="CR">Costa Rica</option>
                            <option value="CI">Cote D'Ivoire</option>
                            <option value="HR">Croatia</option>
                            <option value="CU">Cuba</option>
                            <option value="CY">Cyprus</option>
                            <option value="CZ">Czech Republic</option>
                            <option value="DK">Denmark</option>
                            <option value="DJ">Djibouti</option>
                            <option value="DM">Dominica</option>
                            <option value="DO">Dominican Republic</option>
                            <option value="EC">Ecuador</option>
                            <option value="EG">Egypt</option>
                            <option value="SV">El Salvador</option>
                            <option value="GQ">Equatorial Guinea</option>
                            <option value="ER">Eritrea</option>
                            <option value="EE">Estonia</option>
                            <option value="ET">Ethiopia</option>
                            <option value="EU">Europe</option>
                            <option value="FK">Falkland Islands (Malvinas)</option>
                            <option value="FO">Faroe Islands</option>
                            <option value="FJ">Fiji</option>
                            <option value="FI">Finland</option>
                            <option value="FR">France</option>
                            <option value="FX">France, Metropolitan</option>
                            <option value="GF">French Guiana</option>
                            <option value="PF">French Polynesia</option>
                            <option value="TF">French Southern Territories</option>
                            <option value="GA">Gabon</option>
                            <option value="GM">Gambia</option>
                            <option value="GE">Georgia</option>
                            <option value="DE">Germany</option>
                            <option value="GH">Ghana</option>
                            <option value="GI">Gibraltar</option>
                            <option value="GR">Greece</option>
                            <option value="GL">Greenland</option>
                            <option value="GD">Grenada</option>
                            <option value="GP">Guadeloupe</option>
                            <option value="GU">Guam</option>
                            <option value="GT">Guatemala</option>
                            <option value="GG">Guernsey</option>
                            <option value="GN">Guinea</option>
                            <option value="GW">Guinea-Bissau</option>
                            <option value="GY">Guyana</option>
                            <option value="HT">Haiti</option>
                            <option value="HM">Heard Island and McDonald Islands</option>
                            <option value="VA">Holy See (Vatican City State)</option>
                            <option value="HN">Honduras</option>
                            <option value="HK">Hong Kong</option>
                            <option value="HU">Hungary</option>
                            <option value="IS">Iceland</option>
                            <option value="IN">India</option>
                            <option value="ID">Indonesia</option>
                            <option value="IR">Iran, Islamic Republic of</option>
                            <option value="IQ">Iraq</option>
                            <option value="IE">Ireland</option>
                            <option value="IM">Isle of Man</option>
                            <option value="IL">Israel</option>
                            <option value="IT">Italy</option>
                            <option value="JM">Jamaica</option>
                            <option value="JP">Japan</option>
                            <option value="JE">Jersey</option>
                            <option value="JO">Jordan</option>
                            <option value="KZ">Kazakstan</option>
                            <option value="KE">Kenya</option>
                            <option value="KI">Kiribati</option>
                            <option value="KP">Korea, Democratic People's Republic of</option>
                            <option value="KR">Korea, Republic of</option>
                            <option value="KW">Kuwait</option>
                            <option value="KG">Kyrgyzstan</option>
                            <option value="LA">Lao People's Democratic Republic</option>
                            <option value="LV">Latvia</option>
                            <option value="LB">Lebanon</option>
                            <option value="LS">Lesotho</option>
                            <option value="LR">Liberia</option>
                            <option value="LY">Libyan Arab Jamahiriya</option>
                            <option value="LI">Liechtenstein</option>
                            <option value="LT">Lithuania</option>
                            <option value="LU">Luxembourg</option>
                            <option value="MO">Macau</option>
                            <option value="MK">Macedonia</option>
                            <option value="MG">Madagascar</option>
                            <option value="MW">Malawi</option>
                            <option value="MY">Malaysia</option>
                            <option value="MV">Maldives</option>
                            <option value="ML">Mali</option>
                            <option value="MT">Malta</option>
                            <option value="MH">Marshall Islands</option>
                            <option value="MQ">Martinique</option>
                            <option value="MR">Mauritania</option>
                            <option value="MU">Mauritius</option>
                            <option value="YT">Mayotte</option>
                            <option value="MX">Mexico</option>
                            <option value="FM">Micronesia, Federated States of</option>
                            <option value="MD">Moldova, Republic of</option>
                            <option value="MC">Monaco</option>
                            <option value="MN">Mongolia</option>
                            <option value="ME">Montenegro</option>
                            <option value="MS">Montserrat</option>
                            <option value="MA">Morocco</option>
                            <option value="MZ">Mozambique</option>
                            <option value="MM">Myanmar</option>
                            <option value="NA">Namibia</option>
                            <option value="NR">Nauru</option>
                            <option value="NP">Nepal</option>
                            <option value="AN">Netherlands Antilles</option>
                            <option value="NL">Netherlands</option>
                            <option value="NC">New Caledonia</option>
                            <option value="NZ">New Zealand</option>
                            <option value="NI">Nicaragua</option>
                            <option value="NE">Niger</option>
                            <option value="NG">Nigeria</option>
                            <option value="NU">Niue</option>
                            <option value="NF">Norfolk Island</option>
                            <option value="MP">Northern Mariana Islands</option>
                            <option value="NO">Norway</option>
                            <option value="OM">Oman</option>
                            <option value="O1">Other</option>
                            <option value="PK">Pakistan</option>
                            <option value="PW">Palau</option>
                            <option value="PS">Palestinian Territory</option>
                            <option value="PA">Panama</option>
                            <option value="PG">Papua New Guinea</option>
                            <option value="PY">Paraguay</option>
                            <option value="PE">Peru</option>
                            <option value="PH">Philippines</option>
                            <option value="PN">Pitcairn Islands</option>
                            <option value="PL">Poland</option>
                            <option value="PT">Portugal</option>
                            <option value="PR">Puerto Rico</option>
                            <option value="QA">Qatar</option>
                            <option value="RE">Reunion</option>
                            <option value="RO">Romania</option>
                            <option value="RU">Russian Federation</option>
                            <option value="RW">Rwanda</option>
                            <option value="SH">Saint Helena</option>
                            <option value="KN">Saint Kitts and Nevis</option>
                            <option value="LC">Saint Lucia</option>
                            <option value="PM">Saint Pierre and Miquelon</option>
                            <option value="VC">Saint Vincent and the Grenadines</option>
                            <option value="WS">Samoa</option>
                            <option value="SM">San Marino</option>
                            <option value="ST">Sao Tome and Principe</option>
                            <option value="A2">Satellite Provider</option>
                            <option value="SA">Saudi Arabia</option>
                            <option value="SN">Senegal</option>
                            <option value="RS">Serbia</option>
                            <option value="SC">Seychelles</option>
                            <option value="SL">Sierra Leone</option>
                            <option value="SG">Singapore</option>
                            <option value="SK">Slovakia</option>
                            <option value="SI">Slovenia</option>
                            <option value="SB">Solomon Islands</option>
                            <option value="SO">Somalia</option>
                            <option value="ZA">South Africa</option>
                            <option value="GS">South Georgia and the South Sandwich Islands</option>
                            <option value="ES">Spain</option>
                            <option value="LK">SriLanka</option>
                            <option value="SD">Sudan</option>
                            <option value="SR">Suriname</option>
                            <option value="SJ">Svalbardand Jan Mayen</option>
                            <option value="SZ">Swaziland</option>
                            <option value="SE">Sweden</option>
                            <option value="CH">Switzerland</option>
                            <option value="SY">Syrian Arab Republic</option>
                            <option value="TW">Taiwan</option>
                            <option value="TJ">Tajikistan</option>
                            <option value="TZ">Tanzania, United Republic of</option>
                            <option value="TH">Thailand</option>
                            <option value="TL">Timor-Leste</option>
                            <option value="TG">Togo</option>
                            <option value="TK">Tokelau</option>
                            <option value="TO">Tonga</option>
                            <option value="TT">Trinidad and Tobago</option>
                            <option value="TN">Tunisia</option>
                            <option value="TR">Turkey</option>
                            <option value="TM">Turkmenistan</option>
                            <option value="TC">Turks and Caicos Islands</option>
                            <option value="TV">Tuvalu</option>
                            <option value="UG">Uganda</option>
                            <option value="UA">Ukraine</option>
                            <option value="AE">United Arab Emirates</option>
                            <option value="GB">United Kingdom</option>
                            <option value="UM">United States Minor Outlying Islands</option>
                            <option value="US" selected="selected">United States</option>
                            <option value="UY">Uruguay</option>
                            <option value="UZ">Uzbekistan</option>
                            <option value="VU">Vanuatu</option>
                            <option value="VE">Venezuela</option>
                            <option value="VN">Vietnam</option>
                            <option value="VG">Virgin Islands, British</option>
                            <option value="VI">Virgin Islands, U.S.</option>
                            <option value="WF">Wallis and Futuna</option>
                            <option value="EH">Western Sahara</option>
                            <option value="YE">Yemen</option>
                            <option value="ZM">Zambia</option>
                            <option value="ZW">Zimbabwe</option>
                        </select>
                        <div id="data7"></div>
                        <div id="data9"></div>
                        <div id="data10"></div>
                        <div id="data11"></div>
                        <div id="data12"></div>
                        <div id="data13"></div>
                        <div id="data14"></div>
                        <div id="data15"></div>
                        <div id="data16"></div>
                        <div id="data17"></div>
                        <div id="data18"></div>
                        <div id="data19"></div>
                        <div id="data20"></div>
                        <div id="data21"></div>
                        <div id="data22"></div>
                        <div id="data23"></div>
                        <div id="data24"></div>
                        <div id="data25"></div>
                        <div id="notificationemail"></div>
                        <div id="recaptcha"></div>
                    </fieldset>
                    <div id="payoutMethods"></div>
                    <label>Terms & conditions
                        <div class="required">Required</div>
                    </label>
                  <textarea rows="3" cols="20">
					    GiraffeClick Limited. Affiliate Program Terms and Conditions

Thank you for registering as an Affiliate in the Marketing Affiliate Program of GiraffeClick Limited. (“GiraffeClick Limited”, “us”, “we”, “our”).

The following terms and conditions (these “terms and conditions”) constitute the agreement (the “Terms and Conditions”) between yourself and GiraffeClick Limited regarding your participation in our Marketing Affiliate Program ("Marketing Affiliate Program") operated via giraffeclick.com   (the “Program Site”) for the promotion and marketing of the GiraffeClick Limited website (the “GiraffeClick Limited Website”) and/or GiraffeClick Limited services offered thereunder (the “GiraffeClick Limited Services”).

By registering to our Marketing Affiliate Program and accepting these terms and conditions, you (“Affiliate”, “you”, “yours”) indicate your agreement to the Terms and Conditions herein.

We may modify these terms and conditions, at any time at our sole discretion, by posting on our Affiliate Program Site a notice of a change of terms. Your continued use of our Marketing Affiliate Program following such change will constitute your agreement to the updated terms and conditions. If any modification is unacceptable to you, your sole recourse is to terminate this agreement and your continued participation in the Marketing Affiliate Program. Due to the above, we advise you to frequently visit the Marketing Affiliate Program webpage and review the terms and conditions.

Section 1. Marketing Affiliate Program Application.
Please read this Terms and Conditions carefully. To enroll, please complete and submit the Marketing Affiliate Program application form via the Program Site. You must accurately complete the application to become an Affiliate (and ensure that your information in the Affiliate Program Site is updated) and not use any aliases or other means to mask your identity or contact information. After we review your application, we will notify you of your acceptance or rejection to the Affiliate Program. We may accept or reject your application at our sole discretion. Unless you receive a clear written notice from GiraffeClick Limited confirming your participation in the Affiliate Program, you shall not be deemed to be part of the Affiliate Program.


Section 2.Affiliate Eligibility.
You must be a registered GiraffeClick Limited user to be eligible to participate in the Marketing Affiliate Turkish residents are not eligible to participate in the Marketing Affiliate Program. We will need confirmation of all your ID documents in applications for GiraffeClick Limited user, including information of your name, address, date of birth, funding date, and other information. In the event of default or false information, or when we should consider it necessary for other reasons, we reserve the authority to reject the registration of GiraffeClick Limited user to close it at our own discretion.


Section 3.Acceptance Links.
Following your acceptance to the Affiliate Program, we will make available to your advertisement banners, button links, text links and other links to the GiraffeClick Limited Website (the “Links”), which you may display on websites owned or controlled by you and/ or, subject to GiraffeClick Limited’s approval, in email sent by you and clearly identified as coming from you and online advertisements and campaigns (the “Affiliate Site”), provided you abide by the terms and conditions hereof. In using Links, you agree that you will cooperate fully with us to establish and maintain the Links. You may not modify a Link, without our prior written consent. The Links will serve to identify you as a member of our Marketing Affiliate Program and will establish a link from your Media to the Program Site.

Section 4.Use of Links and GiraffeClick Limited Marks.
During the term of this Terms and Conditions, GiraffeClick Limited hereby grants you (i) a limited, revocable, non-exclusive and non-transferable, non-sub-licensable license to place the Links on your Affiliate Site during the term of this Terms and Conditions, and (ii) a limited, revocable, non-exclusive and non-transferable, non-sub-licensable license to use our logos, brands, trade names, trademarks, service marks and similar identifying material (including as appear within the Links) (collectively, the “GiraffeClick Limited Marks”), solely for the purpose of promoting the GiraffeClick Limited Services and the GiraffeClick Limited Website within the framework of the Affiliate Program and subject to the terms and conditions herein. You acknowledge and agree that: (a) you will use the Links and GiraffeClick Limited Marks only as permitted hereunder for purposes of promoting the GiraffeClick Limited Services and GiraffeClick Limited Website and may not sub-license, assign or otherwise transfer such license; (b) you will use the Links and GiraffeClick Limited Marks in a lawful manner and in strict compliance with all format(s), guidelines, standards and other requirements prescribed by GiraffeClick Limited. You may not alter, modify or change the Links and/or GiraffeClick Limited Marks in any way whatsoever; (c) you will use the Links and/or GiraffeClick Limited Marks only in a manner that reflects favorably on GiraffeClick Limited; (d) the GiraffeClick Limited Marks are and shall remain the sole property of GiraffeClick Limited and/or its licensors; (e) you shall not, now or in the future, contest the validity of any GiraffeClick Limited Mark or use any term or mark confusingly similar as the Links and/or GiraffeClick Limited Marks.


The aforementioned license shall terminate ipso facto upon the termination of this Terms and Conditions. In addition, we may revoke your license to use the Links and/or the GiraffeClick Limited Marks at any time by written notice to you. You acknowledge that the Links and GiraffeClick Limited Marks are provided on an “as is” basis and without any warranty whatsoever. You further acknowledge that you did not pay any consideration for use of the Links and/or the GiraffeClick Limited Marks and nothing herein shall be construed as a grant to you of any right, interest or title in or to the Links, the GiraffeClick Limited Website, the GiraffeClick Limited Services and/or the GiraffeClick Limited Marks, except the limited right to use same in accordance with these terms and conditions.

Section 5.Affiliate Obligations and Responsibilities.
Affiliate will use its/his/her best efforts and shall devote reasonable amount of its/his/her time, personnel and resources to promote the Links on the Affiliate Site and other sites with respect to which Affiliate has or will have a marketing arrangement for Referrals (as defined below) to GiraffeClick Limited. The Affiliate will bear all costs and expenses for its/his/her activities, including any billing and processing fees if applicable. Affiliate will have sole responsibility for the development, operation, and maintenance of, and all content on or linked to the Affiliate Site.


You will make sure that the Affiliate Site does not copy or resemble the look and feel of the GiraffeClick Limited Website, the GiraffeClick Limited Services and the Program Site or create the impression that the Affiliate Site is endorsed by GiraffeClick Limited or a part of the Program Site or the GiraffeClick Limited Website, without prior written permission from GiraffeClick Limited.

You shall perform your obligations hereunder in accordance with the highest applicable industry standards and in compliance with all applicable laws, rules and regulations including data protection and anti-spam laws and regulations. You shall comply with any applicable data protection and privacy requirements and any analogous legislation in all jurisdictions applicable to the Referrals.

You shall comply with the terms, conditions, guidelines and policies of any third-party services used by Affiliate in connection with the Marketing Affiliate Program, including but not limited to, email providers, social networking services and ad networks.

Always prominently post and make available to end-users, including prior to the collection of any personally identifiable information, a privacy policy in compliance with all applicable laws that clearly and thoroughly discloses all information collection, use and sharing practices, including providing for the collection of such personally identifiable information in connection with the Marketing Affiliate Program.

Section 6.Prohibited Activity.
If your use of any Link is not in compliance with the terms of this Terms and Conditions, we may block your access to the Links you use. You may not advertise the GiraffeClick Limited Website or the GiraffeClick Limited Services in any way not approved in advance by GiraffeClick Limited, including, without limitation, the use of spam e-mails (i.e. - sending unsolicited mass emails or spam), whether via email or any other form. Any spamming techniques for soliciting referrals will constitute a breach of this Terms and Conditions and will automatically terminate your right to participate in the Marketing Affiliate Program. In addition to the restrictions regarding spamming, as set forth above, Affiliate shall not (a) engage in any fax, broadcast or telemarketing with respect to GiraffeClick Limited, the GiraffeClick Limited Services and/or the GiraffeClick Limited Website, (b) use Scum ware techniques or any other predatory advertising or marketing methods in any of its dealings relating to GiraffeClick Limited, the GiraffeClick Limited Services and/or the GiraffeClick Limited Website, (“Scum ware” means the use of pop-up/under banners that hide banners that are displayed on a website, the placement of icons beside keywords found in text that if clicked will take the visitor to another website, and other similar practices) Any pop-ups/under used for the Marketing Affiliate Program shall be clearly identified as Affiliate served in the title bar of the window and any client-side ad serving software used by Affiliate shall only have been installed on an end-user's computer if the function of the software is clearly disclosed to end-users prior to installation, the installation is pursuant to an affirmatively accepted and plain-English end user license agreement and the software be easily removed according to generally accepted method (c) make any representations, warranties or other statements concerning GiraffeClick Limited or any of GiraffeClick Limited Services, except as expressly authorized herein and not make any false, misleading or disparaging representations or statements with respect to GiraffeClick Limited, the GiraffeClick Limited Services and/or the GiraffeClick Limited Website, or (d) engage in any other practices which may adversely affect the high image, credibility or reputation ion of GiraffeClick Limited, the GiraffeClick Limited Services and/or the GiraffeClick Limited Website, including but not limited to using any Link or GiraffeClick Limited Mark in any manner, or having any related content posted to Affiliate Site, that (i) is illegal, harmful, threatening, defamatory, obscene, sexually explicit (ii) promotes sexually explicit materials, violence, discrimination based on race, sex, religion, nationality, disability, sexual orientation or age and/or any illegal activities or (iii) violates any intellectual property or other proprietary rights of any third party (iv) contains profanity or otherwise contains materials that GiraffeClick Limited informs you that it considers objectionable.
You shall not place GiraffeClick Limited ads on any online auction platform (i.e. eBay, Amazon, etc.), and not use in Pay Per Click campaigns or otherwise any GiraffeClick Limited Marks as keywords such as “GiraffeClick Limited”, “liribd.com”, “GiraffeClick Limited Affiliate Program”, “GiraffeClick Limited Partners”. For avoidance of doubt, any Pay Per Click campaign (or similar marketing campaign, such as Google AdWords, Yahoo Pay Per Click advertising, MSN Pay Per Click advertising and contextual keyword targeted campaigns) resulting in the redirection of a potential customer to Affiliate Site using any GiraffeClick Limited Marks as keywords shall not be viewed as an introduction of a Referral and shall not entitle the Affiliate to any Commissions under this Terms and Conditions.

No Links can appear to be associated with or be positioned on chat rooms or bulletin boards unless otherwise agreed by GiraffeClick Limited in writing.

Section 7.Anti-Spam Policy.
You must strictly comply with the federal CAN-SPAM Act of 2003 (the "Act"). All emails sent in connection with the Marketing Affiliate Program must include the appropriate parties opt-out link. From time to time, we may request - prior to your sending emails containing linking or referencing the Marketing Affiliate Program that you submit the final version of your email to GiraffeClick Limited for approval by sending it to support@liri-bd.com and upon receiving written approval from GiraffeClick Limited of your email the email may be transmitted to third parties.

It is solely your obligation to ensure that the email complies with the Act. You agree not to rely upon GiraffeClick Limited’s approval of your email for compliance with the Act or assert any claim that you follow the Act based upon GiraffeClick Limited’s approval.

Section 8.A “Referral” means a (i) unique user that clicked a GiraffeClick Limited Link on the Affiliate Site (ii) who is not a computer generated user, such as a robot, spider, computer script or other automated, artificial or fraudulent method to appear like an individual, real live person, (iii) is not using pre-populated fields, (iv) is not already in the process of becoming a customer/user of GiraffeClick Limited or the GiraffeClick Limited Services other than through you and (v) who is not a Turkish resident. A “Registered Referral” means a Referral that completes the registration process on the GiraffeClick Limited Website after arriving to the GiraffeClick Limited Website through a Link on the Affiliate Site where the Link is the last link to the GiraffeClick Limited Website and who was approved by GiraffeClick Limited to receive GiraffeClick Limited Services the Referral shall only be recognized for one account per unique user. An existing GiraffeClick Limited user cannot and will not be a Referral.
GiraffeClick Limited reserves the right to refuse to register any Referral(s) or to close accounts of any Registered Referral if necessary in its sole discretion to comply with any requirements GiraffeClick Limited may periodically establish, including without limitation with regard to fraud, unlawful activity, breach of the terms and conditions of use, or otherwise.

To permit accurate tracking, reporting, and commission accrual, you must ensure that the Links between Affiliate Site and the GiraffeClick Limited Website are properly formatted throughout the entire term of this Terms and Conditions.

Be aware that GiraffeClick Limited’s policy is not to accept Referrals from certain excluded territories sanctioned by the Office of Foreign Assets Control (OFAC).

Affiliate shall be entitled to receive commissions and fees (the “Commissions”) as set forth under the applicable offer received from GiraffeClick Limited, which may be viewed on the Program Site, under the Offers menu under Live Offers (“Offer”). GiraffeClick Limited reserves the right to modify the Offer, Commissions rates and/or the payment terms at any time upon reasonable advance notice to the Affiliate.
Commissions will only, be paid for a Qualified Actions. A “Qualified Action” means a Registered Referral who, subject to his specific Offer, either

(i  ) not including payments received from other registered users of GiraffeClick Limited via GiraffeClick Limited’s Make a Payment service, and provided, that with respect to payments received via eCheck or credit card in response to a Payment Request through GiraffeClick Limited’s Billing Service, three months shall have lapsed from the payment(s) date (and such three months shall transpire prior to the end of the first year as aforesaid); and provided further, that such payments were not canceled, charged back or disputed (“First Time Receipts Qualified Actions” or “FTR Qualified Action”). Only one FTR Qualifying Action shall be deemed generated for each Registered Referral and any additional or subsequent use of the GiraffeClick Limited Services made by a Registered Referral will not be treated as a Qualifying Action; or

(ii) receives payments to his GiraffeClick Limited balance via certain GiraffeClick Limited Services as detailed in the Offer, during a commission period and subject to any additional terms as detailed in your Offer (“Commission Period Qualified Actions” or “CP Qualified Action).

GiraffeClick Limited may supplement or change the Qualified Action terms as set forth herein, within the framework of each specific Offer.

GiraffeClick Limited will calculate the Commission amounts payable to the Affiliate in accordance with the applicable Offer.

The Commissions represent the complete and entire compensation to the Affiliate for services under this Terms and Conditions, and you will not seek further compensation from GiraffeClick Limited or any of its Affiliates.

Section 9.Payment Terms.
All Commissions will be paid to you monthly, within 20 days after the end of the applicable calendar month during the term hereof. Payment of Commissions shall be made directly to your GiraffeClick Limited balance only.
The Program Site shall automatically generate an invoice on behalf of the Affiliate for all Commissions payable under this Terms and Conditions. GiraffeClick Limited shall remit payment to Affiliate based upon that invoice. All tracking of Links and determinations of Qualified Actions and Commissions shall be made by GiraffeClick Limited in its sole discretion. Please be advised that determinations and process of Qualified Actions can take several days. Accordingly, Commission for some of your Qualified Actions will be paid in the following month.

If Affiliate disputes in good faith any portion of an invoice, Affiliate must submit that dispute to GiraffeClick Limited in writing and in sufficient detail within thirty (30) days of the date on the invoice. If Affiliate does not dispute the invoice as set forth herein, then Affiliate agrees that it irrevocably waives any claims based upon that invoice. If Affiliate is also tracking Qualified Actions and Affiliate claims a discrepancy, Affiliate must provide GiraffeClick Limited with Affiliate's reports within three (3) days after 30th day of the calendar month, and if GiraffeClick Limited’s and Affiliate's reported statistics vary by more than 10% and GiraffeClick Limited reasonably determines that Affiliate has used generally accepted industry methods to track Qualified Actions, then GiraffeClick Limited and Affiliate agree to make a good faith effort to arrive at a reconciliation. If the parties are unable to arrive at a reconciliation, then GiraffeClick Limited’s numbers shall govern.

The Affiliate shall be responsible for the payment of all taxes and compulsory payments payable with respect to the Commission and shall submit to GiraffeClick Limited its information using a W-9 Form or W-8 Series Form as applicable (the “W-Forms”) to allow GiraffeClick Limited filings for the U.S. Internal Revenue Service. GiraffeClick Limited may delay payments of Commission if Company fails to submit the W-Form as applicable

Applicable billing and processing fees or other payment charges in connection with any payments made to the Affiliate shall be paid by the Affiliate. GiraffeClick Limited shall be entitled to set-off from the Commissions payable any associated costs related to the transfer of Commissions.

If Affiliate has an outstanding balance due to GiraffeClick Limited under this Terms and Conditions or any other agreement between the Affiliate and GiraffeClick Limited, whether related to the Marketing Affiliate Program, Affiliate agrees that GiraffeClick Limited may offset any such amounts due to GiraffeClick Limited from amounts payable to Affiliate under this Terms and Conditions.

GiraffeClick Limited retains the right to review all Commissions for possible fraud, where such fraud may be on the part of the Referral or on your part. Without derogating from the foregoing, GiraffeClick Limited in its sole discretion shall withhold the payment of any outstanding commissions to any Affiliate should GiraffeClick Limited consider that the Affiliate has created false account(s) for the purposes of generating accruals.

Any incidence of fraud on your part, including without limitation the opening of false accounts, constitutes a breach of this Terms and Conditions, and GiraffeClick Limited shall have the right to terminate this Terms and Conditions immediately in the event of such breach, without derogating from other remedies available to GiraffeClick Limited under law or in equity. Further, if GiraffeClick Limited deems that fraud has occurred, either on your part or on the part of a Referral, you shall not be entitled to receive any Commissions which have accrued to your benefit at such time whether such Commissions were generated through fraud or otherwise. You are urged to provide accurate details regarding the manner and information relating to your preferred method of receiving Commissions and GiraffeClick Limited shall not be held liable for your delayed receipt of Commissions due to your provision of inaccurate details. In any event, other than in case of fraud, delays up to 60 days in payment of Commission shall not constitute breach of this Terms and Conditions.

Section 10.Proprietary Rights The GiraffeClick Limited Marks, GiraffeClick Limited Website, Links, any content thereon, including all GiraffeClick Limited’ marketing and/or promotional materials and demographic and other information and data therein, Referrals, and all software, tools, documents, processes, methodologies, know-how, and any additional intellectual or other property used by or on behalf of GiraffeClick Limited together with all copyrights, trademarks, patents, trade secrets and any other intellectual property rights attached and/or related thereto (collectively, “GiraffeClick Limited Property”) and any derivatives and/or modifications thereto, are and shall remain the sole and exclusive property of GiraffeClick Limited and/or its licensors. Nothing in this Terms and Conditions shall confer on the Affiliate any right of ownership in the GiraffeClick Limited Property and all use thereof by the Affiliate shall inure to the benefit of GiraffeClick Limited.

Section 11. Representations and Warranties.
Without derogating from, and in addition to, any of the Affiliate’s other representations, warranties, covenants and obligations contained in this Terms and Conditions, the Affiliate hereby represents and warrants to GiraffeClick Limited the following: (1) the execution, delivery and performance by the Affiliate of this Terms and Conditions and the consummation by the Affiliate of the transactions contemplated hereby will not conflict with or violate any provision of law, rule, regulation or agreement to which the Affiliate is subject to; (2) it has the capacity and authority to execute this Terms and Conditions; and (3) the Affiliate is not involved or intends to be involved in or is aware of any act or traffic that involves and that constitutes or can be reasonably expected to constitute fraud or illegal activity, including but not limited to money laundering, under any applicable law, rule or regulation. The Affiliate agrees to (i) comply at all times with all laws and rules that are applicable to the provision of its services hereunder; (ii) maintain all licenses and permits and obtain all consents and other approvals required for the provision of its services hereunder, (iii) perform its services in a manner designed to avoid incurring any damage to GiraffeClick Limited or their property, assets, reputation or goodwill; (iv) keep detailed books and records of its activities and provide GiraffeClick Limited upon its request with information relating to its activities under this Terms and Conditions; (v) maintain the integrity and security of personal data in compliance with applicable laws and regulations, GiraffeClick Limited’ privacy policy, including any requirements made by GiraffeClick Limited; and (vi) provide GiraffeClick Limited with prompt notice of the occurrence of or any intent to effect a change of ownership or control of the Affiliate.


Section 12. Term and Termination.
This Terms and Conditions shall be in effect as of your acceptance to the Affiliate Program and until terminated by either party. Either party may immediately terminate this Terms and Conditions, at any time, with or without cause, by giving the other party written notice of termination, where such notice may be served via fax or e-mail. We reserve the right to withhold your final payment for a reasonable time to ensure that the correct amount is paid, provided however that if termination is due to fraudulent accounts/activity, then you shall not be entitled to any payment.
Upon the termination of this Terms and Conditions for any reason: (a) each party shall return to the other party all property of the other party in its possession or control (including GiraffeClick Limited Marks and any related materials, and all Confidential Information); (b) you shall immediately cease displaying any Links, GiraffeClick Limited Marks and/or anything related to GiraffeClick Limited Services on the Affiliate Site and any website or otherwise and any other names, marks, symbols, copyrights, logos, designs, or other proprietary designations or properties owned, developed, licensed or created by us and/or provided by or on behalf of us to you pursuant to this Terms and Conditions or in connection with the Affiliate Program, and (c) all rights granted to you hereunder will immediately cease.

Following the termination of this Terms and Conditions and our payment to you of all Commissions due at such time of termination in accordance with this Terms and Conditions, we shall have no obligation to make any further payments to you.

Sections 9 , 10and 12 shall survive the termination or expiration of this Terms and Conditions.

Confidentiality We may disclose to your certain information because of your participation as part of the Affiliate Program, which information we consider to be proprietary and/or confidential and which may include personal information of users which is protected under data protection laws (“Confidential Information”). You shall maintain all Confidential Information under strict confidence and shall not disclose such Confidential Information to any third party nor utilize it, directly or indirectly, for any purpose other than for participating in the Affiliate Program and fulfilling your obligations herein. Confidential Information shall exclude only such information that is or becomes at no fault of yours, generally known or available to the public. You may disclose Confidential Information if you are required to do so by law or under legal process; provided that you notify us in writing of such requirement.
You may not disclose to us any information that you or any third party considers confidential without our prior written consent.



Section 13.Disclaimer of Warranty GiraffeClick Limited MAKES NO WARRANTIES HEREUNDER, AND HEREBY EXPRESSLY DISCLAIMS ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE. WITHOUT LIMITING THE FOREGOING, GiraffeClick Limited FURTHER DISCLAIMS ALL REPRESENTATIONS AND WARRANTIES, EXPRESS OR IMPLIED, THAT THE GiraffeClick Limited WEBSITE OR SERVICES MADE AVAILABALE THEREBY DO NOT INFRINGE OR OTHERWISE VIOLATE ANY INTELLECTUAL PROPERTY OR OTHER PROPRIETARY RIGHT OF ANY THIRD PARTY IN ANY JURISDICTION. IN ADDITION, WE MAKE NO REPRESENTATION THAT THE OPERATION OF THE GiraffeClick Limited LINKS AND/OR THE GiraffeClick Limited WEBSITE WILL BE UNINTERRUPTED OR ERROR-FREE AND WILL NOT BE LIABLE FOR THE CONSEQUENCES OF ANY INTERRUPTIONS OR ERRORS.


Limitation of Liability GiraffeClick Limited AND ITS AffiliateS SHALL HAVE NO LIABILITY UNDER THIS AGREEMENT OR OTHERWISE FOR ANY INDIRECT, CONSEQUENTIAL, EXEMPLARY, SPECIAL, INCIDENTAL OR PUNITIVE DAMAGES EVEN IF THEY HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. IN ANY EVENT, TO THE MAXIMUM EXTENT PERMITTED BY LAW, AND EXCEPT FOR DEATH OR BODILY INJURY, GiraffeClick Limited’S MAXIMUM LIABILITY TO YOU UNDER THIS AGREEMENT FOR ANY CLAIM OR DAMAGES HOWSOEVER ARISING WILL BE LIMITED TO THE COMMISSION PAID TO YOU BY GiraffeClick Limited DURING THE SIX (6) MONTH PERIOD IMMEDIATELY PRECEDING THE EVENT GIVING RISE TO THE DAMAGES.

Section 14.You agree to indemnify, defend and hold harmless GiraffeClick Limited and its Affiliates, including their directors, officers, employees, subcontractors and agents (collectively, the “Indemnified Parties”), from and against any claim, demand, cause of action, debt or liability, including reasonable attorneys’ fees, to the extent that such action is based upon or arises out of: (a) Your breach of any representation, warranty, obligation or covenant under this Terms and Conditions; (b) your gross negligence or willful misconduct; or (c) any warranty, condition, representation, indemnity or guarantee relating to GiraffeClick Limited, the GiraffeClick Limited Services and/or the GiraffeClick Limited Website made by you.
The Indemnified Party shall promptly provide Affiliate with written notice of any claim which the Indemnified Party believes falls within the scope of the foregoing paragraphs and shall provide reasonable assistance to the Affiliate in the defense thereof. The Indemnified Party shall have the right to defend such claim if in its reasonable opinion the Affiliate fails to effectively do so. No settlement intended to bind the Indemnified Party shall be final without the Indemnified Party’s written consent, which shall not be unreasonably withheld.

Section 15. Personal Data Protection
You will be as the processer to process the personal data.
Your privacy is important to us and we have taken steps to ensure that we do not collect more information from you than is necessary for us to provide you with our services and to protect your personal data.
The Information collected by us including, but not limited to user name, address, phone number, and email address may be collected at the time of marketing our product/service. You have authorized us to collect, retain and use that Personal Data for the following purposes:
(i)	verifying your identity;
(ii)	verifying your eligibility to register as a user of the Sites;
(iii)	processing your registration as a user, providing you with a log-in ID for the Sites and
(iv)	maintaining and managing your registration information; providing you with customer service and responding to your queries, feedback, claims or disputes.


We will take appropriate security measures to protect personal data. We will ensure that personal data are adequately protected against unauthorized or accidental access, processing, erasure, or use by other people without authority. Our platform adopts industrial standard general SSL  technology and a cutting-edge firewall system to effectively prevent unauthorized access and fully safeguard your information from data theft. We use post Affiliate pro servers that meet the security standards to store your personal data. Fully aware of the importance of Personal data, only especially authorized staff within our permission have access to your personal data.


Your personal data can be viewed and edited through your account, which is protected by a password. You agree that under the applicable money laundering legislation and applicable laws, your personal data cannot be deleted and transmitted, it will be stored in our servers during the agreement period and after the end of the relationship.

You agree that we may disclose and transfer your Personal Data to service providers engaged by us to assist us with providing you with our services (including but not limited to Money service, Merchant service, data entry, database management, promotions, products and services alerts, delivery services and payment extension services) ("Service Providers"). These Service Providers are under a duty of confidentiality to us and are only permitted to use your Personal Data in service, and not for their own purposes.
You agree that when necessary we may also disclose and transfer your Personal Data to law enforcement agencies, government and regulatory and other organizations when carrying out the impact assessment to find out the data processing may result in a high risk.

For any change related to data Management, we will inform you by email or provide notice on the platform; and you agree that if you cannot accept the change, you can terminate this Terms and Conditions with us; if you still as our Affiliate to marketing our products /services, you are seemed to agree the change.

Section 16. General Provision

Entire Terms and Conditions. This Terms and Conditions along with the Privacy Policy, constitute the entire understanding between the parties relating to the subject matter of this Terms and Conditions and supersedes any and all prior agreements, representations, negotiations or understandings in relation to its subject matter.


No Waiver. The failure of either party to enforce (or delay in enforcing) at any time for any period any one or more of the terms of this Terms and Conditions shall not be a waiver of such term(s) or of the rights of such party at any time subsequently to enforce all the terms of this Terms and Conditions.
Independent Contractors. The parties to this Terms and Conditions are independent contractors and nothing in this Terms and Conditions will create any partnership, joint venture, agency, franchise, sales representative, or employment relationship between the parties.


All the terms and provisions of this Terms and Conditions shall be binding upon and inure to the benefit of the parties to this Terms and Conditions and to their respective heirs, successors, assigns and legal representatives. Affiliate shall have no right to assign or otherwise transfer this Terms and Conditions, or any of its rights or obligations here under, to any third party without prior written consent from GiraffeClick Limited, to be given or withheld at the sole discretion of GiraffeClick Limited. GiraffeClick Limited shall be entitled to assign this Terms and Conditions at its discretion.


If any provision of this Terms and Conditions is invalid, illegal or unenforceable for any reason, such provision shall be severed and the remaining provisions of this Terms and Conditions shall continue in full force and effect as if this Terms and Conditions had been executed with the invalid, illegal or unenforceable provision eliminated.


Applicable Laws. This Terms and Conditions shall be governed, construed and enforced in accordance with the laws of the state of New York. Each party agrees that any legal action, proceeding, controversy or claim between the parties arising out of or relating to this Terms and Conditions may be brought and prosecuted only in a court of law in New York, NY, and by execution of this Terms and Conditions each party hereto submits to the exclusive jurisdiction of such court and waives any objection it might have based upon improper venue or inconvenient forum.


Promotions GiraffeClick Limited offers several attractive reward features to its Affiliates. Bonuses are rewarded to Affiliates as part of the GiraffeClick Limited promotions programs. These bonuses are limited time offers and the terms and conditions associated with any bonus rewards are subject to change. Bonuses are given at the sole discretion of GiraffeClick Limited. These bonuses are based on real New Traders and Referrals referred by Affiliates using GiraffeClick Limited tracking links. Any indication of fraud, manipulation or other forms of deceitful or fraudulent activity based on the provision of the bonus will nullify the Affiliate account.
If you have any questions please contact us at support@giraffeclick.com

					</textarea>
                  <input type="checkbox" name="agreeWithTerms" value="Y" class="new_fif_media" required="" id="checkbox"><label
                        class="new_afif_agree" for="checkbox">I agree to the terms & conditions</label>
                    <div id="expandTermsAndConditions" class="ExpandTermsAndConditions"></div>
                    <div class="clear"></div>
                    <div id="FormMessage"></div>
                    <input type="submit" value="Signup" class="afif_btn" onclick="javascript:return checksubmit()"
                        style="font-size: 20px;">
                </div>
                <input type="hidden" name="successUrl" value="/affiliate/affiliate_done">
            </form>
        </div>
    </div>
</div>
    </div>
  </div>
</template>

<script>
  import $ from 'jquery'
  export default {
    name: 'person_kyc',
    components: {},
    mounted() {},
    data() {
      return {
      		}
		},
    methods: {
    }

  }
</script>
