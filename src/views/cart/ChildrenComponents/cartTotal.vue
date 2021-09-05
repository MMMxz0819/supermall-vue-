<template>
  <div class="cart-bottom">
    <div class="checkAll">
      <check-buttom
        class="check-buttom"
        :isChecked="selectAll"
        @click.native="changeAll"
      />
      <span>全选</span>
    </div>
    <div class="total">合计:￥{{ totalPrice }}</div>
    <div class="calculate" @click="warning">去计算({{ calclength }})</div>
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
    //计算总价
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

    // 计算选中数量
    calclength() {
      return this.$store.state.cartLists.filter((item) => item.check == true)
        .length;
    },

    // 选中全部按钮显示
    selectAll() {
      if (this.$store.state.cartLists.length === 0) {
        return false;
      } else {
        return (
          this.$store.state.cartLists.find((item) => item.check == !true) ===
          undefined
        );
      }
    },
  },
  methods: {
    //根据选择状态确定 按全选按钮时 商品的选中状态
    changeAll() {
      if (this.selectAll) {
        this.$store.commit("cancelAll");
      } else {
        this.$store.commit("chooseAll");
      }
    },

    //当选择零件时提示
    warning() {
      if (this.calclength == 0) {
        this.$toast.show("请选择商品");
      }
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