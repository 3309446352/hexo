<template>
  <form @submit.prevent="handleSubmit" class="custom-form">
    <div class="form-group">
      <label for="Server">Server:</label>
      <input
        v-model="formData.Server"
        type="text"
        placeholder="请输入平台 netease, tencent, kugou, xiami, baidu"
      />
    </div>
    <div class="form-group">
      <label for="type">type:</label>
      <input
        v-model="formData.type"
        type="text"
        placeholder="请输入类型 歌曲, 音乐播放清单, 专辑, 搜索, 艺术家"
      />
    </div>
    <div class="form-group">
      <label for="type">Id:</label>
      <input
        v-model="formData.Id"
        type="number"
        placeholder="请输入Id 歌曲, 音乐播放清单, 专辑, 搜索, 艺术家"
      />
    </div>
    <!-- 提交按钮 -->
    <button type="submit" @click="handleSubmit" :disabled="isSubmitting">
      {{ isSubmitting ? '已提交...' : '立即提交' }}
    </button>
  </form>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { usePlayerStore } from '@/stores/MusicPlayer'
const playerStore = usePlayerStore()
const isSubmitting = ref(false)
// 表单数据模型
const formData = reactive({
  Server: '',
  type: '',
  Id: ''
})
// 表单提交处理
const handleSubmit = () => {
  playerStore.GetPlyer(formData.Server, formData.type, formData.Id)
  isSubmitting.value = true
}
</script>

<style scoped>
.custom-form {
  max-width: 500px;
  margin: 2rem auto;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
  background-color: #fff;
}

.form-group {
  margin-bottom: 1.5rem;
}

label {
  display: block;
  margin-bottom: 0.5rem;
  color: #333;
}

input {
  width: 100%;
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  transition: border-color 0.3s ease;
}

input:focus {
  outline: none;
  border-color: #409eff;
}

.error-input {
  border-color: #ff4d4d !important;
}

.error-msg {
  color: #ff4d4d;
  font-size: 0.875rem;
  margin-top: 0.25rem;
}

.checkbox-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

button {
  width: 100%;
  padding: 0.8rem;
  background-color: #409eff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #66b1ff;
}

button:disabled {
  background-color: #c0c4cc;
  cursor: not-allowed;
}

@media (max-width: 480px) {
  .custom-form {
    margin: 1rem;
    padding: 1.5rem;
  }
}
</style>
