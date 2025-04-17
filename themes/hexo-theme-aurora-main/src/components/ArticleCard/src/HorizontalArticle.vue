<template>
  <div>
    <TimeList />
    <div class="article-container" @click="handleCardClick(post?.slug)">
      <div class="feature-article">
        <div
          class="feature-thumbnail"
          @mouseenter="showHover = true"
          @mouseleave="showHover = false"
        >
          <img v-if="ImgList[currentIndex]" class="ob-hz-thumbnail" v-lazy="ImgList[currentIndex]" />
          <img
            v-else-if="post.cover"
            class="ob-hz-thumbnail"
            :alt="`avatar-${post.author.name}`"
            v-lazy="post.cover"
          />
          <img
            v-else
            class="ob-hz-thumbnail"
            src="../../../assets/default-cover.jpg"
            alt=""
          />
          <span class="thumbnail-screen" :style="bannerHoverGradient" />
        </div>
        <div class="feature-content">
          <span>
            <b v-if="post.pinned" class="article-tag">
              <span>
                <SvgIcon
                  icon-class="hot"
                  width="1.05rem"
                  height="1.05rem"
                  class="-mb-0.5 mr-1"
                  stroke="currentColor"
                />
                <span>{{ t('settings.pinned') }}</span>
              </span>
            </b>
            <b v-if="post.feature" class="article-tag">
              <span>
                <SvgIcon
                  icon-class="hot"
                  width="1.05rem"
                  height="1.05rem"
                  class="-mb-0.5 mr-1"
                  stroke="currentColor"
                />
                <span>
                  {{ t('settings.featured') }}
                </span>
              </span>
            </b>
            <b
              v-if="post.categories && post.categories.length > 0"
              @click="navigateToCategory(post.categories[0].slug)"
            >
              {{ post.categories[0].name }}
            </b>
            <b v-else-if="post.categories && post.categories.length <= 0">
              {{ t('settings.default-category') }}
            </b>
            <ob-skeleton v-else tag="b" height="20px" width="35px" />
          </span>

          <span class="flex flex-wrap">
            <ul>
              <template v-if="post.tags && post.tags.length > 0">
                <li
                  v-for="index in numberOfTags"
                  :key="post.tags[index - 1].slug"
                  @click="navigateToTag(post.tags[index - 1].slug)"
                >
                  <em># </em><span>{{ post.tags[index - 1].name }}</span>
                </li>
              </template>
              <template v-else-if="post.tags && post.tags.length <= 0">
                <li>
                  <em># </em><span>{{ t('settings.default-tag') }}</span>
                </li>
              </template>
              <ob-skeleton
                v-else
                :count="2"
                tag="li"
                height="16px"
                width="35px"
              />
            </ul>
          </span>

          <router-link
            v-if="post.title"
            :to="{ name: 'post-slug', params: { slug: post.slug } }"
          >
            <h1 data-dia="article-link">{{ post.title }}</h1>
          </router-link>
          <ob-skeleton v-else tag="h1" height="3rem" />

          <p v-if="post.text">{{ post.text }}</p>
          <ob-skeleton v-else tag="p" :count="3" height="20px" />

          <div class="article-footer" v-if="post.count_time">
            <div class="flex flex-row items-center">
              <img
                :class="avatarClass"
                v-lazy="post.author.avatar"
                :alt="`avatar-${post.author.name}`"
                @click="handleAuthorClick(post.author.link)"
              />
              <span class="text-ob-dim">
                <strong
                  class="text-ob-normal pr-1.5 hover:text-ob hover:opacity-50 cursor-pointer"
                  @click="handleAuthorClick(post.author.link)"
                >
                  {{ post.author.name }}
                </strong>
                {{ t('settings.shared-on') }} {{ t(post.date.month) }}
                {{ post.date.day }}, {{ post.date.year }}
              </span>
            </div>
          </div>

          <div class="article-footer" v-else>
            <div class="flex flex-row items-center mt-6">
              <ob-skeleton
                class="mr-2"
                height="28px"
                width="28px"
                :circle="true"
              />
              <span class="text-ob-dim mt-1">
                <ob-skeleton height="20px" width="150px" />
              </span>
            </div>
          </div>
        </div>
      </div>
      <br />
    </div>
    <div class="feature-article-nav" v-if="isVisible">
      <img :src="ImgList[currentIndex]" class="ob-hz-thumbnail" alt="" />

      <!-- 指示器 -->
      <div class="carousel-indicators">
        <span
          v-for="(item, index) in ImgList"
          :key="index"
          :class="{ active: currentIndex === index }"
          @click="goToSlide(index)"
        ></span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  onMounted,
  onUnmounted,
  ref,
  toRefs
} from 'vue'
import { useAppStore } from '@/stores/app'
import { useCommonStore } from '@/stores/common'
import { useI18n } from 'vue-i18n'
import SvgIcon from '@/components/SvgIcon/index.vue'
import { useRouter } from 'vue-router'
import TimeList from '@/components/TimeList.vue'
import axios from 'axios'
import { useArticleStore } from '@/stores/article'
import { storeToRefs } from 'pinia'
enum TagLimit {
  forMobile = '2',
  default = '5'
}

export default defineComponent({
  name: 'ObHorizontalArticle',
  components: { TimeList, SvgIcon },
  props: {
    data: {
      type: Object,
      default: () => ({})
    }
  },
  setup(props) {
    const router = useRouter()
    const appStore = useAppStore()
    const commonStore = useCommonStore()
    const { t } = useI18n()
    const post = toRefs(props).data
    const articleStore = useArticleStore()
    const handleCardClick = (slug?: string) => {
      if (!slug) return
      router.push({ name: 'post-slug', params: { slug } })
    }

    const handleAuthorClick = (link: string) => {
      if (link === '') link = window.location.href
      window.location.href = link
    }

    const navigateToTag = (slug: string) => {
      router.push({ name: 'post-search', query: { tag: slug } })
    }

    const navigateToCategory = (slug: string) => {
      router.push({ name: 'post-search', query: { category: slug } })
    }

    const ImgCover = ref('')
    const ImgCoverTwo = ref('')
    const ImageUrl = ref('')
    // 当前激活的图片索引
    const currentIndex = ref<number>(0)

    //切换方法（点击任意图片触发循环切换）
    const switchImage = () => {
      currentIndex.value = (currentIndex.value + 1) % ImgList.value.length
    }
    const ImgList = computed(() => [
      ImgCover.value,
      ImgCoverTwo.value,
      ImageUrl.value
    ])
    const getImgUrl = () => {
      axios
        .get('https://v2.xxapi.cn/api/random4kPic?type=acg')
        .then(response => {
          ImgCover.value =
            response.data.data ||
            'https://images.xxapi.cn/images/4k/wallpaper/8482f0e4880811ebb6edd017c2d2eca2.jpg'
          console.log('Img URL:', ImgCover.value)
          return ImgCover.value
        })
        .catch(error => {
          ImgCover.value =
            'https://raw.githubusercontent.com/3309446352/Images/main/img/Snipaste_2023-03-19_17-56-24.png'
          console.error('Error fetching image:', error)
        })
    }

    const getImgUrlTwo = () => {
      axios
        .get('https://v2.xxapi.cn/api/random4kPic?type=wallpaper')
        .then(response => {
          console.log('ImgCoverTwo:', response)
          ImgCoverTwo.value = response.data.data
          console.log('ImgCoverTwo:', ImgCoverTwo.value)
          // 成功时触发[2,6](@ref)
          return ImgCoverTwo.value
        })
        .catch(error => {
          ImgCoverTwo.value =
            'https://raw.githubusercontent.com/3309446352/Images/main/img/Snipaste_2023-03-19_17-56-24.png'
          console.log('ImgCoverTwo:', ImgCoverTwo.value)
          console.error('Error fetching image:', error)
        })
    }
    const GetImage = () => {
      axios
        .get('/ImageUrl', {
          params: {
            return: 'json'
          }
        })
        .then(response => {
          ImageUrl.value = response.data.imgurl
          console.log('ImageUrl:', ImageUrl.value)
          return ImageUrl.value
        })
        .catch(error => {
          ImageUrl.value =
            'https://raw.githubusercontent.com/3309446352/Images/main/img/1949847037.jpg'
          console.error('未获取到:', error)
        })
    }

    const startRotation = () => {
      window.setInterval(() => {
        getImgUrl()
        GetImage()
        getImgUrlTwo()
      }, 120000) // 1分钟切换一次
    }

    // 自动播放定时器
    let autoPlayTimer = null

    // 切换到指定索引
    const goToSlide = (index: number) => {
      if (index < 0) index = ImgList.value.length - 1
      if (index >= ImgList.value.length) index = 0
      currentIndex.value = index
      ImgList.value[index]
    }

    // 下一张
    const nextSlide = () => {
      currentIndex.value = (currentIndex.value + 1) % ImgList.value.length
    }

    // 自动播放
    const startAutoPlay = () => {
      autoPlayTimer = setInterval(nextSlide, 30000)
    }

    // 停止自动播放
    const stopAutoPlay = () => {
      if (autoPlayTimer) clearInterval(autoPlayTimer)
    }
    const ArticleStore = useArticleStore()
    const { isVisible } = storeToRefs(ArticleStore)
    onMounted(() => {
      getImgUrl()
      GetImage()
      getImgUrlTwo()
      startRotation()
      startAutoPlay()
    })

    onUnmounted(() => {
      stopAutoPlay()
      getImgUrl()
      GetImage()
      getImgUrlTwo()
      startRotation()
      startAutoPlay()
    })
    return {
      avatarClass: computed(() => ({
        'hover:opacity-50 cursor-pointer': true,
        [appStore.themeConfig.theme.profile_shape]: true
      })),
      bannerHoverGradient: computed(() => {
        return { background: appStore.themeConfig.theme.header_gradient_css }
      }),
      isMobile: computed(() => commonStore.isMobile),
      numberOfTags: computed(() => {
        const tagCount = post.value.tags.length
        if (commonStore.isMobile) {
          return tagCount > TagLimit.forMobile ? TagLimit.forMobile : tagCount
        }
        return tagCount > TagLimit.default ? TagLimit.default : tagCount
      }),
      navigateToTag,
      navigateToCategory,
      post,
      handleAuthorClick,
      handleCardClick,
      t,
      articleStore,
      ImgList,
      currentIndex,
      goToSlide,
      switchImage,
      startRotation,
      getImgUrl,
      getImgUrlTwo,
      GetImage,
      isVisible,
      ImgCover
    }
  }
})
</script>

<style>
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
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  /* 调整动画曲线 */
  will-change: transform, box-shadow;
  /* 优化渲染性能 */
}

/* 正确写法：使用父元素自身悬停 */
.feature-article-nav:hover {
  transform: scale(1.02);
  /* 轻微放大效果 */
  transition: transform 0.3s ease;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

/* 添加缓动动画 */
.feature-article-nav:hover .nav-content-wrapper {
  opacity: 0.9;
  transition-delay: 0.1s;
  /* 延迟子元素动画 */
}

/* 可选：增加子元素悬停效果 */
.feature-article-nav:hover .nav-content-wrapper {
  opacity: 0.95;
}

/* 指示器悬停增强 */
.carousel-indicators span:hover {
  background: #fff;
  transform: scale(1.4);
  /* 放大效果 */
  transition: transform 0.4s ease;
  /* 单独控制指示器动画 */
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
  background: rgba(255, 255, 255, 0.5);
  cursor: pointer;
}

.carousel-indicators span.active {
  background: black;
}
</style>
