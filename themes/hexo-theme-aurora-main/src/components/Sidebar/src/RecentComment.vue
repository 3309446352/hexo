<template>
  <div v-if="!!enabledCommentPlugin.recentComment" class="sidebar-box">
    <!--v-if="!!enabledCommentPlugin.recentComment"控制整个评论盒子是否显示，取决于评论插件是否支持recentComment功能-->
    <SubTitle :title="'titles.recent_comment'" icon="quote" />
    <!--TODO: <SubTitle>组件用于显示标题，标题文本来自国际化设置的 titles.recent_comment-->
    <ul>
      <template v-if="isLoading === false">
        <template v-if="comments.length > 0">
          <li
            class="bg-ob-deep-900 px-2 py-2 mb-1.5 rounded-lg shadow-sm transition-all duration-300 ease-in-out hover:scale-105"
            v-for="comment in comments"
            :key="comment.id"
          >
            <a
              :href="`${comment.html_url}#${comment.id}`"
              class="flex flex-row justify-items-center items-stretch cursor-pointer hover:opacity-100"
            >
              <div class="flex justify-start items-start">
                <img
                  :class="avatarClass"
                  :src="comment.user.avatar_url"
                  alt="comment-avatar"
                />
              </div>
              <div class="flex-1 text-xs">
                <div class="text-xs mb-2 pt-1">
                  <span class="text-ob-secondary pr-2">
                    <a class="font-bold" :href="comment.user.html_url">{{
                      comment.user.login
                    }}</a>
                    <b
                      class="ml-2 text-ob bg-ob-deep-800 py-0.5 px-1.5 rounded-md"
                      v-if="comment.is_admin"
                    >
                      {{ t('settings.admin-user') }}
                    </b>
                  </span>
                  <span class="text-ob-dim text-[0.65rem]">{{
                    comment.created_at
                  }}</span>
                </div>
                <div class="text-xs pb-1">
                  {{ comment.body }}
                </div>
              </div>
            </a>
          </li>
        </template>
        <!--正常状态 (v-if="comments.length > 0")：
        使用 v-for遍历 comments数组，渲染每条评论。-->
        <div v-else class="flex flex-row justify-center items-center text-ob-dim">
          <!--空状态 (v-if="comments.length > 0"的 v-else部分)：
          当评论数据加载完成但数组长度为0时，显示一个提示信息，告知用户暂无评论。文本内容通过 t('settings.empty-recent-comments')从国际化文件中获取。-->
          <SvgIcon
            class="mr-2"
            icon-class="warning"
            :svgType="SvgTypes.stroke"
            stroke="var(--text-dim)"
          />
          {{ t('settings.empty-recent-comments') }}
        </div>
      </template>
      <template v-else>
        <!-- 加载中状态 (v-if="isLoading === false"的 v-else部分)：
        当 isLoading为 true时，显示7个骨架屏 (<ob-skeleton>) 占位符，模拟评论列表的布局，提升用户体验。-->
        <li
          class="bg-ob-deep-900 px-2 py-3 mb-1.5 rounded-lg flex flex-row justify-items-center items-start shadow-sm transition-all"
          v-for="n in 3"
          :key="n"
        >
          <ob-skeleton
            class="col-span-1 mr-2 rounded-full p-1"
            height="19px"
            width="19px"
            :circle="true"
          />
          <div class="flex-1 text-xs">
            <div class="text-xs">
              <span class="text-ob pr-2">
                <ob-skeleton
                  tag="b"
                  class="text-ob-secondary bg-ob-deep-800 py-0.5 px-1.5 rounded-md"
                  height="10px"
                  width="50px"
                />
              </span>
              <ob-skeleton
                tag="p"
                class="text-ob-secondary bg-ob-deep-800 py-0.5 px-1.5 rounded-md"
                height="10px"
                width="40px"
              />
            </div>
            <div class="text-xs text-ob-bright">
              <ob-skeleton
                class="text-ob-secondary bg-ob-deep-800 py-0.5 px-1.5 rounded-md"
                height="10px"
                width="126px"
              />
            </div>
          </div>
        </li>
      </template>
    </ul>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, watch } from 'vue'
import { SubTitle } from '@/components/Title'
import SvgIcon from '@/components/SvgIcon/index.vue'
import { useAppStore } from '@/stores/app'
import { useI18n } from 'vue-i18n'
import { SvgTypes } from '@/components/SvgIcon/index.vue'
import useCommentPlugin from '@/hooks/useCommentPlugin'

export default defineComponent({
  name: 'ArRecentComment',
  // <--!TODO:最近评论组件-->
  components: { SubTitle, SvgIcon },
  setup() {
    const appStore = useAppStore()
    const { t } = useI18n()
    const {
      enabledCommentPlugin, // 当前启用的评论插件信息。
      recentComments, // 响应式变量，存储获取到的评论列表。
      fetchRecentComment, //用于调用API获取最新评论
      commentPluginLoading //响应式变量，表示数据加载状态。
    } = useCommentPlugin()

    /** Wait for config is ready */
    // 监听器 (watch)：监听 appStore.configReady的值变化。
    // 当应用配置从"未准备"变为"已准备"时，自动调用 fetchRecentComment获取数据。
    // 这确保了在获取评论前，必要的插件配置已经加载完成。
    watch(
      () => appStore.configReady,
      (newValue, oldValue) => {
        if (!oldValue && newValue) {
          fetchRecentComment()
        }
      }
    )

    return {
      // avatarClass: 动态生成头像的CSS类，其中包含了从全局主题配置中获取的头像形状类名。
      //isLoading和 comments: 分别返回 useCommentPlugin中对应的响应式变量的值。
      avatarClass: computed(() => {
        return {
          'col-span-1 mr-2 h-6 w-6': true,
          [appStore.themeConfig.theme.profile_shape]: true
        }
      }),
      isLoading: computed(() => commentPluginLoading.value),
      comments: computed(() => recentComments.value),
      isConfigReady: computed(() => appStore.configReady),
      SvgTypes,
      fetchRecentComment,
      enabledCommentPlugin,
      t
    }
  },
  //生命周期钩子 (mounted)
  //在组件挂载到DOM后，如果此时应用配置已经准备就绪 (this.isConfigReady)，
  // 则立即调用 fetchRecentComment获取评论。这处理了组件在配置加载完成后才被渲染的场景。
  mounted() {
    if (this.isConfigReady) {
      this.fetchRecentComment()
    }
  }
})
</script>

<style lang="scss" scoped>
li:hover {
  border: solid 3px #2fd8d8;
}
.sidebar-box {
  background-color: var(--background-secondary);
  border-radius: 1rem;
  margin-bottom: 2rem;
  padding: 2rem;
  position: relative;
  --tw-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
  width: 100%;
}
</style>
