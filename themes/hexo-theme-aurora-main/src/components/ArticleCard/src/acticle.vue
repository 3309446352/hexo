<template>
  <div class="Article-Card flex rounded-2xl " @click="handleCardClick(post?.slug)">
    <div class="w-1/2">
      <img v-if="post.cover" v-lazy="post.cover" alt="" class="ArticleImg w-full h-full object-cover rounded-l-2xl" />
      <img v-else src="@/assets/w.png" class="ArticleImg w-full h-full object-cover rounded-l-2xl" />
    </div>
    <div class="ArticleContent w-1/2">
      <!--标题-->
      <router-link v-if="post.title" :to="{ name: 'post-slug', params: { slug: post.slug } }">
        <h1 class="ArticleTitle text-center text-2xl" data-dia="article-link">
          {{ post.title }}
        </h1>
      </router-link>
      <!--如果 post.text 存在，则直接显示文章的文本内容。如果 post.text 不存在，则使用 ob-skeleton 骨架屏组件显示一个占位符，模拟多行文本的外观-->
      <ob-skeleton v-else tag="h1" height="3rem" />
      <p class="ArticleDesc text-center text-xl h-3/5" v-if="post.text">{{ post.text }}</p>
      <ob-skeleton v-else tag="p" :count="4" height="16px" />

      <div class="w-full flex justify-center">
        <span >
          <b v-if="post.pinned" class="article-tag-name">
            <span>
              <span>{{ t('settings.pinned') }}</span>
            </span>
          </b>
          <b v-if="post.feature" class="article-tag-name">
            <span>
              <SvgIcon icon-class="hot" width="1.05rem" height="1.05rem" class="-mb-0.5" stroke="currentColor" />
              <span>{{ t('settings.featured') }}</span>
            </span>
          </b>
          <b v-if="post.categories && post.categories.length > 0" @click="navigateToCategory(post.categories[0].slug)">
            {{ post.categories[0].name }}
          </b>
          <b v-else-if="post.categories && post.categories.length <= 0">
            {{ t('settings.default-category') }}
          </b>
          <ob-skeleton v-else tag="b" height="20px" width="35px" />
        </span >
        <span class="flex">
          <ul v-if="post.tags && post.tags.length > 0" class="w-full flex flex-nowrap">
            <li v-for="tag in post.min_tags" :key="tag.slug" @click="navigateToTag(tag.slug)" >
              <em># </em><span>{{ tag.name }}</span>
            </li>
          </ul>
          <ul v-else-if="post.tags && post.tags.length <= 0">
            <li>
              <em>#</em><span>{{ t('settings.default-tag') }}</span>
            </li>
          </ul>
          <ul v-else>
            <ob-skeleton v-if="!post.tags" :count="2" tag="li" height="16px" width="35px" />
          </ul>
        </span>
      </div>

      <div class="article-footer mx-10" v-if="post.author && post.date">
        <div class="flex flex-row items-center">
          <img class="w-8 h-8 rounded-full mr-2" :src="post.author.avatar" :alt="`avatar-${post.author.name}`"
            @click="handleAuthorClick(post.author.link)" />
          <span class="text-ob-dim">
            <strong class="text-ob-normal pr-1.5 hover:text-ob hover:opacity-50 cursor-pointer"
              @click="handleAuthorClick(post.author.link)">
              {{ post.author.name }}
            </strong>
            {{ t('settings.shared-on') }} {{ t(post.date.month) }}
            {{ post.date.day }}, {{ post.date.year }}
          </span>
        </div>
      </div>

      <div class="article-footer" v-else>
        <div class="flex flex-row items-center mt-6">
          <ob-skeleton class="mr-2" height="28px" width="28px" :circle="true" />
          <span class="text-ob-dim mt-1">
            <ob-skeleton height="20px" width="150px" />
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import SvgIcon from '@/components/SvgIcon/index.vue'
import { useRouter } from 'vue-router'
import { useAppStore } from '@/stores/app'
import { useI18n } from 'vue-i18n'
import ObSkeleton from '@/components/LoadingSkeleton/Skeleton.vue'
export default defineComponent({
  name: 'ArticleContent',
  components: { ObSkeleton },
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const router = useRouter()
    const appStore = useAppStore() //用于获取应用程序配置的存储实例。
    const { t } = useI18n()

    const handleCardClick = (slug?: string) => {
      if (!slug) return
      router.push({ name: 'post-slug', params: { slug } })
    } //用于跳转到文章详情页。

    const handleAuthorClick = (link: string) => {
      if (link === '') link = window.location.href
      window.location.href = link
    } //用于跳转到作者链接。

    const navigateToTag = (slug: string) => {
      router.push({ name: 'post-search', query: { tag: slug } })
    } //用于根据标签筛选文章列表。

    const navigateToCategory = (slug: string) => {
      router.push({ name: 'post-search', query: { category: slug } })
    } //用于根据分类筛选文章列表。

    return {
      avatarClasses: computed(() => ({
        'hover:opacity-50 cursor-pointer': true,
        [appStore.themeConfig.theme.profile_shape]: true
      })),
      gradientBackground: computed(() => {
        return { background: appStore.themeConfig.theme.header_gradient_css }
      }),
      post: computed(() => props.data),
      navigateToTag,
      navigateToCategory,
      handleAuthorClick,
      handleCardClick,
      t
    }
  }
})
</script>

<style scoped lang="scss">
.Article-Card {
  height: 20rem;
  color: var(--text-bright);
  background: var(--gradient-cover);
}

.Article-Card:hover {
  transform: scale(1.03);
  border: #2196f3 solid 3px;
}
b{
  color: #2c92ce;
}
</style>
