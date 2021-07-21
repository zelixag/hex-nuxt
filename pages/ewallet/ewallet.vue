<style lang='less' scoped>
  @import "../../static/styles/color";
  .hex-flex{color:#333;background-color:#fff;}
  table {
    border-collapse: collapse;
    border-spacing: 0;}
  *{list-style-type: none;word-spacing: normal;}
  .imove_main_list{
	max-width: 1200px;
	margin: 0 auto;
    position: relative;
    width: 90%
}
.w_ban01{position: relative;
    background: url(../../static/images/ewallet/imove-banner-bg.png) no-repeat bottom center;
    background-size: 100%;
	min-height: 627px;
    overflow: hidden;
    }
.w_ban01 .imove_tit{
	margin-top: 120px;
	margin-bottom: 30px;
	}
.w_ban01 p{width: 54%;}
.img_mi{
	vertical-align: middle;
}
.imove_mart{margin-top: 10rem;}
.im_sg{
	padding: 16px 20px;
	color: #dd3d47;
	font-size: 1.2rem;
	// font-weight: 600;
	background: #fff;
	cursor: pointer;
	border-radius: 4px;
	box-shadow: 0px 4px 22px 0 rgba(20,103,84,.2);
}
.imbanner-text{font-size: 1.2rem;}
.img_w100{width: 120px;}
.img_w60{width: 60px;}
.w_ban01 .imove_tit_span{
	vertical-align: middle;
	font-size: 2.2rem;
	// font-weight: 600;
	color: #444;
}
.main_imove{
	max-width: 1200px;
	margin: 0 auto;
}
.margin_t_4{margin-top: 4rem;}
.w_ban01 button{margin-top: 30px;}
.w_ban01 .pcimg{
	position: absolute;
	top: 38px;
    right: -20px;
    z-index: 1;
    width: 500px;
    text-align: right;
    }
.w_ban01 .pcimg img{width: 100%;}
.w_ban01 .yuanimg{
	position: absolute;
    top: 0px;
    right: 0;
    width: 540px;
    }
.w_ban01 .yuanimg img{width: 100%;}
.w_ban01 .shapeimg{position: absolute;
    width: 100px;
    right: -40px;
    top: 0px;
    }
.w_ban01 .shapeimg img{width: 100%;}
.w_ban01 .listimg{
	position: absolute;
    z-index: -1;
    width: 300px;
    left: -200px;
    top: 0px;
    }
.exchange_imove{
	margin-top: 2rem;
	padding: 1rem 0;
	border-top: 2px solid #f0f0f0;
	border-bottom: 2px solid #f0f0f0;
}
.ex_list{
	display: inline-block;
	vertical-align: middle;
	width: 33%;
	text-align: center;
}
.de_with_ex{position: relative;}
.ex_tit_de{
	position: absolute;
	top: 24%;
  right: 26%;
  font-size: 24px;
  // font-weight: 600;
}
.ex_tit_wi{
	position: absolute;
	bottom: 24%;
  left: 26%;
  font-size: 24px;
	// font-weight: 600;
}
.im_part02{
	width: 100%;
	background-color: #f9dddd;
	padding: 2.4rem 0;
	background-image: url(../../static/images/ewallet/bl-bg.png);
	background-position: bottom center;
	background-repeat: no-repeat;
	background-size: 100%;
}
.imove_text{
	text-align: center;
	font-size: 1rem;
	color: #555;
	margin-top: 1rem;
}
.imove_table{margin-top: 2rem;}
.imove_table_list th{
	font-size: 1.2rem;
	padding: 14px 0;
	color: #ffffff;
	}
	.imove_table_list td{
		padding: 12px 0;
		font-size: 1rem;
		color: #ffffff;
	}
.imove_table_list th,tr td{
	width: 50%;
	vertical-align:middle;
}
.imove_table_list td img{
  width: 38px;
  vertical-align: middle;
}
.imove_table_list td{padding-left: 20%;}
.table_bg_l{
	background: #e67067;
	border-bottom: 1px solid #df5f55;
}
.table_bg_r{
	background: #df5f55;
	border-bottom: 1px solid #e67067;
}
.imove_apply_btn{
	padding: 14px 50px;
	background:linear-gradient(to right, #eb8674 , #dd3d47);
	color: #fff;
	font-size: 1.2rem;
	// font-weight: 600;
	border-radius: 8px;
	box-shadow: 0px 4px 22px 0 rgba(20,103,84,.2);
}
.half_list{
	width: 48%;
	display: inline-block;
	vertical-align: top;

}
.list_fl_r{float: right;}
.imove_list_box{
	margin-top: 2rem;
	background: #fff;
	box-shadow: 0px 4px 22px 0 rgba(0,0,0,.1);
	padding: 20px 20px 0 20px;
	border-radius: 10px;
}
.imove_list_box_red{border-left: 10px solid #e36868;}
.imove_list_box_qing{border-left: 10px solid #e6804e;}
.imove_list_box_green{border-left: 10px solid #9c8bf0;}
.imove_list_box_ql{border-left: 10px solid #8bbbf0;}
.imove_list_box_blue{border-left: 10px solid #f0d28b;}
.imove_list_box_orange{border-left: 10px solid #f0928b;}
.imove_box_orange{background: #f6a530;}
.imove_box_blue{background: #6896e3;}
.imove_box_green{background: #e67067;}
.imove_pd3{padding: 0 3rem;}
.orange_list_tit{
	color: #f6a530;
	padding: 8px 26px;
	border-radius: 25px;
	border: 1px solid #f6a530;
	font-size: 1.1rem;
	}
.blue_list_tit{
	color: #6896e3;
	padding: 8px 26px;
	border-radius: 25px;
	border: 1px solid #6896e3;
	font-size: 1.1rem;
	}
.blue_list_tit:hover{color: #6896e3;}
.green_list_tit{
	color: #e67067;
	padding: 8px 26px;
	border-radius: 25px;
	border: 1px solid #e67067;
	font-size: 1.1rem;
	}
.green_list_tit:hover{color: #e67067;}
.orange_list_tit:hover{color: #f6a530;}
.part04_b_box p{
	text-align: center;
	margin-top: 2.4rem;
	}
.imove_list_box_he1{
	height: 126px;
}
.imove_list_box_he2{
	height: 205px;
}
.arrow_w3{width: 30px;}
.imove_list_tit{
	font-size: 1.2rem;
	// font-weight: 600;
	}
.imove_list_text{
	font-size: 1rem;
	color: #a5a5a5;
	margin-top: 10px;
}
.imove_list_text2{
	font-size: 1.2rem;
	color: #a5a5a5;
	margin-top: 10px;
}
.part04_list{
	display: inline-block;
	vertical-align: top;
	width: 358px;
	background: #fff;
	box-shadow: 0px 4px 22px 0 rgba(0,0,0,.1);
	margin-top: 2rem;
	height: 380px;
	border-bottom-left-radius: 10px;
	border-bottom-right-radius: 10px;
}
.list_mar_l{margin-left: 56px;}
.border_pat04{
	border-top-left-radius: 10px;
	border-top-right-radius: 10px;
	font-size: 1.3rem;
	// font-weight: 600;
	color: #fff;
	padding: 16px 0;
	text-align: center;
}
.pc_sj_wi{
	width: 100px;
}
.xin_part01{
 box-shadow: 0px 4px 22px 0 rgba(0,0,0,.1);
 padding: 30px;
 border-radius: 6px;
}
.flow_dis{
	width: 33%;
	display: inline-block;
	vertical-align: top;
	margin-top: 40px;
	height: 368px;
	color: #f0f0f0;
  font-size: 16px;
}
.flow_dis p{font-size: 16px;word-spacing: unset;}
.mart4_p{margin-top: 36%;}
.flow_1_bg{
	text-align: center;
	padding: 30px;

	background: url(../../static/images/ewallet/flow_1.png) no-repeat center;
	}
.flow_2_bg{
	text-align: center;
	padding: 30px;
	background: url(../../static/images/ewallet/flow_2.png) no-repeat center;
	}
.flow_3_bg{
	padding: 34px;
	background: url(../../static/images/ewallet/flow_3.png) no-repeat center;
	}
.mart_fl3{margin-top: 20px;}
.width_p{width: 67%;}
.width_p2{
	width: 74%;
	margin-left: auto;
	margin-right: auto;
	}
.currency_imove{
	border-top: 1px solid #f0f0f0;
	padding: 14px 20px;
}
.currency_type_l{
	display: inline-block;
	vertical-align: middle;
	width: 20%;
	color: #e15254;

}
.currency_type_r{
	display: inline-block;
	vertical-align: middle;
	width: 79%;
	color: #fe0000;
}
.currency_type_tit{
	font-size: 24px;
	// font-weight: bold;
}
.currency_type_r_list{
	display: inline-block;
	vertical-align: top;
	width: 14%;
	text-align: center;
}
.currency_type_tit2{
	font-size: 16px;
}
.xin_part02 img{
	width: 58px;
}
.cur_type{
	display: block;
	margin-top: 6px;
}
.im_part01_bg{
	background: url(../../static/images/ewallet/l_bg_list.png) no-repeat left top;

}
/*.xin_part01_bg{
	background-image: url(../../static/images/ewallet/r_bg_list.png);
	background-position: right top;
	background-repeat: no-repeat;
}*/
.xin_part01_bg{
	background: url(../../static/images/ewallet/r_bg_list.png) no-repeat right top;
}
.xin_part01_bg2{
	background-image: url(../../static/images/ewallet/s_bg_list.png);
	background-position:left bottom;
	background-repeat: no-repeat;
}
.xin_part02_bg{
	background: url(../../static/images/ewallet/q_bg_list.png) no-repeat right top;
}
.xin_part02_bg2{
	background-image: url(../../static/images/ewallet/c_bg_list.png);
	background-position:left bottom;
	background-repeat: no-repeat;
}
.part04_bg{
	background-image: url(../../static/images/ewallet/circle_bg_list.png);
	background-position:left top;
	background-repeat: no-repeat;
}
.part04_bg2{
	background-image: url(../../static/images/ewallet/s_bg_list2.png);
	background-position:right bottom;
	background-repeat: no-repeat;
}
.black_tit {
    // font-weight: bold;
    text-align: center;
    color: #333;
}
.sj_logow100,.imove_list_tit img{width: unset;}

@media only screen and (min-width: 1401px){
.black_tit {
    font-size: 30px;
}}
@media only screen and (max-width: 768px) {
	.flow_dis{
		width: 100%;
		background-size: 94%;
		margin-top: 20px;
		}
	.currency_type_l{
		display: block;
		width: 100%;
		margin-bottom: 14px;
		}
	.currency_type_r{
		display: block;
		width: 100%;
	}
	.currency_type_r_list{width: 31%;}
	.currency_type_tit{font-size: 18px;}
	.flow_dis p{font-size: 14px;}
	.sj_pd20{padding-top: 20px;}
	.pc_sj_wi{width: 64px;}
	.part04_list{
		width: 100%;
		padding: 0 0px 20px 0px;
		height: auto !important;
		}
	.list_mar_l{margin-left: 0 !important;}
	.imove_list_tit img{width: 22px;}
	.imove_list_box{padding: 20px !important;}
	.imove_list_box_he1,.imove_list_box_he2{
	height: auto !important;
}
	.half_list{
	width: 100%;
}
	.main_imove{padding: 0 10px;}
	.imove_table_list td img{width: 26px;}
	.imove_table_list td{padding-left: 4%;}
	.ex_list{
		width: 32%;
	}
	.sj_circle_100{width: 90%;}
	.sj_logow100{width: 76%;}
	.ex_tit_de{
		top: 16%;
		right: 14%;
	}
	.ex_tit_wi{
	bottom: 16%;
	left: 12%;
}
	.w_ban01 {
    position: relative;
    background: url(../../static/images/ewallet/imove-banner-bg.png) no-repeat bottom center;
    background-size: 100%;
    padding: 20px 0 40px;
    overflow: hidden;
	min-height: auto;
}
.w_ban01 .col-md-7{margin-bottom: 50px;}
.w_ban01 .pcimg {
    position: relative;
    top: 0px;
    right: 0px;
    z-index: 1;
    max-width: 500px;
    width: 100%;
    text-align: center;
    margin: 0 auto;
}
.w_ban01 p{width: 100%;}
.w_ban01 .imove_tit{margin-top: 80px;}
.im_sg{
	padding: 10px !important;
	display: block;
	text-align: center;
	color: #fff;
	background: #e67067;

}
.imove_mart{margin-top: 2rem;}
.width_sj100{width: 100%;}

}

@media only screen and (min-width: 1020px) and (max-width: 1024px) {
	.width_sj100{width: 100%;}
	.flow_dis{width: 32%;}
	.ex_list{width: 32%;}
	.mart_fl3{margin-top: 0;}
	.flow_dis p{font-size: 15px;}
	.list_mar_l{margin-left: 12px;}
	.part04_list{width: 322px;}
	.main_imove{padding: 10px;}
}
@media only screen and (min-width: 760px) and (max-width: 768px) {
	.flow_dis{
		width: 32%;
	}
	.flow_dis{padding: 24px;}
	.width_p{width: 84%;}
	.flow_dis p{font-size: 12px;}
	.mart_fl3{margin-top: 54px;}
	.mart4_p{margin-top: 63%;}
}
@media only screen and (max-width: 1260px) and (min-width: 100px){
.black_tit {
    font-size: 18px;
    margin-top: 20px;
}}
</style>

<template>
  <div class="hex-flex">
    <div class="auth hex-flex_auto">
      <!--banner-->
<section class="w_ban01">
	<div id="header" class="a_header"></div>
		<div class="imove_main_list">
			<div class="row">
				<div class="col-12 col-md-7">

					<p class="imove_tit">
						<img src="../../static/images/ewallet/imove-tit-logo.png" class="img_mi img_w100"/> <span class="imove_tit_span"> {{$t("ewallet.spanRow1")}}</span>
					</p>
					<p class="imbanner-text">
						{{$t("ewallet.spanRow2")}}  <span style="color: #be3d30;">{{$t("ewallet.spanRow3")}} </span> {{$t("ewallet.spanRow4")}}   <span style="color: #be3d30;">{{$t("ewallet.spanRow5")}}  </span>{{$t("ewallet.spanRow6")}}
					</p>
					<div class="imove_mart">
						<a :href="$store.state.hex_config.imoveregister + this.lang" target="_blank" class="im_sg">{{$t("ewallet.spanRow7")}} <img src="../../static/images/ewallet/imove-tit-logo.png" class="img_mi img_w60"/>{{$t("ewallet.spanRow8")}}</a>
					</div>
				</div>
				<div class="col-12 col-md-5">
					<div class="pcimg"><img src="../../static/images/ewallet/imovec_phone.png"></div>
					<!--<div class="yuanimg"><img src="images/w_bg_yuan.png"></div>-->
					<!--<div class="shapeimg"><img src="../../static/images/ewallet/s_bg_shape.png"></div>-->
				</div>
			</div>
		</div>
	</section>
	<!--banner end-->


<!--part01 start-->
<div class="im_part01_bg">
	<section class="im_part01 main_imove margin_t_4">
		<p class="black_tit">{{$t("ewallet.spanRow10")}} <img src="../../static/images/ewallet/imove-tit-logo.png" class="pc_sj_wi"/>{{$t("ewallet.spanRow111")}} <br />
		{{$t("ewallet.spanRow11")}}
		</p>
		<div class="exchange_imove">
			<div class="ex_list">
				<p><img src="../../static/images/ewallet/exchange-show.png" width="100%"/></p>
				<p><img src="../../static/images/ewallet/exchang-tit-logo.png" class="sj_logow100"/></p>
			</div>
			<div class="ex_list de_with_ex">
				<p ><img src="../../static/images/ewallet/middle-circle.png" class="sj_circle_100"/></p>
				<p class="ex_tit_de">{{$t("ewallet.deposit")}}</p>
				<p class="ex_tit_wi">{{$t("ewallet.withdraw")}}</p>
			</div>
			<div class="ex_list">
				<p><img src="../../static/images/ewallet/imove-show.png" width="100%"/></p>
				<p><img src="../../static/images/ewallet/imove-tit-logo.png" class="sj_logow100"/></p>
			</div>
		</div>
	</section>
	</div>

<!--part01 end-->
<!--新增part start-->
<div class="xin_part01_bg2">
	<div class="xin_part01_bg ">
	<section class="margin_t_4 xin_part01 main_imove">
	<div class="sj_pd20">
		<p class="black_tit">{{$t("ewallet.spanRow12")}} <img src="../../static/images/ewallet/imove-tit-logo.png" class="pc_sj_wi"/> {{$t("ewallet.spanRow13")}} </p>
		<p class="margin_t_4"><img src="../../static/images/ewallet/flow3.png" class="width_sj100"/></p>
		<div class="flow_dis flow_1_bg">
			<p class="mart4_p width_p2">{{$t("ewallet.selectMethod")}} </p>
		</div>
		<div class="flow_dis flow_2_bg">
			<p class="mart4_p width_p2">{{$t("ewallet.fillTransaction")}}
</p>
		</div>
		<div class="flow_dis flow_3_bg">
			<p class="mart_fl3 width_p">{{$t("ewallet.spanRow14")}}

</p>
<p style="margin-top: 10px;">{{$t("ewallet.spanRow15")}}
</p>
		</div>
	</div>
</section>
</div>
</div>




<!--新增part end-->

<!--part02 start-->
<section class="im_part02 margin_t_4">
	<div class="main_imove">
		<p class="black_tit"><img src="../../static/images/ewallet/imove-tit-logo.png" class="pc_sj_wi"/>{{$t("ewallet.spanRow16")}} <br />
		{{$t("ewallet.spanRow17")}}
		</p>
		<p class="imove_text">{{$t("ewallet.spanRow18")}}
		</p>
		<div class="imove_table">
			<table border="0" cellspacing="0" cellpadding="0" width="100%" class="imove_table_list">
				<tr>
					<th class="table_bg_l" style="border-top-right-radius:8px;border-top-left-radius:8px;">{{$t("ewallet.deposit")}}</th>
					<th class="table_bg_r" style="border-top-left-radius:8px;border-top-right-radius:8px;">{{$t("ewallet.withdrawal")}}</th>
				</tr>
				<tr>
					<td class="table_bg_l"><img src="../../static/images/ewallet/credit_card.png"/> {{$t("ewallet.creditCard")}}</td>
					<td class="table_bg_r"><img src="../../static/images/ewallet/bank-white.png"/>{{$t("ewallet.bank")}}</td>
				</tr>
				<tr>
					<td class="table_bg_l"><img src="../../static/images/ewallet/Electronicmoney.png"/> {{$t("ewallet.electronicMoney")}}</td>
					<td class="table_bg_r"><img src="../../static/images/ewallet/card-white.png"/> {{$t("ewallet.prepaidCard")}}</td>
				</tr>
				<tr>
					<td class="table_bg_l"><img src="../../static/images/ewallet/local-bank-white.png"/> {{$t("ewallet.localBank")}}</td>
					<td class="table_bg_r"><img src="../../static/images/ewallet/channel-white.png"/> {{$t("ewallet.multiChannel")}}</td>
				</tr>
				<tr>
					<td class="table_bg_l"><img src="../../static/images/ewallet/inter-bank-white.png"/> {{$t("ewallet.internationalBank")}}</td>
					<td class="table_bg_r"><img src="../../static/images/ewallet/Crypto-wallet-white.png"/>{{$t("ewallet.cryptoWallet")}}</td>
				</tr>
				<tr>
					<td class="table_bg_l" style="border-bottom-left-radius:8px; border: none;"><img src="../../static/images/ewallet/Crypto-wallet-white.png"/>{{$t("ewallet.cryptoWallet")}}</td>
					<td class="table_bg_r" style="border-bottom-right-radius:8px;border: none;"></td>
				</tr>
			</table>
		</div>
		<p style="text-align: center;margin-top: 3rem;">
			<a :href="$store.state.hex_config.imoveregister + this.lang" target="_blank" class="imove_apply_btn">{{$t("ewallet.appleNow")}}</a>
		</p>
	</div>
</section>

<!--part02 end-->
<!--新增part02 start-->
<div class="xin_part02_bg2">
	<div class="xin_part02_bg">
	<section class="xin_part02 main_imove margin_t_4">
	<p class="black_tit"><img src="../../static/images/ewallet/imove-tit-logo.png" class="pc_sj_wi"/> {{$t("ewallet.spanRow19")}}</p>
 <div class="currency_imove margin_t_4">
 	<div class="currency_type_l">
 		<p class="currency_type_tit">{{$t("ewallet.spanRow20")}}</p>
 	</div>
 	<div class="currency_type_r">
 		<div class="currency_type_r_list">
 			<p class="currency_type_tit2"><img src="../../static/images/ewallet/USD_imove.png"/> <br /> <span class="cur_type">USD</span> </p>
 		</div>
 		<div class="currency_type_r_list">
 			<p class="currency_type_tit2"><img src="../../static/images/ewallet/JPY_imove.png"/> <br /> <span class="cur_type">JPY</span> </p>
 		</div>
 		<div class="currency_type_r_list">
 			<p class="currency_type_tit2"><img src="../../static/images/ewallet/EUR_imove.png"/> <br /> <span class="cur_type">EUR</span> </p>
 		</div>
 		<div class="currency_type_r_list">
 			<p class="currency_type_tit2"><img src="../../static/images/ewallet/PHP_imove.png"/> <br /> <span class="cur_type">PHP</span> </p>
 		</div>
 		<div class="currency_type_r_list">
 			<p class="currency_type_tit2"><img src="../../static/images/ewallet/IDR_imove.png"/> <br /> <span class="cur_type">IDR</span> </p>
 		</div>
 	</div>
 </div>
  <div class="currency_imove" style="border-bottom: 1px solid #f0f0f0;">
 	<div class="currency_type_l">
 		<p class="currency_type_tit">{{$t("ewallet.spanRow21")}}</p>
 	</div>
 	<div class="currency_type_r">
 		<div class="currency_type_r_list">
 			<p class="currency_type_tit2"><img src="../../static/images/ewallet/BTC_imove.png"/> <br /> <span class="cur_type">BTC</span> </p>
 		</div>
 		<div class="currency_type_r_list">
 			<p class="currency_type_tit2"><img src="../../static/images/ewallet/ETH_imove.png"/> <br /> <span class="cur_type">ETH</span> </p>
 		</div>
 		<div class="currency_type_r_list">
 			<p class="currency_type_tit2"><img src="../../static/images/ewallet/xrp_imove.png"/> <br /> <span class="cur_type">XRP</span> </p>
 		</div>
		 <div class="currency_type_r_list">
 			<p class="currency_type_tit2"><img src="../../static/images/ewallet/ltc_imove.png"/> <br /> <span class="cur_type">LTC</span> </p>
 		</div>

 		</div>
 	</div>

</section>
 </div>
</div>


<!--新增part02 end-->

<!--part03 start-->
	<section class="im_part03 margin_t_4 main_imove">
		<p class="black_tit">{{$t("ewallet.spanRow22")}}<img src="../../static/images/ewallet/imove-tit-logo.png" class="pc_sj_wi"/> {{$t("ewallet.spanRow23")}}</p>
		<div class="half_list">
			<div class="imove_list_box imove_list_box_he1 imove_list_box_red">
				<p class="imove_list_tit"><img src="../../static/images/ewallet/transaction_gray.png"/> {{$t("ewallet.spanRow24")}}</p>
				<p class="imove_list_text">{{$t("ewallet.spanRow25")}}</p>
			</div>

			<div class="imove_list_box imove_list_box_he1 imove_list_box_green">
				<p class="imove_list_tit"><img src="../../static/images/ewallet/card_gray.png"/> {{$t("ewallet.spanRow26")}}</p>
				<p class="imove_list_text">{{$t("ewallet.spanRow27")}}</p>
			</div>
			<div class="imove_list_box imove_list_box_he2 imove_list_box_orange">
				<p class="imove_list_tit"><img src="../../static/images/ewallet/trade_gray.png"/> {{$t("ewallet.spanRow28")}}</p>
				<p class="imove_list_text">{{$t("ewallet.spanRow29")}}</p>
			</div>
		</div>
		<!--right-->
		<div class="half_list list_fl_r">
			<div class="imove_list_box imove_list_box_he1 imove_list_box_qing">
				<p class="imove_list_tit"><img src="../../static/images/ewallet/exchange_gray.png"/>{{$t("ewallet.spanRow30")}} </p>
				<p class="imove_list_text">{{$t("ewallet.spanRow31")}}<img src="../../static/images/ewallet/exchange_arrow.png" class="arrow_w3"/> {{$t("ewallet.spanRow32")}}</p>
				<p class="imove_list_text">{{$t("ewallet.spanRow33")}}<img src="../../static/images/ewallet/exchange_arrow.png" class="arrow_w3"/> {{$t("ewallet.spanRow34")}}</p>
			</div>
			<div class="imove_list_box imove_list_box_he1 imove_list_box_ql">
				<p class="imove_list_tit"><img src="../../static/images/ewallet/upicard_imove.png"/> {{$t("ewallet.spanRow35")}}</p>
				<p class="imove_list_text">{{$t("ewallet.spanRow36")}}</p>
			</div>
			<div class="imove_list_box imove_list_box_he2 imove_list_box_blue">
				<p class="imove_list_tit"><img src="../../static/images/ewallet/temporary_withdrawal_gray.png"/> {{$t("ewallet.spanRow37")}}</p>
				<p class="imove_list_text">{{$t("ewallet.spanRow38")}}</p>
				<p class="imove_list_text">{{$t("ewallet.spanRow39")}}</p>
			</div>

		</div>

	</section>
<!--part03 end-->
<div style="clear: both;"></div>
<!--part04 start-->
<div class="part04_bg2">
	<div class="part04_bg">
		<section class="im_part04 margin_t_4 main_imove">
		<p class="black_tit">{{$t("ewallet.spanRow40")}} <br />
		{{$t("ewallet.spanRow41")}}
		</p>
		<div class="part04_list">
			<div class="border_pat04 imove_box_orange">
				{{$t("ewallet.spanRow42")}}
			</div>
			<div class="part04_b_box">
				<p class=""><a class="orange_list_tit">{{$t("ewallet.spanRow43")}}</a></p>
				<p class="imove_list_text2 imove_pd3">{{$t("ewallet.spanRow44")}}</p>
			</div>

		</div>
		<!--####-->
		<div class="part04_list list_mar_l">
			<div class="border_pat04 imove_box_blue">
				{{$t("ewallet.spanRow45")}}
			</div>
			<div class="part04_b_box">
				<p class=""><a class="blue_list_tit">{{$t("ewallet.spanRow46")}}</a></p>
				<p class="imove_list_text2 imove_pd3">{{$t("ewallet.spanRow47")}}
</p>
			</div>

		</div>
		<!--####-->
		<div class="part04_list list_mar_l">
			<div class="border_pat04 imove_box_green">
				{{$t("ewallet.spanRow48")}}
			</div>
			<div class="part04_b_box">
				<p class=""><a class="green_list_tit">{{$t("ewallet.spanRow49")}}</a></p>
				<p class="imove_list_text2 imove_pd3">{{$t("ewallet.spanRow50")}}
</p>
			</div>

		</div>
		<p style="text-align: center;margin-top: 4rem;">
			<a :href="$store.state.hex_config.imoveregister + this.lang" target="_blank" class="imove_apply_btn">{{$t("ewallet.appleNow")}}</a>
		</p>
    <br/><br/><br/><br/>
	</section>
</div>
</div>

<!--part04 end-->
    </div>
  </div>
</template>

<script>
  import $ from 'jquery'
  export default {
    name: 'ewallet',
    components: {},
    data() {
      return {
        lang :''
      }
    },
    mounted() {
      this.lang = this.$store.state.hex_lang.locale === 'en_us' ? '&lang=en' : '&lang=zh'
    },
    watch: {
     '$store.state.hex_lang.locale': function (val) {
        if (val == 'en_us') {
          this.lang = '&lang=en'
        } else if(val == 'zh_cn'){
          this.lang = '&lang=zh'
        }
      },
    },
  }
</script>
