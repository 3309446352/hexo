<template>
  <div class="TimeList">
    <SvgIcon icon-class="timelist-arrow-left" class="" svgType="fill" width="2rem" height="2rem" />
    <div class="timelist-list">
      <!-- 使用v-for循环渲染标题 -->
      <h1 v-for="(item, index) in newsList" :key="index">
        {{ item.desc }}
      </h1>
    </div>
    <SvgIcon icon-class="timelist-arrow-right" class="" svgType="fill" width="2rem" height="2rem" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'
import SvgIcon from '@/components/SvgIcon/index.vue'
import Axios from 'axios'

export default defineComponent({
  name: 'TimeList',
  components: { SvgIcon },
  setup() {
    const newsList = ref(['desc', 'rawUrl'])
    const Newsdata = function (newsList: string | any[]) {
      // 处理新闻数据
      for (let index = 0; index < newsList.length; index++) {
        // eslint-disable-next-line no-self-assign
        newsList[index].desc = newsList[index].desc
        // eslint-disable-next-line no-self-assign
        newsList[index].rawUrl = newsList[index].rawUrl
        console.log(newsList)
      }
    }

    // 处理新闻数据
    const fetchNewsList = async () => {
      const response = await Axios.get(
        'https://cn.apihz.cn/api/xinwen/baidu.php?id=88888888&key=88888888'
      ) // 替换为实际的API地址
      console.log(response.data)
    }
    onMounted(() => {
      fetchNewsList()
    })
    return {
      newsList: ref([])
    }
  }
})
</script>

<style scoped lang="scss">
.TimeList {
  background: var(--heo-card-bg);
  background-color: #fefefe;
  padding: 0.5rem 1rem;
  border-radius: 12px;
  box-shadow: var(--heo-shadow-lightblack);
  display: flex;
  transition: 0.3s;
  margin-bottom: 1rem;
  border: var(--style-border);
  align-items: center;
  height: 50px;

  .timelist-list {
    width: 100%;

    h1 {
      text-align: center;
      font-weight: bold;
      margin: 0.5rem 0;
      // 添加过渡效果
      transition: all 0.3s ease;
    }
  }

  // 加载状态样式
  &.loading {
    .timelist-list h1 {
      opacity: 0.6;
      transform: translateY(10px);
    }
  }

  // 错误状态样式
  &.error {
    .timelist-list h1 {
      color: #ff4444;
      text-decoration: line-through;
    }
  }
}
</style>
