<template>
  <div class="TimeList">
    <SvgIcon
      icon-class="timelist-arrow-left"
      class="arrow-icon"
      svgType="fill"
      width="2rem"
      height="2rem"
      @click="fetchNews"
    />
    <div class="timelist-list" @click="Convert">
      <h1 v-if="loading">{{ newsList }}</h1>
      <h1 v-else-if="error">{{ currentItem[currentIndex] }}</h1>
      <h1 v-else>加载失败，请重试</h1>
    </div>
    <SvgIcon
      icon-class="timelist-arrow-right"
      class="arrow-icon"
      svgType="fill"
      width="2rem"
      height="2rem"
      @click="Getpoem"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'
import SvgIcon from '@/components/SvgIcon/index.vue'
import axios from 'axios'
export default defineComponent({
  name: 'TimeList',
  components: { SvgIcon },
  setup() {
    const newsList = ref([])
    const currentIndex = ref(0)
    const loading = ref(false)
    const error = ref(true)
    let timer: number | null = null
    const content = ref('')
    // 获取新闻数据
    // 数据获取与处理
    const currentItem = ref([])
    // 启动定时轮播
    const startRotation = () => {
      if (timer) clearInterval(timer)
      timer = window.setInterval(() => {
        currentIndex.value = (currentIndex.value + 1) % currentItem.value.length
      }, 8000) // 3秒切换一次
    }

    const SixWorld = async () =>{
      try {
        const res = await axios.get('https://60s.viki.moe/v2/60s?encoding=json')
        // const result = await axios.get('https://60s.viki.moe/v2/ai-news?date&all&encoding=json')
        currentItem.value = res.data.data.news
        // currentItem.value.push(...result.data.data.news.title)
        console.log( currentItem.value)
      } catch (error) {
        error.value = true
      }
    }
    const fetchNews = async () => {
      try {
        const res = await axios.get('https://oiapi.net/API/Sentences')
        newsList.value = res.data.message
        content.value = res.data.data.content
      } catch (error) {
        error.value = true
      }
    }
    // 处理点击事件
    const Getpoem = () => {
      const str = content.value.split('')[0]
      window.location.href =
        'https://www.gushiwen.cn/search.aspx?value=' +
        content.value +
        '&valuej=' +
        str
    }

    const Convert = () => {
      loading.value = !loading.value
      error.value = !error.value
    }

    // 生命周期钩子
    onMounted(() => {
      startRotation()
      fetchNews()
      SixWorld()
    })

    return {
      newsList,
      currentIndex,
      loading,
      error,
      currentItem,
      Convert,
      startRotation,
      Getpoem,
      fetchNews
    }
  }
})
</script>

<style scoped lang="scss">
.TimeList {
  position: relative;
  background: var(--heo-card-bg);
  padding: 0.5rem 1rem;
  border-radius: 12px;
  box-shadow: var(--heo-shadow-lightblack);
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  background-color: var(--background-secondary);
  transition: all 0.3s ease;

  .arrow-icon {
    width: 2rem;
    height: 2rem;
    transition: transform 0.3s ease;
    cursor: pointer;

    &:hover {
      transform: scale(1.1);
      color: #2196f3;
    }
  }

  .timelist-list {
    flex: 1;
    min-width: 0;
    overflow: hidden;
    position: relative;

    h1 {
      font-size: 1.2rem;
      margin: 0;
      transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
      opacity: 0.9;
      transform: translateY(0);
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      text-align: center;
      font-weight: bold;

      .news-index {
        margin-right: 0.5rem;
        color: #666;
        font-weight: 500;
      }
    }

    h1:hover {
      color: #2196f3;
      transform: scale(1.05);
      /* 放大效果 */
      box-shadow: 0 12px 16px rgba(0, 0, 0, 0.2);
    }
  }
}
</style>
