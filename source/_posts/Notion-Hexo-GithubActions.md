---
abbrlink: ''
abstracts: abstracts
author: ZMC
categories:
- - Hexo
cover: https://raw.githubusercontent.com/3309446352/Images/main/img/702ea068d3e0741d38b1535b68ae83f6ec4ac8c30dd2b10aa50468b17875facd.webp
date: '2026-02-14T20:45:09.915070+08:00'
description: '**通过这个设置，可以实现在Notion写文章，**[Githubactions](https://zhida.zhihu.com/search?content_id=260364529%5C&content_type=Article%5C&match_order=1%5C&q=Githubactions%5C&zd_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJ6aGlkYV9zZXJ2ZXIiLCJleHAiOjE3NzEyMjk4NTAsInEiOiJHaXRodWJhY3Rpb25zIiwiemhpZGFfc291cmNlIjoiZW50aXR5IiwiY29udGVudF9pZCI6MjYwMzY0NTI5LCJjb250ZW50X3R5cGUiOiJBcnRpY2xlIiwibWF0Y2hfb3JkZXIiOjEsInpkX3Rva2VuIjpudWxsfQ.VSrYHVwsGt4jj8hwPd9V29CN3ekKCe8Jd5uUFPIsRVE%5C&zhida_source=entity)抓取Notion的文章，然后发布到对应的Hexo博客上，可以让Notion充当Hexo博客的后台，随时随地用手机或者电脑通过Notion写博客跟管理博客文章了'
tags: []
title: Notion-Hexo-GithubActions
updated: '2026-02-14T20:49:22.596+08:00'
---
#  {{title}}

## 简介 : {{description}}

**原文链接：**[https://www.kulafan.com/d9af86de/](https://link.zhihu.com/?target=https%3A//www.kulafan.com/d9af86de/)

**通过这个设置，可以实现在Notion写文章，**[Githubactions](https://zhida.zhihu.com/search?content_id=260364529%5C&content_type=Article%5C&match_order=1%5C&q=Githubactions%5C&zd_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJ6aGlkYV9zZXJ2ZXIiLCJleHAiOjE3NzEyMjk4NTAsInEiOiJHaXRodWJhY3Rpb25zIiwiemhpZGFfc291cmNlIjoiZW50aXR5IiwiY29udGVudF9pZCI6MjYwMzY0NTI5LCJjb250ZW50X3R5cGUiOiJBcnRpY2xlIiwibWF0Y2hfb3JkZXIiOjEsInpkX3Rva2VuIjpudWxsfQ.VSrYHVwsGt4jj8hwPd9V29CN3ekKCe8Jd5uUFPIsRVE%5C&zhida_source=entity)抓取Notion的文章，然后发布到对应的Hexo博客上，可以让Notion充当Hexo博客的后台，随时随地用手机或者电脑通过Notion写博客跟管理博客文章了。

**之前在网络上看到过有语雀的实现方法：**[小白搭建Hexo博客(语雀端写作)详细教程](https://zhuanlan.zhihu.com/p/577256660)，但是语雀的后台api好像开始收费了，遂寻其他免费的解决方法，就把目光锁定在Notion上。

## **一、Notion上的设置**

## **1.注册notion的 [integrations](https://zhida.zhihu.com/search?content_id=260364529%5C&content_type=Article%5C&match_order=1%5C&q=integrations%5C&zd_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJ6aGlkYV9zZXJ2ZXIiLCJleHAiOjE3NzEyMjk4NTAsInEiOiJpbnRlZ3JhdGlvbnMiLCJ6aGlkYV9zb3VyY2UiOiJlbnRpdHkiLCJjb250ZW50X2lkIjoyNjAzNjQ1MjksImNvbnRlbnRfdHlwZSI6IkFydGljbGUiLCJtYXRjaF9vcmRlciI6MSwiemRfdG9rZW4iOm51bGx9.5xrYTdJyN3_RTWAyTZHiKQcyCLyGH9IiyVBYfHJ3GXc%5C&zhida_source=entity)**

**注册完之后进入设置 把 ntn**\_**开头的这段复制下来 这是NOTION**\_**TOKEN**

## **2.设置notion的数据库**

**数据库的表上设置以下项目 左边是名称 右边是类型**


|                |                  |
| -------------- | ---------------- |
| **title**      | **text**         |
| **date**       | **date**         |
| **tags**       | **multi select** |
| **categories** | **select**       |
| **publised**   | **select**       |

![](https://raw.githubusercontent.com/3309446352/Images/main/Content/v2-284e958853906f3ff22d36e27876f37d_1440w.jpg?lastModify=1771073127)

**设置完之后就是上面这样。**

**接下来 进入到这个表格（数据库）里点击右上角三个点 connect到刚刚设置的hexo integrations**

**在右上角share里确保页面都是公开的，然后把链接复制下来**

[The AI workspace that works for you. | Notion](https://link.zhihu.com/?target=https%3A//shelled-lycra-402.notion.site/205dec0a530780ceb816f49ea993f628%3Fv%3D205dec0a5307805bba60000c35598268%26source%3Dcopy_link)

**第一个就是数据库id 把数据库ID复制下来（这里很容易搞错）是32位的**

**205dec0xxxxxxx**

**到这里我们获取到两个东西**

**1.NOTION**\_**TOKEN: ntn**\_**xxxxxxx**

**2.DATABASE**\_**ID:205decxxxxxx**

## **3.写文章**

**在这个数据库下面新建一列 按照对应的输入文章标题、日期、分类等等。然后title下面文章的名字点进去，就可以编辑里面的内容了，编辑完之后点publised下面的复选框，变成勾之后就可以被抓取了。**

![](https://raw.githubusercontent.com/3309446352/Images/main/Content//v2-8fe8726e5db9eef2d1208e4e4c87e5b6_1440w.jpg?lastModify=1771073127)

## **二、接下来就是hexo目录下的的设置**

## **1.新建sync.js文件夹到hexo根目录下**

```
 const { Client } = require('@notionhq/client');
 const fs = require('fs');
 const path = require('path');
 const https = require('https');
 const { mkdirp } = require('mkdirp');
 
 // 用于生成安全文件名的辅助函数
 function generateSafeFileName(name) {
   return name.replace(/[^a-zA-Z0-9\u4e00-\u9fa5._-]/g, '-');
 }
 
 // 格式化日期为 YYYY-MM-DD 格式
 function formatDate(date) {
   const year = date.getFullYear();
   const month = String(date.getMonth() + 1).padStart(2, '0');
   const day = String(date.getDate()).padStart(2, '0');
   return `${year}-${month}-${day}`;
 }
 
 const notion = new Client({
   auth: process.env.NOTION_TOKEN,
   notionVersion: '2022-06-28'
 });
 
 // 记录每篇文章的图片序号
 const imageCounter = new Map();
 
 async function syncNotionToHexo() {
   try {
     // 1. 获取文章列表
     const response = await notion.databases.query({
       database_id: process.env.NOTION_DATABASE_ID,
       filter: {
         property: 'Published',
         checkbox: {
           equals: true
         }
       }
     });
 
     if (!response.results || response.results.length === 0) {
       console.log('没有找到已发布的文章');
       return;
     }
 
     // 2. 处理每篇文章
     for (const post of response.results) {
       try {
         const title = post.properties.Title?.title[0]?.plain_text || 'Untitled';
         const dateObj = post.properties.Date?.date?.start 
           ? new Date(post.properties.Date.date.start) 
           : new Date();
         
         const formattedDate = formatDate(dateObj);
         const dateString = dateObj.toLocaleString('sv-SE', { timeZone: 'Asia/Shanghai' }).replace(' ', 'T');
 
         
         // 提取Tags和Categories
         const tags = extractTags(post);
         const categories = extractCategories(post);
         
         const safeTitle = generateSafeFileName(title);
         const fileName = `${formattedDate}-${safeTitle}.md`;
         const postDirName = `${formattedDate}-${safeTitle}`;
         const postDir = path.join('source/_posts', postDirName);
         const filePath = path.join('source/_posts', fileName);
         
         imageCounter.set(post.id, 1);
         await mkdirp(postDir);
 
         // 获取文章内容块
         const blocks = await notion.blocks.children.list({
           block_id: post.id
         });
 
         // 生成Markdown头部
         let content = `---
 title: "${title}"
 date: ${dateString}
 tags: ${formatTagsOrCategories(tags)}
 categories: ${formatTagsOrCategories(categories)}
 ---\n\n`;
 
         // 处理所有块
         for (const block of blocks.results) {
           if (block.type === 'paragraph') {
             content += block.paragraph.rich_text.map(t => t.plain_text).join('') + '\n\n';
           } else if (block.type === 'heading_1') {
             content += `# ${block.heading_1.rich_text.map(t => t.plain_text).join('')}\n\n`;
           } else if (block.type === 'heading_2') {
             content += `## ${block.heading_2.rich_text.map(t => t.plain_text).join('')}\n\n`;
           } else if (block.type === 'heading_3') {
             content += `### ${block.heading_3.rich_text.map(t => t.plain_text).join('')}\n\n`;
           } else if (block.type === 'bulleted_list_item') {
             content += `- ${block.bulleted_list_item.rich_text.map(t => t.plain_text).join('')}\n`;
           } else if (block.type === 'numbered_list_item') {
             content += `1. ${block.numbered_list_item.rich_text.map(t => t.plain_text).join('')}\n`;
           } else if (block.type === 'image') {
             // 处理图片
                       const imageUrl = getImageUrl(block);
                       if (imageUrl) {
                         const imageNum = imageCounter.get(post.id);
                         imageCounter.set(post.id, imageNum + 1);
                 
                         const ext = path.extname(imageUrl.split('?')[0]) || '.jpg';
                         const imageName = `img${formattedDate}-${imageNum.toString().padStart(3, '0')}${ext}`;
                 
                         await downloadImage(imageUrl, postDir, imageName);
                 
                         // 合并所有 caption 文本
                         const captionText = (block.image.caption || [])
                           .map(t => t.plain_text)
                           .join('');
                 
                         let customStyle = '';
                 
                         const sizeMatch = captionText.match(/size\s*=\s*(\d+)%/i);
                         if (sizeMatch) {
                           customStyle += `width: ${sizeMatch[1]}%; height: auto;`;
                         } else {
                           customStyle += `max-width: 100%; height: auto;`;
                         }
                 
                         if (/center/i.test(captionText)) {
                           customStyle += ` display: block; margin: 1rem auto;`;
                         } else if (/left/i.test(captionText)) {
                           customStyle += ` display: block; margin: 1rem 0 1rem 0;`;
                         } else if (/right/i.test(captionText)) {
                           customStyle += ` display: block; margin: 1rem 0 1rem auto;`;
                         } else {
                           customStyle += ` display: block; margin: 1rem auto;`;
                         }
                 
                         content += `<img src="${postDirName}/${imageName}" alt="${imageName}" style="${customStyle}" />\n\n`;
                       }
                     }
 
 
 
 
           // 代码块处理
           else if (block.type === 'code') {
             const codeBlock = block.code;
             const language = codeBlock.language || '';
             const codeContent = codeBlock.rich_text.map(t => t.plain_text).join('');
             content += `\`\`\`${language}\n${codeContent}\n\`\`\`\n\n`;
           }
           // 可继续添加更多块类型的处理
         }
 
         // 写入Markdown文件
         fs.writeFileSync(filePath, content, 'utf8');
         console.log(`成功生成: ${fileName} (目录: ${postDirName})`);
         
       } catch (error) {
         console.error(`处理文章时出错: ${error.message}`);
       }
     }
   } catch (error) {
     console.error(`同步失败: ${error.message}`);
     process.exit(1);
   }
 }
 
 // 获取图片URL
 function getImageUrl(block) {
   if (!block.image) return null;
   
   if (block.image.type === 'external') {
     return block.image.external.url;
   } else if (block.image.type === 'file') {
     return block.image.file.url;
   }
   
   return null;
 }
 
 // 下载图片到指定目录
 async function downloadImage(url, dir, fileName) {
   return new Promise((resolve, reject) => {
     const filePath = path.join(dir, fileName);
     const file = fs.createWriteStream(filePath);
     
     https.get(url, response => {
       if (response.statusCode !== 200) {
         reject(new Error(`下载图片失败，状态码: ${response.statusCode}`));
         return;
       }
       
       response.pipe(file);
       
       file.on('finish', () => {
         file.close();
         resolve(fileName);
       });
     }).on('error', error => {
       fs.unlink(filePath, () => {});
       reject(error);
     });
   });
 }
 
 // 提取Tags的辅助函数
 function extractTags(post) {
   const tagProperty = post.properties.Tags;
   if (!tagProperty || tagProperty.type !== 'multi_select') {
     return [];
   }
   return tagProperty.multi_select.map(option => option.name);
 }
 
 // 提取Categories的辅助函数
 function extractCategories(post) {
   const categoryProperty = post.properties.Categories;
   if (!categoryProperty || categoryProperty.type !== 'select') {
     return [];
   }
   return categoryProperty.select ? [categoryProperty.select.name] : [];
 }
 
 // 格式化Tags或Categories为YAML数组格式
 function formatTagsOrCategories(items) {
   if (!items || items.length === 0) {
     return '[]';
   }
   if (items.length === 1) {
     return `[${items[0]}]`;
   }
   return '[' + items.map(item => `"${item}"`).join(', ') + ']';
 }
 
 // 获取图片在Notion中的显示尺寸（基于block_width属性）
 function getImageDisplaySize(block) {
   if (!block.image || !block.format) return null;
   
   // block.format.block_width 表示图片容器宽度占页面宽度的比例
   // 常见值：1（全宽）、0.6（中等）、0.3（小）
   const widthRatio = block.format?.block_width;
   
   if (widthRatio) {
     // 根据你的Hexo主题页面宽度调整这个值
     const baseWidth = 800; 
     return {
       width: Math.round(baseWidth * widthRatio),
       // 不设置高度，让浏览器自动按比例缩放
     };
   }
   
   return null;
 }
 
 // 执行同步
 syncNotionToHexo();
```

**把这个方到博客的目录下。**

## **2.然后新建一个.[env文件](https://zhida.zhihu.com/search?content_id=260364529\&content_type=Article\&match_order=1\&q=env%E6%96%87%E4%BB%B6\&zd_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJ6aGlkYV9zZXJ2ZXIiLCJleHAiOjE3NzEyMjk4NTAsInEiOiJlbnbmlofku7YiLCJ6aGlkYV9zb3VyY2UiOiJlbnRpdHkiLCJjb250ZW50X2lkIjoyNjAzNjQ1MjksImNvbnRlbnRfdHlwZSI6IkFydGljbGUiLCJtYXRjaF9vcmRlciI6MSwiemRfdG9rZW4iOm51bGx9.CelAvA_aU8gmsz_gzlZojWEhWPe7N_RB_KyfNID0IVg\&zhida_source=entity)**

```
 NOTION_TOKEN=ntn_xxxx 替换成你的TOKEN
 NOTION_DATABASE_ID=205dxxxxxxxx 替换成你的数据库ID
 POST_PATH=source/_posts
```

**然后在目录下执行**

```
 # 设置 Token 和数据库 ID
 export NOTION_TOKEN=ntn_xxxx
 export NOTION_DATABASE_ID=xxxxx
 
 # 运行脚本
 node sync.js
```

**就能看到从ntoion拉取的文章了，到这里.js就配置完成了**

**我这个.js的逻辑是 把文章拉取下来之后 会把文章的图片放到同名文件夹下。**

```
 /hello_world.md
 /hello_world/img1.jpg
```

## **三、Github action设置**

## **1.在.github/worlkflows/新建文件.sync.yml**

```
 name: "Notion to Hexo Sync"
 
 on:
   schedule:
     - cron: "0 * * * *"  # 每小时运行
   workflow_dispatch:     # 允许手动触发
 
 jobs:
   deploy:
     runs-on: ubuntu-latest
     steps:
       # 步骤1：检出代码
       - name: Checkout
         uses: actions/checkout@v3
         with:
           ref: "main"  # 你的源码分支
 
       # 步骤2：设置Node.js
       - name: Setup Node
         uses: actions/setup-node@v3
         with:
           node-version: "18"
 
       # 步骤3：安装依赖
       - name: Install Dependencies
         run: |
           npm install -g hexo-cli
           npm install
           npm install @notionhq/client
           npm install mkdirp
 
       # 步骤4：同步Notion
       - name: Sync from Notion
         run: node sync.js
         env:
           NOTION_TOKEN: ${{ secrets.NOTION_TOKEN }}
           NOTION_DATABASE_ID: ${{ secrets.NOTION_DATABASE_ID }}
 
       # 步骤5：生成静态文件
       - name: Generate Site
         run: |
           hexo clean
           hexo generate
 
           
       # 步骤6：部署到GitHub Pages
       - name: Deploy to Pages
         uses: peaceiris/actions-gh-pages@v3
         with:
           github_token: ${{ secrets.GITHUB_TOKEN }}
           publish_dir: ./public
           publish_branch: pages  # 你的发布分支
```

**这里你需要确认仓库的分支，和发布的分支名字。**

**如果运行不成功的话 你可以直接从github网页端新建这个文件，把代码复制进去避免编码错误。**

## **2.depoly设置**

### **1.depoly涉及很多情况**

1. **在同一个仓库的不同分支，例如main分支用来存放源码，pages分支用来发布页面，这样的话就是用原来代码 配合GITHUB**\_**TOKEN来发布。**
2. **源码和页面在两个不同的仓库，在hexo仓库存放源码，然后在另外一个仓库 **[http://xxx.github.io](https://link.zhihu.com/?target=http%3A//xxx.github.io)上发布我的页面，这样就适合直接用ssh来发布。

**无论什么情况 你只需要把action的配置代码 sync.yml 复制给ai 把你的情况描述，跟着做就会成功的。**

### **2.配置新的sshkey**

**ssh的配置hexo博客的时候都已经使用过了，而且涉及我自己的key所以就不放出来了，我遇到的坑就是ssh是已经使用过的 所以需要重新配置一个ssh**

```
 ssh-keygen -t ed25519 -C "your_email@example.com" -f github-deploy-key-new
```

1. **将新公钥添加到目标仓库：**
2. **将新私钥添加到源仓库的 Secrets：\\** **3.根据你生成 SSH 密钥时的输出，公钥和私钥已分别保存到以下文件中：**

* **私钥：github-deploy-key-new（此文件包含你的私人密钥，请勿分享）**
* **公钥：github-deploy-key-new**.**pub（此文件包含你的公共密钥，可以安全地分享）**

### **4.如何找到这些文件**

**在命令行中查看**

**如果你是在 Linux、macOS 或 Windows 的 WSL 环境中生成的密钥，可以使用以下命令查看：**

```
 # 查看私钥（注意：不要将此内容分享给他人）
 cat github-deploy-key-new
 
 # 查看公钥（可以安全分享
 cat github-deploy-key-new.pub
```

**在文件资源管理器中查看**

* **Windows：通常位于你的用户目录（例如 C:\\Users\\你的用户名\\github-deploy-key-new**.**pub）**
* **Linux/macOS：通常位于你的主目录（例如 /home/你的用户名/github-deploy-key-new**.**pub）\\** **如果不会的话设置完以后在github action上手动拉取一次 之后报错的内容复制给ai让ai帮你。**

## **3.启动github action**

**进入仓库之后点击actions**

![](https://raw.githubusercontent.com/3309446352/Images/main/Content//v2-d502a49e10b50b7829335f0610da97d5_1440w.jpg?lastModify=1771073127)

**部署完之后应该就OK了我设置的代码是一小时抓去一次**

**我自己也不太懂代码 完全是跟着ai的提示完成的**

## **四、我配置的时候遇到的坑**

**1.不会设置数据库的格式，问了ai好多次才明白**

**2.抓取的时候可以在本地测试sync.js的代码 成功了再上传到githubaction，可以省很多时间**

**3.deploy的时候用的ssh已经被使用了，但是我不知道，浪费了很多时间。**

**4.这个方式并不会把notion的文件保存到仓库里，而是每次都会重新抓取一次，我一开始以为是ai没把代码写好，后面才意识到，这样子更方便对文件进行管理，因为你想取消发布的文章可以把published的勾取消，而且每次对文章内容的修改都能同步到网页上，这样更加像后台。**

## 原文摘自

[Notion端写作自动同步到Hexo博客 (通过GithubActions） - 知乎](https://zhuanlan.zhihu.com/p/1928455872180381267)
