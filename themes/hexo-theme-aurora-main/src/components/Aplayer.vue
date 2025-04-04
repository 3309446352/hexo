<template>
  <div class="Aplayer">
    <meting-js
      server="netease"
      type="playlist"
      id="13539075345"
      fixed="true"
      autoplay="true"
      loop="all"
      order="list"
      preload="auto"
      list-folded="true"
      list-max-height="500px"
      lrc-type="1"
    >
    </meting-js>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: ' APlayer'
})
</script>

<style>
</style>
