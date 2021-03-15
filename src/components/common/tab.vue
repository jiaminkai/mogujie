<template>
   <tabber>
     <tabberitem path='/home' activeColor='pink'>
       <span slot="tab-icon"   class="iconfont">&#xe610;</span>
       <span slot="tab-icon-active"  class="iconfont" style="color:pink" >&#xe610;</span>
       <span slot="tab-title">首页</span>
     </tabberitem>
        <tabberitem path='/cart' activeColor='pink'>
        <span slot="tab-icon"  class="iconfont">&#xe612;</span>
       <span slot="tab-icon-active" class="iconfont" style="color:pink">&#xe612;</span>
       <span slot="tab-title">分类</span>
     </tabberitem>
        <tabberitem path='/cary' activeColor='pink'>
            <span slot="tab-icon"  class="iconfont">&#xe60a;</span>
            <span slot="tab-icon-active"  class="iconfont" style="color:pink">&#xe60a;</span>
            <span slot="tab-title">购物车</span>
     </tabberitem>
        <tabberitem path='/my' activeColor='pink'>
          <span slot="tab-icon"  class="iconfont">&#xe630;</span>
          <span slot="tab-icon-active"  class="iconfont" style="color:pink"> &#xe630;</span>
          <span slot="tab-title">我的</span>
     </tabberitem>
   </tabber>
</template>

<script>
// @ is an alias to /src


import tabber from '../tabber/tabber.vue'
import tabberitem from '../tabber/tabber-item.vue'

export default {
  name: 'HomeTab',
  components: {
  tabber,
  tabberitem
  }
  ,
 
}
</script>

<style >
@font-face {
  font-family: 'iconfont';  /* project id 1723175 */
  src: url('//at.alicdn.com/t/font_1723175_4del7wegwou.eot');
  src: url('//at.alicdn.com/t/font_1723175_4del7wegwou.eot?#iefix') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_1723175_4del7wegwou.woff2') format('woff2'),
  url('//at.alicdn.com/t/font_1723175_4del7wegwou.woff') format('woff'),
  url('//at.alicdn.com/t/font_1723175_4del7wegwou.ttf') format('truetype'),
  url('//at.alicdn.com/t/font_1723175_4del7wegwou.svg#iconfont') format('svg');
}
.iconfont{
    font-family:"iconfont" !important;
    font-size:16px;font-style:normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;
    }
</style>