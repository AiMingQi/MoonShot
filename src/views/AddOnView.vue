<template>
  <v-container>
    <v-row>
      <v-col cols="12" lg="4" md="4" sm="12" v-for="addon in addons" :key="addon.id">
        <v-card class="text-center">
          <v-card-title> {{ addon.name }} </v-card-title>
          <v-card-subtitle> Price: {{ addon.price }} </v-card-subtitle>
          <v-card-actions>
            <v-btn block color="orange"> Select Basic Suit</v-btn>
          </v-card-actions>
          <v-card-text>
            <v-img :src="addon.imageUrl" class="w-75 mx-auto"> </v-img>
          </v-card-text>
          <v-card-text>
            <h3>{{ addon.description }}</h3>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import router from '../router'
import { mapGetters } from 'vuex'

export default defineComponent({
  name: 'SquareCheckOut',

  setup() {
    const orderEconomy = () => {
      router.push('/addons')
    }
    return { orderEconomy }
  },
  computed: {
    ...mapGetters(['addons'])
  },
  methods: {
    checkout() {
      alert('Square Payment Made')

      //  this.$emit('non-declared-event') // Type error!
    }
  }
})
</script>