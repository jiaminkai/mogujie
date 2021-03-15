<template>
  <div class="recom">
      <div class="recom-item" v-for="(item,index) in this.recommend" :key="index">
          <img :src="item.image" alt="">
          <div>{{item.title}}</div>
      </div>
  </div>
</template>

<script>
export default {
    name:'recom',
    props:{
        recommend:{
            type:Array
        }
    }
}
</script>

<style>
.recom{
    display: flex;
    justify-content: space-around;
    
    width: 100%;
    padding-bottom: 16px;
    border-bottom: 5px #f4f4f4 solid;
}
.recom-item{
    display: flex;
    flex-direction: column;
    align-items: center ;
   width: 65px;
   font-size: 12px;
}
.recom-item img{
    width: 100%;
    padding: 8px 0  6px 0; 
}
</style>