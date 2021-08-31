<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>

    <!-- 页面滚动 -->
    <scroll
      class="content"
      ref="scroll"
      :probeType="3"
      @scrollPosition="backTopdisplay"
      :pull-up-load = "true"
      @pullingUp = "loadmore"
    >
      <home-swiper :banners="banners"></home-swiper>
      <home-recommend-view :recommends="recommends" />
      <feature />
      <tab-control
        :titles="['流行', '新款', '精选']"
        class="tabControl"
        @tabClick="tabClick"
      />
      <goodslist :goods="goods[currentType]" />
    </scroll>

    <!-- 返回顶端（组件点击需要增加native修饰符） -->
    <back-top @click.native="backClick" v-show="isShowBackTop" />
  </div>
</template>

<script>
import HomeSwiper from "./ChildrenComponent/HomeSwiper.vue";
import HomeRecommendView from "./ChildrenComponent/HomeRecommendView.vue";
import Feature from "./ChildrenComponent/Feature.vue";

import Goodslist from "components/content/goods/Goodslist.vue";
import tabControl from "components/content/tabControl/tabControl.vue";
import NavBar from "components/common/navbar/NavBar";
import backTop from "components/content/backTop/backTop.vue";

//引用滚动
// import BScroll from "@better-scroll/core";
// import Pullup from '@better-scroll/pull-up'
// BScroll.use(Pullup)
import Scroll from "components/common/scroll/scroll.vue";

import { getHomeMultidata, getHomeGoods } from "network/home.js";

export default {
  name: "Home",
  components: {
    NavBar,
    Goodslist,
    tabControl,
    backTop,
    HomeSwiper,
    HomeRecommendView,
    Feature,

    Scroll,
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
      currentType: "pop",
      isShowBackTop: false,
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
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page = res.data.page;

        this.$refs.scroll.pullUpFinish()
      });
    },

    //监听状态栏更换点击
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
      }
    },
    // this.$refs.scroll.scrollto是scroll是组件内的方法
    backClick() {
      this.$refs.scroll.scrollto(0, 0);
    },

    //backTop的显示与隐藏
    backTopdisplay(position) {
      // if (-position.y > 1000) {
      //   this.isShowBackTop = true;
      // } else {
      //   this.isShowBackTop = false;
      // }
      this.isShowBackTop = -position.y>1000
    },

    //下拉加载更多
    loadmore(){
      this.getHomeGoods(this.currentType)
    }
  },
};
</script>

<style scoped>
#home {
  padding-top: 44px;
  height: 100vh;
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

.content {
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
  overflow: hidden;
}
</style>


