<template>
  <div
    class="Article-Card flex rounded-2xl"
    :class="{ 'is-locked': hasHiddenTag }"
    @click="handleCardClick(post?.slug)"
  >
    <!-- 1. 内容层 -->
    <div class="w-1/2 flex justify-center items-center">
      <img
        v-if="post.cover"
        v-lazy="post.cover"
        alt=""
        class="ArticleImg w-4/5 h-4/5 object-cover rounded-2xl"
        style="width: 99%; height: 99%"
      />
      <img
        v-else
        src="@/assets/w.webp"
        class="ArticleImg object-cover rounded-2xl"
        style="width: 99%; height: 99%"
      />
    </div>
    <div class="ArticleContent w-1/2">
      <router-link
        v-if="post.title"
        :to="{ name: 'post-slug', params: { slug: post.slug } }"
      >
        <h1 class="ArticleTitle text-center text-2xl" data-dia="article-link">
          {{ post.title }}
        </h1>
      </router-link>
      <ob-skeleton v-else tag="h1" height="3rem" />
      <p class="ArticleDesc text-center text-xl h-3/5" v-if="post.text">
        {{ post.text }}
      </p>
      <ob-skeleton v-else tag="p" :count="4" height="16px" />
      <div class="w-full flex justify-center">
        <span>
          <b v-if="post.pinned" class="article-tag-name"
            ><span>{{ t('settings.pinned') }}</span></b
          >
          <b v-if="post.feature" class="article-tag-name">
            <span>
              <SvgIcon
                icon-class="hot"
                width="1.05rem"
                height="1.05rem"
                class="-mb-0.5"
                stroke="currentColor"
              />
              <span>{{ t('settings.featured') }}</span>
            </span>
          </b>
          <b
            v-if="post.categories && post.categories.length > 0"
            @click="navigateToCategory(post.categories[0].slug)"
          >
            {{ post.categories[0].name }}
          </b>
          <b v-else-if="post.categories && post.categories.length <= 0">{{
            t('settings.default-category')
          }}</b>
          <ob-skeleton v-else tag="b" height="20px" width="35px" />
        </span>
        <span class="flex">
          <ul
            v-if="post.tags && post.tags.length > 0"
            class="w-full flex flex-nowrap"
          >
            <li
              v-for="tag in post.min_tags"
              :key="tag.slug"
              @click="navigateToTag(tag.slug)"
            >
              <em># </em><span class="tag-name">{{ tag.name }}</span>
            </li>
          </ul>
          <ul v-else-if="post.tags && post.tags.length <= 0">
            <li>
              <em>#</em
              ><span class="tag-tag">{{ t('settings.default-tag') }}</span>
            </li>
          </ul>
          <ul v-else>
            <ob-skeleton
              v-if="!post.tags"
              :count="2"
              tag="li"
              height="16px"
              width="35px"
            />
          </ul>
        </span>
      </div>
      <div class="article-footer mx-10" v-if="post.author && post.date">
        <div class="flex flex-row items-center">
          <img
            class="w-8 h-8 rounded-full mr-2"
            :src="post.author.avatar"
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
          <ob-skeleton class="mr-2" height="28px" width="28px" :circle="true" />
          <span class="text-ob-dim mt-1"
            ><ob-skeleton height="20px" width="150px"
          /></span>
        </div>
      </div>
    </div>
    <!--
      2. 遮罩层
      修改点：去掉了 @click.stop
      原因：让点击能够冒泡到父级 .Article-Card，从而触发 handleCardClick 弹出密码框
    -->
    <div v-if="hasHiddenTag" class="glass-overlay">
      <!-- 密码框：这里保留 @click.stop，防止点击输入框时关闭弹窗 -->
      <div v-if="showPasswordDialog" class="password-dropdown" @click.stop>
        <div class="dropdown-header">该内容已加密</div>
        <div class="dropdown-body">
          <input
            v-model="inputPassword"
            type="password"
            placeholder="请输入访问密码"
            @keyup.enter="confirmAccess"
          />
          <button @click="confirmAccess">解锁</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
// ... (Script部分保持不变，无需修改)
import { computed, defineComponent, ref, ComputedRef } from 'vue'
import SvgIcon from '@/components/SvgIcon/index.vue'
import { useRouter } from 'vue-router'
import { useAppStore } from '@/stores/app'
import { useI18n } from 'vue-i18n'
import ObSkeleton from '@/components/LoadingSkeleton/Skeleton.vue'
import { Tag } from '@/models/Post.class'
export default defineComponent({
  name: 'ArticleContent',
  components: { SvgIcon, ObSkeleton },
  props: { data: { type: Object, required: true } },
  setup(props) {
    const router = useRouter()
    const { t } = useI18n()
    const showPasswordDialog = ref(false)
    const inputPassword = ref('')

    // 计算属性：检查是否有隐藏标签
    const hasHiddenTag: ComputedRef<boolean> = computed(() => {
      const tags = props.data.tags
      if (!tags || !Array.isArray(tags)) return false
      return tags.some((tag: Tag) => tag.name === '隐藏')
    })
    const handleCardClick = (slug?: string) => {
      if (!slug) return
      if (hasHiddenTag.value) {
        // 切换密码框显示状态
        showPasswordDialog.value = !showPasswordDialog.value
      } else {
        router.push({ name: 'post-slug', params: { slug } })
      }
    }
    // 新增：验证密码并跳转
    const confirmAccess = () => {
      if (inputPassword.value === props.data.slug) {
        showPasswordDialog.value = false
        router.push({ name: 'post-slug', params: { slug: props.data.slug } })
      } else {
        alert('密码错误')
      }
    }
    const handleAuthorClick = (link: string) => {
      if (link === '') link = window.location.href
      window.location.href = link
    }
    const navigateToTag = (slug: string) =>
      router.push({ name: 'post-search', query: { tag: slug } })
    const navigateToCategory = (slug: string) =>
      router.push({ name: 'post-search', query: { category: slug } })
    return {
      post: computed(() => props.data),
      navigateToTag,
      navigateToCategory,
      handleAuthorClick,
      handleCardClick,
      t,
      hasHiddenTag,
      showPasswordDialog,
      inputPassword,
      confirmAccess
    }
  }
})
</script>
<style scoped lang="scss">
.Article-Card {
  height: 20rem;
  color: var(--text-bright);
  background: var(--gradient-cover);
  padding: 10px;
  position: relative;
  overflow: hidden;
  will-change: transform, box-shadow;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
  &:hover {
    transform: scale(1.02);
    box-shadow:
      0 0 0 3px #2196f3,
      0 10px 20px rgba(0, 0, 0, 0.1);
  }
}
b {
  color: #2c92ce;
}
/* --- 玻璃遮罩层 --- */
.glass-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: inherit;
  z-index: 10;
  /* 玻璃质感核心样式 */
  backdrop-filter: blur(14px) brightness(90%);
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 10px;
  /* 重要：不要设置 pointer-events: none，否则点不到 */
  cursor: pointer; /* 鼠标悬停显示手型，提示可点击 */
}
/* --- 密码框样式 --- */
.password-dropdown {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 20;
  width: 80%;
  max-width: 320px;
  padding: 24px;
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(20px);
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.5);
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
  animation: popIn 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  .dropdown-header {
    text-align: center;
    font-size: 1.1rem;
    font-weight: 600;
    color: #333;
    margin-bottom: 20px;
  }
  .dropdown-body {
    display: flex;
    flex-direction: column;
    gap: 12px;
    input {
      width: 100%;
      padding: 12px;
      font-size: 1rem;
      color: #333;
      background: rgba(255, 255, 255, 0.9);
      border: 1px solid rgba(200, 200, 200, 0.3);
      border-radius: 8px;
      outline: none;
      box-sizing: border-box;
      text-align: center;
      &:focus {
        border-color: #2196f3;
        box-shadow: 0 0 0 3px rgba(33, 150, 243, 0.1);
      }
    }
    button {
      width: 100%;
      padding: 12px;
      font-size: 1rem;
      font-weight: 500;
      color: #fff;
      background: linear-gradient(135deg, #2196f3, #1976d2);
      border: none;
      border-radius: 8px;
      cursor: pointer;
      transition:
        transform 0.2s,
        box-shadow 0.2s;
      &:hover {
        transform: translateY(-2px);
        box-shadow: 0 5px 15px rgba(33, 150, 243, 0.3);
      }
      &:active {
        transform: translateY(0);
      }
    }
  }
}
@keyframes popIn {
  from {
    opacity: 0;
    transform: translate(-50%, -50%) scale(0.8);
  }
  to {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }
}
</style>
