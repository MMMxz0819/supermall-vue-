<template>
  <div id="detail">
    <!-- 导航栏 -->
    <detail-nav-bar @titleClick="titleClick" ref="detailNav" />

    <scroll
      class="content"
      :probeType="3"
      ref="scroll"
      v-if="Object.keys(this.detailInfo) !== 0"
      @scrollPosition="contentScroll"
    >
      <!-- 轮播图 -->
      <detailswiper :topImage="topImages" ref="detailInfo" />

      <!-- 基本信息展示 -->
      <detail-base-info :goods="goods" />

      <!-- 店铺信息 -->
      <detail-shop-info :shop="shop" />

      <!-- 商品详情 -->

      <detail-goods-info
        :detailInfo="detailInfo"
        :v-if="isShow"
        @imageLoad="imageLoad"
      />
      <!-- 展示数据  -->
      <detailmessage :detailmessage="detailmessage" ref="detailmessage" />

      <!-- 展示评论 -->
      <detail-comment :commentInfo="commentInfo" ref="comment" />

      <!-- 推荐商品 -->
      <div class="recommending">相关推荐</div>
      <goodslist :goods="recommendInfo" :isRecommend="true" ref="recommend" />
    </scroll>
    <!-- 底部栏 -->
    <detail-bottom-bar @addCart="addToCart" />
    <!-- 返回顶部 -->
    <back-top
      @click.native="backClick"
      v-show="isShowBackTop"
      class="back-top"
    />
  </div>
</template>

<script>
import detailNavBar from "./childComponet/detailNavBar.vue";
import detailswiper from "./childComponet/detailswiper.vue";
import detailBaseInfo from "./childComponet/detailBaseInfo.vue";
import detailShopInfo from "./childComponet/detailShopInfo.vue";
import detailGoodsInfo from "./childComponet/detailGoodsInfo.vue";
import detailmessage from "./childComponet/detailmessage.vue";
import detailComment from "./childComponet/detailComment.vue";
import detailBottomBar from "./childComponet/detailBottomBar.vue";

import {
  getDetail,
  GoodsInfo,
  Shop,
  GoodsParam,
  getRecommend,
} from "network/detail.js";

// 复用组件
import scroll from "components/common/scroll/scroll.vue";
import goodslist from "components/content/goods/Goodslist.vue";
import { backTopMixin } from "@/common/mixin.js";

export default {
  name: "detail",
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shop: {},
      detailInfo: {},
      isShow: false,
      detailmessage: {},
      commentInfo: {},
      recommendInfo: [],
      titleY: [],
      currentIndex: 0,
    };
  },
  mixins: [backTopMixin],
  components: {
    detailNavBar,
    detailswiper,
    detailBaseInfo,
    detailShopInfo,
    scroll,
    detailGoodsInfo,
    detailmessage,
    detailComment,
    goodslist,
    detailBottomBar,
  },
  methods: {
    //图片加载完成后回调
    imageLoad() {
      this.$refs.scroll.refresh();
      this.isShow = true;

      //获取每一部分高度
      this.titleY.push(this.$refs.detailInfo.$el.offsetTop);
      this.titleY.push(this.$refs.detailmessage.$el.offsetTop);
      this.titleY.push(this.$refs.comment.$el.offsetTop);
      this.titleY.push(this.$refs.recommend.$el.offsetTop);
      console.log(this.titleY);
    },

    //点击跳转位置
    titleClick(index) {
      this.$refs.scroll.scrollto(0, -this.titleY[index], 200);
    },

    //根据位置跳转标题栏
    // 1、先判断是否有变化 2、判断在谁中间 3、判断是否在最后
    contentScroll(position) {
      const positionY = -position.y;
      for (let i = 0; i < this.titleY.length; i++) {
        if (
          this.currentIndex != i &&
          ((i < this.titleY.length - 1 &&
            positionY >= this.titleY[i] &&
            positionY < this.titleY[i + 1]) ||
            (i === this.titleY.length - 1 && positionY > this.titleY[i]))
        ) {
          this.currentIndex = i;
          this.$refs.detailNav.currentIndex = this.currentIndex;
          console.log(this.currentIndex);
        }
      }
      this.isShowBackTop = -position.y > 1000;
    },
    //加入购物车
    addToCart() {
      //获取数据
      const product = {};
      product.title = this.goods.title;
      product.desc = this.goods.desc;
      product.realPrice = this.goods.realPrice;
      product.img = this.topImages[0]
      product.iid = this.iid

//上传到vuex
      this.$store.dispatch('addCart',product)
    },
  },

  created() {
    // 通过iid获取数据
    this.iid = this.$route.params.iid;

    getDetail(this.iid).then((res) => {
      // console.log(res);
      this.topImages = res.result.itemInfo.topImages;
      this.goods = new GoodsInfo(
        res.result.itemInfo,
        res.result.columns,
        res.result.shopInfo.services
      );
      this.shop = new Shop(res.result.shopInfo);
      this.detailInfo = res.result.detailInfo;

      this.detailmessage = new GoodsParam(
        res.result.itemParams.info,
        res.result.itemParams.rule
      );
      if (res.result.rate.cRate !== 0) {
        this.commentInfo = res.result.rate.list[0];
      }
    });

    //获取推荐数据
    getRecommend().then((res) => {
      // console.log(res);
      this.recommendInfo = res.data.list;
    });
  },

  // mounted: function() {
  //           if (location.href.indexOf("#reloaded") == -1) {
  //               location.href = location.href + "#reloaded";
  //               location.reload();
  //           }
  //       },
};
</script>

<style scoped>
#detail {
  position: relative;
  z-index: 12;
  background-color: #fff;
  height: 100vh;
}
.content {
  z-index: 13;
  position: absolute;
  top: 43px;
  bottom: 53px;
  left: 0;
  right: 0;
  overflow: hidden;
}
.recommending {
  text-align: center;
  font-size: 20px;
  margin-top: 20px;
  padding: 6px;
  border-top: 1px solid #eee;
}
.back-top {
  z-index: 13;
}
</style>