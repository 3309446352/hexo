<template>
  <div class="collect">
    <div class="page-top-card">
      <div class="content-item-tips">收藏</div>
      <span class="content-item-title">藏宝阁</span>
      <div class="content-bottom">
        <div class="tips text-white text-2xl">
          包含 影视/小说/游戏/音乐 等 持续更新中...
        </div>
      </div>
    </div>
    <div class="row" style="margin-bottom: 10px">
      <input v-model="newBook.category" class="input" placeholder="分类" />
      <input v-model="newBook.url" class="input" placeholder="封面" />
      <input v-model="newBook.title" class="input" placeholder="书籍名称" />
      <button class="btn" @click="addBook">添加</button>
    </div>
    <div class="flex justify-between">
      <h2 style="margin-bottom: 12px">📚 书籍 {{ BookData.length }}</h2>
      <SvgIcon
        icon-class="CollectRight"
        height="2rem"
        width="2rem"
        fill="currentColor"
        @click="GetCollectArtcle('BookData')"
      />
    </div>
    <div class="collect-list">
      <div
        class="collect_box"
        v-for="(item, index) in BookData.slice(0, 10)"
        :key="index"
        :style="{ backgroundImage: `url(${item.url})` }"
      >
        <div class="collect_top">
          <i class="fa-solid fa-book">
            <SvgIcon
              icon-class="books"
              height="1.25rem"
              width="1.25rem"
              fill="var(--text-normal)"
              stroke="var(--text-normal)"
            />
          </i>
          <span @click="DeleteData('BookData', item.title)">
            <SvgIcon
              icon-class="delete"
              height="1.25rem"
              width="1.25rem"
              fill="var(--text-normal)"
              stroke="var(--text-normal)"
            />
          </span>
        </div>
        <div class="collect_content">
          <span>{{ item.title }}</span>
          <div>
            <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i
            ><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i
            ><i class="fa-solid fa-star"></i>
          </div>
        </div>
      </div>
    </div>

    <div class="flex justify-between">
      <h2 style="margin-bottom: 12px">📚 小说 {{ NovelData.length }}</h2>
      <SvgIcon
        icon-class="CollectRight"
        height="2rem"
        width="2rem"
        fill="currentColor"
        @click="GetCollectArtcle('NovelData')"
      />
    </div>
    <div class="collect-list">
      <div
        v-for="(item, index) in NovelData"
        :key="index"
        title=""
        referrerpolicy="no-referrer"
        class="collect_box"
        :style="{ backgroundImage: `url(${item.url})` }"
      >
        <!-- 新增：黑色半透明遮罩层 -->
        <div class="dark-overlay"></div>
        <div class="collect_top">
          <i class="fa-solid fa-book">
            <SvgIcon
              icon-class="books"
              height="1.25rem"
              width="1.25rem"
              fill="var(--text-normal)"
              stroke="var(--text-normal)"
            />
          </i>
          <span @click="DeleteData('NovelData', item.title)">
            <SvgIcon
              icon-class="delete"
              height="1.25rem"
              width="1.25rem"
              fill="var(--text-normal)"
              stroke="var(--text-normal)"
            />
          </span>
        </div>
        <div class="collect_content">
          <span>{{ item.title }}</span>
          <div>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
          </div>
        </div>
      </div>
    </div>

    <div class="flex justify-between">
      <h2 style="margin-bottom: 12px">📚 游戏 {{ GamesData.length }}</h2>
      <SvgIcon
        icon-class="CollectRight"
        height="2rem"
        width="2rem"
        fill="currentColor"
        @click="GetCollectArtcle('GamesData')"
      />
    </div>
    <div class="collect-list">
      <div
        v-for="(item, index) in GamesData"
        :key="index"
        title=""
        referrerpolicy="no-referrer"
        class="collect_box"
        :style="{ backgroundImage: `url(${item.url})` }"
      >
        <!-- 新增：黑色半透明遮罩层 -->
        <div class="dark-overlay"></div>
        <div class="collect_top">
          <i class="fa-solid fa-book">
            <SvgIcon
              icon-class="books"
              height="1.25rem"
              width="1.25rem"
              fill="var(--text-normal)"
              stroke="var(--text-normal)"
            />
          </i>
          <span @click="DeleteData('GameData', item.title)">
            <SvgIcon
              icon-class="delete"
              height="1.25rem"
              width="1.25rem"
              fill="var(--text-normal)"
              stroke="var(--text-normal)"
            />
          </span>
        </div>
        <div class="collect_content">
          <span>{{ item.title }}</span>
          <div>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
          </div>
        </div>
      </div>
    </div>

    <div class="flex justify-between">
      <h2 style="margin-bottom: 12px">📚 音乐 {{ MusicsData.length }}</h2>
      <SvgIcon
        icon-class="CollectRight"
        height="2rem"
        width="2rem"
        fill="currentColor"
        @click="GetCollectArtcle('GamesData')"
      />
    </div>
    <div class="collect-list">
      <div
        v-for="(item, index) in MusicsData"
        :key="index"
        title=""
        referrerpolicy="no-referrer"
        class="collect_box"
        :style="{ backgroundImage: `url(${item.url})` }"
      >
        <!-- 新增：黑色半透明遮罩层 -->
        <div class="dark-overlay"></div>
        <div class="collect_top">
          <i class="fa-solid fa-book">
            <SvgIcon
              icon-class="books"
              height="1.25rem"
              width="1.25rem"
              fill="var(--text-normal)"
              stroke="var(--text-normal)"
            />
          </i>
          <span @click="DeleteData('GameData', item.title)">
            <SvgIcon
              icon-class="delete"
              height="1.25rem"
              width="1.25rem"
              fill="var(--text-normal)"
              stroke="var(--text-normal)"
            />
          </span>
        </div>
        <div class="collect_content">
          <span>{{ item.title }}</span>
          <div>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
          </div>
        </div>
      </div>
    </div>

    <div class="flex justify-between">
      <h2 style="margin-bottom: 12px">📚 影视 {{ playlist.length }}</h2>
      <SvgIcon
        icon-class="CollectRight"
        height="2rem"
        width="2rem"
        fill="currentColor"
        @click="GetCollectArtcle('GamesData')"
      />
    </div>
    <div class="collect-list">
      <div
        v-for="(item, index) in playlist"
        :key="index"
        title=""
        referrerpolicy="no-referrer"
        class="collect_box"
        :style="{ backgroundImage: `url(${item.url})` }"
      >
        <!-- 新增：黑色半透明遮罩层 -->
        <div class="dark-overlay"></div>
        <div class="collect_top">
          <i class="fa-solid fa-book">
            <SvgIcon
              icon-class="books"
              height="1.25rem"
              width="1.25rem"
              fill="var(--text-normal)"
              stroke="var(--text-normal)"
            />
          </i>
          <span @click="DeleteData('GameData', item.title)">
            <SvgIcon
              icon-class="delete"
              height="1.25rem"
              width="1.25rem"
              fill="var(--text-normal)"
              stroke="var(--text-normal)"
            />
          </span>
        </div>
        <div class="collect_content">
          <span>{{ item.title }}</span>
          <div>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
          </div>
        </div>
      </div>
    </div>

    <div class="flex justify-between">
      <h2 style="margin-bottom: 12px">📚 其他 {{ others.length }}</h2>
      <SvgIcon
        icon-class="CollectRight"
        height="2rem"
        width="2rem"
        fill="currentColor"
        @click="GetCollectArtcle('GamesData')"
      />
    </div>
    <div class="collect-list">
      <div
        v-for="(item, index) in others"
        :key="index"
        title=""
        referrerpolicy="no-referrer"
        class="collect_box"
        :style="{ backgroundImage: `url(${item.url})` }"
      >
        <!-- 新增：黑色半透明遮罩层 -->
        <div class="dark-overlay"></div>
        <div class="collect_top">
          <i class="fa-solid fa-book">
            <SvgIcon
              icon-class="books"
              height="1.25rem"
              width="1.25rem"
              fill="var(--text-normal)"
              stroke="var(--text-normal)"
            />
          </i>
          <span @click="DeleteData('GameData', item.title)">
            <SvgIcon
              icon-class="delete"
              height="1.25rem"
              width="1.25rem"
              fill="var(--text-normal)"
              stroke="var(--text-normal)"
            />
          </span>
        </div>
        <div class="collect_content">
          <span>{{ item.title }}</span>
          <div>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive, ref} from 'vue'
import SupabaseTool from '@/Supabase/SupabaseTool'
import SvgIcon from '@/components/SvgIcon/index.vue'
import router from '@/router'
export default defineComponent({
  components: { SvgIcon },
  setup() {
    interface BookItem {
      id: string
      title: string
      author: string
      url: string
    }
    const NovelData = ref<BookItem[]>([])
    const BookData = ref<BookItem[]>([])
    const GamesData = ref<BookItem[]>([])
    const MusicsData = ref<BookItem[]>([])
    const playlist = ref<BookItem[]>([])
    const others = ref<BookItem[]>([])
    const refreshTimer = ref<NodeJS.Timeout | null>(null)
    // 新书籍表单数据
    const newBook = reactive({
      category: '',
      url: '',
      title: ''
    })

    // 添加新书籍
    const addBook = () => {
      if (!newBook.title.trim()) {
        alert('请输入书名')
        return
      }

      // 建立分类到表名的映射
      const tableMapping: Record<string, string> = {
        书籍: 'BookData',
        小说: 'NovelData',
        游戏: 'GameData',
        影视: 'playlist',
        其他: 'others'
      }

      const tableName = tableMapping[newBook.category]
      if (!tableName) {
        alert('请选择有效的分类')
        return
      }

      // 构造符合要求的数据对象
      const newData = {
        id: SupabaseTool.generateUUID(), // 使用工具类中的方法
        title: newBook.title,
        url: newBook.url
      }

      // 插入数据
      SupabaseTool.InsertData(tableName, newData)
        .then(() => {
          // 清空表单
          newBook.title = ''
          newBook.url = ''
          newBook.category = ''

          // 重新加载数据
          GetAllList()
        })
        .catch(error => {
          console.error('插入失败:', error)
          alert('插入失败: ' + error.message)
        })
    }
    const GetlocalStorage = async () => {
      BookData.value = JSON.parse(
        localStorage.getItem('cache_BookData') || '[]'
      )
      NovelData.value = JSON.parse(
        localStorage.getItem('cache_NovelData') || '[]'
      )
      GamesData.value = JSON.parse(
        localStorage.getItem('cache_GamesData') || '[]'
      )

      // 检查是否有数据为空
      const hasEmptyData =
        BookData.value.length === 0 ||
        NovelData.value.length === 0 ||
        GamesData.value.length === 0

      // 如果有任何数据为空，从数据库重新加载
      if (hasEmptyData) {
        console.log('部分缓存数据为空，从数据库加载...')
        await GetAllList()
      }
    }
    const GetAllList = async () => {
      clearAllCache()
      // 获取标签数据
      const tagData = await SupabaseTool.GetAllData('Tag')
      localStorage.setItem('cache_Tag', JSON.stringify(tagData))

      // 处理每个分类
      for (const item of tagData || '[]') {
        // 获取该分类的数据
        const data = await SupabaseTool.GetAllData(item.TagUs)
        // 对数据进行倒序排列（最新添加的在前）
        const reversedData = [...data].reverse()
        // 根据分类类型存储数据
        if (item.TextCn === '书籍') {
          BookData.value = reversedData

          localStorage.setItem('cache_BookData', JSON.stringify(reversedData))
        } else if (item.TextCn === '小说') {
          NovelData.value = reversedData
          localStorage.setItem('cache_NovelData', JSON.stringify(reversedData))
        } else if (item.TextCn === '游戏') {
          GamesData.value = reversedData
          localStorage.setItem('cache_GamesData', JSON.stringify(reversedData))
        } else if (item.TextCn === '音乐') {
          MusicsData.value = reversedData
          localStorage.setItem('cache_MusicsData', JSON.stringify(reversedData))
        } else if (item.TextCn === '影视') {
          playlist.value = reversedData
          localStorage.setItem('cache_playlist', JSON.stringify(reversedData))
        } else if (item.TextCn === '其他') {
          others.value = reversedData
          localStorage.setItem('cache_others', JSON.stringify(reversedData))
        }
      }
    }
    const DeleteData = async (Table: string, title: string) => {
      SupabaseTool.DeleteData(Table, 'title', title)
        .then(res => {
          console.log(res)
          GetAllList()
        })
        .catch(err => {
          window.alert('删除失败' + err.message)
        })
    }
    const InsertData = async (table: string, newData: any[]) => {
      SupabaseTool.InsertData(table, newData)
        .then(res => {
          console.log(res)
          GetAllList()
        })
        .catch(err => {
          window.alert('删除失败' + err.message)
        })
    }

    const GetCollectArtcle = (id: string) => {
      router.push({ name: 'CollectArtcle', query: { id: id } })
    }

    // 清理所有缓存
    const clearAllCache = () => {
      localStorage.removeItem('cache_Tag')
      localStorage.removeItem('cache_BookData')
      localStorage.removeItem('cache_NovelData')
      localStorage.removeItem('cache_GamesData')
      console.log('所有缓存已清理')
    }
    //定一小时刷新一次
    const setupAutoRefresh = () => {
      if (refreshTimer.value) {
        clearInterval(refreshTimer.value)
        refreshTimer.value = null
      }

      refreshTimer.value = setInterval(
        () => {
          // 检查网络连接
          if (navigator.onLine) {
            console.log('网络连接正常，自动刷新数据...')
            GetAllList()
          } else {
            console.log('网络断开，跳过刷新')
          }
        },
        60 * 60 * 1000
      ) // 1小时
    }
    onMounted(() => {
      GetlocalStorage()
      setupAutoRefresh()
    })
    return {
      BookData,
      NovelData,
      GamesData,
      MusicsData,
      others,
      playlist,
      InsertData,
      DeleteData,
      GetCollectArtcle,
      newBook,
      addBook
    }
  }
})
</script>

<style scoped>
.page-top-card {
  background-size: cover;
  border: 1px solid #fff;
  background-position: center;
  height: 20rem;
  padding: 10px 2.7rem;
  border-radius: 20px;
  color: #fff;
  position: relative;
  background-color: #333;
  margin-bottom: 1.5rem;
  background-image: url(https://raw.githubusercontent.com/3309446352/Images/main/img/Snipaste_2023-03-19_17-56-24.png);
}
.row {
  display: flex;
  gap: 14px;
  align-items: center;
  flex-wrap: wrap;
}
.input {
  flex: 1;
  min-width: 160px;
  padding: 10px 12px;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.08);
  background-color: #58595d;
  outline: none;
}
.btn {
  appearance: none;
  border: none;
  cursor: pointer;
  padding: 10px 14px;
  border-radius: 12px;
  font-weight: 600;
  background: #5b9cff;
}
span.content-item-title {
  font-size: 2.3em;
  font-weight: 700;
  line-height: 1.2;
}
.content-bottom {
  display: flex;
  -o-box-pack: justify;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  width: calc(100% - 5.4rem);
  bottom: 1rem;
}

.collect-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: left;
  gap: 55px;
}
.collect_box {
  width: 200px;
  height: 250px;
  background-size: cover; /* 确保背景图覆盖整个区域 */
  background-position: center; /* 让背景图居中显示，效果更好 */
  border-radius: 11px;
  position: relative; /* 为遮罩层的绝对定位提供参考 */
  /* 移除之前的 filter: brightness(0.7); */
}

/* 新增遮罩层样式 */
.dark-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3); /* 黑色，60%透明度 */
  border-radius: 11px; /* 确保遮罩层也有圆角 */
}

.collect_content .collect_top {
  position: relative; /* 建立新的堆叠上下文，确保内容位于遮罩层之上 */
  z-index: 1; /* 确保内容显示在遮罩层之上 */
}

.collect-list span {
  color: #fff;
  text-shadow: 0 0 5px rgba(0, 0, 0, 0.8); /* 微调阴影颜色，增强在深色背景上的可读性 */
  text-align: center;
  font-weight: bold;
}

.collect .collect-list .collect_box {
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  position: relative;
  padding: 10px;
  color: #fff;
}
.collect .collect-list .collect_box .collect_content span {
  display: block;
  font-size: 18px;
  font-weight: 700;
  white-space: nowrap;
}
.collect .collect-list .collect_box .collect_top {
  display: flex;
  z-index: 1;
  justify-content: space-between;
}
.collect .collect-list .collect_box .collect_content {
  z-index: 1;
  margin-top: 86%;
}
</style>
