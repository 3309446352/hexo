<template>
  <Breadcrumbs :current="pageTitle" />
  <div class="post-header">
    <h1 class="post-title text-white uppercase">{{ pageTitle }}</h1>
  </div>
  <div class="photos">
    <img v-for="item in photoshopping" :key="item.url" :src="item.url" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Breadcrumbs from '@/components/Breadcrumbs.vue'
import usePageTitle from '@/hooks/usePageTitle'

export default defineComponent({
  name: 'PhotoImg',
  components: { Breadcrumbs },
  setup() {
    const photoshopping = [
      {
        url: 'https://raw.githubusercontent.com/3309446352/Images/main/img/Triss%20The%20Witcher%202560x1440%202K%20Fix.jpg'
      },
      {
        url: 'https://raw.githubusercontent.com/3309446352/Images/main/img/冰公主.jpg'
      },
      {
        url: 'https://raw.githubusercontent.com/3309446352/Images/main/img/Fate.jpg'
      },
      {
        url: 'https://raw.githubusercontent.com/3309446352/Images/main/img/GnhfzKaWUAATl5P.webp'
      },
      {
        url: 'https://raw.githubusercontent.com/3309446352/Images/main/img/Gnm5SMpbAAAkjfJ.webp'
      },
      {
        url: 'https://raw.githubusercontent.com/3309446352/Images/main/img/四月是你的谎言.jpg'
      },
      {
        url: 'https://raw.githubusercontent.com/3309446352/Images/main/img/夏(♪).png'
      },
      {
        url: 'https://raw.githubusercontent.com/3309446352/Images/main/img/少年锦衣卫.jpg'
      }
    ]
    const pageTitle = '照片'
    return { photoshopping, pageTitle }
  }
})
</script>

<style scoped>
.photos{
  width: 100%;
  background-color: var(--background-secondary);
  border-radius: 20px;
  box-shadow: 0px 0px 49px 5px #ccc;
  padding: 10px;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  &:hover {
    border: 3px solid #188bfd;
  }
  img {
    width: 30%;
    height: 20%;
    object-fit: cover;
    border-radius: 10px;
    padding: 5px;
  }
}
</style>
