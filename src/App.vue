

<template>
  <routerView />
  <tab-bar  v-if="!$route.meta?.hiddenTarBar" />
  <loading />
</template>


<script setup>
import tabBar from "@/components/tab-bar/index.vue"
import loading from "@/components/loading/loading.vue"
</script>
<style scoped>

</style>
