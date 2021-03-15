<template>
  <div class="swipe"  :style="{transform:this.transform,  transition:this.transition}" @touchstart="touchStart($event)" @touchmove="touchMove($event)" @touchend="touchEnd($event)">
      <slot></slot>
  </div>
</template>

<script>
export default {
name:'swipe',
data(){
    return{
        transform: '',
        transition: 'all 1s ease-in',
         currentIndex: 0,
        totalWidth :320,
        Timer:'',
        x:'',
        endx:'',
        startx:''
    }
},
mounted:function(){
    setTimeout(()=>{
        this.handleDom()
        this.opentime()
    },200)
},
methods:{
    // 开启定时器
    opentime(){
        
       this.Timer = window.setInterval(()=>{
 
              if(this.currentIndex==0){
               this.transition= 'all 0ms ease-in'
                }else{
                    this.transition= 'all 1s ease-in'
                }
            this.currentIndex++;
          
           this.setTransform(-this.currentIndex*this.totalWidth)
        },3000)
    },
    setTransform(w){
        
        this.transform=`translateX(${w}px)`
        
                if(this.currentIndex>4){
                this.currentIndex=0
                // clearInterval(this.Timer)
            }
  
    },
    handleDom(){
        let swiperEl = document.querySelector('.swipe');
       
        let slidesEls = swiperEl.children;
        // 2.保存个数
        this.slideCount = slidesEls.length;
        // 3.如果大于1个, 那么在前后分别添加一个slide
        if (this.slideCount > 1) {
          let cloneFirst = slidesEls[0].cloneNode(true);
          let cloneLast = slidesEls[this.slideCount - 1].cloneNode(true);
          swiperEl.insertBefore(cloneLast, slidesEls[0]);
          swiperEl.appendChild(cloneFirst);
          this.totalWidth = swiperEl.offsetWidth;
          this.swiperStyle = swiperEl.style;
        }
     
    },
    touchStart(e){
        console.log("鼠标移入",e.changedTouches[0].clientX)
        this.startx=e.changedTouches[0].clientX
        clearInterval(this.Timer)
        
    },
        touchMove(e){
       
       this.x=this.startx-e.changedTouches[0].clientX
       if(this.x>150){
           this.transform=`translateX(${(-this.currentIndex-1)*this.totalWidth}px)`
       }
       if(this.x<-150){
           this.transform=`translateX(${(-this.currentIndex+1)*this.totalWidth}px)`

       }
        console.log("鼠标移动",this.x)
    },
        touchEnd(e){
            // console.log("鼠标移出",e.changedTouches[0].clientX)
        this.endx=e.changedTouches[0].clientX
         this.opentime()

    },
}
}
</script>

<style>
.swipe{
    background-color: rgba(0, 0, 0, .3);
    width: 100%;
    height: 100%;
    display: flex;
    position: relative;
 
}

</style>