<template>
  <div class="goods-list">
    <div class="goods" v-if="isRecommend == false">
      <goods-item
        v-for="(item, index) in goods"
        :key="index"
        :goodsItem="item"
      />
    </div>
    
    <div class="recommend-goods" v-if="isRecommend == true">
      <goods-recommend
    class="recommend-one"
      v-for="(item, index) in goods"
      :key="index"
      :goodsItem="item"
    />
    </div>
    
  </div>
</template>

<script>
import GoodsItem from "./GoodsItem.vue";
import GoodsRecommend from "./GoodsRecommend.vue";

export default {
  components: {
    GoodsItem,
    GoodsRecommend,
  },
  props: {
    goods: {
      type: Array,
      default() {
        return [];
      },
    },
    isRecommend: {
      type: Boolean,
      default() {
        return false;
      },
    },
  },
};
</script>

<style scoped>
.goods {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}
.recommend-goods{
  display: flex;

  flex-wrap: wrap;
  justify-content: space-evenly; 
}
/* .recommend-one{
  flex:1
} */
</style>