<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" class="pa-2">
      <v-img src="src/assets/human-moon.png" class="my-3 w-100" contain />
      <v-btn class="my-1" color="primary" to="/packages" block prepend-icon="mdi-moon-new"
        >Packages</v-btn
      >
      <v-btn class="my-1" color="primary" to="/addons" block prepend-icon="mdi-moon-full"
        >Add-Ons</v-btn
      >
      <v-btn class="my-1" color="primary" to="/cart" block prepend-icon="mdi-cart">Checkout</v-btn>
    </v-navigation-drawer>

    <v-app-bar>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-app-bar-nav-icon to="/" icon="mdi-home"> </v-app-bar-nav-icon>
      <v-toolbar-title to="/">MoonShot</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn to="/cart" icon="mdi-cart"> </v-btn>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
    <v-footer app class="d-flex flex-column">
      &copy; {{ new Date().getFullYear() }} Mitchell Valentine <v-spacer></v-spacer>
      <a class="ml-2" href="https://singenuity.com" target="_blank" rel="noopener">
        Powered by Singenuity</a
      >
    </v-footer>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App',

  data() {
    return {
      drawer: false
    }
  }
})
</script>
