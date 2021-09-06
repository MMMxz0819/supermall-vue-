<template>
  <div class="current">
    <scroll class="content">
        <div class="contentlist">
            <category-item
        v-for="(item, index) in currentCategory"
        :key="index"
        :item="item"
      />
        </div>
      
    </scroll>
  </div>
</template>

<script>
import scroll from "../../../components/common/scroll/scroll.vue";
import CategoryItem from "./CategoryItem.vue";

export default {
  components: { scroll, CategoryItem },
  props: {
    currentCategory: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style scoped>
.content {
  position: fixed;
  left: 100px;
  right: 0;
  bottom: 49px;
  top: 44px;
  overflow: hidden;

}
.contentlist{
    display: flex;
    flex-wrap: wrap;
}
</style>