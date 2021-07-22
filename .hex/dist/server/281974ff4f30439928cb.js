exports.ids=[76],exports.modules={1216:function(t,o,e){"use strict";e.r(o);var n=e(208),d=e(9),r={name:"payment",validations:{bindBack:{lastName:{required:n.required},firstName:{required:n.required},country:{required:n.required},city:{required:n.required},payPassword:{required:n.required}}},data:()=>({loading:!1,submitState:!1,bindBack:{lastName:"",firstName:"",country:"",city:"",payPassword:""}}),methods:{submitBtn(){const t=this.$v.bindBack,o=this.bindBack;if(t.$touch(),t.$invalid)return;if(this.submitState)return;this.submitState=!0,this.loading=!0;let e={payment:"WesternUnionPay",paypassword:d.a.md5String(o.payPassword),payconfig:{paytypeid:"852",paytypename:"西联汇款",lastname:o.lastName,firstname:o.firstName,country:o.country,city:o.city,imageurl:o.qrcode,account:o.alipay}};this.$store.dispatch("user_user_payments_set",e).then(({data:data})=>{data?(this.$store.commit("set_message",{type:"ok",text:this.$t("legalDeal.successfully")}),this.$router.push("/person/payment")):(this.submitState=!1,this.loading=!1)})}}},c=e(3);var component=Object(c.a)(r,(function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",[t._ssrNode('<div class="person-block" data-v-67d9bf92>',"</div>",[t._ssrNode('<span class="person-block_icon wallet" data-v-67d9bf92></span> '),t._ssrNode('<div class="person-block_info clearfix" data-v-67d9bf92>',"</div>",[e("nuxt-link",{staticClass:"traded_info_title left",attrs:{to:"/person/payment"}},[e("span",{staticClass:"traded_tip"},[t._v(t._s(t.$t("legalDeal.Western")))])])],1)],2),t._ssrNode(" "),t._ssrNode('<div class="pay" data-v-67d9bf92>',"</div>",[t._ssrNode('<div class="tip ovh" data-v-67d9bf92><div class="prompt fl" data-v-67d9bf92>'+t._ssrEscape(t._s(t.$t("legalDeal.hinttext"))+"：")+'</div> <div class="fl tip-text" data-v-67d9bf92><p data-v-67d9bf92>'+t._ssrEscape(t._s(t.$t("legalDeal.hint")))+"</p> <p data-v-67d9bf92>"+t._ssrEscape(t._s(t.$t("legalDeal.hintTip")))+"</p></div></div> "),t._ssrNode('<div class="formMenu" data-v-67d9bf92>',"</div>",[t._ssrNode("<div"+t._ssrClass("auth-content_group auth-content_group_code",{"auth-content_group--error":t.$v.bindBack.lastName.$error})+' data-v-67d9bf92><p class="titles clearfix" data-v-67d9bf92><span class="left-tip left" data-v-67d9bf92>'+t._ssrEscape(t._s(t.$t("legalDeal.Lastname")))+"</span> "+(t.$v.bindBack.lastName.required?"\x3c!----\x3e":'<span class="normal-tip_error right" data-v-67d9bf92>'+t._ssrEscape(t._s(t.$t("legalDeal.LastnameNome")))+"</span>")+'</p> <div class="auth-content_group" data-v-67d9bf92><input'+t._ssrAttr("placeholder",t.$t("legalDeal.payeelastname"))+' type="text"'+t._ssrAttr("value",t.$v.bindBack.lastName.$model)+' class="input validation" data-v-67d9bf92></div></div> <div'+t._ssrClass("auth-content_group auth-content_group_code",{"auth-content_group--error":t.$v.bindBack.firstName.$error})+' data-v-67d9bf92><p class="titles clearfix" data-v-67d9bf92><span class="left-tip left" data-v-67d9bf92>'+t._ssrEscape(t._s(t.$t("c2c.Payee")))+"</span> "+(t.$v.bindBack.firstName.required?"\x3c!----\x3e":'<span class="normal-tip_error right" data-v-67d9bf92>'+t._ssrEscape(t._s(t.$t("c2c.PayeeN")))+"</span>")+'</p> <div class="auth-content_group" data-v-67d9bf92><input'+t._ssrAttr("placeholder",t.$t("c2c.PayeeName"))+' type="text"'+t._ssrAttr("value",t.$v.bindBack.firstName.$model)+' class="input validation" data-v-67d9bf92></div></div> <div'+t._ssrClass("auth-content_group auth-content_group_code",{"auth-content_group--error":t.$v.bindBack.country.$error})+' data-v-67d9bf92><p class="titles clearfix" data-v-67d9bf92><span class="left-tip left" data-v-67d9bf92>'+t._ssrEscape(t._s(t.$t("legalDeal.Country")))+"</span> "+(t.$v.bindBack.country.required?"\x3c!----\x3e":'<span class="normal-tip_error right" data-v-67d9bf92>'+t._ssrEscape(t._s(t.$t("c2c.CountryN")))+"</span>")+'</p> <div class="auth-content_group" data-v-67d9bf92><input'+t._ssrAttr("placeholder",t.$t("legalDeal.inputcountry"))+' type="text"'+t._ssrAttr("value",t.$v.bindBack.country.$model)+' class="input validation" data-v-67d9bf92></div></div> <div'+t._ssrClass("auth-content_group auth-content_group_code",{"auth-content_group--error":t.$v.bindBack.city.$error})+' data-v-67d9bf92><p class="titles clearfix" data-v-67d9bf92><span class="left-tip left" data-v-67d9bf92>'+t._ssrEscape(t._s(t.$t("legalDeal.City")))+"</span> "+(t.$v.bindBack.city.required?"\x3c!----\x3e":'<span class="normal-tip_error right" data-v-67d9bf92>'+t._ssrEscape(t._s(t.$t("c2c.CityN")))+"</span>")+'</p> <div class="auth-content_group" data-v-67d9bf92><input'+t._ssrAttr("placeholder",t.$t("legalDeal.inputcity"))+' type="text"'+t._ssrAttr("value",t.$v.bindBack.city.$model)+' class="input validation" data-v-67d9bf92></div></div> <div'+t._ssrClass("auth-content_group auth-content_group_code",{"auth-content_group--error":t.$v.bindBack.payPassword.$error})+' data-v-67d9bf92><p class="titles clearfix" data-v-67d9bf92><span class="left-tip left" data-v-67d9bf92>'+t._ssrEscape(t._s(t.$t("legalDeal.assetpassword")))+"</span> "+(t.$v.bindBack.payPassword.required?"\x3c!----\x3e":'<span class="normal-tip_error right" data-v-67d9bf92>'+t._ssrEscape(t._s(t.$t("legalDeal.inputassetpasswordNone")))+"</span>")+'</p> <div class="auth-content_group" data-v-67d9bf92><input'+t._ssrAttr("placeholder",t.$t("legalDeal.inputassetpassword"))+' type="password"'+t._ssrAttr("value",t.$v.bindBack.payPassword.$model)+' class="input validation" data-v-67d9bf92></div></div> '),e("button",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"commitBtn button-loading--por",class:{cl_bbb:t.submitState},on:{click:t.submitBtn}},[t._ssrNode(t._ssrEscape(t._s(t.$t("formMenu.bindding"))+"\n      "))])],2)],2)],2)}),[],!1,(function(t){var o=e(866);o.__inject__&&o.__inject__(t)}),"67d9bf92","dfed9ede");o.default=component.exports},213:function(t,o,e){t.exports=e.p+"img/8487944.svg"},214:function(t,o){t.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4NCjxzdmcgd2lkdGg9IjE0cHgiIGhlaWdodD0iMTRweCIgdmlld0JveD0iMCAwIDE0IDE0IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPg0KICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggNTEuMSAoNTc1MDEpIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoIC0tPg0KICAgIDx0aXRsZT5Db21iaW5lZCBTaGFwZTwvdGl0bGU+DQogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+DQogICAgPGRlZnM+PC9kZWZzPg0KICAgIDxnIGlkPSJQYWdlLTEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPg0KICAgICAgICA8ZyBpZD0i5Zu+5qCHIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjMyLjAwMDAwMCwgLTQ0OC4wMDAwMDApIiBmaWxsPSIjQzVDM0REIj4NCiAgICAgICAgICAgIDxwYXRoIGQ9Ik0yMzQsNDQ4IEwyNDQsNDQ4IEwyNDYsNDUwIEwyNDYsNDYwIEwyNDQsNDYyIEwyMzQsNDYyIEwyMzIsNDYwIEwyMzIsNDUwIEwyMzQsNDQ4IFogTTI0NC4wNzEwNjgsNDUwIEwyMzkuMDM1NTM0LDQ1NS4wMzU1MzQgTDIzNCw0NTAgTDIzMyw0NTEgTDIzOS4wMzU1MzQsNDU3LjAzNTUzNCBMMjQ1LjA3MTA2OCw0NTEgTDI0NC4wNzEwNjgsNDUwIFoiIGlkPSJDb21iaW5lZC1TaGFwZSI+PC9wYXRoPg0KICAgICAgICA8L2c+DQogICAgPC9nPg0KPC9zdmc+"},215:function(t,o,e){t.exports=e.p+"img/8b46b37.svg"},216:function(t,o){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAcCAYAAABh2p9gAAAAZElEQVRIS2M8evjufwYqAkaaGWhtq8xIiUNhDoO7kGYGkhoEMIfgdOGogQQjfjQMGTAS9miyGU02mCFA/5xCMBZwKKB9iU2uy9D10a7Ww+VC9MqLUF4n6EKqG0hq2BJ0IakGAgDZA/cNjtEuJgAAAABJRU5ErkJggg=="},217:function(t,o){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAABEUlEQVRIS+2WUQ6CMAyG2wcvgrdAvJmgwNEUPYVcxISZLW7pgM11MF50Twt0/fp3XVMEsrrr8wIAZ/pthX19OO6lX7VQbxLBtHsDVcDEMAuKG8EMVAKFyS9iBQA7IUS5wt0BIrYA8BJCNIahgYhY5UUmDeDR9e0wiNMSqITlRSYFwP3WlxpqFFKDj1ETq9Tna5xSE1Us9FvgFlC9E5IKLjTk7AQYCw2BKd+0SmmRhDrgBugEhjriBOZVSN6ms5C4sCCgS6n8rt8Zp7i8KfXdKf3HaRTBwDmlHGWT1hbaxkYti92NWAppISECxvTbKGBoNubs/sAl2Zs9+xspTTGLuq6i3n5M1KEkHhftQTgx1Br135YHGsbxOUhZAAAAAElFTkSuQmCC"},218:function(t,o,e){t.exports=e.p+"img/2b0ec6a.png"},219:function(t,o){t.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4NCjxzdmcgd2lkdGg9IjEwcHgiIGhlaWdodD0iMTRweCIgdmlld0JveD0iMCAwIDEwIDE0IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPg0KICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggNTEuMyAoNTc1NDQpIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoIC0tPg0KICAgIDx0aXRsZT5Db21iaW5lZCBTaGFwZTwvdGl0bGU+DQogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+DQogICAgPGRlZnM+PC9kZWZzPg0KICAgIDxnIGlkPSJQYWdlLTEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPg0KICAgICAgICA8ZyBpZD0i5Zu+5qCHIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMzc3LjAwMDAwMCwgLTEzNTcuMDAwMDAwKSIgZmlsbD0iIzE0YTJhNSI+DQogICAgICAgICAgICA8cGF0aCBkPSJNMzc3LDEzNTcgTDM4NywxMzU3IEwzODcsMTM3MSBMMzc3LDEzNzEgTDM3NywxMzU3IFogTTM3OCwxMzU4IEwzNzgsMTM2OCBMMzg2LDEzNjggTDM4NiwxMzU4IEwzNzgsMTM1OCBaIE0zNzksMTM1OSBMMzg1LDEzNTkgTDM4NSwxMzY3IEwzNzksMTM2NyBMMzc5LDEzNTkgWiBNMzgxLDEzNjkgTDM4MSwxMzcwIEwzODMsMTM3MCBMMzgzLDEzNjkgTDM4MSwxMzY5IFoiIGlkPSJDb21iaW5lZC1TaGFwZSI+PC9wYXRoPg0KICAgICAgICA8L2c+DQogICAgPC9nPg0KPC9zdmc+"},279:function(t,o){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA9klEQVQ4T2NkQAMX3CO1//5nSGH8z+D6/z+DHEiakZHh0X9Ght3MjAxzDHYuv4qshRHGuaodyvZTirX3P8P/TAYGBmZ0g6H8v4wMjNPZn/0u1r66+hfYcBAB1bztP8N/ZxwaUYQZGRj3sj/77QUyBGzAOdeoyf8Z/uegazbevRwsf9Y18j+6HCMD4xSj3ctyGcF+/sdwEZuz8RnAwMDwl5mJQZ/xrFtkP8N/hgJsTidgACgAJjCec4288p+BQZscAxgZGK4ynnWJ/MTAyMBLjgEM/xk+U24A5V7AE4gE0wQoECmORooTElWSMpIh5GUm5MAiNTsDAHk1nnW46kZjAAAAAElFTkSuQmCC"},555:function(t,o,e){var content=e(867);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);var n=e(2).default;t.exports.__inject__=function(t){n("3d90b1d0",content,!0,t)}},866:function(t,o,e){"use strict";e.r(o);var n=e(555),d=e.n(n);for(var r in n)"default"!==r&&function(t){e.d(o,t,(function(){return n[t]}))}(r);o.default=d.a},867:function(t,o,e){var n=e(8);(t.exports=e(1)(!1)).push([t.i,".auth[data-v-67d9bf92]{background-color:#f5f5f8;width:100%}.auth-content[data-v-67d9bf92]{width:1200px;min-height:600px;margin:20px auto;background-color:#fff;padding-left:80px;position:relative}.auth-content_title[data-v-67d9bf92]{margin:20px 0 30px;font-size:30px;color:#000;display:inline-block}.auth-content_nav span[data-v-67d9bf92]{border-bottom:2px solid #8583ac}.auth-content_group[data-v-67d9bf92]{margin-top:20px;width:400px}.auth-content_group--error .normal-tip_error[data-v-67d9bf92]{display:inline-block!important}.auth-content_group--unavailable[data-v-67d9bf92]{background-color:#ddd!important;color:#bbb!important;pointer-events:none;cursor:pointer}.auth-content_group.auth-content_group--error input[data-v-67d9bf92]{border:1px solid #cd4559!important;color:#cd4559!important}.auth-content_group .title[data-v-67d9bf92]{font-size:12px;color:#666;margin-bottom:6px;display:inline-block;width:100%}.auth-content_group.auth-content_group_code .title[data-v-67d9bf92]{width:270px}.mention-money.auth-content_group.auth-content_group_code .title[data-v-67d9bf92]{width:100%}.auth-content_group input[data-v-67d9bf92]{height:40px;line-height:40px;padding-left:10px;border:1px solid #ddd;color:#000;font-size:14px;width:400px}.auth-content_group input[data-v-67d9bf92]::-webkit-input-placeholder{color:#bbb;font-size:14px}.auth-content_group input[data-v-67d9bf92]::-moz-placeholder{color:#bbb;font-size:14px}.auth-content_group input[data-v-67d9bf92]:-ms-input-placeholder{color:#bbb;font-size:14px}.auth-content_group input[data-v-67d9bf92]::-ms-input-placeholder{color:#bbb;font-size:14px}.auth-content_group input[data-v-67d9bf92]::placeholder{color:#bbb;font-size:14px}.auth-content_group .label-tip[data-v-67d9bf92]{color:#333}.auth-content_group .serve-tip[data-v-67d9bf92]{color:#14a2a5}.auth-content_group .normal-tip[data-v-67d9bf92]{color:#bbb}.auth-content_group .normal-tip_error[data-v-67d9bf92]{color:#cd4559!important;display:none}.auth-content_group_mail[data-v-67d9bf92]{position:relative}.auth-content_group_mail .input[data-v-67d9bf92]{width:270px}.auth-content_group_mail .mail_code[data-v-67d9bf92]{width:120px;margin-left:10px;background-color:#14a2a5;float:right}.auth-content_button[data-v-67d9bf92],.auth-content_group_mail .mail_code[data-v-67d9bf92]{font-size:14px;color:#fff;line-height:40px;display:inline-block;text-align:center;cursor:pointer}.auth-content_button[data-v-67d9bf92]{height:40px;background:#14a2a5;margin:30px 0;width:400px}.auth-content_button[data-v-67d9bf92]:hover{background:#2babae}.auth-bg[data-v-67d9bf92]{position:absolute;top:130px;right:160px;width:400px;height:321px}.auth-content_group .auth_tip[data-v-67d9bf92]{color:#14a2a5}.auth-content_title_tip[data-v-67d9bf92]{font-size:14px;color:#999}.auth-content_group_auth_tip[data-v-67d9bf92]{font-size:14px;color:#333;width:400px;margin-bottom:150px}.auth-content_group_auth_tip .auth_tip[data-v-67d9bf92]{color:#14a2a5;cursor:pointer}.auth-content_nav[data-v-67d9bf92]{font-size:14px}.auth-content_nav span[data-v-67d9bf92]{margin-right:40px;padding-bottom:8px;border-bottom:2px solid rgba(133,131,172,.2);color:#333;display:inline-block;cursor:pointer}.auth-content_nav span.google[data-v-67d9bf92]:before{background:url("+n(e(213))+') no-repeat;background-size:14px auto}.auth-content_nav span.google[data-v-67d9bf92]:before,.auth-content_nav span.phone[data-v-67d9bf92]:before{content:"";display:inline-block;vertical-align:middle;width:22px;height:14px}.auth-content_nav span.phone[data-v-67d9bf92]:before{background:url('+n(e(216))+") no-repeat;background-size:auto 14px}.auth-content_nav span[data-v-67d9bf92]:before{background:url("+n(e(214))+") no-repeat;background:url("+n(e(217))+') no-repeat;background-size:14px auto}.auth-content_nav span.google.active[data-v-67d9bf92]:before,.auth-content_nav span[data-v-67d9bf92]:before{content:"";display:inline-block;vertical-align:middle;width:22px;height:14px}.auth-content_nav span.google.active[data-v-67d9bf92]:before{background:url('+n(e(215))+") no-repeat;background-size:13px auto}.auth-content_nav span.active[data-v-67d9bf92]{color:#14a2a5;border-color:#14a2a5}.auth-content_nav span.email.active[data-v-67d9bf92]:before{background:url("+n(e(218))+') no-repeat;content:"";display:inline-block;vertical-align:middle;width:22px;height:14px;background-size:14px auto}.auth-content_nav span.phone.active[data-v-67d9bf92]:before{background:url('+n(e(219))+') no-repeat;content:"";display:inline-block;vertical-align:middle;width:22px;height:14px;background-size:auto 14px}.auth-content .auth-content_group .password_group[data-v-67d9bf92]{position:relative}.auth-content .auth-content_group .password_group input[data-v-67d9bf92]{padding-right:35px}.auth-content .auth-content_group .password_group_tip[data-v-67d9bf92]{position:absolute;right:0;top:0;padding:0 10px;line-height:40px;height:40px;display:inline-block;font-size:14px}.auth-content .auth-content_group .password_group_tip.week[data-v-67d9bf92]{color:#cd4559}.auth-content .auth-content_group .password_group_tip.middle[data-v-67d9bf92]{color:#f5a623}.auth-content .auth-content_group .password_group_tip.strong[data-v-67d9bf92]{color:#03bf7b}.tip-text[data-v-67d9bf92]{width:90%}.cl_bbb[data-v-67d9bf92]{background:#bbb!important}.person-block[data-v-67d9bf92]{position:relative;background-color:#fff;padding:18px 20px 20px}.person-block .person-block_icon.wallet[data-v-67d9bf92]{background:url('+n(e(100))+")}.person-block .person-block_icon[data-v-67d9bf92]{display:inline-block;width:36px;height:36px;background-repeat:no-repeat;background-size:contain;position:absolute}.person-block .person-block_info[data-v-67d9bf92]{padding-left:56px;line-height:36px}.pay[data-v-67d9bf92]{margin-top:10px;background:#fff;padding:20px 20px 57px}.traded_tip[data-v-67d9bf92]{font-size:18px;font-weight:700;margin-right:20px}.formMenu[data-v-67d9bf92]{margin-left:20px}.formMenu .auth-content_group_code[data-v-67d9bf92]{margin-top:20px}.titles.clearfix span[data-v-67d9bf92]{color:#666}.tip[data-v-67d9bf92]{background:#f9f9fb;font-size:14px;padding:10px 20px}.tip .prompt[data-v-67d9bf92],.tip p[data-v-67d9bf92]{line-height:24px}.tip .prompt[data-v-67d9bf92]{padding-left:25px;background:url("+n(e(279))+") no-repeat 0}auth-content_group_mail .input[data-v-67d9bf92]{width:400px}.left-tip[data-v-67d9bf92],.normal-tip_error[data-v-67d9bf92]{font-size:12px}.auth-content_group[data-v-67d9bf92]{margin-top:5px}.person-block_info .traded_info_title[data-v-67d9bf92]{background:url("+n(e(101))+") no-repeat 0;padding-left:30px}",""])}};