  <style scoped>
.intro {
  padding: 10px;
  background: transparent;
  width: 100%;
  height:95%;
  overflow: scroll;
}
.intro::-webkit-scrollbar {
  display: block !important;
  width: 6px;
  cursor: pointer;
}
.intro::-webkit-scrollbar-thumb {
  border-radius: 6px;
  background-color: rgba(94, 101, 115, 0.6);
}
.intro h2,
.intro h3,
.intro p {
  margin-bottom: 10px;
  color: #8790a1;
}
.intro p {
  font-size: 12px;
}
.intro h3 {
  border-bottom: 1px solid #cccccc;
}
</style>
  <template>
    <div class="intro">
      <h2>{{currendydata.currencyname}}</h2>
      <h3>{{$t('currency.title1')}}{{currendydata.currencyname}}{{$t('currency.title2')}}</h3>
      <p>{{currendydata.description}}</p>
      <h3>{{$t('currency.baseInfo')}}</h3>
      <p>
        <!-- {{$t('currency.rankings')}}:{{currendydata.iorder}}
        <br /> -->
        {{$t('currency.issue')}}:{{global_get_local_time(currendydata.publishtime).format('YYYY-MM-DD')}}
        <br />
     
        {{$t('currency.totalCirculation')}}:{{currendydata.circulation}}    <br />
        {{$t('currency.circulationTol')}}:{{currendydata.totalcirculation}} <br />
        {{$t('currency.officialWebsite')}}:{{currendydata.info.website}} <br />
        {{$t('currency.exNum')}}:{{currendydata.tradeplantnum}} <br />
        {{$t('currency.whitePaper')}}:{{currendydata.info.whitepaper}}
        <br />
      
        <!-- <br />Block Explore：{{currendydata.info.strlogo}}  -->
      </p>
      <!-- <h3> {{$t('currency.ICOInformation')}}</h3> -->
      <!-- <p> -->
        <!-- {{$t('currency.WhitePaper')}}:{{currendydata.info.whitepaper}} -->
        <!-- <br /> -->
        <!-- {{$t('currency.Distribution')}}:{{currendydata.info.ico.distribution}}
        <br /> -->

        <!-- {{$t('currency.Raise')}}:{{currendydata.info.ico.ico_coin}}    <br />
        {{$t('currency.ICOTotal')}}:{{currendydata.info.ico.supply}} <br />
        {{$t('currency.CrowdfundingAmount')}}:{{currendydata.info.ico.raised}} 
        <br /> -->
      
        <!-- <br />Block Explore：{{currendydata.info.strlogo}}  -->
      <!-- </p> -->
    </div>
</template>
<script>
import $ from "jquery";
export default {
  name: "currency",
  props: ["symble"],
  data() {
    return {
      articalDatas: [],
      lang: this.$store.state.hex_lang.locale,
      currendydata: {
        info: {
          englishname: "",
          ico:{
            
          }
        }
      },
      introShow: false
    };
  },
  watch: {
    "$store.state.hex_lang.locale": function(val) {
      this.lang = val;
      console.log(val);
      this.getarticle();
    },
    symble: function(val) {
      this.getarticle();
    }
  },
  mounted() {
   
    this.getarticle();
  },
  methods: {
    falseFun() {
      this.introShow = !this.introShow;
    },
    getarticle() {
      this.$store
        .dispatch("com_article_search", {
          menutype: 3985,
          pageindex: 1,
          pagesize:10
          // keywords: this.lang + "-" + this.symble,
        })
        .then(artical => {
          if (artical.data) {
            this.articalDatas = artical.data.pagedata
              ? artical.data.pagedata
              : [];
            // console.log(artical.data);
            this.articalDatas.filter(x => {
              var currency = JSON.parse(x.shortdesc);
              if (currency.currencyname == this.symble) {
                this.currendydata = currency;
              }
            });
          }
        });
    }
  }
};
</script>