<template>
  <v-container>
    <v-row>
      <v-col cols="12" lg="6" md="6" sm="12">
        <v-card class="text-center">
          <v-card-title> Economy Class </v-card-title>
          <v-card-subtitle> Price: $19,999 </v-card-subtitle>
          <v-card-actions>
            <v-btn @click="orderEconomy" block color="orange"> Select Economy Class</v-btn>
          </v-card-actions>
          <v-card-text>
            <v-img
              src="https://firebasestorage.googleapis.com/v0/b/moonshot-dc8a7.appspot.com/o/economy-class.png?alt=media&token=f9d1dfcd-0ce8-49bc-b610-75ed6bc47167"
              class="w-75 mx-auto"
            >
            </v-img>
          </v-card-text>
          <v-card-text>
            <h3>Comfortable Accommodations to Carry you to the Moon</h3>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="12" lg="6" md="6" sm="12">
        <v-card class="text-center">
          <v-card-title> First Class </v-card-title>
          <v-card-subtitle> <h2 class="mb-2">Price: $50,000</h2> </v-card-subtitle>
          <PaymentForm />
          <v-card-text>
            <v-img
              src="https://firebasestorage.googleapis.com/v0/b/moonshot-dc8a7.appspot.com/o/first-class.png?alt=media&token=89b9c0ec-e204-4644-afd8-89bb9dadc10c"
              class="w-75 mx-auto"
            >
            </v-img>
          </v-card-text>
          <v-card-text>
            <h3>Exclusive Accommodations to Carry you to the Moon</h3>
            <br />
            <h3>Also Includes Suit Upgrade and AI Photographer</h3>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import PaymentForm from '../components/PaymentForm.vue'
import router from '../router'
import { mapGetters } from 'vuex'

export default defineComponent({
  name: 'SquareCheckOut',
  components: {
    PaymentForm
  },

  setup() {
    const orderEconomy = () => {
      router.push('/addons')
    }
    return { orderEconomy }
  },
  computed: {
    ...mapGetters(['packages'])
  },
  methods: {
    checkout() {
      alert('Square Payment Made')

      //  this.$emit('non-declared-event') // Type error!
    }
  }
})
</script>