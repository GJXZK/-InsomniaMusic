<script setup lang="ts">
import { computed } from 'vue'
import { useGlobalStore } from '@/stores/global'
import { useRoute, useRouter } from 'vue-router'
import { IconMusic ,IconFileVideo,IconStar,IconThumbUp} from '@arco-design/web-vue/es/icon';
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
function menuClick(key: string) {
  if (route.path !== key) {
    router.push('/'+key)
  }
}
</script>
<template>
  <div :style="Height" class="top-70px w-200px menu-border">
    <div>
      <a-menu 
        :style="{ width: '196px'}" 
        @menu-item-click="menuClick"
      >
        <a-menu-item key="discover">
          <template #icon><icon-music size="18px" :strokeWidth='4'/></template>
          发现音乐
        </a-menu-item>
        <a-menu-item key="video">
          <template #icon><icon-file-video size="18px" :strokeWidth='5'/></template>  
          视频
        </a-menu-item>
        <a-menu-item key="collect">
          <template #icon><icon-star size="18px" :strokeWidth='5'/></template>  
          收藏
        </a-menu-item>
        <a-menu-item key="recommend">
          <template #icon><icon-thumb-up size="18px" :strokeWidth='5'/></template>  
          每日推荐
        </a-menu-item>
      </a-menu>
    </div>

    <!-- <div class="flex">
      <div class="">
        <div class="" @click="routerPush('/discover')">发现</div>
        <div class="" @click="routerPush('/video')">视频</div>
        <div class="">视频</div>
        <div class="">视频</div>
      </div>
    </div> -->
  </div>
</template>
<style>
  .menu-border{
    border-right: 2px;
    border-color: aqua;
  }
</style>
