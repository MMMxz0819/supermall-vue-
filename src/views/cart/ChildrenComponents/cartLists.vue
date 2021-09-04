<template>
  <div class="cart-list">
    <scroll class="content" ref="scroll">
      <ul>
        <cart-item
          v-for="(item, index) in cartLists"
          :key="index"
          :product="item"
        />
      </ul>
    </scroll>
  </div>
</template>

<script>
import scroll from "components/common/scroll/scroll";
import cartItem from "./cartItem.vue";

import { mapGetters } from "vuex";

export default {
  components: {
    scroll,
    cartItem,
  },
  computed: {
    ...mapGetters(["cartLists"]),
  },
  activated() {
    this.$refs.scroll.refresh();
  },
};
</script>

<style scoped>
.content {
  position: fixed;
  top: 44px;
  right: 0;
  left: 0;
  bottom: 89px;
  z-index: -1;
}
</style>