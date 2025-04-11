import { defineStore } from 'pinia'

export const usePlayerStore = defineStore({
  // id is the name of the store
  // it is used in devtools and allows restoring state
  id: 'PlayerStore',
  state: () => ({
    Music: {
      Server: localStorage.getItem('musicServer') || 'netease',
      type: localStorage.getItem('musicType') || 'playlist',
      Id: Number(localStorage.getItem('musicId')) || 13539075345
    }
  }),
  getters: {
    GetMusic: state => {
      return state.Music
    }
  },

  actions: {
    GetPlyer(server: string, type: string, id: number) {
      this.Music.Server = server
      this.Music.type = type
      this.Music.Id = id
      localStorage.setItem('musicServer', server)
      localStorage.setItem('musicType', type)
      localStorage.setItem('musicId', String(id))
      console.log(this.Music)
      return this.Music
    }
  }
})
