import Vue from "vue"
import Vuex from "vuex"
import * as getters from "./getters"
import * as mutations from "./mutations"
import * as actions from "./actions"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    login: true,
    sideNav: false,
    openAddForm: false,
    overlay: false,
    accounts: [
      {
        id: 1,
        bank: "/img/banks/access.png",
        accountName: "Peter Emmanuel Whyte",
        accountNumber: "0805915974",
      },
      {
        id: 2,
        bank: "/img/banks/zenith.png",
        accountName: "Emmanuel Whyte Peter",
        accountNumber: "2121340638",
      },
      {
        id: 3,
        bank: "/img/banks/diamond.png",
        accountName: "Whyte Peter",
        accountNumber: "0429832896",
      },
      {
        id: 4,
        bank: "/img/banks/gtb.png",
        accountName: "Whyte Peter",
        accountNumber: "0429832896",
      },
      {
        id: 5,
        bank: "/img/banks/eco.png",
        accountName: "Whyte Peter",
        accountNumber: "0429832896",
      },
      {
        id: 6,
        bank: "/img/banks/wema.png",
        accountName: "Whyte Peter",
        accountNumber: "0429832896",
      },
      {
        id: 7,
        bank: "/img/banks/fcmb.png",
        accountName: "Whyte Peter",
        accountNumber: "0429832896",
      },
      {
        id: 8,
        bank: "/img/banks/first.png",
        accountName: "Whyte Peter",
        accountNumber: "0429832896",
      },
    ],
  },
  getters,
  mutations,
  actions,
  modules: {},
})
