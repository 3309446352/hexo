<template>
  <div class="music-player">
    <div class="mp-card">
      <div class="mp-toggle" @click="playerStore.toggleAplayer()">
        <SvgIcon icon-class="music" height="1.5rem" width="1.5rem"
          :fill="playerStore.showAplayer ? 'var(--text-accent)' : 'var(--text-dim)'" />
        <span :class="{ active: playerStore.showAplayer }">
          {{ playerStore.showAplayer ? '音乐播放器已开启' : '音乐播放器已关闭' }}
        </span>
        <div class="mp-switch" :class="{ on: playerStore.showAplayer }" />
      </div>
      <div class="mp-form" v-if="playerStore.showAplayer">
        <div class="mp-row">
          <label>平台</label>
          <select v-model="form.Server">
            <option v-for="s in servers" :key="s.value" :value="s.value">{{ s.label }}</option>
          </select>
        </div>
        <div class="mp-row">
          <label>类型</label>
          <select v-model="form.type">
            <option v-for="t in types" :key="t.value" :value="t.value">{{ t.label }}</option>
          </select>
        </div>
        <div class="mp-row">
          <label>ID</label>
          <input v-model="form.Id" type="number" placeholder="歌单/歌曲/专辑 ID" />
        </div>
        <button @click="submit">更新播放器</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
import { usePlayerStore } from '@/stores/MusicPlayer'
import SvgIcon from '@/components/SvgIcon/index.vue'

export default defineComponent({
  name: 'MusicPlayer',
  components: { SvgIcon },
  setup() {
    const playerStore = usePlayerStore()
    const servers = [
      { label: '网易云', value: 'netease' },
      { label: 'QQ 音乐', value: 'tencent' },
      { label: '酷狗', value: 'kugou' },
      { label: '虾米', value: 'xiami' },
      { label: '百度', value: 'baidu' }
    ]
    const types = [
      { label: '歌单', value: 'playlist' },
      { label: '歌曲', value: 'song' },
      { label: '专辑', value: 'album' },
      { label: '搜索', value: 'search' },
      { label: '艺术家', value: 'artist' }
    ]
    const form = reactive({
      Server: playerStore.Music.Server,
      type: playerStore.Music.type,
      Id: playerStore.Music.Id
    })
    const submit = () => playerStore.GetPlayer(form.Server, form.type, form.Id, null)
    return { playerStore, servers, types, form, submit }
  }
})
</script>

<style scoped lang="scss">
.mp-card {
  max-width: 480px;
  margin: 2rem auto;
  background: var(--background-primary);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 16px;
  padding: 24px;
}

.mp-toggle {
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
  padding: 4px 0;

  span {
    flex: 1;
    font-size: 0.9rem;
    color: var(--text-dim);
    &.active { color: var(--text-accent); }
  }
}

.mp-switch {
  width: 44px;
  height: 24px;
  border-radius: 12px;
  background: var(--text-dim);
  position: relative;
  transition: background 0.3s;
  flex-shrink: 0;

  &::after {
    content: '';
    position: absolute;
    top: 3px;
    left: 3px;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background: #fff;
    transition: transform 0.3s;
  }

  &.on {
    background: var(--text-accent);
    &::after { transform: translateX(20px); }
  }
}

.mp-form {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.mp-row {
  display: flex;
  flex-direction: column;
  gap: 6px;

  label {
    font-size: 0.8rem;
    color: var(--text-dim);
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  select, input {
    padding: 10px 12px;
    border-radius: 8px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: var(--background-secondary);
    color: var(--text-normal);
    font-size: 0.9rem;
    appearance: none;

    &:focus {
      outline: none;
      border-color: var(--text-accent);
    }
  }

  select {
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='%23888' viewBox='0 0 16 16'%3E%3Cpath d='M8 11L3 6h10z'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: right 12px center;
    padding-right: 32px;
    cursor: pointer;
  }
}

button {
  padding: 11px;
  border: none;
  border-radius: 8px;
  background: var(--text-accent);
  color: #fff;
  font-weight: 600;
  font-size: 0.9rem;
  cursor: pointer;
  transition: opacity 0.2s;
  margin-top: 4px;

  &:hover { opacity: 0.85; }
}
</style>