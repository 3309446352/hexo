const { Client } = require('@notionhq/client');
const fs = require('fs');
const path = require('path');

const notion = new Client({
    auth: process.env.NOTION_TOKEN,
    notionVersion: '2022-06-28'
});

const HEXO_POST_DIR = path.resolve(__dirname, '../source/_posts');

function getCoreName(name) {
    return name.replace(/[^a-zA-Z0-9\u4e00-\u9fa5._-]/g, '');
}

async function deleteDraftPosts() {
    try {
        console.log('正在查询 Notion 中状态为 "待发布" 的文章...');

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

        let localFiles = [];
        try {
            localFiles = fs.readdirSync(HEXO_POST_DIR);
        } catch (e) {
            console.log('本地目录读取失败，请检查路径');
            return;
        }

        for (const post of posts) {
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

            const coreTitle = getCoreName(title);

            const targetFile = localFiles.find(file => {
                if (!file.endsWith('.md')) return false;
                return getCoreName(file).includes(coreTitle);
            });

            if (targetFile) {
                const filePath = path.join(HEXO_POST_DIR, targetFile);
                const fileNameWithoutExt = targetFile.replace('.md', '');
                const imgDirPath = path.join(HEXO_POST_DIR, fileNameWithoutExt);

                fs.unlinkSync(filePath);
                console.log(`[成功删除] ${targetFile}`);

                if (fs.existsSync(imgDirPath)) {
                    fs.rmSync(imgDirPath, { recursive: true, force: true });
                    console.log(`[成功删除目录] ${fileNameWithoutExt}/`);
                }
            } else {
                console.log(`[未找到文件] 在本地未找到匹配文章: ${title}`);
                console.log(` -> 核心匹配串: ${coreTitle}`);
            }
        }

        console.log('\n所有操作已完成。');

    } catch (error) {
        console.error('执行出错:', error.message);
    }
}

deleteDraftPosts();
