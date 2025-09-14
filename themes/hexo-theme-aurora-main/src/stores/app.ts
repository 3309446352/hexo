import { defineStore } from 'pinia'
import Cookies from 'js-cookie'
import i18n from '@/locales/index'
import { Locales, ThemeConfig } from '@/models/ThemeConfig.class'
import { HexoConfig } from '@/models/HexoConfig.class'
import { fetchHexoConfig, fetchStatistic } from '@/api'
import { Statistic } from '@/models/Statistic.class'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style

NProgress.configure({
  showSpinner: false,
  trickleSpeed: 100,
  parent: '#loading-bar-wrapper'
}) // NProgress Configuration

/** Fetching the default color-scheme from the OPSystem 从OPSystem获取默认配色方案*/
const getSystemMode = (): string => {
  // dark-mode media query matched or not
  const matched = window.matchMedia('(prefers-color-scheme: dark)').matches

  if (matched) return 'theme-dark'
  else return 'theme-light'
}

const setTheme = (theme: string) => {
  if (theme === 'theme-dark') {
    document.body.classList.remove('theme-light')
    document.body.classList.add('theme-dark')
  } else {
    document.body.classList.remove('theme-dark')
    document.body.classList.add('theme-light')
  }
}

/**
 * Storing the core data of the application 存储应用程序的核心数据
 */
export const useAppStore = defineStore('app', {
  // id is the name of the store
  // it is used in devtools and allows restoring state
  state: () => ({
    /** Current application theme mode `dark` or `light` */
    theme: Cookies.get('theme')
      ? String(Cookies.get('theme'))
      : getSystemMode(),
    /** Current locale of the application */
    locale: (Cookies.get('locale') as Locales) ?? 'en',
    /** Hexo theme config data 做主题配置数据*/
    themeConfig: new ThemeConfig(),
    /** Hexo engine's config data */
    hexoConfig: new HexoConfig(),
    /** HeaderGradient css property */
    headerGradient: '',
    /** Statistic data base on the blog posts and pages 博客文章和页面的统计数据库*/
    statistic: new Statistic(),
    /** Loading status of the App */
    appLoading: false,
    /** Nprogress's timeout timer id number */
    NPTimeout: -1,
    /** Loading status' timeout timer id number 跟踪博客配置是否就绪*/
    loadingTimeout: -1,
    /** Tracking if the blog config is ready 跟踪博客配置是否就绪*/
    configReady: false,
    /** Is search modal opened */
    openSearchModal: false
  }),
  getters: {
    getTheme: state => state.theme,
    getAppLoading: state => state.appLoading
  },
  actions: {
    /** Fetching Hexo and Hexo theme's config data */
    // TODO:获取Hexo和Hexo主题的配置数据
    async fetchConfig() {
      this.configReady = false
      const { data } = await fetchHexoConfig()
      this.themeConfig = new ThemeConfig(data)
      this.hexoConfig = new HexoConfig(data)
      this.setDefaultLocale(this.themeConfig.site.language)
      this.initializeTheme(this.themeConfig.theme.dark_mode)
      this.configReady = true
    },
    /** Fetching blog's statistics */
    // TODO:获取博客的统计数据
    async fetchStat() {
      const { data } = await fetchStatistic()
      return new Promise(resolve => {
        this.statistic = new Statistic(data)
        resolve(this.statistic)
      })
    },
    /** Initializing the theme mode of the app. */
    // TODO:初始化应用程序的主题模式。
    initializeTheme(isDarkMode?: boolean | string) {
      if (!Cookies.get('theme') && isDarkMode !== 'auto') {
        this.theme = isDarkMode ? 'theme-dark' : 'theme-light'
        Cookies.set('theme', this.theme)
        setTheme(this.theme)
      }
      setTheme(this.theme)
    },
    /** Switch between dark and light mode */
    // TODO:在黑暗和光模式之间切换
    toggleTheme(isDark?: boolean) {
      this.theme =
        isDark === true || this.theme === 'theme-light'
          ? 'theme-dark'
          : 'theme-light'
      Cookies.set('theme', this.theme)
      setTheme(this.theme)
    },
    /** Changing the local of the app 更改应用程序的本地*/
    /* TODO:更改应用程序的本地*/
    changeLocale(locale: Locales) {
      Cookies.set('locale', locale)
      this.locale = locale
      i18n.global.locale.value = locale
    },
    /**
     * Setting the default locale of the app base on _config
     * @remarks If the user had choose a locale before, this default value will be ignored.
     */
    setDefaultLocale(locale: Locales) {
      if (Cookies.get('locale')) return
      this.changeLocale(locale)
    },
    /** Start the global loading status of the application */
    // TODO;启动应用程序的全局加载状态
    startLoading() {
      if (this.appLoading === true) return
      if (this.NPTimeout !== -1) clearTimeout(this.NPTimeout)
      if (this.loadingTimeout !== -1) clearTimeout(this.loadingTimeout)

      NProgress.start()
      this.appLoading = true
    },
    /** Stops the global loading status of the application */
    // TODO:停止应用程序的全局加载状态
    endLoading() {
      // Leaving the timeout, so the animation have enough time to display
      // in a situation where data loads almost instantly.
      this.NPTimeout = window.setTimeout(() => {
        NProgress.done()
      }, 100)

      this.loadingTimeout = window.setTimeout(() => {
        this.appLoading = false
      }, 300)
    },
    changeOpenModal(status: boolean) {
      this.openSearchModal = status
    },
    //关闭搜索模态框。
    handleEscKey() {
      if (this.openSearchModal) this.openSearchModal = false
    },
    //打开搜索模态框。
    handleSearchOpen() {
      if (!this.openSearchModal) this.openSearchModal = true
    }
  }
})
