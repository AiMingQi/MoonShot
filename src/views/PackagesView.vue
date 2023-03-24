<template>
  <v-container>
    <v-row>
      <v-col cols="12" lg="6" md="6" sm="12">
        <v-card class="text-center">
          <v-card-title> Economy Class </v-card-title>
          <v-card-subtitle> Price: $19,999 </v-card-subtitle>
          <v-card-actions>
            <v-btn block color="orange"> Select Economy Class</v-btn>
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
          <v-card-subtitle> Price: $199,999 </v-card-subtitle>
          <v-card-actions>
            <v-btn block color="orange"> Select First Class</v-btn>
          </v-card-actions>
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
            <h3>Also Includes Personal Photographer</h3>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>