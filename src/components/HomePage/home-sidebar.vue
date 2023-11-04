<script setup lang="ts">
import { computed } from 'vue'
import { useGlobalStore } from '@/stores/global'
import { useRoute, useRouter } from 'vue-router'
const route = useRoute()
const router = useRouter()
const globalStore = useGlobalStore()
const Height = computed(() => {
  return {
    height: `${globalStore.windowHeight - 140}px`
  }
})
const routerPush = (path: string) => {
  if (route.path !== path) {
    router.push(path)
  }
}
</script>
<template>
  <div :style="Height" class="top-70px w-200px bg-green">
    <div class="flex">
      <div class="">
        <div class="" @click="routerPush('/discover')">发现</div>
        <div class="" @click="routerPush('/video')">视频</div>
        <div class="">视频</div>
        <div class="">视频</div>
      </div>
    </div>
  </div>
</template>
