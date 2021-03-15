<template>
  <div class="detitle">
      <div class="title">
            {{this.deTitle.title}}
        </div>
        <div class="details-price">
            <span class="newprice">{{this.deTitle.price}}</span>
            <span class="del">{{this.deTitle.oldPrice}}</span>
            <span class="loc">活动价</span>
        </div>
        <div class="columns">
          <span v-for="(item,index) in this.deTitle.columns " :key="index">{{item}}</span>
        </div>
  </div>
</template>

<script>
export default {
    name:'detalisTitile',
    props:{
        deTitle:Object
    }
}
</script>

<style>
.detitle{
    width: 100%;

}
.title{
  font-size: 16px;
  font-weight: bolder;
  text-align: left;
  text-indent: 1em;
  padding: 10px 0;
  font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif
}
.newprice{
  color: salmon;
  font-size: 22px;
}
.del{
  text-decoration:line-through;
  font-size: 10px;
  vertical-align: middle;
}
.loc{
  display: inline-block;
  width: 50px;
  height: 15px;
  background: salmon;
  color: aliceblue;
  vertical-align: top;
  font-size: 10px;
  text-align: center;
  line-height: 15px;
  border-radius: 15px;
}
.columns{
  display: flex;
  justify-content: space-between;
  font-size: 10px;
  color: #dcdcdc;
  padding: 15px 0 8px 0;
  border-bottom: 2px solid #dcdcdc;
}
</style>