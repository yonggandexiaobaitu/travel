

<template>
  <routerView />
  <tab-bar  v-if="!$route.meta?.hiddenTarBar" />
</template>


<script setup>
import tabBar from "@/components/tab-bar/index.vue"
</script>
<style scoped>

</style>
