(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{1461:function(e,t,o){"use strict";var r=o(990);o.n(r).a},1462:function(e,t,o){var r=o(33);(e.exports=o(4)(!1)).push([e.i,".term[data-v-57c5644e]{width:100%;background:#fff}.term .head[data-v-57c5644e]{overflow:hidden;line-height:40px;font-size:16px;font-weight:600;padding:0 10px 0 20px;color:#333;border-bottom:1px solid #f0eff7}.term .head .titles[data-v-57c5644e]{float:left}.term .head .closes[data-v-57c5644e]{float:right;width:20px;height:20px;background:url("+r(o(701))+") no-repeat 50%;background-size:80% auto;margin-top:11px}.term .body[data-v-57c5644e]{overflow-y:scroll}.term .body h1[data-v-57c5644e]{font-size:20px;text-align:center}.term .body .area h2[data-v-57c5644e]{font-size:16px;font-weight:700;margin-top:20px}.term .body .area p[data-v-57c5644e]{overflow:hidden;margin-top:10px;font-size:14px;line-height:20px}.term .body .area p span[data-v-57c5644e]{float:left;color:#333}.term .body .area p span.disc[data-v-57c5644e]{width:877px}.body[data-v-57c5644e]::-webkit-scrollbar{width:6px}.body[data-v-57c5644e]::-webkit-scrollbar-thumb{background:#e1e0ec;border-radius:3px}",""])},1740:function(e,t,o){"use strict";o.r(t);o(34);var r={name:"clause",layout:"m-default",data:function(){return{service:{},serviceDate:[]}},mounted:function(){this.getArticleList("654641")},methods:{getArticleList:function(e){var t=this,o={pageindex:1,pagesize:10,articeid:e};this.$store.dispatch("com_article_info_get",o).then((function(e){var data=e.data;data&&(data.title=data.title.split(t.lang+"-")[1],t.service=data)}))},close:function(){this.$emit("close")}}},c=(o(1461),o(9)),component=Object(c.a)(r,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("div",{staticClass:"term"},[o("div",[o("div",{directives:[{name:"bar",rawName:"v-bar"}],staticClass:"body"},[o("div",[o("h1",[e._v(e._s(e.service.title))]),e._v(" "),o("div",{staticClass:"area"},[o("p",{domProps:{innerHTML:e._s(e.service.remark)}},[e._v("\n              "+e._s(e.service.remark)+"\n            ")])])])])])])])}),[],!1,null,"57c5644e",null);t.default=component.exports},701:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAoklEQVQ4T2M8evSBN8P/f4kCgopR2tqMvxiIAFev/mf78P7+MgZGpvmMR4/cW8Pw/38wIwPDFn4hpWBChoA0f3x3b+1/BgYfBkbGtYzIAoQMwaaWEeRiYgzBpQZsACFD8FkANwCXISBxmJ+xeRHFAGyGgMRAAYYrfDAMQDcExMcXuNQ3AD3ASPICttAmOhDxRRXBaKQoIRGjGV9iozwzUZqdAd3Q/P9h1pssAAAAAElFTkSuQmCC"},990:function(e,t,o){var content=o(1462);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(5).default)("5d2e5ace",content,!0,{sourceMap:!1})}}]);