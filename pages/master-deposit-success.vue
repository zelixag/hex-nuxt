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
   padding: 40px 30px;
   margin-top: 40px;
   margin-bottom: 116px;
 }
 .green_tit{
   color: #14a2a5;
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
 .mt80{
   margin-top: 80px;
 }
.wid26{
  width: 26px;
  vertical-align: top;
}
.width30{
  width: 30%;
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
</style>
<template>
<div class="popup_result">
   <div >
        <h2 class="green_tit dis_inb deposit_type_tit">Deposit/Withdraw</h2>
    </div>
    <div class="popup_div">
    <h2 class="b_border green_tit">
      <img class="wid26" src="~/static/images/dw_success.png"> 
      Transaction successful
      </h2>
    <div class="form_div">
      
        <p class="form_name mt20"> <span class="width30 dis_inb gray_color">Deposit Amount(<i style="font-size: 12px;">{{currencyname.toUpperCase()}}</i>): </span> <span class="green_tit dis_inb">{{amount}} </span></p>
        <p class="form_name mt20"><span class="width30 dis_inb gray_color">TXID: </span> <span class="green_tit dis_inb">{{ticketID}} </span></p>
        <p class="mt80">
        
      </p>

    </div>
  </div>
</div>
  
</template>

<script>
  export default {
    name: 'master_success',
    layout: 'default2',
    components: {},
    data() {
      return {
        ticketID: '',
        amount: '',
        currencyname: '',
        msg: this.$route.query.msg,
      }
    },
    mounted() {
      console.log(this.msg)
      if(this.msg){
        var arr = []
        arr = this.msg.split('|')
        this.amount = this.global_get_tofixed(arr[2], 2) 
        this.currencyname = arr[0]
        this.ticketID = arr[1]
      }
    }
  }
</script>