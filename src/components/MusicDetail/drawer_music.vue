<script setup lang="ts">
import { onMounted } from 'vue'
import { IconClose, IconFullscreen } from '@arco-design/web-vue/es/icon'
import { useMusicDetail } from '@/stores/music'
import musicApi from '@/api/MusicApi/music'
const MusicDetail = useMusicDetail()
const getmusicdetail = () => {
  if (MusicDetail.musicId !== '') {
    console.log("b");
    
    musicApi.getMusicDetail(MusicDetail.musicId)
  }
}
defineExpose({getmusicdetail})
</script>
<template>
  <div class="">
    <!-- 头部 -->
    <header class="p-20px flex">
      <div
        class="w-40px h-40px rounded-lg hover:bg-#ccc duration-1000 flex justify-center items-center"
        @click="handleCancel"
      >
        <icon-close size="30" />
      </div>
      <div
        class="w-40px h-40px rounded-lg ml-20px hover:bg-#ccc duration-1000 flex justify-center items-center"
      >
        <icon-fullscreen size="30" />
      </div>
    </header>
    {{ musicId }}
  </div>
</template>
