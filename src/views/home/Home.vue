<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>

    <!-- 最初隐藏，根据高度判断吸顶位置，到达位置后显示 -->
    <tab-control
      :titles="['流行', '新款', '精选']"
      ref="tabControlfixed"
      @tabClick="tabClick"
      v-show="istabControlfix"
      class="tabFixed"
    />
    <!-- 页面滚动 -->
    <scroll
      class="content"
      ref="scroll"
      :probeType="3"
      @scrollPosition="backTopdisplay"
      :pull-up-load="true"
      @pullingUp="loadmore"
    >
      <!-- :class="[istabControlfix?'tabFixed':'unfixed']" -->
      <home-swiper :banners="banners" @swiperImageLoad="imgLoad"></home-swiper>
      <home-recommend-view :recommends="recommends" />
      <feature />
      <tab-control
        :titles="['流行', '新款', '精选']"
        ref="tabControl"
        @tabClick="tabClick"
      />
      <goodslist :goods="goods[currentType].list" />
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

import { debounce } from "common/utils.js";

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
      tabCoffsetTop: 0,
      istabControlfix: false,
      SaveY: 0,
    };
  },

  //实例创建完成
  created() {
    //获取返回数据
    this.getHomeMultidata();

    this.getHomeGoods("pop"),
      this.getHomeGoods("new"),
      this.getHomeGoods("sell");
  },

  //激活状态
  activated() {
    this.$refs.scroll.scrollto(0, this.SaveY, 0);
    this.$refs.scroll.refresh()
  },

  //非激活状态
  deactivated() {
    this.SaveY = this.$refs.scroll.getScrollY();
    
  },

  methods: {
    //网络请求相关
    //获取轮播图和推荐数据
    getHomeMultidata() {
      getHomeMultidata().then((res) => {
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

        //完成下拉加载，才可以继续下一次
        this.$refs.scroll.pullUpFinish();
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
      this.$refs.tabControlfixed.currentIndex = index;
      this.$refs.tabControl.currentIndex = index;
    },
    // this.$refs.scroll.scrollto是scroll是组件内的方法
    backClick() {
      this.$refs.scroll.scrollto(0, 0);
    },

    //backTop的显示与隐藏与tabControl是否吸顶
    backTopdisplay(position) {
      // if (-position.y > 1000) {
      //   this.isShowBackTop = true;
      // } else {
      //   this.isShowBackTop = false;
      // }
      this.isShowBackTop = -position.y > 1000;

      //是否吸顶
      this.istabControlfix = -position.y > this.tabCoffsetTop;
    },

    //下拉加载更多
    loadmore() {
      debounce(this.getHomeGoods(this.currentType), 1000);
    },

    //轮播图加载完成后获取tabControl的高度
    imgLoad() {
      this.tabCoffsetTop = this.$refs.tabControl.$el.offsetTop;
    },

    //
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

.content {
  position: absolute;
  top: 43px;
  bottom: 49px;
  left: 0;
  right: 0;
  overflow: hidden;
}

.tabFixed {
  position: fixed;
  top: 44px;
  left: 0;
  right: 0;
  z-index: 11;
}

/* .unfixed{
  display: none;
} */
</style>


