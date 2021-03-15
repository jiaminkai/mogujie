<template>
<div class="details">
  <detailnav class="detailnav" :list="this.titles" @navchange="navchange" :index="navindex"/>
  <detailswipe :banners="this.titlebox.topImages" class="detailswipe"/>
  <div class="detailsbox">
    <titles :deTitle="this.titlebox"/>
    <detailshop :shop="this.shop"/>
  </div>
  <detailshow :show="this.show"/>
  <detailsParams :params="params" ref="params"/>
  <detail-pingjia :params="params" ref="pingjia"/>
  <detail-tuijian :recom="recom" ref="recom" />
  <detailCary @upcary="upcary" />
  <transition name="fade"> 
      <show-cary v-if="this.$store.state.isCary" :skuInfo="skuInfo" :iid="this.iid"/>
  </transition>
  <div class="moban" v-if="this.$store.state.isCary" @click="delmoban"></div>
  <span v-if="this.ishuitop" class="iconfont huitop" @click="backtop">&#xe6f8;</span>
  
  
</div>

  
  
</template>

<script>
import detailnav from '../components/details/DetailsNav.vue';
import detailswipe from "../components/common/swipebox.vue";
import titles from '../components/details/detailsTitle.vue';
import detailshop from '../components/details/detailShop.vue';
import detailshow from "../components/details/detailsbox.vue";
import detailsParams from "../components/details/detailsParams.vue";
import detailCary from '../components/details/detailsCaryTab.vue';
import detailPingjia from '../components/details/detailPingjia.vue';
import detailTuijian from '../components/details/detailTuijian.vue';
import showCary from '../components/details/ShowCary.vue';






import { getDetails,Shop,Title,ImgShow,Params,getRecom,skuInfo} from "../request/details.js";



export default {
name:'Details',
data(){
  return{
    titles:['商品','参数','评论','推荐'],
    iid:'',
    topImages:[],
    info:{},
    shop:{},
    titlebox:{},
    show:{},
    params:{},
    ishuitop:false,
    navindex:0,
    recom:[],
    iscray:false,
    skuInfo:{}
  }
},
components:{
  detailnav,
  detailswipe,
  titles,
  detailshop,
  detailshow,
  detailsParams,
  detailCary,
  detailPingjia,
  detailTuijian,
  showCary,
},
mounted(){
  window.addEventListener('scroll',this.handscroll);
  
},
methods:{
  async getdetalis(){
       const {data:detailsList} = await getDetails(this.iid)
       const {data:detailRecom} = await getRecom()
        console.log("推荐",detailRecom)
        this.recom = detailRecom.data.list
        console.log(detailsList.result)
        this.topImages=detailsList.result.itemInfo.topImages
        this.info=detailsList.result;
        this.shop=new Shop(this.info.shopInfo)
        console.log(this.shop);
        this.titlebox=new Title(this.info.itemInfo,this.info.columns)
        console.log(this.titlebox)
        this.show =new ImgShow(detailsList.result.detailInfo)
        console.log(this.show)
        this.params =new Params(detailsList.result.itemParams,detailsList.result.rate)
        console.log(this.params)
        this.params =new Params(detailsList.result.itemParams,detailsList.result.rate)
        console.log(this.params)
        this.skuInfo =new skuInfo(detailsList.result.skuInfo)
        console.log(this.skuInfo)
  },
  backtop(){
    window.pageYOffset=document.body.scrollTop=document.documentElement.scrollTop=0
  },
  delmoban(){
    this.$store.commit('isCaryActive')
  },
  navchange(val){
    console.log(val )
    switch(val){
      case 0: console.log("diaoy" ); window.pageYOffset=document.body.scrollTop=document.documentElement.scrollTop= 0;break;

      case 1:console.log( this.$refs.params.$el.offsetTop ); document.body.scrollTop=document.documentElement.scrollTop = this.$refs.params.$el.offsetTop;break;

      case 2:console.log( this.$refs.pingjia.$el.offsetTop ); document.body.scrollTop=document.documentElement.scrollTop = this.$refs.pingjia.$el.offsetTop; break;

      case 3:console.log( this.$refs.pingjia.$el.offsetTop ); document.body.scrollTop=document.documentElement.scrollTop = this.$refs.recom.$el.offsetTop; break;
      default: console.log("111");
    }
  },
  upcary(val){
    this.$store.commit('isCaryActive')
    console.log(val )
    this.$store.commit('iFcary',val)

  },
  handscroll(){
    scroll=window.pageYOffset||document.body.scrollTop||document.documentElement.scrollTop;
    console.log(scroll )
    if(scroll>600){
      this.ishuitop=true
    }else{
      this.ishuitop=false

    }
    if(scroll>this.$refs.params.$el.offsetTop&&scroll<this.$refs.pingjia.$el.offsetTop){
      this.$store.commit('navchange',1)
    }
    if(scroll<this.$refs.params.$el.offsetTop){
      this.$store.commit('navchange',0)
    }
    if(scroll>this.$refs.pingjia.$el.offsetTop){
      this.$store.commit('navchange',2)
    }
    if(scroll>this.$refs.pingjia.$el.offsetTop){
      this.$store.commit('navchange',3)
    }
  }

},
 created(){
  this.iid=this.$route.query.iid;
  this.getdetalis()
},
 beforeDestroy() {
    window.removeEventListener('scroll', this.handscroll)
  },

}
</script>

<style>
@font-face {
  font-family: 'iconfont';  /* project id 1723175 */
  src: url('//at.alicdn.com/t/font_1723175_bob4w1o1bs.eot');
  src: url('//at.alicdn.com/t/font_1723175_bob4w1o1bs.eot?#iefix') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_1723175_bob4w1o1bs.woff2') format('woff2'),
  url('//at.alicdn.com/t/font_1723175_bob4w1o1bs.woff') format('woff'),
  url('//at.alicdn.com/t/font_1723175_bob4w1o1bs.ttf') format('truetype'),
  url('//at.alicdn.com/t/font_1723175_bob4w1o1bs.svg#iconfont') format('svg');
}
.moban{
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.3);
    position: fixed;
    top: 0;
    left: 0;
     z-index: 999;
}
.iconfont{
    font-family:"iconfont" !important;
    font-size:18px;font-style:normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;}
.details{
  width: 100%;
  height: auto;
  background: #f4f4f4;
  position: relative;
  z-index: 9999;
}
.detailsbox{
      padding: 0 10px;
      height: auto;
}
.detailswipe{
  width: 100%;
  height: 300px;
  overflow: hidden;
}
.detailnav{
  position: sticky;
  background: #fff;
  top: 0;
  z-index: 9;
}
.huitop{
  display: block;
  width: 50px;
  height: 50px;
  position: fixed;
  bottom: 60px;
  right: 6px;
  color: indianred;
  font-size: 40px ;
}


.fade-enter-active { transition: all .8s ease; }
 .fade-leave-active { transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0); }
  .fade-enter, .fade-leave-to { transform: translateY(400px); opacity: 0; }

</style>