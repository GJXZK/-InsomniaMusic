<script setup lang="ts">
    import discoverApi from '@/api/Discover/index'
    import { onMounted, ref } from 'vue';
    let a = [];
    async function getBannerLists(){
      const res = await discoverApi.getBannerList()
    }
    onMounted(() => {
      getBannerLists()
    })
</script>
<template>
  <div class="h-full bg-blue">
    <div class="flex">
      <h1>发现</h1>
    </div>
  </div>
</template>
<style scoped></style>
