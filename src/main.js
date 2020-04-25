import Vue from "vue"
import App from "./App.vue"
import "./registerServiceWorker"
import router from "./router"
import store from "./store"
import "./assets/css/tailwind.css"
import firebase from "firebase/app"
import "firebase/firestore"
import "firebase/auth"

Vue.config.productionTip = false

firebase.initializeApp({
  apiKey: "AIzaSyAYsvjjq-1pViLCoYsS-_pHMOtW-OhCKs0",
  authDomain: "wsearch-vue.firebaseapp.com",
  databaseURL: "https://wsearch-vue.firebaseio.com",
  projectId: "wsearch-vue",
  storageBucket: "wsearch-vue.appspot.com",
  messagingSenderId: "866451124616",
  appId: "1:866451124616:web:19f4050fc901c526628a3d",
  measurementId: "G-2L3Y2L2G95",
})

export const db = firebase.firestore()
export const auth = firebase.auth()

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app")
