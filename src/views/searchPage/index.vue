<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue'
import useSearchKeywords from '@/stores/homePage'
import type { SearchSongsDto, SearchSongsResDto } from '@/model/search'
const SearchKeywords = useSearchKeywords()
import searchApi from '@/api/Search/search'
import type { Ref } from 'vue'
import { useGlobalStore } from '@/stores/global'
const globalStore = useGlobalStore()
// 展示在表格里的数据aa
const SearchRequest: Ref<SearchSongsDto[]> = ref([])
// 搜索歌曲
async function getSearchSongByKeyword(keyword: string) {
  const SearchSongs = ref<SearchSongsResDto[]>([])
  SearchSongs.value = await searchApi.goSearch(keyword)
  getShowSearchSongs(SearchSongs.value)
}
// 将搜索结果转换为可以在表格中使用的数据test
function getShowSearchSongs(data: SearchSongsResDto[]) {
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
const pagination = { pageSize: 30 }
function test(){
  alert("success")
}
</script>
<template>
  <div class="h-full">
    <div>
      <!-- 搜索关键词 -->
      <div class="ml-20px">
        <h1>搜索：{{ SearchKeywords.searchKeyword }}{{ globalStore.windowHeight-140 }}</h1>
      </div>
      <div class="p-20px">
        <a-table
          :columns="columns"
          :data="SearchRequest"
          :bordered="false"
          :pagination="pagination"
          :scroll="{ x: '100%', y:globalStore.windowHeight-330 }"
        >
          <template #name="{ record }">
            <div class="flex items-center cursor-pointer">
              <span @click="" @dblclick="test">
                {{ record.name }}
              </span>
            </div>
          </template>
          <template #singer="{ record }">
            <div class="flex items-center cursor-pointer">
              <span @click="">
                {{ record.singer }}
              </span>
            </div>
          </template>

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
