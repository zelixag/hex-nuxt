(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{1438:function(t,e,n){"use strict";var o=n(980);n.n(o).a},1439:function(t,e,n){var o=n(33);(t.exports=n(4)(!1)).push([t.i,".captions[data-v-2a328124]{margin-top:30px}.captions span[data-v-2a328124]{width:560px;float:left;color:#333;font-size:24px}.captions span[data-v-2a328124]:first-child{margin-right:80px}.hex-flex_auto[data-v-2a328124]{background:#fff}.headline[data-v-2a328124]{font-size:30px;color:#333;font-weight:400}.inner[data-v-2a328124]{margin:40px 0 155px}.announcement[data-v-2a328124]{background:#14a2a5}.announcement .announcement-head[data-v-2a328124]{width:1200px;margin:0 auto;height:76px}.announcement .announcement-head h1[data-v-2a328124]{padding-left:60px;float:left;line-height:45px;color:#fff;font-size:22px;font-weight:400;background:url("+o(n(731))+") no-repeat 0;background-size:auto 85%}.announcement .announcement-head .search[data-v-2a328124]{width:300px;float:right;height:36px;margin-top:20px;overflow:hidden}.announcement .announcement-head .search input[data-v-2a328124]{width:240px;line-height:36px;padding-left:10px;font-size:14px}.announcement .announcement-head .search button[data-v-2a328124]{width:60px;height:36px;color:#fff;font-size:14px;text-align:center;background:linear-gradient(135deg,#0087e6,#0076e6)}.announcement-body[data-v-2a328124]{width:1200px;margin:auto auto 20px;min-height:500px}.announcement-body .goback[data-v-2a328124]{cursor:pointer;font-size:14px;color:#14a2a5;margin:30px 0 40px;background-size:16px 16px}.announcement-body .goback a[data-v-2a328124]{color:#14a2a5}.announcement-body ul[data-v-2a328124]{width:560px;float:left;background:#fff;min-height:303px}.announcement-body ul li[data-v-2a328124]{padding:21px 0 20px;cursor:pointer;border-bottom:1px solid rgba(133,131,172,.2)}.announcement-body ul li h3[data-v-2a328124]{font-weight:400;font-size:16px;color:#333}.announcement-body ul li p[data-v-2a328124]{font-size:13px;color:#666}.announcement-body ul li .description[data-v-2a328124]{float:left;font-size:16px;line-height:20px;width:70%;font-weight:400;text-overflow:ellipsis;overflow:hidden;white-space:nowrap;color:#333}.announcement-body ul li .time[data-v-2a328124]{float:right;font-size:12px;line-height:20px;color:#999;padding-left:23px;background:url("+o(n(718))+") no-repeat 0;background-size:14px 14px}.announcement-body ul li a[data-v-2a328124]{color:#14a2a5}.announcement-body ul li.nodate[data-v-2a328124]{border-bottom:none}.announcement-body ul li.checkaritcle[data-v-2a328124]{border-bottom:none;margin-top:10px}.announcement-body ul .more[data-v-2a328124]{border-bottom:none;padding:0}.announcement-body ul[data-v-2a328124]:first-child{margin-right:80px}.page-turning[data-v-2a328124]{overflow:hidden;padding:20px;background:#fff}.page-turning .page[data-v-2a328124]{width:330px;float:right}.page-turning .page span[data-v-2a328124]{float:left;width:30px;height:30px;border:1px solid #ddd;text-align:center;line-height:30px;margin-right:10px;font-size:12px;color:#666}.page-turning .page .dot[data-v-2a328124]{border:none;margin-right:0}.page-turning .page .mgr0[data-v-2a328124],.page-turning .page .page-down[data-v-2a328124]{margin-right:0}.page-turning .page span.cur_page[data-v-2a328124]{background:#14a2a5;color:#fff}",""])},1730:function(t,e,n){"use strict";n.r(e);n(34);var o={name:"bulletin-center",data:function(){return{coinloading:!1,hotloading:!1,coinNoData:!1,hotNoData:!1,newtotal:0,total:0,lang:this.$store.state.hex_lang.locale,coinData:[],hotArticle:[],orderState:!0,search:"",filterData:[],pagesIndex:0,pageSize:10,orderModel:{menutype:3911,pageindex:1,pagesize:1e3}}},watch:{"$store.state.hex_lang.locale":function(t){this.lang=t,this.$router.push("/help")}},mounted:function(){this.getData(1)},methods:{handChange:function(t){this.getData(t)},todetail:function(data,title){data.articlehref?window.location.href=data.articlehref:this.$router.push({name:"help-help-detail",query:{type:data.menutype,id:data.id,title:title}})},getData:function(){var t=this;this.coinNoData=!1,this.hotNoData=!1,this.coinloading=!0,this.hotloading=!0,this.$store.dispatch("com_article_search",this.orderModel).then((function(e){var data=e.data;if(data&&data.pagedata.length>0){var n=[];data.pagedata.map((function(e){-1!=e.title.indexOf(t.lang+"-")&&(e.title=e.title.split(t.lang+"-")[1],n.push(e))})),t.total=data.totalitemcount,t.coinData=n.slice(0,6)}else t.coinData=[],t.total=0,t.coinNoData=!0;return t.coinloading=!1,t.$store.dispatch("com_article_search",{menutype:3912,pageindex:1,pagesize:1e3})})).then((function(e){if(e.data.pagedata){var n=[];e.data.pagedata.map((function(e){-1!=e.title.indexOf(t.lang+"-")&&(e.title=e.title.split(t.lang+"-")[1],n.push(e))})),t.hotArticle=n.slice(0,6),t.newtotal=e.data.totalitemcount}else t.hotArticle=[],t.newtotal=0,t.hotNoData=!0;t.hotloading=!1})).catch((function(e){t.hotArticle=[]}))}}},l=(n(1438),n(9)),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hex-flex"},[n("div",{staticClass:"hex-flex_auto"},[n("div",{staticClass:"announcement-body"},[n("div",{staticClass:"goback"},[n("nuxt-link",{attrs:{to:"/help"}},[t._v(t._s(t.$t("home.footerHelp")))]),t._v("\n        > "+t._s(t.$t("patch.OfficialNotice"))+"\n      ")],1),t._v(" "),n("div",{staticClass:"headline"},[t._v("\n        "+t._s(t.$t("c2c.Announcement"))+"\n      ")]),t._v(" "),n("div",{staticClass:"captions clearfix"},[n("span",[t._v(t._s(t.$t("c2c.Newcurrency")))]),t._v(" "),n("span",[t._v(t._s(t.$t("c2c.Latest")))])]),t._v(" "),n("div",{staticClass:"inner clearfix"},[n("ul",{directives:[{name:"hex-loading",rawName:"v-hex-loading",value:t.coinloading,expression:"coinloading"}],staticClass:"por"},[t._l(t.coinData,(function(e){return n("li",{key:e.id,on:{click:function(n){return t.todetail(e,"notice")}}},[n("div",[n("div",{staticClass:"ovh des"},[n("p",{staticClass:"description"},[t._v(t._s(e.title))]),t._v(" "),n("p",{staticClass:"time"},[t._v("\n                  "+t._s(t.global_get_local_time(e.updatetime).format("YYYY-MM-DD HH:mm:ss"))+"\n                ")])])])])})),t._v(" "),t.coinNoData?n("li",{staticClass:"nodate"},[t._v(t._s(t.$t("home.moreNoData")))]):t._e(),t._v(" "),t.total>=6?n("li",{staticClass:"checkaritcle"},[n("nuxt-link",{attrs:{to:"/help/new-currency"}},[t._v(t._s(t.$t("c2c.viewall"))+" "),n("span",[t._v(t._s(t.total))]),t._v(" "+t._s(t.$t("c2c.articles"))+"\n            ")])],1):t._e()],2),t._v(" "),n("ul",{directives:[{name:"hex-loading",rawName:"v-hex-loading",value:t.coinloading,expression:"coinloading"}],staticClass:"por"},[t._l(t.hotArticle,(function(e){return n("li",{key:e.id,on:{click:function(n){return t.todetail(e,"notice")}}},[n("div",[n("div",{staticClass:"ovh des"},[n("p",{staticClass:"description"},[t._v(t._s(e.title))]),t._v(" "),n("p",{staticClass:"time"},[t._v("\n                  "+t._s(t.global_get_local_time(e.updatetime).format("YYYY-MM-DD HH:mm:ss"))+"\n                ")])])])])})),t._v(" "),t.newtotal>=6?n("li",{staticClass:"checkaritcle"},[n("nuxt-link",{attrs:{to:"/help/latest-announcement"}},[t._v(t._s(t.$t("c2c.viewall"))+" "),n("span",[t._v(t._s(t.newtotal))]),t._v("\n              "+t._s(t.$t("c2c.articles"))+"\n            ")])],1):t._e(),t._v(" "),t.hotNoData?n("li",{staticClass:"nodate"},[t._v(t._s(t.$t("home.moreNoData")))]):t._e()],2)])])])])}),[],!1,null,"2a328124",null);e.default=component.exports},718:function(t,e,n){t.exports=n.p+"img/ab34af3.svg"},731:function(t,e,n){t.exports=n.p+"img/ae6a3e9.png"},980:function(t,e,n){var content=n(1439);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(5).default)("0939f9c8",content,!0,{sourceMap:!1})}}]);