<template>
  <div class="tab-item" @click="clicktab()">
        <slot v-if="!isActive" name="tab-icon" ></slot>
        <slot v-else name="tab-icon-active" ></slot>
        <div :style="isActive ? {color:this.activeColor}:{}">
            <slot name="tab-title"></slot>
        </div>
 
  </div>
</template>

<script>
export default {
    name:'tabber-item'  ,
    data(){
        return{
            // isActive:true
        }
    },
    props:{
        path:String,
        activeColor:{
            type:String,
            default:'red'
        }
    },
     computed: {
      isActive() {
        return this.$route.path.indexOf(this.path) !== -1
      },
      isTextActive(){
          return this.isActive ? {color:this.activeColor}:{}
      }
   
    },
    methods:{
        clicktab(){
            console.log(this.path);
            this.$router.replace(this.path)
        }
    },
    created(){
        console.log( this.activeColor)
    }
}
</script>

<style>
.tab-item{
    flex: 1;
    height: 50px;
}
</style>