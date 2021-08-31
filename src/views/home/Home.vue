<template>
<<<<<<< HEAD
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <home-swiper :banners = 'banners'></home-swiper>
    <home-recommend-view :recommends = 'recommends'/>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import HomeSwiper from './ChildrenComponent/HomeSwiper.vue'
import HomeRecommendView from './ChildrenComponent/HomeRecommendView.vue'

import { getHomeMultidata } from "network/home.js";


export default {
  name: "Home",
  components: {
    NavBar,
    HomeSwiper,
    HomeRecommendView
    
  },
  data() {
    return {
      banners: [],
      recommends: [],
    };
  },
  created() {
    getHomeMultidata().then((res) => {
      this.banners = res.data.banner.list;
      this.recommends = res.data.recommend.list;
    });
  },
};
</script>

<style scoped>
.home-nav {
  background-color: var(--color-tint);
  color: white;
}
=======
  <h2>首页</h2>
</template>

<script>
  export default {
    name: "Home"
  }
</script>

<style scoped>

>>>>>>> 33ebcbd3eba79bc59e8fb36eef0eac390a2c3930
</style>
