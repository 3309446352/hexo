<template>
  <div>
    <h1>音乐编辑</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'MusicPlayer',
  setup() {
    return {}
  }
})
</script>

<style scoped>
.music-player {
  width: 100%;
  height: 100%;
  background-color: #f0f0f0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.music-player h1 {
  font-size: 2rem;
  color: #333;
}

.music-player .play-button {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 1rem;
  cursor: pointer;
  border-radius: 5px;
}

.music-player .play-button:hover {
  background-color: #0056b3;
}
</style>
