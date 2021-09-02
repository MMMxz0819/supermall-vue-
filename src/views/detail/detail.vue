<template>
  <div id="detail">
    <!-- 导航栏 -->
    <detail-nav-bar />

    <scroll
      class="content"
      :probeType="3"
      ref="detailscroll"
      v-if="Object.keys(this.detailInfo) !== 0"
    >
      <!-- 轮播图 -->
      <detailswiper :topImage="topImages" />

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
      <detailmessage :detailmessage="detailmessage" />

      <!-- 展示评论 -->
      <detail-comment :commentInfo="commentInfo" />

      <!-- 推荐商品 -->
      <div class="recommending">相关推荐</div>
      <goodslist :goods="recommendInfo" :isRecommend=true />
    </scroll>
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
    };
  },
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
  },
  methods: {
    imageLoad() {
      this.$refs.detailscroll.refresh();
      this.isShow = true;
    },
  },

  created() {
    // 通过iid获取数据
    this.iid = this.$route.params.iid;

    getDetail(this.iid).then((res) => {
      console.log(res);
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
      console.log(res);
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
  bottom: 0;
  left: 0;
  right: 0;
  overflow: hidden;
}
.recommending{
  text-align: center;
  font-size: 20px;
  margin-top: 20px;
  padding: 6px;
  border-top: 1px solid #eee;

}
</style>