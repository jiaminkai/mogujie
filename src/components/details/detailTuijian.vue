<template>

    <div class="detailTuijian">
            <div class="tuijianTitle">
                <span>相关商品</span>
                <span>更多</span>
            </div>
            <div class="Tuigoods" v-for="(item,index) in this.recom" :key="index" @click="todetails(index,item.item_id)">
                <img :src="item.image" alt="">
                <span class="Tuigoods-title">{{item.title}}</span>
                <div class="tuijianPrice">
                    <span>{{item.price}}</span>
                    <span class="iconfont">&#xe60b;</span>
                    <span>{{item.cfav}}</span>

                </div>
            </div>
    </div>
</template>

<script>
export default {
    name:"detailTuijian",
    props:{
        recom:{
            type:Array
        }
    },
    methods:{
        todetails(id,iid){
            //  this.$router.push({path:'/details'+id+'',query:{iid}})
        }
    }
}
</script>

<style scoped>
@font-face {
  font-family: 'iconfont';  /* project id 1723175 */
  src: url('//at.alicdn.com/t/font_1723175_bob4w1o1bs.eot');
  src: url('//at.alicdn.com/t/font_1723175_bob4w1o1bs.eot?#iefix') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_1723175_bob4w1o1bs.woff2') format('woff2'),
  url('//at.alicdn.com/t/font_1723175_bob4w1o1bs.woff') format('woff'),
  url('//at.alicdn.com/t/font_1723175_bob4w1o1bs.ttf') format('truetype'),
  url('//at.alicdn.com/t/font_1723175_bob4w1o1bs.svg#iconfont') format('svg');
}
.iconfont{
    font-family:"iconfont" !important;
    font-size:6px;font-style:normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;}
.detailTuijian{
    
    padding: 10px 5px 50px 5px;
    background: #fff;
    width: 100%;
    box-sizing: border-box;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}
.tuijianTitle{
    width: 100%;
    display: flex;
    justify-content: space-between;
    /* border-bottom: 3px solid #f4f4f4;     */
    border-top: 3px solid #f4f4f4;
    padding: 8px;
    margin-top: 20px ;
    font-size: 14px;

}
.Tuigoods{
    width: 48%;
    display: flex;
    flex-direction: column;
    align-items:center;
}
.Tuigoods img{
    width: 100%;
    height: 210px;
    border-radius: 5px;
}
.Tuigoods-title{
    display: block;
    width: 90%;
    margin:  0 auto;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    font-size: 8px;
    padding: 6px 0 10px 0;
}
.tuijianPrice{
    display: flex;
    font-size: 10px;

}
.tuijianPrice span:nth-child(1){
    color: salmon;
    margin-right: 6px;
}
</style>