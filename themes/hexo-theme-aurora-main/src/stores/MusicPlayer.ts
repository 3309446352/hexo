import { defineStore } from 'pinia'

export const usePlayerStore = defineStore({
  id: 'PlayerStore',
  state: () => {
    const apiurl = localStorage.getItem('musicApiurl') || 'https://api.moeyao.cn/meting/'
    localStorage.setItem('musicApiurl', apiurl)
    return {
      showAplayer: localStorage.getItem('showAplayer') !== 'false',
      Music: {
        Apiurl: apiurl,
        Server: localStorage.getItem('musicServer') || 'netease',
        type: localStorage.getItem('musicType') || 'playlist',
        Id: Number(localStorage.getItem('musicId')) || 13539075345
      }
    }
  },
  getters: {
    GetMusic: (state) => state.Music
  },
  actions: {
    toggleAplayer() {
      this.showAplayer = !this.showAplayer
      localStorage.setItem('showAplayer', String(this.showAplayer))
    },
    GetPlayer(server: string | null, type: string | null, id: number | null, url: string | null) {
      const finalServer = server ?? this.Music.Server
      const finalType = type ?? this.Music.type
      const finalId = id ?? this.Music.Id
      const finalApiurl = url ?? this.Music.Apiurl

      this.Music.Server = finalServer
      this.Music.type = finalType
      this.Music.Id = finalId
      this.Music.Apiurl = finalApiurl

      localStorage.setItem('musicServer', finalServer)
      localStorage.setItem('musicType', finalType)
      localStorage.setItem('musicId', String(finalId))
      localStorage.setItem('musicApiurl', finalApiurl)
      return this.Music
    }
  }
})