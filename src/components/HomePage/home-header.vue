<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'
const route = useRoute()
const router = useRouter()
const routerPush = (path: string) => {
  if (route.path !== path) {
    router.push(path)
  }
}
</script>
<template>
  <div class="fixed top-0 w-full h-70px bg-#ec4141 z-100 flex">
    <h1>header</h1>
    <div class="tabeSelect flex">
      <div class="" @click="routerPush('/discover')">发现</div>
      <div class="" @click="routerPush('/video')" >视频</div>
      <div class="">视频</div>
      <div class="">视频</div>
    </div>
  </div>
</template>
