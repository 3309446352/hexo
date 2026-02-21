<template>
  <div
    class="sidebar-box"
    role="region"
    aria-label="音乐播放器"
  >
    <SubTitle :title="'titles.Music'" icon="music" fill="var(--text-accent)"
              stroke="var(--text-accent)"/>
    <div
      :id="widgetId"
      :class="[
        'music-player-widget w-full relative transition-all duration-300',
        customClass
      ]"
      :style="customStyle"
    >
      <!-- 顶部行：封面与信息 -->
      <div class="flex items-center gap-2 mb-2 px-1">
        <!-- 圆形封面 -->
        <div class="relative shrink-0 w-14 h-14 group">
          <div class="w-full h-full rounded-full overflow-hidden shadow-lg border-2 border-white dark:border-neutral-700 relative z-10 bg-[var(--primary)]/10 flex items-center justify-center">
            <!-- 默认音符图标 (当无封面或加载失败时显示) -->
            <svg v-if="!currentTrack.pic" class="text-2xl text-[var(--primary)] opacity-40 absolute w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/>
            </svg>
            <img
              class="music-cover w-full h-full object-cover animate-spin-slow relative z-10 transition-opacity duration-300"
              :class="{ 'opacity-0': imgLoadError }"
              :src="currentTrack.pic || defaultCover"
              @error="imgLoadError = true"
              :alt="currentTrack.name"
              :style="{ animationPlayState: isPlaying ? 'running' : 'paused' }"
            />
          </div>
        </div>

        <!-- 信息区 -->
        <div class="flex-1 min-w-0 flex flex-col overflow-hidden">
          <div class="flex items-center justify-between overflow-hidden gap-2">
            <div class="flex-1 min-w-0 overflow-hidden relative">
              <h3 style="color: var(--text-bright)"  class="music-title font-bold text-base text-neutral-800 dark:text-neutral-100 leading-tight truncate">
                {{ currentTrack.name || i18nDefaults.music }}
              </h3>
            </div>
            <!-- 右上角：歌词开关 -->
            <button
              v-if="config.showLyrics"
              class="btn-lrc-toggle hover:text-[var(--primary)] transition-all duration-300 p-0.5 pr-2 transform active:scale-95 text-neutral-400 shrink-0"
              @click="toggleLyricDrawer"
            >
              <!-- SVG 图标替换 -->
              <svg v-if="!showLyrics" class="text-xl w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M19 6h-2c0-2.76-2.24-5-5-5S7 3.24 7 6H5c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-7-3c1.66 0 3 1.34 3 3H9c0-1.66 1.34-3 3-3z"/></svg>
              <svg v-else class="text-xl w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V6h16v12zM6 10h2v2H6zm0 4h8v2H6zm10 0h2v2h-2zm-6-4h8v2h-8z"/></svg>
            </button>
          </div>

          <div class="min-w-0 overflow-hidden">
            <p class="music-artist  text-xs font-medium text-neutral-500 dark:text-neutral-400 truncate">
              {{ currentTrack.artist || i18nDefaults.noPlaying }}
            </p>
          </div>

          <!-- 时间显示与音量 -->
          <div class="flex items-center gap-3 text-neutral-400 h-5">
            <div class="text-[10px] font-mono flex items-center gap-1 shrink-0 h-full" aria-live="polite">
              <span class="current-time">{{ formatTime(currentTime) }}</span>
              <span class="opacity-50" aria-hidden="true">/</span>
              <span class="total-time">{{ formatTime(duration) }}</span>
            </div>

            <!-- 音量控制 -->
            <div class="flex items-center gap-1 bg-transparent h-full">
              <button class="btn-mute hover:text-[var(--primary)] transition-colors p-0.5 rounded-md flex items-center" @click="toggleMute">
                <svg v-if="!isMuted && volume > 0" class="text-lg w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/></svg>
                <svg v-else class="text-lg w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"/></svg>
              </button>
              <div class="w-16 transition-all duration-300 ease-out flex items-center">
                <div
                  class="vol-container h-1 w-16 bg-neutral-200 dark:bg-neutral-600 rounded-full cursor-pointer relative ml-1"
                  role="slider"
                  @click="handleVolumeClick"
                >
                  <div class="vol-bar absolute left-0 top-0 h-full bg-blue-400 rounded-full" :style="{ width: `${isMuted ? 0 : volume * 100}%` }"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 进度条 -->
      <div
        class="progress-container relative w-full h-1 bg-neutral-100 dark:bg-neutral-700/50 rounded-full cursor-pointer touch-none mb-2 group mt-2"
        @mousedown="handleSeek"
      >
        <div class="progress-bar absolute left-0 top-0 h-full bg-blue-400 rounded-full transition-[width] duration-100" :style="{ width: `${progress}%` }"></div>
        <div class="progress-thumb absolute top-1/2 -mt-1.5 -ml-1.5 w-3 h-3 bg-blue-400 ring-2 ring-white dark:ring-neutral-800 rounded-full shadow-sm scale-0 group-hover:scale-100 transition-transform duration-200" :style="{ left: `${progress}%` }"></div>
      </div>

      <!-- 控制区 -->
      <div class="flex items-center justify-between px-1 select-none">
        <!-- 循环模式 -->
        <button class="btn-repeat transition-colors p-2 active:scale-95" :class="playMode === 0 ? 'text-neutral-300 dark:text-neutral-600 hover:text-[var(--primary)]' : 'text-[var(--primary)]'" @click="togglePlayMode">
          <SvgIcon
            v-if="playMode === 0"
            icon-class="ListLoop"
            class="text-xl w-5 h-5"
            fill="var(--text-accent)"
            stroke="var(--text-accent)"
          />
          <SvgIcon
            v-if="playMode === 1"
            icon-class="LoopOne"
            class="text-xl w-5 h-5"
            fill="var(--text-accent)"
            stroke="var(--text-accent)"
          />
          <SvgIcon
            v-if="playMode === 2"
            icon-class="shuffle"
            class="text-xl w-5 h-5"
            fill="var(--text-accent)"
            stroke="var(--text-accent)"
          />
        </button>

        <!-- 上一首 -->
        <button class="btn-prev text-neutral-600 dark:text-neutral-300 hover:text-[var(--primary)] transition-colors p-2 active:scale-95" @click="playPrev">
          <SvgIcon
            icon-class="PreviousSong"
            class="text-xl w-5 h-5"
            fill="var(--text-accent)"
            stroke="var(--text-accent)"
          />
        </button>

        <!-- 播放/暂停 -->
        <button
          class="btn-play w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300"
          :class="
            isPlaying
              ? 'bg-[var(--primary)] text-white hover:brightness-110'
              : 'bg-[var(--btn-regular-bg)] hover:bg-[var(--btn-regular-bg-hover)] text-[var(--primary)]'
          "
          @click="togglePlay"
        >
          <SvgIcon
            v-if="!isPlaying"
            icon-class="play"
            class="text-xl w-5 h-5"
            fill="var(--text-accent)"
            stroke="var(--text-accent)"
          />
          <SvgIcon
            v-else
            icon-class="pause"
            fill="var(--text-accent)"
            stroke="var(--text-accent)"
            class="text-xl w-5 h-5"
          />
        </button>

        <!-- 下一首 -->
        <button class="btn-next text-neutral-600 dark:text-neutral-300 hover:text-[var(--primary)] transition-colors p-2 active:scale-95" @click="playNext(false)">
          <SvgIcon
            icon-class="NextOne"
            class="text-xl w-5 h-5"
            fill="var(--text-accent)"
            stroke="var(--text-accent)"
          />
        </button>

        <!-- 播放列表开关 -->
        <button class="btn-drawer-toggle text-neutral-400 hover:text-[var(--primary)] transition-all duration-300 p-2 transform active:scale-95" @click="togglePlaylistDrawer">
          <SvgIcon
            icon-class="Playlist"
            class="text-xl w-5 h-5"
            fill="var(--text-accent)"
            stroke="var(--text-accent)"
          />
        </button>
      </div>

      <!-- 歌词抽屉 -->
      <div :class="['lrc-drawer grid transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]', showLyrics ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0']">
        <div class="overflow-hidden min-h-0">
          <div class="mt-2 pt-2 border-t border-neutral-100 dark:border-white/5 mx-1">
            <div
              ref="lrcContainerRef"
              class="lrc-container h-48 overflow-y-auto custom-scrollbar flex flex-col items-center gap-2 p-4 py-24 text-center relative scroll-smooth"
              @wheel="handleLyricScroll"
            >
              <div v-if="lyrics.length === 0" class="text-neutral-400 text-sm py-10">{{ i18nDefaults.noLyrics }}</div>
              <div
                v-for="(line, index) in lyrics"
                :key="index"
                :class="['lrc-line transition-all duration-300 py-1 cursor-pointer hover:text-[var(--primary)]', currentLrcIndex === index ? 'text-[var(--primary)] font-bold text-base' : 'text-neutral-400 text-sm']"
                @click="seekTo(line.time)"
              >
                {{ line.text }}
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 播放列表抽屉 -->
      <div :class="['playlist-drawer grid transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]', showPlaylist ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0']">
        <div class="overflow-hidden min-h-0">
          <div class="mt-2 pt-2 border-t border-neutral-100 dark:border-white/5 mx-1">
            <div class="playlist-container max-h-48 overflow-y-auto custom-scrollbar pr-1 pb-1 flex flex-col gap-1">
              <div
                v-for="(track, idx) in playlist"
                :key="idx"
                :class="['playlist-item flex items-center gap-3 p-2 rounded-lg cursor-pointer hover:bg-neutral-50 dark:hover:bg-white/5 transition-colors group', currentIndex === idx ? 'bg-neutral-100 dark:bg-white/10' : '']"
                @click="handlePlaylistClick(idx)"
              >
                <div class="w-8 h-8 rounded-md overflow-hidden shrink-0 relative bg-neutral-200 dark:bg-neutral-700">
                  <img :src="track.pic || defaultCover" class="w-full h-full object-cover" loading="lazy" />
                  <div v-if="currentIndex === idx" class="absolute inset-0 bg-[var(--primary)]/20 flex items-center justify-center">
                    <svg class="text-[var(--primary)] text-sm w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/></svg>
                  </div>
                </div>
                <div class="flex-1 min-w-0">
                  <div :class="['item-title text-xs font-bold text-neutral-700 dark:text-neutral-200 truncate group-hover:text-[var(--primary)] transition-colors', currentIndex === idx ? 'text-[var(--primary)]' : '']">{{ track.name }}</div>
                  <div class="item-artist text-[10px] text-neutral-400 truncate">{{ track.artist }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 隐藏的 Audio 标签 -->
      <audio ref="audioRef" class="hidden" crossorigin="anonymous"></audio>

      <!-- 加载遮罩 -->
      <div v-if="isLoading" class="music-loading absolute inset-0 z-20 flex flex-col items-center justify-center bg-white/60 dark:bg-[#1e1e1e]/60 backdrop-blur-[2px] transition-opacity duration-300 rounded-xl">
        <div class="w-8 h-8 text-[var(--primary)] animate-spin">
          <svg class="text-3xl w-7 h-7" viewBox="0 0 24 24" fill="currentColor"><path d="M12 4V1L8 5l4 4V6c3.31 0 6 2.69 6 6 0 1.01-.25 1.97-.7 2.8l1.46 1.46C19.54 15.03 20 13.57 20 12c0-4.42-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6 0-1.01.25-1.97.7-2.8L5.24 7.74C4.46 8.97 4 10.43 4 12c0 4.42 3.58 8 8 8v3l4-4-4-4v3z"/></svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
// 引入 Pinia Store
import { usePlayerStore } from '@/stores/MusicPlayer'
import { SubTitle } from '@/components/Title'
import SvgIcon from '@/components/SvgIcon/index.vue' // 请确保路径与您的项目结构一致
// --- Props & Config ---
interface Props {
  customClass?: string
  customStyle?: string
  id?: string
  config?: any // 保留 config 用于传递 API 地址、Auth 等技术配置
}
const props = withDefaults(defineProps<Props>(), {
  customClass: '',
  customStyle: '',
  id: '',
  config: () => ({
    // 移除 mode 和 local 配置，仅保留 meting 相关技术配置
    volume: 0.7,
    playMode: 'list',
    showLyrics: true,
    meting: null
  })
})
// --- Pinia Store 初始化 ---
const playerStore = usePlayerStore()
// --- 默认封面设置 ---
const defaultCover =
  'https://raw.githubusercontent.com/3309446352/Images/main/img/951eab3fc9090232801f19d4da131133cc56084e.jpg%401256w_790h_!web-article-pic.webp'
// --- i18n 默认中文配置 ---
const i18nDefaults = {
  music: '音乐',
  noPlaying: '未在播放',
  noLyrics: '无歌词',
  loadingLyrics: '加载歌词中...',
  failedLyrics: '歌词加载失败',
  noSongs: '无歌曲',
  error: '错误',
  play: '播放',
  pause: '暂停',
  noCover: '无封面'
}
// --- 状态管理 ---
const widgetId =
  props.id || `music-widget-${Math.random().toString(36).substring(2, 9)}`
const audioRef = ref<HTMLAudioElement | null>(null)
const lrcContainerRef = ref<HTMLElement | null>(null)
const isLoading = ref(true)
const isPlaying = ref(false)
const isMuted = ref(false)
const volume = ref(props.config.volume ?? 0.7)
const currentTime = ref(0)
const duration = ref(0)
const playMode = ref(0) // 0: 列表循环, 1: 单曲循环, 2: 随机播放
const showLyrics = ref(false)
const showPlaylist = ref(false)
const playlist = ref<any[]>([])
const currentIndex = ref(0)
const currentTrack = ref({ name: '', artist: '', url: '', pic: '', lrc: '' })
const lyrics = ref<{ time: number; text: string }[]>([])
const currentLrcIndex = ref(-1)
const isUserScrolling = ref(false)
let scrollTimeout: any = null
// --- 计算属性 ---
const progress = computed(() =>
  duration.value ? (currentTime.value / duration.value) * 100 : 0
)
// --- 生命周期 ---
onMounted(async () => {
  // 初始化播放模式
  if (props.config.playMode === 'random') playMode.value = 2
  else if (props.config.playMode === 'one') playMode.value = 1
  // 初始化播放列表 (直接调用初始化)
  await initPlayer()
  // 初始化 Audio 事件
  if (audioRef.value) {
    audioRef.value.volume = volume.value
    audioRef.value.addEventListener('timeupdate', handleTimeUpdate)
    audioRef.value.addEventListener('ended', () => playNext(true))
    audioRef.value.addEventListener('play', handleGlobalMutex)
  }
  isLoading.value = false
})
// --- 核心逻辑 ---
async function initPlayer() {
  try {
    // 修改：移除本地模式判断，直接获取在线数据
    await fetchMetingData()
    if (playlist.value.length > 0) {
      let startIndex = 0
      if (playMode.value === 2)
        startIndex = Math.floor(Math.random() * playlist.value.length)
      loadTrack(startIndex, false)
    }
  } catch (e) {
    console.error('播放器初始化错误', e)
    currentTrack.value.name = i18nDefaults.error
  }
}
// 获取 Meting 数据 (修改：结合 Pinia Store 数据)
async function fetchMetingData() {
  // 1. 从 Store 获取参数
  const { Server, type, Id } = playerStore.GetMusic
  // 2. 直接拼接 API 地址 (这里使用了你指定的地址)
  const url = `https://api.moeyao.cn/meting/?server=${Server}&type=${type}&id=${Id}`
  // 3. 发送请求并解析数据
  const res = await fetch(url)
  const data = await res.json()
  // 4. 检查数据并赋值 (你要求加上的逻辑)
  if (Array.isArray(data) && data.length > 0) {
    playlist.value = data.map(item => ({
      name: item.title || item.name || '未知歌曲',
      artist: item.author || item.artist || '未知艺人',
      url: item.url,
      pic: item.pic || item.cover || '',
      lrc: item.lrc
    }))
  }
}
// 加载歌曲
function loadTrack(index: number, autoPlay: boolean) {
  // 1. 边界检查：防止索引越界或 NaN
  if (playlist.value.length === 0) return;
  if (isNaN(index) || index < 0 || index >= playlist.value.length) return;
  currentIndex.value = index;
  const track = playlist.value[index];
  // 2. 空对象检查
  if (!track) return;
  currentTrack.value = track;
  if (audioRef.value) {
    audioRef.value.src = track.url;
  }
  currentTime.value = 0;
  lyrics.value = [];
  currentLrcIndex.value = -1;
  if (track.lrc) {
    const isLrcUrl = /^(https?:)?\/\//.test(track.lrc) || /\.(lrc|txt)(\?|#|$)/i.test(track.lrc);
    if (isLrcUrl) {
      fetch(track.lrc)
        .then(res => res.text())
        .then(text => { lyrics.value = parseLRC(text); })
        .catch(() => { /* ignore */ });
    } else {
      lyrics.value = parseLRC(track.lrc);
    }
  }
  if (autoPlay) {
    audioRef.value?.play().then(() => {
      isPlaying.value = true;
    }).catch(e => console.warn("播放被阻止:", e));
  } else {
    isPlaying.value = false;
  }
}
// 图片加载错误处理
function handleImgError(e: Event) {
  const target = e.target as HTMLImageElement
  target.src = defaultCover
}
function togglePlay() {
  if (!audioRef.value) return
  if (audioRef.value.paused) {
    audioRef.value.play()
    isPlaying.value = true
  } else {
    audioRef.value.pause()
    isPlaying.value = false
  }
}
function playNext(auto = false) {
  let nextIndex
  if (playMode.value === 1 && auto) {
    if (audioRef.value) audioRef.value.currentTime = 0
    audioRef.value?.play()
    return
  } else if (playMode.value === 2) {
    nextIndex = Math.floor(Math.random() * playlist.value.length)
  } else {
    nextIndex = (currentIndex.value + 1) % playlist.value.length
  }
  loadTrack(nextIndex, true)
}
function playPrev() {
  let prevIndex =
    (currentIndex.value - 1 + playlist.value.length) % playlist.value.length
  if (playMode.value === 2)
    prevIndex = Math.floor(Math.random() * playlist.value.length)
  loadTrack(prevIndex, true)
}
// --- UI 辅助函数 ---
function handleTimeUpdate() {
  if (!audioRef.value) return
  currentTime.value = audioRef.value.currentTime
  duration.value = audioRef.value.duration || 0
  updateLyricSync(currentTime.value)
}
function updateLyricSync(time: number) {
  if (lyrics.value.length === 0 || isUserScrolling.value) return
  let index = -1
  for (let i = 0; i < lyrics.value.length; i++) {
    if (time >= lyrics.value[i].time) index = i
    else break
  }
  if (index !== currentLrcIndex.value) {
    currentLrcIndex.value = index
    if (lrcContainerRef.value) {
      const lineEl = lrcContainerRef.value.querySelector(
        `.lrc-line:nth-child(${index + 2})`
      )
      if (lineEl) {
        const containerHeight = lrcContainerRef.value.clientHeight
        const lineOffset = (lineEl as HTMLElement).offsetTop
        const lineHeight = (lineEl as HTMLElement).offsetHeight
        const targetScroll = lineOffset - containerHeight / 2 + lineHeight / 2
        lrcContainerRef.value.scrollTo({
          top: targetScroll,
          behavior: 'smooth'
        })
      }
    }
  }
}
function parseLRC(lrc: string) {
  if (!lrc) return []
  const lines = lrc.split('\n')
  const result: { time: number; text: string }[] = []
  const timeReg = /\[(\d{2}):(\d{2})\.(\d{2,3})\]/g
  lines.forEach(line => {
    const matches = Array.from(line.matchAll(timeReg))
    if (matches.length > 0) {
      const text = line.replace(timeReg, '').trim()
      if (text) {
        matches.forEach(match => {
          const m = parseInt(match[1])
          const s = parseInt(match[2])
          const ms = parseInt(match[3])
          const time = m * 60 + s + ms / (match[3].length === 3 ? 1000 : 100)
          result.push({ time, text })
        })
      }
    }
  })
  return result.sort((a, b) => a.time - b.time)
}
function formatTime(seconds: number) {
  if (!seconds || isNaN(seconds)) return '0:00'
  const min = Math.floor(seconds / 60)
  const sec = Math.floor(seconds % 60)
  return `${min}:${sec.toString().padStart(2, '0')}`
}
// --- 事件处理 ---
function handleSeek(e: MouseEvent) {
  // 1. 阻止默认行为（防止拖动时选中文字导致失效）
  e.preventDefault()
  const el = e.currentTarget as HTMLElement
  if (!el || !audioRef.value) return
  const rect = el.getBoundingClientRect()
  const durationVal = duration.value
  // 2. 核心更新逻辑
  const update = (clientX: number) => {
    if (!durationVal) return
    // 计算比例
    const percent = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width))
    const newTime = percent * durationVal
    // 【关键】同步更新数据，让进度条和滑块立即动起来
    currentTime.value = newTime
    audioRef.value!.currentTime = newTime
  }
  // 3. 立即执行一次（响应点击）
  update(e.clientX)
  // 4. 绑定拖动事件
  const handleMove = (moveE: MouseEvent) => update(moveE.clientX)
  const handleUp = () => {
    document.removeEventListener('mousemove', handleMove)
    document.removeEventListener('mouseup', handleUp)
  }
  document.addEventListener('mousemove', handleMove)
  document.addEventListener('mouseup', handleUp)
}
function handleVolumeClick(e: MouseEvent) {
  const el = e.currentTarget as HTMLElement
  const rect = el.getBoundingClientRect()
  const val = (e.clientX - rect.left) / rect.width
  volume.value = Math.max(0, Math.min(1, val))
  if (audioRef.value) audioRef.value.volume = volume.value
  isMuted.value = false
  if (audioRef.value) audioRef.value.muted = false
  localStorage.setItem('music-player-volume', val.toString())
}
function toggleMute() {
  isMuted.value = !isMuted.value
  if (audioRef.value) audioRef.value.muted = isMuted.value
}
function togglePlayMode() {
  playMode.value = (playMode.value + 1) % 3
}
function toggleLyricDrawer() {
  showLyrics.value = !showLyrics.value
  if (showLyrics.value) showPlaylist.value = false
}
function togglePlaylistDrawer() {
  showPlaylist.value = !showPlaylist.value
  if (showPlaylist.value) showLyrics.value = false
}
function handlePlaylistClick(idx: number) {
  if (currentIndex.value === idx && isPlaying.value) {
    togglePlay()
  } else {
    loadTrack(idx, true)
  }
}
function handleLyricScroll() {
  isUserScrolling.value = true
  clearTimeout(scrollTimeout)
  scrollTimeout = setTimeout(() => {
    isUserScrolling.value = false
  }, 3000)
}
function seekTo(time: number) {
  if (audioRef.value) audioRef.value.currentTime = time
}
function handleGlobalMutex() {
  window.dispatchEvent(
    new CustomEvent('firefly-music-play', { detail: { id: widgetId } })
  )
}
if (typeof window !== 'undefined') {
  window.addEventListener('firefly-music-play', (e: any) => {
    if (e.detail.id !== widgetId && isPlaying.value) {
      audioRef.value?.pause()
      isPlaying.value = false
    }
  })
}
</script>

<style scoped>
  /* 关键 CSS 动画 */
  @keyframes spin-slow {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
  .animate-spin-slow {
    animation: spin-slow 10s linear infinite;
  }

  /* 滚动条样式 */
  .custom-scrollbar::-webkit-scrollbar {
    width: 4px;
  }
  .custom-scrollbar::-webkit-scrollbar-track {
    background: transparent;
  }
  .custom-scrollbar::-webkit-scrollbar-thumb {
    background: rgba(0,0,0,0.2);
    border-radius: 2px;
  }
</style>
