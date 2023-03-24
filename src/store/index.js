import { createStore } from 'vuex'

export default createStore({
  state: {
    products: [
      {
        id: 1,
        name: "Economy Class",
        price: "$19,999",
        imageUrl: "https://firebasestorage.googleapis.com/v0/b/moonshot-dc8a7.appspot.com/o/economy-class.png?alt=media&token=f9d1dfcd-0ce8-49bc-b610-75ed6bc47167",
        description: "Comfortable Accommodations to Carry you to the Moon",
        type: "package"
      },
      {
        id: 2,
        name: "Luxury Class",
        price: "$50,000",
        imageUrl: "https://firebasestorage.googleapis.com/v0/b/moonshot-dc8a7.appspot.com/o/first-class.png?alt=media&token=89b9c0ec-e204-4644-afd8-89bb9dadc10c",
        description: "Exclusive Accommodations to Carry you to the Moon. *Also Includes Suit Upgrade and AI Photographer", 
        type: "package"
      },
      {
        id: 3,
        name: "Basic Suit",
        price: "$1,999",
        imageUrl: "https://firebasestorage.googleapis.com/v0/b/moonshot-dc8a7.appspot.com/o/basic-suit.png?alt=media&token=bc90a2b9-b215-47ce-ad98-553223c36777",
        description: "Comfortable Suit to Protect you on the Moon", 
        type: "addon"
      },
      {
        id: 4,
        name: "Luxury Suit",
        price: "$2999",
        imageUrl: "https://firebasestorage.googleapis.com/v0/b/moonshot-dc8a7.appspot.com/o/upgrade-suit.png?alt=media&token=6834369a-0e57-487f-b3e6-9979e145c668",
        description: "High Tech Advanced Suit to Protect you on the Moon",
        type: "addon"
      },
      {
        id: 5,
        name: "AI Photographer",
        price: "$199",
        imageUrl: "https://firebasestorage.googleapis.com/v0/b/moonshot-dc8a7.appspot.com/o/photographer.png?alt=media&token=74b5e190-dde6-4ed1-9591-ff622e3f638e",
        description: "Your own Personal AI Photographer to document your entire journey",
        type: "addon"
      },
    ]
  },
  getters: {
    packages (state) {
      return state.products.filter(product => product.type == "package")
    },
    addons (state) {
      return state.products.filter(product => product.type == "addon")
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
