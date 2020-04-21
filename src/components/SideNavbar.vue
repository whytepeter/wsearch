<template>
  <div>
    <div @click="hideNav" v-if="isSideNav" class="fixed inset-0 z-40"></div>
    <div
      class="sideNav transition-transform duration-500 transform xl:translate-x-0 ease-in-out flex flex-col bg-white xl:border border-l-2 border-gray-400 w-72 h-screen fixed z-40"
      :class="[isSideNav ? show : hide ]"
    >
      <div
        class="Profile w-full flex justify-around items-center text-lg text-gray-600 font-semibold py-4 px-4 bg-seconary"
      >
        <div class="User-Image w-3/12 rounded-full overflow-hidden border border-gray-300">
          <img src="/img/whyte.png" alt="whyte" class="w-full" />
        </div>
        <div class="User-Content w-7/12 flex flex-col justify-center">
          <div class="User-Name capitalize">whyte peter</div>
          <router-link
            to="/welcome"
            tag="li"
            class="User-Mode transition duration-300 list-none text-sm w-16 bg-green-100 text-primary border border-green-200 py-1 px-2 my-1 text-center rounded-full cursor-pointer hover:bg-lite"
          >
            <a @click="logout">logout</a>
          </router-link>
        </div>
      </div>
      <div class="separator w-10/12"></div>
    </div>
  </div>
</template>


<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  name: "SideNavbar",
  data() {
    return {
      hide: "-translate-x-72",
      show: "translate-x-0"
    };
  },
  methods: {
    ...mapMutations(["logout", "hideNav"])
  },
  computed: {
    ...mapGetters(["isSideNav"])
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
