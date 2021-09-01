<template>
  <swiper>
    <swiper-item v-for="(item,index) in banners" :key="index">
      <a :href="item.link">
        <img :src="item.image" alt=""  @load="imgLoad" />
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
import { Swiper, SwiperItem } from "components/common/swiper/index.js";

export default {
  props: {
    banners: {
      type: Array,
   
    },
  },
  data(){
    return{
      isLoad:false
    }
  },
  components: {
    SwiperItem,
    Swiper,
  },
  methods:{
    //监听图片加载完成
    imgLoad(){
      if(!this.isLoad){
        this.$emit('swiperImageLoad')
        this.isLoad = true
      }
    }
  }
};
</script>

<style>
</style>