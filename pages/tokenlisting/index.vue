<style lang='less' scoped>
@import "../../static/styles/color";
.hex-flex{color:#3B4251;background-color:#fff;}
img{width:unset;}
.ico-banner {
    background: url(../../static/images/tl/ico-banner.png) no-repeat center;
    background-size: cover;
}
.ptpb {
    padding-top: 90px;
    padding-bottom: 100px;
}
.ico_main {
    max-width: 1200px;
    margin: 0 auto !important;
}
.ico_cen {
    width: 90%;
    margin-left: auto;
    margin-right: auto;
}
.ico-btit {
    color: #fff;
    font-size: 36px;
    font-weight: bolder;
}
.mt_20 {
    margin-top: 20px;
}
.iocfu_bit {
    color: #fff;
}
p {
    font-size: 24px;
}
.icon_mt {
    margin-bottom: 80px;
    margin-top: 80px;
}
.ico_contact_org {
    padding: 12px 38px;
    background: #ffb333;
    color: #fff;
    border-radius: 4px;
    font-size: 18px;
}
.ico_contact_org:hover{
    background:linear-gradient(#FECA71,#F89B01);
}
a {
    text-decoration: none;
    font-weight: bold;
}
.icon-img {
    width: 100%;
    padding-top: 40px;
    padding-bottom: 40px;
}
.icon-img ul li {
    float: left;
    width: 14.2%;
    text-align: center;
}
.icon-img ul li img {
    height: 50px;
    vertical-align: middle !important;
}
.p03_bg {
    padding-top: 40px;
    padding-bottom: 40px;
    width: 100%;
    background: #f8f8f8;
    box-shadow: 0px 4px 22px 0 rgba(0,0,0,.1);
}
.ico_part03 ul li {
    float: left;
    width: 50%;
    padding: 10px;
}
.ico_part03 p {
    font-size: 18px;
}
.ico_tit {
    font-size: 30px !important;
    font-weight: bold;
    margin-bottom: 16px;
}
.ico_mt70 {
    margin-top: 70px !important;
}
.part04 {
    margin-top: 30px;
}
.part04 ul li {
    float: left;
    width: 30%;
    margin-left: 10%;
    border-radius: 10px;
    background: #fff;
    box-shadow: 0px 4px 22px 0 rgba(0,0,0,.1);
    padding: 40px 14px;
}
.part04 ul .ml15 {
    margin-left: 15%;
}
.part04 ul li p {
    text-align: center;
}
.ico_fea {
    font-size: 22px;
    font-weight: bold;
    margin-bottom: 10px;
}
.pc_high {
    height: 130px;
    font-size: 18px;
    margin-top: 30px;
}
.ico_part5 {
    background: url(../../static/images/tl/part05bg.png) center no-repeat;
    background-size: cover;
    padding-bottom: 30px;
}
.tec {
    text-align: center;
}
.ico_bz ul li {
    float: left;
    width: 15%;
    margin-left: 16px;
    background: rgba(255,255,255,.3);
    padding: 20px 10px;
    border-radius: 10px;
}
.ico_bz p {
    color: #fff;
}
.ico_sz {
    font-size: 40px !important;
    font-weight: bolder;
}
.font-16 {
    font-size: 20px;
    height: 46px;
}
.part06 {
    background: #fff;
    box-shadow: 0px 4px 22px 0 rgba(0,0,0,.1);
    padding: 40px 10px;
    margin-bottom: 70px !important;
}
.part06 ul li {
    padding: 0 10px;
}
.ico_fl {
    float: left;
}
.ico_fr {
    float: right;
}
.ico_contact {
    padding: 12px 38px;
    background: #14A2A5;
    color: #fff;
    border-radius: 4px;
    font-size: 18px;
}
.ico_contact:hover{
    background:linear-gradient(#21D6C3,#12AD9D);
}
</style>

<template>
  <div class="hex-flex">
    <div class="auth hex-flex_auto">
        <div class="ico-banner">
            <div class="ico_main ptpb">
                <div class="ico_cen">
                    <h2 class="ico-btit" style="">{{$t("tokenlisting.tip1")}}</h2>
                    <p class="mt_20 iocfu_bit">{{$t("tokenlisting.tip2")}}</p>
                    <p class="iocfu_bit">{{$t("tokenlisting.tip3")}}</p>
                    <p class="iocfu_bit">{{$t("tokenlisting.tip4")}}</p>
                </div>
            </div>
        </div>
    <!--part03 start-->
        <div class="p03_bg">
            <div class="ico_main">
                <div class="ico_part03">
                    <ul>
                        <li>
                            <p class="ico_tit">{{$t("tokenlisting.tip5")}}</p>
                            <p>{{$t("tokenlisting.tip6")}}</p>
                            <p>{{$t("tokenlisting.tip7")}}</p>
                        </li>
                        <li style="text-align: center;"><img src="../../static/images/tl/ERC20.png" class="ipad_w98"></li>
                    </ul>
                    <div style="clear: both;"></div>
                </div>
            </div>
        </div>
    <!--part03 end-->
    <!--part04 start-->
        <div class="ico_main ico_mt70">
            <p class="ico_tit" style="text-align: center;">{{$t("tokenlisting.tip8")}} </p>
            <p style="text-align: center;">{{$t("tokenlisting.tip9")}}</p>
            <div class="part04">
                <ul>
                    <li class="ml15">
                        <p style="margin-bottom: 20px;"><img src="../../static/images/tl/fast_icon.png"></p>
                        <p class="ico_fea">{{$t("tokenlisting.tip10")}}</p>
                        <div class="pc_high">
                            {{$t("tokenlisting.tip11")}}
                        </div>
                    </li>
                    <li class="sjmt10">
                        <p style="margin-bottom: 20px;"><img src="../../static/images/tl/zan_icon.png"/></p>
                        <p class="ico_fea">{{$t("tokenlisting.tip12")}}</p>
                        <div class="pc_high">
                            {{$t("tokenlisting.tip13")}}
                        </div>
                    </li>
                </ul>
                <div style="clear: both;"></div>
            </div>
        </div>
    <!--part04 end-->
    <!--part05 start-->
        <div class="ico_part5 ico_mt70">
            <div class="ico_main tec">
                <p class="ico_tit" style="color: #fff;padding-top: 30px;">{{$t("tokenlisting.tip14")}}</p>
            </div>
            <div class="ico_bz">
                <ul>
                    <li class="tec">
                        <p class="ico_sz"><span>1</span> </p>
                        <p class="font-16">{{$t("tokenlisting.tip15")}}</p>
                    </li>
                    <li class="tec sjmt10">
                        <p class="ico_sz"><span>2</span></p>
                        <p class="font-16">{{$t("tokenlisting.tip16")}}</p>
                    </li>
                    <li class="tec sjmt10">
                        <p class="ico_sz"><span>3</span></p>
                        <p class="font-16">{{$t("tokenlisting.tip17")}}</p>
                    </li>
                    <li class="tec sjmt10">
                        <p class="ico_sz"><span>4</span></p>
                        <p class="font-16">{{$t("tokenlisting.tip18")}}</p>
                    </li>
                    <li class="tec sjmt10">
                        <p class="ico_sz"><span>5</span></p>
                        <p class="font-16">{{$t("tokenlisting.tip19")}}</p>
                    </li>
                    <li class="tec sjmt10">
                        <p class="ico_sz"><span>6</span></p>
                        <p class="font-16">{{$t("tokenlisting.tip20")}}</p>
                    </li>
                </ul>
                <div style="clear: both;"></div>
            </div>
        </div>
    <!--part05 end-->
    <!--part06 start-->
        <div class="part06 ico_main ico_mt70">
            <ul>
                <li class="ico_fl">
                    <p>{{$t("tokenlisting.tip21")}}</p>
                    <p>{{$t("tokenlisting.tip22")}}</p>
                </li>
                <li class="ico_fr">
                    <p><a href="https://ilexexchange.zendesk.com/hc/en-us/requests/new" target="_blank" class="ico_contact">{{$t("tokenlisting.tip23")}}</a></p>
                </li>
            </ul>
            <div style="clear: both;"></div>
        </div>
    <!--part06 end-->
    </div>
  </div>
</template>

<script>
  import $ from 'jquery'
  export default {
    name: 'tokenlisting',
    components: {},
    mounted() {
    },
  methods:{
  }
  }
</script>
