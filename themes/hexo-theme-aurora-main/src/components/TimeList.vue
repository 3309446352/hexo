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
    <div class="timelist-list">
      <h1 v-if="loading">{{ newsList }}</h1>
      <h1 v-else-if="error">{{ currentItem[currentIndex].desc }}</h1>
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
import { defineComponent, ref, onMounted, onBeforeUnmount } from 'vue'
import SvgIcon from '@/components/SvgIcon/index.vue'
import { useRouter } from 'vue-router'
import axios from 'axios'
export default defineComponent({
  name: 'TimeList',
  components: { SvgIcon },
  setup() {
    const newsList = ref([])
    const currentIndex = ref(0)
    const loading = ref(true)
    const error = ref(false)
    const router = useRouter()
    let timer: number | null = null
    // 获取新闻数据
    // 数据获取与处理
    const currentItem = [
      {
        desc: '一日不思量，也攒眉千度。\t\t——柳永《昼夜乐·洞房记得初相遇》',
      },
      {
        desc: '一朝春尽红颜老，花落人亡两不知。\t\t——李清照《如梦令·常记溪亭日暮》'
      },
      {
        desc: '月上柳梢头，人约黄昏后。\t\t——欧阳修《生查子·元夕》'
      },
      {
        desc: '天长地久有时尽，此恨绵绵无绝期。\t\t——白居易《长恨歌》'
      },
      {
        desc: '荣华诚足贵，亦复可怜伤。\t\t——陶渊明《拟古九首》'
      },
      {
        desc: '渺万里层云，千山暮雪，只影向谁去？\t\t——元好问《摸鱼儿·雁丘词 / 迈陂塘》'
      },
      {
        desc: '月明点滴，夜雨潇潇，灯下独坐。\t\t——李清照《如梦令·常记溪亭日暮》'
      },
      {
        desc: '素女鸣珠佩，天人弄彩球。\t\t——李白《宫中行乐词八首》'
      }
    ]
    // 启动定时轮播
    const startRotation = () => {
      if (timer) clearInterval(timer)
      timer = window.setInterval(() => {
        currentIndex.value = (currentIndex.value + 1) % currentItem.length
        console.log(currentIndex.value)
      }, 30000) // 3秒切换一次
    }
    const fetchNews = async () => {
      try {
        const res = await axios.get('https://oiapi.net/API/Sentences')
        newsList.value = res.data.message
        console.log(newsList.value)
      } catch (error) {
        error.value = true
      }
    }
    // 处理点击事件
    const Getpoem = () => {
      router.push('https://www.gushiwen.cn/search.aspx')
    }
    // 生命周期钩子
    onMounted(() => {
      fetchNews()
      startRotation()
    })

    return {
      newsList,
      currentIndex,
      loading,
      error,
      currentItem,
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
  background-color: #fefefe;
  transition: all 0.3s ease;

  .arrow-icon {
    width: 2rem;
    height: 2rem;
    transition: transform 0.3s ease;
    cursor: pointer;

    &:hover {
      transform: scale(1.1);
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
      color: #2196F3;
      transform: scale(1.05);
      /* 放大效果 */
      box-shadow: 0 12px 16px rgba(0, 0, 0, 0.2);
    }
  }
}
</style>
