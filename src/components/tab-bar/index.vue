<template>
  
    <van-tabbar v-model="active" route active-color="#ff9854">
     <template v-for="(item, index) in  tabBarData" :key="index">
        <van-tabbar-item :to="item.path"  >
        <span>{{ item.title }}</span>
        <template #icon="props">
          <img :src="item.img" v-if="active !== index" />
          <img :src="item.activeimg" v-else />
        </template>
      </van-tabbar-item>
     </template>
    


    </van-tabbar>



</template>

<script setup>
import tabBarData from "@/assets/data/tab-bar.js"
import { ref } from "vue";
const active = ref(0);
console.log('tabBarData', tabBarData);
</script>

<style lang="less" scoped>
.tab-bar{
  height: 50px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
}
</style>