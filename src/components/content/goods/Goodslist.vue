<template>
  <div class="goods">
    <goods-item
      v-for="(item, index) in goods['list']"
      :key="index"
      :goodsItem="item"
    />
    
    
  </div>
</template>

<script>
import GoodsItem from "./GoodsItem.vue";

export default {
  components: {
    GoodsItem,
  },
  props: {
    goods: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style>
.goods{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
}

</style>