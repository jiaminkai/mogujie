<template>
  <div class="Cary">
      <cary-title class="cary-title">
          <div slot="title">购物车( {{this.courrnum}} )</div>
      </cary-title>
      <div class="carygoodslist">
          <div class="goodsitem" v-for="(item,index) in this.Carylist" :key="index">
              <div class="chockbox" @click="danxuan(item.stockId)">
                <span v-if="item.isactive" class="iconfont">&#xe66a;</span>
                <span v-else  class="iconfont">&#xe66b;</span>
              </div>
              <div class="goodsitem-img">
                <img :src="item.img" alt="">
              </div>
              <div class="goodscenter">
                 <div class="goodsTitle">
                     {{item.title}}
                 </div>
                 <div class="goodsDesc">
                    <span>{{item.sizename}}</span><span>{{item.colorname}}</span>
                 </div>
                 <div class="goodsPrice">
                    <span>¥{{item.nowprice}}</span>
                    <span>x{{item.courr}}</span>
                 </div>
              </div>
          </div>
      </div>
      <div class="carytab">
          <div class="quanxuan" @click="allchange">
                <span v-if="this.allbutton" class="iconfont">&#xe66a;</span>
                <span v-else  class="iconfont">&#xe66b;</span>
                <span>全选</span>
          </div>
          <div class="sumprice">
              合计：¥{{this.setnum}}
          </div>
          <div class="jiesuan">
            去结算({{this.courrnum}})
          </div>  
      </div>
  </div>
</template>

<script>
import caryTitle from '../components/navtab/navtab.vue';
export default {
  name:'Cary',
  data(){
    return{
      courrnum:0,
      Carylist:[],
      setnum:0,
      allbutton:false
    }
  },
  components:{
    caryTitle
  },
  computed:{
  },
  methods:{
    danxuan(id){
      var newcary = this.Carylist
      console.log("点击了单选按钮" )
      newcary.forEach(item=>{
        if(item.stockId==id){
          console.log(item.isactive )
          item.isactive=! item.isactive
        }
      })
      this.Carylist=newcary
      this.$forceUpdate();
      this.changeinit()
    },
    changeinit(){
      var courr=0 
      var setnum =0
      this.Carylist.forEach(item=>{
        if(item.isactive==true){
           courr += item.courr
           setnum += item.courr*item.nowprice
        }
        console.log("courr",courr )
          this.courrnum=courr
          this.setnum=setnum
    })
    var c= this.Carylist.every(item=>{
     return item.isactive== true
    })
    if(c){
      console.log("cg" )
      this.allbutton = true
    }else{
      this.allbutton = false
    }
    },
    allchange(){
      console.log(this.allbutton )
      this.allbutton = !this.allbutton
      this.Carylist.forEach(item=>{
        item.isactive =this.allbutton
      })
      this.$forceUpdate();
      this.changeinit()
    }
  },

  created:function(){
    var Cary=this.$store.state.cary
    Cary.forEach(item=>{
      item.isactive = false  
    })
    this.Carylist=Cary
    this.changeinit()
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
.iconfont{
    font-family:"iconfont" !important;
    font-size:16px;font-style:normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;}
.cary-title{
  background: lightcoral;
}
.goodsitem{
  display: flex;
  padding: 8px;
  box-shadow: 0 1px 2px  rgba(0, 0, 0, 0.2);
}
.goodsitem-img{
  width: 23%;
  padding: 0 10px;
}
.goodsitem-img img{
  width: 100%;
  height: 80px;

  border-radius: 8px;
}
.goodscenter{
  flex: 1;
  display: flex;
  flex-direction: column;
  /* justify-content: space-around ; */
}
.chockbox{
  display: flex;
  justify-content: center;
  align-items: center;
}
.goodsTitle{
  width: 200px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  font-size: 14px;
  
}
.goodsDesc{
  display: flex;
  text-align: left;
}
.goodsDesc span{
  margin-right: 10px;
  place-self: center;
  font-size: 12px;
  line-height: 30px;
}
.goodsPrice{
  display: flex;
  justify-content: space-between ;
  margin-top: 10px;
 
}
.goodsPrice span:nth-child(1){
  color: lightcoral;
 
}
.carytab{
  display: flex;
  position: fixed;
  bottom: 50px;
  left: 0px;
  width: 100%;
  height: 35px;
  background: rgba(255, 255, 255, 0.6);
  box-shadow: 0 -1px 3px  rgba(0, 0, 0, 0.1);
  line-height: 35px;
  padding:  0 10px;

}
.sumprice{
  margin-left: 15px;
  font-size: 12px;
}
.jiesuan{
  width: 110px;
  margin-left: auto;
  text-align: center;
  background: salmon;
  color: aliceblue  ;
}
</style>