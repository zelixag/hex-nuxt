exports.ids=[21],exports.modules={1236:function(t,e,n){"use strict";n.r(e);var o={name:"bulletin-center",data(){return{coinloading:!1,hotloading:!1,coinNoData:!1,hotNoData:!1,newtotal:0,total:0,lang:this.$store.state.hex_lang.locale,coinData:[],hotArticle:[],orderState:!0,search:"",filterData:[],pagesIndex:0,pageSize:10,orderModel:{menutype:3911,pageindex:1,pagesize:1e3}}},watch:{"$store.state.hex_lang.locale":function(t){this.lang=t,this.$router.push("/help")}},mounted(){this.getData(1)},methods:{handChange(t){this.getData(t)},todetail(data,title){data.articlehref?window.location.href=data.articlehref:this.$router.push({name:"help-help-detail",query:{type:data.menutype,id:data.id,title:title}})},getData(){this.coinNoData=!1,this.hotNoData=!1,this.coinloading=!0,this.hotloading=!0,this.$store.dispatch("com_article_search",this.orderModel).then(({data:data})=>{if(data&&data.pagedata.length>0){let t=[];data.pagedata.map(e=>{-1!=e.title.indexOf(this.lang+"-")&&(e.title=e.title.split(this.lang+"-")[1],t.push(e))}),this.total=data.totalitemcount,this.coinData=t.slice(0,6)}else this.coinData=[],this.total=0,this.coinNoData=!0;return this.coinloading=!1,this.$store.dispatch("com_article_search",{menutype:3912,pageindex:1,pagesize:1e3})}).then(t=>{if(t.data.pagedata){let e=[];t.data.pagedata.map(t=>{-1!=t.title.indexOf(this.lang+"-")&&(t.title=t.title.split(this.lang+"-")[1],e.push(t))}),this.hotArticle=e.slice(0,6),this.newtotal=t.data.totalitemcount}else this.hotArticle=[],this.newtotal=0,this.hotNoData=!0;this.hotloading=!1}).catch(t=>{this.hotArticle=[]})}}},d=n(3);var component=Object(d.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hex-flex"},[t._ssrNode('<div class="hex-flex_auto" data-v-2a328124>',"</div>",[t._ssrNode('<div class="announcement-body" data-v-2a328124>',"</div>",[t._ssrNode('<div class="goback" data-v-2a328124>',"</div>",[n("nuxt-link",{attrs:{to:"/help"}},[t._v(t._s(t.$t("home.footerHelp")))]),t._ssrNode(t._ssrEscape("\n        > "+t._s(t.$t("patch.OfficialNotice"))+"\n      "))],2),t._ssrNode(' <div class="headline" data-v-2a328124>'+t._ssrEscape("\n        "+t._s(t.$t("c2c.Announcement"))+"\n      ")+'</div> <div class="captions clearfix" data-v-2a328124><span data-v-2a328124>'+t._ssrEscape(t._s(t.$t("c2c.Newcurrency")))+"</span> <span data-v-2a328124>"+t._ssrEscape(t._s(t.$t("c2c.Latest")))+"</span></div> "),t._ssrNode('<div class="inner clearfix" data-v-2a328124>',"</div>",[n("ul",{directives:[{name:"hex-loading",rawName:"v-hex-loading",value:t.coinloading,expression:"coinloading"}],staticClass:"por"},[t._ssrNode(t._ssrList(t.coinData,(function(e){return'<li data-v-2a328124><div data-v-2a328124><div class="ovh des" data-v-2a328124><p class="description" data-v-2a328124>'+t._ssrEscape(t._s(e.title))+'</p> <p class="time" data-v-2a328124>'+t._ssrEscape("\n                  "+t._s(t.global_get_local_time(e.updatetime).format("YYYY-MM-DD HH:mm:ss"))+"\n                ")+"</p></div></div></li>"}))+" "+(t.coinNoData?'<li class="nodate" data-v-2a328124>'+t._ssrEscape(t._s(t.$t("home.moreNoData")))+"</li>":"\x3c!----\x3e")+" "),t.total>=6?t._ssrNode('<li class="checkaritcle" data-v-2a328124>',"</li>",[n("nuxt-link",{attrs:{to:"/help/new-currency"}},[t._v(t._s(t.$t("c2c.viewall"))+" "),n("span",[t._v(t._s(t.total))]),t._v(" "+t._s(t.$t("c2c.articles"))+"\n            ")])],1):t._e()],2),t._ssrNode(" "),n("ul",{directives:[{name:"hex-loading",rawName:"v-hex-loading",value:t.coinloading,expression:"coinloading"}],staticClass:"por"},[t._ssrNode(t._ssrList(t.hotArticle,(function(e){return'<li data-v-2a328124><div data-v-2a328124><div class="ovh des" data-v-2a328124><p class="description" data-v-2a328124>'+t._ssrEscape(t._s(e.title))+'</p> <p class="time" data-v-2a328124>'+t._ssrEscape("\n                  "+t._s(t.global_get_local_time(e.updatetime).format("YYYY-MM-DD HH:mm:ss"))+"\n                ")+"</p></div></div></li>"}))+" "),t.newtotal>=6?t._ssrNode('<li class="checkaritcle" data-v-2a328124>',"</li>",[n("nuxt-link",{attrs:{to:"/help/latest-announcement"}},[t._v(t._s(t.$t("c2c.viewall"))+" "),n("span",[t._v(t._s(t.newtotal))]),t._v("\n              "+t._s(t.$t("c2c.articles"))+"\n            ")])],1):t._e(),t._ssrNode(" "+(t.hotNoData?'<li class="nodate" data-v-2a328124>'+t._ssrEscape(t._s(t.$t("home.moreNoData")))+"</li>":"\x3c!----\x3e"))],2)],2)],2)])])}),[],!1,(function(t){var e=n(987);e.__inject__&&e.__inject__(t)}),"2a328124","708de7ed");e.default=component.exports},259:function(t,e,n){t.exports=n.p+"img/ab34af3.svg"},292:function(t,e,n){t.exports=n.p+"img/ae6a3e9.png"},589:function(t,e,n){var content=n(988);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);var o=n(2).default;t.exports.__inject__=function(t){o("0939f9c8",content,!0,t)}},987:function(t,e,n){"use strict";n.r(e);var o=n(589),d=n.n(o);for(var l in o)"default"!==l&&function(t){n.d(e,t,(function(){return o[t]}))}(l);e.default=d.a},988:function(t,e,n){var o=n(8);(t.exports=n(1)(!1)).push([t.i,".captions[data-v-2a328124]{margin-top:30px}.captions span[data-v-2a328124]{width:560px;float:left;color:#333;font-size:24px}.captions span[data-v-2a328124]:first-child{margin-right:80px}.hex-flex_auto[data-v-2a328124]{background:#fff}.headline[data-v-2a328124]{font-size:30px;color:#333;font-weight:400}.inner[data-v-2a328124]{margin:40px 0 155px}.announcement[data-v-2a328124]{background:#14a2a5}.announcement .announcement-head[data-v-2a328124]{width:1200px;margin:0 auto;height:76px}.announcement .announcement-head h1[data-v-2a328124]{padding-left:60px;float:left;line-height:45px;color:#fff;font-size:22px;font-weight:400;background:url("+o(n(292))+") no-repeat 0;background-size:auto 85%}.announcement .announcement-head .search[data-v-2a328124]{width:300px;float:right;height:36px;margin-top:20px;overflow:hidden}.announcement .announcement-head .search input[data-v-2a328124]{width:240px;line-height:36px;padding-left:10px;font-size:14px}.announcement .announcement-head .search button[data-v-2a328124]{width:60px;height:36px;color:#fff;font-size:14px;text-align:center;background:linear-gradient(135deg,#0087e6,#0076e6)}.announcement-body[data-v-2a328124]{width:1200px;margin:auto auto 20px;min-height:500px}.announcement-body .goback[data-v-2a328124]{cursor:pointer;font-size:14px;color:#14a2a5;margin:30px 0 40px;background-size:16px 16px}.announcement-body .goback a[data-v-2a328124]{color:#14a2a5}.announcement-body ul[data-v-2a328124]{width:560px;float:left;background:#fff;min-height:303px}.announcement-body ul li[data-v-2a328124]{padding:21px 0 20px;cursor:pointer;border-bottom:1px solid rgba(133,131,172,.2)}.announcement-body ul li h3[data-v-2a328124]{font-weight:400;font-size:16px;color:#333}.announcement-body ul li p[data-v-2a328124]{font-size:13px;color:#666}.announcement-body ul li .description[data-v-2a328124]{float:left;font-size:16px;line-height:20px;width:70%;font-weight:400;text-overflow:ellipsis;overflow:hidden;white-space:nowrap;color:#333}.announcement-body ul li .time[data-v-2a328124]{float:right;font-size:12px;line-height:20px;color:#999;padding-left:23px;background:url("+o(n(259))+") no-repeat 0;background-size:14px 14px}.announcement-body ul li a[data-v-2a328124]{color:#14a2a5}.announcement-body ul li.nodate[data-v-2a328124]{border-bottom:none}.announcement-body ul li.checkaritcle[data-v-2a328124]{border-bottom:none;margin-top:10px}.announcement-body ul .more[data-v-2a328124]{border-bottom:none;padding:0}.announcement-body ul[data-v-2a328124]:first-child{margin-right:80px}.page-turning[data-v-2a328124]{overflow:hidden;padding:20px;background:#fff}.page-turning .page[data-v-2a328124]{width:330px;float:right}.page-turning .page span[data-v-2a328124]{float:left;width:30px;height:30px;border:1px solid #ddd;text-align:center;line-height:30px;margin-right:10px;font-size:12px;color:#666}.page-turning .page .dot[data-v-2a328124]{border:none;margin-right:0}.page-turning .page .mgr0[data-v-2a328124],.page-turning .page .page-down[data-v-2a328124]{margin-right:0}.page-turning .page span.cur_page[data-v-2a328124]{background:#14a2a5;color:#fff}",""])}};