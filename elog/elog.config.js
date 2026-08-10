const path = require('path');

module.exports = {
  write: {
    platform: 'notion',
    notion: {
      token: process.env.NOTION_TOKEN,
      databaseId: process.env.NOTION_DATABASE_ID,
      filter: { property: 'status', select: { equals: '已发布' }}
    }
  },
  deploy: {
    platform: 'local',
    local: {
      outputDir: './source/_posts',
      filename: 'title',
      format: 'markdown',
      catalog: false,
      frontMatter: {
        enable: true,
        include: ['categories', 'tags', 'title', 'date', 'updated', 'permalink', 'cover', 'description'],
        timeFormat: true
      },
      // formatExt: path.resolve(__dirname, './format-image.js')
    }
  },
  image: {
    enable: true,
    platform: 'github',
    github: {
      token: process.env.IMAGES_TOKEN,
      user: process.env.IMAGES_USER,
      repo: process.env.IMAGES_REPO,
      branch: process.env.IMAGES_BRANCH,
      host: 'cdn.jsdelivr.net',
      prefixKey: 'Content/'
    }
  }
};
