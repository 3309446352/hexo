<template>
  <div class="QuotesCard">
    <div class="hero-card">
      <div>
        <h2>把阅读变成长期的「复利」</h2>
        <p>
          这里有世界名著的导读、实用写作技巧、精选作家名言，以及你的私人读书记录。内容常读常新，写作技巧可直接套用到博客、论文与文案。
        </p>
        <div class="cta">
          <a class="btn">开始读名著</a>
          <button class="btn ghost" @click="showComponent = !showComponent">
            管理读书记录
          </button>
        </div>
      </div>
      <div class="shine" aria-hidden="true"></div>
    </div>
    <br />
    <component :is="currentComponent"></component>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue'
import { ReadCard, ReadCatalog } from '@/components/Reading'
export default defineComponent({
  name: 'QuotesCard',
  components: { ReadCard, ReadCatalog },
  setup() {
    const showComponent = ref(true)
    // 根据 showComponentA 的值动态计算当前组件
    const currentComponent = computed(() => {
      return showComponent.value ? 'ReadCard' : 'ReadCatalog'
    })

    const toggleComponent = () => {
      showComponent.value = !showComponent.value
    }
    return {
      showComponent,
      toggleComponent,
      currentComponent
    }
  }
})
</script>
<style scoped lang="scss">
.hero-card {
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.04),
    rgba(255, 255, 255, 0.02)
  );
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 22px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.35);
  padding: 28px;
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 24px;
}
.shine {
  height: 100%;
  border-radius: 14px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background-image: url('https://raw.githubusercontent.com/3309446352/Images/main/img/Snipaste_2024-02-04_23-53-27.png');
  background-size: cover; /* 确保背景图覆盖整个区域 */
  background-position: center; /* 让背景图居中显示，效果更好 */
}
.cta {
  margin-top: 18px;
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}
.btn {
  appearance: none;
  border: none;
  cursor: pointer;
  padding: 10px 14px;
  border-radius: 12px;
  font-weight: 600;
  color: #0b0f14;
  background: #5b9cff;
  box-shadow: 0 6px 16px rgba(91, 156, 255, 0.35);
}

a {
  color: #5b9cff;
  text-decoration: none;
}
.btn.ghost {
  background: transparent;
  color: #e6eefc;
  border: 1px solid rgba(255, 255, 255, 0.12);
}
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
p {
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  unicode-bidi: isolate;
}
</style>
