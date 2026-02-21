<template>
  <div class="sidebar-box">
    <div class="news-list" ref="newsList" @scroll="handleScroll">
      <div v-for="(item, index) in displayedItems" :key="index">
        <ul class="news-item">
          <li>
            <a :href="item.link" target="_blank">{{ item.title }}</a>
          </li>
        </ul>
      </div>

      <div v-if="loading" class="loading">正在加载更多...</div>
      <div v-if="!hasMore && displayedItems.length > 0" class="end-message">已加载所有新闻</div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue';
import axios from 'axios';

// 数据相关
const currentItem = ref([]);
const displayedItems = ref([]);
const loading = ref(false);
const hasMore = ref(true);
const loadedCount = ref(5); // 初始加载5条
const pageSize = 5; // 每次加载5条
const newsList = ref(null);

// 获取新闻数据
const fetchNews = async () => {
  try {
    const response = await axios.get('https://60s.viki.moe/v2/ai-news?date&all&encoding=json');
    currentItem.value = response.data.data.news || [];
    updateDisplayedItems();
  } catch (error) {
    console.error('获取新闻失败:', error);
  }
};

// 更新显示的项目
const updateDisplayedItems = () => {
  displayedItems.value = currentItem.value.slice(0, loadedCount.value);
  hasMore.value = loadedCount.value < currentItem.value.length;
};

// 加载更多
const loadMore = () => {
  if (loading.value || !hasMore.value) return;

  loading.value = true

  // 模拟网络请求延迟
  setTimeout(() => {
    loadedCount.value += pageSize
    updateDisplayedItems()
    loading.value = false

    // 滚动到底部
  }, 600);
};

// 处理滚动事件
const handleScroll = () => {
  if (!newsList.value || loading.value || !hasMore.value) return;

  const container = newsList.value;
  const scrollPosition = container.scrollTop + container.clientHeight;
  const scrollThreshold = container.scrollHeight - 50;

  if (scrollPosition >= scrollThreshold) {
    loadMore();
  }
};

onMounted(() => {
  fetchNews()
})
</script>

<style scoped>
.sidebar-box {
  background-color: var(--background-secondary);
  border-radius: 1rem;
  margin-bottom: 2rem;
  padding: 2rem;
  position: relative;
  --tw-shadow:
    0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  box-shadow:
    var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000),
    var(--tw-shadow);
  width: 100%;
}
.news-item {
  list-style: none;
  margin-bottom: 15px;
  border-radius: 5px;
}
.news-item li {
  margin-bottom: 5px;
  color: var(--text-bright);
}
.news-item a {
  color: #2c3e50;
  text-decoration: none;
  font-weight: 500;
}

.news-list {
  max-height: 200px;
  overflow-y: auto;
  /* 隐藏滚动条 */;
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE/Edge */
}
</style>
