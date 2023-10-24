<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { useGlobalStore } from '@/stores/global'
import homeHeader from '@/components/HomePage/home-header.vue'
import homeFooter from '@/components/HomePage/home-footer.vue'
import homesidebar from '@/components/HomePage/home-sidebar.vue'
import { computed } from 'vue'
const globalStore = useGlobalStore()
const RouterViewStyle = computed(() => {
  return {
    height: `${globalStore.windowHeight - 140}px`,
    width: `${globalStore.windowWidth - 200}px`
  }
})
</script>

<template>
  <homeHeader></homeHeader>
  <div class="flex">
    <homesidebar></homesidebar>
    <div :style="RouterViewStyle" class="top-70px">
      <RouterView />
    </div>
  </div>

  <homeFooter></homeFooter>
</template>
