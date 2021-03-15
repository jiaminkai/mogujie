<template>
  <navs>
     <span slot="back" class="iconfont" @click="backs()">&#xe629;</span>
         <span  slot="title" 
                v-for="(item,index) in this.list" 
                :key="index" 
                :class="index==$store.state.navIndex?'activeColor':''"
                @click="changeNav(index)"
                class="text-style">{{item}}</span>
  </navs>
</template>

<script>
import navs from '../navtab/navtab.vue'


export default {
name:'detailsnav',
data(){
    return{
        tabIndex:0
    }
},
props:{
    list:Array,
    navindex:{
        type:Number,
        default:0
    }
},
components:{
    navs
},
computed:{

},
methods:{
    changeNav(index){
        this.tabIndex=index;
        this.$store.commit('navchange',index)
        this.$emit('navchange',index)
    },
    backs(){
        this.$router.go(-1);
    }
},
mounted(){
//    this.tabIndex= this.$store.state.navIndex
}
}
</script>

<style>
@font-face {
  font-family: 'iconfont';  /* project id 1723175 */
  src: url('//at.alicdn.com/t/font_1723175_b8ylx2xggwa.eot');
  src: url('//at.alicdn.com/t/font_1723175_b8ylx2xggwa.eot?#iefix') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_1723175_b8ylx2xggwa.woff2') format('woff2'),
  url('//at.alicdn.com/t/font_1723175_b8ylx2xggwa.woff') format('woff'),
  url('//at.alicdn.com/t/font_1723175_b8ylx2xggwa.ttf') format('truetype'),
  url('//at.alicdn.com/t/font_1723175_b8ylx2xggwa.svg#iconfont') format('svg');
}
.iconfont{
    font-family:"iconfont" !important;
    font-size:16px;font-style:normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;}
.activeColor{
    /* border-bottom: 1px solid  salmon; */
    color: salmon;
}
.text-style{
    font-size: 10px;
    display: block;
    width: 100%;
}
</style>