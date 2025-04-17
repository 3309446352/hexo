import { defineStore } from 'pinia'
import { fetchImplicitPageBySource } from '@/api'
import { Link, Page } from '@/models/Article.class'

export const useArticleStore = defineStore({
  // id is the name of the store
  // it is used in devtools and allows restoring state
  id: 'articleStore',
  state: () => ({
    showComponent: false,
    isVisible: false
  }),
  getters: {},
  actions: {
    async fetchArticle(
      source: string
    ): Promise<Page<Link[] | Record<string, Link[]>>> {
      const { data } = await fetchImplicitPageBySource(source)
      return new Promise(resolve =>
        setTimeout(() => {
          resolve(new Page(data))
        }, 200)
      )
    },
    toggleComponent() {
      this.showComponent = !this.showComponent
    },
    toggleIsVisible() {
      this.isVisible = !this.isVisible
      console.log('this.isVisible', this.isVisible)
    }
  }
})
