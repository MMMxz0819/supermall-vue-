<template>
  <div class="check-box" :class='{checked:isChecked}'>
    <img src="@/assets/img/cart/tick.svg" alt="" />
  </div>
</template>

<script>
export default {
    props:{
        isChecked:{
            type:Boolean,
            default(){
                return false
            }
        }
    }
};
</script>

<style scoped>
.check-box{
  width: 23px;
  height: 23px;
  margin-right: 5px;
  padding-top: 1px;
  padding-left: 1px;
border-radius: 50%;
border: solid 2px #aaa;
}
.checked {
  
  background-color: var(--color-high-text);
  border: solid 2px var(--color-high-text);
}


</style>