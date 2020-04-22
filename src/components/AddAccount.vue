<template>
  <div
    v-if="isAddAccount"
    :class="animateIn"
    class="Add-Account-Container overlay flex items-center justify-center fixed top-0 left-0 inset-0 pointer-events-none z-50"
  >
    <div :class="fade" class="Form form-container sm:w-84 pointer-events-auto relative">
      <span class="art"></span>
      <span
        @click="closeForm"
        class="Close transition duration-300 text-xl text-gray-400 hover:text-gray-500 active:text-gray-500 cursor-pointer absolute top-0 right-0 mt-2 mr-3"
      >
        <i class="fas fa-times-circle"></i>
      </span>
      <h1 class="Form-Title text-2xl my-3">Add New Account</h1>
      <div class="Select-Bank flex items-center font-normal w-full py-2 px-2 shadow-lg rounded-md">
        <div class="Bank-Image w-20 rounded-md overflow-hidden">
          <img src="/img/banks/default.png" alt="bank image" class="w-full object-cover" />
        </div>
        <div class="Select ml-3 w-8/12 text-center relative font-medium">
          <span @click="isSelectBank = !isSelectBank" class="Active cursor-pointer">Select Bank</span>
          <div
            :class="{ 'h-56': isSelectBank }"
            class="tranition duration-300 w-40 sm:w-48 h-0 Options text-gray-500 text-left absolute mt-2 transform -translate-x-3 sm:translate-x-3 bg-white shadow-md rounded-md overflow-y-scroll"
          >
            <p
              v-for="bank in banks"
              :key="bank.name"
              @click="isSelectBank = false"
              class="bank-list capitalize"
            >{{bank.name}} bank</p>
          </div>
        </div>
      </div>

      <div class="Acc-Name w-full flex flex-col my-2">
        <label class="mb-1">Account Name</label>
        <input type="text" placeholder="eg. John Doe" class="input" />
      </div>
      <div class="Acc-Number w-full flex flex-col my-2">
        <label class="mb-1">Account Name</label>
        <input type="text" placeholder="eg. 0123456789" class="input" />
      </div>

      <button class="btn btn-primary w-full my-2 focus:outline-none">Add New Account</button>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  data() {
    return {
      fade: "animated fadeInDown",
      animateIn: "animated fadeIn",

      isSelectBank: false,
      banks: [
        { id: 1, name: "access" },
        { id: 2, name: "diamond" },
        { id: 3, name: "eco" },
        { id: 4, name: "first" },
        { id: 5, name: "fidelity" },
        { id: 6, name: "gtb" },
        { id: 7, name: "heritage" },
        { id: 8, name: "keystone" },
        { id: 9, name: "Opay" },
        { id: 10, name: "polaris" },
        { id: 11, name: "stanbic" },
        { id: 12, name: "sterling" },
        { id: 13, name: "uba" },
        { id: 14, name: "unity" },
        { id: 15, name: "union" },
        { id: 16, name: "wema" },
        { id: 17, name: "zenith" }
      ]
    };
  },
  methods: {
    ...mapMutations(["closeAddForm"]),
    closeForm() {
      this.fade = "animated fadeOutDown";
      this.animateIn = "animated fadeOut";
      setTimeout(() => {
        this.fade = "animated fadeInDown";
        this.animateIn = "animated fadeIn";
      }, 1000);
      this.closeAddForm();
    }
  },
  computed: {
    ...mapGetters(["isAddAccount", "isOverlay"])
  }
};
</script>

