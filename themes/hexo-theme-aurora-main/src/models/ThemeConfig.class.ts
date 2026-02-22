interface ThemeRaw {
  /** Hexo config data */
  theme_config: {
    menu: GeneralOptions // 菜单配置
    custom_menu: GeneralOptions // 自定义菜单
    avatar: GeneralOptions // 头像配置
    theme: GeneralOptions // 主题样式
    site: StringConfig // 网站信息
    socials: StringConfig // 社交媒体
    custom_socials: GeneralOptions // 自定义社交链接
    site_meta: GeneralOptions // 网站元数据
    plugins: GeneralOptions // 插件配置
    footer_links: FooterLink[] // 页脚链接
    version: string // 主题版本
  }
}

interface SwitchConfig {
  [key: string]: boolean // 开关配置（布尔值映射）
}

interface StringConfig {
  [key: string]: string // 字符串配置
}

interface GeneralOptions<T = any> {
  [key: string]: T // 通用配置选项
}

export class ThemeConfig {
  /** Menu config data */
  /** 菜单配置数据 */
  menu: ThemeMenu = new ThemeMenu()
  /** Avatar config data */
  /** 头像配置数据 */
  avatar: Avatar = new Avatar()
  /** Theme config data */
  /** 主题配置数据 */
  theme: Theme = new Theme()
  /** Site config data */
  /** 网站配置数据 */
  site: Site = new Site()
  /** Socials config data */
  /** 社交媒体配置数据 */
  socials: Social = new Social()
  /** Meta data for the site */
  /** 网站的元数据 */
  site_meta: SiteMeta = new SiteMeta()
  /** Plugin configs */
  /** 插件配置 */
  plugins: Plugins = new Plugins()
  /** Footer Links configs */
  /** 页脚链接配置 */
  footerLinks: FooterLinks = new FooterLinks()
  /** Theme version */
  /** 主题版本 */
  version = ''
  /**
   * Model class for Hexo theme config
   *
   * @param raw Config data generated from Hexo
   */
  /**
   * Hexo 主题配置的模型类
   *
   * @param raw 从 Hexo 生成的配置数据
   */
  constructor(raw?: ThemeRaw) {
    const rawConfig = raw && raw['theme_config']
    if (rawConfig) {
      // 初始化各个配置模块
      this.menu = new ThemeMenu(rawConfig.menu)
      this.avatar = new Avatar(rawConfig.avatar)
      this.theme = new Theme(rawConfig.theme)
      this.site = new Site(rawConfig.site)
      this.socials = new Social(rawConfig.socials)
      this.plugins = new Plugins(rawConfig)
      this.site_meta = new SiteMeta(rawConfig.site_meta)
      this.footerLinks = new FooterLinks(rawConfig.footer_links)
      this.version = rawConfig.version
    }
  }
}

interface ObMenu {
  menus: { [pathName: string]: Menu }
}

export class ThemeMenu implements ObMenu {
  menus: { [pathName: string]: Menu } = {
    Home: new Menu({
      name: 'Home',
      path: '/',
      i18n: {
        'zh-CN': '首页',
        'zh-TW': '首頁',
        en: 'Home'
      }
    })
  }

  /**
   * Model class for Hexo theme's menu set
   *
   * @param raw Config data generated from Hexo
   */
  constructor(raw?: GeneralOptions) {
    // 预定义默认菜单项
    const extract: GeneralOptions = {
      About: {
        name: 'About',
        path: '/about',
        i18n: {
          'zh-CN': '关于',
          'zh-TW': '關於',
          en: 'About'
        }
      },
      Archives: {
        name: 'Archives',
        path: '/archives',
        i18n: {
          'zh-CN': '归档',
          'zh-TW': '歸檔',
          en: 'Archives'
        }
      },
      Tags: {
        name: 'Tags',
        path: '/tags',
        i18n: {
          'zh-CN': '标签',
          'zh-TW': '標簽',
          en: 'Tags'
        }
      },
      Links: {
        name: 'Links',
        path: '/links',
        i18n: {
          'zh-CN': '友情链接',
          'zh-TW': '友情鏈接',
          en: 'Friend Links'
        }
      },
      bangumis: {
        name: 'bangumis',
        path: '/PagesBox/bangumis',
        i18n: {
          'zh-CN': '追番',
          'zh-TW': '追番',
          en: 'bangumis'
        }
      },
      QuotesCard: {
        name: 'QuotesCard',
        path: '/PagesBox/QuotesCard',
        i18n: {
          'zh-CN': '读书',
          'zh-TW': '讀書',
          en: 'QuotesCard'
        }
      },
      collect: {
        name: 'collect',
        path: '/PagesBox/collect',
        i18n: {
          'zh-CN': '收集',
          'zh-TW': '收集',
          en: 'collect'
        }
      },
      MusicGame: {
        name: 'MusicGame',
        path: '/PagesBox/MusicGame',
        i18n: {
          'zh-CN': '音乐室',
          'zh-TW': '音乐室',
          en: 'MusicGame'
        }
      },
      photos: {
        name: 'photos',
        path: '/photos',
        i18n: {
          'zh-CN': '照片',
          'zh-TW': '照片',
          en: 'photos'
        }
      },
      PageBox: {
        name: 'PageBox',
        path: '/PagesBox/pages',
        i18n: {
          'zh-CN': '页面',
          'zh-TW': '頁面',
          en: 'Pages'
        }
      }
    }

    const defaultMenus = Object.keys(extract)
    if (raw) {
      // 处理默认菜单和自定义菜单
      // Theme default menus
      for (const menu of defaultMenus) {
        const menuType = typeof raw[menu]
        if ((menuType === 'boolean' || menuType === 'object') && raw[menu]) {
          Object.assign(this.menus, { [menu]: new Menu(extract[menu]) })
        }
      }
      // Theme custom menus
      // 处理自定义菜单
      for (const otherMenu of Object.keys(raw)) {
        // Updating the i18n config from the menu config for default menus
        if (defaultMenus.indexOf(otherMenu) > 0 && raw[otherMenu].i18n) {
          Object.assign(this.menus[otherMenu].i18n, { ...raw[otherMenu].i18n })
        }

        if (defaultMenus.indexOf(otherMenu) < 0 && raw[otherMenu].name) {
          Object.assign(this.menus, {
            [otherMenu]: new Menu(raw[otherMenu])
          })
        }
      }
    }
  }
}

enum LocalesTypes {
  en,
  'zh-CN',
  'zh-TW'
}

export type Locales = keyof typeof LocalesTypes

export class Menu {
  /** Name of the menu */
  /** 菜单名称 */
  name = ''
  /** Vue router path for the menu */
  /** Vue 路由路径 */
  path = ''
  /** Translation key for vue-i18n */
  /** vue-i18n 的翻译键 */
  i18n: Partial<Record<Locales, string>> = {}
  /** Sub menus */
  /** 子菜单 */
  children: Menu[] = []

  /**
   * Model class for Hexo theme's menu
   *
   * @param raw Config data generated from Hexo
   */
  constructor(menu: { [key: string]: any }) {
    this.name = menu.name
    this.path = menu.path ? menu.path : null
    this.i18n = menu.i18n ? menu.i18n : {}
    this.children = menu.children
      ? Object.keys(menu.children).map(
          (key: string) => new Menu(menu.children[key])
        )
      : []
  }
}

export class Avatar {
  source_path = ''

  /**
   * Model class for Avatar data
   *
   * @param raw - Config data generated from Hexo
   */
  constructor(raw?: SwitchConfig) {
    if (raw) {
      for (const key of Object.keys(this)) {
        if (Object.prototype.hasOwnProperty.call(raw, key)) {
          Object.assign(this, { [key]: raw[key] })
        }
      }
    }
  }
}

interface ObTheme {
  /**
   * Theme mode
   *
   * @remarks `dark` mode or `light` mode
   * */
  dark_mode: boolean | string
  profile_shape: string
  /**
   * Theme main set of gradient colors
   *
   * @remarks Consist of 3 colors
   */
  gradient: {
    color_1: string
    color_2: string
    color_3: string
  }
  /** Css gradient style property used for the header */
  header_gradient_css: string
  /** Css gradient style property used for any background */
  background_gradient_style: {
    background: string
    '-webkit-background-clip': string
    '-webkit-text-fill-color': string
    'box-decoration-break': string
  }
}

export class Theme implements ObTheme {
  dark_mode = 'auto' // TODO:暗黑模式：'auto'、'dark'、'light'
  profile_shape = 'diamond' // TODO:头像形状：圆形、菱形、圆角
  feature = true // TODO:是否启用特色功能
  gradient = {
    // TODO: 渐变颜色配置
    color_1: '#24c6dc',
    color_2: '#5433ff',
    color_3: '#ff0099'
  }
  header_gradient_css =
    'linear-gradient(130deg, #24c6dc, #5433ff 41.07%, #ff0099 76.05%)'
  background_gradient_style = {
    background:
      'linear-gradient(130deg, #24c6dc, #5433ff 41.07%, #ff0099 76.05%)',
    '-webkit-background-clip': 'text',
    '-webkit-text-fill-color': 'transparent',
    '-webkit-box-decoration-break': 'clone',
    'box-decoration-break': 'clone'
  }

  /**
   * Model class for Avatar data
   *
   * @param raw - Config data generated from Hexo
   */
  constructor(raw?: GeneralOptions) {
    if (raw) {
      // TODO:处理头像形状转换
      for (const key of Object.keys(this)) {
        if (Object.prototype.hasOwnProperty.call(raw, key)) {
          if (key === 'profile_shape') {
            const allowedShapes = ['circle', 'diamond', 'rounded']
            const convertedClasses = [
              'circle-avatar',
              'diamond-avatar',
              'rounded-avatar'
            ]
            const shadeIndex = allowedShapes.indexOf(raw[key])
            if (shadeIndex < 0) raw[key] = convertedClasses[1]
            else raw[key] = convertedClasses[shadeIndex]
          }

          Object.assign(this, { [key]: raw[key] })

          if (key === 'gradient') {
            const headerGradientCss = `linear-gradient(130deg, ${this.gradient.color_1}, ${this.gradient.color_2} 41.07%, ${this.gradient.color_3} 76.05%)`
            Object.assign(this, {
              header_gradient_css: headerGradientCss
            })
            Object.assign(this, {
              background_gradient_style: {
                background: headerGradientCss,
                '-webkit-background-clip': 'text',
                '-webkit-text-fill-color': 'transparent',
                '-webkit-box-decoration-break': 'clone',
                'box-decoration-break': 'clone'
              }
            })
          }
        }
      }
    }
  }
}

export class Social {
  github = ''
  twitter = ''
  stackoverflow = ''
  wechat = ''
  qq = ''
  weibo = ''
  csdn = ''
  juejin = ''
  zhihu = ''
  customs: CustomSocials = new CustomSocials()

  /**
   * Model class for Social media links
   *
   * @param raw - Config data generated from Hexo
   */
  constructor(raw?: GeneralOptions) {
    if (raw) {
      for (const key of Object.keys(this)) {
        if (Object.prototype.hasOwnProperty.call(raw, key)) {
          if (key === 'customs') {
            Object.assign(this.customs, new CustomSocials(raw[key]))
          } else {
            Object.assign(this, { [key]: raw[key] })
          }
        }
      }
    }
  }
}

export class CustomSocial {
  icon = {
    iconfont: '',
    img_link: ''
  }
  link = ''

  constructor(raw?: GeneralOptions) {
    if (raw) {
      for (const key of Object.keys(this)) {
        if (Object.prototype.hasOwnProperty.call(raw, key)) {
          if (key === 'icon') {
            if (
              String(raw[key]).match(
                /([a-zA-Z0-9\s_\\.\-():])+(.svg|.png|.jpg)$/g
              )
            ) {
              Object.assign(this.icon, { img_link: raw[key] })
            } else {
              Object.assign(this.icon, { iconfont: raw[key] })
            }
          } else {
            Object.assign(this, { [key]: raw[key] })
          }
        }
      }
    }
  }
}

export class CustomSocials {
  socials: CustomSocial[] = []

  /**
   * Model class for Social media links
   *
   * @param raw - Config data generated from Hexo
   */
  constructor(raw?: { [key: string]: any }) {
    if (raw) {
      Object.assign(
        this.socials,
        Object.keys(raw).map((key: string) => new CustomSocial(raw[key]))
      )
    }
  }
}

export class Site {
  /** Website subtitle (used after `-`) */
  subtitle = ''
  /** Slog use in the title */
  slogan = ''
  /** Author of the blog website */
  author = ''
  /** Author's nick name */
  nick = ''
  /** Website description (used in the header meta tag) */
  description = ''
  /** Blog's default language */
  language: Locales = 'en'
  /** Allow use to change blog's locale */
  multi_language = true
  /** Site logo or brand logo */
  logo = ''
  /** Author avatar */
  avatar = ''
  /** China server beian info */
  beian = {
    number: '',
    link: ''
  }
  /** China server police beian info */
  police_beian = {
    number: '',
    link: ''
  }
  // Start date when the blog first started running
  started_date = ''

  /**
   * Model class for Site general settings
   *
   * @param raw - Config data generated from Hexo
   */
  constructor(raw?: GeneralOptions) {
    if (raw) {
      for (const key of Object.keys(this)) {
        if (Object.prototype.hasOwnProperty.call(raw, key)) {
          Object.assign(this, { [key]: raw[key] })
        }
      }
    }
  }
}

export class SiteMeta {
  cdn: {
    locale: string
    prismjs: string[]
  } = {
    locale: 'en',
    prismjs: []
  }
  favicon = ''

  /**
   * Model class for Site meta settings
   *
   * @param raw - Config data generated from Hexo
   */
  constructor(raw?: GeneralOptions) {
    if (raw) {
      for (const key of Object.keys(this)) {
        if (Object.prototype.hasOwnProperty.call(raw, key)) {
          Object.assign(this, { [key]: raw[key] })
        }
      }
    }
  }
}

type MetaAttributes = 'nick' | 'mail' | 'link'

export interface PluginsData {
  gitalk: {
    enable: boolean
    autoExpand: boolean
    clientID: string
    clientSecret: string
    repo: string
    owner: string
    admin: Array<string>
    id: string
    language: string
    distractionFreeMode: boolean
    recentComment: boolean
    proxy: string
  }

  valine: {
    enable: boolean
    app_id: string
    app_key: string
    avatar: string
    placeholder: string
    visitor: boolean
    lang: string
    meta: MetaAttributes[]
    admin: string
    recentComment: boolean
  }

  twikoo: {
    enable: boolean
    envId: string
    recentComment: boolean
    region?: string
    lang: string
  }

  waline: {
    enable: boolean
    recentComment: boolean
    serverURL: string
    reaction: boolean
    login: string
    meta: string[] | never[]
    requiredMeta: string[] | never[]
    imageUploader?: boolean
    wordLimit: number | number[]
    pageSize: number
    commentSorting: string
  }

  recent_comments: boolean

  busuanzi: {
    enable: boolean
  }

  copy_protection: {
    enable: boolean
    author: {
      cn: string
      en: string
    }
    link: {
      cn: string
      en: string
    }
    license: {
      cn: string
      en: string
    }
  }

  aurora_bot: {
    enable: boolean
    locale: string
    bot_type: string
    tips: { [key: string]: { selector: string; text: string | string[] } }
  }
}

export class Plugins implements PluginsData {
  gitalk = {
    enable: false,
    autoExpand: true,
    clientID: '',
    clientSecret: '',
    repo: 'blog-comments',
    owner: 'TriDiamond',
    admin: ['TriDiamond'],
    id: 'location.pathname',
    language: 'en',
    distractionFreeMode: false,
    recentComment: false,
    proxy: ''
  }
  valine = {
    enable: false,
    app_id: '',
    app_key: '',
    avatar: 'mp',
    placeholder: 'Leave your thoughts behind~',
    visitor: true,
    lang: '',
    meta: [],
    requiredFields: [],
    avatarForce: false,
    admin: '',
    recentComment: false
  }
  twikoo = {
    enable: false,
    envId: '',
    region: undefined,
    recentComment: false,
    lang: ''
  }
  waline = {
    enable: false,
    recentComment: false,
    serverURL: '',
    reaction: false,
    login: 'disable',
    meta: [],
    requiredMeta: [],
    imageUploader: false,
    wordLimit: 0,
    pageSize: 10,
    commentSorting: 'latest'
  }
  recent_comments = false
  busuanzi = {
    enable: true
  }
  copy_protection = {
    enable: true,
    author: {
      cn: '',
      en: ''
    },
    link: {
      cn: '',
      en: ''
    },
    license: {
      cn: '',
      en: ''
    }
  }
  aurora_bot = {
    enable: false,
    locale: 'en',
    bot_type: 'dia',
    tips: {}
  }

  /**
   * Model class for Site meta settings
   *
   * @param raw - Config data generated from Hexo
   */
  constructor(raw?: GeneralOptions) {
    if (raw) {
      for (const key of Object.keys(this)) {
        if (Object.prototype.hasOwnProperty.call(raw, key)) {
          Object.assign(this, { [key]: raw[key] })
        }
      }
    }
  }
}

export interface FooterLink {
  title: string
  links: {
    title: string
    url: string
  }[]
  mode?: 'links'
}

export class FooterLinks {
  data: FooterLink[] = []

  /**
   * Model class for Site meta settings
   *
   * @param raw - Config data generated from Hexo
   */
  constructor(raw?: FooterLink[]) {
    if (raw) {
      Object.assign(this.data, raw)
    }
  }
}
