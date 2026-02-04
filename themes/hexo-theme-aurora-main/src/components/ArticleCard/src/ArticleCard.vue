<template>
  <li
    class="article-container"
    :class="{ 'glass-effect': hasHiddenTag }"
    @click="handleCardClick(post?.slug)"
  >
    <!-- 新增：密码验证下拉框 -->
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
    <span v-if="post.feature" class="article-tag-card">
      <b>
        <SvgIcon icon-class="hot" />
        {{ t('settings.featured') }}
      </b>
    </span>
    <div class="article">
      <div class="article-thumbnail">
        <img v-if="post.cover" v-lazy="post.cover" />
        <img v-else src="@/assets/w.webp" />
        <span class="thumbnail-screen" :style="gradientBackground" />
      </div>
      <div class="article-content">
        <span>
          <b v-if="post.pinned" class="article-tag">
            <span>
              <span>{{ t('settings.pinned') }}</span>
            </span>
          </b>
          <b v-if="post.feature" class="article-tag">
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
        </span>
        <span class="flex flex-wrap">
          <ul v-if="post.tags && post.tags.length > 0">
            <li v-for="tag in post.min_tags" :key="tag.slug" @click="navigateToTag(tag.slug)">
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

        <router-link v-if="post.title" :to="{ name: 'post-slug', params: { slug: post.slug } }">
          <h1 data-dia="article-link">{{ post.title }}</h1>
        </router-link>
        <ob-skeleton v-else tag="h1" height="3rem" />

        <p v-if="post.text">{{ post.text }}</p>
        <ob-skeleton v-else tag="p" :count="4" height="16px" />

        <div class="article-footer" v-if="post.author && post.date">
          <div class="flex flex-row items-center">
            <img :class="avatarClasses" :src="post.author.avatar" :alt="`avatar-${post.author.name}`"
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
  </li>
</template>

<script lang="ts">
import { useAppStore } from '@/stores/app'
import { computed, ComputedRef, defineComponent, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import SvgIcon from '@/components/SvgIcon/index.vue'
import { useRouter } from 'vue-router'
import { Tag } from '@/models/Post.class'

export default defineComponent({
  name: 'ARArticleCard',
  components: { SvgIcon },
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const router = useRouter()
    const appStore = useAppStore()
    const { t } = useI18n()
    // 计算属性：检查是否有隐藏标签
    const hasHiddenTag: ComputedRef<boolean> = computed(() => {
      const tags = props.data.tags;
      if (!tags || !Array.isArray(tags)) return false;
      // 简化判断逻辑
      return tags.some((tag: Tag) => tag.name === '隐藏');
    });
    // 新增状态：控制密码框显示
    const showPasswordDialog = ref(false)
    const inputPassword = ref('')
    const handleCardClick = (slug?: string) => {
      if (!slug) return;
      // 如果有隐藏标签，拦截跳转，显示密码框
      if (hasHiddenTag.value) {
        showPasswordDialog.value = !showPasswordDialog.value
      } else {
        // 正常跳转
        router.push({ name: 'post-slug', params: { slug } });
      }
    }
    const handleAuthorClick = (link: string) => {
      if (!link) link = window.location.href
      window.location.href = link
    }
    // 新增：验证密码并跳转
    const confirmAccess = () => {
      const correctPassword = 'qwer' // 你的密码
      if (inputPassword.value === correctPassword) {
        showPasswordDialog.value = false
        // 验证成功后跳转
        router.push({ name: 'post-slug', params: { slug: props.data.slug } });
      } else {
        alert('密码错误');
      }
    };
    const navigateToTag = (slug: string) => {
      router.push({ name: 'post-search', query: { tag: slug } })
    }
    const navigateToCategory = (slug: string) => {
      router.push({ name: 'post-search', query: { category: slug } })
    }
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
      handleCardClick, // 确保返回的是修正后的函数
      t,
      hasHiddenTag,
      showPasswordDialog,
      inputPassword,
      confirmAccess
    }
  }
})
</script>

<style lang="scss" scoped>
/* 新增玻璃模糊效果样式 */
.glass-effect {
  position: relative;
  overflow: hidden;

  /* 密码验证下拉框样式 */
  .password-dropdown {
    // 1. 定位：绝对定位在卡片正中央
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: 2px solid  #38bdf8;

    // 2. 层级：必须大于遮罩层的 z-index: 10
    z-index: 20;

    // 3. 尺寸与外观
    width: 86%; // 宽度占卡片绝大部分
    max-width: 320px;
    padding: 24px 20px;

    // 背景采用半透明毛玻璃质感，与遮罩区分开
    background: rgba(255, 255, 255, 0.82);
    backdrop-filter: blur(8px);
    border-radius: 12px;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.15);

    // 简单的入场动画
    animation: fadeInDown 0.3s ease-out;

    // 标题样式
    .dropdown-header {
      text-align: center;
      font-size: 1.1rem;
      font-weight: 600;
      color: #333;
      margin-bottom: 20px;
      letter-spacing: 0.5px;
    }

    // 内容区布局
    .dropdown-body {
      display: flex;
      flex-direction: column;
      gap: 12px; // 输入框与按钮的间距

      input {
        width: 100%;
        padding: 12px 16px;
        font-size: 0.95rem;
        color: #333;
        background: rgba(255, 255, 255, 0.8);
        border: 1px solid #e0e0e0;
        border-radius: 8px;
        outline: none;
        transition: all 0.3s ease;
        box-sizing: border-box; // 确保padding不撑大宽度

        &:focus {
          border-color: var(--theme-color, #409eff); // 建议使用您的主题色变量
          box-shadow: 0 0 0 3px rgba(64, 158, 255, 0.1);
        }

        &::placeholder {
          color: #aaa;
        }
      }

      button {
        width: 100%;
        padding: 12px;
        font-size: 1rem;
        font-weight: 500;
        color: #fff;
        background: var(--theme-color, #409eff); // 建议使用您的主题色变量
        border: none;
        border-radius: 8px;
        cursor: pointer;
        transition: all 0.3s ease;

        &:hover {
          opacity: 0.9;
          transform: translateY(-1px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }

        &:active {
          transform: translateY(0);
        }
      }
    }
  }

  // 定义入场动画
  @keyframes fadeInDown {
    from {
      opacity: 0;
      transform: translate(-50%, -40%);
    }
    to {
      opacity: 1;
      transform: translate(-50%, -50%);
    }
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    // 优化点1：大幅降低模糊半径（从30px降至10px以内），这是性能杀手
    backdrop-filter: blur(5px);
    // 优化点2：通过背景色替代brightness滤镜，减少计算量
    background-color: rgba(129, 128, 128, 0.6);
    z-index: 10;
    border-radius: inherit;
    //pointer-events: none;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      45deg,
      transparent 48%,
      //rgba(0, 0, 0, 0.3) 50%,
      transparent 52%
    );
    background-size: 10px 10px;
    //z-index: 11; // 条纹层级需高于遮罩层
    //pointer-events: none; // 同样允许穿透
  }

  > * {
    position: relative;
    z-index: 3;
  }
}
.feature-sign {
  width: calc(100% - 0.5rem);
  height: calc(100% - 0.5rem);
  margin: 0.25rem;
}
.article-container {
  &:hover {
    .article-tag-card {
      transform: translateY(-60%);
    }

    .article,
    .feature-article {
      transform: scale(1.015);
    }
  }

  .article-tag-card {
    @apply absolute flex items-start left-6 -top-1 pt-1 pb-3 px-1 rounded-md text-sm text-white font-bold shadow-lg uppercase transform;
    background: var(--main-gradient);

    > b {
      @apply py-1 px-3 rounded text-white stroke-current;
      width: 100%;
      height: 100%;
      text-shadow: 0 2px 2px rgba(0, 0, 0, 0.5);
      background: rgba(0, 0, 0, 0.5);
    }

    z-index: 0;
    transition: transform 200ms ease-in-out;
  }
}
</style>
