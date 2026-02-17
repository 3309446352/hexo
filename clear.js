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
                property: 'status',     // 属性名
                select: {               // 属性类型：下拉选择
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
            // --- 修改部分开始：自动查找标题属性 ---
            let title = 'Untitled';

            // 遍历所有属性，找到 type 为 'title' 的那个，无论它叫 Title 还是 标题
            for (const key in post.properties) {
                if (post.properties[key].type === 'title') {
                    const titleArr = post.properties[key].title;
                    console.log('调试-当前title变量:', title);
                    console.log('调试-读取到的titleArr:', titleArr);
                    if (titleArr && titleArr.length > 0) {
                        title = titleArr[0].plain_text;
                    }
                    break; // 找到后退出循环
                }
            }
            // --- 修改部分结束 ---

            // 生成安全文件名
            const safeTitle = generateSafeFileName(title);
            console.log(`正在处理: ${safeTitle}`);

            // 拼接路径：文章文件 和 图片文件夹
            const filePath = path.join(HEXO_POST_DIR, `${safeTitle}.md`);
            const imgDirPath = path.join(HEXO_POST_DIR, safeTitle);

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