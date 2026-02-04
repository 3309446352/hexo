module.exports = {
  write: {
    // 内容写入配置（从 Notion 同步到本地）
    platform: 'notion',
    notion: {
      token: process.env.NOTION_TOKEN, // Notion 认证 Token（从环境变量读取）
      databaseId: process.env.NOTION_DATABASE_ID, // Notion 数据库 ID
      filter: { property: 'status', select: { equals: '已发布' }} // 仅同步状态为 "已发布" 的页面
    }
  },
   // 部署配置（将本地文件发布到目标位置）
  deploy: {
    platform: 'local',
    local: {
       outputDir: './source/_posts',  // 输出目录（Hexo 默认文章目录）
      filename: 'title',           // 文件名规则：使用页面标题
      format: 'markdown',          // 导出格式：Markdown
      catalog: false,              // 是否生成目录（默认关闭）
      frontMatter: {               // 前置元数据（Front Matter）配置
        enable: true,
        include: ['categories', 'tags', 'title', 'date', 'updated', 'permalink', 'cover', 'description'],
        timeFormat: true           // 时间格式化（使用 Hexo 时间格式）
      },
      formatExt: './format-image.js'  // 图片路径处理脚本
    }
  },
  image: {// 图片处理配置
    enable: true,
    platform: 'local',
    local: {
      outputDir: './source/images',  // 图片输出目录
      prefixKey: '/images'           // 图片 URL 前缀
    }
  }
};
