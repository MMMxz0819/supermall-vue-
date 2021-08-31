<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <home-swiper :banners="banners"></home-swiper>
    <home-recommend-view :recommends="recommends" />
    <feature />
    <tab-control
      :titles="['流行', '新款', '精选']"
      class="tabControl"
      @tabClick="tabClick"
    />
    <goodslist :goods="goods[currentType]" />
    <ul>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
  </div>
</template>

<script>
import HomeSwiper from "./ChildrenComponent/HomeSwiper.vue";
import HomeRecommendView from "./ChildrenComponent/HomeRecommendView.vue";
import Feature from "./ChildrenComponent/Feature.vue";

import Goodslist from "components/content/goods/Goodslist.vue";
import tabControl from "components/content/tabControl/tabControl.vue";
import NavBar from "components/common/navbar/NavBar";

import { getHomeMultidata, getHomeGoods } from "network/home.js";

export default {
  name: "Home",
  components: {
    NavBar,
    Goodslist,
    tabControl,
    HomeSwiper,
    HomeRecommendView,
    Feature,
  },
  data() {
    return {
      banners: [],
      recommends: [],
      //商品详情信息
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      currentType : 'pop'
    };
  },
  created() {
    //获取返回数据
    this.getHomeMultidata();

    this.getHomeGoods("pop"),
      this.getHomeGoods("new"),
      this.getHomeGoods("sell");
  },
  methods: {
    //网络请求相关
    //获取轮播图和推荐数据
    getHomeMultidata() {
      getHomeMultidata().then((res) => {
        // console.log(res);
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },
    //获取商品数据
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then((res) => {
        console.log(res);
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page = res.data.page;
      });
    },

    //监听状态栏更换点击
    tabClick(index){
      switch(index){
        case 0: 
          this.currentType = 'pop'
          break
        case 1:
          this.currentType = 'new'
          break
        case 2:
          this.currentType = 'sell'
          break

      };
    }
  },
};
</script>

<style scoped>
#home {
  padding-top: 44px;
}
.home-nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9;
  background-color: var(--color-tint);
  color: white;
}
.tabControl {
  position: sticky;
  top: 44px;
}
</style>


