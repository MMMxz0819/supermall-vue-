<template>
  <div class="baseInfo">
    <div class="balance">
      <div class="number">
        {{ balance }}
        <span>元</span>
      </div>

      <div>我的余额</div>
    </div>

    <div class="account">
      <div class="number">
        {{ account }}
        <span>个</span>
      </div>
      <div>我的优惠</div>
    </div>
    <div class="integral">
      <div class="number">
        {{ integral }}
        <span>分</span>
      </div>

      <div>我的积分</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      balance: 0,
      account: 0,
      integral: 0,
    };
  },
};
</script>

<style scoped>
.baseInfo {
  display: flex;
}
.balance,
.account,
.integral {
  flex: 1;
  padding: 20px;
  text-align: center;
  border-right: 1px solid #ddd;
}
.balance {
  border-left: 1px solid #ddd;
}
.balance div,
.account div,
.integral div {
  padding-top: 5px;
}
.number {
  color: orange;
  font-size: 20px;
  font-weight: 600;
}
.number span {
  color: var(--color-text);
  font-size: 16px;
  font-weight: 400;
}
</style>