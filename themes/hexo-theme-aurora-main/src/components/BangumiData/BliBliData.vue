<template>
    <div class="flex justify-event flex-wrap pt-2">
      <div id="article-container">
        <div class="bangumi-tabs">
          <a class="bangumi-tab" id="bangumi-tab1"  @click="bangumiTab('watching')" :class="{ 'bangumi-active': currentTab === 'Watching' }"> 想看{{watching.length+1}}</a>
          <a class="bangumi-tab" id="bangumi-tab2"   @click="bangumiTab('wantWatch')" :class="{ 'bangumi-active': currentTab === 'wantWatch' }" >在看{{wantWatch.length+1}}</a>
          <a class="bangumi-tab" id="bangumi-tab3"  @click="bangumiTab('watched')" :class="{ 'bangumi-active': currentTab === 'watched' }">已看{{watched.length+1}}</a>
        </div>
        <div>
          <div id="bangumi-item" class="bangumi-show" >
            <div class="bangumi-item" v-for="(item,index) in watchTab" :key="item.season_id">
              <div class="bangumi-picture">
                <img :src="item.cover" referrerpolicy="no-referrer" width="110" style="width:110px;margin:20px auto;">
              </div>
              <div class="bangumi-info">
                <div class="bangumi-title">
                  <a target="_blank" :href="item.url">{{item.title}}</a>
                </div>
                <div class="bangumi-meta">
                  <span class="bangumi-info-items">
                    <span class="bangumi-info-item">
                        <span class="bangumi-info-total">{{item.new_ep.index_show}}</span>
                        <em class="bangumi-info-label-em">0</em>
                    </span>
                    <span class="bangumi-info-item bangumi-area">
                        <span class="bangumi-info-label">{{item.season_type_name}}</span>
                        <em>{{item.areas.name}}</em>
                    </span>
                    <span class="bangumi-info-item bangumi-play">
                        <span class="bangumi-info-label">总播放</span>
                        <em>{{item.stat.view}}</em>
                    </span>
                    <span class="bangumi-info-item bangumi-follow">
                        <span class="bangumi-info-label">追番人数</span>
                        <em>{{item.stat.follow}}万</em>
                    </span>
                    <span class="bangumi-info-item bangumi-coin">
                        <span class="bangumi-info-label">硬币数</span>
                        <em>{{item.stat.coin}}万</em>
                    </span>
                    <span class="bangumi-info-item bangumi-danmaku">
                        <span class="bangumi-info-label">弹幕总数</span>
                        <em>{{item.stat.danmaku}}万</em>
                    </span>
                    <span class="bangumi-info-item bangumi-info-item-score">
                        <span class="bangumi-info-label">评分</span>
                        <em>{{item.rating.score}}</em>
                    </span>
                </span>
                </div>
                <div class="bangumi-comments">
                  <p>{{item.evaluate}}</p>
                </div>
              </div>
            </div>
            <div class="bangumi-pagination">
              <a class="bangumi-button bangumi-firstpage"  @click="paginationMethods.goToFirstPage" :disabled="state.currentPage === 1"> 首页</a>
              <a class="bangumi-button bangumi-previouspage" @click="paginationMethods.prevPage" :disabled="state.currentPage === 1">上一页</a>
              <span class="bangumi-pagenum">{{ state.currentPage }} / {{ state.totalPages }}</span>
              <a class="bangumi-button bangumi-nextpage"  @click="paginationMethods.nextPage" :disabled="state.currentPage === state.totalPages">下一页</a>
              <a class="bangumi-button bangumi-lastpage" @click="paginationMethods.goToLastPage" :disabled="state.currentPage === state.totalPages">尾页</a>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, reactive, toRefs ,toRaw} from 'vue'
import axios from 'axios'

export default defineComponent({
  name: 'BliBliData',
  setup() {
    // 定义响应式状态
    const state = reactive({
      wantWatch: [] as any[], // 初始化空数组，根据 type 存储对应数据
      watching: [] as any[], // 示例扩展其他分类
      watched: [] as any[],
      currentTab: 'watching', // 默认显示「在看」
      currentPage: 1, // 切换分类时重置页码[7](@ref)
      itemsPerPage: 10, // 新增每页显示数量
      totalPages: computed(() => {
        const list = state[state.currentTab as keyof typeof state] as any[]
        return Math.ceil(list.length / state.itemsPerPage)
      })
    })
    // 明确返回 Promise 的正确类型（假设 list 是数组）
    const getDataPageTotal = (follow_status: number) => {
      const response = axios
        .get('/bli', {
          params: {
            vmid: 272466600,
            follow_status: follow_status,
            type: 1,
            pn: 1,
            ps: 10
          }
        })
        .then(response => {
          const total = response?.data?.data?.total ?? 0
          console.log(total)
          return response.data.data.total // 显式返回数字
        })
        .catch(err => {
          console.error('请求失败:', err)
          throw new Error(`API调用失败: ${err.message}`) // 保持类型一致性
        })
      return response
    }
    const getDataPage = async (follow_status: number, pn: number) => {
      const response = await axios.get('/bli', {
        params: {
          vmid: 272466600,
          follow_status: follow_status,
          type: 1,
          pn: pn,
          ps: 1
        }
      })
      // 安全解构 + 默认值
      const mesData = response.data.data || {}
      const { list = [] } = mesData // 默认空数组避免解构失败
      // const statData = list.map(({ stat: {follow, view, danmaku, reply, coin, series_follow, series_view, likes, favorite} }) =>({stat:{follow, view, danmaku, reply, coin, series_follow, series_view, likes, favorite}}))
      const titlesData = list.map(item => ({
        url: item.url || '',
        season_id: item.season_id || '',
        season_type_name: item.season_type_name || '',
        title: item.title || '无标题',
        evaluate: item.evaluate || '',
        cover: item.cover || '',
        stat: {
          follow: item.stat?.follow || 0,
          view: item.stat?.view || 0,
          danmaku: item.stat?.danmaku || 0,
          reply: item.stat?.reply || 0,
          coin: item.stat?.coin || 0,
          series_follow: item.stat?.series_follow || 0,
          likes: item.stat?.likes || 0,
          favorite: item.stat?.favorite || 0,
        },
        new_ep: {
          index_show: item.new_ep?.index_show || '全12话'
        },
        areas: {
          id: item.areas?.[0]?.id ?? 0, // [!code focus]
          name: item.areas?.[0]?.name ?? '番剧' // [!code focus]
        },
        rating: {
          score: item.rating?.score ?? 0, // 注意 rating 应与 areas 同级
          count: item.rating?.count ?? 0
        }
      }))
      // console.log(mergedData)
      return titlesData
    }
    const getDataPages = async () => {
      let statedata = []
      for (let i = 1; i <= 3; i++) {
        const total = await getDataPageTotal(i) // 等待请求完成
        console.log('当前状态总数据量:', total)
        for (let j = 0; j < total; j++) {
          if (i == 1) {
            statedata = await getDataPage(i, j)
            state.watching.push(...statedata)
          }
          else if(i==2){
            statedata = await getDataPage(i, j)
            state.wantWatch.push(...statedata)
          } else if (i == 3) {
            statedata = await getDataPage(i, j)
            state.watched.push(...statedata)
          }
        }
      }
      localStorage.setItem( "BliBli-watched", JSON.stringify(toRaw(state.watched)));
      localStorage.setItem( "BliBli-watching", JSON.stringify(toRaw(state.watching)));
      localStorage.setItem( "BliBli-wantWatch", JSON.stringify(toRaw(state.wantWatch)));
    }

    const watchTab = computed(() => {
      const watchTablist = {
        watched: state.watched,
        watching: state.watching,
        wantWatch: state.wantWatch
      }[state.currentTab]

      // 分页切片[3](@ref)
      const start = (state.currentPage - 1) * state.itemsPerPage
      const end = start + state.itemsPerPage
      return watchTablist.slice(start, end)
    })
    const loadFromStorage = async () => {
      try {
        // 从localStorage读取数据（网页1、网页4）
        const storedWatched = localStorage.getItem('BliBli-watched');
        const storedWatching = localStorage.getItem('BliBli-watching');
        const storedWantWatch = localStorage.getItem('BliBli-wantWatch');

        // 检查数据有效性（网页6的空值判断）
        if (!storedWatched || !storedWatching || !storedWantWatch) {
          console.log('本地存储数据不完整，开始获取远程数据...')
          getDataPages()
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
        await getDataPages()
      }
    }

    const bangumiTab = (tabName: 'watched' | 'watching' | 'wantWatch') => {
      state.currentTab = tabName
      state.currentPage = 1
    }
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

    onMounted(() => {
      loadFromStorage().then(() => {
        console.log('初始化加载完成')
      })
      console.log(watchTab.value)
      // getDataPages()
    })
    return {
      ...toRefs(state),
      state,
      watchTab,
      bangumiTab,
      paginationMethods
    }
  }
})
</script>

<style>

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
