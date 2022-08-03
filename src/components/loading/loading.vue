<template>
  <div class="loading" v-if="mainStore.isLoading">
    <img class="bg" src="@/assets/img/home/loading-bg.png" alt="">
    <img class="loading-img" src="@/assets/img/home/full-screen-loading.gif" alt="">
  </div>
</template>

<script setup>
import useMainStore from "@/stores/modules/main";
const mainStore = useMainStore();

</script>

<style lang="less" scoped>
.loading {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
  background-color: rgba(0, 0, 0, .5);

  .loading-img {
    width: 70px;
    height: 70px;
    position: absolute;
    margin-top: -7px;
  }

  .bg {
    width: 140px;
    height: 140px;
  }
}
</style>