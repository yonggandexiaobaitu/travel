<template>
  <div class="home">
    <!-- 顶部吸顶搜索 -->
    <search v-show="com_isShowSearch" />
    <div class="nav-bar">
      <van-nav-bar title="弘源旅途" />
    </div>
    <div class="banner">
      <img src="../../assets/img/home/banner.webp" alt="">
    </div>
    <!-- 搜索功能 -->
    <home-search />
    <!-- 分类房 -->
    <home-catrgory />
    <!-- 热门精选 -->
    <homeHot />

  </div>
</template>

<script setup>
import { onMounted, ref, computed } from 'vue';
import homeSearch from "./cpns/home-search.vue"
import homeCatrgory from "./cpns/home-category.vue"
import useHomeStore from "@/stores/modules/home.js"
import debounce from "@/utils/debounce"
import search from "@/components/search/index.vue"
import homeHot from "./cpns/home-hot.vue"




//获取热门建议数据
const homeStore = useHomeStore();
homeStore.getHotSuggets();


//判断是否滚动到指定位置
const scrollTop = ref(0);
const com_isShowSearch = computed(() => {
  return scrollTop.value > 300;
})

//生命周期
onMounted(() => {
  window.addEventListener('scroll', debounce(() => {
    scrollTop.value = window.scrollY;
  }, 0))



})
</script>



<style lang="less" scoped>
:deep(.van-nav-bar__title) {
  color: var(--primary-color);
}

.home {
  padding-bottom: 50px;
}

.banner {
  img {
    width: 100%;

  }
}
</style>