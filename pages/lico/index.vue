<style lang='less' scoped>
/* vietnamese */
@font-face {
  font-family: 'Muli';
  font-style: normal;
  font-weight: 400;
  src: local('Muli Regular'), local('Muli-Regular'), url(https://fonts.gstatic.com/s/muli/v16/7Auwp_0qiz-afT3GLRrX.woff2) format('woff2');
  unicode-range: U+0102-0103, U+0110-0111, U+1EA0-1EF9, U+20AB;
}
/* latin-ext */
@font-face {
  font-family: 'Muli';
  font-style: normal;
  font-weight: 400;
  src: local('Muli Regular'), local('Muli-Regular'), url(https://fonts.gstatic.com/s/muli/v16/7Auwp_0qiz-afTzGLRrX.woff2) format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Muli';
  font-style: normal;
  font-weight: 400;
  src: local('Muli Regular'), local('Muli-Regular'), url(https://fonts.gstatic.com/s/muli/v16/7Auwp_0qiz-afTLGLQ.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
  /* base
----------------------------------------------------*/
* {
	padding: 0;
	margin: 0;
	box-sizing: border-box;
}
.hex-flex{
    font-family: 'Muli', sans-serif;
	font-weight: 400;
	font-size: 16px;
	line-height: 1.6;
	-webkit-text-size-adjust: 100%;
	color: #444;
	letter-spacing: 0.25px;
	background: #fff;
	position: relative;
}
table {
	border-collapse: collapse;
}
img {
	border: none;
    vertical-align: middle;
    width: unset;
}
ul,ol{
	list-style-type:none;
}

/* link
----------------------------------------------------*/
a {
	color:#f5bc00;
	text-decoration:none;
	transition: all 0.2s linear;
	-webkit-transition: all 0.2s linear;
	-webkit-tap-highlight-color:transparent;
}
a:visited {
	color:#f5bc00;
	text-decoration:none;
}
a:hover {
	color:#f5bc00;
}

/* Selected Text
----------------------------------------------------*/
// ::selection {
// 	background: #f5bc00;
// 	color: #fff;
// }

/* other
----------------------------------------------------*/
strong, b {
	font-weight: bold;
}
img {
	max-width: 100%;
	height: auto;
}

/* global navi
----------------------------------------------------*/
.gnav>ul{
	position: absolute;
	top: 30px;
	right: 0;
    -webkit-transition: all 0.2s linear;
    transition: all 0.2s linear;
}
.gnav>ul>li {
	display: inline-block;
	color: #444;
	margin-right: 30px;
    line-height: 40px;
}
.gnav>ul>li:last-child {
	margin-right: 0;
}
.gnav>ul>li.underline a{
	position: relative;
	display: inline-block;
	text-decoration: none;
	color: #444;
	letter-spacing: 0.6px;
	font-weight: 600;
}
.gnav>ul>li.underline a::after {
	position: absolute;
	bottom: -10px;
	left: 0;
	content: '';
	width: 100%;
	height: 2px;
	background: #f5bc00;
	transform: scale(0, 1);
	transform-origin: left top;
	transition: transform .3s;
}
.gnav>ul>li.underline a:hover::after {
	transform: scale(1, 1);
}
.gnav>ul>li.btn-1 {
    margin-right: 10px;
}
.btn-line {
    line-height: 1.6;
    position: relative;
    display: inline-block;
    padding: 7.5px 30px;
    border: 1px solid #444;
    text-decoration: none;
    transition: .3s;
    z-index: 1;
    -webkit-user-select: none;
    user-select: none;
    background: #fff;
}
a.btn-line {
    color: #444;
    font-weight: 600;
}
.btn-line::before {
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    content: '';
    width: 100%;
    height: 100%;
    background: #eee;
    transform-origin: left top;
    transform: scale(0, 1);
    transition: transform .2s;
}
.btn-line:hover::before {
    transform: scale(1, 1);
}
.btn-yellow {
    line-height: 1.6;
    position: relative;
    display: inline-block;
    padding: 7.5px 30px;
    border: 1px solid #f5bc00;
    text-decoration: none;
    transition: .3s;
    z-index: 1;
    -webkit-user-select: none;
    user-select: none;
    background: #fbca29;
}
a.btn-yellow {
    color: #444;
    font-weight: 600;
}
.btn-yellow::before {
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    content: '';
    width: 100%;
    height: 100%;
    background: #f5bc00;
    transform-origin: right top;
    transform: scale(1, 1);
    transition: transform .2s;
}
.btn-yellow:hover::before {
    transform: scale(0, 1);
}

/* submenu */
.gnav>ul>li.hover-nav {
    position: relative;
    cursor: pointer;
    font-weight: 600;
}
.gnav>ul>li.hover-nav::after {
    content: '';
    background: url(../../static/images/lico/ico-arrow.svg) no-repeat right center;
    display: inline-block;
    width: 14px;
    height: 10px;
}
.gnav>ul>li ul.submenu {
    position: absolute;
    z-index: 10;
    top: 40px;
    left: -30px;
    background: #fff;
    box-shadow: rgba(0, 0, 0, 0.10) 0px 4px 15px;
    display: none;
    padding: 10px 30px 20px;
}
.gnav>ul>li ul.submenu li a {
    font-weight: normal;
    color: #444;
    white-space: nowrap
}
.gnav>ul>li ul.submenu li a::after {
    bottom: 0px;
}
a.news-link {
    z-index: 10;
    top: 200px;
    right: 0;
    -webkit-transform: rotate(-90deg);
    transform: rotate(-90deg);
    transform-origin: bottom right;
    position: fixed;
    padding: 10px 50px 10px 30px;
    color: #444;
    background: #f5bc00;
    cursor: pointer;
}
.news-link span {
    position: relative;
}
.news-link span::after {
    position: absolute;
    top: 50%;
    right: -20px;
    margin-top: -4px;
    content: '';
    background: url(../../static/images/lico/ico-arrow-line.svg) no-repeat right center;
    display: inline-block;
    width: 14px;
    height: 10px;
    transition: all 0.2s linear;
    -webkit-transition: all 0.2s linear;
}
.news-link:hover ::after {
    right: -26px;
}

/* button */
.btn {
    position: relative;
    display: inline-block;
    padding: 7.5px 10px;
    border: 1px solid #f5bc00;
    text-align: center;
    text-decoration: none;
    transition: .3s;
    z-index: 1;
    -webkit-user-select: none;
    user-select: none;
    min-width: 200px;
    min-height: 44px;
    background: #fbca29;
    font-size: 16px;
    cursor: pointer;
    color: #444;
    font-weight: 600;
}
a.btn {
    color: #444;
}
.btn::before {
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    content: '';
    width: 100%;
    height: 100%;
    background: #f5bc00;
    transform-origin: right top;
    transform: scale(1, 1);
    transition: transform .2s;
}
.btn:hover::before {
    transform: scale(0, 1);
}

/* input */
input::placeholder,
textarea::placeholder {
    color: #c3c3c3;
}
input[type=number]::-webkit-inner-spin-button,
input[type=number]::-webkit-outer-spin-button {
	-webkit-appearance: none;
	margin: 0;
}
input,textarea,select {
	outline: none;
	-webkit-transition: all .3s;
	transition: all .3s;
	-webkit-tap-highlight-color:transparent;
	-webkit-appearance: none;
}
button {
	outline: none;
	-webkit-tap-highlight-color:transparent;
	-webkit-user-select: none;
	user-select: none;
	-webkit-appearance: none;
}
select::-ms-expand {
    display: none;
}
input:focus,
textarea:focus,
select:focus {
	border: 1px solid #f5bc00;
}


/* contents
----------------------------------------------------*/
.mobile-menu,.menu-btn {
	display: none;
}
.row {
	padding-right: 5%;
    padding-left: 5%;
    margin-top: 30px;
}
.section {
    padding-top: 130px;
    padding-bottom: 130px;
}
.inner {
	width: 1140px;
	max-width: 100%;
	margin: auto;
}
h1 {
	font-size: 56px;
}
h2 {
	font-size: 30px;
	margin-bottom: 50px;
	text-align: center;
}
h3 {
	font-size: 24px;
	margin-bottom: 30px;
}
h4 {
	font-size: 18px;
}

/* content */
.section-1 {
	height: 650px;
    background: url(../../static/images/lico/bg-main.png) center bottom no-repeat;
    -webkit-background-size: 100% auto;
    background-size: 100% auto;
    position: relative;
}
.section-1 .inner {
    width: 800px;
    height: 100%;
	display: flex;
    flex-wrap: wrap;
    align-items: center;
}
.section-1 .main-txt {
	text-align: center;
    transform: translateY(-50px);
    margin: 0 auto;
}
.section-1 img{
    padding-bottom: 20px;
    width: 150px;
    position: absolute;
    left: 5%;
    top: 0;
}
.section-1 .main-txt h1 {
    line-height: 1.4;
    margin-top: 50px;
}
.section-1 .main-txt h2 {
	font-weight: normal;
	font-size: 20px;
	margin: 20px 0 30px;
}
.section-2 {
	padding: 60px;
	background: #f2f2f2;
}
.section-2 ul {
    display: flex;
    flex-wrap: wrap;
}
.section-2 ul li {
    width: 23%;
    background: #fff url(../../static/images/lico/graph.png) center bottom no-repeat;
    background-size: 100% auto;
    padding: 20px;
    position: relative;
    font-size: 14px;
    border: 1px solid #ddd;
}
.section-2 ul li+li {
    margin-left: 2%;
}
.section-2 ul li .ttl {
    font-weight: 600;
}
.section-2 ul li .percent {
    position: absolute;
    right: 20px;
    top: 20px;
}
.section-2 ul li .price {
	margin: 8px 0;
}
.section-2 ul li .price-1 {
	font-weight: 600;
}
.section-2 ul li .price-2 {
	margin-left: 10px;
}
.blue {
	color: #14a2a5;
}
.pink {
	color: #ea0070;
}
.section-3 {
    background: #f5bc00 url(../../static/images/lico/bg-yellow-wave-line.png) center top no-repeat;
    -webkit-background-size: 100% auto;
    background-size: 100% auto;
    text-align: center;
}
.section-3 .inner {
    width: 800px;
}
.section-4 .trading-fee {
	background: #f2f2f2;
	padding: 50px 80px;
    display: flex;
    flex-wrap: wrap;
    position: relative;
    overflow: hidden;
}
.section-4 .trading-fee h3 {
	font-weight: 400;
	text-align: center;
	width: 100%;
}
.section-4 .trading-fee .trading-fee-img {
    width: 200px;
    margin-right: 2%;
    display: flex;
    align-items: center;
}
.section-4 .trading-fee .trading-fee-txt {
    flex: 1;
}
.section-4 .trading-fee .ribbon {
    position: absolute;
    background-color: #f5bc00;
    font-weight: 600;
    height: 27px;
    width: 200px;
    text-align: center;
    top: 30px;
    right: -60px;
    transform: rotate(45deg);
    display: flex;
    justify-content: center;
    align-items: center;
}
.section-4 ul.list-feature {
	margin-top: 100px;
    display: flex;
    flex-wrap: wrap;
}
.section-4 ul.list-feature li {
    width: 30%;
}
.section-4 ul.list-feature li+li {
    margin-left: 5%;
}
.section-4 ul.list-feature li h3 {
    text-align: center;
    font-weight: 400;
    margin-top: 20px;
}
.section-4 ul.list-feature li:nth-child(1)::before {
	content: "";
	width: 170px;
	height: 170px;
    background: url(../../static/images/lico/ico-feature-1.svg) center no-repeat;
    display: block;
    margin: auto;
}
.section-4 ul.list-feature li:nth-child(2)::before {
	content: "";
	width: 170px;
	height: 170px;
    background: url(../../static/images/lico/ico-feature-2.svg) center no-repeat;
    display: block;
    margin: auto;
}
.section-4 ul.list-feature li:nth-child(3)::before {
	content: "";
	width: 170px;
	height: 170px;
    background: url(../../static/images/lico/ico-feature-3.svg) center no-repeat;
    display: block;
    margin: auto;
}
.section-5 {
    background: #faf9f9;
    text-align: center;
}
.section-5 .inner {
    width: 800px;
}
.section-5 .txt {
	margin-bottom: 40px;
}
.section-6 {
    background-color: #12161c;
    background-image:
        url(../../static/images/lico/bg-yellow-polygon.png),
        url(../../static/images/lico/bg-white-wave-line.png);
    background-position:
        center top,
        center bottom;
    background-repeat:
        no-repeat,
        no-repeat;
    background-size:
    	100% auto,
    	100% auto;
    color: #fff;
    height: 1553px;
}
.section-6 ul.list-roadmap {
    position: relative;
    width: 820px;
    max-width: 100%;
    margin: auto;
    height: 1195px;
}
.section-6 ul.list-roadmap::before {
    content: "";
    width: 4px;
    height: 100%;
    background-image: linear-gradient(to bottom, rgba(170,170,170,1) 0%, rgba(170,170,170,1) 90%, rgba(170,170,170,0) 100%);
    position: absolute;
    top: 30px;
    left: 50%;
}
.section-6 ul.list-roadmap .date {
    background: #f5bc00;
    width: 90px;
    height: 90px;
    color: #12161c;
    border-radius: 50%;
    position: absolute;
    top: -45px;
    left: 50%;
    margin-left: -45px;
    padding: 10px;
    font-size: 20px;
    font-weight: 600;
    text-align: center;
    display: flex;
    flex-wrap: wrap;
    align-content: center;
}
.section-6 ul.list-roadmap .date span {
    display: block;
    width: 100%;
}
.section-6 ul.list-roadmap .date::after {
	content: "";
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border: 1px solid #f5bc00;
    position: absolute;
    top: -6px;
    left: 50%;
    margin-left: -51px;
}
.section-6 ul.list-roadmap>li {
    background: #3d3e3f;
    padding: 70px 20px 20px;
    width: 330px;
    position: relative;
}
.section-6 ul.list-roadmap>li.left {
    background: #3d3e3f;
    padding: 70px 20px 20px;
    width: 330px;
    position: relative;
}
.section-6 ul.list-roadmap>li.left::before {
    content: "";
    width: 90px;
    height: 1px;
    border-bottom: 2px dotted #aaa;
    position: absolute;
    left: 310px;
    top: 30px;
}
.section-6 ul.list-roadmap>li.left::after {
    content: "";
    width: 10px;
    height: 10px;
    border: 4px solid #f5bc00;
    position: absolute;
    left: 403px;
    top: 22px;
    border-radius: 50%;
    background: #12161c;
}
.section-6 ul.list-roadmap>li.right {
    margin-left: 490px;
}
.section-6 ul.list-roadmap>li.right::before {
    content: "";
    width: 90px;
    height: 1px;
    border-bottom: 2px dotted #aaa;
    position: absolute;
    right: 306px;
    top: 30px;
}
.section-6 ul.list-roadmap>li.right::after {
    content: "";
    width: 10px;
    height: 10px;
    border: 4px solid #f5bc00;
    position: absolute;
    right: 399px;
    top: 22px;
    border-radius: 50%;
    background: #12161c;
}
.section-6 ul.list-roadmap>li>ul {
    list-style-type: disc;
    margin-left: 20px;
}
.section-7 {
    background: url(../../static/images/lico/bg-yellow-wave-line-2.png) center 90% no-repeat;
    -webkit-background-size: 100% auto;
    background-size: 100% auto;
}
.section-7 .inner {
    width: 800px;
}
.section-7 .about-mina {
	border-bottom: 2px solid #f5bc00;
	display: flex;
	font-size: 26px;
	font-weight: 600;
	margin-bottom: 80px;
    justify-content: center;
}
.section-7 .about-mina .word {
	display: flex;
	flex-wrap: wrap;
}
.section-7 .about-mina .word::after {
	content: "=";
	color: #aaa;
	font-weight: 400;
	display: inline-block;
	margin-right: 10px;
	margin-left: 10px;
}
.section-7 .about-mina .word .word-1::after,
.section-7 .about-mina .word .word-2::after {
	content: "+";
	color: #aaa;
	font-weight: 400;
	display: inline-block;
	margin-right: 10px;
	margin-left: 10px;
}
.section-7 .about-mina .word span,
.section-7 .about-mina .initial {
	color: #f5bc00;
}
.section-7 .txt p {
	margin-bottom: 30px;
}
.section-8 {
	background: #faf9f9;
}
.section-8 .inner {
    width: 800px;
}
.section-8 dl {
	display: flex;
	flex-wrap: wrap;
}
.section-8 dl dt {
	padding: 30px 0;
	width: 26%;
	margin-right: 4%;
	border-bottom: 1px solid #12161c;
    font-size: 18px;
}
.section-8 dl dd {
	padding: 30px 0;
	border-bottom: 1px solid #aaa;
	width: 70%;
}
.section-9 .txt {
	margin-bottom: 50px;
}
.section-9 .inner {
    width: 800px;
}
.red {
	color: #e63e3e;
}
.need {
	color: #e63e3e;
	margin-left: 4px;
}
.section-9 .field-wrap {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 40px;
}
.section-9 .field-wrap .ttl {
    font-size: 18px;
    width: 220px;
    min-width: 220px;
}
.section-9 .field-wrap .field {
    flex: 1;
}
.input-style {
    height: 40px;
    padding: 9px 10px;
    font-size: 16px;
    line-height: 22px;
    border: 1px solid #ddd;
    -webkit-appearance: none;
    width: 100%;
	background-color: #f2f2f2;
	border-radius: 0;
}
.btn-center {
	text-align: center;
}
.h250 {
    min-height: 250px;
}
.select-icon {
    background: #f2f2f2 url(../../static/images/lico/ico-arrow.svg) 98% center no-repeat;
}
#input-group input[type="file"] {
   display: none;
}
#input-group label {
   background: #12161c;
   color: #fff;
   padding: 10px 30px;
   margin-right: 6px;
   display: inline-block;
   position: relative;
   cursor: pointer;
    z-index: 1;
}
.input-btn::before {
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    content: '';
    width: 100%;
    height: 100%;
    background: #444;
    transform-origin: left top;
    transform: scale(0, 1);
    transition: transform .2s;
}
.input-btn:hover::before {
    transform: scale(1, 1);
}
#input-group label::after {
   content: "Not selected";
   height: 20px;
   line-height: 20px;
   position: absolute;
    right: -110px;
   top: calc(50% - 10px);
   color: #aaa;
}
#input-group label.changed::after {
   content: "";
}
#input-group .filename {
    word-break: break-word;
}
.mobile-menu .btn-wrap {
    display: none;
}

/* responsive
----------------------------------------------------*/
@media only screen and (max-width: 1024px) {
	/* modal menu */
	.menu-btn {
		display: block;
	}
	.gnav>ul {
	    position: absolute;
        top: 20px;
	    right: 40px;
	}
	.open .mobile-menu {
	    transform: translate3d(0, 0, 0);
	    opacity: 1;
	}
	.mobile-menu {
	    display: block;
	    transform: translate3d(0, -100%, 0);
	    opacity: 0;
	    position: fixed;
	    height: 100%;
	    width: 100%;
	    z-index: 10;
	    background-color: rgba(255, 255, 255, 1);
	    transition: 0.25s ease all;
	}

	/* modal btn */
	.menu-btn {
		position: fixed;
		top: 20px;
		right: 5%;
		cursor: pointer;
		z-index: 12;
		display: block;
		width: 24px;
		height: 40px;
		-webkit-transition: all 0.2s ease;
		transition: all 0.2s ease;
	}
	.fixed-style.menu-btn {
		top: 10px;
	}
	#panel-btn{
	    display: block;
	    position: relative;
	    width: 24px;
	    height: 40px;
	}
	#panel-btn-icon{
		display: block;
		position: absolute;
		top: 20px;
		right: 0;
		width: 24px;
		height: 2px;
		background: #444;
		transition: .2s;
        background: transparent;
	}
	#panel-btn-icon:before{
		display: block;
		content: "";
		position: absolute;
		top: 50%;
		left: 0;
		width: 20px;
		height: 2px;
		background: #444;
		transition: .3s;
	}
	#panel-btn-icon:after{
		display: block;
		content: "";
		position: absolute;
		top: 50%;
		left: 0;
		width: 20px;
		height: 2px;
		background: #444;
		transition: .3s;
	}
	#panel-btn-icon:before{margin-top: -6px;}
	#panel-btn-icon:after{margin-top: 4px;}
	#panel-btn .close:before, #panel-btn .close:after{margin-top: 0;}
	#panel-btn .close:before{
		transform: rotate(-45deg);
		-webkit-transform: rotate(-45deg);
	}
	#panel-btn .close:after{
        transform: rotate(45deg);
        -webkit-transform: rotate(45deg);
	}

	/* menu */
	.mobile-menu .menu-inner {
		padding: 0 5% 70px;
	    margin-top: 80px;
	    overflow: auto;
	    height: 100%;
	}
	.mobile-menu ul.list-menu>li {
		color: #aaa;
		margin: 10px 0;
		 border-bottom: 1px solid #eee;
		padding-bottom: 10px;
	}
	.mobile-menu ul.list-menu>li>a {
		color: #444;
		font-size: 20px;
	}
    .mobile-menu ul.submenu {
        margin-left: 20px;
    }
    .mobile-menu ul.submenu>li {
        padding-top: 10px;
    }
    .mobile-menu ul.submenu>li>a {
        color: #444;
        font-size: 20px;
    }
    .section {
        padding-top: 80px;
        padding-bottom: 80px;
    }
    .section-2 {
        padding: 30px 5% 20px;
    }
    .section-2 ul li {
        width: 48%;
        font-size: 12px;
        margin-bottom: 10px;
        padding: 10px;
    }
    .section-2 ul li+li {
        margin-left: 4%;
    }
    .section-2 ul li:nth-child(3) {
        margin-left: 0;
    }
    .section-2 ul li .price {
        margin: 4px 0;
    }
    .section-2 ul li .percent {
        right: 10px;
        top: 10px;
    }
    .section-6{
        height: 2023px;
    }
    .section-6 ul.list-roadmap {
        width: 412px;
        margin-top: 60px;
        height: 1793px;
    }
    .section-6 ul.list-roadmap::before {
        left: 0;
    }
    .section-6 ul.list-roadmap>li {
        margin-bottom: 70px;
    }
    .section-6 ul.list-roadmap>li.left {
        margin-left: 82px;
    }
    .section-6 ul.list-roadmap>li.left::before {
        right: 306px;
        left: auto;
    }
    .section-6 ul.list-roadmap>li.left::after {
        right: 400px;
        left: auto;
    }
    .section-6 ul.list-roadmap>li.right::after {
        right: 400px;
    }
    .section-7 .about-mina {
        border: 2px solid #f5bc00;
        padding-right: 30px;
        padding-left: 30px;
        padding-top: 30px;
        padding-bottom: 30px;
        margin-bottom: 40px;
    }
    .section-7 .about-mina .word {
        position: relative;
        max-width: 300px;
        text-align: right;
        margin-right: 80px;
    }
    .section-7 .about-mina .word div {
        width: 100%;
    }
    .section-7 .about-mina .word .word-1::after, .section-7 .about-mina .word .word-2::after {
        display: block;
    }
    .section-7 .about-mina .word::after {
        position: absolute;
        top: 50%;
        right: -60px;
        margin-top: -20px;
    }
    .section-7 .about-mina .initial {
        display: flex;
        align-items: center;
    }
}

@media only screen and (max-width: 767px) {
	main {
		font-size: 15px;
		font-size: 15px;
	}

	/* contents
	----------------------------------------------------*/
	h1 {
		font-size: 40px;
	}
	h2 {
		font-size: 22px;
        margin-bottom: 30px;
	}
	h3 {
		font-size: 20px;
	}
	h4 {
		font-size: 15px;
	}
    .section {
        padding-top: 50px;
        padding-bottom: 50px;
    }
    .mobile-menu .btn-wrap {
        display: flex;
        margin-top: 20px;
    }
    .mobile-menu .btn-1 {
        border-bottom: none;
        width: 48%;
        margin-right: 4%;
    }
    .mobile-menu .btn-2 {
        border-bottom: none;
        width: 48%;
    }
    .mobile-menu .btn-1 a,
    .mobile-menu .btn-2 a {
      display: block;
      text-align: center;
    }
    a.news-link {
        font-size: 14px;
        padding: 5px 40px 5px 20px;
    }
    .section-1 {
        height: 450px;
        background: url(../../static/images/lico/bg-main-1000.png) center bottom no-repeat;
        -webkit-background-size: 100% auto;
        background-size: 100% auto;
        padding-top: 80px;
    }
    .section-1 .main-txt h2 {
        font-size: 15px;
    }
    .section-3 {
        background: #f5bc00 url(../../static/images/lico/bg-yellow-wave-line-1000.png) center top no-repeat;
        -webkit-background-size: 100% auto;
        background-size: 100% auto;
    }
    .section-4 .trading-fee {
        padding: 30px;
    }
    .section-4 .trading-fee .trading-fee-img {
        width: 100%;
        margin-right: 0;
        margin-bottom: 20px;
        justify-content: center;
    }
    .section-4 .trading-fee .trading-fee-txt {
        flex: 1 1 100%;
    }
    .section-4 ul.list-feature {
        margin-top: 40px;
    }
    .section-4 ul.list-feature li {
        width: 100%;
    }
    .section-4 ul.list-feature li h3 {
        margin-top: 10px;
        margin-bottom: 20px;
    }
    .section-4 ul.list-feature li+li {
        margin-left: 0;
        margin-top: 20px;
    }
    .section-4 .trading-fee .ribbon {
        font-size: 14px;
        top: 20px;
        right: -70px;
    }
    .section-6 {
        background-image: url(../../static/images/lico/bg-yellow-polygon-1000.png),
        url(../../static/images/lico/bg-white-wave-line-1000.png);
        height: 1883px;
    }
    .section-6 ul.list-roadmap {
        height: 1713px;
    }
    .section-7 {
        background: url(../../static/images/lico/bg-yellow-wave-line-2-1000.png) center 90% no-repeat;
        -webkit-background-size: 100% auto;
        background-size: 100% auto;
    }
    .section-8 dl dt {
        padding: 0;
        width: 100%;
        margin-right: 0;
        border-bottom: none;
        font-size: 16px;
        font-weight: 600;
    }
    .section-8 dl dd {
        padding: 10px 0 20px;
        margin-bottom: 20px;
        border-bottom: 1px solid #aaa;
        width: 100%;
    }
    .section-9 .txt {
        margin-bottom: 30px;
    }
    .section-9 .field-wrap .ttl {
        font-size: 16px;
        width: 100%;
        margin-bottom: 6px;
    }
    .section-9 .field-wrap .field {
        flex: 1 1 auto;
    }
    .section-9 .field-wrap {
        margin-bottom: 20px;
    }
}

@media only screen and (max-width: 640px) {
    h1 {
        font-size: 26px;
        margin-top: 50px;
    }
    .gnav>ul {
        top: 20px;
    }
    header a.logo {
        top: 20px;
    }
    .section-6{
        height: 1723px;
    }
    .section-6 ul.list-roadmap {
        width: 280px;
        height: 1569px;
    }
    .section-6 ul.list-roadmap>li {
        margin-bottom: 54px;
        padding: 45px 20px 20px;
        width: 250px;
    }
    .section-6 ul.list-roadmap>li.left {
        width: 250px;
        padding: 45px 20px 20px;
        margin-left: 30px;
    }
    .section-6 ul.list-roadmap>li.left::before {
        width: 30px;
    }
    .section-6 ul.list-roadmap>li.left::before {
        right: 235px;
    }
    .section-6 ul.list-roadmap>li.left::after {
        right: 268px;
    }
    .section-6 ul.list-roadmap>li.right::before {
        right: 235px;
        width: 30px;
    }
    .section-6 ul.list-roadmap>li.right::after {
        right: 268px;
    }
    .section-6 ul.list-roadmap .date {
        width: 70px;
        height: 70px;
        padding: 0;
        font-size: 15px;
        top: -35px;
        margin-left: -35px;
    }
    .section-6 ul.list-roadmap .date::after {
        width: 80px;
        height: 80px;
        margin-left: -41px;
    }
    .section-7 .about-mina {
        padding-right: 20px;
        padding-left: 20px;
        padding-top: 20px;
        padding-bottom: 20px;
        margin-bottom: 30px;
        font-size: 20px;
    }
    .section-7 .about-mina .word {
        max-width: 200px;
        margin-right:40px;
    }
    .section-7 .about-mina .word::after {
        right: -40px;
    }
    .section-7 .about-mina .word div {
        width: 100%;
        font-size: 15px;
    }
    .section-7 .txt p {
        margin-bottom: 20px;
    }
} 
</style>

<template>
<div class="hex-flex">
    <main>
		<section class="section-1 row" id="top">
            <img src="../../static/images/lico/logo.svg">
			<div class="inner">
				<div class="main-txt fadein main-txt-fadein">
					<h1>{{$t('lico.li1')}} <br>{{$t('lico.li2')}}</h1>
                    <h2>{{$t('lico.li3')}}<br>{{$t('lico.li4')}}<br>{{$t('lico.li5')}}<br><br>
                   {{$t('lico.li6')}}<br>{{$t('lico.li7')}}</h2>
					<a href="https://www.mp-management.com" target="_blank" class="btn">{{$t('lico.li8')}}</a>
				</div>
			</div><!-- /.inner -->
		</section><!-- /.section-1 -->
	</main>
    </div>
</template>

<script>
  import $ from 'jquery'
  export default {
    name: 'lico',
    components: {},
    data() {
        return {};
    },
    mounted() {
        $(function () {
            // smooth scroll
            $('a[href^="#"]').click(function(){
                var speed = 400;
                var href= $(this).attr("href");
                var target = $(href == "#" || href == "" ? 'html' : href);
                var position = target.offset().top;
                $("html, body").animate({scrollTop:position}, speed, "swing");
                return false;
            });
            //file input style
            $("input[type='file']").on('change',function(){
                var file = $(this).prop('files')[0];
                if(!($(".filename").length)){
                    $("#input-group").append('<span class="filename"></span>');
                }
                $("#input-label").addClass('changed');
                $(".filename").html(file.name);
            });
        });
    }
  }
</script>
