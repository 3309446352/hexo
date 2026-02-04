<template>
  <div class="Aplayer">
    <meting-js
      :server="Server"
      :type="type"
      :id="Id"
      fixed="false"
      autoplay="false"
      loop="all"
      order="list"
      preload="auto"
      list-folded="false"
      list-max-height="500px"
      lrc-type="3"
    >
    </meting-js>
    <!--    list-folded列表折叠-->
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted } from 'vue'
import { usePlayerStore } from '@/stores/MusicPlayer'
import '../assets/aplayer/APlayer.min.js'
import '../assets/aplayer/Meting.min.js'
import '../assets/APlayer.min.css'
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
    onMounted(() => {
      playerStore.GetPlayer(
        playerStore.Music.Server,
        playerStore.Music.type,
        playerStore.Music.Id
      )
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

<style scoped>
.Aplayer{

}
</style>
