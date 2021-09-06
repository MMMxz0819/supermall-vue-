<template>
  <div class="profile">
    <nav-bar class="nav-bar"
      ><div slot="center" class="center">我的档案</div></nav-bar
    >
    <regester />
    <base-info />
    <mine-staff :itemList="MineList" />
       <mine-staff :itemList="cartList" />
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar.vue";
import Regester from "./ChildComponents/Regester.vue";
import BaseInfo from "./ChildComponents/baseInfo.vue";
import MineStaff from "./ChildComponents/MineStaff.vue";

export default {
  // const path='@/assets/img/profile',
  name: "Profile",
  data() {
    return {
      //展示信息
      MineList: [
        { img: "message.svg", title: "我的信息" },
        { img: "pointer.svg", title: "积分商城" },
        { img: "vip.svg", title: "会员卡" },
      ],
      cartList:[
        { img: "cart.svg", title: "我的购物车" },
        { img: "shopping.svg", title: "下载购物APP" },
      ]
    };
  },
  components: {
    NavBar,
    Regester,
    BaseInfo,
    MineStaff,
  },
};
</script>

<style scoped>
.nav-bar {
  background-color: var(--color-tint);
}
.center {
  color: #fff;
}
</style>
