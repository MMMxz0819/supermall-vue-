<template>
  <!-- 导航栏 -->
  <div id="detailNavBar">
    <nav-bar>
      <div slot="left" class="back" @click="backTo">
        <img src="@/assets/img/common/back.svg" alt="" />
      </div>
      <div slot="center" class="title">
        <div
          v-for="(item, index) in title"
          :key="index"
          class="title-item"
          :class="{ active: index === currentIndex }"
          @click="clickItem(index)"
        >
          {{ item }}
        </div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar.vue";



export default {
  
  components: {
    NavBar,
  },
  data() {
    return {
      title: ["商品", "参数", "评论", "推荐"],
      currentIndex: 0,
    };
  },
  methods: {
    clickItem(index) {
      this.currentIndex = index;
      this.$emit('titleClick',index)
    },
    //返回上个页面
    backTo() {
      this.$router.go(-1);
    },
  },
 
};
</script>

<style scoped>
.title {
  display: flex;
}
.title-item {
  flex: 1;
  font-size: 14px;
}
.active {
  color: var(--color-high-text);
}
.back img {
  vertical-align: middle;
}
</style>