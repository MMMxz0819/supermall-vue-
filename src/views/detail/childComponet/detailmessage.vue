<template>
  <div class="param-info" v-if="Object.keys(detailmessage) !== 0">
    <!-- 尺码 -->
    <div class="secribe">参数信息</div>
    <div class="size">
      <table v-for="(item, index0) in detailmessage.sizes" :key="index0">
        <tr v-for="(name, index1) in item" :key="index1">
          <td v-for="(data, index2) in name" :key="index2">{{ data }}</td>
        </tr>
      </table>
    </div>
    <!-- 样式 -->
    <div class="stylesecribe">样式信息</div>
    <div class="info-param">
        
      <table v-for="(item, index0) in detailmessage.infos" :key="index0">
        <tr>
          <td class="info-param-key">{{ item.key }}</td>
          <td class="param-value">{{ item.value }}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    detailmessage: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style scoped>
.secribe,.stylesecribe {
  text-align: center;
  font-weight: bold;
  font-size: 16px;
  padding: 10px;
  border-bottom: solid 2px var(--color-high-text);
  border-top: solid 2px var(--color-high-text);
}

.param-info {
  padding: 20px 15px;
  font-size: 14px;
  border-bottom: 5px solid #f2f5f8;
}

.param-info table
{
  width: 100%;
  border-collapse: collapse;
}

.param-info table tr{
  height: 42px;
}

.param-info table tr td {
  border-bottom: 1px solid rgba(100, 100, 100, 0.1);
}


.info-param-key {
    /*当value的数据量比较大的时候, 会挤到key,所以给一个固定的宽度*/
    width: 95px;
  }

  .info-param {
    border-top: 1px solid rgba(0,0,0,.1);
  }
</style>