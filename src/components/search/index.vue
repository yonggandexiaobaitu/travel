<template>
  <div class="search">
    <div class="goback">
      <van-icon name="arrow-left" />
    </div>
    <div class="content">
      <div class="cityName">
        <span>{{ currentCityInfo.cityName }}</span>
      </div>
      <div class="HousingInfo">
        <div class="startTime">
          <span><span class="zhu">住</span>{{ com_time(searchInfo.startTime) }}</span>
        </div>
        <div class="endTime">
          <span><span class="zhu">离</span>{{ com_time(searchInfo.endTime) }}</span>
        </div>

      </div>
      <div class="title">
        关键字/位置/民宿
        <van-icon name="search" />
      </div>
    </div>
    <div class="gird">
      <van-icon name="wap-nav" />
    </div>



  </div>
</template>

<script setup>
import { ref, computed } from "vue"
import useCityStore from "@/stores/modules/city"
import { storeToRefs } from 'pinia';
const cityStore = useCityStore();
const { currentCityInfo, searchInfo } = storeToRefs(cityStore)






//响应式开始时间和结束时间发生变化,处理时间格式
const com_time = computed(() => {
  return function (value) {
    value = value.replace(/[^\d]/g, () => {
      return '.'
    })
    value = value.substring(0, value.length - 1)
    return value
  }
})

</script>





<style lang="less" scoped>
@basecolor: #f2f4f6;
@basefontsize: 14px;
@themecolor: #fb6b1c;

.search {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 55px;
  padding:10px 0px;
  background-color: #ffffff;
  z-index: 9;
  display: flex;

  .goback {
    width: 40px;

    line-height: 55px;
    display: flex;
    align-items: center;

    :deep(.van-icon-arrow-left) {
      color: @themecolor;
      font-size: 26px;
      font-weight: 800;


    }
  }

  .content {
    flex: 1;

    display: flex;
    font-size: @basefontsize;

    .cityName {
      line-height: 55px;
      background-color: @basecolor;
      margin-right: 2px;
      padding: 0 6px;
      border-radius: 10px 0px 0px 10px;
    }

    .HousingInfo {
      margin-right: 2px;
      background-color: @basecolor;
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 0 6px;

      .startTime {
        margin-bottom: 4px;
        color: #666666;
        font-weight: 600;
      }

      .endTime {
        color: #666666;
        font-weight: 600;
      }

      .zhu {
        color: #9f9f9f;
        margin-right: 2px;
      }
    }

    .title {
      background-color: @basecolor;
      color: #9f9f9f;
      line-height: 55px;
      padding: 0 6px;
      border-radius: 0px 10px 10px 0px;
      flex:1;

    }
  }

  .gird {
    width: 40px;
    line-height: 55px;
    color: @themecolor;
    font-size: 26px;
    font-weight: 800;
  }



}
</style>