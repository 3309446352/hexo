---
abbrlink: ''
abstracts: 个专门为大型语言模型和 AI 应用设计的开源网络爬虫工具，旨在为 AI 训练、RAG、知识库构建等场景提供高效、智能的数据采集解决方案。它结合了现代爬虫技术与
  AI 处理能力，能够直接输出适配 LLM 的结构化数据（Markdown、JSON 等），并支持动态页面渲染、反爬对抗、分布式部署等高级功能  作者：未来影子
  链接：https://juejin.cn/post/7504131186812502042 来源：稀土掘金 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
author: ZMC
categories:
- - 爬虫
cover: https://www.bing.com/th/id/OIP.x-KATgTL-jyMqssFNrfotgHaEK?w=302&h=180&c=7&r=0&o=7&cb=12&dpr=1.3&pid=1.7&rm=3
date: '2025-10-14T16:15:38.979784+08:00'
description: 个专门为大型语言模型和 AI 应用设计的开源网络爬虫工具，旨在为 AI 训练、RAG、知识库构建等场景提供高效、智能的数据采集解决方案。它结合了现代爬虫技术与
  AI 处理能力，能够直接输出适配 LLM 的结构化数据（Markdown、JSON 等），并支持动态页面渲染、反爬对抗、分布式部署等高级功能  作者：未来影子
  链接：https://juejin.cn/post/7504131186812502042 来源：稀土掘金 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
tags: []
title: Crawl4AI详解
updated: '2025-10-14T16:15:39.880+08:00'
---
#  {{title}}

## 简介 : {{description}}

主要支持功能点如下：

Markdown 生成

* 🧹 Clean Markdown：生成具有准确格式的干净、结构化的 Markdown
* 🎯 Fit Markdown：基于启发式的过滤，去除噪声和不相关的部分，实现 AI 友好的处理
* 🔗 引文和参考文献：将页面链接转换为带有清晰引文的编号参考文献列表
* 🛠️ 自定义策略：用户可以根据特定需求创建自己的 Markdown 生成策略
* 📚 BM25 算法：采用基于 BM25 的过滤来提取核心信息和删除不相关的内容

结构化数据提取

* 🤖 LLM 驱动的提取：支持所有 LLM（开源和专有）进行结构化数据提取
* 🧱 分块策略：为目标内容处理实施分块（基于主题、正则表达式、句子级别）
* 🌌 余弦相似度：根据用户查询查找相关内容块以进行语义提取
* 🔎 基于 CSS 的提取：使用 XPath 和 CSS 选择器快速提取基于架构的数据
* 🔧 Schema Definition：定义用于从重复模式中提取结构化 JSON 的自定义 Schema

浏览器集成

* 🖥️ Managed Browser：使用具有完全控制权的用户拥有的浏览器，避免机器人检测
* 🔄 远程浏览器控制：连接到 Chrome 开发者工具协议以进行远程大规模数据提取。
* 👤 Browser Profiler：使用保存的身份验证状态、Cookie 和设置创建和管理持久性配置文件。
* 🔒 会话管理：保留浏览器状态并将其重新用于多步骤爬网。
* 🧩 代理支持： 通过身份验证无缝连接到代理以实现安全访问。
* ⚙️ 完全浏览器控制：修改标头、cookie、用户代理等，以实现定制的抓取设置。
* 🌍 多浏览器支持：与 Chromium、Firefox 和 WebKit 兼容。
* 📐 动态视口调整：自动调整浏览器视口以匹配页面内容，确保完整渲染和捕获所有元素。

🔎 抓取

* 🖼️ 媒体支持：提取图像、音频、视频和响应式图像格式，如 和 。`srcsetpicture`
* 🚀 动态抓取：执行 JS 并等待异步或同步以进行动态内容提取。
* 📸 屏幕截图：在抓取过程中捕获页面屏幕截图以进行调试或分析。
* 📂 原始数据爬取：直接处理原始 HTML （） 或本地文件 （）。`raw:file://`
* 🔗 综合链接提取：提取内部、外部链接和嵌入式 iframe 内容。
* 🛠️ 可自定义的钩子：在每一步定义钩子以自定义爬网行为。
* 💾 缓存：缓存数据以提高速度并避免冗余获取。
* 📄 元数据提取：从网页中检索结构化元数据。
* 📡 IFrame 内容提取：从嵌入的 iframe 内容中无缝提取。
* 🕵️ 延迟加载处理：等待图像完全加载，确保不会因延迟加载而丢失任何内容。
* 🔄 整页扫描：模拟滚动以加载和捕获所有动态内容，非常适合无限滚动页面。

### 快速开始

python 运行环境 3.9+

```
pip install -U crawl4ai

python -m playwright install --with-deps chromium
```

快速开始

```
import asyncio
from crawl4ai import *

async def main():
    async with AsyncWebCrawler() as crawler:
        result = await crawler.arun(
            url="https://www.nbcnews.com/business",
        )
        print("==================快速开始=======================")
        print(result.markdown)

if __name__ == "__main__":
    asyncio.run(main())
```

![](https://p9-xtjj-sign.byteimg.com/tos-cn-i-73owjymdk6/c7c3ec5ab23d4313bd764c2e87baf5fc~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAg5pyq5p2l5b2x5a2Q:q75.awebp?rk3s=f64ab15b&x-expires=1760602801&x-signature=3ehtB396KAg54eF35ZujzW2PjD4%3D)

### 三个 Crawl4AI 示例

#### markdown 清洗

```
import asyncio
from crawl4ai import AsyncWebCrawler, BrowserConfig, CrawlerRunConfig, CacheMode
from crawl4ai.content_filter_strategy import PruningContentFilter, BM25ContentFilter
from crawl4ai.markdown_generation_strategy import DefaultMarkdownGenerator


async def main():
    browser_config = BrowserConfig(
        headless=True,
        verbose=True,
    )
    run_config = CrawlerRunConfig(
        cache_mode=CacheMode.ENABLED,
        markdown_generator=DefaultMarkdownGenerator(
            content_filter=PruningContentFilter(threshold=0.48, threshold_type="fixed", min_word_threshold=0)
        ),
        # markdown_generator=DefaultMarkdownGenerator(
        #     content_filter=BM25ContentFilter(user_query="WHEN_WE_FOCUS_BASED_ON_A_USER_QUERY", bm25_threshold=1.0)
        # ),
    )

    async with AsyncWebCrawler(config=browser_config) as crawler:
        result = await crawler.arun(
            url="https://www.nbcnews.com/business",
            config=run_config
        )
        print(len(result.markdown.raw_markdown))
        print(len(result.markdown.fit_markdown))


if __name__ == "__main__":
    asyncio.run(main())
```

![](https://p9-xtjj-sign.byteimg.com/tos-cn-i-73owjymdk6/6aa5e0ff381540d3a6c601efaddfab2e~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAg5pyq5p2l5b2x5a2Q:q75.awebp?rk3s=f64ab15b&x-expires=1760602801&x-signature=i8JHqPQ6b8xtQn%2BjuDq8zxNmBxg%3D)

#### LLM 格式化提取

```
import os
import asyncio
from crawl4ai import AsyncWebCrawler, BrowserConfig, CrawlerRunConfig, CacheMode, LLMConfig
from crawl4ai.extraction_strategy import LLMExtractionStrategy
from pydantic import BaseModel, Field


class OpenAIModelFee(BaseModel):
    model_name: str = Field(..., description="Name of the OpenAI model.")
    input_fee: str = Field(..., description="Fee for input token for the OpenAI model.")
    output_fee: str = Field(..., description="Fee for output token for the OpenAI model.")


async def main():
    browser_config = BrowserConfig(verbose=True)
    run_config = CrawlerRunConfig(
        word_count_threshold=1,
        extraction_strategy=LLMExtractionStrategy(
            # Here you can use any provider that Litellm library supports, for instance: ollama/qwen2
            # provider="ollama/qwen2", api_token="no-token",
            llm_config=LLMConfig(provider="openai/gpt-4o", api_token=os.getenv('OPENAI_API_KEY')),
            schema=OpenAIModelFee.schema(),
            extraction_type="schema",
            instruction="""From the crawled content, extract all mentioned model names along with their fees for input and output tokens.
            Do not miss any models in the entire content. One extracted model JSON format should look like this:
            {"model_name": "GPT-4", "input_fee": "US$10.00 / 1M tokens", "output_fee": "US$30.00 / 1M tokens"}."""
        ),
        cache_mode=CacheMode.BYPASS,
    )

    async with AsyncWebCrawler(config=browser_config) as crawler:
        result = await crawler.arun(
            url='https://openai.com/api/pricing/',
            config=run_config
        )
        print(result.extracted_content)


if __name__ == "__main__":
    asyncio.run(main())
```

![](https://p9-xtjj-sign.byteimg.com/tos-cn-i-73owjymdk6/e82acb781e994070a83109f944fe2d13~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAg5pyq5p2l5b2x5a2Q:q75.awebp?rk3s=f64ab15b&x-expires=1760602801&x-signature=D0mBPaG9mF%2B9OSFfcCfGoefvcRw%3D)

#### html 到 csv 格式

```
import asyncio
from typing import List

import pandas as pd
from crawl4ai import AsyncWebCrawler, BrowserConfig, CrawlerRunConfig
from crawl4ai.types import CrawlResult
async def main():
    browser_config = BrowserConfig(
        headless=True,
        verbose=True,
    )
    crawler = AsyncWebCrawler(config=browser_config)
    await crawler.start()

    try:
        # Set up scraping parameters
        crawl_config = CrawlerRunConfig(
            table_score_threshold=8,  # Strict table detection
        )

        # Execute market data extraction
        results: List[CrawlResult] = await crawler.arun(
            url="https://coinmarketcap.com/?page=1", config=crawl_config
        )

        # Process results
        raw_df = pd.DataFrame()
        for result in results:
            if result.success and result.tables:
                raw_df = pd.DataFrame(
                    result.tables[0]["rows"],
                    columns=result.tables[0]["headers"],
                )
                break
        print(raw_df.head())

    finally:
        await crawler.close()


if __name__ == "__main__":
    asyncio.run(main())
```

![](https://p9-xtjj-sign.byteimg.com/tos-cn-i-73owjymdk6/94fe4a25cba445bda612f15e27809562~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAg5pyq5p2l5b2x5a2Q:q75.awebp?rk3s=f64ab15b&x-expires=1760602801&x-signature=JFPbrM8axe4FO86ZeQeyVrywns4%3D)
