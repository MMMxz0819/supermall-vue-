<template>
  <div class="category">
    <nav-bar class="nav-bar"><div slot="center">商品分类</div></nav-bar>
    <category-menu :Menu="menuList" @clickMenu="MenuItem" />

    <current-category :currentCategory = 'currentList'/>
  </div>
</template>

<script>
import NavBar from "../../components/common/navbar/NavBar.vue";
import Scroll from "../../components/common/scroll/scroll.vue";
import CategoryMenu from "./ChildComponents/CategoryMenu.vue";

import { getCategory, getMenuItem } from "@/network/category.js";
import CurrentCategory from "./ChildComponents/currentCategory.vue";

export default {
  data() {
    return {
      menuList: [],
      maitKey: 3627,
      currentList: [],
    };
  },
  components: { NavBar, Scroll, CategoryMenu, CurrentCategory },
  name: "Category",
  created() {
    // 获取数据
    this.getCategory();
    this.getMenuItem(this.maitKey);
  },

  methods: {
    // 获取数据
    getCategory() {
      getCategory().then((res) => {
        this.menuList = res.data.category.list;
      });
    },
    //获取当前分类数据
    getMenuItem(maitKey) {
      getMenuItem(maitKey).then((res) => {
        this.currentList = res.data.list;
        console.log(this.currentList);
      });
    },
    // 传送当前的index
    MenuItem(index) {
      this.maitKey = this.menuList[index].maitKey;
      this.getMenuItem(this.maitKey);
    },
  },
};
</script>

<style scoped>
.nav-bar {
  background-color: var(--color-high-text);
  color: #fff;
}
.content {
  position: fixed;
  left: 0;
  right: 0;
  top: 44px;
  bottom: 49px;
}
</style>
