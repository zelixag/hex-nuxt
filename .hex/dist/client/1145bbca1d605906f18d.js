(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{1054:function(t,n,e){"use strict";var r=e(802),o={name:"block",props:{product:{type:Object,default:function(){return{}}}},components:{"financial-button":r.a},watch:{"$store.state.hex_lang.locale":function(t){this.lang=t,this.changeLang(t)}},data:function(){return{lang:this.$store.state.hex_lang.locale,Title:""}},methods:{goRush:function(){this.$router.push({path:"/financial/"+this.product.id})},changeLang:function(t){switch(t){case"en_us":this.Title=this.product.pronames.en_us;break;case"zh_cn":this.Title=this.product.pronames.zh_cn;break;case"ja_jp":this.Title=this.product.pronames.ja_jp}},getProcess:function(){var t=100*Math.abs(this.$np.divide(this.product.selledamount,this.product.expectamount));return t<.5&&(t=.5),t+"%"}},mounted:function(){this.changeLang(this.lang)},created:function(){}},c=(e(865),e(9)),component=Object(c.a)(o,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"financial-product",on:{click:t.goRush}},[e("img",{staticClass:"icon",attrs:{src:t.product.currencyicon,alt:""}}),t._v(" "),t.product.pronames?e("p",{staticClass:"title"},[t._v(t._s(t.Title))]):e("p",{staticClass:"title"},[t._v(t._s(t.product.name))]),t._v(" "),e("p",{staticClass:"rate"},[t._v(t._s((100*t.product.yearlyrate).toFixed(2))+"%")]),t._v(" "),e("p",{staticClass:"rate_tip"},[t._v(t._s(t.$t("manage.Estimate")))]),t._v(" "),e("p",{staticClass:"process"},[e("span",{staticClass:"process_tip",style:{width:t.getProcess()}})]),t._v(" "),e("p",{staticClass:"lock"},[t._v(t._s(t.$t("manage.sold"))+" "+t._s(t.product.selledamount))]),t._v(" "),e("financial-button",{attrs:{product:t.product}})],1)}),[],!1,null,"28d71714",null);n.a=component.exports},1098:function(t,n,e){t.exports=e.p+"img/4822db9.svg"},1099:function(t,n,e){t.exports=e.p+"img/c66a059.svg"},1110:function(t,n,e){"use strict";var r=e(867);e.n(r).a},1111:function(t,n,e){(t.exports=e(4)(!1)).push([t.i,".financial-content .banner-swiper1 .VueCarousel-pagination{position:absolute;bottom:20px}.financial-content .banner-swiper1 .VueCarousel-dot{padding:5px!important}.financial-content .banner-swiper1 .VueCarousel-dot--active .VueCarousel-dot-button{background-color:#fff!important}.financial-content .banner-swiper1 .VueCarousel-dot-button{width:40px!important;height:2px!important;border-radius:0!important;background-color:hsla(0,0%,100%,.3)!important}.financial-content .banner-swiper3 .VueCarousel-inner{padding-left:4px}",""])},1112:function(t,n,e){"use strict";var r=e(868);e.n(r).a},1113:function(t,n,e){var r=e(33);(t.exports=e(4)(!1)).push([t.i,".financial-content[data-v-1209a053]{padding-top:20px;padding-bottom:30px;background-color:#fff;background-image:url("+r(e(1114))+');background-repeat:no-repeat}.financial-content .financial[data-v-1209a053]{width:1200px;min-width:1200px;margin:auto}.financial-content .financial-block-main[data-v-1209a053]{position:relative;min-height:500px}.financial-content .banner-group[data-v-1209a053]{margin:0 0 10px}.financial-content .banner-swiper1[data-v-1209a053]{display:inline-block;width:798px;height:360px;float:left}.financial-content .banner-swiper1 .banner-swiper1_img[data-v-1209a053]{height:360px}.financial-content .banner-swiper2[data-v-1209a053]{display:inline-block;height:360px;width:395px;overflow:hidden;float:right}.financial-content .banner-swiper2 .banner-swiper2-content[data-v-1209a053]:hover{transform:scale(.95)}.financial-content .banner-swiper2 .banner-swiper2-content[data-v-1209a053]{cursor:pointer;display:inline-block;height:360px;width:395px;text-align:center;color:#fff;background:linear-gradient(315deg,rgba(105,64,255,.83922),#4be3d3);transition:all .3s cubic-bezier(.645,.045,.355,1)}.financial-content .banner-swiper2 .banner-swiper2-content .recommend[data-v-1209a053]{font-size:24px;line-height:24px;font-weight:600;margin:40px 0 30px}.financial-content .banner-swiper2 .banner-swiper2-content .recommend[data-v-1209a053]:after,.financial-content .banner-swiper2 .banner-swiper2-content .recommend[data-v-1209a053]:before{content:"";display:inline-block;width:76px;opacity:.4012;border-top:1px solid #fff;vertical-align:middle;margin:0 15px}.financial-content .banner-swiper2 .banner-swiper2-content .title[data-v-1209a053]{font-size:20px;line-height:20px;margin-bottom:10px}.financial-content .banner-swiper2 .banner-swiper2-content .date[data-v-1209a053]{font-size:14px;margin-bottom:20px}.financial-content .banner-swiper2 .banner-swiper2-content .rate[data-v-1209a053]{font-family:HexNumber;font-size:66px;line-height:68px;font-weight:600;margin-bottom:10px}.financial-content .banner-swiper2 .banner-swiper2-content .rate_tip[data-v-1209a053]{font-size:14px;margin-bottom:30px}.financial-content .banner-swiper2 .banner-swiper2-content .rush[data-v-1209a053]{width:208px;height:44px;line-height:44px;border-radius:2px;border:1px solid #fff;background:transparent;font-size:16px;color:#fff}.financial-content .banner-swiper3[data-v-1209a053]{width:1210px;min-width:1210px;margin:auto;min-height:205px}.financial-content .banner-swiper3 .VueCarousel-slide[data-v-1209a053]{height:205px}.financial-content .banner-swiper3 .banner-swiper3-content[data-v-1209a053]:hover{transform:scale(.95)}.financial-content .banner-swiper3 .banner-swiper3-content[data-v-1209a053]{display:inline-block;cursor:pointer;width:395px;height:190px;background-color:#fff;background-image:url('+r(e(1115))+");background-repeat:no-repeat;background-position:100% 0;box-shadow:0 5px 10px 0 rgba(27,195,178,.1);padding:0 22px;transition:all .3s cubic-bezier(.645,.045,.355,1)}.financial-content .banner-swiper3 .banner-swiper3-content .title[data-v-1209a053]{margin-top:30px;margin-bottom:30px;font-size:20px;color:#333;font-weight:600}.financial-content .banner-swiper3 .banner-swiper3-content .rate[data-v-1209a053]{font-family:HexNumber;font-size:45px;line-height:45px;font-weight:600;color:#14a2a5}.financial-content .banner-swiper3 .banner-swiper3-content .rush[data-v-1209a053]{width:175px;height:40px;line-height:40px;font-size:14px;color:#fff;background:#1bc3b2;border-radius:2px;text-align:center;margin-top:4px}.financial-content .banner-swiper3 .banner-swiper3-content .no_rush[data-v-1209a053]{background:#f8f8f8;color:#999}.financial-content .banner-swiper3 .banner-swiper3-content .rate_tip[data-v-1209a053]{color:#999;font-size:14px;margin-top:10px}.financial-content .financial-block-title[data-v-1209a053]{margin:40px 0;line-height:40px}.financial-content .financial-block-title .title[data-v-1209a053]{font-size:0}.financial-content .financial-block-title .title_icon[data-v-1209a053]{display:inline-block;width:40px;height:40px;margin-right:15px;vertical-align:middle}.financial-content .financial-block-title .title_tip[data-v-1209a053]{color:#292e39;font-size:26px;font-weight:600;vertical-align:middle}.financial-content .financial-block-title .more[data-v-1209a053]{font-size:16px;color:#14a2a5;cursor:pointer}.financial-content .financial-block[data-v-1209a053]{position:relative;width:1240px;left:-40px}.financial-content .financial-block .financial-product[data-v-1209a053]{float:left;margin-left:40px}",""])},1114:function(t,n,e){t.exports=e.p+"img/fc910ed.png"},1115:function(t,n,e){t.exports=e.p+"img/aadf875.png"},1673:function(t,n,e){"use strict";e.r(n);e(52);var r=e(10),o=e(1087),c=e(1053),l=e(1054),d=e(802),f={name:"Home",components:{carousel:o.a,slide:c.a,product:l.a,"financial-button":d.a},watch:{"$store.state.hex_lang.locale":function(t){this.lang=t,this.getArticle()}},asyncData:function(t){var n=t.store;t.params,t.redirect;return Object(r.a)(regeneratorRuntime.mark((function t(){var e,data,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.dispatch("finance_product_search",{status:null,currencyid:null,type:null,cyclestart:null,cycleend:null,bannerindex:1,bannerrows:4});case 2:return e=t.sent,data=e.data,r=data&&data.pagedata.length>0?data.pagedata:[],t.abrupt("return",{recommendBannel:r.shift(),listBanner:r});case 6:case"end":return t.stop()}}),t)})))()},data:function(){return{swiperBannel:[],recommendBannel:null,listBanner:[],areaList:[],areaListLoading:!0,lang:this.$store.state.hex_lang.locale}},methods:{getArticle:function(){var t=this;this.$store.dispatch("com_article_search",{menutype:3981,pageindex:1,pagesize:12}).then((function(n){t.swiperBannel=n.data&&n.data.pagedata?n.data.pagedata:[]}))},getProductSearch:function(){var t=this;this.$store.dispatch("finance_product_search",{status:null,currencyid:null,type:null,cyclestart:null,cycleend:null,bannerindex:1,bannerrows:4}).then((function(n){var data=n.data;data&&data.pagedata.length>0&&(t.recommendBannel=data.pagedata.shift(),t.listBanner=data.pagedata)}))},getAreaList:function(){var t=this;this.areaListLoading=!0,this.$store.dispatch("finance_areas_getlist").then((function(n){var data=n.data;data&&(t.areaList=data.sort((function(t,n){return t.displayorder-n.displayorder}))),t.areaListLoading=!1}))},goRush:function(t){this.$router.push({path:"/financial/"+t})},goLookMore:function(t){var n={};0==t.areatype?n.currencyid=t.currencyid:1==t.areatype||2==t.areatype&&(n.status=2),this.$router.push({name:"financial-list",query:n})}},mounted:function(){this.getArticle(),this.getAreaList()},created:function(){}},h=(e(1110),e(1112),e(9)),component=Object(h.a)(f,(function(){var t=this,n=t.$createElement,r=t._self._c||n;return r("div",{staticClass:"financial-content"},[r("div",{staticClass:"financial"},[r("div",{staticClass:"banner-group clearfix"},[r("div",{staticClass:"banner-swiper1"},[r("no-ssr",[r("carousel",{attrs:{perPage:1,speed:500,autoplay:!0,autoplayTimeout:6500}},t._l(t.swiperBannel,(function(t){return r("slide",{key:t.id},[t.articlehref?r("a",{attrs:{href:t.articlehref,target:"_blank"}},[r("img",{staticClass:"banner-swiper1_img",attrs:{src:t.imgurl,alt:""}})]):r("img",{staticClass:"banner-swiper1_img",attrs:{src:t.imgurl,alt:""}})])})),1)],1)],1),t._v(" "),r("div",{staticClass:"banner-swiper2"},[t.recommendBannel?r("div",{staticClass:"banner-swiper2-content",on:{click:function(n){return t.goRush(t.recommendBannel.id)}}},[r("p",{staticClass:"recommend"},[t._v(t._s(t.$t("manage.Popular")))]),t._v(" "),t.recommendBannel.pronames?r("p",{staticClass:"title"},[t._v("\n            "+t._s("en_us"==t.lang?t.recommendBannel.pronames.en_us:t.recommendBannel.pronames.zh_cn))]):r("p",{staticClass:"title"},[t._v(t._s(t.recommendBannel.name))]),t._v(" "),r("p",{staticClass:"date"},[t._v(t._s(t.$t("manage.LimitTime"))+" "+t._s(t.recommendBannel.cycle)+" "+t._s(t.$t("manage.Day")))]),t._v(" "),r("p",{staticClass:"rate"},[t._v(t._s((100*t.recommendBannel.yearlyrate).toFixed(2))+"%")]),t._v(" "),r("p",{staticClass:"rate_tip"},[t._v(t._s(t.$t("manage.Estimate")))]),t._v(" "),r("financial-button",{attrs:{product:t.recommendBannel}})],1):t._e()])])]),t._v(" "),r("div",{staticClass:"banner-swiper3"},[r("no-ssr",[r("carousel",{attrs:{perPage:3,paginationEnabled:!1}},t._l(t.listBanner,(function(n){return r("slide",{key:n.id},[r("div",{staticClass:"banner-swiper3-content",on:{click:function(e){return t.goRush(n.id)}}},[n.pronames?r("p",{staticClass:"title"},[t._v(t._s("en_us"==t.lang?n.pronames.en_us:n.pronames.zh_cn))]):r("p",{staticClass:"title"},[t._v(t._s(n.name))]),t._v(" "),r("p",{staticClass:"clearfix"},[r("span",{staticClass:"rate left"},[t._v(t._s((100*n.yearlyrate).toFixed(2))+"%")]),t._v(" "),r("financial-button",{staticClass:"right",attrs:{product:n}})],1),t._v(" "),r("p",{staticClass:"rate_tip"},[t._v(t._s(t.$t("manage.Estimate")))])])])})),1)],1)],1),t._v(" "),r("div",{directives:[{name:"hex-loading",rawName:"v-hex-loading",value:t.areaListLoading,expression:"areaListLoading"}],staticClass:"financial financial-block-main"},[t._l(t.areaList,(function(n,o){return[r("div",{key:"title"+o,staticClass:"financial-block-title clearfix"},[0==n.areatype?r("div",{staticClass:"title left"},[r("img",{staticClass:"title_icon",attrs:{src:n.products[0].currencyicon,alt:""}}),t._v(" "),r("span",{staticClass:"title_tip"},[t._v(t._s(n.currencyname.toUpperCase())+" "+t._s(t.$t("manage.Area")))])]):1==n.areatype?r("div",{staticClass:"title left"},[r("img",{staticClass:"title_icon",attrs:{src:e(1098),alt:""}}),t._v(" "),r("span",{staticClass:"title_tip"},[t._v(t._s(t.$t("manage.Cooperation")))])]):2==n.areatype?r("div",{staticClass:"title left"},[r("img",{staticClass:"title_icon",attrs:{src:e(1099),alt:""}}),t._v(" "),r("span",{staticClass:"title_tip"},[t._v(t._s(t.$t("manage.products")))])]):t._e(),t._v(" "),r("span",{staticClass:"more right",on:{click:function(e){return t.goLookMore(n)}}},[t._v(t._s(t.$t("manage.ViewAll"))+" >>")])]),t._v(" "),r("div",{key:"block"+o,staticClass:"financial-block clearfix"},t._l(n.products,(function(t,n){return r("product",{key:n,staticStyle:{cursor:"pointer"},attrs:{product:t}})})),1)]}))],2)])}),[],!1,null,"1209a053",null);n.default=component.exports},781:function(t,n,e){var content=e(866);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(5).default)("4a131885",content,!0,{sourceMap:!1})},802:function(t,n,e){"use strict";var r=e(1),o=e.n(r),c={name:"finbutton",props:{text:"",isBuy:{type:Boolean,default:!1},product:{type:Object,default:function(){return{}}}},data:function(){return{lang:this.$store.state.hex_lang.locale,countDown:"--",timer:null,copeProduct:Object.assign({},this.product)}},computed:{getSur:function(){return this.$np.minus(this.product.expectamount,this.product.selledamount)<=0}},watch:{"$store.state.hex_lang.locale":function(t){this.lang=t,this.startDown()}},methods:{startDown:function(){var time=this.global_get_local_time(this.copeProduct.startselltime),t=this.global_get_local_time(new Date),n=o.a.duration(time-t),e=n.asDays(),r=n.asHours();if(n.asSeconds()>0){var c=n.minutes();c=c<10?"0"+c:c;var l=n.hours();l=l<10?"0"+l:l;var d=n.days();e>7?this.countDown=time.format("YYYY-MM-DD HH:mm:ss")+this.$t("manage.BStart"):r>24?"en_us"==this.lang?this.countDown=this.$t("manage.Starts")+d+this.$t("manage.Startdays"):this.countDown=d+this.$t("manage.Startdays")+this.$t("manage.Starts"):r>1?"en_us"==this.lang?this.countDown=this.$t("manage.Starts")+" ".concat(l," ")+this.$t("deal.hour")+" ".concat(c," ")+this.$t("deal.minutes"):this.countDown="".concat(l," ")+this.$t("deal.hour")+" ".concat(c," ")+this.$t("manage.minutes")+this.$t("manage.Starts"):"en_us"==this.lang?this.countDown=this.$t("manage.Starts")+" 00 "+this.$t("deal.hour")+" ".concat(c," ")+this.$t("deal.minutes"):this.countDown="00 "+this.$t("deal.hour")+"".concat(c," ")+this.$t("manage.minutes")+this.$t("manage.Starts")}else this.copeProduct.prostatus=1,clearTimeout(this.timer)},goRush:function(){this.isBuy&&this.$emit("financial:buy")}},mounted:function(){var t=this;0==this.copeProduct.prostatus&&(this.startDown(),this.timer=setTimeout((function(){t.startDown()}),3e4))},beforeDestroy:function(){clearTimeout(this.timer)}},l=e(9),component=Object(l.a)(c,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return 1!=t.copeProduct.prostatus||t.getSur?1==t.copeProduct.prostatus&&t.getSur?e("button",{staticClass:"rush no_rush"},[t._v(t._s(t.$t("manage.soldOut")))]):2==t.copeProduct.prostatus||3==t.copeProduct.prostatus?e("button",{staticClass:"rush no_rush"},[t._v("\n  "+t._s(t.$t("manage.Over"))+"\n")]):0==t.copeProduct.prostatus?e("button",{staticClass:"rush no_rush"},[t._v(t._s(t.countDown))]):t._e():e("button",{staticClass:"rush",on:{click:t.goRush}},[t._v("\n  "+t._s(t.text?t.text:t.$t("manage.Buynow"))+"\n")])}),[],!1,null,"92489b8e",null);n.a=component.exports},865:function(t,n,e){"use strict";var r=e(781);e.n(r).a},866:function(t,n,e){(t.exports=e(4)(!1)).push([t.i,".financial-product[data-v-28d71714]{position:relative;width:270px;height:324px;background:#fff;box-shadow:0 5px 10px 2px rgba(51,51,51,.15);text-align:center;line-height:1;transition:all .3s cubic-bezier(.645,.045,.355,1);cursor:pointer}.financial-product .icon[data-v-28d71714]{width:25px;height:25px;margin:25px auto 10px;display:block}.financial-product .title[data-v-28d71714]{color:#333;font-size:16px;margin-bottom:35px;font-weight:600;padding:0 5px}.financial-product .rate[data-v-28d71714]{font-family:HexNumber;color:#14a2a5;font-size:45px;font-weight:600;margin-bottom:10px;display:inline-block}.financial-product .rate_tip[data-v-28d71714]{margin-bottom:35px;font-size:14px;color:#999}.financial-product .process[data-v-28d71714]{width:246px;height:8px;background:#f0f0f0;border-radius:2px;margin:0 auto 10px;position:relative}.financial-product .process .process_tip[data-v-28d71714]{position:absolute;left:0;top:0;display:inline-block;border-radius:2px;height:8px;background:linear-gradient(-90deg,rgba(44,223,204,.85098),rgba(27,195,178,.72157))}.financial-product .lock[data-v-28d71714]{color:#666;font-size:14px}.financial-product .rush[data-v-28d71714]{text-align:center;line-height:44px;color:#fff;font-size:16px;background:#1bc3b2;position:absolute;bottom:0;left:0;width:100%}.financial-product .no_rush[data-v-28d71714]{background:#f8f8f8;color:#999}.financial-product[data-v-28d71714]:hover{transform:translateY(-10px)}",""])},867:function(t,n,e){var content=e(1111);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(5).default)("5b6b7752",content,!0,{sourceMap:!1})},868:function(t,n,e){var content=e(1113);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(5).default)("42eec06e",content,!0,{sourceMap:!1})}}]);