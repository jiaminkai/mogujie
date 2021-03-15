<template>
  <div class="navtab">
      <div class="left">
        <slot name="back"></slot>
      </div>
      <div class="center">
        <slot name="title"></slot>
      </div>
      <div class="right">
        <slot name="right"></slot>
      </div>
      
      

  </div>
</template>

<script>
export default {
name:'navtab',
props:{
  
}
}
</script>

<style>
.navtab{
    display: flex;
    flex-direction: row;
    height: 40px;
    line-height: 40px;
}
.left,.right{
width: 66px;
height: 40px;
}
.center{
    flex: 1;
    display: flex;
    text-align: center;
    justify-content: space-evenly;
}
.title{
  flex: 1;
}
</style>