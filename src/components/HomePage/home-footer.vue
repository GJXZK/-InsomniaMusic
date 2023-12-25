<script setup lang="ts">
import { reactive, ref, type Ref } from 'vue';
import { useMusicDetail } from '@/stores/music';
import { handleMusicTime } from '@/plugins/utils';

let MusicPlayingTime = ref("")
const MusicDetail = useMusicDetail()
const musicInfo = reactive({
    musicUrl:"",
    musicDetail:"",
    name:"",
    singer:"",
})
const musicState = reactive({
    playType:"",
    musicList:[],
    playState:true,
    currentTime:0
});
function changeState(state:boolean){

}
function changeMusic(state:string){

}
function changePlayState(){

}
const audioPlayer = ref()
let playProgress = ref(0)
// 更新播放时间
function tiemupdate() {
  MusicPlayingTime.value = handleMusicTime(audioPlayer.value.currentTime)
  playProgress.value = audioPlayer.value.currentTime/MusicDetail.musicTime*1000
}
function openMusicDetailCard(){

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
        @play="changeState(true)"
        @pause="changeState(false)"
        @ended="changeMusic('next')"
        @timeupdate="tiemupdate"
      ></audio>
      <!-- bottom左侧 歌曲图标 点击图标弹出播放界面 歌曲信息 -->
      <div class="w-200px h-70px flex items-center">
        <div class="w-70px flex items-center ml-30px" @click="openMusicDetailCard">
          <img :style="{width:'70%'}" :src="MusicDetail.picUrl" />
        </div>
        <div class="musicInfo">
          <div class="singer" v-if="1">
            {{ MusicDetail.musicName }}
          </div>
          <div class="singer" v-if="1">
            {{ MusicDetail.musicSinger[0] }}
          </div>
        </div>
      </div>
      <!-- bottom中间 歌曲操作 上一首 下一首 暂停 进度条-->
      <div class="w-1000px">
        <!-- 歌曲操作 -->
        <div class="controls">
          <span @click="musicState.playType = musicState.playType == 'order' ? 'random' : 'order'">
            <i class="iconfont icon-xunhuan" v-show="musicState.playType == 'order'"></i>
            <i class="iconfont icon-suiji" v-show="musicState.playType == 'random'"></i>
          </span>
          <span @click="musicState.musicList.length != 0 ? changeMusic('pre') : ''">
            <i class="iconfont icon-shangyishou"></i>
          </span>
          <span @click="musicState.musicList.length != 0 ? changePlayState() : ''">
            <i class="iconfont icon-icon_play" v-if="!musicState.playState"></i>
            <i class="iconfont icon-zantingtingzhi" v-else></i>
          </span>
          <span @click="musicState.musicList.length != 0 ? changeMusic('next') : ''">
            <i class="iconfont icon-xiayishou"></i>
          </span>
          <span>
            <i class="iconfont icon-xihuan"></i>
          </span>
        </div>
        <!-- liners 进度条 -->
        <!-- 进度条 -->
        <div class="progressBar">
          {{ MusicPlayingTime }}
          <a-slider :model-value="playProgress" :min="0" :max="1"  :style="{ width: '800px',hight:'10px', padding:'10px'}" />
          {{ MusicDetail.musicTimeFormat }}
        </div>
      </div>
      <!-- bottom右侧  音量控制 播放列表  -->
      <div class="w-200px">
        <div class="volumeControl">
          <i class="iconfont icon-yinliang"></i>
          
        </div>
        
      </div>
    </div>
  </div>
</template>
<style>
.arco-slider-bar{
  height: 5px !important;
  background-color: red !important;
}
.arco-slider-btn::after{
  border-color: red !important;
}
.arco-slider-track::before{
  height: 5px !important;
}

</style>