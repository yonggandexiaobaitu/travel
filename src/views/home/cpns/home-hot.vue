<template>
  <div class="homtHot">
    <h2>热门精选</h2>
    <van-list v-model:loading="loading" :finished="finished" finished-text="没有更多了">
      <template v-for="item in hotHouseList">
        <homeHotSelect1 :itemData="item.data" v-if="item.discoveryContentType === 3" />
        <homeHotSelect2 :itemData="item.data" v-else="item.discoveryContentType === 9" />
      </template>
    </van-list>

  </div>
</template>

<script setup>
import { storeToRefs } from "pinia"
import { ref, watch } from 'vue';
import homeHotSelect1 from "./home-hot-select1.vue"
import homeHotSelect2 from "./home-hot-select2.vue"
import useHomeStore from "@/stores/modules/home.js"
import useScroll from "@/hook/useScroll"

//下拉刷新相关
const homeStore = useHomeStore();
const { hotHouseList } = storeToRefs(homeStore);
homeStore.getHomehotHouseList();
let { isGoBack } = useScroll();
watch(isGoBack, ((page) => {
  return (newvalue) => {
    console.log('获取到值', newvalue, '当前是第几页', page)
    if (newvalue) {
      ++page;
      // 异步更新数据
      homeStore.getHomehotHouseList(page).then(res => {
        console.log('发完请求了获取到res这个promise', res);
        // 加载状态结束
        loading.value = false;
        // 若接口返回finished为true代表数据全部加载完成已经没有数据了
        if (res.finished) {
          finished.value = true;
        }
        isGoBack.value=false;
      });
    }
  }
})(1))
const loading = ref(false);
const finished = ref(false);



</script>

<style lang="less" scoped>
.homtHot {
  font-size: 20px;
  margin: 10px 10px;
}

:deep(.van-list) {
  display: flex;
  flex-wrap: wrap;
}

:deep(.van-list__loading) {
  width: 100%;
}
</style>