<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" class="pa-2">
      <v-img
        src="https://firebasestorage.googleapis.com/v0/b/moonshot-dc8a7.appspot.com/o/human-moon.png?alt=media&token=e4e5d6a0-fcdd-4c2d-9fb4-82957d08abab"
        class="my-3 w-100"
        contain
      />
      <v-btn class="my-2" color="primary" to="/packages" block prepend-icon="mdi-moon-new"
        >Packages</v-btn
      >
      <v-btn class="my-2" color="secondary" to="/addons" block prepend-icon="mdi-moon-full"
        >Add-Ons</v-btn
      >
      <v-btn class="my-2" color="orange" to="/cart" block prepend-icon="mdi-cart">Checkout</v-btn>
    </v-navigation-drawer>

    <v-app-bar>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-app-bar-nav-icon to="/" icon="mdi-home"> </v-app-bar-nav-icon>
      <h2 class="ml-1">MoonShot</h2>
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
