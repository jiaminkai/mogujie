<template>
<div class="tab" ref="goods">
  <div class="tabcont">
      <div class="tabcont-item"  v-for="(item,index) in this.title" :key="index" @click="indexof(index)">
          <span :class="{isactive:index==conusIndex}">{{item}}</span>
      </div>
  </div>
   <div class="tabcont-goods" v-if="this.conusIndex==0">
          <div class="tabcont-goods-item" v-for="(item,index) in this.goods.pop.list" :key="index" @click="todetails(item.shopId,item.iid)">
              <!-- :style="{width:item.show.w+'px',heigth:item.show.h+'px'}" -->
              <img :src="item.show.img"  alt="">
              <div class="tabcont-goods-title">{{item.title}}</div>
              <div class="tabcont-goods-price"><span>{{item.price}}</span><span class="iconfont">&#xe712;</span><span>{{item.cfav}}</span></div>
          </div>
    </div>
     <div class="tabcont-goods" v-if="this.conusIndex==1">
          <div class="tabcont-goods-item" v-for="(item,index) in this.goods.new.list" :key="index" @click="todetails(item.shopId,item.iid)">
              <!-- :style="{width:item.show.w+'px',heigth:item.show.h+'px'}" -->
              <img :src="item.show.img"  alt="">
              <div class="tabcont-goods-title">{{item.title}}</div>
              <div class="tabcont-goods-price"><span>{{item.price}}</span><span class="iconfont">&#xe712;</span><span>{{item.cfav}}</span></div>
          </div>
    </div>
     <div class="tabcont-goods" v-if="this.conusIndex==2">
          <div class="tabcont-goods-item" v-for="(item,index) in this.goods.sell.list" :key="index" @click="todetails(item.shopId,item.iid)">
              <!-- :style="{width:item.show.w+'px',heigth:item.show.h+'px'}" -->
              <img :src="item.show.img"  alt="">
              <div class="tabcont-goods-title">{{item.title}}</div>
              <div class="tabcont-goods-price"><span>{{item.price}}</span><span class="iconfont">&#xe712;</span><span>{{item.cfav}}</span></div>
          </div>
    </div>
</div>
</template>

<script>
import {getHomeData,getHomeGoods} from '../../request/home'
export default {
    name:'tabcont',
    data(){
        return{
            conusIndex:0,
               goods:{
                    'pop':{'page':1,list:[]},
                    'new':{'page':1,list:[]},
                    'sell':{'page':1,list:[]}
                    }
        }
    },
    props:{
        title:{
            type:Array,
            default:['流行','新款','精选']
        },
        tabTop:{
            type:Number,

        }
 
    },
    methods:{
        // 获取tab的索引
        indexof(index){
            console.log("index", index)
            this.conusIndex=index
            this.$store.commit('change',index);
            document.documentElement.scrollTop=296
        },
        // 跳转详情
        todetails(id,iid){
            this.$router.push({path:'/details'+id+'',query:{iid}})
        },
    async handleScroll(){
       var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
       var offsetHeigth =document.querySelector('.about')
       var set =document.getElementsByTagName('body')[0]
     
        // console.log(scrollTop)
    //    console.log(offsetHeigth.scrollHeight+40-set.clientHeight-scrollTop)
        // console.log(this);
       if(offsetHeigth.scrollHeight+40-set.clientHeight-scrollTop==0){
           console.log("加载下一页" )
         var a= this.$store.state.conusIndex==0?'pop':this.$store.state.conusIndex==1?'new':this.$store.state.conusIndex==2?'sell':''
         console.log(a )
         this.goods[a].page++
         console.log(this.goods[a].page )
         const {data:newgoods}=await getHomeGoods(a,this.goods[a].page)
        this.goods[a].list.push(...newgoods.data.list)
       }
    }
    },
    mounted(){
    window.addEventListener('scroll',this.handleScroll)
  
  },
  destroyed(){
   
    window.removeEventListener('scroll', this.handleScroll);
    },
    computed:{
     
    },
    async created(){
       
        const {data:goodspop}=await getHomeGoods('pop',1)
        this.goods['pop'].list=goodspop.data.list
        console.log("pop", this.goods.pop.list)

        const {data:goodsnews}=await getHomeGoods('new',1)
        this.goods['new'].list=goodsnews.data.list
        console.log("new", this.goods.new.list)

        const {data:goodssell}=await getHomeGoods('sell',1)
        this.goods['sell'].list=goodssell.data.list
        console.log("sell", this.goods.sell.list)
    }
}
</script>

<style >
@font-face {
  font-family: 'iconfont';  /* project id 1723175 */
  src: url('//at.alicdn.com/t/font_1723175_zmdguucwbdn.eot');
  src: url('//at.alicdn.com/t/font_1723175_zmdguucwbdn.eot?#iefix') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_1723175_zmdguucwbdn.woff2') format('woff2'),
  url('//at.alicdn.com/t/font_1723175_zmdguucwbdn.woff') format('woff'),
  url('//at.alicdn.com/t/font_1723175_zmdguucwbdn.ttf') format('truetype'),
  url('//at.alicdn.com/t/font_1723175_zmdguucwbdn.svg#iconfont') format('svg');
}
.iconfont{
    font-family:"iconfont" !important;
    font-size:18px;font-style:normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;}
.tab{
    display: flex;
    flex-direction: column;
    height: auto;
    margin-bottom: 50px;
}
.tabcont{
    width: 100%;
    display: flex;
    height: 34px;
     position: sticky;
  top: 40px;
  background-color: #fff;
}
.tabcont-item{
    flex: 1;
    height: 34px;
    line-height: 38px;
    text-align: center;
}
.tabcont-item span{
   /* display: block; */

   padding-bottom: 4px;
}
.isactive{
       border-bottom: 3px solid salmon;
}
.tabcont-goods{
    column-count: 2;
    column-gap: 10px;
    padding: 5px;

}
.tabcont-goods-item{
    width: 100%;
    break-inside: avoid;
    box-sizing: border-box;
    /* padding: 1px; */
 
}
.tabcont-goods-item img{
    width: 100%;
     border-radius: 5px;
}
.tabcont-goods-title{
    width: 95%;
    margin: 3px auto;
    white-space: nowrap;
    font-size: 10px;
    text-align: left;
    text-overflow: ellipsis;
    overflow: hidden;
}
.tabcont-goods-price{
    font-size: 10px;
    text-align: center;
    height: 18px;
    line-height: 18px;
    padding-bottom: 10px;
}
.tabcont-goods-price span:nth-child(1){
    color: salmon;
    margin-left: 3px    ;
}

</style>