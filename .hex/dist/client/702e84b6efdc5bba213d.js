(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{1726:function(t,e,r){"use strict";r.r(e);var n={name:"success",layout:"default2",components:{},data:function(){return{unique_id:this.$route.query.unique_id,jsurl:"",id:this.$route.query.id,type:this.$route.query.type,timer:"",IntervalStatusMaster:!1}},mounted:function(){var t=this;if(console.log(this.type),""!=this.unique_id&&null!=this.unique_id){this.jsurl=this.$store.state.hex_config.mastercardpayjsurl+this.unique_id;var s=document.createElement("script");s.type="text/javascript",s.src=this.jsurl,document.body.appendChild(s)}if(""!=this.id&&null!=this.id){var e={id:this.id};console.log(this.id),this.$store.dispatch("master_deposit_confirm",e).then((function(e){console.log(e),e.success&&(window.localStorage.setItem("masterDeposit","success"),t.$router.push({path:"/master-deposit-success",query:{msg:e.msg}}))}))}}},o=r(9),component=Object(o.a)(n,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"popup_result"},[e("table",{staticStyle:{"margin-top":"50px"},attrs:{width:"100%"}},[e("tr",[e("td",["mastercard"==this.type?e("form",{staticClass:"paymentWidgets",attrs:{action:this.$store.state.hex_config.mastercardpay,"data-brands":"MASTER"}}):this._e(),this._v(" "),"upi"==this.type?e("form",{staticClass:"paymentWidgets",attrs:{action:this.$store.state.hex_config.mastercardpay,"data-brands":"UNIONPAY"}}):this._e()])])])])}),[],!1,null,"8a948588",null);e.default=component.exports}}]);