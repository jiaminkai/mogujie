<template>
    <div class="anchor">
        <label class="">
        <div class="tables" v-for="(item,index) in this.params.tables1" :key="index">
            <span v-for="(n,index) in item" :key="index">{{n}}</span>
        </div>
        </label>

        <!-- <div class="disclaimer">
            {{this.params.disclaimer}}
        </div> -->
        <div class="set" v-for="(n,index) in this.params.set" :key="index">
            <span >{{n.key}}</span>
            <span >{{n.value}}</span>
        </div>
    </div>
</template>

<script>
export default {
    name:'Params',
    props:{
        params:Object
    }

}
</script>

<style scoped>
.anchor{
    padding: 0px 10px ;
    background: #fff;
}
.tables,.set{
    width: 100%;
    background: #fff;
    border-bottom: 2px solid #f4f4f4;
    
    display: flex;
    font-size: 14px;
    position: relative;
}
.set{
    min-height: 35px;
}
.tables{
        line-height: 35px;
        height: 35px;
}
.tables:last-child,.set:last-child{
    border-bottom: 5px solid #f4f4f4;

}

.tables span{
    display: block;
    text-align: center;
    width: 30px;
}
.tables span:nth-child(1),.set span:nth-child(1){
width: 50px;
line-height: 35px;
}
.tables span:nth-child(2){
    position: absolute;
    left: 120px;
}.tables span:nth-child(3){
    position: absolute;
    left: 170px;

}.tables span:nth-child(4){
    position: absolute;
    left: 220px;
}
.tables span:nth-child(5){
    position: absolute;
    left: 270px;
}
.set span:nth-child(2){
    width: 60%;
    position: absolute;
    white-space: pre-wrap;
    left: 90px;
    font-size: 10px;
    text-align: left;
    place-self: center;
    color: #F56C6C;
}
</style>