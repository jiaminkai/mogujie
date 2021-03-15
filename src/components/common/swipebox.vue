<template>
  <div class="swipeboxs">
      <swipe>
          <swipeitem v-for="(item ,index) in this.banners" :key="index">
              <img v-if="item.image" class="swipeimg" :src="item.image" alt="" @load="loadimg">
              <img v-else class="swipeimg" :src="item" alt="" @load="loadimg">
          </swipeitem>
      </swipe>
  </div>
</template>

<script>
import swipe from "../swipe/swipe.vue";
import swipeitem from "../swipe/swipeitem.vue";
export default {
    name:'swipebox',
    data(){
        return{
            loading:true
        }
    },
    props:{
        banners:{
            type:Array,
        }
    },
    components:{
        swipe,
        swipeitem
    },
    methods:{
        loadimg(){
            
            if(this.loading){
                this.loading=false
                this.$emit('SwiperLoadimg')
            }
            
        }
    }
}
</script>

<style scoped>
.swipeboxs{
    padding: 0;
    margin: 0;
    overflow: hidden;
    position: relative;
}
</style>