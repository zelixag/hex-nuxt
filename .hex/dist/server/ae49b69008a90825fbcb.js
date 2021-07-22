exports.ids=[31],exports.modules={1008:function(t,e,n){"use strict";n.r(e);var o=n(598),d=n.n(o);for(var c in o)"default"!==c&&function(t){n.d(e,t,(function(){return o[t]}))}(c);e.default=d.a},1009:function(t,e,n){var o=n(8);(t.exports=n(1)(!1)).push([t.i,".loading[data-v-4c059b24]{min-height:500px}.hex-flex_auto[data-v-4c059b24]{background:#fff}.headline[data-v-4c059b24]{font-size:30px;color:#333;font-weight:400}.inner[data-v-4c059b24]{margin-top:23px}.des[data-v-4c059b24]{margin-top:10px}.announcement[data-v-4c059b24]{background:#14a2a5}.announcement .announcement-head[data-v-4c059b24]{width:1200px;margin:0 auto;height:76px}.announcement .announcement-head h1[data-v-4c059b24]{padding-left:60px;float:left;line-height:45px;color:#fff;font-size:22px;font-weight:400;background:url("+o(n(292))+") no-repeat 0;background-size:auto 85%}.announcement .announcement-head .search[data-v-4c059b24]{width:300px;float:right;height:36px;margin-top:20px;overflow:hidden}.announcement .announcement-head .search input[data-v-4c059b24]{width:240px;line-height:36px;padding-left:10px;font-size:14px}.announcement .announcement-head .search button[data-v-4c059b24]{width:60px;height:36px;color:#fff;font-size:14px;text-align:center;background:linear-gradient(135deg,#0087e6,#0076e6)}.announcement-body[data-v-4c059b24]{width:1200px;margin:auto auto 40px;min-height:500px}.announcement-body .goback[data-v-4c059b24]{cursor:pointer;font-size:14px;color:#14a2a5;margin:30px 0;background-size:16px 16px}.announcement-body .goback a[data-v-4c059b24]{color:#14a2a5}.announcement-body ul[data-v-4c059b24]{background:#fff}.announcement-body ul li[data-v-4c059b24]{padding:20px 0;cursor:pointer;border-bottom:1px solid rgba(133,131,172,.2)}.announcement-body ul li .pic[data-v-4c059b24]{width:291px;margin:120px auto 0}.announcement-body ul li .pic .tip[data-v-4c059b24]{text-align:center;font-size:14px;color:#dddde4;line-height:22px;margin-top:8px}.announcement-body ul li h3[data-v-4c059b24]{font-weight:400;font-size:16px;color:#333}.announcement-body ul li p[data-v-4c059b24]{font-size:13px;color:#666}.announcement-body ul li .description[data-v-4c059b24]{float:left;line-height:20px;width:80%;text-overflow:ellipsis;overflow:hidden;white-space:nowrap}.announcement-body ul li .time[data-v-4c059b24]{float:right;font-size:12px;line-height:20px;color:#999;padding-left:23px;background:url("+o(n(259))+") no-repeat 0;background-size:14px 14px}.announcement-body ul li.articleNone[data-v-4c059b24]{border-bottom:none;margin-bottom:150px}.announcement-body ul .more[data-v-4c059b24]{border-bottom:none;padding:0}.page-turning[data-v-4c059b24]{overflow:hidden;padding:20px;background:#fff}.page-turning .page[data-v-4c059b24]{width:330px;float:right}.page-turning .page span[data-v-4c059b24]{float:left;width:30px;height:30px;border:1px solid #ddd;text-align:center;line-height:30px;margin-right:10px;font-size:12px;color:#666}.page-turning .page .dot[data-v-4c059b24]{border:none;margin-right:0}.page-turning .page .mgr0[data-v-4c059b24],.page-turning .page .page-down[data-v-4c059b24]{margin-right:0}.page-turning .page span.cur_page[data-v-4c059b24]{background:#14a2a5;color:#fff}",""])},1245:function(t,e,n){"use strict";n.r(e);var o={name:"help-coin",components:{"hex-more":n(43).a},data(){return{loading:!1,total:"",lang:this.$store.state.hex_lang.locale,coinData:[],orderState:!0,search:"",filterData:[],pagesIndex:0,pageSize:10,orderModel:{menutype:3913,pageindex:1,pagesize:1e3}}},watch:{"$store.state.hex_lang.locale":function(t){this.lang=t,this.$router.push("/help")}},mounted(){this.loading=!0,this.getData(1)},methods:{handChange(t){this.getData(t)},todetail(data,title){data.articlehref?window.location.href=data.articlehref:this.$router.push({name:"help-help-detail",query:{type:3913,id:data.id,title:title}})},getData(t){this.$store.dispatch("com_article_search",this.orderModel).then(e=>{if(e.data&&e.data.pagedata.length>0){let n=[];e.data.pagedata.map(t=>{-1!=t.title.indexOf(this.lang+"-")&&(t.title=t.title.split(this.lang+"-")[1],n.push(t))}),this.total=n.length,this.coinData=n.slice(10*(t-1),10*t)}else this.coinData=[],this.total=0;this.total>10?this.total=this.total:this.total=0,this.loading=!1})}}},d=n(3);var component=Object(d.a)(o,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"hex-flex"},[t._ssrNode('<div class="hex-flex_auto" data-v-4c059b24>',"</div>",[t._ssrNode('<div class="announcement-body" data-v-4c059b24>',"</div>",[t._ssrNode('<div class="goback" data-v-4c059b24>',"</div>",[o("nuxt-link",{attrs:{to:"/help"}},[t._v(t._s(t.$t("home.footerHelp")))]),t._ssrNode(t._ssrEscape("\n        > "+t._s(t.$t("c2c.Beginner"))+"\n      "))],2),t._ssrNode(' <div class="headline" data-v-4c059b24>'+t._ssrEscape("\n        "+t._s(t.$t("c2c.Beginner"))+"\n      ")+"</div> "),t._ssrNode('<div class="inner ovh" data-v-4c059b24>',"</div>",[o("ul",{directives:[{name:"hex-loading",rawName:"v-hex-loading",value:t.loading,expression:"loading"}],staticClass:"loading por"},[t._ssrNode(t._ssrList(t.coinData,(function(e){return"<li data-v-4c059b24><div data-v-4c059b24><h3 data-v-4c059b24>"+t._ssrEscape(t._s(e.title))+'</h3> <div class="ovh des" data-v-4c059b24><p class="description" data-v-4c059b24>'+t._ssrEscape(t._s(e.shortdesc))+'</p> <p class="time" data-v-4c059b24>'+t._ssrEscape("\n                  "+t._s(t.global_get_local_time(e.updatetime).format("YYYY-MM-DD HH:mm:ss"))+"\n                ")+"</p></div></div></li>"}))+" "+(t.coinData.length<=0&&""!=t.total?'<li class="articleNone" data-v-4c059b24><div class="pic" data-v-4c059b24><img'+t._ssrAttr("src",n(342))+' alt data-v-4c059b24> <p class="tip" data-v-4c059b24>'+t._ssrEscape(t._s(t.$t("patch.noArticle")))+"</p></div></li>":"\x3c!----\x3e"))]),t._ssrNode(" "),t.total>0?t._ssrNode('<div class="paging-source" data-v-4c059b24>',"</div>",[o("el-pagination",{attrs:{background:"","page-size":10,"popper-class":"paging",layout:"prev, pager, next",total:t.total},on:{"current-change":t.handChange}})],1):t._e()],2)],2)])])}),[],!1,(function(t){var e=n(1008);e.__inject__&&e.__inject__(t)}),"4c059b24","edbb6132");e.default=component.exports},259:function(t,e,n){t.exports=n.p+"img/ab34af3.svg"},292:function(t,e,n){t.exports=n.p+"img/ae6a3e9.png"},342:function(t,e,n){t.exports=n.p+"img/a5cf91b.svg"},598:function(t,e,n){var content=n(1009);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);var o=n(2).default;t.exports.__inject__=function(t){o("f8332284",content,!0,t)}}};