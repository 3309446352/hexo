<template>
  <Dropdown>
    <div
      class="header-logo flex items-center self-stretch relative cursor-pointer hover:scale-110 transition-transform transform-gpu duration-500"
    >
      <span class="flex mr-3">
        <img
          v-if="themeConfig.site.author"
          :class="avatarClass"
          :src="themeConfig.site.logo || themeConfig.site.avatar"
          alt="site-logo"
        />
        <ob-skeleton v-else width="2rem" height="2rem" circle />
      </span>
      <div class="flex flex-col justify-center" @click="handleLogoClick">
        <span
          class="text-invert flex text-xl leading-tight text-white font-extrabold"
          v-if="themeConfig.site.author"
        >
          {{ themeConfig.site.author }}
        </span>
        <span
          v-else
          class="text-invert flex text-xl leading-tight text-white font-extrabold"
        >
          LOADING
        </span>
        <span
          class="text-invert font-extrabold text-[0.45rem] leading-tight uppercase text-white"
        >
          {{ themeConfig.site.nick || 'BLOG' }}
        </span>
      </div>
    </div>

    <DropdownMenu>
      <DropdownItem name="en" v-for="(item, index) in SvgList" :key="index">
        <div style="padding: 0 40px 0 40px">
          <SvgIcon
            :icon-class="item.icon"
            width="1.2rem"
            height="1.2rem"
            class="-mb-0.5"
            stroke="currentColor"
          />
          <span style="font-size: 18px">{{ item.name }}</span>
        </div>
      </DropdownItem>
    </DropdownMenu>
  </Dropdown>
</template>

<script lang="ts">
import { useAppStore } from '@/stores/app'
import { computed, defineComponent } from 'vue'
import { useRouter } from 'vue-router'
import { Dropdown, DropdownItem, DropdownMenu } from '@/components/Dropdown'
import SvgIcon from '@/components/SvgIcon/index.vue'

export default defineComponent({
  name: 'ArLogo',
  components: { SvgIcon, DropdownItem, DropdownMenu, Dropdown },
  setup() {
    const appStore = useAppStore()
    const router = useRouter()

    const handleLogoClick = () => {
      router.push('/')
    }
    const SvgList =[
      {
        name: 'docker',
        icon: 'Docker'
      }
    ]
    return {
      handleLogoClick,
      SvgList,
      avatarClass: computed(() => {
        return {
          'logo-image': true,
          [appStore.themeConfig.theme.profile_shape]: true
        }
      }),
      themeConfig: computed(() => appStore.themeConfig)
    }
  }
})
</script>

<style lang="scss">
.logo-image {
  @apply w-8 h-8 scale-125;
  transition: 0.3s all ease;
}

.header-active {
  .logo-image {
    @apply scale-100;
  }
}
</style>
