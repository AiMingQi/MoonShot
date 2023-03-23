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
        <v-btn block color="orange">Checkout with Square</v-btn>
      </v-card>
    </v-row>
  </v-container>
</template>


  <script>
export default {
  data: () => ({
    messages: [
      {
        from: 'Package',
        type: 'Economy',
        color: 'deep-purple-lighten-1',
        price: '$10,000'
      },
      {
        from: 'Add-On',
        type: 'Suit Upgrade',
        price: '$1,000',
        color: 'green'
      },
      {
        from: 'Add-On',
        type: 'Personal Photographer',
        price: '$2,000',
        color: 'green'
      },
      {
        from: 'Total',
        price: '$13,000',
        color: 'deep-purple-lighten-1'
      }
    ]
  })
}
</script>