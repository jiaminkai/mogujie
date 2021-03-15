<template>
    <div class="Leftbox">
        <div class="Left-item" v-for="(item,index) in this.nav" :key="index">

        </div>
    </div>
</template>

<script>
export default {
    name:'LeftNav',
    props:{
        nav:Array
    }
}
</script>

<style>

</style>