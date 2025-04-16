<template>
  <div class="aplayer">
    <meting-js
      :server="Server"
      :type="type"
      :id="Id"
      fixed="true"
      autoplay="true"
      loop="all"
      order="list"
      preload="auto"
      list-folded="true"
      list-max-height="500px"
      lrc-type="3"
    >
    </meting-js>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { usePlayerStore } from '@/stores/MusicPlayer'
export default defineComponent({
  name: ' APlayer',
  setup() {
    const playerStore = usePlayerStore()
    const Server = computed(() => playerStore.Music.Server)
    const type = computed(() => playerStore.Music.type)
    const Id = computed(() => playerStore.Music.Id)
    // 监听音乐播放器的状态变化
    computed(() => {
      return {
        playerStore
      }
    })
    return {
      playerStore,
      Server,
      type,
      Id
    }
  }
})
</script>

<style scoped></style>
