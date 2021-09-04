<template>
  <div class="detail-bottom">
    <div class="bottom-left">
      <div class="ask bottom-item">
        <div class="img"></div>

        <div>客服</div>
      </div>
      <div class="shop bottom-item">
        <div class="img"></div>

        <div>店铺</div>
      </div>
      <div class="collect bottom-item">
        <div class="img"></div>

        <div>收藏</div>
      </div>
    </div>

    <div class="bottom-right">
      <div class="add-cart bottom-item" @click="addCart">加入购物车</div>
      <div class="buy bottom-item">购买</div>
    </div>
  </div>
</template>

<script>
export default {
  methods:{
    addCart(){
      this.$emit('addCart')
    }
  }
};
</script>

<style scoped>
.detail-bottom {
  display: flex;
  justify-content: space-around;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 53px;

}
.bottom-left {
  flex: 5;
  display: flex;
    padding-top: 5px;
}
.bottom-right {
  flex: 5;
  display: flex;
  text-align: center;
}
.bottom-item {
  flex: 1;
}
.bottom-left .bottom-item {
  text-align: center;
}
.img {
  width: 25px;
  height: 25px;
  background: url("../../../assets/img/detail/detail_bottom.png") 0 0/100%;
  margin: 0 auto;
  margin-bottom: 3px;
}
.ask .img {
  background-position: 0 -59px;
}
.shop .img {
  background-position: 0 -110px;
}
.collect .img {
  background-position: 0 0px;
}
.add-cart {
  background-color: rgb(243, 243, 4);
  line-height: 53px;
}
.buy {
  background-color: var(--color-high-text);
  line-height: 53px;
  color: aliceblue;
}
</style>