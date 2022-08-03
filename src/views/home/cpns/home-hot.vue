<template>
  <div class="homtHot">
    <h2>热门精选</h2>
    <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
      <van-list v-model:loading="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
        <template v-for="item in hotHouseList">
          <homeHotSelect1 :itemData="item.data" v-if="item.discoveryContentType === 3"  @click="Todetailpage(item.data)"/>
          <homeHotSelect2 :itemData="item.data" v-else="item.discoveryContentType === 9"  @click="Todetailpage(item.data)"/>
        </template>
      </van-list>
    </van-pull-refresh>
  </div>
</template>

<script setup>
import { storeToRefs } from "pinia"
import { ref } from 'vue';
import {useRouter} from "vue-router"
import homeHotSelect1 from "./home-hot-select1.vue"
import homeHotSelect2 from "./home-hot-select2.vue"
import useHomeStore from "@/stores/modules/home.js"

// 使用hook的路由
const router=useRouter();

//下拉刷新相关
const homeStore = useHomeStore();
const { hotHouseList } = storeToRefs(homeStore);
homeStore.getHomehotHouseList();
const loading = ref(false);
const finished = ref(false);
const refreshing = ref(false);
const onLoad = function () {
  let page = 1;
  return () => {
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
    });
  }
}();

const onRefresh = () => {
  // 清空列表数据
  finished.value = false;

  // 重新加载数据
  // 将 loading 设置为 true，表示处于加载状态
  loading.value = true;
  onLoad();
};


// 跳转到detail页面
const Todetailpage=(item)=>{
  router.push({
    name:'detail',
    params:{
      houseId:item.houseId
    }
  })
}
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