exports.ids=[72],exports.modules={1201:function(t,e,n){"use strict";n.r(e);var o={data(){return{lang:this.$store.state.hex_lang.locale,loading:!1,wechat:!1,alipay:!1,bindCollection:[],ispaypassword:"",userInfo:{},dialogVisible:!1}},watch:{"$store.state.hex_lang.locale":function(t){this.lang=t}},mounted(){this.loading||(this.loading=!0,this.ispaypassword=this.$userinfo.isopenpaypassword,this.$store.dispatch("user_user_payments_getlist").then(({data:data})=>{if(data){let t=[];data.map(e=>{t.push(e)}),this.bindCollection=t}this.$nextTick(()=>{this.loading=!1})}))},methods:{gopage(t){const e=this;switch(t){case 848:e.$router.push("/person/payment/bank");break;case 849:e.$router.push("/person/payment/alipay");break;case 850:e.$router.push("/person/payment/paypal");break;case 851:e.$router.push("/person/payment/money-gram");break;case 852:e.$router.push("/person/payment/western-union");break;case 853:e.$router.push("/person/payment/wechat");break;case 1101079:e.$router.push("/person/payment/imove")}},openpaypassword(){this.ispaypassword||(this.dialogVisible=!0)},gosecurity(){this.dialogVisible=!1,this.$router.push("/person/security")}}},r=n(3);var component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"setting fr"},[t._ssrNode('<h2 class="setting-title" data-v-548e0da1>'+t._ssrEscape("\n    "+t._s(t.$t("legalDeal.collection"))+"\n  ")+"</h2> "),t._ssrNode('<div class="setting-verify " data-v-548e0da1>',"</div>",[t._ssrNode('<div class="setting-tab" data-v-548e0da1>',"</div>",[o("ul",{directives:[{name:"hex-loading",rawName:"v-hex-loading",value:t.loading,expression:"loading"}],staticClass:"account"},t._l(t.bindCollection,(function(e){return t._ssrNode('<li class="ovh" data-v-548e0da1>',"</li>",[t._ssrNode('<div class="setting-tab-left fl  Unionpay" data-v-548e0da1>',"</div>",[t._ssrNode('<span class="bank-icon" data-v-548e0da1><img'+t._ssrAttr("src",e.icon)+' alt class="icon_bank" data-v-548e0da1></span> '+("zh_cn"==t.lang?'<span class="setting-tab-name" data-v-548e0da1>'+t._ssrEscape("\n          "+t._s(e.typename)+"\n            ")+"</span>":'<span class="setting-tab-name" data-v-548e0da1>'+t._ssrEscape("\n          "+t._s(e.engtypename)+"\n            ")+"</span>")+' <span class="setting-tab-password" data-v-548e0da1>'+t._ssrEscape("\n             "+t._s(e.payconfig?t.global_string_split(e.payconfig.account):"")+"\n            ")+"</span> "),!e.payconfig||849!=e.typeid&&853!=e.typeid?t._e():t._ssrNode('<div class="qr_code" data-v-548e0da1>',"</div>",[853==e.typeid?t._ssrNode("<div data-v-548e0da1>","</div>",[t._ssrNode("<img"+t._ssrAttr("src",n(678))+' alt class="tip" data-v-548e0da1> '),o("el-dialog",{attrs:{"custom-class":"qrCode","lock-scroll":!0,visible:t.wechat,width:"20%","show-close":!1,center:""},on:{"update:visible":function(e){t.wechat=e}}},[o("img",{attrs:{src:e.payconfig.imageurl,alt:""}})])],2):t._e(),t._ssrNode(" "),849==e.typeid?t._ssrNode("<div data-v-548e0da1>","</div>",[t._ssrNode("<img"+t._ssrAttr("src",n(678))+' alt class="tip" data-v-548e0da1> '),o("el-dialog",{attrs:{"custom-class":"qrCode","lock-scroll":!0,visible:t.alipay,width:"20%","show-close":!1,center:""},on:{"update:visible":function(e){t.alipay=e}}},[o("img",{attrs:{src:e.payconfig.imageurl,alt:""}})])],2):t._e()],2)],2),t._ssrNode(' <div class="setting-tab-right fl ovh" data-v-548e0da1><span class="setting-tab-isopen fr" data-v-548e0da1>'+(t.$userinfo.isopenpaypassword?"<span data-v-548e0da1>"+t._ssrEscape(" "+t._s(e.payconfig?t.$t("security.modify"):t.$t("legalTrad.binding")))+"</span>":"<span data-v-548e0da1>"+t._ssrEscape(t._s(t.$t("legalTrad.binding")))+"</span>")+"</span></div>")],2)})),0)]),t._ssrNode(" "),o("el-dialog",{attrs:{width:"30%","custom-class":"dialog-tip-payment",visible:t.dialogVisible},on:{"update:visible":function(e){t.dialogVisible=e}}},[o("img",{staticClass:"pic_tip",attrs:{src:n(252),alt:""}}),t._v(" "),o("p",[t._v(t._s(t.$t("manage.bingaccount")))]),t._v(" "),o("span",{staticClass:"dialog-footer dialog-footer-span",attrs:{slot:"footer"},slot:"footer"},[o("button",{on:{click:function(e){t.dialogVisible=!1}}},[t._v(t._s(t.$t("legalTrad.Cancel")))]),t._v(" "),o("button",{attrs:{type:"primary"},on:{click:t.gosecurity}},[t._v(t._s(t.$t("formMenu.determine")))])])])],2)],2)}),[],!1,(function(t){var e=n(815);e.__inject__&&e.__inject__(t)}),"548e0da1","6df47662");e.default=component.exports},252:function(t,e,n){t.exports=n.p+"img/37550a3.png"},383:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAA2klEQVQ4T6WSsQ3CMBBF/0/SQscEJj0DsAIVEgPQMwINjEDPAEhUrEAPfbgsQAdtkkOGGFnIDkK4Otn37s7/PuGdoigGaZouVHUCwLRPQvJQ1/Umz/OrS6cLRGQKYAug7xfz4huAuTFmb++eoIVI7lQ1cYlZlo1tXFXV8d2FbFR1ZmHa8ZIkuXx2CoFtgVvTNEOWZblS1WVkvOA1yTVF5ARg9AsI4GxB++meDxpjfNE0UPQeBG2ig0UkCgZH/QKeo+J0gU9xYuvoAF/riBkgpDJ9A/xlOQf/YvIHJoKJcQHqu4IAAAAASUVORK5CYII="},448:function(t,e,n){t.exports=n.p+"img/3ca9286.svg"},529:function(t,e,n){var content=n(816);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);var o=n(2).default;t.exports.__inject__=function(t){o("3c196ce6",content,!0,t)}},678:function(t,e,n){t.exports=n.p+"img/90ebc08.svg"},815:function(t,e,n){"use strict";n.r(e);var o=n(529),r=n.n(o);for(var d in o)"default"!==d&&function(t){n.d(e,t,(function(){return o[t]}))}(d);e.default=r.a},816:function(t,e,n){var o=n(8);(t.exports=n(1)(!1)).push([t.i,".setting-tab-isopen.fr.paypassword[data-v-548e0da1]{margin-left:20px}.pic_tip[data-v-548e0da1]{display:block;width:30px;margin:auto auto 10px}.setting[data-v-548e0da1]{width:990px}.setting .setting-title[data-v-548e0da1]{height:68px;line-height:68px;font-size:18px;padding-left:76px;font-weight:900;margin-bottom:10px;background:#fff url("+o(n(448))+") no-repeat 20px;background-size:36px 36px}.setting .setting-verify[data-v-548e0da1]{background:#fff;margin-bottom:10px;padding:0 20px;box-sizing:border-box}.setting .setting-verify .setting-safety[data-v-548e0da1]{border-bottom:1px solid rgba(133,131,172,.2);overflow:hidden}.setting .setting-verify .setting-safety h3[data-v-548e0da1]{font-weight:700}.setting .setting-verify .setting-safety .setting-safety-rank[data-v-548e0da1]{font-size:14px;color:#999;margin:20px 0 30px}.setting .setting-verify .setting-safety .setting-safety-rank .secure[data-v-548e0da1]{display:inline-block;overflow:hidden;margin:0 10px;position:relative;top:3px}.setting .setting-verify .setting-safety .setting-safety-rank .secure span[data-v-548e0da1]{float:left;width:60px;height:16px;background:#eee;margin-right:2px}.setting .setting-verify .setting-safety .setting-safety-rank .secure span.sureness[data-v-548e0da1]{background:#ea003d}.setting .setting-verify .setting-safety .setting-safety-rank .secure span.centre[data-v-548e0da1]{background:#f5a623}.setting .setting-verify .setting-safety .setting-safety-rank .secure span.tall[data-v-548e0da1]{background:#46b05d}.setting .setting-verify .setting-safety .setting-safety-rank .safety[data-v-548e0da1]{color:#cd4559}.setting .setting-verify .setting-safety .setting-safety-rank .strength_centre[data-v-548e0da1]{color:#f5a623}.setting .setting-verify .setting-safety .setting-safety-rank .safety_tall[data-v-548e0da1]{color:#46b05d}.setting .setting-verify .setting-tab ul li[data-v-548e0da1]{font-size:14px;border-bottom:1px solid rgba(133,131,172,.2);line-height:60px}.setting .setting-verify .setting-tab ul li .setting-tab-left[data-v-548e0da1]{box-sizing:border-box;font-weight:600;background-size:18px 18px}.setting .setting-verify .setting-tab ul li .setting-tab-left .bank-icon .icon_bank[data-v-548e0da1]{width:18px;display:inline;vertical-align:middle;margin-right:10px}.setting .setting-verify .setting-tab ul li .setting-tab-left .setting-tab-name[data-v-548e0da1]{color:#333;font-size:16px;display:inline-block;width:157px}.setting .setting-verify .setting-tab ul li .setting-tab-left .setting-tab-password[data-v-548e0da1]{font-weight:400}.setting .setting-verify .setting-tab ul li .setting-tab-right[data-v-548e0da1]{float:right}.setting .setting-verify .setting-tab ul li .setting-tab-right .setting-tab-isopen .cl_cd4[data-v-548e0da1]{color:#cd4559;font-weight:600}.setting .setting-verify .setting-tab ul li .setting-tab-right .setting-tab-isopen a[data-v-548e0da1]{color:#14a2a5}.setting .setting-verify .setting-tab ul li .setting-tab-right .setting-tab-hint[data-v-548e0da1]{color:#999}.setting .setting-verify .setting-tab ul li .setting-tab-right .setting-tab-isopen[data-v-548e0da1]{color:#14a2a5;cursor:pointer}.setting .setting-verify .setting-tab ul li[data-v-548e0da1]:last-child{border-bottom:none}.setting .rating-prompt[data-v-548e0da1]{width:380px;display:inline-block}.combined[data-v-548e0da1]{padding-left:24px;background:url("+o(n(383))+") no-repeat 0;background-size:14px 14px}.gray[data-v-548e0da1]{color:#aaa}.qr_code[data-v-548e0da1]{margin-left:8px;display:inline-block}.qr_code img.tip[data-v-548e0da1]{width:20px;height:20px;-webkit-transform:translateY(30%)}.setting-verify .account[data-v-548e0da1]{position:relative;min-height:371px}",""])}};