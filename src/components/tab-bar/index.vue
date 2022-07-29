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
import {useRoute} from "vue-router"
import tabBarData from "@/assets/data/tab-bar.js"
import { ref, computed, watch } from 'vue';
const active = ref(0);
const route=useRoute();

//根据路由计算当前的activeIndex
let  currentIndex=computed(()=>{
  return route.path;
})
watch(currentIndex,(newvalue)=>{
  console.log('路径发生变化了',newvalue);
})
watch(route,(newvalue)=>{
  //侦听路由，判断当前路由和active是否一致，一致不修改，不一致就修改，保持底部正确
  let index=tabBarData.findIndex(item=>item.path===newvalue.path)
  if(index!==active.value){
    active.value=index;
  }
  // console.log('路由发生变化',newvalue.path,'index',index,'当前active',active.value);
})

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