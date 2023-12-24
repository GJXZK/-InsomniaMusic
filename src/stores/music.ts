import { ref, type Ref } from 'vue'
import { defineStore } from 'pinia'

export const useMusicDetail = defineStore('PlayingMusicUrl', () => {
  let PlayingMusicUrl = ref("")
  let musicTimeFormat = ref("")
  let musicTime = ref(0)
  function updateMusicTimeFormat(time:string){
    musicTimeFormat.value = time
  }
  function updateMusic(url: string) {
    PlayingMusicUrl.value = url
  }
  function updateMusicTime(time: number){
    musicTime.value = time
  }
  return {PlayingMusicUrl, musicTime,musicTimeFormat,updateMusic,updateMusicTime,updateMusicTimeFormat}
})
