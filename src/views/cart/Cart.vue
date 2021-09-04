<template>
  <div class="cart">
    <nav-bar class="nav-bar">
      <div slot="center">购物车({{ cartLength }})</div>

      <!-- 顶部 -->
    </nav-bar>
    <!-- 商品列表展示 -->
    <cart-lists />
    <!-- 底部栏 -->
    <cart-total />
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar.vue";
import cartLists from "./ChildrenComponents/cartLists.vue";
import cartTotal from "./ChildrenComponents/cartTotal.vue";

import { mapGetters } from "vuex";

export default {
  name: "Cart",
  components: {
    NavBar,
    cartLists,
    cartTotal,
  },
  computed: {
    ...mapGetters(["cartLength"]),
  },
};
</script>

<style scoped>
.nav-bar {
  background-color: var(--color-tint);
  color: #fff;
}
</style>;
