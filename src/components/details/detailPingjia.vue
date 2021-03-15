<template>
    <div class="yonghupingjia" ref="pingjia">
        <div class="user-title">
            <div>用户评价</div>
            <div>更多</div>
        </div>
        <div class="user-desc" v-for="(item,index) in this.params.rate" :key="index">
            <div class="name-box">
                <img class="name-icon" :src="item.user.avatar" alt="">
                <div class="name">{{item.user.uname}}</div>
            </div>
            <div class="name-text">{{item.content}}</div>
            <div class="user-rule">{{item.style}}</div>
            <div class="huifu">
                {{item.explain}}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'pingjia',
    props:{
        params:Object
    }
}
</script>

<style>
.yonghupingjia{
    display: flex;
    flex-direction: column;
    background: #fff;
    padding: 0 10px;
}
.user-title{
    display: flex;
    justify-content: space-between;
    place-content: space-between;
    line-height: 35px;
    text-align: left;
    font-size: 14px;
    border-bottom: 3px solid #f4f4f4;
}
.user-title div:nth-child(1){
    margin-left: 10px;
}
.name-box{
    display: flex;
    width: 100%;
    padding: 8px 0;
}
.name-icon{
    border-radius: 50%;
    width: 40px;
    height: 40px;
    place-self: center;
}
.name{
    font-size: 12px;
    margin-left: 10px;
    place-self: center;
}
.name-text{
    font-size: 10px;
    text-align: left;
    text-indent: 1em;
    padding-bottom: 10px;
}
.user-rule{
font-size: 10px;
color: gray;
text-align: left;
}
.huifu{
    font-size: 10px;
    margin-top: 10px;
    white-space: pre-wrap;
    zoom: 1em;
    text-align: left;
    text-overflow: ellipsis;
    overflow: hidden;
    max-height: 50px;
    display: -webkit-box;
    -webkit-box-orient: vertical; 
    -webkit-line-clamp: 3; 

}
</style>