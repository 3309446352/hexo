<template>
  <div>
    <div class="post-header">
      <Breadcrumbs :current="pageTitle" />
      <h1 class="post-title text-white uppercase">{{ pageTitle }}</h1>
    </div>

    <div class="bg-ob-deep-800 rounded-2xl shadow-xl block" style="padding-top: 1rem;padding-bottom: 1rem;padding-left: 2.5rem;padding-right: 2.5rem;">
      <blockquote @click="ChangeComponent">
        <p>生命不息，追番不止！</p>
      </blockquote>
      <component :is="choseComponent"></component>
    </div>
    <Comment :title="pageData.title" :body="pageData.text" :uid="pageData.uid" />
  </div>
</template>

<script>
import { defineComponent, onMounted, ref } from 'vue'
import Breadcrumbs from '@/components/Breadcrumbs.vue'
import BliBliData from '@/components/BangumiData/BliBliData.vue'
import BangumisData from '@/components/BangumiData/BangumisData.vue'
import { Page } from '@/models/Article.class'
import Comment from '@/components/Comment.vue'

export default defineComponent({
  name: 'BanGumis',
  components: { Comment, BangumisData, BliBliData, Breadcrumbs },
  setup() {
    const choseComponent = ref('BangumisData')
    function ChangeComponent() {
      choseComponent.value =
        choseComponent.value === 'BangumisData' ? 'BangumisData' : 'BliBliData'
    }
    const pageTitle = '追番'
    const pageData = ref(new Page())
    onMounted(() => {
    })
    return {
      pageTitle,
      ChangeComponent,
      choseComponent,
      pageData
    }
  }
})
</script>

<style>
blockquote{
  margin: 0 0 20px;
  padding: 12px 15px;
  border-left: 3px solid #49b1f5;
  background-color: #ecf7fe;
  color: #77818a;
  border-radius: 10px;
}
</style>



