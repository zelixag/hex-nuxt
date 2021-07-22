exports.ids=[78,84],exports.modules={1218:function(t,e,o){"use strict";o.r(e);var n=o(258),r=o(208),d=o(226),c={name:"binding-email-google",components:{suggest:n.default,verifycode:d.a},validations:{validatePhone:{telNumber:{required:r.required},countryid:{required:r.required},googleverifycode:{required:r.required},emailverifycode:{required:r.required},smsverifycode:{required:r.required}}},watch:{"validatePhone.countryid":function(t){this.country=this.countryOptions.find(e=>(this.validatePhone.telNumber="",this.$v.$reset(),e.countryid==t))},"$store.state.hex_lang.locale":function(t){this.countryOptions.map(e=>{"en_us"==t?(e.chname=e.name,e.name=e.engname):e.name=e.chname})}},data(){return{loading:!1,lang:this.$store.state.hex_lang.locale,state:{isopen:!1,phone:{state:!1,sendDelay:this.$t("formMenu.getCode")},email:{state:!1,sendDelay:this.$t("formMenu.getCode")}},validatePhone:{countryid:"",emailverifycode:"",googleverifycode:"",smsverifycode:"",telNumber:""},country:{},isphone:!0,countryOptions:[],phoneformat:!0,submitState:!1}},mounted(){this.$store.dispatch("com_country_getlist").then(({data:data})=>{this.countryOptions=data,this.countryOptions.map(t=>{"en_us"==this.lang&&(t.chname=t.name,t.name=t.engname)})})},methods:{goback(){this.$router.go(-1)},checkStatus(t){const e=this.$v.validatePhone[t];e.$touch(),e.$invalid},change(t){this.phoneformat=t},exist(t){this.isphone=t},openPhone(){const t=this,e=this.$v.validatePhone;let o;if(this.$userinfo.isopengoogleverify){if(e.$touch(),e.$invalid)return;o={authtype:"AuthPhone",countryid:t.validatePhone.countryid,countrycode:t.country.areacode,account:t.validatePhone.telNumber,emailverifycode:t.validatePhone.emailverifycode,googleverifycode:t.validatePhone.googleverifycode,smsverifycode:t.validatePhone.smsverifycode}}else{if(e.emailverifycode.$touch(),e.telNumber.$touch(),e.smsverifycode.$touch(),e.countryid.$touch(),e.emailverifycode.$invalid||e.telNumber.$invalid||e.smsverifycode.$invalid||e.countryid.$invalid)return;o={authtype:"AuthPhone",countryid:t.validatePhone.countryid,countrycode:t.country.areacode,emailverifycode:t.validatePhone.emailverifycode,account:t.validatePhone.telNumber,smsverifycode:t.validatePhone.smsverifycode}}t.state.issopen||t.submitState||(t.submitState=!0,t.loading=!0,t.state.isopen=!0,t.$store.dispatch("user_user_auth",o).then(e=>{e.data?(t.global_refresh_user_info(),t.$store.commit("set_message",{type:"ok",text:e.msg}),t.$router.push("/person/security")):(t.submitState=!1,t.loading=!1)}))}}},l=o(3);var component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"binding w990"},[t._ssrNode('<div class="common-head" data-v-6f913f00><span class="goback" data-v-6f913f00></span> <span data-v-6f913f00>'+t._ssrEscape(t._s(t.$t("formMenu.bindPhone")))+"</span></div> "),t._ssrNode('<div class="google-countant" data-v-6f913f00>',"</div>",[t._ssrNode('<div class="validation-area bind-email-area" data-v-6f913f00>',"</div>",[t._ssrNode('<div class="hint-text" data-v-6f913f00>',"</div>",[t.$userinfo.isemailauthed?t._ssrNode("<div"+t._ssrClass("auth-content_group auth-content_group_code",{"auth-content_group--error":t.$v.validatePhone.emailverifycode.$error})+" data-v-6f913f00>","</div>",[t._ssrNode('<p class="title clearfix" data-v-6f913f00><span class="left note" data-v-6f913f00><span data-v-6f913f00>'+t._ssrEscape(t._s(t.$t("formMenu.emailCodeVerification")))+'</span> <span class="fr" data-v-6f913f00>'+t._ssrEscape(t._s(t.global_string_split(t.$userinfo.email)))+"</span></span> "+(t.$v.validatePhone.emailverifycode.required?"\x3c!----\x3e":'<span class="normal-tip_error right" data-v-6f913f00>'+t._ssrEscape(t._s(t.$t("formMenu.emailCodeVerificationNone")))+"</span>")+"</p> "),t._ssrNode('<div class="auth-content_group_mail" data-v-6f913f00>',"</div>",[t._ssrNode("<input"+t._ssrAttr("placeholder",t.$t("formMenu.emialInputVerification"))+' type="text"'+t._ssrAttr("value",t.$v.validatePhone.emailverifycode.$model)+' class="input" data-v-6f913f00> '),o("verifycode",{attrs:{email:t.$userinfo.email}})],2)],2):t._e(),t._ssrNode(" "),t._ssrNode("<div"+t._ssrClass("auth-content_group nation set-el-select-style",{"auth-content_group--error":t.$v.validatePhone.countryid.$error})+" data-v-6f913f00>","</div>",[t._ssrNode('<p class="title clearfix" data-v-6f913f00><span class="left" data-v-6f913f00>'+t._ssrEscape(t._s(t.$t("formMenu.nationality")))+"</span> "+(t.$v.validatePhone.countryid.required?"\x3c!----\x3e":'<span class="normal-tip_error right" data-v-6f913f00>'+t._ssrEscape(t._s(t.$t("formMenu.nationSelect")))+"</span>")+"</p> "),o("el-select",{staticClass:"select_input mobile",attrs:{filterable:"","popper-class":"select_input_popper","popper-append-to-body":!1,placeholder:t.$t("formMenu.select")},model:{value:t.$v.validatePhone.countryid.$model,callback:function(e){t.$set(t.$v.validatePhone.countryid,"$model","string"==typeof e?e.trim():e)},expression:"$v.validatePhone.countryid.$model"}},t._l(t.countryOptions,(function(e){return o("el-option",{key:e.countryid,attrs:{label:e.name+" +"+e.areacode,value:e.countryid}},[o("span",{staticStyle:{float:"left"}},[t._v(t._s(e.name+" +"+e.areacode))]),t._v(" "),o("span",{staticStyle:{float:"right"}},[o("img",{staticStyle:{width:"20px",height:"auto","padding-top":"11px"},attrs:{src:e.flag}})])])})),1)],2),t._ssrNode(" <div"+t._ssrClass("auth-content_group auth-content_group_code",{"auth-content_group--error":t.$v.validatePhone.telNumber.$error})+' data-v-6f913f00><p class="title clearfix" data-v-6f913f00><span class="left" data-v-6f913f00>'+t._ssrEscape(t._s(t.$t("formMenu.telPhone")))+"</span> "+(t.$v.validatePhone.telNumber.required?"\x3c!----\x3e":'<span class="normal-tip_error right" data-v-6f913f00>'+t._ssrEscape(t._s(t.$t("formMenu.phoneNone")))+"</span>")+" "+(t.isphone?"\x3c!----\x3e":"<span"+t._ssrClass(" right",{"normal-normal-tip_error":t.isphone})+' style="color:#CD4559" data-v-6f913f00>'+t._ssrEscape(t._s(t.$t("patch.PhoneExists")))+"</span>")+" "+(t.phoneformat?"\x3c!----\x3e":"<span"+t._ssrClass(" right",{"normal-normal-tip_error":t.phoneformat})+' style="color:#CD4559" data-v-6f913f00>'+t._ssrEscape(t._s(t.$t("patch.MobileIncorrect")))+"</span>")+'</p> <div class="auth-content_group_mail" data-v-6f913f00><input'+t._ssrAttr("placeholder",t.$t("formMenu.phoneNumberInput"))+' type="text"'+t._ssrAttr("value",t.$v.validatePhone.telNumber.$model)+' class="input validation" data-v-6f913f00></div></div> '),t._ssrNode("<div"+t._ssrClass("auth-content_group auth-content_group_code",{"auth-content_group--error":t.$v.validatePhone.smsverifycode.$error})+" data-v-6f913f00>","</div>",[t._ssrNode('<p class="title clearfix" data-v-6f913f00><span class="left" data-v-6f913f00>'+t._ssrEscape(t._s(t.$t("formMenu.phoneCodeVerification")))+"</span> "+(t.$v.validatePhone.smsverifycode.required?"\x3c!----\x3e":'<span class="normal-tip_error right" data-v-6f913f00>'+t._ssrEscape(t._s(t.$t("formMenu.phoneCodeVerificationNone")))+"</span>")+"</p> "),t._ssrNode('<div class="auth-content_group_mail" data-v-6f913f00>',"</div>",[t._ssrNode("<input"+t._ssrAttr("placeholder",t.$t("formMenu.phoneInputVerification"))+' type="text"'+t._ssrAttr("value",t.$v.validatePhone.smsverifycode.$model)+' class="input" data-v-6f913f00> '),o("verifycode",{ref:"names",attrs:{phone:t.validatePhone.telNumber?t.validatePhone.telNumber:"0",isexist:!0,country:t.country},on:{isexist:t.exist,change:t.change,checkStatus:t.checkStatus}})],2)],2),t._ssrNode(" "+(t.$userinfo.isopengoogleverify?"<div"+t._ssrClass("auth-content_group auth-content_group_code",{"auth-content_group--error":t.$v.validatePhone.googleverifycode.$error})+' data-v-6f913f00><p class="title clearfix" data-v-6f913f00><span class="left" data-v-6f913f00>'+t._ssrEscape(t._s(t.$t("formMenu.googleCodeVerification")))+"</span> "+(t.$v.validatePhone.googleverifycode.required?"\x3c!----\x3e":'<span class="normal-tip_error right" data-v-6f913f00>'+t._ssrEscape(t._s(t.$t("formMenu.googleCodeVerificationNone")))+"</span>")+'</p> <div class="auth-content_group_mail" data-v-6f913f00><input'+t._ssrAttr("placeholder",t.$t("formMenu.googleInputVerification"))+' type="text"'+t._ssrAttr("value",t.$v.validatePhone.googleverifycode.$model)+' class="input validation" data-v-6f913f00></div></div>':"\x3c!----\x3e")+" "),o("button",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"commitBtn button-loading--por",on:{click:t.openPhone}},[t._ssrNode(t._ssrEscape(t._s(t.$t("formMenu.bindding"))+"\n        "))])],2)])]),t._ssrNode(" "),o("suggest")],2)}),[],!1,(function(t){var e=o(870);e.__inject__&&e.__inject__(t)}),"6f913f00","c1b7d142");e.default=component.exports},213:function(t,e,o){t.exports=o.p+"img/8487944.svg"},214:function(t,e){t.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4NCjxzdmcgd2lkdGg9IjE0cHgiIGhlaWdodD0iMTRweCIgdmlld0JveD0iMCAwIDE0IDE0IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPg0KICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggNTEuMSAoNTc1MDEpIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoIC0tPg0KICAgIDx0aXRsZT5Db21iaW5lZCBTaGFwZTwvdGl0bGU+DQogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+DQogICAgPGRlZnM+PC9kZWZzPg0KICAgIDxnIGlkPSJQYWdlLTEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPg0KICAgICAgICA8ZyBpZD0i5Zu+5qCHIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjMyLjAwMDAwMCwgLTQ0OC4wMDAwMDApIiBmaWxsPSIjQzVDM0REIj4NCiAgICAgICAgICAgIDxwYXRoIGQ9Ik0yMzQsNDQ4IEwyNDQsNDQ4IEwyNDYsNDUwIEwyNDYsNDYwIEwyNDQsNDYyIEwyMzQsNDYyIEwyMzIsNDYwIEwyMzIsNDUwIEwyMzQsNDQ4IFogTTI0NC4wNzEwNjgsNDUwIEwyMzkuMDM1NTM0LDQ1NS4wMzU1MzQgTDIzNCw0NTAgTDIzMyw0NTEgTDIzOS4wMzU1MzQsNDU3LjAzNTUzNCBMMjQ1LjA3MTA2OCw0NTEgTDI0NC4wNzEwNjgsNDUwIFoiIGlkPSJDb21iaW5lZC1TaGFwZSI+PC9wYXRoPg0KICAgICAgICA8L2c+DQogICAgPC9nPg0KPC9zdmc+"},215:function(t,e,o){t.exports=o.p+"img/8b46b37.svg"},216:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAcCAYAAABh2p9gAAAAZElEQVRIS2M8evjufwYqAkaaGWhtq8xIiUNhDoO7kGYGkhoEMIfgdOGogQQjfjQMGTAS9miyGU02mCFA/5xCMBZwKKB9iU2uy9D10a7Ww+VC9MqLUF4n6EKqG0hq2BJ0IakGAgDZA/cNjtEuJgAAAABJRU5ErkJggg=="},217:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAABEUlEQVRIS+2WUQ6CMAyG2wcvgrdAvJmgwNEUPYVcxISZLW7pgM11MF50Twt0/fp3XVMEsrrr8wIAZ/pthX19OO6lX7VQbxLBtHsDVcDEMAuKG8EMVAKFyS9iBQA7IUS5wt0BIrYA8BJCNIahgYhY5UUmDeDR9e0wiNMSqITlRSYFwP3WlxpqFFKDj1ETq9Tna5xSE1Us9FvgFlC9E5IKLjTk7AQYCw2BKd+0SmmRhDrgBugEhjriBOZVSN6ms5C4sCCgS6n8rt8Zp7i8KfXdKf3HaRTBwDmlHGWT1hbaxkYti92NWAppISECxvTbKGBoNubs/sAl2Zs9+xspTTGLuq6i3n5M1KEkHhftQTgx1Br135YHGsbxOUhZAAAAAElFTkSuQmCC"},218:function(t,e,o){t.exports=o.p+"img/2b0ec6a.png"},219:function(t,e){t.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4NCjxzdmcgd2lkdGg9IjEwcHgiIGhlaWdodD0iMTRweCIgdmlld0JveD0iMCAwIDEwIDE0IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPg0KICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggNTEuMyAoNTc1NDQpIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoIC0tPg0KICAgIDx0aXRsZT5Db21iaW5lZCBTaGFwZTwvdGl0bGU+DQogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+DQogICAgPGRlZnM+PC9kZWZzPg0KICAgIDxnIGlkPSJQYWdlLTEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPg0KICAgICAgICA8ZyBpZD0i5Zu+5qCHIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMzc3LjAwMDAwMCwgLTEzNTcuMDAwMDAwKSIgZmlsbD0iIzE0YTJhNSI+DQogICAgICAgICAgICA8cGF0aCBkPSJNMzc3LDEzNTcgTDM4NywxMzU3IEwzODcsMTM3MSBMMzc3LDEzNzEgTDM3NywxMzU3IFogTTM3OCwxMzU4IEwzNzgsMTM2OCBMMzg2LDEzNjggTDM4NiwxMzU4IEwzNzgsMTM1OCBaIE0zNzksMTM1OSBMMzg1LDEzNTkgTDM4NSwxMzY3IEwzNzksMTM2NyBMMzc5LDEzNTkgWiBNMzgxLDEzNjkgTDM4MSwxMzcwIEwzODMsMTM3MCBMMzgzLDEzNjkgTDM4MSwxMzY5IFoiIGlkPSJDb21iaW5lZC1TaGFwZSI+PC9wYXRoPg0KICAgICAgICA8L2c+DQogICAgPC9nPg0KPC9zdmc+"},226:function(t,e,o){"use strict";var n=o(228),r={name:"verifycode",props:{country:{type:Object,default:null},isexist:{type:Boolean,default:!1},template:{type:String,default:"Default"},email:{type:String,default:""},areacode:{type:String,default:""},phone:{type:String,default:""}},data(){return{loading:!1,send:!1,sendDelay:this.$t("formMenu.getCode"),timer:null}},watch:{"$store.state.hex_lang.locale":function(t){this.sendDelay=this.$t("formMenu.getCode")}},methods:{getCode(){const t=this;if(t.send)return;let e;if(this.send=!0,this.loading=!0,null!=this.country&&(e=JSON.stringify(this.country),"{}"==e))return this.$emit("checkStatus","countryid"),this.send=!1,void(this.loading=!1);if("0"==t.email)return t.$store.commit("set_message",{type:"error",text:this.$t("patch.EmailAddress")}),this.loading=!1,void(this.send=!1);if("0"==t.phone)return t.$store.commit("set_message",{type:"error",text:this.$t("patch.MobilePhone")}),this.loading=!1,void(this.send=!1);if(t.isexist){let e={uid:0};if(0!=t.phone){if(null!=t.country&&"0086"==t.country.areacode){if(!new RegExp(/^1\d{10}$/).test(t.phone))return t.$store.commit("set_message",{type:"error",text:this.$t("formMenu.phoneFormatError")}),this.loading=!1,void(this.send=!1)}e.phone=t.phone}else if(0!=t.email)e.email=t.email;else{if(""==t.email)return t.$store.commit("set_message",{type:"error",text:this.$t("formMenu.emialInputAddress")}),this.loading=!1,void(this.send=!1);if(""==t.phone)return t.$store.commit("set_message",{type:"error",text:this.$t("formMenu.phoneNumberInput")}),this.send=!1,void(this.loading=!1)}t.$store.dispatch("user_user_exist",e).then(({data:data})=>{if(data)return t.phone?t.$store.commit("set_message",{type:"error",text:this.$t("formMenu.exisPhone")}):t.email&&t.$store.commit("set_message",{type:"error",text:this.$t("formMenu.existEmail")}),this.loading=!1,void(this.send=!1);this.send=!1,this.getcodes()})}else this.send=!1,this.getcodes()},getcodes(){const t=this;if(t.send)return;this.send=!0;const e={};let o="";t.email&&(e.email=t.email,o="com_email_verifycode_send"),t.phone&&(e.phone=t.phone,o="com_sms_verifycode_send"),t.country&&(e.areacode=t.country.areacode),t.areacode&&(e.areacode=t.areacode),e.template=t.template,this.getCaptch().then(r=>{if(r&&0==r.ret)e.randstr=r.randstr,e.ticket=r.ticket,e.captchaid=n.a.appId;else if(r&&2==r.ret)return t.loading=!1,t.send=!1,null;return t.$store.dispatch(o,e)}).then(data=>{if(data)return data.data?t.delaySend(data):(t.loading=!1,void(t.send=!1))}).then(()=>{t.send=!1})},getCaptch(){return this.phone?n.a.init():new Promise(t=>{t(null)})},delaySend(data){this.loading=!1;let t=this;return new Promise((function(e){if(!data||!data.data.succeed)return void e(!0);let o=119;t.sendDelay=o+"s",t.timer=setInterval(()=>{--o,t.sendDelay=o+"s",0==o&&(t.sendDelay=t.$t("formMenu.getCode"),clearInterval(t.timer),t.send=!1,e(!0))},1e3)}))},clearTime(){clearInterval(this.timer),this.send=!1,this.sendDelay=this.$t("formMenu.getCode"),this.timer=null}}},d=o(3);var component=Object(d.a)(r,(function(){var t=this.$createElement;return(this._self._c||t)("span",{directives:[{name:"loading",rawName:"v-loading",value:this.loading,expression:"loading"}],staticClass:"mail_code get-code button-loading--por",class:{"auth-content_group--unavailable":this.send},on:{click:this.getCode}},[this._ssrNode(this._ssrEscape(this._s(this.sendDelay)))])}),[],!1,(function(t){}),"e39469e0","062367e8");e.a=component.exports},228:function(t,e,o){"use strict";e.a={captcha:null,appId:"2034696462",init(t){let e=this;return new Promise((function(o){t?t.element&&t.options?e.captcha=new TencentCaptcha(t.element,e.appId,(function(t){o(t)}),t.options):t.element?e.captcha=new TencentCaptcha(t.element,e.appId,(function(t){o(t)})):e.captcha=new TencentCaptcha(e.appId,(function(t){o(t)}),t.options):e.captcha=new TencentCaptcha(e.appId,(function(t){o(t)})),e.captcha.show()}))},show(t){this.captcha&&this.captcha.show()},destroy(){this.captcha&&this.captcha.destroy()},getTicket(){this.captcha&&this.captcha.getTicket()}}},258:function(t,e,o){"use strict";o.r(e);var n={name:"setting-suggest"},r=o(3),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"setting-suggest"},[t._ssrNode("<h3>"+t._ssrEscape(t._s(t.$t("google.safetySuggest")))+"</h3> <p>"+t._ssrEscape(t._s(t.$t("google.reveal")))+"</p> <p>"+t._ssrEscape(t._s(t.$t("google.fishing")))+"</p> <p>"+t._ssrEscape(t._s(t.$t("google.install")))+"</p> <p>"+t._ssrEscape(t._s(t.$t("google.call")))+"</p> <p>"+t._ssrEscape(t._s(t.$t("google.revealInfo")))+"</p> <p>"+t._ssrEscape(t._s(t.$t("google.transfer")))+"</p>")])}),[],!1,null,null,"6309123c");e.default=component.exports},557:function(t,e,o){var content=o(871);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);var n=o(2).default;t.exports.__inject__=function(t){n("0f723688",content,!0,t)}},870:function(t,e,o){"use strict";o.r(e);var n=o(557),r=o.n(n);for(var d in n)"default"!==d&&function(t){o.d(e,t,(function(){return n[t]}))}(d);e.default=r.a},871:function(t,e,o){var n=o(8);(t.exports=o(1)(!1)).push([t.i,".auth[data-v-6f913f00]{background-color:#f5f5f8;width:100%}.auth-content[data-v-6f913f00]{width:1200px;min-height:600px;margin:20px auto;background-color:#fff;padding-left:80px;position:relative}.auth-content_title[data-v-6f913f00]{margin:20px 0 30px;font-size:30px;color:#000;display:inline-block}.auth-content_nav span[data-v-6f913f00]{border-bottom:2px solid #8583ac}.auth-content_group[data-v-6f913f00]{margin-top:20px;width:400px}.auth-content_group--error .normal-tip_error[data-v-6f913f00]{display:inline-block!important}.auth-content_group--unavailable[data-v-6f913f00]{background-color:#ddd!important;color:#bbb!important;pointer-events:none;cursor:pointer}.auth-content_group.auth-content_group--error input[data-v-6f913f00]{border:1px solid #cd4559!important;color:#cd4559!important}.auth-content_group .title[data-v-6f913f00]{font-size:12px;color:#666;margin-bottom:6px;display:inline-block;width:100%}.auth-content_group.auth-content_group_code .title[data-v-6f913f00]{width:270px}.mention-money.auth-content_group.auth-content_group_code .title[data-v-6f913f00]{width:100%}.auth-content_group input[data-v-6f913f00]{height:40px;line-height:40px;padding-left:10px;border:1px solid #ddd;color:#000;font-size:14px;width:400px}.auth-content_group input[data-v-6f913f00]::-webkit-input-placeholder{color:#bbb;font-size:14px}.auth-content_group input[data-v-6f913f00]::-moz-placeholder{color:#bbb;font-size:14px}.auth-content_group input[data-v-6f913f00]:-ms-input-placeholder{color:#bbb;font-size:14px}.auth-content_group input[data-v-6f913f00]::-ms-input-placeholder{color:#bbb;font-size:14px}.auth-content_group input[data-v-6f913f00]::placeholder{color:#bbb;font-size:14px}.auth-content_group .label-tip[data-v-6f913f00]{color:#333}.auth-content_group .serve-tip[data-v-6f913f00]{color:#14a2a5}.auth-content_group .normal-tip[data-v-6f913f00]{color:#bbb}.auth-content_group .normal-tip_error[data-v-6f913f00]{color:#cd4559!important;display:none}.auth-content_group_mail[data-v-6f913f00]{position:relative}.auth-content_group_mail .input[data-v-6f913f00]{width:270px}.auth-content_group_mail .mail_code[data-v-6f913f00]{width:120px;margin-left:10px;background-color:#14a2a5;float:right}.auth-content_button[data-v-6f913f00],.auth-content_group_mail .mail_code[data-v-6f913f00]{font-size:14px;color:#fff;line-height:40px;display:inline-block;text-align:center;cursor:pointer}.auth-content_button[data-v-6f913f00]{height:40px;background:#14a2a5;margin:30px 0;width:400px}.auth-content_button[data-v-6f913f00]:hover{background:#2babae}.auth-bg[data-v-6f913f00]{position:absolute;top:130px;right:160px;width:400px;height:321px}.auth-content_group .auth_tip[data-v-6f913f00]{color:#14a2a5}.auth-content_title_tip[data-v-6f913f00]{font-size:14px;color:#999}.auth-content_group_auth_tip[data-v-6f913f00]{font-size:14px;color:#333;width:400px;margin-bottom:150px}.auth-content_group_auth_tip .auth_tip[data-v-6f913f00]{color:#14a2a5;cursor:pointer}.auth-content_nav[data-v-6f913f00]{font-size:14px}.auth-content_nav span[data-v-6f913f00]{margin-right:40px;padding-bottom:8px;border-bottom:2px solid rgba(133,131,172,.2);color:#333;display:inline-block;cursor:pointer}.auth-content_nav span.google[data-v-6f913f00]:before{background:url("+n(o(213))+') no-repeat;background-size:14px auto}.auth-content_nav span.google[data-v-6f913f00]:before,.auth-content_nav span.phone[data-v-6f913f00]:before{content:"";display:inline-block;vertical-align:middle;width:22px;height:14px}.auth-content_nav span.phone[data-v-6f913f00]:before{background:url('+n(o(216))+") no-repeat;background-size:auto 14px}.auth-content_nav span[data-v-6f913f00]:before{background:url("+n(o(214))+") no-repeat;background:url("+n(o(217))+') no-repeat;background-size:14px auto}.auth-content_nav span.google.active[data-v-6f913f00]:before,.auth-content_nav span[data-v-6f913f00]:before{content:"";display:inline-block;vertical-align:middle;width:22px;height:14px}.auth-content_nav span.google.active[data-v-6f913f00]:before{background:url('+n(o(215))+") no-repeat;background-size:13px auto}.auth-content_nav span.active[data-v-6f913f00]{color:#14a2a5;border-color:#14a2a5}.auth-content_nav span.email.active[data-v-6f913f00]:before{background:url("+n(o(218))+') no-repeat;content:"";display:inline-block;vertical-align:middle;width:22px;height:14px;background-size:14px auto}.auth-content_nav span.phone.active[data-v-6f913f00]:before{background:url('+n(o(219))+') no-repeat;content:"";display:inline-block;vertical-align:middle;width:22px;height:14px;background-size:auto 14px}.auth-content .auth-content_group .password_group[data-v-6f913f00]{position:relative}.auth-content .auth-content_group .password_group input[data-v-6f913f00]{padding-right:35px}.auth-content .auth-content_group .password_group_tip[data-v-6f913f00]{position:absolute;right:0;top:0;padding:0 10px;line-height:40px;height:40px;display:inline-block;font-size:14px}.auth-content .auth-content_group .password_group_tip.week[data-v-6f913f00]{color:#cd4559}.auth-content .auth-content_group .password_group_tip.middle[data-v-6f913f00]{color:#f5a623}.auth-content .auth-content_group .password_group_tip.strong[data-v-6f913f00]{color:#03bf7b}button.commitBtn.bg_bbb[data-v-6f913f00]{background:#bbb!important}.nation[data-v-6f913f00]{border-radius:0}.nogetcode[data-v-6f913f00]{width:120px;margin-left:10px;font-size:14px;color:#14a2a5;background-color:#ccc;line-height:40px;display:inline-block;float:right;text-align:center;cursor:pointer}.bind-email-area .hint-text .auth-content_group_code p[data-v-6f913f00]{width:400px}.bind-email-area .hint-text .auth-content_group_code p span.note[data-v-6f913f00]{width:270px}.bind-email-area .hint-text .auth-content_group_code .validation[data-v-6f913f00]{width:400px}.binding .google-countant[data-v-6f913f00]{background:#fff;padding:0 20px 30px;box-sizing:border-box;overflow:hidden;margin-bottom:10px}.google-hint[data-v-6f913f00]{overflow:hidden;padding-left:26px}.google-hint span[data-v-6f913f00]{float:left;font-size:14px;color:#333;font-weight:700}.google-hint .tag[data-v-6f913f00]{width:16px;height:16px;margin-right:10px;color:#fff;background:#8583ac;text-align:center;font-size:12px;line-height:16px}.hint-text[data-v-6f913f00]{padding:0 26px;color:#666;font-size:14px}.hint-text p[data-v-6f913f00]{line-height:20px}.hint-text .download-link[data-v-6f913f00]{margin-top:20px}.hint-text .download-link button[data-v-6f913f00]{width:136px;height:40px;background:#14a2a5;color:#fff;margin-right:20px;text-align:left;padding-left:49px}.hint-text .download-link button[data-v-6f913f00]:last-child{padding-left:44px}.select_input.mobile[data-v-6f913f00]{width:400px}.secret-key-code[data-v-6f913f00]{margin-right:20px}.secret-keycopy[data-v-6f913f00]{color:#14a2a5}.red-reg[data-v-6f913f00]{color:#cd4559!important}span.validation-title[data-v-6f913f00]{line-height:17px;color:#666}.input-field[data-v-6f913f00]{width:400px;margin-top:6px}.mgb0[data-v-6f913f00]{margin-bottom:0}.left.note .fr[data-v-6f913f00]{color:#bbb}.auth-content_group .title[data-v-6f913f00]{margin-bottom:0}',""])}};