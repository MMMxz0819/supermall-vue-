<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>



<script>
import BScroll from "@better-scroll/core";
import Pullup from "@better-scroll/pull-up";
import ObserveDom from "@better-scroll/observe-dom";
BScroll.use(Pullup);
BScroll.use(ObserveDom);

export default {
  props: {
    probeType: {
      type: Number,
      default: 0,
    },
    pullUpLoad:{
      type:Boolean,
      default:false
    }
  },
  data() {
    return {
      scroll: null,
    };
  },

  // 需要dom建立好后
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper, {
      scrollY: true,
      click: true,
      probeType: this.probeType,
      pullUpLoad: true,
      mouseWheel: true, //开启鼠标滚轮
      disableMouse: false, //启用鼠标拖动
      disableTouch: false, //启用手指触摸
      observeDOM: true,
    });

    //提交位置
    this.scroll.on("scroll", (position) => {
      // console.log(position);
      this.$emit("scrollPosition", position);
    });

    this.scroll.on('pullingUp',()=>{
      this.$emit('pullingUp')
    })
  },
  methods: {
    scrollto(x, y, time = 300) {
      this.scroll.scrollTo(x, y, time);
    },
    pullUpFinish(){
      this.scroll.finishPullUp()
    }
  },
};
</script>

<style>
</style>