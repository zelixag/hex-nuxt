exports.ids=[60],exports.modules={1196:function(t,e,o){"use strict";o.r(e);var d=o(208),n=o(407),r=o(226),c={components:{popup:n.a,verifycode:r.a},validations:{addressCode:{emailverifycode:{required:d.required},smsverifycode:{required:d.required},googleverifycode:{required:d.required},paypassword:{required:d.required}}},data:()=>({tab:1,addressCode:{googleverifycode:"",emailverifycode:"",smsverifycode:"",paypassword:""},openTradePayFee:!1,cvalue:50}),mounted(){this.init()},methods:{init(){this.$store.dispatch("user_user_settings_get").then(data=>{data&&(this.openTradePayFee=data.data.opentradepayfee)}),this.$store.dispatch("com_constants_getconstantsinfo",{uid:this.$userinfo.uid,id:1101078}).then(data=>{data&&(console.log(data),this.cvalue=100*data.data.cvalue)})},saveSetting(){var t={userid:this.$userinfo.uid,opentradepayfee:!this.openTradePayFee};if(console.log(this.tab,this.$v.addressCode.smsverifycode.$model),0==this.tab&&null!=this.$v.addressCode.smsverifycode.$model?t.smsverifycode=this.$v.addressCode.smsverifycode.$model:1==this.tab&&null!=this.$v.addressCode.emailverifycode.$model&&(t.emailverifycode=this.$v.addressCode.emailverifycode.$model),1!=this.tab||""!=this.$v.addressCode.emailverifycode.$model){if(0==this.tab&&""==this.$v.addressCode.smsverifycode.$model)return console.log(this.$v.addressCode.smsverifycode.$model),void this.$store.commit("set_message",{type:"error",text:this.$t("formMenu.phoneCodeVerificationNone")});console.log(this.$v.addressCode.smsverifycode),this.$store.dispatch("user_user_settings_save",t).then(data=>{200==data.code&&(this.$v.addressCode.smsverifycode.$model="",this.$v.addressCode.emailverifycode.$model="",this.$store.commit("set_message",{type:"ok",text:data.msg}),setTimeout(()=>{window.location.reload()},500))})}else this.$store.commit("set_message",{type:"error",text:this.$t("formMenu.emailCodeVerificationNone")})}}},l=o(3);var component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,d=t._self._c||e;return d("div",{staticClass:"traded"},[t._ssrNode('<div class="person-block" data-v-79491d80><span class="person-block_icon wallet" data-v-79491d80></span> <div class="person-block_info clearfix" data-v-79491d80><p class="traded_info_title left" data-v-79491d80><span class="traded_tip" data-v-79491d80>'+t._ssrEscape(t._s(t.$t("legalSet.title")))+"</span></p></div></div> "),t._ssrNode('<div class="traded-block" data-v-79491d80>',"</div>",[t._ssrNode('<div class="ordertab" style="border-bottom: 1px solid #f5f5f8;" data-v-79491d80><h3 data-v-79491d80><img'+t._ssrAttr("src",o(800))+" data-v-79491d80>"+t._ssrEscape(t._s(t.$t("legalSet.userLicoTitle"))+"\n      ")+'</h3> <span class="label-tip" data-v-79491d80>'+t._ssrEscape(t._s(t.$t("legalSet.exchange")))+'</span> <span class="label-tip" data-v-79491d80>'+t._ssrEscape(t._s(t.$t("legalSet.otcTrade")))+'</span> <span class="label-tip" data-v-79491d80>'+t._ssrEscape(t._s(t.$t("legalSet.leveragedTrade")))+'</span> <span class="label-tip" data-v-79491d80>'+t._ssrEscape(t._s(t.$t("legalSet.contractTrade")))+"</span></div> "),t._ssrNode('<div class="formtab" data-v-79491d80>',"</div>",[t._ssrNode('<div class="auth-content_nav" data-v-79491d80>'+(t.$userinfo.isemailauthed?"<span"+t._ssrClass("email",{active:1===t.tab})+" data-v-79491d80>"+t._ssrEscape(t._s(t.$t("formMenu.emailAuthentication")))+"</span>":"\x3c!----\x3e")+"</div> "),0===t.tab?t._ssrNode('<div class="auth-content_form" data-v-79491d80>',"</div>",[t._ssrNode('<div class="auth-content_group auth-content_group_code" data-v-79491d80>',"</div>",[t._ssrNode('<p class="title clearfix" data-v-79491d80><span class="left" data-v-79491d80>'+t._ssrEscape(t._s(t.$t("formMenu.noteInputVerification")))+"</span> "+(""==t.addressCode.smsverifycode?'<span class="normal-tip_error right" data-v-79491d80>'+t._ssrEscape(t._s(t.$t("formMenu.phoneCodeVerificationNone")))+"</span>":"\x3c!----\x3e")+"</p> "),t._ssrNode('<div class="auth-content_group_mail" data-v-79491d80>',"</div>",[t._ssrNode('<input type="text"'+t._ssrAttr("placeholder",t.$t("formMenu.phoneInputVerification"))+t._ssrAttr("value",t.$v.addressCode.smsverifycode.$model)+' class="input" data-v-79491d80> '),d("verifycode",{attrs:{phone:t.$userinfo.phone}})],2)],2)]):t._e(),t._ssrNode(" "),1===t.tab?t._ssrNode('<div class="auth-content_form" data-v-79491d80>',"</div>",[t._ssrNode('<div class="auth-content_group auth-content_group_code" data-v-79491d80>',"</div>",[t._ssrNode('<p class="title clearfix" data-v-79491d80><span class="left" data-v-79491d80>'+t._ssrEscape(t._s(t.$t("formMenu.emailCodeVerification")))+'</span></p> <span class="normal-tip_error right fz12" data-v-79491d80>'+t._ssrEscape(t._s(t.$t("formMenu.emailCodeVerificationNone")))+"</span> "),t._ssrNode('<div class="auth-content_group_mail" data-v-79491d80>',"</div>",[t._ssrNode('<input type="text"'+t._ssrAttr("placeholder",t.$t("formMenu.emialInputVerification"))+t._ssrAttr("value",t.$v.addressCode.emailverifycode.$model)+' class="input" data-v-79491d80> '),d("verifycode",{attrs:{email:t.$userinfo.email}})],2)],2)]):t._e(),t._ssrNode(" "+(t.openTradePayFee?'<div class="auth-content_button button-loading--por" data-v-79491d80>'+t._ssrEscape(t._s(t.$t("legalSet.turnOff")))+"</div>":"\x3c!----\x3e")+" "+(t.openTradePayFee?"\x3c!----\x3e":'<div class="auth-content_button button-loading--por" data-v-79491d80>'+t._ssrEscape(t._s(t.$t("legalSet.turnOn")))+"</div>")+' <p class="pl" data-v-79491d80><span class="red" data-v-79491d80>*</span> <b data-v-79491d80>'+t._ssrEscape("\n          "+t._s(t.$t("legalSet.span1"))+" \n          (")+'<span class="red" data-v-79491d80>'+t._ssrEscape(t._s(t.cvalue)+"%")+"</span>"+t._ssrEscape(") \n          "+t._s(t.$t("legalSet.span1-1"))+"\n        ")+'</b></p> <p class="pl" data-v-79491d80><span class="red" data-v-79491d80>*</span>'+t._ssrEscape("\n       "+t._s(t.$t("legalSet.span2"))+"\n      ")+"</p>")],2)],2)],2)}),[],!1,(function(t){var e=o(801);e.__inject__&&e.__inject__(t)}),"79491d80","ef28a5d8");e.default=component.exports},213:function(t,e,o){t.exports=o.p+"img/8487944.svg"},214:function(t,e){t.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4NCjxzdmcgd2lkdGg9IjE0cHgiIGhlaWdodD0iMTRweCIgdmlld0JveD0iMCAwIDE0IDE0IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPg0KICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggNTEuMSAoNTc1MDEpIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoIC0tPg0KICAgIDx0aXRsZT5Db21iaW5lZCBTaGFwZTwvdGl0bGU+DQogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+DQogICAgPGRlZnM+PC9kZWZzPg0KICAgIDxnIGlkPSJQYWdlLTEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPg0KICAgICAgICA8ZyBpZD0i5Zu+5qCHIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjMyLjAwMDAwMCwgLTQ0OC4wMDAwMDApIiBmaWxsPSIjQzVDM0REIj4NCiAgICAgICAgICAgIDxwYXRoIGQ9Ik0yMzQsNDQ4IEwyNDQsNDQ4IEwyNDYsNDUwIEwyNDYsNDYwIEwyNDQsNDYyIEwyMzQsNDYyIEwyMzIsNDYwIEwyMzIsNDUwIEwyMzQsNDQ4IFogTTI0NC4wNzEwNjgsNDUwIEwyMzkuMDM1NTM0LDQ1NS4wMzU1MzQgTDIzNCw0NTAgTDIzMyw0NTEgTDIzOS4wMzU1MzQsNDU3LjAzNTUzNCBMMjQ1LjA3MTA2OCw0NTEgTDI0NC4wNzEwNjgsNDUwIFoiIGlkPSJDb21iaW5lZC1TaGFwZSI+PC9wYXRoPg0KICAgICAgICA8L2c+DQogICAgPC9nPg0KPC9zdmc+"},215:function(t,e,o){t.exports=o.p+"img/8b46b37.svg"},216:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAcCAYAAABh2p9gAAAAZElEQVRIS2M8evjufwYqAkaaGWhtq8xIiUNhDoO7kGYGkhoEMIfgdOGogQQjfjQMGTAS9miyGU02mCFA/5xCMBZwKKB9iU2uy9D10a7Ww+VC9MqLUF4n6EKqG0hq2BJ0IakGAgDZA/cNjtEuJgAAAABJRU5ErkJggg=="},217:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAABEUlEQVRIS+2WUQ6CMAyG2wcvgrdAvJmgwNEUPYVcxISZLW7pgM11MF50Twt0/fp3XVMEsrrr8wIAZ/pthX19OO6lX7VQbxLBtHsDVcDEMAuKG8EMVAKFyS9iBQA7IUS5wt0BIrYA8BJCNIahgYhY5UUmDeDR9e0wiNMSqITlRSYFwP3WlxpqFFKDj1ETq9Tna5xSE1Us9FvgFlC9E5IKLjTk7AQYCw2BKd+0SmmRhDrgBugEhjriBOZVSN6ms5C4sCCgS6n8rt8Zp7i8KfXdKf3HaRTBwDmlHGWT1hbaxkYti92NWAppISECxvTbKGBoNubs/sAl2Zs9+xspTTGLuq6i3n5M1KEkHhftQTgx1Br135YHGsbxOUhZAAAAAElFTkSuQmCC"},218:function(t,e,o){t.exports=o.p+"img/2b0ec6a.png"},219:function(t,e){t.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4NCjxzdmcgd2lkdGg9IjEwcHgiIGhlaWdodD0iMTRweCIgdmlld0JveD0iMCAwIDEwIDE0IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPg0KICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggNTEuMyAoNTc1NDQpIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoIC0tPg0KICAgIDx0aXRsZT5Db21iaW5lZCBTaGFwZTwvdGl0bGU+DQogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+DQogICAgPGRlZnM+PC9kZWZzPg0KICAgIDxnIGlkPSJQYWdlLTEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPg0KICAgICAgICA8ZyBpZD0i5Zu+5qCHIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMzc3LjAwMDAwMCwgLTEzNTcuMDAwMDAwKSIgZmlsbD0iIzE0YTJhNSI+DQogICAgICAgICAgICA8cGF0aCBkPSJNMzc3LDEzNTcgTDM4NywxMzU3IEwzODcsMTM3MSBMMzc3LDEzNzEgTDM3NywxMzU3IFogTTM3OCwxMzU4IEwzNzgsMTM2OCBMMzg2LDEzNjggTDM4NiwxMzU4IEwzNzgsMTM1OCBaIE0zNzksMTM1OSBMMzg1LDEzNTkgTDM4NSwxMzY3IEwzNzksMTM2NyBMMzc5LDEzNTkgWiBNMzgxLDEzNjkgTDM4MSwxMzcwIEwzODMsMTM3MCBMMzgzLDEzNjkgTDM4MSwxMzY5IFoiIGlkPSJDb21iaW5lZC1TaGFwZSI+PC9wYXRoPg0KICAgICAgICA8L2c+DQogICAgPC9nPg0KPC9zdmc+"},220:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAoklEQVQ4T2M8evSBN8P/f4kCgopR2tqMvxiIAFev/mf78P7+MgZGpvmMR4/cW8Pw/38wIwPDFn4hpWBChoA0f3x3b+1/BgYfBkbGtYzIAoQMwaaWEeRiYgzBpQZsACFD8FkANwCXISBxmJ+xeRHFAGyGgMRAAYYrfDAMQDcExMcXuNQ3AD3ASPICttAmOhDxRRXBaKQoIRGjGV9iozwzUZqdAd3Q/P9h1pssAAAAAElFTkSuQmCC"},221:function(t,e,o){t.exports=o.p+"img/5515e82.svg"},226:function(t,e,o){"use strict";var d=o(228),n={name:"verifycode",props:{country:{type:Object,default:null},isexist:{type:Boolean,default:!1},template:{type:String,default:"Default"},email:{type:String,default:""},areacode:{type:String,default:""},phone:{type:String,default:""}},data(){return{loading:!1,send:!1,sendDelay:this.$t("formMenu.getCode"),timer:null}},watch:{"$store.state.hex_lang.locale":function(t){this.sendDelay=this.$t("formMenu.getCode")}},methods:{getCode(){const t=this;if(t.send)return;let e;if(this.send=!0,this.loading=!0,null!=this.country&&(e=JSON.stringify(this.country),"{}"==e))return this.$emit("checkStatus","countryid"),this.send=!1,void(this.loading=!1);if("0"==t.email)return t.$store.commit("set_message",{type:"error",text:this.$t("patch.EmailAddress")}),this.loading=!1,void(this.send=!1);if("0"==t.phone)return t.$store.commit("set_message",{type:"error",text:this.$t("patch.MobilePhone")}),this.loading=!1,void(this.send=!1);if(t.isexist){let e={uid:0};if(0!=t.phone){if(null!=t.country&&"0086"==t.country.areacode){if(!new RegExp(/^1\d{10}$/).test(t.phone))return t.$store.commit("set_message",{type:"error",text:this.$t("formMenu.phoneFormatError")}),this.loading=!1,void(this.send=!1)}e.phone=t.phone}else if(0!=t.email)e.email=t.email;else{if(""==t.email)return t.$store.commit("set_message",{type:"error",text:this.$t("formMenu.emialInputAddress")}),this.loading=!1,void(this.send=!1);if(""==t.phone)return t.$store.commit("set_message",{type:"error",text:this.$t("formMenu.phoneNumberInput")}),this.send=!1,void(this.loading=!1)}t.$store.dispatch("user_user_exist",e).then(({data:data})=>{if(data)return t.phone?t.$store.commit("set_message",{type:"error",text:this.$t("formMenu.exisPhone")}):t.email&&t.$store.commit("set_message",{type:"error",text:this.$t("formMenu.existEmail")}),this.loading=!1,void(this.send=!1);this.send=!1,this.getcodes()})}else this.send=!1,this.getcodes()},getcodes(){const t=this;if(t.send)return;this.send=!0;const e={};let o="";t.email&&(e.email=t.email,o="com_email_verifycode_send"),t.phone&&(e.phone=t.phone,o="com_sms_verifycode_send"),t.country&&(e.areacode=t.country.areacode),t.areacode&&(e.areacode=t.areacode),e.template=t.template,this.getCaptch().then(n=>{if(n&&0==n.ret)e.randstr=n.randstr,e.ticket=n.ticket,e.captchaid=d.a.appId;else if(n&&2==n.ret)return t.loading=!1,t.send=!1,null;return t.$store.dispatch(o,e)}).then(data=>{if(data)return data.data?t.delaySend(data):(t.loading=!1,void(t.send=!1))}).then(()=>{t.send=!1})},getCaptch(){return this.phone?d.a.init():new Promise(t=>{t(null)})},delaySend(data){this.loading=!1;let t=this;return new Promise((function(e){if(!data||!data.data.succeed)return void e(!0);let o=119;t.sendDelay=o+"s",t.timer=setInterval(()=>{--o,t.sendDelay=o+"s",0==o&&(t.sendDelay=t.$t("formMenu.getCode"),clearInterval(t.timer),t.send=!1,e(!0))},1e3)}))},clearTime(){clearInterval(this.timer),this.send=!1,this.sendDelay=this.$t("formMenu.getCode"),this.timer=null}}},r=o(3);var component=Object(r.a)(n,(function(){var t=this.$createElement;return(this._self._c||t)("span",{directives:[{name:"loading",rawName:"v-loading",value:this.loading,expression:"loading"}],staticClass:"mail_code get-code button-loading--por",class:{"auth-content_group--unavailable":this.send},on:{click:this.getCode}},[this._ssrNode(this._ssrEscape(this._s(this.sendDelay)))])}),[],!1,(function(t){}),"e39469e0","062367e8");e.a=component.exports},228:function(t,e,o){"use strict";e.a={captcha:null,appId:"2034696462",init(t){let e=this;return new Promise((function(o){t?t.element&&t.options?e.captcha=new TencentCaptcha(t.element,e.appId,(function(t){o(t)}),t.options):t.element?e.captcha=new TencentCaptcha(t.element,e.appId,(function(t){o(t)})):e.captcha=new TencentCaptcha(e.appId,(function(t){o(t)}),t.options):e.captcha=new TencentCaptcha(e.appId,(function(t){o(t)})),e.captcha.show()}))},show(t){this.captcha&&this.captcha.show()},destroy(){this.captcha&&this.captcha.destroy()},getTicket(){this.captcha&&this.captcha.getTicket()}}},277:function(t,e,o){t.exports=o.p+"img/3b5ba1e.svg"},339:function(t,e,o){var content=o(450);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);var d=o(2).default;t.exports.__inject__=function(t){d("2597720c",content,!0,t)}},407:function(t,e,o){"use strict";var d=o(208),n=o(226),r={name:"popup-add-manton-address",validations:{addMantionAddress:{address:{required:d.required},remeark:{required:d.required},remarktag:{required:!1}},addressCode:{emailverifycode:{required:d.required},smsverifycode:{required:d.required},googleverifycode:{required:d.required}}},components:{verifycode:n.a},computed:{currencyname:function(){return this.currency.currencyname.toUpperCase()}},props:["currency"],data(){return{withdrawcheck:"",loading:!1,addstate:!1,radioWithdrawUSDT:1,addMantionAddress:this.initAddress(),addressCode:{googleverifycode:"",emailverifycode:"",smsverifycode:""},sendModel:{template:"Default"}}},mounted(){},methods:{checkMentionAddress(){if(!this.addMantionAddress.address)return;let t={currencyid:this.currency.id,address:this.addMantionAddress.address};"USDT"===this.currencyname?t.ctype=1==this.radioWithdrawUSDT?"btc":"eth":delete t.ctype,this.$store.dispatch("user_user_withdraw_address_check",t).then(({data:data})=>{data&&(this.withdrawcheck=data)})},usdtWithdrawMode(t){this.checkMentionAddress()},initAddress:()=>({currencyid:"",address:"",remeark:"",remarktag:"",googleverifycode:"",emailverifycode:"",smsverifycode:"",iswhitelist:!0}),addAddress(){const t=this,address=Object.assign({},t.addMantionAddress),e=t.$v.addMantionAddress;let{google:o,phone:d,email:n,istag:r}="";e.$touch(),this.$userinfo.isopengoogleverify&&(o=t.$v.addressCode.googleverifycode,o.$touch()),this.$userinfo.isemailauthed&&(n=t.$v.addressCode.emailverifycode,n.$touch()),this.$userinfo.isemailauthed&&n.$invalid||this.$userinfo.isopengoogleverify&&o.$invalid||(address.googleverifycode=this.addressCode.googleverifycode,address.emailverifycode=this.addressCode.emailverifycode,address.smsverifycode=this.addressCode.smsverifycode,address.currencyid=this.currency.id,address.remarktag=this.addMantionAddress.remarktag,"USDT"===this.currencyname?address.ctype=1==this.radioWithdrawUSDT?"btc":"eth":delete address.ctype,t.addstate||(t.addstate=!0,this.loading=!0,t.$store.dispatch("user_user_withdraw_address_add",address).then(({data:data,msg:e})=>{data?(t.$store.commit("set_message",{type:"ok",text:e}),t.currency.page?(this.currency.fullname=this.currency.currencyname,t.close(0),this.$emit("address",this.currency.currencyname+","+this.currency.id+","+this.currency.assetsid)):(t.close(0),this.$pubsub.publish(this.$pubsub.addAddress))):(t.addstate=!1,t.loading=!1)}).then(()=>{t.addstate=!1,t.loading=!1})))},close(t){this.$emit("closePopup",t)}}},c=o(3);var component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,d=t._self._c||e;return d("div",{staticClass:"popup"},[t._ssrNode('<div class="mask" data-v-4f770736></div> '),t._ssrNode('<div class="mask-content" data-v-4f770736>',"</div>",[t._ssrNode('<div class="head" data-v-4f770736><span class="title head-title" data-v-4f770736>'+t._ssrEscape(t._s(t.$t("Waddress.add"))+t._s(t.currencyname)+t._s(t.$t("logonHistory.address")))+'</span> <span class="close" data-v-4f770736><img'+t._ssrAttr("src",o(220))+" alt data-v-4f770736></span></div> "),t._ssrNode('<div class="info" data-v-4f770736>',"</div>",[t._ssrNode('<div class="auth-content_group" data-v-4f770736>',"</div>",[d("el-radio-group",{directives:[{name:"show",rawName:"v-show",value:"USDT"===t.currency.currencyname,expression:"currency.currencyname==='USDT'"}],on:{change:t.usdtWithdrawMode},model:{value:t.radioWithdrawUSDT,callback:function(e){t.radioWithdrawUSDT=e},expression:"radioWithdrawUSDT"}},[d("el-radio",{attrs:{label:1}},[t._v("OMNI")]),t._v(" "),d("el-radio",{attrs:{label:2}},[t._v("ERC20")])],1),t._ssrNode(' <p class="title clearfix" data-v-4f770736><span class="left " data-v-4f770736>'+t._ssrEscape(t._s(t.$t("Waddress.coin")))+'</span></p> <div class="coinName" data-v-4f770736>'+t._ssrEscape(t._s(t.currencyname))+"</div>")],2),t._ssrNode(" <div"+t._ssrClass("auth-content_group",{"auth-content_group--error":t.$v.addMantionAddress.address.$error})+' data-v-4f770736><p class="title clearfix" data-v-4f770736><span class="left " data-v-4f770736>'+t._ssrEscape(t._s(t.$t("Waddress.mentionaddress")))+"</span> "+(t.$v.addMantionAddress.address.required?"\x3c!----\x3e":'<span class="normal-tip_error right" data-v-4f770736>'+t._ssrEscape(t._s(t.$t("Waddress.mentionaddressNone")))+"</span>")+"</p> <input"+t._ssrAttr("placeholder",t.$t("Waddress.mentionaddressInput"))+' type="text"'+t._ssrAttr("value",t.$v.addMantionAddress.address.$model)+' class="input ipt_hover" data-v-4f770736></div> '+(t.currency.istagrequired?'<div class="auth-content_group" data-v-4f770736><p class="title clearfix" data-v-4f770736><span class="left " data-v-4f770736>'+t._ssrEscape(t._s(t.$t("c2c.Addresslabel")))+"</span></p> <input"+t._ssrAttr("placeholder",t.$t("Waddress.remarktagInput"))+' type="text"'+t._ssrAttr("value",t.$v.addMantionAddress.remarktag.$model)+' class="input ipt_hover" data-v-4f770736></div>':"\x3c!----\x3e")+" <div"+t._ssrClass("auth-content_group",{"auth-content_group--error":t.$v.addMantionAddress.remeark.$error})+' data-v-4f770736><p class="title clearfix" data-v-4f770736><span class="left" data-v-4f770736>'+t._ssrEscape(t._s(t.$t("Waddress.remark")))+"</span> "+(t.$v.addMantionAddress.remeark.required?"\x3c!----\x3e":'<span class="normal-tip_error right" data-v-4f770736>'+t._ssrEscape(t._s(t.$t("Waddress.remarkNone")))+"</span>")+"</p> <input"+t._ssrAttr("placeholder",t.$t("Waddress.remarkInput"))+' type="text"'+t._ssrAttr("value",t.$v.addMantionAddress.remeark.$model)+' class="input ipt_hover" data-v-4f770736></div> '),t.$userinfo.isemailauthed?t._ssrNode("<div"+t._ssrClass("auth-content_group auth-content_group_code",{"auth-content_group--error":t.$v.addressCode.emailverifycode.$error})+" data-v-4f770736>","</div>",[t._ssrNode('<div class="title clearfix" data-v-4f770736><p class="left cl_ccc" data-v-4f770736><span data-v-4f770736>'+t._ssrEscape(t._s(t.$t("formMenu.emailCodeVerification")))+'</span> <span class="fr" data-v-4f770736>'+t._ssrEscape(t._s(t.global_string_split(t.$userinfo.email)))+"</span></p> "+(t.$v.addressCode.emailverifycode.required?"\x3c!----\x3e":'<span class="normal-tip_error right" data-v-4f770736>'+t._ssrEscape(t._s(t.$t("formMenu.emailCodeVerificationNone")))+"</span>")+"</div> "),t._ssrNode('<div class="auth-content_group_mail" data-v-4f770736>',"</div>",[t._ssrNode("<input"+t._ssrAttr("placeholder",t.$t("formMenu.emialInputVerification"))+' type="text"'+t._ssrAttr("value",t.$v.addressCode.emailverifycode.$model)+' class="input" data-v-4f770736> '),d("verifycode",{attrs:{email:t.$userinfo.email,template:"Withdraw"}})],2)],2):t._e(),t._ssrNode(" "+(t.$userinfo.isopengoogleverify?"<div"+t._ssrClass("auth-content_group",{"auth-content_group--error":t.$v.addressCode.googleverifycode.$error})+' data-v-4f770736><p class="title clearfix" data-v-4f770736><span class="left" data-v-4f770736>'+t._ssrEscape(t._s(t.$t("formMenu.googleCodeVerification")))+"</span> "+(t.$v.addressCode.googleverifycode.required?"\x3c!----\x3e":'<span class="normal-tip_error right" data-v-4f770736>'+t._ssrEscape(t._s(t.$t("formMenu.googleCodeVerificationNone")))+"</span>")+"</p> <input"+t._ssrAttr("placeholder",t.$t("formMenu.googleInputVerification"))+' type="text"'+t._ssrAttr("value",t.$v.addressCode.googleverifycode.$model)+' class="input ipt_hover" data-v-4f770736></div>':"\x3c!----\x3e")+" "),t._ssrNode('<div class="auth-content_group auth-content_group_input" style="display: none" data-v-4f770736>',"</div>",[d("el-checkbox",{model:{value:t.addMantionAddress.iswhitelist,callback:function(e){t.$set(t.addMantionAddress,"iswhitelist",e)},expression:"addMantionAddress.iswhitelist"}},[d("span",{staticClass:"label-tip"},[t._v(t._s(t.$t("Waddress.addWhiteList")))])])],1),t._ssrNode(" "),d("button",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"commitBtn button-loading--por",on:{click:t.addAddress}},[t._ssrNode(t._ssrEscape(t._s(t.$t("Waddress.add"))+"\n      "))])],2)],2)],2)}),[],!1,(function(t){var e=o(449);e.__inject__&&e.__inject__(t)}),"4f770736","ef420166");e.a=component.exports},449:function(t,e,o){"use strict";o.r(e);var d=o(339),n=o.n(d);for(var r in d)"default"!==r&&function(t){o.d(e,t,(function(){return d[t]}))}(r);e.default=n.a},450:function(t,e,o){var d=o(8);(t.exports=o(1)(!1)).push([t.i,".auth[data-v-4f770736]{background-color:#f5f5f8;width:100%}.auth-content[data-v-4f770736]{width:1200px;min-height:600px;margin:20px auto;background-color:#fff;padding-left:80px;position:relative}.auth-content_title[data-v-4f770736]{margin:20px 0 30px;font-size:30px;color:#000;display:inline-block}.auth-content_nav span[data-v-4f770736]{border-bottom:2px solid #8583ac}.auth-content_group[data-v-4f770736]{margin-top:20px;width:400px}.auth-content_group--error .normal-tip_error[data-v-4f770736]{display:inline-block!important}.auth-content_group--unavailable[data-v-4f770736]{background-color:#ddd!important;color:#bbb!important;pointer-events:none;cursor:pointer}.auth-content_group.auth-content_group--error input[data-v-4f770736]{border:1px solid #cd4559!important;color:#cd4559!important}.auth-content_group .title[data-v-4f770736]{font-size:12px;color:#666;margin-bottom:6px;display:inline-block;width:100%}.auth-content_group.auth-content_group_code .title[data-v-4f770736]{width:270px}.mention-money.auth-content_group.auth-content_group_code .title[data-v-4f770736]{width:100%}.auth-content_group input[data-v-4f770736]{height:40px;line-height:40px;padding-left:10px;border:1px solid #ddd;color:#000;font-size:14px;width:400px}.auth-content_group input[data-v-4f770736]::-webkit-input-placeholder{color:#bbb;font-size:14px}.auth-content_group input[data-v-4f770736]::-moz-placeholder{color:#bbb;font-size:14px}.auth-content_group input[data-v-4f770736]:-ms-input-placeholder{color:#bbb;font-size:14px}.auth-content_group input[data-v-4f770736]::-ms-input-placeholder{color:#bbb;font-size:14px}.auth-content_group input[data-v-4f770736]::placeholder{color:#bbb;font-size:14px}.auth-content_group .label-tip[data-v-4f770736]{color:#333}.auth-content_group .serve-tip[data-v-4f770736]{color:#14a2a5}.auth-content_group .normal-tip[data-v-4f770736]{color:#bbb}.auth-content_group .normal-tip_error[data-v-4f770736]{color:#cd4559!important;display:none}.auth-content_group_mail[data-v-4f770736]{position:relative}.auth-content_group_mail .input[data-v-4f770736]{width:270px}.auth-content_group_mail .mail_code[data-v-4f770736]{width:120px;margin-left:10px;background-color:#14a2a5;float:right}.auth-content_button[data-v-4f770736],.auth-content_group_mail .mail_code[data-v-4f770736]{font-size:14px;color:#fff;line-height:40px;display:inline-block;text-align:center;cursor:pointer}.auth-content_button[data-v-4f770736]{height:40px;background:#14a2a5;margin:30px 0;width:400px}.auth-content_button[data-v-4f770736]:hover{background:#2babae}.auth-bg[data-v-4f770736]{position:absolute;top:130px;right:160px;width:400px;height:321px}.auth-content_group .auth_tip[data-v-4f770736]{color:#14a2a5}.auth-content_title_tip[data-v-4f770736]{font-size:14px;color:#999}.auth-content_group_auth_tip[data-v-4f770736]{font-size:14px;color:#333;width:400px;margin-bottom:150px}.auth-content_group_auth_tip .auth_tip[data-v-4f770736]{color:#14a2a5;cursor:pointer}.auth-content_nav[data-v-4f770736]{font-size:14px}.auth-content_nav span[data-v-4f770736]{margin-right:40px;padding-bottom:8px;border-bottom:2px solid rgba(133,131,172,.2);color:#333;display:inline-block;cursor:pointer}.auth-content_nav span.google[data-v-4f770736]:before{background:url("+d(o(213))+') no-repeat;background-size:14px auto}.auth-content_nav span.google[data-v-4f770736]:before,.auth-content_nav span.phone[data-v-4f770736]:before{content:"";display:inline-block;vertical-align:middle;width:22px;height:14px}.auth-content_nav span.phone[data-v-4f770736]:before{background:url('+d(o(216))+") no-repeat;background-size:auto 14px}.auth-content_nav span[data-v-4f770736]:before{background:url("+d(o(214))+") no-repeat;background:url("+d(o(217))+') no-repeat;background-size:14px auto}.auth-content_nav span.google.active[data-v-4f770736]:before,.auth-content_nav span[data-v-4f770736]:before{content:"";display:inline-block;vertical-align:middle;width:22px;height:14px}.auth-content_nav span.google.active[data-v-4f770736]:before{background:url('+d(o(215))+") no-repeat;background-size:13px auto}.auth-content_nav span.active[data-v-4f770736]{color:#14a2a5;border-color:#14a2a5}.auth-content_nav span.email.active[data-v-4f770736]:before{background:url("+d(o(218))+') no-repeat;content:"";display:inline-block;vertical-align:middle;width:22px;height:14px;background-size:14px auto}.auth-content_nav span.phone.active[data-v-4f770736]:before{background:url('+d(o(219))+') no-repeat;content:"";display:inline-block;vertical-align:middle;width:22px;height:14px;background-size:auto 14px}.auth-content .auth-content_group .password_group[data-v-4f770736]{position:relative}.auth-content .auth-content_group .password_group input[data-v-4f770736]{padding-right:35px}.auth-content .auth-content_group .password_group_tip[data-v-4f770736]{position:absolute;right:0;top:0;padding:0 10px;line-height:40px;height:40px;display:inline-block;font-size:14px}.auth-content .auth-content_group .password_group_tip.week[data-v-4f770736]{color:#cd4559}.auth-content .auth-content_group .password_group_tip.middle[data-v-4f770736]{color:#f5a623}.auth-content .auth-content_group .password_group_tip.strong[data-v-4f770736]{color:#03bf7b}.popup[data-v-4f770736]{position:fixed;top:0;bottom:0;left:0;right:0;z-index:10000}.auth-content_group_mail .mail_code[data-v-4f770736]{height:40px}.auth-content_group.auth-content_group_code .title.clearfix[data-v-4f770736]{width:400px}.auth-content_group.auth-content_group_code .title.clearfix .left[data-v-4f770736]{width:270px}.auth-content_group.auth-content_group_code .title.clearfix .fr[data-v-4f770736]{color:#bbb}.auth-content_group.auth-content_group_code .title .left[data-v-4f770736],.popup .mask-content span[data-v-4f770736]{font-size:12px;height:inherit;color:#fff}.auth-content_group.auth-content_group_code .title .cl_ccc span[data-v-4f770736],.auth-content_group_input .el-checkbox__label .label-tip[data-v-4f770736],.popup .mask-content .left[data-v-4f770736]{color:#666}.popup .mask-content span.head-title[data-v-4f770736]{color:#2c3e50}.auth-content_group input[data-v-4f770736]{color:#333}.coinName[data-v-4f770736]{height:40px;line-height:40px;padding-left:10px;border:1px solid #ddd;color:#000;font-size:14px;width:400px;background:#f0f0f0}.head span.title[data-v-4f770736]{font-size:16px;display:inline;display:initial}.commitBtn[data-v-4f770736]{cursor:pointer}.el-radio-group[data-v-4f770736]{margin-bottom:10px}',""])},524:function(t,e,o){var content=o(802);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);var d=o(2).default;t.exports.__inject__=function(t){d("f16285b6",content,!0,t)}},800:function(t,e,o){t.exports=o.p+"img/a130120.png"},801:function(t,e,o){"use strict";o.r(e);var d=o(524),n=o.n(d);for(var r in d)"default"!==r&&function(t){o.d(e,t,(function(){return d[t]}))}(r);e.default=n.a},802:function(t,e,o){var d=o(8);(t.exports=o(1)(!1)).push([t.i,".person-block[data-v-79491d80]{background-color:#fff;padding:16px 20px 20px;position:relative}.person-block_title_tip[data-v-79491d80]{font-size:14px;color:#999}.person-block .person-block_icon[data-v-79491d80]{display:inline-block;width:36px;height:36px;background-repeat:no-repeat;background-size:contain;position:absolute}.person-block .person-block_icon.wallet[data-v-79491d80]{background:url("+d(o(221))+")}.person-block .person-block_info[data-v-79491d80]{padding-left:56px}.hex_table[data-v-79491d80]{display:table;width:100%;border-collapse:collapse}.hex_table_header[data-v-79491d80]{background-color:#fff;font-size:12px;color:#999;display:table-header-group}.hex_table_header.br[data-v-79491d80]{border-bottom:1px solid #dbdaea}.hex_table_body.br[data-v-79491d80]{border-bottom:1px solid #f5f5f8}.hex_table_header>span[data-v-79491d80]{display:table-cell;padding:0 20px;line-height:22px}.hex_table_body>span[data-v-79491d80]{display:table-cell;padding:8px 20px;line-height:23px}.hex_table_body[data-v-79491d80]{background-color:#fff;font-size:12px;color:#333;display:table-row}.hex_table .fw[data-v-79491d80]{font-weight:700;color:#000}.hex_table .rt[data-v-79491d80]{text-align:right}.hex_table .ct[data-v-79491d80]{text-align:center}.hex_table .lt[data-v-79491d80]{text-align:left}.hex_table_body .success[data-v-79491d80]{color:#03bf7b}.hex_table_body .lookover[data-v-79491d80]{color:#14a2a5}.hex_table_body .audit[data-v-79491d80]{color:#e96c42}.hex_table_body .cancle[data-v-79491d80]{color:#999}.hex_table_body .fail[data-v-79491d80]{color:#cd4559}.hex_table_body.active[data-v-79491d80]{background-color:#f0eff7}.hex_table_body[data-v-79491d80]:last-child{border-bottom:1px solid rgba(133,131,172,.2)}.hex_table_body .size0[data-v-79491d80]{font-size:0}.hex_table_body .handle[data-v-79491d80]{color:#14a2a5;font-size:12px;cursor:pointer}.hex_table_body[data-v-79491d80]{line-height:40px}.hex_table_body[data-v-79491d80]:hover{background-color:#f0eff7}.hex_table_body.padding td[data-v-79491d80]:first-child,.hex_table_header.padding th[data-v-79491d80]:first-child{padding-left:20px!important}.hex_table_body.padding td[data-v-79491d80]:last-child,.hex_table_header.padding th[data-v-79491d80]:last-child{padding-right:20px!important}.hex_table_header[data-v-79491d80]{line-height:32px}.hex_table_row[data-v-79491d80]{text-align:left;font-size:14px;color:#666}.auth[data-v-79491d80]{background-color:#f5f5f8;width:100%}.auth-content[data-v-79491d80]{width:1200px;min-height:600px;margin:20px auto;background-color:#fff;padding-left:80px;position:relative}.auth-content_title[data-v-79491d80]{margin:20px 0 30px;font-size:30px;color:#000;display:inline-block}.auth-content_nav span[data-v-79491d80]{border-bottom:2px solid #8583ac}.auth-content_group[data-v-79491d80]{margin-top:20px;width:400px}.auth-content_group--error .normal-tip_error[data-v-79491d80]{display:inline-block!important}.auth-content_group--unavailable[data-v-79491d80]{background-color:#ddd!important;color:#bbb!important;pointer-events:none;cursor:pointer}.auth-content_group.auth-content_group--error input[data-v-79491d80]{border:1px solid #cd4559!important;color:#cd4559!important}.auth-content_group .title[data-v-79491d80]{font-size:12px;color:#666;margin-bottom:6px;display:inline-block;width:100%}.auth-content_group.auth-content_group_code .title[data-v-79491d80]{width:270px}.mention-money.auth-content_group.auth-content_group_code .title[data-v-79491d80]{width:100%}.auth-content_group input[data-v-79491d80]{height:40px;line-height:40px;padding-left:10px;border:1px solid #ddd;color:#000;font-size:14px;width:400px}.auth-content_group input[data-v-79491d80]::-webkit-input-placeholder{color:#bbb;font-size:14px}.auth-content_group input[data-v-79491d80]::-moz-placeholder{color:#bbb;font-size:14px}.auth-content_group input[data-v-79491d80]:-ms-input-placeholder{color:#bbb;font-size:14px}.auth-content_group input[data-v-79491d80]::-ms-input-placeholder{color:#bbb;font-size:14px}.auth-content_group input[data-v-79491d80]::placeholder{color:#bbb;font-size:14px}.auth-content_group .label-tip[data-v-79491d80]{color:#333}.auth-content_group .serve-tip[data-v-79491d80]{color:#14a2a5}.auth-content_group .normal-tip[data-v-79491d80]{color:#bbb}.auth-content_group .normal-tip_error[data-v-79491d80]{color:#cd4559!important;display:none}.auth-content_group_mail[data-v-79491d80]{position:relative}.auth-content_group_mail .input[data-v-79491d80]{width:270px}.auth-content_group_mail .mail_code[data-v-79491d80]{width:120px;margin-left:10px;background-color:#14a2a5;float:right}.auth-content_button[data-v-79491d80],.auth-content_group_mail .mail_code[data-v-79491d80]{font-size:14px;color:#fff;line-height:40px;display:inline-block;text-align:center;cursor:pointer}.auth-content_button[data-v-79491d80]{height:40px;background:#14a2a5;margin:30px 0;width:400px}.auth-content_button[data-v-79491d80]:hover{background:#2babae}.auth-bg[data-v-79491d80]{position:absolute;top:130px;right:160px;width:400px;height:321px}.auth-content_group .auth_tip[data-v-79491d80]{color:#14a2a5}.auth-content_title_tip[data-v-79491d80]{font-size:14px;color:#999}.auth-content_group_auth_tip[data-v-79491d80]{font-size:14px;color:#333;width:400px;margin-bottom:150px}.auth-content_group_auth_tip .auth_tip[data-v-79491d80]{color:#14a2a5;cursor:pointer}.auth-content_nav[data-v-79491d80]{font-size:14px}.auth-content_nav span[data-v-79491d80]{margin-right:40px;padding-bottom:8px;border-bottom:2px solid rgba(133,131,172,.2);color:#333;display:inline-block;cursor:pointer}.auth-content_nav span.google[data-v-79491d80]:before{background:url("+d(o(213))+') no-repeat;background-size:14px auto}.auth-content_nav span.google[data-v-79491d80]:before,.auth-content_nav span.phone[data-v-79491d80]:before{content:"";display:inline-block;vertical-align:middle;width:22px;height:14px}.auth-content_nav span.phone[data-v-79491d80]:before{background:url('+d(o(216))+") no-repeat;background-size:auto 14px}.auth-content_nav span[data-v-79491d80]:before{background:url("+d(o(214))+") no-repeat;background:url("+d(o(217))+') no-repeat;background-size:14px auto}.auth-content_nav span.google.active[data-v-79491d80]:before,.auth-content_nav span[data-v-79491d80]:before{content:"";display:inline-block;vertical-align:middle;width:22px;height:14px}.auth-content_nav span.google.active[data-v-79491d80]:before{background:url('+d(o(215))+") no-repeat;background-size:13px auto}.auth-content_nav span.active[data-v-79491d80]{color:#14a2a5;border-color:#14a2a5}.auth-content_nav span.email.active[data-v-79491d80]:before{background:url("+d(o(218))+') no-repeat;content:"";display:inline-block;vertical-align:middle;width:22px;height:14px;background-size:14px auto}.auth-content_nav span.phone.active[data-v-79491d80]:before{background:url('+d(o(219))+') no-repeat;content:"";display:inline-block;vertical-align:middle;width:22px;height:14px;background-size:auto 14px}.auth-content .auth-content_group .password_group[data-v-79491d80]{position:relative}.auth-content .auth-content_group .password_group input[data-v-79491d80]{padding-right:35px}.auth-content .auth-content_group .password_group_tip[data-v-79491d80]{position:absolute;right:0;top:0;padding:0 10px;line-height:40px;height:40px;display:inline-block;font-size:14px}.auth-content .auth-content_group .password_group_tip.week[data-v-79491d80]{color:#cd4559}.auth-content .auth-content_group .password_group_tip.middle[data-v-79491d80]{color:#f5a623}.auth-content .auth-content_group .password_group_tip.strong[data-v-79491d80]{color:#03bf7b}img[data-v-79491d80]{width:unset}.person-block[data-v-79491d80]{padding:18px 20px 16px}.person-block .person-block_icon.wallet[data-v-79491d80]{background:url('+d(o(277))+")}.traded .person-block_info[data-v-79491d80]{line-height:36px}.traded_tip[data-v-79491d80]{font-size:18px;font-weight:700;margin-right:10px}.traded-block[data-v-79491d80]{margin-top:10px;background-color:#fff}.ordertab[data-v-79491d80]{padding:20px 20px 20px 23px}.formtab[data-v-79491d80]{padding:20px 20px 20px 30px}.ordertab h3[data-v-79491d80]{font-size:14px;font-weight:700;margin-bottom:10px}.ordertab h3 img[data-v-79491d80]{width:22px;vertical-align:middle;margin-right:7px}.label-tip[data-v-79491d80]{color:#606266;font-weight:500;font-size:14px;margin-left:30px}.red[data-v-79491d80]{color:red}.pl[data-v-79491d80]{font-size:14px;color:#666;line-height:24px}",""])}};