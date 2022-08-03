
<template>
  <div class="map">
    <detail-section title="位置周边" more-text="查看更多周边信息">
      <div class="baidu" ref="mapEle"></div>
    </detail-section>
  </div>


</template>



<script setup>
import DetailSection from "@/components/detail-section/detail-section.vue"
import { onMounted, ref } from 'vue';
const props = defineProps({
  pointer: {
    type: Object,
    default: () => {
      return {}
    }
  },
  positionModule: {
    type: Object,
    default: () => {
      return {}
    }
  }
})
//ref绑定的元素对象，用于实例化地图
const mapEle = ref(null);
onMounted(() => {
  // 可以是一个id或者是一个元素对象（用ref获取的元素对象）
  console.log('获取到dom元素', mapEle.value);
  let map = new BMapGL.Map(mapEle.value);
  let point = new BMapGL.Point(props.pointer.longitude, props.pointer.latitude);

  map.centerAndZoom(point, 15);//设置地图缩放级别

  let marker = new BMapGL.Marker(point);  // 创建点
  map.addOverlay(marker); // 增加点


  //创建信息窗口
  var infoWindow = new BMapGL.InfoWindow(`tips：${props.positionModule.tips ?? ''}`, {
    width: 200,
    height: 100,
    title: props.positionModule.address ?? ''
  });
  map.openInfoWindow(infoWindow, point); // 开启信息窗口
  marker.addEventListener('click', () => {
    map.openInfoWindow(infoWindow, point); // 开启信息窗口
  })
  console.log('获取props', props.positionModule);
})
</script>

<style lang="less" scoped>
.map {
  width: 100%;

  .baidu{
    height: 250px;
  }
}
</style>