import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    conusIndex:0,
    navIndex:0,
    isCary:false,
    cary:[],
    ifcary:1,
    money:[],
    index:1
  },
  mutations: {
    change(state,config){
      state.conusIndex=config
    },
    navchange(state,config){
      state.navIndex=config
    },
    isCaryActive(state){
      state.isCary=!state.isCary
    },
    iFcary(state,val){
      state.ifcary=val
    },
    addgoods(state,val){
      var s=  state.cary.filter(item => {
          if(val.stockId==item.stockId){
            item.courr=item.courr+val.courr
            console.log("数量添加成功" )
            return item
          }
       });
       if(s.length==0){
        state.cary.push(val)
       }
      

    },
    change(state,val){
      state.cary.forEach(item=>{
        if(item.stockId==val){
          item.isactive=!item.isactive
          console.log("更成功")
          
        }
      })

    },

    moneygoods(state,val){
        state.money.push(val)
    }
  },
  actions: {
  },
  modules: {
  }
})
