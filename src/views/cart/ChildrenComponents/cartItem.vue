<template>
  <div class="cart-item">
    <div class="middle">
      <check-bottom
        class="check-bottom"
        @click.native="checkBox"
        :isChecked="product.check"
      />
    </div>

    <img :src="product.img" alt="" />
    <div class="info">
      <div class="title">{{ product.title }}</div>
      <div class="des">{{ product.desc }}</div>
      <div class="bottom">
        <span class="price">￥{{ product.realPrice }}</span>
        <span class="count">&times;{{ product.count }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import checkBottom from "./checkButtom.vue";

export default {
  data() {
    return {
      isChecked: false,
    };
  },
  props: {
    product: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  components: {
    checkBottom,
  },
  methods: {
    checkBox() {
      this.product.check = !this.product.check;
    },
  },
};
</script>

<style scoped>
.cart-item {
  height: 100%;
  position: relative;
  padding: 10px;
  border-bottom: solid 1px rgb(231, 225, 225);
  display: flex;
}
.middle {
  display: flex;
  align-items: center;
  justify-content: center;
}

.box {
  position: relative;
  width: 20px;
  height: 20px;
  background-color: #111;
  margin: auto;
  margin-right: 10px;
}

img {
  height: 120px;
  margin-right: 10px;
  width: 90px;
  border-radius: 5px;
}
.info {
  overflow: hidden;
}
.title,
.des {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.title {
  font-size: 18px;
  font-weight: 600;
  padding-bottom: 20px;
}

.price {
  position: absolute;
  bottom: 10px;
  font-size: 19px;
  color: orange;
  font-weight: 600;
}
.count {
  position: absolute;
  bottom: 10px;
  right: 10px;
  font-size: 19px;
}
</style>