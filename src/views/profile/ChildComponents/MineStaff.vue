<template>
  <div class="mine-staff">
    <div v-for="(item, index) in itemList" :key="index" class="item">
      <img :src="returnURL(item.img)" alt="" />
      <span class="title">{{ item.title }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    itemList: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods: {
    //图片使用require定义之后，你就可以动态使用了
    returnURL(path) {
      return require("@/assets/img/profile/" + path);
    },
  },
};
</script>

<style scoped>
.mine-staff {
  border-top: 10px solid #eee;
}
.item {
  padding-left: 10px;
  height: 60px;
  display: flex;
  
}

.item img {
   
  height: 30px;
  width: 30px;
  margin-top: 10px;
  margin-right: 10px;
  position: relative;
  top: 3px;
 
}
.item span{
  flex: 1;
  /* line-height: 80px; */
display: flex;
  align-items: center;
  font-size: 17px;
  border-bottom: 1px solid #ccc;
}
</style>