<template>
  <div class="sidebar-box">
    <div class="hexo_electric_clock">
      <div data-v-606974fb="" class="clock-row">
        <span class="card-clock-clockdate">{{ formattedTime.date }} THU</span>
        <span class="card-clock-weather">
          <i class="qi-502-fill" style="color: rgb(151, 172, 186);"></i> 霾 <span class="temp">2</span> ℃
        </span>
      </div>
      <div class="clock-row">
        <span class="card-clock-time">{{ formattedTime.time }}</span>
      </div>
      <div class="clock-row">
        <span class="card-clock-windDir">
          <i class="qi-wind" style="transform: rotate(22deg); display: inline-block"></i>
          东北风</span
        ><span class="card-clock-location">中原</span
        ><span class="card-clock-dackorlight"> P M</span>
      </div>
    </div>
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
    const currentTime = ref(new Date())
    let animationFrameId: number = null
    // 格式化时间为标准格式 YYYY-MM-DD HH:mm:ss[8](@ref)
    //这是一个 计算属性，它会根据 currentTime.value的变化自动重新计算格式化后的时间字符串。
    const formattedTime = computed(() => {
      const date = currentTime.value
      const year = date.getFullYear()
      const month = String(date.getMonth() + 1).padStart(2, '0') // 月份从0开始[8](@ref)
      const day = String(date.getDate()).padStart(2, '0')
      const hours = String(date.getHours()).padStart(2, '0')
      const minutes = String(date.getMinutes()).padStart(2, '0')
      const seconds = String(date.getSeconds()).padStart(2, '0')
      //使用String().padStart(2, '0')确保每个部分都是两位数，不足两位在前面补0。
      return {
        date: `${year}-${month}-${day}`, // 年月日部分
        time: `${hours}:${minutes}:${seconds}` // 时分秒部分
      }
    })
    // 更新时间
    const updateTime = () => {
      currentTime.value = new Date()

      // 继续下一帧
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId)
      }

      animationFrameId = requestAnimationFrame(() => {
        // 每秒更新一次（1000ms）
        setTimeout(updateTime, 1000)
      })
    }
    onMounted(() => {
      updateTime()
      // 继续下一帧
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId)
      }

      animationFrameId = requestAnimationFrame(() => {
        // 每秒更新一次（1000ms）
        setTimeout(updateTime, 1000)
      })
    })
    onUnmounted(() => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId)
      }
    })
    return {
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
  --tw-shadow:
    0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  box-shadow:
    var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000),
    var(--tw-shadow);
  width: 100%;
}
.hexo_electric_clock{
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px;
}
.clock-row{
  color: #000;
  display: flex;
  flex-wrap: nowrap;
  font-family: sans-serif;
  font-weight: 400;
  justify-content: space-between;
  white-space: nowrap;
  color: var(--text-bright);
}
.card-clock-time {
  flex: 1;
  font-family: serif;
  font-size: 38px;
  line-height: 1.5;
  text-align: center;
}
</style>
