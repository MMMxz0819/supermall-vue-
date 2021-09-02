<template>
  <div class="comments">
    <div class="title">
      用户评价
      <span class="right">更多 ></span>
    </div>
    <!-- 用户信息 -->
    <div class="user" v-if="Object.keys(commentInfo).length !==0">
      <img :src="commentInfo.user.avatar" alt="" />
      <span>{{ commentInfo.user.uname }}</span>
    </div>

    <!-- 评论 -->
    <div class="usercomment">
      <div class="content">
        {{ commentInfo.content }}
      </div>
      <div class="goods-style">
        {{ commentInfo.style }}
      </div>
    </div>

    <!-- 商家回复 -->
    <div class="response" v-if="commentInfo.explain != undefined">
      {{ commentInfo.explain }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    commentInfo: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style scoped>
.comments {
  padding: 10px 20px;
}
.title {
  font-size: 20px;
  font-weight: bold;
  padding-bottom: 10px;
}
.title span {
  font-weight: 400;
  font-size: 16px;
}
.user {
  padding-top: 5px;
  height: 40px;
}
.user img {
  height: 40px;
  width: 40px;
  border-radius: 50%;
}
.user span {
  position: relative;
  top: -15px;
  right: -10px;
  font-size: 18px;
  color: var(--color-high-text);
}

.content {
  margin: 20px;
  font-size: 17px;
}
.goods-style {
  font-size: 13px;
  color: #ccc;
}
.response {
  border-top: solid 1px var(--color-high-text);
  border-bottom: solid 1px var(--color-high-text);
  padding: 12px;
  font-size: 14px;
}
</style>