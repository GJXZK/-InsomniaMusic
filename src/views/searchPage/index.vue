<script setup lang="ts">
import { onMounted, ref } from 'vue';
import useSearchKeywords from '@/stores/homePage'
const SearchKeywords = useSearchKeywords()
import searchApi from '@/api/Search/search'
const SearchRequest = ref({})
onMounted(async () => {
    SearchRequest.value = await searchApi.goSearch(SearchKeywords.searchKeyword)
    console.log(SearchRequest.value);
    
})
</script>
<template>
  <div class="h-full">
    <div class="flex">
      <h1>搜索</h1>
      {{ SearchRequest }}
    </div>
  </div>
</template>
<style scoped></style>
