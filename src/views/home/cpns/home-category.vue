<template>
  <div class="home-category">
    <van-tabs v-model:active="active">


      <template v-for="(item, index) in categoryList" :key="index">
        <van-tab>
          <!-- 标题插槽 -->
          <template #title>
            <div class="itemShowInfo">
              <img :src="item.pictureUrl" class="houseImg" alt="">

              <span> {{ item.title }}</span>
            </div>

          </template>

        </van-tab>

      </template>

    </van-tabs>


  </div>
</template>

<script setup>
import { ref } from 'vue'

import { storeToRefs } from "pinia"


import useHomeStore from "@/stores/modules/home.js"

const homeStore = useHomeStore();

const { categoryList } = storeToRefs(homeStore)

//获取首页分类房列表
homeStore.getCategoryHouse();

const active = ref()
</script>

<style lang="less" scoped>
.home-category {
  :deep(.van-tab__text .itemShowInfo) {
    display: flex;
    flex-direction: column;
    align-items: center;

  }

  :deep(.van-tab__text .houseImg) {
    width: 32px;
    height: 32px;
  }

  :deep(.van-tab__text span) {
    color: #646566;
  }

  :deep(.van-tabs__wrap) {
    height: 70px;
  }



  // .houseImg{
  //   width: 32px;
  //   height: 32px;
  // }
}
</style>