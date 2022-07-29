<template>
  <div class="city-tab">
    <van-tabs v-model:active="active">
      <template v-for="(value,key,index) in allCitys"  :key="key">
          <van-tab :title="value.title" :name="key">
             <city-tab-conent v-show="key===active" :tarBarContentData='allCitys[active]'/>
          </van-tab>
      </template>
     
    </van-tabs>
  </div>
</template>

<script setup>
import {ref} from "vue";
import cityTabConent from "./city-tab-content.vue"
const props=defineProps({
  allCitys:{
    type:Object,
    default:()=>({})
  }
})
const active=ref('');
console.log('获取props',props);
</script>

<style lang="scss" scoped>
</style>