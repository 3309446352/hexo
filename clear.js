// 删除.js
const { Client } = require('@notionhq/client');
const fs = require('fs');
const path = require('path');
// 初始化 Notion Client
const notion = new Client({
    auth: process.env.NOTION_TOKEN,
    notionVersion: '2022-06-28'
});
// Hexo 文章目录
const HEXO_POST_DIR = 'source/_posts';
/**
 * 生成安全的文件名（替换特殊字符）
 */
function generateSafeFileName(name) {
    // 保留中文、字母、数字、下划线、点、短横线
    return name.replace(/[^a-zA-Z0-9\u4e00-\u9fa5._-]/g, '-');
}
/**
 * 查询 Notion 并删除对应文章
 */
async function deleteDraftPosts() {
    try {
        console.log('正在查询 Notion 中状态为 "待发布" 的文章...');
        // 1. 查询 Notion 数据库
        const response = await notion.databases.query({
            database_id: process.env.NOTION_DATABASE_ID,
            filter: {
                property: 'status',     // 确认您的属性名是不是这个
                select: {               // 关键修改：改为 select
                    equals: '待发布'
                }
            }
        });
        const posts = response.results;
        if (!posts || posts.length === 0) {

            console.log('没有需要删除的文章。');
            return;
        }
        console.log(`查询到 ${posts.length} 篇文章，开始处理...`);
        // 2. 遍历文章进行删除
        for (const post of posts) {
            // 获取标题
            const title = post.properties.Title?.title[0]?.plain_text || 'Untitled';
            // 生成安全文件名
            const safeTitle = generateSafeFileName(title);
            console.log(safeTitle)
            // 拼接路径：文章文件 和 图片文件夹
            const filePath = path.join(HEXO_POST_DIR, `${safeTitle}.md`);
            console.log(filePath)
            const imgDirPath = path.join(HEXO_POST_DIR, safeTitle);
            console.log(imgDirPath)
            // 删除 Markdown 文件
            if (fs.existsSync(filePath)) {
                fs.unlinkSync(filePath);
                console.log(`[删除文件] ${safeTitle}.md`);
            } else {
                console.log(`[文件不存在] ${safeTitle}.md`);
            }
            // 删除图片文件夹
            if (fs.existsSync(imgDirPath)) {
                fs.rmSync(imgDirPath, { recursive: true, force: true }); // Node.js 14.14+
                console.log(`[删除目录] ${safeTitle}/`);
            }
        }
        console.log('所有操作已完成。');
    } catch (error) {
        console.error('执行出错:', error.message);
    }
}
// 执行
deleteDraftPosts();