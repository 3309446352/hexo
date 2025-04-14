<template>
  <div ref="playerContainer"></div>
</template>

<script setup>
import { onMounted, onBeforeUnmount, ref } from 'vue'

const props = defineProps({
  server: {
    type: String,
    required: true,
    validator: v =>
      ['netease', 'tencent', 'kugou', 'xiami', 'baidu'].includes(v)
  },
  type: {
    type: String,
    default: 'playlist',
    validator: (v) => ['song', 'playlist', 'album', 'search', 'artist'].includes(v)
  },
  id: {
    type: String,
    required: true
  },
  theme: {
    type: String,
    default: '#2980b9'
  },
  fixed: {
    type: Boolean,
    default: false
  },
  autoplay: {
    type: Boolean,
    default: false
  }
})

const playerContainer = ref(null)
let playerInstance = null

onMounted(() => {
  // 动态加载本地脚本
  const loadScripts = async () => {
    await import('/src/components/Aplayer/APlayer.min.js')
    await import('/src/components/Aplayer/APlayer.min.css')
    initPlayer()
  }

  loadScripts()
})

const initPlayer = () => {
  playerInstance = new Meting({
    container: playerContainer.value,
    server: props.server,
    type: props.type,
    id: props.id,
    theme: props.theme,
    fixed: props.fixed,
    autoplay: props.autoplay,
    loop: 'all',
    order: 'list',
    preload: 'auto',
    mutex: true
  })
}

onBeforeUnmount(() => {
  if (playerInstance) playerInstance.destroy()
})
</script>

<style scoped>
/* 覆盖默认样式 */
.aplayer {
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}

.aplayer-info {
  background: linear-gradient(135deg, #1a1a1a, #2d2d2d);
}

.aplayer-lrc-lyric {
  color: #c0c0c0 !important;
}
</style>
