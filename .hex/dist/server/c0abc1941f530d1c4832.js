exports.ids=[1],exports.modules={1226:function(t,l,e){"use strict";e.r(l);var c={name:"activity-all",components:{activityList:e(659).a},data:()=>({time:[{value:"选项1",label:"全部"},{value:"选项2",label:"最近一个月"},{value:"选项3",label:"最近三个月"},{value:"选项4",label:"最近六个月"},{value:"选项5",label:"最近一年"}],month:"全部",activityType:"全部"})},d=e(3);var component=Object(d.a)(c,(function(){var t=this,l=t.$createElement,e=t._self._c||l;return e("div",{staticClass:"all-activity"},[t._ssrNode('<div class="all-countent" data-v-a40a6194>',"</div>",[t._ssrNode('<div class="all-head" data-v-a40a6194>',"</div>",[t._ssrNode('<p class="crumbs" data-v-a40a6194><span data-v-a40a6194>活动中心</span>\n        &gt;\n        <span data-v-a40a6194>全部活动</span></p> <p class="all-headline" data-v-a40a6194>\n        全部活动\n      </p> '),t._ssrNode('<div class="all-filter set-el-select-style" data-v-a40a6194>',"</div>",[t._ssrNode('<div class="all-activity-time " data-v-a40a6194>',"</div>",[t._ssrNode("<p data-v-a40a6194>活动时间</p> "),e("el-select",{attrs:{placeholder:"请选择"},model:{value:t.month,callback:function(l){t.month=l},expression:"month"}},t._l(t.time,(function(t){return e("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)],2),t._ssrNode(" "),t._ssrNode('<div class="all-activity-type " data-v-a40a6194>',"</div>",[t._ssrNode("<p data-v-a40a6194>活动类型</p> "),e("el-select",{attrs:{placeholder:"请选择"},model:{value:t.activityType,callback:function(l){t.activityType=l},expression:"activityType"}},t._l(t.time,(function(t){return e("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)],2),t._ssrNode(' <div class="all-activity-search " data-v-a40a6194><p data-v-a40a6194>活动关键词</p> <input type="text" placeholder="支持标签、关键词等搜索" data-v-a40a6194></div>')],2)],2),t._ssrNode(" "),e("activity-list")],2)])}),[],!1,(function(t){var l=e(913);l.__inject__&&l.__inject__(t)}),"a40a6194","898600da");l.default=component.exports},375:function(t,l,e){var content=e(475);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);var c=e(2).default;t.exports.__inject__=function(t){c("4640146e",content,!0,t)}},474:function(t,l,e){"use strict";e.r(l);var c=e(375),d=e.n(c);for(var r in c)"default"!==r&&function(t){e.d(l,t,(function(){return c[t]}))}(r);l.default=d.a},475:function(t,l,e){(t.exports=e(1)(!1)).push([t.i,".activity-list ul li[data-v-0566f178]{display:flex;flex-direction:row;padding:20px 0;border-bottom:1px solid #f0f0f0}.activity-list ul li .product-picture[data-v-0566f178]{width:320px;height:180px;background:#bdbbbb;margin-right:20px}.activity-list ul li .product-description[data-v-0566f178]{font-size:14px;color:#999}.activity-list ul li .product-description .headline[data-v-0566f178]{font-size:20px;font-weight:600;color:#333;line-height:28px}.activity-list ul li .product-description .newUser[data-v-0566f178]{margin-top:15px}.activity-list ul li .product-description .label[data-v-0566f178]{margin-top:20px}.activity-list ul li .product-description .label button[data-v-0566f178]{font-size:12px;padding:4px 10px;color:#fff;margin-right:10px;border-radius:2px;background:#14a2a5}.activity-list ul li .product-description .activity-time[data-v-0566f178]{margin-top:18px;color:#14a2a5}.activity-list ul li .product-description .activity-time span[data-v-0566f178]{color:#999}",""])},578:function(t,l,e){var content=e(914);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);var c=e(2).default;t.exports.__inject__=function(t){c("f77af9c6",content,!0,t)}},659:function(t,l,e){"use strict";var c={name:"activity-list"},d=e(3);var component=Object(d.a)(c,(function(){var t=this.$createElement,l=this._self._c||t;return l("div",{staticClass:"activity-list"},[this._ssrNode("<ul data-v-0566f178>"+this._ssrList(10,(function(t){return'<li data-v-0566f178><div class="product-picture" data-v-0566f178><img src alt data-v-0566f178></div> <div class="product-description" data-v-0566f178><p class="headline" data-v-0566f178>【限时瓜分限时瓜分】活动期间注册并完成实名认证的用户，可参与瓜分30.000HX(满3000人激活奖金池)</p> <p class="newUser" data-v-0566f178>新用户：活动期间注册并完成实名认证的用户，可参与瓜分30.000HX(满3000人激活奖金池)</p> <p class="oldUser" data-v-0566f178>老用户：可邀请信用户参与瓜分30.0000BIX，同时获得20%反佣奖励</p> <div class="label" data-v-0566f178><button data-v-0566f178>BIX奖励</button> <button data-v-0566f178>邀请注册</button> <button data-v-0566f178>实名认证</button></div> <p class="activity-time" data-v-0566f178><span data-v-0566f178>活动时间：</span>2018年10月26日-2018年10月30日\n        </p></div></li>'}))+"</ul> "),this._ssrNode('<div class="paging-source" data-v-0566f178>',"</div>",[l("el-pagination",{attrs:{background:"",layout:"prev, pager, next",total:100}})],1)],2)}),[],!1,(function(t){var l=e(474);l.__inject__&&l.__inject__(t)}),"0566f178","a81c5aa0");l.a=component.exports},913:function(t,l,e){"use strict";e.r(l);var c=e(578),d=e.n(c);for(var r in c)"default"!==r&&function(t){e.d(l,t,(function(){return c[t]}))}(r);l.default=d.a},914:function(t,l,e){(t.exports=e(1)(!1)).push([t.i,".all-activity[data-v-a40a6194]{background:#fff}.all-activity .all-countent[data-v-a40a6194]{width:1200px;margin:auto}.all-activity .all-head .crumbs[data-v-a40a6194]{font-size:12px;padding-top:30px}.all-activity .all-head .crumbs span[data-v-a40a6194]{color:#14a2a5}.all-activity .all-head .all-headline[data-v-a40a6194]{font-size:32px;color:#333;margin-top:41px}.all-activity .all-filter[data-v-a40a6194]{margin:40px 0 50px;padding-bottom:10px;border-bottom:1px solid #e1e0ec}.all-activity .all-filter .all-activity-search[data-v-a40a6194],.all-activity .all-filter .all-activity-time[data-v-a40a6194],.all-activity .all-filter .all-activity-type[data-v-a40a6194]{width:295px;display:inline-block;margin-right:150px}.all-activity .all-filter .all-activity-search p[data-v-a40a6194],.all-activity .all-filter .all-activity-time p[data-v-a40a6194],.all-activity .all-filter .all-activity-type p[data-v-a40a6194]{color:#14a2a5;font-size:14px;line-height:14px;margin-bottom:10px}.all-activity .all-filter .all-activity-search .el-select[data-v-a40a6194],.all-activity .all-filter .all-activity-time .el-select[data-v-a40a6194],.all-activity .all-filter .all-activity-type .el-select[data-v-a40a6194]{width:300px!important}.all-activity .all-filter .all-activity-search[data-v-a40a6194]{margin-right:0}.all-activity .all-filter .all-activity-search input[data-v-a40a6194]{width:295px;height:40px;border:1px solid #e1e0ec;border-radius:4px;padding:0 15px}",""])}};