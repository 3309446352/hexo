<template>
  <div
    class="post-stats"
    v-if="postTimeCount !== undefined && postWordCount !== undefined"
  >
    <span>
      <SvgIcon
        class="opacity-70"
        icon-class="clock"
        fill="none"
        stroke="white"
        height="1.25em"
        width="1.25em"
      />
      <span class="pl-2 opacity-70">
        {{ postTimeCount }}
      </span>
    </span>
    <span>
      <SvgIcon
        class="opacity-70"
        icon-class="text"
        fill="none"
        stroke="white"
        height="1.25em"
        width="1.25em"
      />
      <span class="pl-2 opacity-70">
        {{ postWordCount }}
      </span>
    </span>

    <!-- Waline -->
    <span v-if="plugin === 'waline'">
      <SvgIcon
        class="opacity-70"
        icon-class="hot"
        fill="none"
        stroke="white"
        height="1.25em"
        width="1.25em"
      />
      <span class="pl-2 opacity-70">
        <span class="waline-pageview-count">
          <ob-skeleton width="40px" height="16px" />
        </span>
      </span>
    </span>
    <span v-if="comments && plugin === 'waline'">
      <SvgIcon
        class="opacity-70"
        icon-class="quote"
        fill="none"
        stroke="white"
        height="1.25em"
        width="1.25em"
      />
      <span class="pl-2 opacity-70">
        <span class="waline-comment-count" :data-path="currentPath">
          <ob-skeleton width="40px" height="16px" />
        </span>
      </span>
    </span>

    <!-- Twikoo -->
    <span v-if="plugin === 'twikoo'">
      <SvgIcon
        class="opacity-70"
        icon-class="hot"
        fill="none"
        stroke="white"
        height="1.25em"
        width="1.25em"
      />
      <span class="pl-2 opacity-70" id="twikoo_visitors">
        <ob-skeleton width="40px" height="16px" />
      </span>
    </span>
    <span v-if="comments && plugin === 'twikoo'">
      <SvgIcon
        class="opacity-70"
        icon-class="quote"
        fill="none"
        stroke="white"
        height="1.25em"
        width="1.25em"
      />
      <span class="pl-2 opacity-70">
        <template v-if="commentCount === undefined">
          <ob-skeleton width="40px" height="16px" />
        </template>

        <template v-else>
          {{ commentCount }}
        </template>
      </span>
    </span>

    <!-- Valine -->
    <span v-if="plugin === 'valine'">
      <SvgIcon
        class="opacity-70"
        icon-class="hot"
        fill="none"
        stroke="white"
        height="1.25em"
        width="1.25em"
      />
      <span class="pl-2 opacity-70">
        <span
          :id="currentPath"
          class="leancloud_visitors"
          :data-flag-title="postTitle"
        >
          <i class="leancloud-visitors-count">
            <ob-skeleton width="40px" height="16px" />
          </i>
        </span>
      </span>
    </span>
  </div>

  <div v-else class="post-stats">
    <span>
      <SvgIcon
        class="opacity-70"
        icon-class="clock"
        fill="none"
        stroke="white"
        height="1.25em"
        width="1.25em"
      />
      <span class="pl-2">
        <ob-skeleton width="40px" height="16px" />
      </span>
    </span>
    <span>
      <SvgIcon
        class="opacity-70"
        icon-class="text"
        fill="white"
        stroke="white"
        height="1.25em"
        width="1.25em"
      />
      <span class="pl-2">
        <ob-skeleton width="40px" height="16px" />
      </span>
    </span>
    <span
      v-if="plugin === 'waline' || plugin === 'twikoo' || plugin === 'valine'"
    >
      <SvgIcon
        class="opacity-70"
        icon-class="hot"
        fill="none"
        stroke="white"
        height="1.25em"
        width="1.25em"
      />
      <span class="pl-2">
        <ob-skeleton width="40px" height="16px" />
      </span>
    </span>
    <span v-if="comments && (plugin === 'waline' || plugin === 'twikoo')">
      <SvgIcon
        class="opacity-70"
        icon-class="quote"
        fill="none"
        stroke="white"
        height="1.25em"
        width="1.25em"
      />
      <span class="pl-2">
        <ob-skeleton width="40px" height="16px" />
      </span>
    </span>
  </div>
</template>

<script lang="ts">
import { PropType, computed, defineComponent, ref } from 'vue'
import SvgIcon from '@/components/SvgIcon/index.vue'
import { PluginsData, ThemeConfig } from '@/models/ThemeConfig.class'
import useCommentPlugin from '@/hooks/useCommentPlugin'

export default defineComponent({
  name: 'ObPostStats',
  // < --:TODO:评论组件-->
  components: { SvgIcon },
  props: {
    postWordCount: {
      type: Number || undefined
    }, //文章字数
    postTimeCount: {
      type: String || undefined
    }, //阅读时长
    postTitle: {
      type: String
    }, //文章标题，用于评论系统
    pluginConfigs: {
      type: Object as PropType<PluginsData>,
      default: () => new ThemeConfig().plugins,
      required: true
    },
    currentPath: {
      type: String,
      default: '/',
      required: true
    }, //评论插件的配置对象
    comments: Boolean //是否显示评论数统计
  },
  setup(props, { expose }) {
    const commentCount = ref<number | undefined>(undefined)
    const {
      enabledCommentPlugin, //当前启用的评论插件
      initCommentPluginCommentCount, //初始化评论数的方法
      intiCommentPluginPageView //初始化访问量的方法
    } = useCommentPlugin()

    const getCommentCount = async () => {
      commentCount.value = await initCommentPluginCommentCount(
        props.currentPath
      )
    }

    const getPostView = () => {
      intiCommentPluginPageView(props.currentPath)
    }
    //通过 expose方法将 getCommentCount和 getPostView暴露给父组件，使得父组件可以手动触发评论数和访问量的获取。
    expose({
      getCommentCount,
      getPostView
    })

    return {
      //返回了模板中需要使用的 commentCount和计算属性 plugin。
      commentCount,
      plugin: computed(() => enabledCommentPlugin.value.plugin)
    }
  }
})
</script>
