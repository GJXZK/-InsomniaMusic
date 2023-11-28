<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue'
import useSearchKeywords from '@/stores/homePage'
import type { SearchSongsDto } from '@/model/search'
const SearchKeywords = useSearchKeywords()
import searchApi from '@/api/Search/search'
import type { Ref } from 'vue'
import {useGlobalStore} from '@/stores/global'
const globalStore = useGlobalStore()
const searchPageHeight = computed(()=>{
  return {
    height:`${globalStore.windowHeight}px`
  }
})
// 展示在表格里的数据
const SearchRequest: Ref<SearchSongsDto[]> = ref([])
// 搜索歌曲
async function getSearchSongByKeyword(keyword: string) {
  console.log(keyword)
  let resp = await searchApi.goSearch(keyword)
  getShowSearchSongs(resp)
}
// 将搜索结果转换为可以在表格中使用的数据aaaaaa
function getShowSearchSongs(data: []) {
  SearchRequest.value = []
  data.forEach((item) => {
    SearchRequest.value.push({
      name: item.name,
      id: item.id,
      singer: item.ar[0].name,
      album: item.al.name,
      long: '1000'
    })
  })
}

onMounted(async () => {
  getSearchSongByKeyword(SearchKeywords.searchKeyword)
})

watch(
  () => SearchKeywords.searchKeyword,
  (newValue, oldValue) => {
    console.log('aaaaaaa')
    getSearchSongByKeyword(newValue)
  }
)
// 表格列表
const columns = [
  {
    title: '音乐标题',
    dataIndex: 'name',
    slotName: 'name'
  },
  {
    title: '歌手',
    dataIndex: 'singer',
    slotName: 'singer'
  },
  {
    title: '专辑',
    dataIndex: 'album',
    slotName: 'album'

  }
]
const pagination={pageSize:30}
</script>
<template>
  <div class="h-full ">
    <div>
      <!-- 搜索关键词 -->
      <div class="ml-20px">
        <h1>搜索：{{ SearchKeywords.searchKeyword }}{{ globalStore.windowHeight }}</h1>
      </div>
      <div class="p-20px" >
        <a-table 
          :columns="columns" 
          :data="SearchRequest" 
          :bordered="false" 
          :pagination="pagination" 
          pageSize="30"
          :virtual-list-props="{searchPageHeight}"
        >
          <!-- 音乐标题 -->
          <template #name="{ record }">
            <div class="flex items-center cursor-pointer">
              <span @click="">
                {{ record.name }}
              </span>
            </div>
          </template>
          <!-- 歌手 -->
          <template #singer="{ record }">
            <div class="flex items-center cursor-pointer">
              <span @click="">
                {{ record.singer }}
              </span>
            </div>
          </template>
          <!-- 专辑 -->
          <template #album="{ record }">
            <div class="flex items-center cursor-pointer">
              <span @click="">
                {{ record.album }}
              </span>
            </div>
          </template>
        </a-table>
      </div>
    </div>
  </div>
</template>
<style scoped></style>
