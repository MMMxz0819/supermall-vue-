<template>
  <div id="app">
    <router-view></router-view>
    <main-tab-bar class="main-tab-bar"/>
  </div>
</template>

<script>

import MainTabBar from "components/content/mainTabbar/MainTabBar.vue";

export default {
  name: "App",
  components: {
    MainTabBar,
  },
};
</script>

 
<style>
@import url("assets/css/base.css");

.main-tab-bar{
  z-index: 11;

}
</style>
