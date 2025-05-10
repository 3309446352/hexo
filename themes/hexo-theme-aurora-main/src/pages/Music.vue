<template>
  <!-- 固定在左下角的音乐播放器 -->
  <div class="music-player" :class="{ minimized: isMinimized }">
    <!-- 播放器主体 -->
    <div class="player-body" @click="toggleMinimize">
      <transition name="rotate">
        <img
          src="https://raw.githubusercontent.com/3309446352/Images/main/img/GnhfzKaWUAATl5P.webp"
          class="album-cover"
          :class="{ rotating: isPlaying }"
        />
      </transition>

      <!-- 歌曲信息 -->
      <div class="song-info">
        <h3 class="title">{{ currentSong.title }}</h3>
        <p class="artist">{{ currentSong.artist }}</p>
      </div>

      <!-- 控制按钮 -->
      <div class="controls">
        <button class="control-btn" @click.stop="togglePlay">
          <i :class="isPlaying ? 'icon-pause' : 'icon-play'" />
        </button>
        <input
          type="range"
          class="progress-bar"
          :max="duration"
          v-model="currentTime"
          @input="handleSeek"
        />
      </div>
    </div>

    <!-- 音频元素 -->
    <audio
      ref="audioElement"
      :src="currentSong.url"
      @timeupdate="updateProgress"
      @ended="handleEnded"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'

interface MusicItem {
  title: string
  artist: string
  url: string
  cover: string
  duration: number
}

// 响应式数据
const audioElement = ref<HTMLAudioElement | null>(null)
const isPlaying = ref(false)
const isMinimized = ref(false)
const currentTime = ref(0)
const duration = ref(0)

// 示例音乐数据
const currentSong = ref<MusicItem>({
  title: '示例音乐',
  artist: '未知艺术家',
  url: '/music/sample.mp3',
  cover: '/images/album-cover.jpg',
  duration: 210
})

// 播放控制
const togglePlay = () => {
  if (!audioElement.value) return

  isPlaying.value ? audioElement.value.pause() : audioElement.value.play()
  isPlaying.value = !isPlaying.value
}

// 进度条更新
const updateProgress = () => {
  if (audioElement.value) {
    currentTime.value = audioElement.value.currentTime
    duration.value = audioElement.value.duration || currentSong.value.duration
  }
}

// 进度跳转
const handleSeek = (e: Event) => {
  if (audioElement.value) {
    const target = e.target as HTMLInputElement
    audioElement.value.currentTime = parseInt(target.value)
  }
}

// 最小化切换
const toggleMinimize = () => {
  isMinimized.value = !isMinimized.value
}

// 歌曲结束处理
const handleEnded = () => {
  isPlaying.value = false
  if (audioElement.value) {
    audioElement.value.currentTime = 0
  }
}

// 初始化音量设置（规避自动播放限制）
onMounted(() => {
  if (audioElement.value) {
    audioElement.value.volume = 0.8
  }
})
</script>

<style lang="sass">
$primary-color: #42b983
$control-size: 40px

.music-player
  position: fixed
  bottom: 20px
  left: 20px
  background: rgba(255, 255, 255, 0.95)
  border-radius: 12px
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15)
  transition: 0.3s ease
  z-index: 1000

  &.minimized
    .player-body
      transform: scale(0.8)
      opacity: 0.8

.player-body
  display: flex
  align-items: center
  padding: 12px
  gap: 15px
  cursor: pointer

.album-cover
  width: 60px
  height: 60px
  border-radius: 8px
  transition: transform 0.3s ease

  &.rotating
    animation: rotate 10s linear infinite

.song-info
  flex: 1
  min-width: 120px

  .title
    margin: 0
    font-size: 14px
    color: #333

  .artist
    margin: 4px 0 0
    font-size: 12px
    color: #666

.controls
  display: flex
  align-items: center
  gap: 10px

  .control-btn
    width: $control-size
    height: $control-size
    border: none
    border-radius: 50%
    background: $primary-color
    color: white
    cursor: pointer
    transition: 0.2s ease

    &:hover
      transform: scale(1.1)

.progress-bar
  width: 100px
  height: 4px
  accent-color: $primary-color

@keyframes rotate
  from
    transform: rotate(0deg)
  to
    transform: rotate(360deg)
</style>
