<template>
  <div class="flex justify-event flex-wrap pt-2">
    <div id="article-container">
      <div class="bangumi-tabs">
        <a class="bangumi-tab" id="bangumi-tab1" @click="bangumiTab('wantWatch')"
          :class="{ 'bangumi-active': currentTab === 'wantWatch' }"> 想看{{ wantWatch.length }}</a>
        <a class="bangumi-tab" id="bangumi-tab2" @click="bangumiTab('watching')"
          :class="{ 'bangumi-active': currentTab === 'watching' }">在看{{ watching.length }}</a>
        <a class="bangumi-tab" id="bangumi-tab3" @click="bangumiTab('watched')"
          :class="{ 'bangumi-active': currentTab === 'watched' }">已看{{ watched.length }}</a>
      </div>
      <div>
        <div id="bangumi-item" class="bangumi-show">
          <div class="bangumi-item" v-for="(item, index) in watchTab" :key="index">
            <div class="bangumi-picture">
              <img :src="item.subject_info.images.common" referrerpolicy="no-referrer" width="110"
                style="width: 110px; margin: 20px auto" />
            </div>
            <div class="bangumi-info">
              <div class="bangumi-title">
                <a target="_blank" :href="`https://bangumi.tv/subject/${item.subject_id}`">{{ item.subject_info.name_cn
                  || item.subject_info.name }}</a>
              </div>
              <div class="bangumi-meta">
                <span class="bangumi-info-items">
                  <span class="bangumi-info-item">
                    <span class="bangumi-info-total"> 全{{ item.subject_info.eps }}话</span>
                    <em class="bangumi-info-label-em">0</em>
                  </span>
                  <span class="bangumi-info-item bangumi-area">
                    <span class="bangumi-info-label">类型</span>
                    <em>中国大陆</em>
                  </span>
                  <span class="bangumi-info-item bangumi-play">
                    <span class="bangumi-info-label">想看</span>
                    <em>{{ item.collection_info.wish }}</em>
                  </span>
                  <span class="bangumi-info-item bangumi-follow">
                    <span class="bangumi-info-label">在看</span>
                    <em>{{ item.collection_info.doing }}万</em>
                  </span>
                  <span class="bangumi-info-item bangumi-coin">
                    <span class="bangumi-info-label">已看</span>
                    <em>{{ item.collection_info.collect }}</em>
                  </span>
                  <span class="bangumi-info-item bangumi-coin">
                    <span class="bangumi-info-label">搁置</span>
                    <em>{{ item.collection_info.on_hold }}万</em>
                  </span>
                  <span class="bangumi-info-item bangumi-coin">
                    <span class="bangumi-info-label">评分</span>
                    <em>{{ item.subject_info.score }}</em>
                  </span>
                </span>
              </div>
              <div class="bangumi-comments">
                <p>
                  {{ item.subject_info.short_summary }}
                </p>
              </div>
            </div>
          </div>
          <div class="bangumi-pagination">
            <a class="bangumi-button bangumi-firstpage" @click="paginationMethods.goToFirstPage"
              :disabled="state.currentPage === 1"> 首页</a>
            <a class="bangumi-button bangumi-previouspage" @click="paginationMethods.prevPage"
              :disabled="state.currentPage === 1">上一页</a>
            <span class="bangumi-pagenum">{{ state.currentPage }} / {{ state.totalPages }}</span>
            <a class="bangumi-button bangumi-nextpage" @click="paginationMethods.nextPage"
              :disabled="state.currentPage === state.totalPages">下一页</a>
            <a class="bangumi-button bangumi-lastpage" @click="paginationMethods.goToLastPage"
              :disabled="state.currentPage === state.totalPages">尾页</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, reactive, toRefs } from "vue"
import axios from 'axios'
export default defineComponent({
  name: 'BangumisData',
  setup() {


    // 使用 reactive 保持响应式
    const state = reactive({
      wantWatch: [] as any[], // type=1
      watching: [] as any[], // type=3
      watched: [] as any[], // type=2
      currentTab: 'watching', // 默认显示「在看」
      currentPage: 1, // 切换分类时重置页码[7](@ref)
      itemsPerPage: 10, // 新增每页显示数量
      totalPages: computed(() => {
        const list = state[state.currentTab as keyof typeof state] as any[]
        return Math.ceil(list.length / state.itemsPerPage)
      })
    })

    // 响应式显示数据
    const watchTab = computed(() => {
      const list = {
        watched: state.watched,
        watching: state.watching,
        wantWatch: state.wantWatch
      }[state.currentTab]

      // 分页切片[3](@ref)
      const start = (state.currentPage - 1) * state.itemsPerPage
      const end = start + state.itemsPerPage
      return list.slice(start, end)
    })

    // 标签切换方法
    const bangumiTab = (tabName: 'watched' | 'watching' | 'wantWatch') => {
      state.currentTab = tabName
      state.currentPage = 1
    }
    //分页方法
    const paginationMethods = {
      goToFirstPage() {
        state.currentPage = 1
      },

      prevPage() {
        if (state.currentPage > 1) state.currentPage--
      },

      nextPage() {
        if (state.currentPage < state.totalPages) state.currentPage++
      },

      goToLastPage() {
        state.currentPage = state.totalPages
      }
    }
    //local
    // 在setup函数内添加以下方法
    const loadFromStorage = async () => {
      try {
        // 从localStorage读取数据（网页1、网页4）
        const storedWatched = localStorage.getItem('watched');
        const storedWatching = localStorage.getItem('watching');
        const storedWantWatch = localStorage.getItem('wantWatch');

        // 检查数据有效性（网页6的空值判断）
        if (!storedWatched || !storedWatching || !storedWantWatch) {
          console.log('本地存储数据不完整，开始获取远程数据...')
          await getBangumiList()
          return;
        }

        // 反序列化数据并更新状态（网页7的JSON处理）
        state.watched = JSON.parse(storedWatched)
        state.watching = JSON.parse(storedWatching)
        state.wantWatch = JSON.parse(storedWantWatch)

        // 更新当前标签页数据
        state.currentTab = 'watching'; // 保持当前视图一致性
      } catch (e) {
        console.error('本地数据解析失败，重新获取远程数据:', e)
        await getBangumiList()
      }
    }
    const getBangumiList = async () => {
      let offset = 0
      let total = 0
      const LIMIT = 20
      const id = localStorage.getItem('vmid')
      id == null && localStorage.setItem('vmid', ' ');
      do {
        const req = await axios.get(
          `https://api.bgm.tv/v0/users/${id}/collections?subject_type=2&limit=${LIMIT}&offset=${offset}`
        )
        const bangumisData = req.data.data
        total = req.data.total
        // console.log(total)
        // console.log(bangumisData)

        for (const i of bangumisData) {
          try {
            // 解构必要字段
            const { subject: { short_summary, images, score, eps, name, name_cn }, subject_id, subject_type } = i
            const viewerInfo = await ViewerData(i.subject_id)

            const mergedData = {
              subject_info: { short_summary, images, score, eps, name, name_cn },
              collection_info: viewerInfo,
              subject_id,
              subject_type
            }
            if (i.type === 1) {
              state.wantWatch.push(mergedData)
              state.wantWatch.sort((a, b) => b.updated_at - a.updated_at)
            } else if (i.type === 3) {
              state.watching.push(mergedData)
              state.watching.sort((a, b) => b.updated_at - a.updated_at)
            } else if (i.type === 2) {
              state.watched.push(mergedData)
              state.watched.sort((a, b) => b.updated_at - a.updated_at)
            }
          } catch (error) {
            console.error(`处理条目失败: subject_id=${i.subject_id}`, error)
          }
        }
        offset += LIMIT
      } while (offset < total)
      const succeed =
        state.wantWatch.length + state.watching.length + state.watched.length
      const failed = total - succeed
      console.log(`Generated bangumis.json, total ${total} bangumis, ${succeed} succeed, ${failed} failed`);
      console.log(state.watched, state.watching, state.watched)
      localStorage.setItem('watched', JSON.stringify(state.watched))
      localStorage.setItem('watching', JSON.stringify(state.watching))
      localStorage.setItem('wantWatch', JSON.stringify(state.wantWatch))
      console.log(state.watched, state.watching, state.wantWatch)
      return { watchTab }
    }
    const ViewerData = async (subject_id: number) => {
      const res = await axios.get(`https://api.bgm.tv/subject/${subject_id}`)
      return res.data.collection
    }

    onMounted(() => {

      loadFromStorage().then(() => {
        console.log('初始化加载完成')
      })
    })
    return {
      ...toRefs(state),
      bangumiTab,
      watchTab,
      paginationMethods,
      state
    }
  }
})
</script>

<style>
blockquote {
  margin: 0 0 20px;
  padding: 12px 15px;
  border-left: 3px solid #49b1f5;
  background-color: #ecf7fe;
  color: #77818a;
  border-radius: 10px;
}

.bangumi-tabs {
  margin-bottom: 15px;
  margin-top: 15px;
}

#article-container {
  overflow-wrap: break-word;
}

#article-container a:not(.rss-plan-item) {
  color: rgb(48, 122, 246);
}

#article-container a:not(.rss-plan-item):hover {
  text-decoration: underline;
}

#article-container img {
  display: block;
  margin: 0px auto 0.8rem;
}

/* 文章字号 */
#article-container p {
  font-size: 0.9rem;
  line-height: 1.7;
  font-weight: 400;
}

#article-container p {
  margin: 1rem 0;
  text-align: left;
  letter-spacing: 0.6px;
}

/* 文章中的超链接 */
#article-container a:not(.rss-plan-item) {
  text-decoration: none;
  border-bottom: 2px solid var(--text-accent);
  color: var(--text-a);
  font-weight: bold;
  padding: 0 4px;
  border-radius: 4px 4px 0 0;
}

#article-container a:not(.fancybox):not(.rss-plan-item):hover {
  opacity: 1;
  text-decoration: none;
  border-bottom: 2px solid #00000000;
  color: var(--background-primary);
  background: var(--text-accent);
  border-radius: 4px;
  box-shadow: var(--accent-shadow);
}

/* 文章图片 */
#article-container img {
  border-radius: 12px;
  margin-bottom: 0.5rem;
  object-fit: cover;
}

.bangumi-tab {
  padding: 5px;
}

a.bangumi-tab {
  text-decoration: none;
}

.bangumi-active {
  background: #657b83;
  color: #fff;
}

.bangumi-item {
  position: relative;
  clear: both;
  padding: 10px 0;
  border-bottom: 1px solid #ddd;
  min-height: 180px;
}

@media screen and (max-width: 600px) {
  .bangumi-item {
    width: 100%;
  }
}

.bangumi-picture {
  position: absolute;
  left: 0;
  top: 10px;
  width: 110px;
}

.bangumi-picture img {
  margin: 10px 0;
}

.bangumi-info {
  padding-left: 120px;
  margin-top: 10px;
}

.bangumi-meta {
  font-size: 12px;
  padding-right: 10px;
  height: 45px;
}

.bangumi-comments {
  min-height: 5.1rem;
  font-size: 12px;
  margin-top: 10px;
}

.bangumi-comments>p {
  word-break: break-all;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: normal;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
}

.bangumi-pagination {
  margin-top: 15px;
  text-align: center;
  margin-bottom: 10px;
}

.bangumi-button {
  padding: 5px;
}

.bangumi-button:hover {
  background: #657b83;
  color: #fff;
}

.bangumi-hide {
  display: none;
}

.bangumi-show {
  display: block;
}

.bangumi-title {
  font-size: 18px;
}

.bangumi-title a {
  line-height: 1;
  text-decoration: none;
}

.bangumi-info-items {
  font-size: 12px;
  color: #2fd8d8;
  padding-top: 10px;
  line-height: 1;
  float: left;
  width: 100%;
}

.bangumi-info-item {
  display: inline-block;
  width: 13%;
  border-right: 1px solid #2fd8d8;
  text-align: center;
  height: 34px;
}

.bangumi-info-label {
  display: block;
  line-height: 12px;
}

.bangumi-info-item em {
  display: block;
  padding-top: 6px;
  line-height: 17px;
  font-style: normal;
  font-weight: 700;
}

.bangumi-info-total {
  padding-top: 11px;
  display: block;
  line-height: 12px;
  font-weight: 700;
}

.bangumi-info-item-score {
  border-right: 1px solid #0000;
  width: 50px;
}

.bangumi-info-label-em {
  color: transparent;
  opacity: 0;
  visibility: hidden;
  line-height: 6px !important;
  padding: 0 !important;
}

@media (max-width: 650px) {

  .bangumi-coin,
  .bangumi-type {
    display: none;
  }

  .bangumi-info-item {
    width: 16%;
  }
}

@media (max-width: 590px) {

  .bangumi-danmaku,
  .bangumi-wish {
    display: none;
  }

  .bangumi-info-item {
    width: 19%;
  }
}

@media (max-width: 520px) {

  .bangumi-doing,
  .bangumi-play {
    display: none;
  }

  .bangumi-info-item {
    width: 24%;
  }
}

@media (max-width: 480px) {

  .bangumi-collect,
  .bangumi-follow {
    display: none;
  }

  .bangumi-info-item {
    width: 30%;
  }
}

@media (max-width: 400px) {
  .bangumi-area {
    display: none;
  }

  .bangumi-info-item {
    width: 45%;
  }
}

.bangumi-my-comments {
  border: 1px dashed #8f8f8f;
  padding: 3px;
  border-radius: 5px;
  margin-left: -120px;
}

.bangumi-starstop {
  background: url(https://cdn.jsdelivr.net/npm/hexo-bilibili-bangumi@1.7.9/lib/img/rate_star_2x.png) 100% 100%/10px 19.5px repeat-x;
  height: 10px;
  width: 50px;
  display: inline-block;
  float: none;
}

.bangumi-starlight {
  background: url(https://cdn.jsdelivr.net/npm/hexo-bilibili-bangumi@1.7.9/lib/img/rate_star_2x.png) 0 0/10px 19.5px repeat-x;
  height: 10px;
  display: block;
  width: 100%;
}

.bangumi-starlight.stars1 {
  width: 5px;
}

.bangumi-starlight.stars2 {
  width: 10px;
}

.bangumi-starlight.stars3 {
  width: 15px;
}

.bangumi-starlight.stars4 {
  width: 20px;
}

.bangumi-starlight.stars5 {
  width: 25px;
}

.bangumi-starlight.stars6 {
  width: 30px;
}

.bangumi-starlight.stars7 {
  width: 35px;
}

.bangumi-starlight.stars8 {
  width: 40px;
}

.bangumi-starlight.stars9 {
  width: 45px;
}

.bangumi-starlight.stars10 {
  width: 50px;
}

#article-container .bangumi-picture a {
  padding-left: 0px;
  padding-right: 0px;
  border-bottom-width: 0px;
}

#article-container .bangumi-tab.bangumi-active {
  background: var(--strong-gradient);
  color: var(--background-secondary);
  border-radius: 10px;
}

#article-container .bangumi-tabs .bangumi-tab {
  border-bottom: none !important;
  border-radius: 10px;
}

#article-container .bangumi-tabs a.bangumi-tab:hover {
  text-decoration: none !important;
  border-radius: 10px;
}

#article-container .bangumi-pagination a.bangumi-button {
  border-bottom: none;
  border-radius: 10px;
}

.bangumi-button:hover {
  background: var(--text-accent) !important;
  border-radius: 10px !important;
  color: var(--background-primary) !important;
}

a.bangumi-button.bangumi-nextpage:hover {
  text-decoration: none !important;
}

.bangumi-button {
  padding: 5px 10px !important;
}

a.bangumi-tab {
  padding: 5px 10px !important;
}

svg.icon.faa-tada {
  font-size: 1.1em;
}

.bangumi-info-item {
  border-right: 1px solid var(--text-sub-accent);
}

.bangumi-info-item span {
  color: var(--text-sub-accent);
}

.bangumi-info-item em {
  color: var(--text-sub-accent);
}

.bangumi-pagenum {
  color: var(--text-sub-accent);
}
</style>
