<template>
  <div id="tab-bar">
      <slot></slot>
    
  </div>
</template>

<script>
export default {};
</script>

<style>
#tab-bar {
  display: flex;
  height: 49px;
  background-color: #f6f6f6;

  position: fixed;
  left: 0px;
  right: 0px;
  bottom: 0px;

  box-shadow: 0px -1px 1px rgba(100, 100, 100, 0.1);
}

</style>