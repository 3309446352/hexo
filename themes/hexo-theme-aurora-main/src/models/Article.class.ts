import { Post } from '@/models/Post.class'
import * as console from 'console'

export interface Detail {
  title: string // 标题
  date: { month: string; day: number; year: number } // 结构化日期
  updated: string // 更新时间
  comments: boolean // 是否开启评论
  path: string // 访问路径
  covers: string | null // 封面图片（可为空）
  excerpt: string | null // 摘要（可为空）
  content: string // 正文内容
  count_time: { symbolsTime?: string; symbolsCount?: number } // 字数统计
  toc: string // 文章目录
}

export interface Link {
  nick: string // 昵称/名称
  avatar: string // 头像
  link: string // 链接地址
  description: string // 描述
  label: string // 标签
}

export class Article extends Post implements Detail {
  title = ''
  date = {
    month: '',
    day: 0,
    year: 0
  }
  updated = ''
  comments = false
  path = ''
  covers: string | null = null
  excerpt: string | null = null
  content = ''
  count_time = { symbolsTime: undefined, symbolsCount: undefined }
  // 实现Detail接口要求的所有属性
  constructor(raw?: { [key: string]: [] }) {
    super(raw) // 调用Post父类的构造函数
    if (raw) {
      for (const key of ['covers', 'content']) {
        if (Object.prototype.hasOwnProperty.call(raw, key)) {
          Object.assign(this, { [key]: raw[key] })
        }
      }
    }
  }
}

export class Page<DataType = Link[] | Record<string, Link[]>>
  implements Detail
{
  title = ''
  uid = ''
  date = {
    month: '',
    day: 0,
    year: 0
  }
  updated = ''
  comments = true
  path = ''
  covers: string | null = null
  excerpt: string | null = null
  content = ''
  count_time = { symbolsTime: undefined, symbolsCount: undefined }
  toc = ''
  text = ''
  categoryMode = false
  avatarWall: Array<Link[]> = []
  data: DataType | undefined = undefined

  constructor(raw?: { [key: string]: string }) {
    if (raw) {
      for (const key of Object.keys(this)) {
        if (Object.prototype.hasOwnProperty.call(raw, key)) {
          if (key === 'date') {
            const m = new Date(raw[key] as string)

            const translateMonth = `settings.months[${m.getMonth()}]`

            raw[key] = Object.create({
              month: translateMonth,
              day: m.getUTCDate(),
              year: m.getUTCFullYear()
            })
          }
          Object.assign(this, { [key]: raw[key] })
        }
      }
    }
  }
}
