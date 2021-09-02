<template>
  <swiper class="detail-swiper">
    <swiper-item v-for="(item, index) in topImage" :key="index">
      <img :src="item" alt="" />
    </swiper-item>
  </swiper>
</template>

<script>
import { Swiper, SwiperItem } from "components/common/swiper/index.js";

export default {
  props: {
    topImage: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {};
  },
  components: {
    SwiperItem,
    Swiper,
  },
  methods: {
    //监听图片加载完成
  },
};
</script>

<style scoped>
.detail-swiper {
  height: 250px;
  overflow: hidden;
}
</style>