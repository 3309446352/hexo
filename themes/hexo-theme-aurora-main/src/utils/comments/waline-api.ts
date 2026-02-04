import {
  init, // 初始化 Waline
  pageviewCount, // 统计页面浏览量
  commentCount, // 统计评论数量
  RecentComments // 获取最近评论列表
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
} from 'https://unpkg.com/@waline/client@v2/dist/waline.mjs' // 从 CDN 引入 Waline 客户端
import { cleanPath, filterHTMLContent, formatTime } from '..'
import { Locales, PluginsData } from '@/models/ThemeConfig.class' // 类型定义

type WalinePlugin = PluginsData['waline']
interface WalineConfig extends WalinePlugin {
  lang: Locales
}

interface WalineComment {
  addr: string
  avatar: string
  browser: string
  comment: string
  insertedAt: string
  ip: string
  like: number
  link: string
  mail: string
  nick: string
  objectId: number
  origin: string
  os: string
  pid: string | null
  rid: string | null
  status: string
  sticky: boolean | null
  time: number
  url: string
  user_id: number | null
}

interface WalineInitOptions extends WalineConfig {
  el: string
  dark: string
  locale: string
}

//初始化 Waline
export const walineInit = ({
  serverURL,
  lang = 'en',
  reaction = false,
  login = 'disable',
  meta,
  requiredMeta,
  commentSorting,
  wordLimit,
  imageUploader,
  pageSize
}: Partial<WalineConfig>) => {
  let options: Partial<WalineInitOptions> = {
    el: '#waline',
    dark: 'body[class="theme-dark"]',
    reaction,
    serverURL,
    lang,
    login,
    locale: 'zh-CN',
    meta,
    requiredMeta,
    commentSorting,
    wordLimit,
    pageSize
  }

  if (imageUploader === false) options = { imageUploader, ...options }
  return init(options)
}

export const walinePageViewInit = (serverURL: string, path: string) => {
  pageviewCount({
    serverURL,
    path: cleanPath(path)
  })
}

//（2）页面浏览量统计
export const walineCommentViewInit = (serverURL: string, path: string) => {
  commentCount({
    serverURL,
    path: cleanPath(path)
  })
}

//（3）评论数量统计
export class WalineComments {
  configs: Partial<WalineConfig> = {
    serverURL: '',
    lang: 'en'
  }

  constructor({ serverURL, lang }: Partial<WalineConfig>) {
    this.configs.serverURL = serverURL
    this.configs.lang = lang
  }
  // 获取最近评论列表
  async getRecentComments(count: number) {
    const { serverURL } = this.configs
    const { comments }: { comments: WalineComment[] } = await RecentComments({
      serverURL,
      count
    })
    console.log('----------错误' + serverURL)
    return comments.map((comment: WalineComment) => this.mapComment(comment))
  }
  // 格式化评论数据
  mapComment(comment: WalineComment): RecentComments {
    // slice off the last 5 character to remove the timezone.
    const createdAt = formatTime(
      new Date(comment.time ?? comment.insertedAt).toISOString().slice(0, -5),
      {
        lang: this.configs.lang
      }
    )
    return {
      id: comment.objectId,
      body: filterHTMLContent(comment.comment),// 过滤 HTML 标签
      html_url: comment.url,
      issue_url: '',
      created_at: createdAt,// 格式化时间
      updated_at: '',
      author_association: '',
      user: {
        id: comment.user_id,
        login: comment.nick,
        avatar_url: comment.avatar,
        html_url: comment.link
      },
      is_admin: comment.user_id === 1 // 判断是否为管理员
    }
  }

  convertDateFormat(date: string) {
    const dateObj = date.split(' ')
    return `${dateObj[0]}T${dateObj[1]}`
  }
}
