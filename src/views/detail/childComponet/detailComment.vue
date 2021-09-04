<template>
  <div class="comments">
    <div class="title">
      用户评价
      <span class="right">更多 ></span>
    </div>
    <!-- 用户信息 -->
    <div class="user" v-if="Object.keys(commentInfo).length !== 0">
      <img :src="commentInfo.user.avatar" alt="" />
      <span>{{ commentInfo.user.uname }}</span>
    </div>

    <!-- 评论 -->
    <div class="usercomment">
      <div class="content">
        {{ commentInfo.content }}
      </div>

      <div class="goods-style">
        <span>{{ commentInfo.created | showDate }}</span>
        <span> {{ commentInfo.style }}</span>
      </div>
      <div class="commentpic" v-if="commentInfo.images != undefined">
        <span v-for="(item, index) in commentInfo.images" :key="index">
          <img :src="item" alt="" />
        </span>
      </div>
    </div>

    <!-- 商家回复 -->
    <div class="response" v-if="commentInfo.explain != undefined">
      {{ commentInfo.explain }}
    </div>
  </div>
</template>

<script>
import { formatDate } from "@/common/utils.js";

export default {
  props: {
    commentInfo: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  filters: {
    showDate(value) {
      const date = new Date(value * 1000);
      return formatDate(date, "yyyy-MM-dd");
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
.commentpic {
  padding-top: 10px;
}
.commentpic span {
  padding-right: 5px;
}
.commentpic img {
  height: 50px;
  width: 50px;
}
</style>