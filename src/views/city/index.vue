<template>
  <div class="city">
    <!-- 搜索框搭建 -->
    <van-search v-model="searchvalue" placeholder="城市/区域/位置" show-action action-text="取消" @cancel="onCancel" />
    <!-- tab栏搭建 -->
    <city-tab :allCitys="cityStore.allCitys" />

  </div>
</template>

<script setup>
import cityTab from "./cpns/city-tab.vue"
import { useRouter } from "vue-router"
import { ref } from "vue";
import useCityStore from "@/stores/modules/city"
const cityStore = useCityStore();
const router = useRouter();


//定义数据
const searchvalue = ref('')


//获取城市列表所有数据
cityStore.getallcity();


const onCancel = function () {
  router.go(-1)
}

</script>

<style lang="less" scoped>
:deep(.van-tabs__wrap)  {
  position: relative;
  z-index: 9;
}

</style>