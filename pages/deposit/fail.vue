<style lang='less' scoped>
.popup_result{
  max-width: 768px;
   margin-left: auto;
   margin-right: auto;
    margin-top: 110px;
}
 .popup_div{
   background: #ffffff;
   border-radius: 10px;
   padding: 68px 30px;
   margin-top: 40px;
   margin-bottom: 116px;
 }
 .green_tit{
   color: #14a2a5;
 }
 .red_tit{
   color: #cc4040;
 }
 .dis_inb{
   display: inline-block;
   vertical-align: top;
 }
 .b_border{
   border-bottom: 1px solid #f0f0f0;
   padding-bottom: 30px;
 }
 .deposit_type_tit{
   font-weight: normal;
 }

 .mt20{
   margin-top: 20px;
 }
 .mt140{
   margin-top: 140px;
 }
.wid22{
  width: 22px;
  vertical-align: middle;
}
.width30{
  width: 22%;
}
.gray_color{
  color: #666;
}
.btn_deposit{
  padding: 8px 30px;
  font-size: 16px;
  border: 1px solid #14a2a5;
  border-radius: 10px;
}

 .btn_cancle_gray{
  background: #ffffff;
  color: #14a2a5;
}
.btn_cancle_gray:hover{
   background: #f0f0f0;
}
.tec{
  text-align: center;
}
</style>
<template>
<div class="popup_result">
   <div >
        <h2 class="green_tit dis_inb deposit_type_tit">Deposit/Withdraw</h2>
    </div>
    <div class="popup_div">
    <h2 class="red_tit tec">
      <img class="wid22" src="~/static/images/dw_fail.png"> 
     Transaction Failed ! 
      </h2>
    <div class="form_div">
        <p class="mt140">
        <nuxt-link to="/person/wallet" class="btn_cancle_gray btn_deposit">Close</nuxt-link>
        <!-- <button class="btn_cancle_gray btn_deposit" @click="close">Close</button> -->
        <!-- <a href="javascript:window.opener=null;window.open('','_self');window.close();">关闭</a> -->
      </p>

    </div>
  </div>
</div>
  
</template>

<script>
  export default {
    name: 'fail',
    layout: 'default2',
    components: {},
    data() {
      return {
        ticketID: 1111,
      }
    },
    methods: {
      close() {
        console.log(11)
        window.opener = null
        window.close()
      }
    }
  }
</script>