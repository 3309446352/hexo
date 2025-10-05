<template>
  <div class="collect-list">
    <div
      v-for="(item, index) in Data"
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
        <span @click="DeleteData(<string>Id, item.title)">
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
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import SupabaseTool from '@/Supabase/SupabaseTool'
import SvgIcon from '@/components/SvgIcon/index.vue'
import { useRoute } from 'vue-router'
export default defineComponent({
  name: 'CollectArticle',
  components: { SvgIcon },
  setup() {
    const route = useRoute()
    const Id = route.query.id
    const Data = ref([])
    const GetAllList = async () => {
      console.log('路由参数', route.query.id)
      const Id = route.query.id
      Data.value = JSON.parse(localStorage.getItem('cache_' + Id) || '')
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
    onMounted(() => {
      GetAllList()
    })
    return {
      Id,
      Data,
      DeleteData
    }
  }
})
</script>

<style scoped>
.collect-list {
  display: flex;
  flex-wrap: wrap;
  justify-items: left;
  justify-content: space-between;
  gap: 12px;
}
.collect_box {
  width: 200px;
  height: 250px;
  background-size: cover; /* 确保背景图覆盖整个区域 */
  //background-position: center; /* 让背景图居中显示，效果更好 */
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
  background-color: rgba(0, 0, 0, 0.1); /* 黑色，60%透明度 */
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

.collect_content span {
  display: block;
  font-size: 18px;
  font-weight: 700;
  white-space: nowrap;
}
.collect_top {
  display: flex;
  z-index: 1;
  justify-content: space-between;
}
.collect_content {
  z-index: 1;
  margin-top: 86%;
}
</style>
