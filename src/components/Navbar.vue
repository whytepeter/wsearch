<template>
  <div
    class="navbar flex items-center justify-start w-full text-white bg-primary px-8 py-1"
  >
    <span
      @click="showNav"
      class="transition xl:hidden   duration-300 text-2xl cursor-pointer mr-6 transform active:scale-110"
    >
      <i class="fas fa-bars"></i>
    </span>
    <div class="w-32 cursor-pointer" route to="/">
      <img src="/logo-text.png" alt="wsearch" class="w-full" />
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex"
export default {
  name: "Navbar",

  methods: {
    ...mapMutations(["showNav"])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
