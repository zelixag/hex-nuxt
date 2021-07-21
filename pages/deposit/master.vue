<style lang='less' scoped>
</style>
<template>
<div class="popup_result">
   <table width="100%" style="margin-top: 50px;">
    <tr>
      <td>
        <form  v-if="type == 'mastercard'" :action="$store.state.hex_config.mastercardpay" class="paymentWidgets" data-brands="MASTER">
        </form>
        <form  v-if="type == 'upi'" :action="$store.state.hex_config.mastercardpay" class="paymentWidgets" data-brands="UNIONPAY">
        </form>
      </td>
    </tr>
  </table>
</div>
</template>

<script>
  export default {
    name: 'success',
    layout: 'default2',
    components: {},
    data() {
      return {
        unique_id: this.$route.query.unique_id,
        jsurl: '',
        id: this.$route.query.id,
        type: this.$route.query.type,
        timer: '',
        IntervalStatusMaster: false,
      }
    },
    mounted() {
      console.log(this.type)
      if(!(this.unique_id == '' || this.unique_id == undefined)){
        this.jsurl =  this.$store.state.hex_config.mastercardpayjsurl+this.unique_id
        const s = document.createElement('script');
        s.type = 'text/javascript';
        s.src = this.jsurl;
        document.body.appendChild(s);
      }
      if(!(this.id == '' || this.id == undefined)){
          var masterConfirm = {
            id: this.id
          }
          console.log(this.id)
          this.$store.dispatch('master_deposit_confirm', masterConfirm).then((res) => {
            console.log(res)
              if(res.success){
                window.localStorage.setItem("masterDeposit", "success")
                this.$router.push({
                  path: '/master-deposit-success',
                  query: {
                    msg: res.msg,
                  }
                })
              }
          })    
      }
    }
  }
</script>