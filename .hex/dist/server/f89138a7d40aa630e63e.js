exports.ids=[19],exports.modules={1179:function(t,e,n){"use strict";n.r(e);var r=n(658),o=n(462),l=n(660),c=n(411),d={name:"Home",components:{carousel:r.a,slide:o.a,product:l.a,"financial-button":c.a},watch:{"$store.state.hex_lang.locale":function(t){this.lang=t,this.getArticle()}},async asyncData({store:t,params:e,redirect:n}){const{data:data}=await t.dispatch("finance_product_search",{status:null,currencyid:null,type:null,cyclestart:null,cycleend:null,bannerindex:1,bannerrows:4});let r=data&&data.pagedata.length>0?data.pagedata:[];return{recommendBannel:r.shift(),listBanner:r}},data(){return{swiperBannel:[],recommendBannel:null,listBanner:[],areaList:[],areaListLoading:!0,lang:this.$store.state.hex_lang.locale}},methods:{getArticle(){this.$store.dispatch("com_article_search",{menutype:3981,pageindex:1,pagesize:12}).then(t=>{this.swiperBannel=t.data&&t.data.pagedata?t.data.pagedata:[]})},getProductSearch(){this.$store.dispatch("finance_product_search",{status:null,currencyid:null,type:null,cyclestart:null,cycleend:null,bannerindex:1,bannerrows:4}).then(({data:data})=>{data&&data.pagedata.length>0&&(this.recommendBannel=data.pagedata.shift(),this.listBanner=data.pagedata)})},getAreaList(){this.areaListLoading=!0,this.$store.dispatch("finance_areas_getlist").then(({data:data})=>{data&&(this.areaList=data.sort((t,e)=>t.displayorder-e.displayorder)),this.areaListLoading=!1})},goRush(t){this.$router.push({path:"/financial/"+t})},goLookMore(t){let e={};0==t.areatype?e.currencyid=t.currencyid:1==t.areatype||2==t.areatype&&(e.status=2),this.$router.push({name:"financial-list",query:e})}},mounted(){this.getArticle(),this.getAreaList()},created(){}},h=n(3);var component=Object(h.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"financial-content"},[t._ssrNode('<div class="financial" data-v-1209a053>',"</div>",[t._ssrNode('<div class="banner-group clearfix" data-v-1209a053>',"</div>",[t._ssrNode('<div class="banner-swiper1" data-v-1209a053>',"</div>",[r("no-ssr",[r("carousel",{attrs:{perPage:1,speed:500,autoplay:!0,autoplayTimeout:6500}},t._l(t.swiperBannel,(function(t){return r("slide",{key:t.id},[t.articlehref?r("a",{attrs:{href:t.articlehref,target:"_blank"}},[r("img",{staticClass:"banner-swiper1_img",attrs:{src:t.imgurl,alt:""}})]):r("img",{staticClass:"banner-swiper1_img",attrs:{src:t.imgurl,alt:""}})])})),1)],1)],1),t._ssrNode(" "),t._ssrNode('<div class="banner-swiper2" data-v-1209a053>',"</div>",[t.recommendBannel?t._ssrNode('<div class="banner-swiper2-content" data-v-1209a053>',"</div>",[t._ssrNode('<p class="recommend" data-v-1209a053>'+t._ssrEscape(t._s(t.$t("manage.Popular")))+"</p> "+(t.recommendBannel.pronames?'<p class="title" data-v-1209a053>'+t._ssrEscape("\n            "+t._s("en_us"==t.lang?t.recommendBannel.pronames.en_us:t.recommendBannel.pronames.zh_cn))+"</p>":'<p class="title" data-v-1209a053>'+t._ssrEscape(t._s(t.recommendBannel.name))+"</p>")+' <p class="date" data-v-1209a053>'+t._ssrEscape(t._s(t.$t("manage.LimitTime"))+" "+t._s(t.recommendBannel.cycle)+" "+t._s(t.$t("manage.Day")))+'</p> <p class="rate" data-v-1209a053>'+t._ssrEscape(t._s((100*t.recommendBannel.yearlyrate).toFixed(2))+"%")+'</p> <p class="rate_tip" data-v-1209a053>'+t._ssrEscape(t._s(t.$t("manage.Estimate")))+"</p> "),r("financial-button",{attrs:{product:t.recommendBannel}})],2):t._e()])],2)]),t._ssrNode(" "),t._ssrNode('<div class="banner-swiper3" data-v-1209a053>',"</div>",[r("no-ssr",[r("carousel",{attrs:{perPage:3,paginationEnabled:!1}},t._l(t.listBanner,(function(e){return r("slide",{key:e.id},[r("div",{staticClass:"banner-swiper3-content",on:{click:function(n){return t.goRush(e.id)}}},[e.pronames?r("p",{staticClass:"title"},[t._v(t._s("en_us"==t.lang?e.pronames.en_us:e.pronames.zh_cn))]):r("p",{staticClass:"title"},[t._v(t._s(e.name))]),t._v(" "),r("p",{staticClass:"clearfix"},[r("span",{staticClass:"rate left"},[t._v(t._s((100*e.yearlyrate).toFixed(2))+"%")]),t._v(" "),r("financial-button",{staticClass:"right",attrs:{product:e}})],1),t._v(" "),r("p",{staticClass:"rate_tip"},[t._v(t._s(t.$t("manage.Estimate")))])])])})),1)],1)],1),t._ssrNode(" "),r("div",{directives:[{name:"hex-loading",rawName:"v-hex-loading",value:t.areaListLoading,expression:"areaListLoading"}],staticClass:"financial financial-block-main"},[t._l(t.areaList,(function(e,o){return[t._ssrNode('<div class="financial-block-title clearfix" data-v-1209a053>'+(0==e.areatype?'<div class="title left" data-v-1209a053><img'+t._ssrAttr("src",e.products[0].currencyicon)+' alt class="title_icon" data-v-1209a053> <span class="title_tip" data-v-1209a053>'+t._ssrEscape(t._s(e.currencyname.toUpperCase())+" "+t._s(t.$t("manage.Area")))+"</span></div>":1==e.areatype?'<div class="title left" data-v-1209a053><img'+t._ssrAttr("src",n(692))+' alt class="title_icon" data-v-1209a053> <span class="title_tip" data-v-1209a053>'+t._ssrEscape(t._s(t.$t("manage.Cooperation")))+"</span></div>":2==e.areatype?'<div class="title left" data-v-1209a053><img'+t._ssrAttr("src",n(693))+' alt class="title_icon" data-v-1209a053> <span class="title_tip" data-v-1209a053>'+t._ssrEscape(t._s(t.$t("manage.products")))+"</span></div>":"\x3c!----\x3e")+' <span class="more right" data-v-1209a053>'+t._ssrEscape(t._s(t.$t("manage.ViewAll"))+" >>")+"</span></div> "),t._ssrNode('<div class="financial-block clearfix" data-v-1209a053>',"</div>",t._l(e.products,(function(t,e){return r("product",{key:e,staticStyle:{cursor:"pointer"},attrs:{product:t}})})),1)]}))],2)],2)}),[],!1,(function(t){var e=n(694);e.__inject__&&e.__inject__(t);var r=n(696);r.__inject__&&r.__inject__(t)}),"1209a053","2fc97808");e.default=component.exports},376:function(t,e,n){var content=n(480);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);var r=n(2).default;t.exports.__inject__=function(t){r("4daddb42",content,!0,t)}},377:function(t,e,n){var content=n(482);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);var r=n(2).default;t.exports.__inject__=function(t){r("03f59a62",content,!0,t)}},378:function(t,e,n){var content=n(484);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);var r=n(2).default;t.exports.__inject__=function(t){r("ce84c696",content,!0,t)}},379:function(t,e,n){var content=n(486);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);var r=n(2).default;t.exports.__inject__=function(t){r("0bf879e2",content,!0,t)}},380:function(t,e,n){var content=n(488);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);var r=n(2).default;t.exports.__inject__=function(t){r("4a131885",content,!0,t)}},411:function(t,e,n){"use strict";var r=n(48),o=n.n(r),l={name:"finbutton",props:{text:"",isBuy:{type:Boolean,default:!1},product:{type:Object,default:function(){return{}}}},data(){return{lang:this.$store.state.hex_lang.locale,countDown:"--",timer:null,copeProduct:Object.assign({},this.product)}},computed:{getSur:function(){return this.$np.minus(this.product.expectamount,this.product.selledamount)<=0}},watch:{"$store.state.hex_lang.locale":function(t){this.lang=t,this.startDown()}},methods:{startDown(){const time=this.global_get_local_time(this.copeProduct.startselltime),t=this.global_get_local_time(new Date),e=o.a.duration(time-t),n=e.asDays(),r=e.asHours();if(e.asSeconds()>0){let t=e.minutes();t=t<10?"0"+t:t;let o=e.hours();o=o<10?"0"+o:o;let l=e.days();n>7?this.countDown=time.format("YYYY-MM-DD HH:mm:ss")+this.$t("manage.BStart"):r>24?"en_us"==this.lang?this.countDown=this.$t("manage.Starts")+l+this.$t("manage.Startdays"):this.countDown=l+this.$t("manage.Startdays")+this.$t("manage.Starts"):r>1?"en_us"==this.lang?this.countDown=this.$t("manage.Starts")+` ${o} `+this.$t("deal.hour")+` ${t} `+this.$t("deal.minutes"):this.countDown=`${o} `+this.$t("deal.hour")+` ${t} `+this.$t("manage.minutes")+this.$t("manage.Starts"):"en_us"==this.lang?this.countDown=this.$t("manage.Starts")+" 00 "+this.$t("deal.hour")+` ${t} `+this.$t("deal.minutes"):this.countDown="00 "+this.$t("deal.hour")+`${t} `+this.$t("manage.minutes")+this.$t("manage.Starts")}else this.copeProduct.prostatus=1,clearTimeout(this.timer)},goRush(){this.isBuy&&this.$emit("financial:buy")}},mounted(){0==this.copeProduct.prostatus&&(this.startDown(),this.timer=setTimeout(()=>{this.startDown()},3e4))},beforeDestroy(){clearTimeout(this.timer)}},c=n(3);var component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return 1!=t.copeProduct.prostatus||t.getSur?1==t.copeProduct.prostatus&&t.getSur?n("button",{staticClass:"rush no_rush"},[t._ssrNode(t._ssrEscape(t._s(t.$t("manage.soldOut"))))]):2==t.copeProduct.prostatus||3==t.copeProduct.prostatus?n("button",{staticClass:"rush no_rush"},[t._ssrNode(t._ssrEscape("\n  "+t._s(t.$t("manage.Over"))+"\n"))]):0==t.copeProduct.prostatus?n("button",{staticClass:"rush no_rush"},[t._ssrNode(t._ssrEscape(t._s(t.countDown)))]):t._e():n("button",{staticClass:"rush",on:{click:t.goRush}},[t._ssrNode(t._ssrEscape("\n  "+t._s(t.text?t.text:t.$t("manage.Buynow"))+"\n"))],2)}),[],!1,(function(t){}),"92489b8e","600064d0");e.a=component.exports},462:function(t,e,n){"use strict";var r={name:"slide",data:()=>({width:null}),inject:["carousel"],mounted(){this.$isServer||this.$el.addEventListener("dragstart",t=>t.preventDefault()),this.$el.addEventListener(this.carousel.isTouch?"touchend":"mouseup",this.onTouchEnd)},computed:{activeSlides(){const{currentPage:t,perPage:e,$children:n,slideCount:r}=this.carousel,o=[],l=n.filter(t=>t.$el&&t.$el.className.indexOf("VueCarousel-slide")>=0).map(t=>t._uid);let i=0;for(;i<e;){const n=l[t*e+i];o.push(n),i++}return o},isActive(){return this.activeSlides.indexOf(this._uid)>=0},isCenter(){const{perPage:t}=this.carousel;return!(t%2==0||!this.isActive)&&this.activeSlides.indexOf(this._uid)===Math.floor(t/2)}},methods:{onTouchEnd(t){const e=this.carousel.isTouch&&t.changedTouches&&t.changedTouches.length>0?t.changedTouches[0].clientX:t.clientX,n=this.carousel.dragStartX-e;(0===this.carousel.minSwipeDistance||Math.abs(n)<this.carousel.minSwipeDistance)&&this.$emit("slideClick",Object.assign({},t.currentTarget.dataset))}}},o=n(3);var component=Object(o.a)(r,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"VueCarousel-slide",class:{"VueCarousel-slide-active":this.isActive,"VueCarousel-slide-center":this.isCenter},attrs:{tabindex:"-1"}},[this._t("default")],2)}),[],!1,(function(t){var e=n(483);e.__inject__&&e.__inject__(t)}),null,"0af98a86");e.a=component.exports},479:function(t,e,n){"use strict";n.r(e);var r=n(376),o=n.n(r);for(var l in r)"default"!==l&&function(t){n.d(e,t,(function(){return r[t]}))}(l);e.default=o.a},480:function(t,e,n){(t.exports=n(1)(!1)).push([t.i,'.VueCarousel-navigation-button[data-v-26235398]{position:absolute;top:50%;box-sizing:border-box;color:#000;text-decoration:none;-webkit-appearance:none;-moz-appearance:none;appearance:none;border:none;background-color:transparent;padding:0;cursor:pointer;outline:none}.VueCarousel-navigation-next[data-v-26235398]{right:0;transform:translateY(-50%) translateX(100%);font-family:system}.VueCarousel-navigation-prev[data-v-26235398]{left:0;transform:translateY(-50%) translateX(-100%);font-family:system}.VueCarousel-navigation--disabled[data-v-26235398]{opacity:.5;cursor:default}@font-face{font-family:system;font-style:normal;font-weight:300;src:local(".SFNSText-Light"),local(".HelveticaNeueDeskInterface-Light"),local(".LucidaGrandeUI"),local("Ubuntu Light"),local("Segoe UI Symbol"),local("Roboto-Light"),local("DroidSans"),local("Tahoma")}',""])},481:function(t,e,n){"use strict";n.r(e);var r=n(377),o=n.n(r);for(var l in r)"default"!==l&&function(t){n.d(e,t,(function(){return r[t]}))}(l);e.default=o.a},482:function(t,e,n){(t.exports=n(1)(!1)).push([t.i,".VueCarousel-pagination[data-v-2a445c16]{width:100%;text-align:center}.VueCarousel-dot-container[data-v-2a445c16]{display:inline-block;margin:0 auto;padding:0}.VueCarousel-dot[data-v-2a445c16]{display:inline-block;cursor:pointer}.VueCarousel-dot-button[data-v-2a445c16]{-webkit-appearance:none;-moz-appearance:none;appearance:none;border:none;background-color:transparent;padding:0;border-radius:100%;outline:none;cursor:pointer}.VueCarousel-dot-button[data-v-2a445c16]:focus{outline:1px solid #add8e6}",""])},483:function(t,e,n){"use strict";n.r(e);var r=n(378),o=n.n(r);for(var l in r)"default"!==l&&function(t){n.d(e,t,(function(){return r[t]}))}(l);e.default=o.a},484:function(t,e,n){(t.exports=n(1)(!1)).push([t.i,".VueCarousel-slide{flex-basis:inherit;flex-grow:0;flex-shrink:0;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-backface-visibility:hidden;backface-visibility:hidden;-webkit-touch-callout:none;outline:none}",""])},485:function(t,e,n){"use strict";n.r(e);var r=n(379),o=n.n(r);for(var l in r)"default"!==l&&function(t){n.d(e,t,(function(){return r[t]}))}(l);e.default=o.a},486:function(t,e,n){(t.exports=n(1)(!1)).push([t.i,".VueCarousel{position:relative}.VueCarousel-wrapper{width:100%;position:relative;overflow:hidden}.VueCarousel-inner{display:flex;flex-direction:row;-webkit-backface-visibility:hidden;backface-visibility:hidden}",""])},487:function(t,e,n){"use strict";n.r(e);var r=n(380),o=n.n(r);for(var l in r)"default"!==l&&function(t){n.d(e,t,(function(){return r[t]}))}(l);e.default=o.a},488:function(t,e,n){(t.exports=n(1)(!1)).push([t.i,".financial-product[data-v-28d71714]{position:relative;width:270px;height:324px;background:#fff;box-shadow:0 5px 10px 2px rgba(51,51,51,.15);text-align:center;line-height:1;transition:all .3s cubic-bezier(.645,.045,.355,1);cursor:pointer}.financial-product .icon[data-v-28d71714]{width:25px;height:25px;margin:25px auto 10px;display:block}.financial-product .title[data-v-28d71714]{color:#333;font-size:16px;margin-bottom:35px;font-weight:600;padding:0 5px}.financial-product .rate[data-v-28d71714]{font-family:HexNumber;color:#14a2a5;font-size:45px;font-weight:600;margin-bottom:10px;display:inline-block}.financial-product .rate_tip[data-v-28d71714]{margin-bottom:35px;font-size:14px;color:#999}.financial-product .process[data-v-28d71714]{width:246px;height:8px;background:#f0f0f0;border-radius:2px;margin:0 auto 10px;position:relative}.financial-product .process .process_tip[data-v-28d71714]{position:absolute;left:0;top:0;display:inline-block;border-radius:2px;height:8px;background:linear-gradient(-90deg,rgba(44,223,204,.85098),rgba(27,195,178,.72157))}.financial-product .lock[data-v-28d71714]{color:#666;font-size:14px}.financial-product .rush[data-v-28d71714]{text-align:center;line-height:44px;color:#fff;font-size:16px;background:#1bc3b2;position:absolute;bottom:0;left:0;width:100%}.financial-product .no_rush[data-v-28d71714]{background:#f8f8f8;color:#999}.financial-product[data-v-28d71714]:hover{transform:translateY(-10px)}",""])},489:function(t,e,n){var content=n(695);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);var r=n(2).default;t.exports.__inject__=function(t){r("5b6b7752",content,!0,t)}},490:function(t,e,n){var content=n(697);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);var r=n(2).default;t.exports.__inject__=function(t){r("42eec06e",content,!0,t)}},658:function(t,e,n){"use strict";var r={props:{autoplay:{type:Boolean,default:!1},autoplayTimeout:{type:Number,default:2e3},autoplayHoverPause:{type:Boolean,default:!0}},data:()=>({autoplayInterval:null}),destroyed(){this.$isServer||(this.$el.removeEventListener("mouseenter",this.pauseAutoplay),this.$el.removeEventListener("mouseleave",this.startAutoplay))},methods:{pauseAutoplay(){this.autoplayInterval&&(this.autoplayInterval=clearInterval(this.autoplayInterval))},startAutoplay(){this.autoplay&&(this.autoplayInterval=setInterval(this.advancePage,this.autoplayTimeout))},restartAutoplay(){this.pauseAutoplay(),this.startAutoplay()}},mounted(){!this.$isServer&&this.autoplayHoverPause&&(this.$el.addEventListener("mouseenter",this.pauseAutoplay),this.$el.addEventListener("mouseleave",this.startAutoplay)),this.startAutoplay()}};var o=(t,e,n)=>{let r;return()=>{const o=n&&!r;clearTimeout(r),r=setTimeout(()=>{r=null,n||t.apply(void 0)},e),o&&t.apply(void 0)}},l={name:"navigation",inject:["carousel"],props:{clickTargetSize:{type:Number,default:8},nextLabel:{type:String,default:"&#9654"},prevLabel:{type:String,default:"&#9664"}},computed:{canAdvanceForward(){return this.carousel.canAdvanceForward||!1},canAdvanceBackward(){return this.carousel.canAdvanceBackward||!1}},methods:{triggerPageAdvance(t){this.$emit("navigationclick",t)}}},c=n(3);var d=Object(c.a)(l,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"VueCarousel-navigation"},[t._ssrNode('<button type="button" aria-label="Previous page" role="button"'+t._ssrClass("VueCarousel-navigation-button VueCarousel-navigation-prev",{"VueCarousel-navigation--disabled":!t.canAdvanceBackward})+t._ssrStyle(null,"padding: "+t.clickTargetSize+"px; margin-right: -"+t.clickTargetSize+"px;",null)+" data-v-26235398>"+t._s(t.prevLabel)+'</button> <button type="button" aria-label="Next page" role="button"'+t._ssrClass("VueCarousel-navigation-button VueCarousel-navigation-next",{"VueCarousel-navigation--disabled":!t.canAdvanceForward})+t._ssrStyle(null,"padding: "+t.clickTargetSize+"px; margin-left: -"+t.clickTargetSize+"px;",null)+" data-v-26235398>"+t._s(t.nextLabel)+"</button>")])}),[],!1,(function(t){var e=n(479);e.__inject__&&e.__inject__(t)}),"26235398","2c79e60f").exports,h={name:"pagination",inject:["carousel"],computed:{pagniationCount(){return this.carousel.scrollPerPage?this.carousel.pageCount:this.carousel.slideCount-2}},methods:{goToPage(t){this.$emit("paginationclick",t)},isCurrentDot(t){return t===this.carousel.currentPage}}};var f=Object(c.a)(h,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{directives:[{name:"show",rawName:"v-show",value:t.carousel.pageCount>1,expression:"carousel.pageCount > 1"}],staticClass:"VueCarousel-pagination"},[t._ssrNode('<ul role="tablist" class="VueCarousel-dot-container" data-v-2a445c16>'+t._ssrList(t.pagniationCount,(function(e,n){return'<li aria-hidden="false" role="presentation"'+t._ssrAttr("aria-selected",t.isCurrentDot(n)?"true":"false")+t._ssrClass("VueCarousel-dot",{"VueCarousel-dot--active":t.isCurrentDot(n)})+t._ssrStyle(null,"\n        margin-top: "+2*t.carousel.paginationPadding+"px;\n        padding: "+t.carousel.paginationPadding+"px;\n      ",null)+' data-v-2a445c16><button type="button" role="button" aria-label="`Item ${index}`"'+t._ssrAttr("title","Item "+n)+t._ssrAttr("tabindex",0)+' class="VueCarousel-dot-button"'+t._ssrStyle(null,"\n          width: "+t.carousel.paginationSize+"px;\n          height: "+t.carousel.paginationSize+"px;\n          background: "+(t.isCurrentDot(n)?t.carousel.paginationActiveColor:t.carousel.paginationColor)+";\n        ",null)+" data-v-2a445c16></button></li>"}))+"</ul>")])}),[],!1,(function(t){var e=n(481);e.__inject__&&e.__inject__(t)}),"2a445c16","2acee095").exports,m=n(462);const v={onwebkittransitionend:"webkitTransitionEnd",onmoztransitionend:"transitionend",onotransitionend:"oTransitionEnd otransitionend",ontransitionend:"transitionend"},_=()=>{for(let t in v)if(t in window)return v[t]};var x={name:"carousel",beforeUpdate(){this.computeCarouselWidth()},components:{Navigation:d,Pagination:f,Slide:m.a},data:()=>({browserWidth:null,carouselWidth:0,currentPage:0,dragging:!1,dragMomentum:0,dragOffset:0,dragStartY:0,dragStartX:0,isTouch:"undefined"!=typeof window&&"ontouchstart"in window,offset:0,refreshRate:16,slideCount:0,transitionstart:"transitionstart",transitionend:"transitionend"}),mixins:[r],provide(){return{carousel:this}},props:{value:{type:Number},easing:{type:String,default:"ease"},minSwipeDistance:{type:Number,default:8},navigationClickTargetSize:{type:Number,default:8},mouseDrag:{type:Boolean,default:!0},navigationEnabled:{type:Boolean,default:!1},navigationNextLabel:{type:String,default:"&#9654"},navigationPrevLabel:{type:String,default:"&#9664"},paginationActiveColor:{type:String,default:"#000000"},paginationColor:{type:String,default:"#efefef"},paginationEnabled:{type:Boolean,default:!0},paginationPadding:{type:Number,default:10},paginationSize:{type:Number,default:10},perPage:{type:Number,default:2},perPageCustom:{type:Array},resistanceCoef:{type:Number,default:20},scrollPerPage:{type:Boolean,default:!0},speed:{type:Number,default:500},loop:{type:Boolean,default:!1},navigateTo:{type:Number,default:0},spacePadding:{type:Number,default:0},spacePaddingMaxOffsetFactor:{type:Number,default:0}},watch:{value(t){t!==this.currentPage&&(this.goToPage(t),this.render())},navigateTo:{immediate:!0,handler(t){this.$nextTick(()=>{this.goToPage(t)})}},currentPage(t){this.$emit("pageChange",t),this.$emit("input",t)}},computed:{breakpointSlidesPerPage(){if(!this.perPageCustom)return this.perPage;const t=this.perPageCustom,e=this.browserWidth,n=t.sort((a,b)=>a[0]>b[0]?-1:1).filter(t=>e>=t[0]);return n[0]&&n[0][1]||this.perPage},canAdvanceForward(){return this.loop||this.offset<this.maxOffset},canAdvanceBackward(){return this.loop||this.currentPage>0},currentPerPage(){return!this.perPageCustom||this.$isServer?this.perPage:this.breakpointSlidesPerPage},currentOffset(){return-1*(this.offset+this.dragOffset)},isHidden(){return this.carouselWidth<=0},maxOffset(){return this.slideWidth*(this.slideCount-this.currentPerPage)-this.spacePadding*this.spacePaddingMaxOffsetFactor},pageCount(){return this.scrollPerPage?Math.ceil(this.slideCount/this.currentPerPage):this.slideCount-2},slideWidth(){return(this.carouselWidth-2*this.spacePadding)/this.currentPerPage},transitionStyle(){return`${this.speed/1e3}s ${this.easing} transform`},padding(){const t=this.spacePadding;return t>0&&t}},methods:{getNextPage(){return this.currentPage<this.pageCount-1?this.currentPage+1:this.loop?0:this.currentPage},getPreviousPage(){return this.currentPage>0?this.currentPage-1:this.loop?this.pageCount-1:this.currentPage},advancePage(t){t&&"backward"===t&&this.canAdvanceBackward?this.goToPage(this.getPreviousPage(),"navigation"):(!t||t&&"backward"!==t)&&this.canAdvanceForward&&this.goToPage(this.getNextPage(),"navigation")},attachMutationObserver(){const t=window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver;if(t){const e={attributes:!0,data:!0};if(this.mutationObserver=new t(()=>{this.$nextTick(()=>{this.computeCarouselWidth()})}),this.$parent.$el){let t=this.$el.getElementsByClassName("VueCarousel-inner");for(let i=0;i<t.length;i++)this.mutationObserver.observe(t[i],e)}}},handleNavigation(t){this.advancePage(t)},detachMutationObserver(){this.mutationObserver&&this.mutationObserver.disconnect()},getBrowserWidth(){return this.browserWidth=window.innerWidth,this.browserWidth},getCarouselWidth(){let t=this.$el.getElementsByClassName("VueCarousel-inner");for(let i=0;i<t.length;i++)t[i].clientWidth>0&&(this.carouselWidth=t[i].clientWidth||0);return this.carouselWidth},getSlideCount(){this.slideCount=this.$slots&&this.$slots.default&&this.$slots.default.filter(slot=>slot.tag&&slot.tag.indexOf("slide")>-1).length||0},goToPage(t){t>=0&&t<=this.pageCount&&(this.offset=this.scrollPerPage?Math.min(this.slideWidth*this.currentPerPage*t,this.maxOffset):Math.min(this.slideWidth*t,this.maxOffset),this.autoplay&&!this.autoplayHoverPause&&this.restartAutoplay(),this.currentPage=t)},onStart(t){document.addEventListener(this.isTouch?"touchend":"mouseup",this.onEnd,!0),document.addEventListener(this.isTouch?"touchmove":"mousemove",this.onDrag,!0),this.startTime=t.timeStamp,this.dragging=!0,this.dragStartX=this.isTouch?t.touches[0].clientX:t.clientX,this.dragStartY=this.isTouch?t.touches[0].clientY:t.clientY},onEnd(t){const e=this.isTouch?t.changedTouches[0].clientX:t.clientX,n=this.dragStartX-e;if(this.dragMomentum=n/(t.timeStamp-this.startTime),0!==this.minSwipeDistance&&Math.abs(n)>=this.minSwipeDistance){const t=this.scrollPerPage?this.slideWidth*this.currentPerPage:this.slideWidth;this.dragOffset=this.dragOffset+Math.sign(n)*(t/2)}this.offset+=this.dragOffset,this.dragOffset=0,this.dragging=!1,this.render(),document.removeEventListener(this.isTouch?"touchend":"mouseup",this.onEnd,!0),document.removeEventListener(this.isTouch?"touchmove":"mousemove",this.onDrag,!0)},onDrag(t){const e=this.isTouch?t.touches[0].clientX:t.clientX,n=this.isTouch?t.touches[0].clientY:t.clientY,r=this.dragStartX-e,o=this.dragStartY-n;if(this.isTouch&&Math.abs(r)<Math.abs(o))return;t.stopImmediatePropagation(),this.dragOffset=r;const l=this.offset+this.dragOffset;l<0?this.dragOffset=-Math.sqrt(-this.resistanceCoef*this.dragOffset):l>this.maxOffset&&(this.dragOffset=Math.sqrt(this.resistanceCoef*this.dragOffset))},onResize(){this.computeCarouselWidth(),this.dragging=!0,this.render(),setTimeout(()=>{this.dragging=!1},this.refreshRate)},render(){this.offset+=Math.max(1-this.currentPerPage,Math.min(Math.round(this.dragMomentum),this.currentPerPage-1))*this.slideWidth;const t=this.scrollPerPage?this.slideWidth*this.currentPerPage:this.slideWidth;this.offset=t*Math.round(this.offset/t),this.offset=Math.max(0,Math.min(this.offset,this.maxOffset)),this.currentPage=this.scrollPerPage?Math.round(this.offset/this.slideWidth/this.currentPerPage):Math.round(this.offset/this.slideWidth)},computeCarouselWidth(){this.getSlideCount(),this.getBrowserWidth(),this.getCarouselWidth(),this.setCurrentPageInBounds()},setCurrentPageInBounds(){if(!this.canAdvanceForward&&this.scrollPerPage){const t=this.pageCount-1;this.currentPage=t>=0?t:0,this.offset=Math.max(0,Math.min(this.offset,this.maxOffset))}},handleTransitionStart(){this.$emit("transitionStart")},handleTransitionEnd(){this.$emit("transitionEnd")}},mounted(){window.addEventListener("resize",o(this.onResize,this.refreshRate)),(this.isTouch||this.mouseDrag)&&this.$refs["VueCarousel-wrapper"].addEventListener(this.isTouch?"touchstart":"mousedown",this.onStart),this.attachMutationObserver(),this.computeCarouselWidth(),this.transitionstart=_(),this.$refs["VueCarousel-inner"].addEventListener(this.transitionstart,this.handleTransitionStart),this.transitionend=_(),this.$refs["VueCarousel-inner"].addEventListener(this.transitionend,this.handleTransitionEnd)},beforeDestroy(){this.detachMutationObserver(),window.removeEventListener("resize",this.getBrowserWidth),this.$refs["VueCarousel-inner"].removeEventListener(this.transitionstart,this.handleTransitionStart),this.$refs["VueCarousel-inner"].removeEventListener(this.transitionend,this.handleTransitionEnd),this.$refs["VueCarousel-wrapper"].removeEventListener(this.isTouch?"touchstart":"mousedown",this.onStart)}};var w=Object(c.a)(x,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"VueCarousel"},[t._ssrNode('<div class="VueCarousel-wrapper">',"</div>",[t._ssrNode('<div role="listbox" class="VueCarousel-inner"'+t._ssrStyle(null,{transform:"translate("+t.currentOffset+"px, 0)",transition:t.dragging?"none":t.transitionStyle,"ms-flex-preferred-size":t.slideWidth+"px","webkit-flex-basis":t.slideWidth+"px","flex-basis":t.slideWidth+"px",visibility:t.slideWidth?"visible":"hidden","padding-left":t.padding+"px","padding-right":t.padding+"px"},null)+">","</div>",[t._t("default")],2)]),t._ssrNode(" "),t.paginationEnabled&&t.pageCount>0?n("pagination",{on:{paginationclick:function(e){return t.goToPage(e,"pagination")}}}):t._e(),t._ssrNode(" "),t.navigationEnabled?n("navigation",{attrs:{clickTargetSize:t.navigationClickTargetSize,nextLabel:t.navigationNextLabel,prevLabel:t.navigationPrevLabel},on:{navigationclick:t.handleNavigation}}):t._e()],2)}),[],!1,(function(t){var e=n(485);e.__inject__&&e.__inject__(t)}),null,"470197ca");e.a=w.exports},660:function(t,e,n){"use strict";var r=n(411),o={name:"block",props:{product:{type:Object,default:function(){return{}}}},components:{"financial-button":r.a},watch:{"$store.state.hex_lang.locale":function(t){this.lang=t,this.changeLang(t)}},data(){return{lang:this.$store.state.hex_lang.locale,Title:""}},methods:{goRush(){this.$router.push({path:"/financial/"+this.product.id})},changeLang(t){switch(t){case"en_us":this.Title=this.product.pronames.en_us;break;case"zh_cn":this.Title=this.product.pronames.zh_cn;break;case"ja_jp":this.Title=this.product.pronames.ja_jp}},getProcess(){let t=100*Math.abs(this.$np.divide(this.product.selledamount,this.product.expectamount));return t<.5&&(t=.5),t+"%"}},mounted(){this.changeLang(this.lang)},created(){}},l=n(3);var component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"financial-product",on:{click:t.goRush}},[t._ssrNode("<img"+t._ssrAttr("src",t.product.currencyicon)+' alt class="icon" data-v-28d71714> '+(t.product.pronames?'<p class="title" data-v-28d71714>'+t._ssrEscape(t._s(t.Title))+"</p>":'<p class="title" data-v-28d71714>'+t._ssrEscape(t._s(t.product.name))+"</p>")+' <p class="rate" data-v-28d71714>'+t._ssrEscape(t._s((100*t.product.yearlyrate).toFixed(2))+"%")+'</p> <p class="rate_tip" data-v-28d71714>'+t._ssrEscape(t._s(t.$t("manage.Estimate")))+'</p> <p class="process" data-v-28d71714><span class="process_tip"'+t._ssrStyle(null,{width:t.getProcess()},null)+' data-v-28d71714></span></p> <p class="lock" data-v-28d71714>'+t._ssrEscape(t._s(t.$t("manage.sold"))+" "+t._s(t.product.selledamount))+"</p> "),n("financial-button",{attrs:{product:t.product}})],2)}),[],!1,(function(t){var e=n(487);e.__inject__&&e.__inject__(t)}),"28d71714","691499a3");e.a=component.exports},692:function(t,e,n){t.exports=n.p+"img/4822db9.svg"},693:function(t,e,n){t.exports=n.p+"img/c66a059.svg"},694:function(t,e,n){"use strict";n.r(e);var r=n(489),o=n.n(r);for(var l in r)"default"!==l&&function(t){n.d(e,t,(function(){return r[t]}))}(l);e.default=o.a},695:function(t,e,n){(t.exports=n(1)(!1)).push([t.i,".financial-content .banner-swiper1 .VueCarousel-pagination{position:absolute;bottom:20px}.financial-content .banner-swiper1 .VueCarousel-dot{padding:5px!important}.financial-content .banner-swiper1 .VueCarousel-dot--active .VueCarousel-dot-button{background-color:#fff!important}.financial-content .banner-swiper1 .VueCarousel-dot-button{width:40px!important;height:2px!important;border-radius:0!important;background-color:hsla(0,0%,100%,.3)!important}.financial-content .banner-swiper3 .VueCarousel-inner{padding-left:4px}",""])},696:function(t,e,n){"use strict";n.r(e);var r=n(490),o=n.n(r);for(var l in r)"default"!==l&&function(t){n.d(e,t,(function(){return r[t]}))}(l);e.default=o.a},697:function(t,e,n){var r=n(8);(t.exports=n(1)(!1)).push([t.i,".financial-content[data-v-1209a053]{padding-top:20px;padding-bottom:30px;background-color:#fff;background-image:url("+r(n(698))+');background-repeat:no-repeat}.financial-content .financial[data-v-1209a053]{width:1200px;min-width:1200px;margin:auto}.financial-content .financial-block-main[data-v-1209a053]{position:relative;min-height:500px}.financial-content .banner-group[data-v-1209a053]{margin:0 0 10px}.financial-content .banner-swiper1[data-v-1209a053]{display:inline-block;width:798px;height:360px;float:left}.financial-content .banner-swiper1 .banner-swiper1_img[data-v-1209a053]{height:360px}.financial-content .banner-swiper2[data-v-1209a053]{display:inline-block;height:360px;width:395px;overflow:hidden;float:right}.financial-content .banner-swiper2 .banner-swiper2-content[data-v-1209a053]:hover{transform:scale(.95)}.financial-content .banner-swiper2 .banner-swiper2-content[data-v-1209a053]{cursor:pointer;display:inline-block;height:360px;width:395px;text-align:center;color:#fff;background:linear-gradient(315deg,rgba(105,64,255,.83922),#4be3d3);transition:all .3s cubic-bezier(.645,.045,.355,1)}.financial-content .banner-swiper2 .banner-swiper2-content .recommend[data-v-1209a053]{font-size:24px;line-height:24px;font-weight:600;margin:40px 0 30px}.financial-content .banner-swiper2 .banner-swiper2-content .recommend[data-v-1209a053]:after,.financial-content .banner-swiper2 .banner-swiper2-content .recommend[data-v-1209a053]:before{content:"";display:inline-block;width:76px;opacity:.4012;border-top:1px solid #fff;vertical-align:middle;margin:0 15px}.financial-content .banner-swiper2 .banner-swiper2-content .title[data-v-1209a053]{font-size:20px;line-height:20px;margin-bottom:10px}.financial-content .banner-swiper2 .banner-swiper2-content .date[data-v-1209a053]{font-size:14px;margin-bottom:20px}.financial-content .banner-swiper2 .banner-swiper2-content .rate[data-v-1209a053]{font-family:HexNumber;font-size:66px;line-height:68px;font-weight:600;margin-bottom:10px}.financial-content .banner-swiper2 .banner-swiper2-content .rate_tip[data-v-1209a053]{font-size:14px;margin-bottom:30px}.financial-content .banner-swiper2 .banner-swiper2-content .rush[data-v-1209a053]{width:208px;height:44px;line-height:44px;border-radius:2px;border:1px solid #fff;background:transparent;font-size:16px;color:#fff}.financial-content .banner-swiper3[data-v-1209a053]{width:1210px;min-width:1210px;margin:auto;min-height:205px}.financial-content .banner-swiper3 .VueCarousel-slide[data-v-1209a053]{height:205px}.financial-content .banner-swiper3 .banner-swiper3-content[data-v-1209a053]:hover{transform:scale(.95)}.financial-content .banner-swiper3 .banner-swiper3-content[data-v-1209a053]{display:inline-block;cursor:pointer;width:395px;height:190px;background-color:#fff;background-image:url('+r(n(699))+");background-repeat:no-repeat;background-position:100% 0;box-shadow:0 5px 10px 0 rgba(27,195,178,.1);padding:0 22px;transition:all .3s cubic-bezier(.645,.045,.355,1)}.financial-content .banner-swiper3 .banner-swiper3-content .title[data-v-1209a053]{margin-top:30px;margin-bottom:30px;font-size:20px;color:#333;font-weight:600}.financial-content .banner-swiper3 .banner-swiper3-content .rate[data-v-1209a053]{font-family:HexNumber;font-size:45px;line-height:45px;font-weight:600;color:#14a2a5}.financial-content .banner-swiper3 .banner-swiper3-content .rush[data-v-1209a053]{width:175px;height:40px;line-height:40px;font-size:14px;color:#fff;background:#1bc3b2;border-radius:2px;text-align:center;margin-top:4px}.financial-content .banner-swiper3 .banner-swiper3-content .no_rush[data-v-1209a053]{background:#f8f8f8;color:#999}.financial-content .banner-swiper3 .banner-swiper3-content .rate_tip[data-v-1209a053]{color:#999;font-size:14px;margin-top:10px}.financial-content .financial-block-title[data-v-1209a053]{margin:40px 0;line-height:40px}.financial-content .financial-block-title .title[data-v-1209a053]{font-size:0}.financial-content .financial-block-title .title_icon[data-v-1209a053]{display:inline-block;width:40px;height:40px;margin-right:15px;vertical-align:middle}.financial-content .financial-block-title .title_tip[data-v-1209a053]{color:#292e39;font-size:26px;font-weight:600;vertical-align:middle}.financial-content .financial-block-title .more[data-v-1209a053]{font-size:16px;color:#14a2a5;cursor:pointer}.financial-content .financial-block[data-v-1209a053]{position:relative;width:1240px;left:-40px}.financial-content .financial-block .financial-product[data-v-1209a053]{float:left;margin-left:40px}",""])},698:function(t,e,n){t.exports=n.p+"img/fc910ed.png"},699:function(t,e,n){t.exports=n.p+"img/aadf875.png"}};