<template>
  <div
    class="sideNav transition-transform duration-500 transform xl:translate-x-0 ease-in-out flex flex-col bg-white xl:border border-l-2 border-gray-400 w-72 h-screen absolute z-30"
    :class="[isSideNav ? show : hide ]"
  >
    <div class="w-32">
      <img src="/logo-text.png" alt="wsearch" class="w-full" />
    </div>
  </div>
</template>


<script>
import { mapGetters } from "vuex";
export default {
  name: "SideNavbar",
  data() {
    return {
      hide: "-translate-x-72",
      show: "translate-x-0"
    };
  },
  computed: {
    ...mapGetters(["isSideNav"])
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
