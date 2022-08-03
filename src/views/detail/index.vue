<template>
  <div class="detail" ref="detailRef">
    <tab-control ref="tabControlRef" class="tabs" v-if="comScrollTop" :titles="com_title"
      @tabItemClick="tabItemClick" />
    <div class="main" v-if="detailStore.houseDetail.mainPart" v-memo="[detailStore.houseDetail.mainPart]">
      <!-- 导航栏搭建 -->
      <van-nav-bar title="房屋详情" left-text="旅途" left-arrow @click-left="onClickLeft" />
      <!-- 轮播图搭建 -->
      <detail-swiper :swiper-data='getswiperData' />
      <!-- 信息模块 -->
      <detail-info :topInfos="getDetailInfo" :ref="getSectionRef" name='详情' />
      <!-- 房屋设施 -->
      <detail-facillty :house-facility="getDetailfacility" :ref="getSectionRef" name="设施" />
      <!-- 房东介绍 -->
      <detail-landlord :landlord="getlandlord" :ref="getSectionRef" name="介绍" />
      <!-- 热门评论 -->
      <detail-comment :comment="getcomment" :ref="getSectionRef" name='评论' />
      <!-- 预定须知 -->
      <detail-notice :order-rules="getorderRules" :ref="getSectionRef" name="须知" />
      <!-- 地图 -->
      <detail-map :pointer="getposition" :position-module="getpositionModule" :ref="getSectionRef" name="地图" />
      <!-- 价格说明 -->
      <detail-intro :price-intro="getIntro" :ref="getSectionRef" name='价格' />
    </div>

  </div>
</template>

<script setup>
import { computed, ref, onMounted, toRef, toRefs, watch } from 'vue';
import { useRoute, useRouter } from "vue-router"
import { storeToRefs } from "pinia"
import useDetail from "@/stores/modules/detail"
import detailSwiper from "@/views/detail/cpns/detail-swiper.vue"
import detailMap from '@/views/detail/cpns/detail-map.vue'
import detailInfo from "@/views/detail/cpns/detail-info.vue"
import detailFacillty from "@/views/detail/cpns/detail-facillty.vue"
import detailIntro from "@/views/detail/cpns/detail-intro.vue"
import DetailLandlord from "./cpns/detail-landlord.vue"
import DetailComment from "./cpns/detail-comment.vue"
import DetailNotice from "./cpns/detail-notice.vue"
import TabControl from "@/components/tab-control/index.vue"
import useScroll from "@/hooks/useScroll"


const route = useRoute();
const router = useRouter();
const detailStore = useDetail();
const detailRef = ref(null)
const usescroll = useScroll(detailRef);
const { scrollTop } = toRefs(usescroll)
//通过store根据房屋id获取房屋详情
detailStore.gethouseDetail(route.params.houseId)
const comScrollTop = computed(() => {
  // console.log('scrollTop', scrollTop);
  return scrollTop.value > 300;
})
const { getswiperData, getposition, getpositionModule, getDetailInfo, getDetailfacility, getlandlord, getcomment, getorderRules, getIntro } = storeToRefs(detailStore)

//跳转到上一页
const onClickLeft = () => {
  router.go(-1)
}

//等待函数调用，key代表到时索引栏的名字，值为当前的组件实例dom
// {
//   '设施':dom组件
// }
const sectionRefs = {};
//在ref绑定了一个函数后，当元素挂载会调用这个函数，返回对应的dom或者组件实例
const getSectionRef = (value) => {
  //将当前每一个的dom元素存储在数组中
  sectionRefs[value?.$el.getAttribute('name')] = value?.$el;
}
//计算当前的标题渲染到索引栏中
const com_title = computed(() => {
  return Object.keys(sectionRefs)
})
let isClick = false;
let elOffsetTop = -1;
const tabItemClick = (itemName) => {
  isClick = true;
  detailRef.value.scrollTo({
    top: itemName !== '详情' ? (sectionRefs[itemName].offsetTop - 44) : (sectionRefs[itemName].offsetTop),
    behavior: 'smooth'
  });
}

const tabControlRef = ref();

let timer=null;
let m1=0;
let m2=0; 
//侦听当前页面的滚动
watch(scrollTop, (newvalue) => {
  clearTimeout(timer);
  m1=newvalue;
  timer=setTimeout(()=>{
    m2=scrollTop;
    if(m2.value===m1){
      isClick=false;
      console.error('滚动结束了')
    }
  },1000)
  if (isClick) return;
  //获取标题栏的每一个offsetTop值，为一个数组，从一个不断变化的值，获取到其索引
  let titleTopValue = Object.values(sectionRefs).map(item => {
    return item?.offsetTop;
  })
  let currentIndex = titleTopValue.length - 1;//默认索引是最大值-1
  for (let i = 0; i < titleTopValue.length; i++) {
    if (titleTopValue[i] >= newvalue + 44) {
      currentIndex = i - 1;
      break;
    }
  }
  //小于0不进行赋值
  if (currentIndex < 0) return;
  tabControlRef?.value?.setCurrentIndex(currentIndex)

})
</script>

<style lang="less" scoped>
.detail {

  overflow-y: auto;
  position: relative;
  z-index: 9;
  height: 100vh;
  background-color: #fff;

  :deep(.van-nav-bar__title) {
    color: var(--primary-color)
  }

  :deep(.van-badge__wrapper, .van-nav-bar__text) {
    color: var(--primary-color) !important;
  }

  :deep(.van-nav-bar__text) {
    color: var(--primary-color) !important;
  }

  .tabs {
    position: fixed;
    z-index: 9;
    left: 0;
    right: 0;
    top: 0;
  }
}
</style>