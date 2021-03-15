<template>
<div >
    <div class="detailsshow">
        <div class="xiantop"></div>
        <div class="title">{{this.show.desc}}</div> 
        <div class="xianbottom"></div>
        <div class="quan">{{this.show.key}}</div>
    </div>
    <div class="detailImg"> 
        <img :src="item" alt="" v-for="(item,index) in this.show.list" :key="index">
    </div>
</div>

  
</template>

<script>
export default {
    name:'detailshow',
    props:{
        show:Object
    },
    components:{
    },
    data(){
        return{
            
        }
    },
    created(){
       
    }
}
</script>

<style>
.detailsshow{
    width: 100%;
    box-sizing: border-box;
    padding: 10px;
}
.detailImg{
    width: 100%;
    padding-bottom: 20px;
    border-bottom: 5px solid #f4f4f4;
    background: #fff;
    font-size:0
}
.detailImg img{
    width: 100%;
    margin: 0;
    padding: 0;
    display: block;
}

.xiantop,.xianbottom{
    width: 80px;
    height: 0px;
    border-top: 1px solid #000;
}
.title{
    text-align: left;
    font-size: 14px;
    color: gray;
}
.quan{
   text-align: left;
   margin-top: 10px;
    font-size: 14px;
}
.text-rigth{
    text-align: right;
}
.xianbottom{
    float: right;
}

.xianbottom::after,.xiantop::after{
    content: "";
    display: flex;

    margin-top: -5px;
    width: 5px;
    height: 5px;
    background: #000;
}
.xianbottom::after{
    float: right;
}
</style>