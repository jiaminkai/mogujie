<template>
  <div class="CateGroy">
      <cate-nav class="cate-title">
        <div slot="title">分类</div>
      </cate-nav>
      <div>
          <left-nav :nav="this.categroyleft"/>
      </div>
  </div>
</template>

<script>
import { getCategory,getSubcategory,getCategoryDetail } from "../request/category";
import CateNav from '../components/navtab/navtab.vue';
import LeftNav from '../components/categroychild/categroyleft.vue';

export default {
  name:'CateGroy',
  data(){
    return{
      categroyleft:[]
    }
  },
  components:{
    CateNav ,
    LeftNav
  },
  methods:{
    async getlist(){
        const {data:list} = await getCategory()
        console.log(list.data.category.list)
        this.categroyleft=list.data.category.list
    }
  },
  created(){
    this.getlist()
  }

}
</script>

<style>
.cate-title{
  background: salmon;
  font-size: 16px;
  color: aliceblue  ;
}
</style>