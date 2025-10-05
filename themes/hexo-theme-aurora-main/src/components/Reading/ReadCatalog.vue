<template>
  <div class="container">
    <div class="card">
      <div class="row" style="margin-bottom: 10px">
        <input
          v-model="newBook.title"
          class="input"
          placeholder="书名（必填）"
        />
        <input v-model="newBook.author" class="input" placeholder="作者" />
        <input
          v-model.number="newBook.progress"
          type="number"
          min="0"
          max="100"
          class="input"
          placeholder="进度 %"
        />
        <button class="btn" @click="addBook">添加</button>
      </div>
      <table class="table" id="logTable" aria-label="读书记录表">
        <thead>
          <tr class="meta">
            <th>书名</th>
            <th>作者</th>
            <th style="width: 220px">进度</th>
            <th>状态</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(book, index) in bookList" :key="index">
            <td>{{ book.title }}</td>
            <td class="meta">{{ book.author }}</td>
            <td>
              <div class="bar" :title="`${book.progress}%`">
                <span :style="{ width: book.progress + '%' }"></span>
              </div>
            </td>
            <td class="text-center">{{ getStatusText(book.progress) }}</td>
            <td class="btn-button flex justify-around">
              <button class="btn ghost" @click="changeProgress(index, 10,book.id,book.progress)">
                +10%
              </button>
              <button class="btn ghost" @click="changeProgress(index, -10,book.id,book.progress)">
                -10%
              </button>
              <button
                class="btn ghost danger"
                @click="deleteBook(index, book.title)"
                style="border-color: rgba(255, 114, 114, 0.3); color: #ffb6b6"
              >
                删除
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <p class="meta">
        提示：数据仅保存在你的浏览器本地（localStorage），清空缓存会丢失。
      </p>
    </div>
    <br />
    <div class="grid" style="display: flex; gap: 18px">
      <div class="card">
        <h3 style="font-size: 18px">建议阅读路径</h3>
        <ol>
          <li>《傲慢与偏见》→ 结构与对话</li>
          <li>《了不起的盖茨比》→ 象征与意象</li>
          <li>《1984》→ 主题与世界观</li>
          <li>《红楼梦》→ 人物群像与语言之美</li>
        </ol>
      </div>
      <div class="card">
        <h3>读后复盘卡</h3>
        <ul>
          <li>这本书的核心冲突是什么？</li>
          <li>最打动你的 3 个细节。</li>
          <li>若删去一章，你会删哪里？为什么？</li>
          <li>一句话推荐给朋友。</li>
        </ul>
      </div>
      <div class="card">
        <h3>输出清单</h3>
        <p>每读完一本，至少做一件：</p>
        <ul>
          <li>写 800 字书评（结构：问题-证据-观点）。</li>
          <li>拆解 1 段描写并仿写 150 字。</li>
          <li>摘录 5 句金句并写注释。</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive, onMounted } from 'vue'
import SupabaseTool from '@/Supabase/SupabaseTool'
import { data } from 'autoprefixer'

interface Book {
  id: string
  title: string
  author: string
  progress: number
}

export default defineComponent({
  name: 'ReadingLog',
  setup() {
    // 响应式数据：书籍列表
    const bookList = ref<Book[]>([])
    const refreshTimer = ref<NodeJS.Timeout | null>(null)
    // 新书籍表单数据
    const newBook = reactive({
      title: '',
      author: '',
      progress: 0
    })

    const GetlocalStorageReadProgress = () => {
      bookList.value = JSON.parse(localStorage.getItem('ReadProgress') || '[]')
      if (bookList.value.length == 0) {
        GetReadProgress()
      }
    }
    const GetReadProgress = () => {
      localStorage.removeItem('ReadProgress')
      SupabaseTool.GetAllData('ReadProgress')
        .then((data: any) => {
          data.forEach((item: any) => {
            bookList.value.push({
              id: item.id,
              title: item.title,
              author: item.author,
              progress: item.progress
            })
            localStorage.setItem('ReadProgress', JSON.stringify(data))
          })
        })
        .catch(error => {
          console.error('加载失败:', error)
          alert('加载失败: ' + error.message)
        })
    }
    // 添加新书籍
    const addBook = () => {
      if (!newBook.title.trim()) {
        alert('请输入书名')
        return
      }
      bookList.value.push({
        title: newBook.title,
        author: newBook.author,
        progress: newBook.progress
      })
      SupabaseTool.InsertData('ReadProgress', newBook)
        .then(() => {
          // 清空表单
          newBook.title = ''
          newBook.author = ''
          newBook.progress = 0
          // 重新加载数据
        })
        .catch(error => {
          console.error('插入失败:', error)
          alert('插入失败: ' + error.message)
        })
    }

    // 修改阅读进度
    const changeProgress = (
      index: number,
      change: number,
      id: string,
      progress: number
    ) => {
      const book = bookList.value[index]
      book.progress = Math.max(0, Math.min(100, book.progress + change))
      SupabaseTool.UpdateData(
        'ReadProgress',
        { id: id },
        { progress: progress }
      )
    }

    // 删除书籍
    const deleteBook = (index: number, title: string) => {
      if (confirm('确定要删除这本书吗？')) {
        bookList.value.splice(index, 1)
        SupabaseTool.DeleteData('ReadProgress', 'title',title)
      }
    }

    // 获取状态文本
    const getStatusText = (progress: number) => {
      if (progress === 0) return '未开始'
      if (progress < 100) return `进行中 ${progress}%`
      return '已完成'
    }

    // 设置定时刷新
    const setupAutoRefresh = () => {
      if (refreshTimer.value) {
        clearInterval(refreshTimer.value)
        refreshTimer.value = null
      }

      refreshTimer.value = setInterval(() => {
          // 检查网络连接
          if (navigator.onLine) {
            console.log('网络连接正常，自动刷新数据...')
            GetReadProgress()
          } else {
            console.log('网络断开，跳过刷新')
          }
        },
        60 * 60 * 1000
      ) // 1小时
    }
    onMounted(() => {
      GetlocalStorageReadProgress()
      // 设置定时刷新
      setupAutoRefresh()
    })
    return {
      bookList,
      newBook,
      addBook,
      changeProgress,
      deleteBook,
      getStatusText
    }
  }
})
</script>

<style scoped>
.container {
}
.grid .card {
  width: 100%;
}
.card {
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 16px;
  padding: 18px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.35);
  margin: 15px;
  background: var(--background-secondary)
    linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.035),
      rgba(255, 255, 255, 0.02));

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
.table {
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 10px;

}
.meta {
  color: #9fb1d1;
  font-size: 13px;
}
.bar {
  height: 10px;
  border-radius: 999px;
  background: #1f2a44;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.06);
}
.bar > span {
  display: block;
  height: 100%;
  background: linear-gradient(90deg, #4ade80, #22d3ee);
}
@media (max-width: 920px) {
  .cols-3 {
    grid-template-columns: 1fr 1fr;
  }
}
.card h3 {
  margin: 0.2rem 0 0.4rem;
  font-size: 18px;
}
.btn.ghost {
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.12);
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
.danger {
  color: #ffb6b6;
}
.btn-button{
  display: flex;
  gap: 12px;
}
</style>
