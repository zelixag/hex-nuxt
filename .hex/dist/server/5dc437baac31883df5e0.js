exports.ids=[43],exports.modules={1186:function(t,n,e){"use strict";e.r(n);var o={name:"index",layout:"m-default",components:{downitem:e(463).a},data:()=>({heightH:"",invitecode:"",IsPhone:!0,windowW:"100%"}),mounted(){this.isphone(),this.invitecode=this.$route.query.invitecode?this.$route.query.invitecode:"",this.heightH=window.innerHeight},methods:{isphone(){for(var t=navigator.userAgent,n=new Array("Android","iPhone","SymbianOS","Windows Phone","iPad","iPod"),e=!1,o=0;o<n.length;o++)if(t.indexOf(n[o])>0){e=!0;break}this.IsPhone=e},register(){this.invitecode?this.$router.push({name:"mobile-register",query:{invitecode:this.invitecode}}):this.$router.push("/mobile/register")}}},r=e(3);var component=Object(r.a)(o,(function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("div",{staticClass:"invitation",style:{height:t.heightH+"px",width:t.IsPhone?"100%":"30%",margin:t.IsPhone?"inherit":"auto"}},[t._ssrNode('<p class="invitation-title" data-v-2da85348>您好！先行者！</p> <p class="invitation-title" data-v-2da85348>欢迎来到EliteX的世界</p> <p class="invitation-experience" data-v-2da85348>开启数字资产交易新体验</p> <p class="invitation-person" data-v-2da85348>你的好友邀请你参与EliteX公测</p> <div class="register-btn" data-v-2da85348><img'+t._ssrAttr("src",e(733))+" alt data-v-2da85348></div> "),t._ssrNode('<p class="down-hex" data-v-2da85348>',"</p>",[t._ssrNode("我已经有账号，前往\n    "),o("nuxt-link",{attrs:{to:"/mobile/download",tag:"span"}},[t._v("下载EliteX APP")])],2),t._ssrNode(" "),o("downitem")],2)}),[],!1,(function(t){var n=e(734);n.__inject__&&n.__inject__(t)}),"2da85348","60b7a4a5");n.default=component.exports},326:function(t,n,e){var content=e(415);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);var o=e(2).default;t.exports.__inject__=function(t){o("425fdf07",content,!0,t)}},414:function(t,n,e){"use strict";e.r(n);var o=e(326),r=e.n(o);for(var d in o)"default"!==d&&function(t){e.d(n,t,(function(){return o[t]}))}(d);n.default=r.a},415:function(t,n,e){(t.exports=e(1)(!1)).push([t.i,".down[data-v-3a94ebdc]{width:100%;height:auto;position:absolute;bottom:-5px;z-index:10}",""])},463:function(t,n,e){"use strict";var o={name:"downitem"},r=e(3);var component=Object(r.a)(o,(function(){var t=this.$createElement;return(this._self._c||t)("div",[])}),[],!1,(function(t){var n=e(414);n.__inject__&&n.__inject__(t)}),"3a94ebdc","697b2850");n.a=component.exports},503:function(t,n,e){var content=e(735);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);var o=e(2).default;t.exports.__inject__=function(t){o("01c0134b",content,!0,t)}},733:function(t,n,e){t.exports=e.p+"img/7852c48.png"},734:function(t,n,e){"use strict";e.r(n);var o=e(503),r=e.n(o);for(var d in o)"default"!==d&&function(t){e.d(n,t,(function(){return o[t]}))}(d);n.default=r.a},735:function(t,n,e){var o=e(8);(t.exports=e(1)(!1)).push([t.i,"img[data-v-2da85348]{display:block;width:100%}.invitation[data-v-2da85348]{position:relative;padding-top:8%;background:url("+o(e(736))+") no-repeat 0 0;height:100%;width:100%;background-size:100% 100%}.invitation .invitation-title[data-v-2da85348]{font-size:32px;color:#4169aa;letter-spacing:1px;text-align:center;line-height:32px}.invitation .invitation-title[data-v-2da85348]:first-child{margin-bottom:10px}.invitation .invitation-experience[data-v-2da85348]{font-size:18px;color:#4169aa;letter-spacing:0;text-align:center;line-height:26px;margin-top:2.2%}.invitation .invitation-person[data-v-2da85348]{font-size:15px;color:#344b6c;letter-spacing:0;text-align:center;margin-top:1.2%}.invitation .invitation-person span[data-v-2da85348]{font-size:15px;color:#03bf7b;letter-spacing:0;text-align:center;line-height:21px}.invitation .head-award[data-v-2da85348]{width:60%;height:4.2%;margin:1.3% auto auto}.invitation .register-btn[data-v-2da85348]{width:44.8%;height:7.5%;margin:3.7% auto}.invitation .down-hex[data-v-2da85348]{text-align:center}.invitation .down-hex span[data-v-2da85348]{color:#14a2a5}",""])},736:function(t,n,e){t.exports=e.p+"img/2f1d6db.png"}};