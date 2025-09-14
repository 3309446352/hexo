<template>
  <div class="sidebar-box">
    <ul class="flex flex-col flex-1 gap-1.5">
      <li class="flex flex-row max-w-[11rem]" v-if="enabledPlugin === 'waline'">
        <span>
          <SvgIcon
            icon-class="hot"
            class="mr-1 text-lg inline-block"
            stroke="currentColor"
            fill="var(--text-normal)"
          />
          {{ t('settings.page-views-value') }}
        </span>
        <span class="flex-1 text-right">
          <span class="waline-pageview-count" data-path="/" />
        </span>
      </li>

      <li
        class="flex flex-row max-w-[11rem]"
        v-if="themeConfig.plugins.busuanzi.enable"
      >
        <span>
          <SvgIcon
            icon-class="hot"
            class="mr-1 text-lg inline-block"
            stroke="currentColor"
          />
          {{ t('settings.page-views-value') }}
        </span>
        <span class="flex-1 text-right" id="busuanzi_container_site_pv">
          <span id="busuanzi_value_site_pv"
        /></span>
      </li>

      <li
        class="flex flex-row max-w-[11rem]"
        v-if="themeConfig.plugins.busuanzi.enable"
      >
        <span>
          <SvgIcon
            icon-class="friends"
            class="mr-1 text-lg inline-block"
            stroke="currentColor"
          />
          {{ t('settings.unique_visitor-value') }}
        </span>
        <span id="busuanzi_container_site_uv" class="flex-1 text-right">
          <span id="busuanzi_value_site_uv"
        /></span>
      </li>

      <li v-if="runningDays" class="flex flex-row max-w-[11rem]">
        <span>
          <SvgIcon
            icon-class="date"
            class="mr-1 text-lg inline-block"
            stroke="currentColor"
          />
          {{ t('settings.site-running-for') }}
        </span>
        <span class="flex-1 text-right"
          >{{ runningDays }} {{ t('settings.site-running-for-unit') }}</span
        >
      </li>
      <li>
        <span>
          <SvgIcon
            icon-class="IP"
            class="mr-1 text-lg inline-block"
            stroke="currentColor"
            fill="var(--text-normal)"
          />
          IP :
        </span>
        <span class="flex-1 text-right text-blue-600">{{ipAddress || "223.74.11.113"}}</span>
      </li>
      <li>
        <span class="flex-1 text-right">{{ formattedTime }}</span>
      </li>
      <li>
        <span>
          <SvgIcon
            icon-class="Address"
            class="mr-1 text-lg inline-block"
            fill="var(--text-normal)"
            stroke="var(--text-normal)"
          />
        </span>
        <span class="flex-1 text-right text-blue-600">{{ Address || '地址加载中'}}</span>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, onUnmounted, ref } from 'vue'
import { useAppStore } from '@/stores/app'
import { useI18n } from 'vue-i18n'
import SvgIcon, { SvgTypes } from '@/components/SvgIcon/index.vue'
import beianImg from '@/assets/gongan-beian-40-40.png'
import { getDaysTillNow } from '@/utils'
import useCommentPlugin from '@/hooks/useCommentPlugin'

export default defineComponent({
  name: 'ObFooter',
  components: { SvgIcon },
  setup() {
    const appStore = useAppStore()
    const { t } = useI18n()
    const { enabledCommentPlugin, intiCommentPluginPageView } =
      useCommentPlugin()

    // IP状态
    const ipAddress = ref('');
    const Address = ref('')

    // 获取IP地址
    const fetchIP = async () => {
      try {
        const response = await fetch('ip/api/getIP')
        const data = await response.json()
        console.log(data)
        ipAddress.value = data
      } catch (err) {
        console.error('IP获取失败:', err)
      }
    }

    const fetchAddress = async () => {
      try {
        const response = await fetch('/Address/api/getLocation');
        const data = await response.json(); // 正确等待解析完成

        // 现在可以访问 data 中的属性
        Address.value = data.data; // 获取 data 字段
        console.log('获取到的地址:', data.data);

        return data.data; // 返回 data 字段
      } catch (error) {
        console.error('获取地址失败:', error);
      }
    }
    const currentTime = ref(new Date())
    // 格式化时间为标准格式 YYYY-MM-DD HH:mm:ss[8](@ref)
    const formattedTime = computed(() => {
      const date = currentTime.value
      const year = date.getFullYear()
      const month = String(date.getMonth() + 1).padStart(2, '0') // 月份从0开始[8](@ref)
      const day = String(date.getDate()).padStart(2, '0')
      const hours = String(date.getHours()).padStart(2, '0')
      const minutes = String(date.getMinutes()).padStart(2, '0')
      const seconds = String(date.getSeconds()).padStart(2, '0')

      return `${year}年${month}月${day}日  ${hours}:${minutes}:${seconds}`
    })
    // 更新时间
    const updateTime = () => {
      currentTime.value = new Date()
    }
    let intervalId
    onMounted(() => {
      updateTime()
      fetchIP()
      fetchAddress()
      intervalId = setInterval(updateTime, 1000)
    })
    onUnmounted(() => {
      clearInterval(intervalId)
    })
    return {
      ipAddress,
      Address,
      formattedTime,
      SvgTypes,
      beianImg,
      avatarClass: computed(() => {
        return {
          'footer-avatar': true,
          [appStore.themeConfig.theme.profile_shape]: true
        }
      }),
      gradientText: computed(
        () => appStore.themeConfig.theme.background_gradient_style
      ),
      gradientBackground: computed(() => {
        return { background: appStore.themeConfig.theme.header_gradient_css }
      }),
      currentYear: computed(() => new Date().getUTCFullYear()),
      themeConfig: computed(() => appStore.themeConfig),
      configReady: computed(() => appStore.configReady),
      runningDays: computed(() => {
        if (appStore.themeConfig.site.started_date === '') return undefined
        return getDaysTillNow(`${appStore.themeConfig.site.started_date}`)
      }),
      intiCommentPluginPageView,
      enabledPlugin: computed(() => enabledCommentPlugin.value.plugin),
      t
    }
  }
})
</script>

<style lang="scss" scoped>
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
