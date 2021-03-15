<template>
  <div class="about">
    <navtab class="nav-tab">
      <div slot="title" class="nav-title">
      <div>购物街</div>
      </div>
    </navtab>
    <swipebox  class="swiper" :banners="banners" @SwiperLoadimg="SwiperLoadimg"></swipebox>
    <recommend :recommend="recommend"/>
    <tabcont  :title="['流行','新款','精选']" ref="tabcont" :tabTop="this.tabconttop"/>
  </div>
</template>
<style scoped>

.about{
  width: 100%;
  height: auto;
}
.swiper{
  margin-top: 40px;
}
.nav-tab{
  position: fixed;
  z-index: 5;
  top: 0;
  left: 0;
  width: 100%;
  color: #f4f4f4;
  background-color: salmon;
  box-shadow: 0 3px  rgba(100, 100, 100, .1) ;
}
.nav-title{
  display: flex;

}
.nav-title div{
  flex: 1;
  text-align: center;
  
  
}


</style>
<script>
import swipebox from '../components/common/swipebox.vue';
import {getHomeData,getHomeGoods} from '../request/home'
import navtab from '../components/navtab/navtab.vue'
import recommend from '../components/home/recom.vue'
import tabcont from "../components/tabcontrol/TabControl.vue";
export default {
  data(){
    return{
      banners:[],
    recommend:[],
    tabconttop:0
      
    }
  },
  components:{
    swipebox,
    navtab,
    recommend,
    tabcont
  },
   async created(){
   const {data:data} =await getHomeData()
   this.banners=data.data.banner.list
   this.recommend=data.data.recommend.list
   console.log(data.data )
  
  
  },
  mounted(){

  },
  methods:{
    SwiperLoadimg(){
      console.log("aa")
      // console.log("tab",this.$refs.tabcont.$el.offsetTop )
      this.tabconttop=this.$refs.tabcont.$el.offsetTop 
    }
  },


}
</script>
