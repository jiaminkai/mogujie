<template>
      <div class="ShowCary">
      <div class="ShowCaryTitle">
          <div class="TitleImg">
              <img :src="this.caryitem.img" alt="">
          </div>
          <div class="TitleParams">
                <span class="">{{this.skuInfo.defaultPrice}}</span>
                <span id="changesize">
                    <span v-if="!isshow">
                        默认 
                    </span>
                    <div v-else>
                        已选  :  {{this.caryitem.sizename}}{{this.caryitem.colorname}}
                    </div>
                </span>
                <span class="">库存{{this.skuInfo.totalStock}}件</span>
                <span class="">请选择 尺寸 颜色</span>
          </div>
          <div class="del" @click="down">
              X
          </div>
      </div>
    <div class="size">
        <div class="size-title">
            {{this.skuInfo.size.label}}  
        </div>
        <div class="size-item" >
            <span   v-for="(item,index) in this.skuInfo.size.list" 
                    :key="index"
                    @click="sizeactive(index,item.name)" 
                    :class="index==sizeIndex?'sizeactive':''">{{item.name}}</span>
        </div>
    </div>
    <div class="color-box">
        <div class="colorTitle">
            {{this.skuInfo.color.label}}
        </div>
        <div class="color-item" >
            <span :class="index==colorIndex?'sizeactive':''" 
                   v-for="(item,index) in this.skuInfo.color.list" 
                   :key="index"
                    @click="coloractive(index,item.name)" 
                   >{{item.name}}</span>
        </div>
    </div>
    <div class="num">
        <div class="numtitle">数量</div>
        <div>
            <span @click="goodsnumdel">-</span>
            <span>{{this.caryitem.courr}}</span>
            <span @click="goodsnumadd">+</span>

        </div>
    </div>
    <div class="jiago"  @click="add"> 
            确定
    </div>
</div>

</template>

<script>
export default {
    name:'ShowCary',
    props:{
        skuInfo:Object,
        iid:String
        
    },
    data(){
        return{
            sizeIndex:0,
            colorIndex:-1,
            isshow:false,
            caryitem:{
            colorname:'',
            sizename:'M',
            courr:1,
            nowprice:0,
            img:'',
            stockId:''
            },
            
           
        }
    },
    mounted(){
        
    },
    created(){
        console.log("ccc",this.skuInfo )
        this.sizeactive(0,"L")
    },
    methods:{
        down(){
            this.$store.commit('isCaryActive')
        },
        sizeactive(index,name){
            console.log(index,name)
            this.sizeIndex=index
            this.caryitem.sizename=name
            this.isshow=true
            this.imgs()
        },
        coloractive(index,name){
            console.log(name )
            this.colorIndex=index
            this.caryitem.colorname=name
            this.isshow=true
            this.imgs()

        },
        add(){
            console.log("当前",this.$store.state.ifcary )
            if(this.$store.state.ifcary==1){
                console.log("加入购物车" )
                console.log("caryitem",this.caryitem )
                this.caryitem.title=this.skuInfo.title
                this.$store.commit('addgoods',this.caryitem)
                this.$store.commit('isCaryActive')

            }else{
                console.log("立即购买" )
                this.caryitem.title=this.skuInfo.title
                this.$store.commit('money',this.caryitem)
                this.$store.commit('isCaryActive')
            }
            
        },
        goodsnumdel(){
            if(this.courr>=2){
                this.caryitem.courr--
            }else{
                alert("最少选择一件商品加入购物车！")
                this.caryitem.courr=1
            }
        },
        goodsnumadd(){
            this.caryitem.courr++
        },
        imgs(){
          this.skuInfo.skus.forEach(item=>{
              if(item.size==this.caryitem.sizename&&this.caryitem.colorname=='') {
                  this.caryitem.img=item.img
                  this.caryitem.colorname=item.style
                  this.caryitem.nowprice=(item.nowprice/100).toFixed(2)
                  this.caryitem.stockId=item.stockId
                  return item
              }
              if(item.size==this.caryitem.sizename&&item.style==this.caryitem.colorname){
                  console.log("尺寸和样式满足")
                  this.caryitem.img=item.img
                  this.caryitem.nowprice=(item.nowprice/100).toFixed(2)
                  this.caryitem.stockId=item.stockId
                  console.log(this.caryitem)
                  return item
              }
            })
    

        }
    }
}
</script>

<style scoped>

.ShowCary{
    width: 100%;
    /* height: 400px; */
    background: #fff;
    position: fixed;
    bottom: 0;
    z-index: 9999;
   
    
}
.ShowCaryTitle{
    display: flex;
}
.TitleImg{
    width: 30%;
    position: relative;
}
.TitleImg img{
    width: 75px;
    height: 90px;
    background: gold;
    position: relative;
    top: -20px;
}
.TitleParams{
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: left;
}
.TitleParams span{
    font-size: 12px;
}
.TitleParams span:nth-child(1){
    font-size: 18px;
}
.del{
    display: block;
    width: 50px;
    height: 50px;
    position: absolute;
    right: 10px;
    top: 10px;
}
.size,.color-box{
    display: flex;
    flex-direction: column;
    text-align: left;
    padding: 5px 5px;
}

.size-item,.color-item{
    margin-top: 6px;
    display: flex;
    flex-wrap: wrap;
    justify-content: left;

    
}

.color-item span,.size-item span{
min-width: 25px;
display: block;
padding:0 10px;
margin: 5px 0;
height: 20px;
text-align: center;
border: rgba(0, 0, 0, 0.3) 1px solid;
background: rgba(255, 255, 255, 0.9);
font-size: 14px;
margin-right: 10px;
}
.num{
    display: flex;
    
    padding: 0px 5px;
    position: relative;
    

}
.num div:nth-child(2){ 
    display: flex;
    margin: 10px 0;
    place-self: center; 
    

}
.numtitle{
    place-self: center; 
    margin-right: 10px;
   

}
.num div:nth-child(2) span{ 
    display: block;
    width: 25px;
    height: 25px;
    line-height: 25px;
    border: rgba(0, 0, 0, 0.3) 1px solid;
    background: rgba(255, 255, 255, 0.9);
    text-align: center;
   
    
}
.num div:nth-child(2) span:nth-child(2){ 
    width: 30px;
    border-left: none;
    border-right: none;
}
.jiago{
    width: 100%;
    height: 40px;
    background: lightcoral;
    color: #fff ;
    font-size: 16px;
    line-height: 40px;
    text-align: center;
}
.sizeactive{
    
    color: lightcoral;
    border: lightcoral 1px solid !important;

    
}
#changesize{
    font-size: 8px;
}

</style>