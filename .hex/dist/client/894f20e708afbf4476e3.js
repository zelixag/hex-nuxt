(window.webpackJsonp=window.webpackJsonp||[]).push([[87],{1075:function(t,e,n){t.exports=n.p+"img/90ebc08.svg"},1261:function(t,e,n){"use strict";var o=n(923);n.n(o).a},1262:function(t,e,n){var o=n(33);(t.exports=n(4)(!1)).push([t.i,".setting-tab-isopen.fr.paypassword[data-v-548e0da1]{margin-left:20px}.pic_tip[data-v-548e0da1]{display:block;width:30px;margin:auto auto 10px}.setting[data-v-548e0da1]{width:990px}.setting .setting-title[data-v-548e0da1]{height:68px;line-height:68px;font-size:18px;padding-left:76px;font-weight:900;margin-bottom:10px;background:#fff url("+o(n(819))+") no-repeat 20px;background-size:36px 36px}.setting .setting-verify[data-v-548e0da1]{background:#fff;margin-bottom:10px;padding:0 20px;box-sizing:border-box}.setting .setting-verify .setting-safety[data-v-548e0da1]{border-bottom:1px solid rgba(133,131,172,.2);overflow:hidden}.setting .setting-verify .setting-safety h3[data-v-548e0da1]{font-weight:700}.setting .setting-verify .setting-safety .setting-safety-rank[data-v-548e0da1]{font-size:14px;color:#999;margin:20px 0 30px}.setting .setting-verify .setting-safety .setting-safety-rank .secure[data-v-548e0da1]{display:inline-block;overflow:hidden;margin:0 10px;position:relative;top:3px}.setting .setting-verify .setting-safety .setting-safety-rank .secure span[data-v-548e0da1]{float:left;width:60px;height:16px;background:#eee;margin-right:2px}.setting .setting-verify .setting-safety .setting-safety-rank .secure span.sureness[data-v-548e0da1]{background:#ea003d}.setting .setting-verify .setting-safety .setting-safety-rank .secure span.centre[data-v-548e0da1]{background:#f5a623}.setting .setting-verify .setting-safety .setting-safety-rank .secure span.tall[data-v-548e0da1]{background:#46b05d}.setting .setting-verify .setting-safety .setting-safety-rank .safety[data-v-548e0da1]{color:#cd4559}.setting .setting-verify .setting-safety .setting-safety-rank .strength_centre[data-v-548e0da1]{color:#f5a623}.setting .setting-verify .setting-safety .setting-safety-rank .safety_tall[data-v-548e0da1]{color:#46b05d}.setting .setting-verify .setting-tab ul li[data-v-548e0da1]{font-size:14px;border-bottom:1px solid rgba(133,131,172,.2);line-height:60px}.setting .setting-verify .setting-tab ul li .setting-tab-left[data-v-548e0da1]{box-sizing:border-box;font-weight:600;background-size:18px 18px}.setting .setting-verify .setting-tab ul li .setting-tab-left .bank-icon .icon_bank[data-v-548e0da1]{width:18px;display:inline;vertical-align:middle;margin-right:10px}.setting .setting-verify .setting-tab ul li .setting-tab-left .setting-tab-name[data-v-548e0da1]{color:#333;font-size:16px;display:inline-block;width:157px}.setting .setting-verify .setting-tab ul li .setting-tab-left .setting-tab-password[data-v-548e0da1]{font-weight:400}.setting .setting-verify .setting-tab ul li .setting-tab-right[data-v-548e0da1]{float:right}.setting .setting-verify .setting-tab ul li .setting-tab-right .setting-tab-isopen .cl_cd4[data-v-548e0da1]{color:#cd4559;font-weight:600}.setting .setting-verify .setting-tab ul li .setting-tab-right .setting-tab-isopen a[data-v-548e0da1]{color:#14a2a5}.setting .setting-verify .setting-tab ul li .setting-tab-right .setting-tab-hint[data-v-548e0da1]{color:#999}.setting .setting-verify .setting-tab ul li .setting-tab-right .setting-tab-isopen[data-v-548e0da1]{color:#14a2a5;cursor:pointer}.setting .setting-verify .setting-tab ul li[data-v-548e0da1]:last-child{border-bottom:none}.setting .rating-prompt[data-v-548e0da1]{width:380px;display:inline-block}.combined[data-v-548e0da1]{padding-left:24px;background:url("+o(n(895))+") no-repeat 0;background-size:14px 14px}.gray[data-v-548e0da1]{color:#aaa}.qr_code[data-v-548e0da1]{margin-left:8px;display:inline-block}.qr_code img.tip[data-v-548e0da1]{width:20px;height:20px;-webkit-transform:translateY(30%)}.setting-verify .account[data-v-548e0da1]{position:relative;min-height:371px}",""])},1695:function(t,e,n){"use strict";n.r(e);var o={data:function(){return{lang:this.$store.state.hex_lang.locale,loading:!1,wechat:!1,alipay:!1,bindCollection:[],ispaypassword:"",userInfo:{},dialogVisible:!1}},watch:{"$store.state.hex_lang.locale":function(t){this.lang=t}},mounted:function(){var t=this;this.loading||(this.loading=!0,this.ispaypassword=this.$userinfo.isopenpaypassword,this.$store.dispatch("user_user_payments_getlist").then((function(e){var data=e.data;if(data){var n=[];data.map((function(t){n.push(t)})),t.bindCollection=n}t.$nextTick((function(){t.loading=!1}))})))},methods:{gopage:function(t){switch(t){case 848:this.$router.push("/person/payment/bank");break;case 849:this.$router.push("/person/payment/alipay");break;case 850:this.$router.push("/person/payment/paypal");break;case 851:this.$router.push("/person/payment/money-gram");break;case 852:this.$router.push("/person/payment/western-union");break;case 853:this.$router.push("/person/payment/wechat");break;case 1101079:this.$router.push("/person/payment/imove")}},openpaypassword:function(){this.ispaypassword||(this.dialogVisible=!0)},gosecurity:function(){this.dialogVisible=!1,this.$router.push("/person/security")}}},r=(n(1261),n(9)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"setting fr"},[o("h2",{staticClass:"setting-title"},[t._v("\n    "+t._s(t.$t("legalDeal.collection"))+"\n  ")]),t._v(" "),o("div",{staticClass:"setting-verify "},[o("div",{staticClass:"setting-tab"},[o("ul",{directives:[{name:"hex-loading",rawName:"v-hex-loading",value:t.loading,expression:"loading"}],staticClass:"account"},t._l(t.bindCollection,(function(e){return o("li",{key:e.typeid,staticClass:"ovh"},[o("div",{staticClass:"setting-tab-left fl  Unionpay"},[o("span",{staticClass:"bank-icon"},[o("img",{staticClass:"icon_bank",attrs:{src:e.icon,alt:""}})]),t._v(" "),"zh_cn"==t.lang?o("span",{staticClass:"setting-tab-name"},[t._v("\n          "+t._s(e.typename)+"\n            ")]):o("span",{staticClass:"setting-tab-name"},[t._v("\n          "+t._s(e.engtypename)+"\n            ")]),t._v(" "),o("span",{staticClass:"setting-tab-password"},[t._v("\n             "+t._s(e.payconfig?t.global_string_split(e.payconfig.account):"")+"\n            ")]),t._v(" "),!e.payconfig||849!=e.typeid&&853!=e.typeid?t._e():o("div",{staticClass:"qr_code"},[853==e.typeid?o("div",[o("img",{staticClass:"tip",attrs:{src:n(1075),alt:""},on:{click:function(e){t.wechat=!0}}}),t._v(" "),o("el-dialog",{attrs:{"custom-class":"qrCode","lock-scroll":!0,visible:t.wechat,width:"20%","show-close":!1,center:""},on:{"update:visible":function(e){t.wechat=e}}},[o("img",{attrs:{src:e.payconfig.imageurl,alt:""}})])],1):t._e(),t._v(" "),849==e.typeid?o("div",[o("img",{staticClass:"tip",attrs:{src:n(1075),alt:""},on:{click:function(e){t.alipay=!0}}}),t._v(" "),o("el-dialog",{attrs:{"custom-class":"qrCode","lock-scroll":!0,visible:t.alipay,width:"20%","show-close":!1,center:""},on:{"update:visible":function(e){t.alipay=e}}},[o("img",{attrs:{src:e.payconfig.imageurl,alt:""}})])],1):t._e()])]),t._v(" "),o("div",{staticClass:"setting-tab-right fl ovh"},[o("span",{staticClass:"setting-tab-isopen fr"},[t.$userinfo.isopenpaypassword?o("span",{on:{click:function(n){return t.gopage(e.typeid)}}},[t._v(" "+t._s(e.payconfig?t.$t("security.modify"):t.$t("legalTrad.binding")))]):o("span",{on:{click:t.openpaypassword}},[t._v(t._s(t.$t("legalTrad.binding")))])])])])})),0)]),t._v(" "),o("el-dialog",{attrs:{width:"30%","custom-class":"dialog-tip-payment",visible:t.dialogVisible},on:{"update:visible":function(e){t.dialogVisible=e}}},[o("img",{staticClass:"pic_tip",attrs:{src:n(722),alt:""}}),t._v(" "),o("p",[t._v(t._s(t.$t("manage.bingaccount")))]),t._v(" "),o("span",{staticClass:"dialog-footer dialog-footer-span",attrs:{slot:"footer"},slot:"footer"},[o("button",{on:{click:function(e){t.dialogVisible=!1}}},[t._v(t._s(t.$t("legalTrad.Cancel")))]),t._v(" "),o("button",{attrs:{type:"primary"},on:{click:t.gosecurity}},[t._v(t._s(t.$t("formMenu.determine")))])])])],1)])}),[],!1,null,"548e0da1",null);e.default=component.exports},722:function(t,e,n){t.exports=n.p+"img/37550a3.png"},819:function(t,e,n){t.exports=n.p+"img/3ca9286.svg"},895:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAA2klEQVQ4T6WSsQ3CMBBF/0/SQscEJj0DsAIVEgPQMwINjEDPAEhUrEAPfbgsQAdtkkOGGFnIDkK4Otn37s7/PuGdoigGaZouVHUCwLRPQvJQ1/Umz/OrS6cLRGQKYAug7xfz4huAuTFmb++eoIVI7lQ1cYlZlo1tXFXV8d2FbFR1ZmHa8ZIkuXx2CoFtgVvTNEOWZblS1WVkvOA1yTVF5ARg9AsI4GxB++meDxpjfNE0UPQeBG2ig0UkCgZH/QKeo+J0gU9xYuvoAF/riBkgpDJ9A/xlOQf/YvIHJoKJcQHqu4IAAAAASUVORK5CYII="},923:function(t,e,n){var content=n(1262);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(5).default)("3c196ce6",content,!0,{sourceMap:!1})}}]);