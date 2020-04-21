<template>
  <div id="app" class="container-full bg-white h-screen relative box-border">
    <app-overlay />
    <app-side-navbar v-if="isLogin" />
    <div
      :class="{'xl:pl-72' : isLogin}"
      class="w-full transition-transform duration-500 ease-in-out"
    >
      <app-navbar v-if="isLogin" />
      <router-view />
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import Overlay from "./components/Overlay";
import SideNavbar from "./components/SideNavbar";
import Navbar from "./components/Navbar";
export default {
  components: {
    appOverlay: Overlay,
    appSideNavbar: SideNavbar,
    appNavbar: Navbar
  },
  computed: {
    ...mapGetters(["isLogin"])
  }
};
</script>
<style >
.overlay {
  background-color: rgba(0, 0, 0, 0.226);
}
</style>

