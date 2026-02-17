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
    // 逻辑改为：删除不符合要求的字符，而不是替换为 '-'
    return name.replace(/[^a-zA-Z0-9\u4e00-\u9fa5._-]/g, '');
}
/**
 * 查询 Notion 并删除对应文章
 */
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
                property: 'status',
                select: {
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

        // 2. 读取本地目录所有文件（用于模糊匹配）
        let localFiles = [];
        try {
            localFiles = fs.readdirSync(HEXO_POST_DIR);
        } catch (e) {
            console.log('本地目录读取失败，请检查路径');
            return;
        }

        // 3. 遍历文章进行删除
        for (const post of posts) {
            // --- 自动查找标题属性 ---
            let title = 'Untitled';
            for (const key in post.properties) {
                if (post.properties[key].type === 'title') {
                    const titleArr = post.properties[key].title;
                    if (titleArr && titleArr.length > 0) {
                        title = titleArr[0].plain_text;
                    }
                    break;
                }
            }

            console.log(`\n正在处理文章: ${title}`);

            // --- 模糊匹配逻辑 ---
            // 获取标题的核心文字（去掉标点）
            const coreTitle = getCoreName(title);

            // 在本地文件中查找包含这个核心名称的 .md 文件
            const targetFile = localFiles.find(file => {
                if (!file.endsWith('.md')) return false;
                // 将文件名也去掉标点，看是否包含标题核心
                return getCoreName(file).includes(coreTitle);
            });

            if (targetFile) {
                // 找到了文件
                const filePath = path.join(HEXO_POST_DIR, targetFile);
                const fileNameWithoutExt = targetFile.replace('.md', '');
                const imgDirPath = path.join(HEXO_POST_DIR, fileNameWithoutExt);

                // 删除 Markdown 文件
                fs.unlinkSync(filePath);
                console.log(`[成功删除] ${targetFile}`);

                // 删除同名图片文件夹
                if (fs.existsSync(imgDirPath)) {
                    fs.rmSync(imgDirPath, { recursive: true, force: true });
                    console.log(`[成功删除目录] ${fileNameWithoutExt}/`);
                }
            } else {
                console.log(`[未找到文件] 在本地未找到匹配文章: ${title}`);
                // 如果还是找不到，打印一下核心名字，方便调试
                console.log(` -> 核心匹配串: ${coreTitle}`);
            }
        }

        console.log('\n所有操作已完成。');

    } catch (error) {
        console.error('执行出错:', error.message);
    }
}
// 执行
deleteDraftPosts();