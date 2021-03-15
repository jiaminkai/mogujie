<template>
  <div class="detailsshop">
      <div class="top">
          <img :src="this.shop.logo" alt="">
          <div class="shopname">{{this.shop.name}}</div>
      </div>
      <div class="contar">
          <div class="showleft">
              <div class="zongxiaoliang">
                  <span>{{money}}</span>
                  <span>总销量</span>
              </div>
              <div class="allbaby">
                  <span>{{this.shop.cGoods}}</span>
                  <span>全部宝贝</span>
              </div>

          </div>
          <div class="showrigth">
              <div class="showrigth-item" v-for="(item,index) in this.shop.score" :key="index"><span>{{item.name}}</span><span>{{item.score}}</span><span v-if="item.isBetter" class="gao">高</span><span class="di" v-else>低</span></div>
          </div>
      </div>
      <div class="details-btn">进店逛逛 </div>
  </div>
</template>

<script>
export default {
    name:'Shop',
    data(){
        return{
            shops:{},
        }
    },
    props:{
        shop:Object,
    },
    methods:{

    },
    computed:{
            money(){
            var value = this.shop.cSells
            var a=['万','千','百']
            let k =10000;
            var c=0.0;
            if(value>k){
                c=(value/k).toFixed(1)+ a[0]
                
            }else if(value<k && value>k/10){
                 c=(value/(k/10)).toFixed(1)+ a[1]
            }else{
               c=(value/(k/100)).toFixed(1)+ a[2]
            }
            console.log("c",c )
            return c
        }
    },
    mounted(){
        
    }
}
</script>

<style>
.detailsshop{
    margin-top: 30px;
    height: auto;
}
.top{
    display: flex;
    align-items: center;

}
.top img{
    width: 50px;
    height: 50px;
    margin-right: 10px;
    border-radius: 50%;
}
.contar{
    display: flex;
    flex-direction: row;
     padding: 15px 0px 15px 20px;
}
.showleft{
    display: flex;  
    border-right: 2px solid #f4f4f4;
    margin: 10px 0;
    padding-right: 15px;
}
.zongxiaoliang span,.allbaby span{
   display: block;
   font-size: 12px;
}
.zongxiaoliang span:nth-child(1),.allbaby span:nth-child(1){
   font-size: 16px;
}
.zongxiaoliang,.allbaby{
    margin-right: 10px;
    height: 64px;
    line-height: 24px;
    align-items: center;
}
.showrigth{
    flex: 1;
    padding: 0 5px 0 20px;
    font-size: 12px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
.showrigth-item{
    display: flex;
    justify-content: space-between;
}
.gao{
    display: block;
    width:14px;
    height: 16px;
    background: coral;
}
.di{
    display: block;
    width:14px;
    height: 16px;
    background:darkseagreen
}
.details-btn{
    width: 40%;
    height: 30px;
    text-align: center;
    line-height: 30px;
    background: #dcdcdc;
    color: dimgray;
    font-size: 14px;
    margin: 15px auto;
    border-radius: 5px;
}
</style>