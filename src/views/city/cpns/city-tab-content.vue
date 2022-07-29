<template>
  <div class="city-tab-content">
    <van-index-bar :index-list="indexList">
      <div class="hotcities">
        <van-index-anchor index="热门" />
        <div class="hotcitiesContent">
          <template v-for="(item1, index1) in tarBarContentData.hotCities" :key="index1">
            <van-button @click="goback(item1)" round color="#fef4ec" type="default">{{ item1.cityName }}</van-button>
          </template>
        </div>
      </div>
      <template :key="key" v-for="(value, key, index) in tarBarContentData.cities">
        <van-index-anchor :index="value.group" />
        <template v-for="(item, indey) in value.cities" :key="indey">
          <van-cell :title="item.cityName" @click="goback(item)" />
        </template>
      </template>
    </van-index-bar>
  </div>
</template>

<script setup>
import { ref } from "vue"
import useCityStore from "@/stores/modules/city"
import { useRouter } from "vue-router"
const router = useRouter();
const cityStore = useCityStore();
const props = defineProps({
  tarBarContentData: {
    type: Object,
    default: () => ({

    })
  }
});
console.log('tab-conetent的props', props);

//计算列表的索引
const indexList = ref([]);
indexList.value = (() => {
  let res = props.tarBarContentData.cities.map(item => item.group)
  res.unshift('#');
  return res;
})()

//点击跳转回到上一页，赋值当前所选城市
const goback = (item) => {
  cityStore.currentCityInfo = item;
  router.go(-1);

}


</script>

<style lang="less" scoped>
:deep(.van-button__text) {
  color: #2c2a29;
}

.city-tab-content {
  height: calc(100vh - 98px) !important;
  overflow-y: auto;

}


.hotcitiesContent {
  padding-left: 10px;

  :deep(.van-button) {
    margin: 5px;
  }
}
</style>