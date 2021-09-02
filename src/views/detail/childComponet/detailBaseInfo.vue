<template>
  <div class="baseinfo" v-if="Object.keys(goods).length !== 0">
    <div class="title">{{ goods.title }}</div>
    <div class="show-price">
      <span class="newPrice">{{ goods.newPrice }}</span>
      <span class="oldPrice">{{ goods.oldPrice }}</span>

      <span class="discount">{{ goods.discount }}</span>
    </div>
    <div class="columns">
      <span
        v-for="(item, index) in goods.columns"
        :key="index"
        class="columnsItem"
        >{{ item }}</span
      >
    </div>
    <div class="servicebox">
      <div
        class="services"
        v-for="(item, index) in goods.services"
        :key="index"
      >
        <img :src="item.icon" alt="" />
        <span>{{ item.name }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
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

<style scoped>
.baseinfo {
  padding-left: 10px;
  padding-right: 10px;
}

/* 标题部分 */
.title {
  padding-top: 15px;
  padding-bottom: 15px;
  font-size: 18px;
  font-weight: 600;
}

/* 价格部分 */
.show-price {
  padding-top: 5px;
  padding-bottom: 15px;
  position: relative;
}
.newPrice {
  font-size: 20px;
  color: var(--color-high-text);
}
.oldPrice {
  padding: 0 5px;
  font-size: 13px;
  color: #999;
  text-decoration: line-through;
}
.discount {
  position: absolute;
  top: -3px;
  font-size: 13px;
  background-color: var(--color-high-text);
  color: white;
  padding: 2px;
  border-radius: 5px;
}

/* 数据部分 */
.columns {
  display: flex;
  text-align: center;
  justify-content: space-between;
  font-size: 13px;
  color: #999;
  border-bottom: 1px solid rgb(211, 209, 209);
  margin-bottom: 20px;
  padding-bottom: 10px;
}

/* 服务部分 */
.servicebox{
    display: flex;
    justify-content: space-between;
    font-size: 9px;
    flex-wrap: wrap;
    text-align:start;

padding-bottom: 20px;
border-bottom: 1px solid rgb(211, 209, 209);
}

.services img{
    width: 9px;
    height: 9px;
    
}

/* .columnsItem{
    flex: 1;
} */
</style>