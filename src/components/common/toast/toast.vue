<template>
  <div class="toast" v-show="isShow">
    {{ message }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShow: false,
      message: "",
    };
  },
  methods: {
    show(message, duration = 1500) {
      this.message = message;
      this.isShow = true;

      //duration ms后消失
      setTimeout(() => {
        this.message = "";
        this.isShow = false;
      }, duration);
    },
  },
};
</script>

<style scoped>
.toast {
  z-index: 999;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 7px;
  border-radius: 10px;
  font-size: 16px;

  color: white;
  background-color: rgba(29, 29, 29, 0.829);
}
</style>