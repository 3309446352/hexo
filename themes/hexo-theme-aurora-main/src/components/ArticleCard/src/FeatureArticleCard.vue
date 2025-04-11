<template>
  <div class="feature-article-nav">
    <!-- 轮播主体 -->
    <img
      :src="localurl"
      class="ob-hz-thumbnail"
      v-lazy="localurl"
      @error="handleImageError"
    />

    <!-- 控制按钮 -->
    <div class="carousel-controls">
      <button @click="prevSlide">‹</button>
      <button @click="nextSlide">›</button>
    </div>

    <!-- 指示器 -->
    <div class="carousel-indicators">
      <span
        v-for="(img, index) in localList"
        :key="index"
        :class="{ active: currentIndex === index }"
        @click="goToSlide(index)"
      ></span>
    </div>
  </div>
</template>

<script lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

export default {
  setup() {
    const localList = ref([
      'https://raw.githubusercontent.com/3309446352/Images/main/img/andrian-luchian-rsi-apollo-landed-backview-03-al.jpg',
      'https://raw.githubusercontent.com/3309446352/Images/main/img/Snipaste_2023-03-19_17-56-24.png',
      'https://raw.githubusercontent.com/3309446352/Images/main/img/ben-andrews-ben-andrews-manticore-av-3-cyberpunk2077.jpg',
      'https://raw.githubusercontent.com/3309446352/Images/main/img/gavin-rothery-117435.jpg'
    ])

    const currentIndex = ref(0)
    const localurl = ref(localList.value[currentIndex.value])

    // 自动播放定时器
    let autoPlayTimer = null

    // 切换到指定索引
    const goToSlide = (index: number) => {
      if (index < 0) index = localList.value.length - 1
      if (index >= localList.value.length) index = 0
      currentIndex.value = index
      localurl.value = localList.value[index]
    }

    // 下一张
    const nextSlide = () => {
      currentIndex.value = (currentIndex.value + 1) % localList.value.length
      localurl.value = localList.value[currentIndex.value]
    }

    // 上一张
    const prevSlide = () => {
      currentIndex.value = (currentIndex.value - 1 + localList.value.length) % localList.value.length
      localurl.value = localList.value[currentIndex.value]
    }

    // 自动播放
    const startAutoPlay = () => {
      autoPlayTimer = setInterval(nextSlide, 3000)
    }

    // 停止自动播放
    const stopAutoPlay = () => {
      if (autoPlayTimer) clearInterval(autoPlayTimer)
    }

    // 图片加载错误处理
    const handleImageError = (index: number) => {
      console.error(`图片 ${index} 加载失败`)
      // 可添加备用图片逻辑
    }

    // 生命周期
    onMounted(() => {
      startAutoPlay()
    })

    onUnmounted(() => {
      stopAutoPlay()
    })

    return {
      localList,
      currentIndex,
      localurl,
      goToSlide,
      nextSlide,
      prevSlide,
      handleImageError
    }
  }
}
</script>

<style scoped>
.feature-article-nav {
  height: 26rem;
  //width: 100%;
  //grid-template-columns: repeat(2, minmax(0, 1fr));
  grid-template-rows: none;
  position: relative;
  top: 0px;
  z-index: 10;
  display: grid;
  //grid-template-rows: repeat(3, minmax(0, 1fr));
  overflow: hidden;
  border-radius: 1rem;
  background-color: var(--background-secondary);
  --tw-shadow:
    0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  --tw-shadow-colored:
    0 10px 15px -3px var(--tw-shadow-color),
    0 4px 6px -4px var(--tw-shadow-color);
  box-shadow:
    var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000),
    var(--tw-shadow);
}

.carousel-controls {
  position: absolute;
  top: 50%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  transform: translateY(-50%);
  padding: 0 10px;
  box-sizing: border-box;
}

.carousel-indicators {
  position: absolute;
  bottom: 15px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 8px;
}

.carousel-indicators span {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: rgba(255,255,255,0.5);
  cursor: pointer;
}

.carousel-indicators span.active {
  background: white;
}
</style>
