<template>
  <div class="regester">
    <img src="@/assets/img/profile/avatar.svg" alt="" />
    <div class="info">
      <div class="title">登录/注册</div>
      <div class="phone">
        <img src="@/assets/img/profile/phone.svg" alt="" />
        暂无绑定手机号
      </div>
    </div>
    <div class="arrow-box right">
      <img
        src="@/assets/img/common/arrow-left.svg"
        alt=""
        class="arrow right"
      />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scope>
.regester {
  height: 120px;
  padding: 15px;
  display: flex;
  justify-content: space-between;
  background-color: var(--color-tint);
}
.phone img {
  height: 20px;
  width: 20px;
  position: relative;
  top: 5px;
}
.info {
  flex: 1;
  margin: auto 0;
  color: #fff;
  padding-left: 10px;
}
.title{
    font-size: 20px;

}
.arrow-box {
  width: 40px;
  margin: auto 0;
}
.arrow {
  height: 20px;
  width: 20px;
}
</style>