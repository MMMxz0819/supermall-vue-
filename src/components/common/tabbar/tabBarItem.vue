<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div>
    <div :style="activeStyle"><slot name="item-name"></slot></div>
  </div>
</template>

<script>
export default {
  props: {
    path: String,
    activeColor: {
      type: String,
      default: "var(--color-tint)",
    },
  },
  methods: {
    itemClick() {
      this.$router.push(this.path);

      // this.isActive = true
    },
  },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.path) !== -1;
    },
    activeStyle() {
      return this.isActive ? { color: this.activeColor } : {};
    },
  },
};
</script>

<style>
.tab-bar-item {
  flex: 1;
  text-align: center;
}
.tab-bar-item img {
  height: 20px;
  width: 20px;
  margin-top: 3px;
  vertical-align: middle;
  margin-bottom: 2px;
}
</style>