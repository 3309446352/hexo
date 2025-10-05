<template>
  <div>
    <div class="card">
      <div class="row" style="margin-bottom: 10px">
        <input v-model="NewFamousQuote.sentence" class="input" placeholder="名言警句" />
        <input v-model="NewFamousQuote.celebrity" class="input" placeholder="作者" />
        <input v-model="NewFamousQuote.Book_name" class="input" placeholder="书籍名称" />
        <button class="btn" @click="addBook">添加</button>
      </div>
    </div>
    <h2 id="quotes-title">作家名言 · 精选</h2>
    <div class="grid cols-2">
      <div class="card flex justify-between" v-for="(item, index) in QuotesCard" :key="index">
        <blockquote>
          <p>"{{ item.sentence }}"</p>
          <footer>—— {{ item.celebrity }}，{{ item.Book_name }}</footer>
        </blockquote>
        <span @click="DeleteData('FamousQuote', item.sentence)">
          <SvgIcon
            icon-class="delete"
            height="1.25rem"
            width="1.25rem"
            fill="var(--text-normal)"
            stroke="var(--text-normal)"
          />
        </span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive, ref } from 'vue'
import SupabaseTool from '@/Supabase/SupabaseTool'
import SvgIcon from '@/components/SvgIcon/index.vue'
export default defineComponent({
  name: 'ReadCard',
  components: { SvgIcon },
  setup() {
    const QuotesCard = ref([])
    const NewFamousQuote = reactive({
      sentence: '',
      celebrity: '',
      Book_name: ''
    })
    const GetlocalStorage = async () => {
      const FamousQuoteData = JSON.parse(
        localStorage.getItem('FamousQuote') || '[]'
      )
      QuotesCard.value = FamousQuoteData
      if (FamousQuoteData) {
        await GetFamousQuote()
      }
    }
    // 添加新书籍
    const addBook = () => {
      // 新书籍表单数据
      if (!NewFamousQuote.Book_name.trim()) {
        alert('请输入书名')
        return
      }
      const newData = {
        id: SupabaseTool.generateUUID(), // 使用工具类中的方法
        sentence: NewFamousQuote.sentence,
        celebrity: NewFamousQuote.celebrity, // 根据需求，author字段使用封面URL
        Book_name: NewFamousQuote.Book_name
      }
      SupabaseTool.InsertData('FamousQuote', newData)
        .then(() => {
          // 重新加载数据
          GetFamousQuote()
        })
        .catch(error => {
          console.error('插入失败:', error)
          alert('插入失败: ' + error.message)
        })

      // 清空表单
      NewFamousQuote.sentence = ''
      NewFamousQuote.celebrity = ''
      NewFamousQuote.Book_name = ''
    }

    const GetFamousQuote = async () => {
      SupabaseTool.GetAllData('FamousQuote')
        .then((res: any) => {
          QuotesCard.value = [...res].reverse()
          localStorage.setItem('FamousQuote', JSON.stringify(QuotesCard.value))
        })
        .catch()
    }

    const DeleteData = async (Table: string, title: string) => {
      SupabaseTool.DeleteData(Table, 'sentence', title)
        .then(res => {
          console.log(res)
          GetFamousQuote()
        })
        .catch(err => {
          window.alert('删除失败' + err.message)
        })
    }
    onMounted(() => {
      GetlocalStorage()
    })
    return {
      addBook,
      GetFamousQuote,
      QuotesCard,
      NewFamousQuote,
      DeleteData
    }
  }
})
</script>

<style scoped>
h2 {
  display: block;
  font-size: 1.5em;
  margin-block-start: 0.83em;
  margin-block-end: 0.83em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: bold;
  unicode-bidi: isolate;
}

.cols-2 {
  grid-template-columns: repeat(2, 1fr);
}

.grid {
  display: grid;
  gap: 18px;
}
.card {
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.035),
    rgba(255, 255, 255, 0.02)
  );
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 16px;
  padding: 18px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.35);
}
blockquote {
  margin: 0;
  padding: 14px 16px;
  border-left: 4px solid #5b9cff;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 12px;
}
p {
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0;
  margin-inline-end: 0;
  unicode-bidi: isolate;
}
footer {
  border-top: 1px solid rgba(255, 255, 255, 0.06);
  background: rgba(255, 255, 255, 0.02);
  padding: 18px 0;
  color: #9fb1d1;
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
</style>
