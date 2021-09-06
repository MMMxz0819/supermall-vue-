<template>
  <div class="item">
    <a :href="item.link">
      <img :src="item.image" alt="" />
      <div class="title">{{ item.title }}</div>
    </a>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style scoped>
/* .item{
    height: 70px;
    width: 50px;
} */
.item{
    flex: 1;
    height: 140px;
    text-align: center;
    margin: 5px;
    margin-bottom: 20px;
}
.item img {
  height: 120px;
}
.title{
    font-size: 18px;
}
</style>