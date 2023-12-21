<script setup lang="ts">
import { reactive, ref, type Ref } from 'vue';


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
// 更新播放时间
function tiemupdate() {
//   let time = this.$refs.audioPlayer.currentTime;
//   this.$store.commit("updateCurrentTime", time);
//   time = Math.floor(time);
//   if (time !== lastSecond) {
//     lastSecond = time;
//     this.currentTime = time;
//     this.timeProgress = Math.floor((time / durationNum) * 100);
//   }
}
function openMusicDetailCard(){

}

</script>
<template>
  <div class="fixed bottom-0 w-full h-70px bg-#c91317">
    <div class="bottomControl">
      <audio
        :src="musicInfo.musicUrl"
        autoplay
        ref="audioPlayer"
        @play="changeState(true)"
        @pause="changeState(false)"
        @ended="changeMusic('next')"
        @timeupdate="tiemupdate"
      ></audio>
      <!-- bottom左侧 歌曲图标 点击图标弹出播放界面 歌曲信息 -->
      <div class="left">
        <div class="musicpic" @click="openMusicDetailCard">
          <img :src="musicInfo.musicDetail" />
        </div>
        <div class="musicInfo">
          <div class="singer" v-if="musicInfo.singer">
            {{ musicInfo.name }}
          </div>
        </div>
      </div>
      <!-- bottom中间 歌曲操作 上一首 下一首 暂停 进度条-->
      <div class="center">
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
          <span class="currentTime">{{ musicState.currentTime | handleMusicTime }}</span>
          <!-- :value 是单向的  要实现双向要v-model -->
          <el-slider
            class="progressSlider"
            v-model="timeProgress"
            :show-tooltip="false"
            :disabled="musicList.length == 0"
            @change="dragSlider"
          ></el-slider>

          <span class="totalTime">{{ duration }}</span>
        </div>
      </div>
      <!-- bottom右侧  音量控制 播放列表  -->
      <div class="right">
        <div class="volumeControl">
          <i class="iconfont icon-yinliang"></i>
          <el-slider
            class="volumeSlider"
            v-model="volume"
            @input="changeVolume"
            :show-tooltip="false"
          ></el-slider>
        </div>
        <div class="playList" @click="openDrawer">
          <i class="iconfont icon-bofangliebiao"></i>
        </div>
        <el-drawer :visible.sync="drawer" :with-header="false" size="100">
          <div class="drawerHeader">总{{ musicList.length }}首</div>
          <el-table
            :data="musicList"
            stripe
            style="width: 100%"
            :show-header="false"
            @row-dblclick="clickRow"
            highlight-current-row
            lazy
          >
            <el-table-column prop="name" width="150px"></el-table-column>
            <el-table-column prop="ar[0].name" width="80px"></el-table-column>
            <el-table-column prop="dt" width="70px"></el-table-column>
          </el-table>
        </el-drawer>
      </div>
    </div>
  </div>
</template>
