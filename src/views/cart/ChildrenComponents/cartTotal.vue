<template>
  <div class="cart-bottom">
    <div class="checkAll">
      <check-buttom class="check-buttom" />
      <span>全选</span>
    </div>
    <div class="total">合计:￥{{ totalPrice }}</div>
    <div class="calculate">去计算({{ calclength }})</div>
  </div>
</template>

<script>
import checkButtom from "./checkButtom.vue";

export default {
  data() {
    return {
      Price: 0,
    };
  },
  components: {
    checkButtom,
  },
  computed: {
    totalPrice() {
      const checkTotal = this.$store.state.cartLists.filter(
        (item) => item.check == true
      );

      if (checkTotal.length != 0) {
        this.Price = checkTotal.reduce((previousValue, item) => {
          return previousValue + item.realPrice * item.count;
        }, 0);
      } else {
        this.Price = 0;
      }

      return this.Price.toFixed(2);
    },
    calclength() {
      return this.$store.state.cartLists.filter((item) => item.check == true)
        .length;
    },
  },
};
</script>

<style scoped>
.cart-bottom {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 49px;
  height: 40px;
  background-color: #eee;
  padding-left: 10px;
  display: flex;
  font-size: 18px;
  justify-content: space-between;
}
.checkAll {
  width: 80px;
  height: 40px;
  display: flex;

  padding-top: 10px;
  /* margin-right: 20px; */
}
.total,
.calculate {
  line-height: 40px;
}
.calculate {
  text-align: center;
  width: 120px;
  background-color: var(--color-high-text);
  color: #eee;
}
</style>