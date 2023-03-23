<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <h1 class="text-green display-2 font-weight-bold">Welcome to MoonShot</h1>
        <h4 class="mb-2">Taking normal travellers to the Moon</h4>
        <v-img src="src/assets/human-moon.png" contain height="512" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'WelcomeView',

  data() {
    return {}
  }
})
</script>
