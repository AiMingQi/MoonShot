<template>
  <v-container>
    <v-row justify="space-around">
      <v-card width="400">
        <v-img
          height="350"
          src="https://firebasestorage.googleapis.com/v0/b/moonshot-dc8a7.appspot.com/o/moon-traveler.png?alt=media&token=81a7548d-3839-4501-b686-557375ce6628"
          cover
          class="text-white"
        >
          <v-toolbar color="rgba(0, 0, 0, 0)" theme="dark">
            <v-toolbar-title class="text-h6"> Checkout </v-toolbar-title>
          </v-toolbar>
        </v-img>

        <v-card-text>
          <div class="font-weight-bold ms-1 mb-2">Selections</div>

          <v-timeline density="compact" align="start">
            <v-timeline-item
              v-for="message in messages"
              :key="message.time"
              :dot-color="message.color"
              size="x-small"
            >
              <div class="mb-1">
                <div class="font-weight-normal">
                  <strong>{{ message.from }}</strong> {{ message.type }}
                </div>
                <div>Price: {{ message.price }}</div>
              </div>
            </v-timeline-item>
          </v-timeline>
        </v-card-text>
        <PaymentForm />
      </v-card>
    </v-row>
  </v-container>
</template>


  <script>
import PaymentForm from '@/components/PaymentForm.vue'
export default {
  components: {
    PaymentForm
  },
  data: () => ({
    messages: [
      {
        from: 'Package',
        type: 'Luxury',
        color: 'deep-purple-lighten-1',
        price: '$50,000'
      },
      {
        from: 'Add-On',
        type: 'Suit Upgrade',
        price: 'Included',
        color: 'green'
      },
      {
        from: 'Add-On',
        type: 'AI Photographer',
        price: 'Included',
        color: 'blue'
      },
      {
        from: 'Total',
        price: '$50,000',
        color: 'deep-purple-lighten-1'
      }
    ]
  })
}
</script>