<script setup lang="ts">
import { computed } from 'vue';
import { useGlobalStore } from '@/stores/global'
const globalStore = useGlobalStore()
const Height = computed(() => {
  return {
    height: `${globalStore.windowHeight - 140}px`
  }
})
</script>
<template>
    <div :style="Height" class="top-70px w-200px bg-green">
      <div class="flex">
        <h1>sidebar</h1>

      </div>
    </div>
    
</template>