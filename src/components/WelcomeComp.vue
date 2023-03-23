<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <h1 class="text-green display-2 font-weight-bold">Welcome to MoonShot</h1>
        <h4 class="mb-2">Taking normal travellers to the Moon</h4>
        <v-btn class="my-2" color="primary" to="/packages">Get Started</v-btn>
        <v-img
          src="https://firebasestorage.googleapis.com/v0/b/moonshot-dc8a7.appspot.com/o/human-moon.png?alt=media&token=e4e5d6a0-fcdd-4c2d-9fb4-82957d08abab"
          contain
          height="512"
        />
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
