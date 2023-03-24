<template>
  <v-btn block color="orange" href="https://square.link/u/cOpETrkj"> Check Out with Square </v-btn>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'SquareCheckOut',

  setup() {
    return {}
  },
  emits: {},
  methods: {
    checkout() {
      alert('Square Payment Made')

      //  this.$emit('non-declared-event') // Type error!
    }
  }
})
</script>