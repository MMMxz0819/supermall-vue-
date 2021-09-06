<template>
  <div class="menu">
    <scroll class="content">
      <ul>
        <li
          v-for="(item, index) in Menu"
          :key="index"
          @click="clickMenu(index)"
          :class="{ isActive: index == currentIndex }"
        >
          {{ item.title }}
        </li>
      </ul>
    </scroll>
  </div>
</template>

<script>
import scroll from "../../../components/common/scroll/scroll.vue";

export default {
  components: { scroll },
  props: {
    Menu: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      currentIndex: 0,
      
    };
  },
  methods: {
    clickMenu(index) {
      this.currentIndex = index;
      this.$emit("clickMenu", this.currentIndex);

    },
  },
};
</script>

<style scoped>
.content {
  position: fixed;
  left: 0px;
  bottom: 49px;
  top: 44px;
  width: 100px;
  background-color: #eee;
  overflow: hidden;
}
li {
  height: 50px;
  line-height: 50px;
  text-align: center;
}
.isActive{
    background-color: #fff;
    color: var(--color-high-text);
    font-weight: 600;
}
</style>