<template>
  <div class="detail-swiper">

    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <template v-for="(item, index) in swiperData" :key="index">
        <van-swipe-item>
          <img class="img" :src="item.url" alt="">
        </van-swipe-item>
      </template>
      <template #indicator="{ active, total }">
        <div class="indicator">
          <template v-for="(value, key, indey) in indicatorData" :key="indey">

            <span class="item" :class="{ active: getCurrentIndicatorIndex(active, value) > 0 }">
              <span class="text"> {{ formatTitle(value[0].title) }}</span>
              <span class="count" v-if="getCurrentIndicatorIndex(active, value) !== 0">
                {{ getCurrentIndicatorIndex(active, value) }}/{{ value.length }}
              </span>
            </span>

          </template>
        </div>


      </template>
    </van-swipe>

  </div>
</template>

<script setup>
import { computed, } from 'vue';
const props = defineProps({
  swiperData: {
    type: Array,
    default: () => {
      return []
    }
  }
});
//计算出指示器的数据
const indicatorData = computed(() => {
  let res = props.swiperData.reduce((pre, item) => {
    if (!pre[item.enumPictureCategory]) {
      pre[item.enumPictureCategory] = [];
    }
    pre[item.enumPictureCategory].push(item);
    return pre;
  }, {});
  return res;
});
//计算当前指示器的索引
const getCurrentIndicatorIndex = computed(() => {
  return (active, value) => {
    let item = props.swiperData[active];
    let index = value.findIndex(data => {
      return data === item;
    })
    return index + 1;
  }
})
//正则替换字符串
const formatTitle = (str) => {
  // console.log('str',str);
  let reg = /【(.*)】/g;
  return str = str.replace(reg, (item, item2) => {
    return item2;
  })
}



</script>

<style lang="less" scoped>
.detail-swiper {
  img {
    width: 100%;
  }

  // .custom-indicator {
  //   display: flex;

  //   .active {
  //     color: red;
  //   }
  // }
     .indicator {
      position: absolute;
      right: 5px;
      bottom: 5px;
      display: flex;
      padding: 2px 5px;
      font-size: 12px;
      color: #fff;
      background: rgba(0, 0, 0, 0.8);

      .item {
        margin: 0 3px;

        &.active {
          padding: 0 3px;
          border-radius: 5px;
          background-color: #fff;
          color: #333;
        }
      }
    }
}
</style>