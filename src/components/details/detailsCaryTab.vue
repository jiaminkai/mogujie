<template>
   <div class="caryTab">
        <div class="kefu">
           <span class="iconfont">&#xe91b;</span>
           <span>客服</span>
       </div>
       <div class="dainpu">
           <span class="iconfont">&#xe666;</span>
           <span>店铺</span>
       </div>
       <div class="addgoods">
           <span class="iconfont">&#xe60b;</span>
           <span>收藏</span>
       </div>
        <div class="addcary" @click="upcary(1)">
            <span>加入购物车</span>
        </div>
        <div class="buy" @click="upcary(2)">立即购买</div>

   </div>
</template>

<script>

export default {
    name:'caryTab',
    data(){
        return{
            iscray:false
        }
    },
    methods:{
        upcary(val){
            // this.iscray=!this.iscray
            this.$emit('upcary',val)
        }
    },
    components:{

    }
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

.iconfont{
    font-family:"iconfont" !important;
    font-size:16px;font-style:normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;}
.caryTab{
    width: 100%;
    height: 50px;
    display: flex;
    position: fixed;
    bottom: 0;
    background: floralwhite;

}
.kefu,.addgoods,.dainpu{
    flex: 1.2;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 10px;
}
.buy,.addcary{
    flex: 1.8;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 14px;
}
.buy{
     background: salmon;
    color: seashell;
    
}
.addcary{
   background: yellow;
}
.addgoods,.addcary,.buy{
    place-content: center;
    place-items: center;
}

</style>