exports.ids=[25],exports.modules={1e3:function(t,e,n){"use strict";n.r(e);var o=n(596),d=n.n(o);for(var r in o)"default"!==r&&function(t){n.d(e,t,(function(){return o[t]}))}(r);e.default=d.a},1001:function(t,e,n){var o=n(8);(t.exports=n(1)(!1)).push([t.i,".loading[data-v-a188db8a]{min-height:500px}.hex-flex_auto[data-v-a188db8a]{background:#fff}.headline[data-v-a188db8a]{font-size:30px;color:#333;font-weight:400}.inner[data-v-a188db8a]{margin-top:23px}.des[data-v-a188db8a]{margin-top:10px}.announcement[data-v-a188db8a]{background:#14a2a5}.announcement .announcement-head[data-v-a188db8a]{width:1200px;margin:0 auto;height:76px}.announcement .announcement-head h1[data-v-a188db8a]{padding-left:60px;float:left;line-height:45px;color:#fff;font-size:22px;font-weight:400;background:url("+o(n(295))+") no-repeat 0;background-size:auto 85%}.announcement .announcement-head .search[data-v-a188db8a]{width:300px;float:right;height:36px;margin-top:20px;overflow:hidden}.announcement .announcement-head .search input[data-v-a188db8a]{width:240px;line-height:36px;padding-left:10px;font-size:14px}.announcement .announcement-head .search button[data-v-a188db8a]{width:60px;height:36px;color:#fff;font-size:14px;text-align:center;background:linear-gradient(135deg,#0087e6,#0076e6)}.announcement-body[data-v-a188db8a]{width:1200px;margin:auto auto 20px;min-height:500px}.announcement-body .goback[data-v-a188db8a]{cursor:pointer;font-size:14px;color:#14a2a5;margin:30px 0;background-size:16px 16px}.announcement-body .goback a[data-v-a188db8a]{color:#14a2a5}.announcement-body ul[data-v-a188db8a]{background:#fff}.announcement-body ul li[data-v-a188db8a]{padding:20px 0;cursor:pointer;border-bottom:1px solid rgba(133,131,172,.2)}.announcement-body ul li .pic[data-v-a188db8a]{width:291px;margin:120px auto 0}.announcement-body ul li .pic .tip[data-v-a188db8a]{text-align:center;font-size:14px;color:#dddde4;line-height:22px;margin-top:8px}.announcement-body ul li h3[data-v-a188db8a]{font-size:16px;font-weight:400;color:#333}.announcement-body ul li p[data-v-a188db8a]{font-size:13px;color:#666}.announcement-body ul li .description[data-v-a188db8a]{float:left;line-height:20px;width:80%;text-overflow:ellipsis;overflow:hidden;white-space:nowrap}.announcement-body ul li .time[data-v-a188db8a]{float:right;font-size:12px;line-height:20px;color:#999;padding-left:23px;background:url("+o(n(262))+") no-repeat 0;background-size:14px 14px}.announcement-body ul li.articleNone[data-v-a188db8a]{border-bottom:none;margin-bottom:150px}.announcement-body ul .more[data-v-a188db8a]{border-bottom:none;padding:0}.page-turning[data-v-a188db8a]{overflow:hidden;padding:20px;background:#fff}.page-turning .page[data-v-a188db8a]{width:330px;float:right}.page-turning .page span[data-v-a188db8a]{float:left;width:30px;height:30px;border:1px solid #ddd;text-align:center;line-height:30px;margin-right:10px;font-size:12px;color:#666}.page-turning .page .dot[data-v-a188db8a]{border:none;margin-right:0}.page-turning .page .mgr0[data-v-a188db8a],.page-turning .page .page-down[data-v-a188db8a]{margin-right:0}.page-turning .page span.cur_page[data-v-a188db8a]{background:#14a2a5;color:#fff}",""])},1243:function(t,e,n){"use strict";n.r(e);var o={name:"help-question",components:{"hex-more":n(44).a},data(){return{loading:!1,total:"",lang:this.$store.state.hex_lang.locale,coinData:[],orderState:!0,search:"",filterData:[],pagesIndex:0,pageSize:10,orderModel:{menutype:3580,pageindex:1,pagesize:1e3}}},watch:{"$store.state.hex_lang.locale":function(t){this.lang=t,this.$router.push("/help")}},mounted(){this.loading=!0,this.getData(1)},methods:{handChange(t){this.getData(t)},todetail(data,title){data.articlehref?window.location.href=data.articlehref:this.$router.push({name:"help-help-detail",query:{type:3580,id:data.id,title:title}})},getData(t){this.$store.dispatch("com_article_search",this.orderModel).then(e=>{if(e.data&&e.data.pagedata.length>0){let n=[];e.data.pagedata.map(t=>{-1!=t.title.indexOf(this.lang+"-")&&(t.title=t.title.split(this.lang+"-")[1],n.push(t))}),this.coinData=n,this.total=n.length,this.coinData=n.slice(10*(t-1),10*t)}else this.coinData=[],this.total=0;this.total>10?this.total=this.total:this.total=0,this.loading=!1})}}},d=n(3);var component=Object(d.a)(o,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"hex-flex"},[t._ssrNode('<div class="hex-flex_auto" data-v-a188db8a>',"</div>",[t._ssrNode('<div class="announcement-body" data-v-a188db8a>',"</div>",[t._ssrNode('<div class="goback" data-v-a188db8a>',"</div>",[o("nuxt-link",{attrs:{to:"/help"}},[t._v(t._s(t.$t("home.footerHelp")))]),t._ssrNode(t._ssrEscape("\n        > "+t._s(t.$t("patch.FAQ"))+"\n      "))],2),t._ssrNode(' <div class="headline" data-v-a188db8a>'+t._ssrEscape("\n        "+t._s(t.$t("patch.FAQ"))+"\n      ")+"</div> "),t._ssrNode('<div class="inner ovh" data-v-a188db8a>',"</div>",[o("ul",{directives:[{name:"hex-loading",rawName:"v-hex-loading",value:t.loading,expression:"loading"}],staticClass:"loading por"},[t._ssrNode(t._ssrList(t.coinData,(function(e){return"<li data-v-a188db8a><div data-v-a188db8a><h3 data-v-a188db8a>"+t._ssrEscape(t._s(e.title))+'</h3> <div class="ovh des" data-v-a188db8a><p class="description" data-v-a188db8a>'+t._ssrEscape(t._s(e.shortdesc))+'</p> <p class="time" data-v-a188db8a>'+t._ssrEscape("\n                  "+t._s(t.global_get_local_time(e.updatetime).format("YYYY-MM-DD HH:mm:ss"))+"\n                ")+"</p></div></div></li>"}))+" "+(t.coinData.length<=0&&""!=t.total?'<li class="articleNone" data-v-a188db8a><div class="pic" data-v-a188db8a><img'+t._ssrAttr("src",n(345))+' alt data-v-a188db8a> <p class="tip" data-v-a188db8a>'+t._ssrEscape(t._s(t.$t("patch.noArticle")))+"</p></div></li>":"\x3c!----\x3e"))]),t._ssrNode(" "),t.total>0?t._ssrNode('<div class="paging-source" data-v-a188db8a>',"</div>",[o("el-pagination",{attrs:{background:"","page-size":10,"popper-class":"paging",layout:"prev, pager, next",total:t.total},on:{"current-change":t.handChange}})],1):t._e()],2)],2)])])}),[],!1,(function(t){var e=n(1e3);e.__inject__&&e.__inject__(t)}),"a188db8a","a37a8eb8");e.default=component.exports},262:function(t,e,n){t.exports=n.p+"img/ab34af3.svg"},295:function(t,e,n){t.exports=n.p+"img/ae6a3e9.png"},345:function(t,e,n){t.exports=n.p+"img/a5cf91b.svg"},596:function(t,e,n){var content=n(1001);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);var o=n(2).default;t.exports.__inject__=function(t){o("658aa4b6",content,!0,t)}}};