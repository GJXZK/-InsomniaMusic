<script setup lang="ts">
import { reactive, ref, type Ref } from 'vue'
import { useMusicDetail } from '@/stores/music'
import { handleMusicTime } from '@/plugins/utils'
import {
  IconPause,
  IconPlayArrowFill,
  IconSkipNextFill,
  IconSkipPreviousFill,
  IconMuteFill,
  IconSoundFill,
  IconUnorderedList
} from '@arco-design/web-vue/es/icon'

let MusicPlayingTime = ref('')
const MusicDetail = useMusicDetail()
const musicInfo = reactive({
  musicUrl: '',
  musicDetail: '',
  name: '',
  singer: ''
})
const musicState = reactive({
  playType: '',
  musicList: [],
  playState: true,
  currentTime: 0
})
// const musicList:Ref<> = reactive({})
function changeState(state: boolean) {
  if(state) {
    audioPlayer.value.play()
  }else{
    audioPlayer.value.pause()
  }
  musicState.playState = !musicState.playState
  
}
function changeMusic(state: string) {

}
const audioPlayer = ref()
let playProgress = ref(0)
// 更新播放时间
function tiemupdate() {
  MusicPlayingTime.value = handleMusicTime(audioPlayer.value.currentTime)
  playProgress.value = (audioPlayer.value.currentTime / MusicDetail.musicTime) * 1000
}
function openMusicDetailCard() {}
function dragSlider(number: number) {
  console.log(number)
}
</script>
<template>
  <div class="fixed bottom-0 w-full h-70px border-2 border-pink">
    <div class="h-full flex justify-between items-center">
      <!-- 音乐播放器 -->
      <audio
        :src="MusicDetail.PlayingMusicUrl"
        autoplay
        ref="audioPlayer"
        @ended="changeMusic('next')"
        @timeupdate="tiemupdate"
      ></audio>
      <!-- bottom左侧 歌曲图标 点击图标弹出播放界面 歌曲信息 -->
      <div class="w-300px h-70px flex items-center">
        <div class="w-70px flex items-center ml-30px" @click="openMusicDetailCard">
          <img
            :style="{ width: '70%' }"
            :src="MusicDetail.picUrl"
            v-if="MusicDetail.picUrl != ''"
          />
          <img :style="{ width: '70%' }" src="@/assets/img/logo.png" v-else />
        </div>
        <div class="musicInfo">
          <div class="singer" v-if="1">
            {{ MusicDetail.musicName }}
          </div>
          <div class="singer" v-if="1">
            {{ MusicDetail.musicSinger }}
          </div>
        </div>
      </div>
      <!-- bottom中间 歌曲操作 上一首 下一首 暂停 进度条-->
      <div class="w-900px">
        <!-- 歌曲操作 -->
        <div class="flex justify-center">
          <div class="w-400px flex justify-between">
            <!-- <div class="flex justify-center">
              <span
                @click="musicState.playType = musicState.playType == 'order' ? 'random' : 'order'"
              >
                <i class="iconfont icon-xunhuan" v-show="musicState.playType == 'order'"></i>
                <i class="iconfont icon-suiji" v-show="musicState.playType == 'random'"></i>
              </span>
            </div> -->
            <div class="flex justify-center">
              <span>
                <icon-skip-previous-fill size="25" />
              </span>
            </div>
            <div class="flex justify-center">
              <span @click="changeState(true)" v-if="!musicState.playState">
                <icon-play-arrow-fill size="25" />
              </span>
              <span @click="changeState(false)" v-else>
                <icon-pause size="25" />
              </span>
            </div>
            <div class="flex justify-center">
              <!-- <span @click="musicState.musicList.length != 0 ? changeMusic('next') : ''"> -->
                <span>
                <icon-skip-next-fill size="25" color="pink"/>
                  
                </span>
            </div>
          </div>
        </div>
        <!-- liners 进度条 -->
        <!-- 进度条 -->
        <div class="flex justify-center">
          {{ MusicPlayingTime }}
          <a-slider
            :model-value="playProgress"
            :show-tooltip="false"
            :min="0"
            :max="1"
            @change="dragSlider"
            :style="{ width: '800px', hight: '10px', padding: '10px' }"
          />
          {{ MusicDetail.musicTimeFormat }}
        </div>
      </div>
      <!-- bottom右侧  音量控制 播放列表  -->
      <div class="w-300px">
        <div class="volumeControl">
          <i class="iconfont icon-yinliang"></i>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.arco-slider-bar {
  height: 5px !important;
  background-color: red !important;
}
.arco-slider-btn::after {
  border-color: red !important;
}
.arco-slider-track::before {
  height: 5px !important;
}
</style>
