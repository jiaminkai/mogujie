<template>
  <div class="swipe_item">
      <slot></slot>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.swipe_item{
    width: 320px;
    height: 100%;
     flex-shrink: 0;
}
.swipe_item img{
    width: 100%;
    height: 100%;
   
}
</style>