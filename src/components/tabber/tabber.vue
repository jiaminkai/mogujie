<template>
  <div id="tab_ber">
      <slot></slot>
  </div>
</template>

<script>
export default {
name:'tabber'
}
</script>

<style>
#tab_ber{
    width: 100%;
    display: flex;
    position: fixed;
    bottom: 0;
    left: 0;
    background: #f6f6f6;
    height: 50px ;
    
}
</style>