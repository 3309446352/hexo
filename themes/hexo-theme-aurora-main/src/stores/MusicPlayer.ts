import { defineStore } from 'pinia'

export const usePlayerStore = defineStore({
  // id is the name of the store
  // it is used in devtools and allows restoring state
  id: 'PlayerStore',
  state: () => ({
    Music: {
      Apiurl: localStorage.getItem('musicApiurl') ||'https://api.moeyao.cn/meting/'  || 'https://api.injahow.cn/meting/',
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
    GetPlayer( server: string | null, type: string | null, id: number | null, url: string | null) {
      // 使用空值合并运算符处理参数
      const finalServer = server ?? this.Music.Server
      const finalType = type ?? this.Music.type
      const finalId = id ?? this.Music.Id
      const finalApiurl: string = url ?? this.Music.Apiurl

      // 更新 state
      this.Music.Server = finalServer
      this.Music.type = finalType
      this.Music.Id = finalId
      this.Music.Apiurl = finalApiurl

      // 保存到 localStorage（自动转换类型）
      localStorage.setItem('musicServer', finalServer)
      localStorage.setItem('musicType', finalType)
      localStorage.setItem('musicId', String(finalId))
      localStorage.setItem('Apiurl', finalApiurl)
      console.log('Updated Music:', this.Music)
      return this.Music
    }
  }
})
