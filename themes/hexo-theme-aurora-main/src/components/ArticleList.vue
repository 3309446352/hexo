<template>
  <div class="ArticleList">
    <p
      :id="id"
      class="relative opacity-90 flex items-center pt-12 pb-2 mb-8 text-3xl text-ob-bright uppercase"
    >
      <SvgIcon
        v-if="icon"
        :icon-class="icon"
        class="inline-block mr-2 articlesvg"
        fill="var(--text-normal)"
        stroke="var(--text-normal)"
      />
      {{ t(titleStr) }}
      <span class="absolute bottom-0 h-1 w-24 rounded-full gradient-text" />
    </p>
    <div class="article-right">

    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, toRefs } from 'vue'
import { useI18n } from 'vue-i18n'
import SvgIcon from '@/components/SvgIcon/index.vue'
import VueImage from '@/components/VueImage.vue'

export default defineComponent({
  name: 'ArticleList',
  components: { SvgIcon, VueImage },
  props: {
    title: {
      type: String,
      required: true
    },
    id: String,
    icon: String
  },
  setup(props) {
    const { t } = useI18n()
    const titleStr = toRefs(props).title
    return {
      titleStr,
      t
    }
  }
})
</script>
<style>
.gradient-text {
  /* 渐变背景 */
  background-image: linear-gradient(
    130deg,
    #24c6dc,
    #5433ff 41.07%,
    #ff0099 76.05%
  );
}
.articlesvg {
  background-color: var(--article-cover);
}
.ArticleList {
  display: flex;
  justify-content: space-between;
  height: 100%;
}
</style>
