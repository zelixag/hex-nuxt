(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{1455:function(t,n,e){"use strict";var o=e(987);e.n(o).a},1456:function(t,n,e){var o=e(33);(t.exports=e(4)(!1)).push([t.i,".hex-flex_auto[data-v-9256daf0]{background:#fff}.headline[data-v-9256daf0]{font-size:30px;color:#333;font-weight:400}.inner[data-v-9256daf0]{margin-top:23px}.des[data-v-9256daf0]{margin-top:10px}.announcement[data-v-9256daf0]{background:#14a2a5}.announcement .announcement-head[data-v-9256daf0]{width:1200px;margin:0 auto;height:76px}.announcement .announcement-head h1[data-v-9256daf0]{padding-left:60px;float:left;line-height:45px;color:#fff;font-size:22px;font-weight:400;background:url("+o(e(731))+") no-repeat 0;background-size:auto 85%}.announcement .announcement-head .search[data-v-9256daf0]{width:300px;float:right;height:36px;margin-top:20px;overflow:hidden}.announcement .announcement-head .search input[data-v-9256daf0]{width:240px;line-height:36px;padding-left:10px;font-size:14px}.announcement .announcement-head .search button[data-v-9256daf0]{width:60px;height:36px;color:#fff;font-size:14px;text-align:center;background:linear-gradient(135deg,#0087e6,#0076e6)}.announcement-body[data-v-9256daf0]{width:1200px;margin:auto auto 40px;min-height:500px}.announcement-body .goback[data-v-9256daf0]{cursor:pointer;font-size:14px;color:#14a2a5;margin:30px 0;background-size:16px 16px}.announcement-body .goback a[data-v-9256daf0]{color:#14a2a5}.announcement-body ul[data-v-9256daf0]{background:#fff}.announcement-body ul li[data-v-9256daf0]{padding:20px 0;cursor:pointer;border-bottom:1px solid rgba(133,131,172,.2)}.announcement-body ul li .pic[data-v-9256daf0]{width:291px;margin:120px auto 0}.announcement-body ul li .pic .tip[data-v-9256daf0]{text-align:center;font-size:14px;color:#dddde4;line-height:22px;margin-top:8px}.announcement-body ul li h3[data-v-9256daf0]{font-weight:400;font-size:16px;color:#333}.announcement-body ul li p[data-v-9256daf0]{font-size:13px;color:#666}.announcement-body ul li .description[data-v-9256daf0]{float:left;line-height:20px;width:80%;text-overflow:ellipsis;overflow:hidden;white-space:nowrap}.announcement-body ul li .time[data-v-9256daf0]{float:right;font-size:12px;line-height:20px;color:#999;padding-left:23px;background:url("+o(e(718))+") no-repeat 0;background-size:14px 14px}.announcement-body ul li.articleNone[data-v-9256daf0]{border-bottom:none;margin-bottom:150px}.announcement-body ul .more[data-v-9256daf0]{border-bottom:none;padding:0}.page-turning[data-v-9256daf0]{overflow:hidden;padding:20px;background:#fff}.page-turning .page[data-v-9256daf0]{width:330px;float:right}.page-turning .page span[data-v-9256daf0]{float:left;width:30px;height:30px;border:1px solid #ddd;text-align:center;line-height:30px;margin-right:10px;font-size:12px;color:#666}.page-turning .page .dot[data-v-9256daf0]{border:none;margin-right:0}.page-turning .page .mgr0[data-v-9256daf0],.page-turning .page .page-down[data-v-9256daf0]{margin-right:0}.page-turning .page span.cur_page[data-v-9256daf0]{background:#14a2a5;color:#fff}",""])},1737:function(t,n,e){"use strict";e.r(n);e(34);var o={name:"help-coin",components:{"hex-more":e(175).a},data:function(){return{total:0,lang:this.$store.state.hex_lang.locale,coinData:[],orderState:!0,search:"",filterData:[],pagesIndex:0,pageSize:10,orderModel:{menutype:3911,pageindex:1,pagesize:1e3}}},watch:{"$store.state.hex_lang.locale":function(t){this.lang=t,this.$router.push("/help")}},mounted:function(){this.getData(1)},methods:{handChange:function(t){this.getData(t)},todetail:function(data,title){data.articlehref?window.location.href=data.articlehref:this.$router.push({name:"help-help-detail",query:{type:3911,id:data.id,title:title}})},getData:function(t){var n=this;this.$store.dispatch("com_article_search",this.orderModel).then((function(e){if(e.data&&e.data.pagedata.length>0){var o=[];e.data.pagedata.map((function(t){-1!=t.title.indexOf(n.lang+"-")&&(t.title=t.title.split(n.lang+"-")[1],o.push(t))})),n.total=o.length,n.coinData=o.slice(10*(t-1),10*t)}else n.coinData=[],n.total=0;n.total>10?n.total=n.total:n.total=0}))}}},d=(e(1455),e(9)),component=Object(d.a)(o,(function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("div",{staticClass:"hex-flex"},[o("div",{staticClass:"hex-flex_auto"},[o("div",{staticClass:"announcement-body"},[o("div",{staticClass:"goback"},[o("nuxt-link",{attrs:{to:"/help"}},[t._v(t._s(t.$t("home.footerHelp")))]),t._v("   > "+t._s(t.$t("c2c.Newcurrency"))+"\n      ")],1),t._v(" "),o("div",{staticClass:"headline"},[t._v("\n        "+t._s(t.$t("c2c.Newcurrency"))+"\n      ")]),t._v(" "),o("div",{staticClass:"inner ovh"},[o("ul",[t._l(t.coinData,(function(n){return o("li",{key:n.id},[o("div",{on:{click:function(e){return t.todetail(n,"coin")}}},[o("h3",[t._v(t._s(n.title))]),t._v(" "),o("div",{staticClass:"ovh des"},[o("p",{staticClass:"description"},[t._v(t._s(n.shortdesc))]),t._v(" "),o("p",{staticClass:"time"},[t._v("\n                  "+t._s(t.global_get_local_time(n.updatetime).format("YYYY-MM-DD HH:mm:ss"))+"\n                ")])])])])})),t._v(" "),t.coinData.length<=0?o("li",{staticClass:"articleNone"},[o("div",{staticClass:"pic"},[o("img",{attrs:{src:e(745),alt:""}}),t._v(" "),o("p",{staticClass:"tip"},[t._v(t._s(t.$t("patch.noArticle")))])])]):t._e()],2),t._v(" "),t.total>0?o("div",{staticClass:"paging-source"},[o("el-pagination",{attrs:{background:"","page-size":10,"popper-class":"paging",layout:"prev, pager, next",total:t.total},on:{"current-change":t.handChange}})],1):t._e()])])])])}),[],!1,null,"9256daf0",null);n.default=component.exports},718:function(t,n,e){t.exports=e.p+"img/ab34af3.svg"},731:function(t,n,e){t.exports=e.p+"img/ae6a3e9.png"},745:function(t,n,e){t.exports=e.p+"img/a5cf91b.svg"},987:function(t,n,e){var content=e(1456);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(5).default)("d373860c",content,!0,{sourceMap:!1})}}]);