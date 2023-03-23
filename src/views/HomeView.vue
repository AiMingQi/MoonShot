<template>
  <WelcomeView />
</template>

<script lang="ts">
import { defineComponent } from 'vue'

// Components
import WelcomeView from '../components/WelcomeComp.vue'

export default defineComponent({
  name: 'HomeView',

  components: {
    WelcomeView
  }
})
</script>
