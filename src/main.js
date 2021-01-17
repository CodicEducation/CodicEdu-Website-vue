import Vue from "vue"
import App from "./App.vue"
import "./registerServiceWorker"
import router from "./router"
import store from "./store"
import firebase from "firebase/app"

const firebaseConfig = {
  apiKey: "AIzaSyAlJAmR-tOK-2BFHu3IHvGdez39XUNvfMY",
  authDomain: "codic-83234.firebaseapp.com",
  projectId: "codic-83234",
  storageBucket: "codic-83234.appspot.com",
  messagingSenderId: "468243388891",
  appId: "1:468243388891:web:c96f6c4ba2edff3030effe",
  measurementId: "G-VVSL1TZEED",
  datanaseURL: "https://codic.firebaseio.com",
}

firebase.initializeApp(firebaseConfig)

firebase.auth().onAuthStateChanged((user) => {
  if (!user) {
    router.push("/signup")
  } else {
    store.dispatch("saveUid", user.uid)
    router.push("/")
  }
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app")
