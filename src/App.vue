<template>
  <div id="app" class="container-full bg-white h-screen relative box-border">
    <app-overlay />
    <app-side-navbar />
    <div class="w-full transition-transform duration-500 ease-in-out xl:pl-72">
      <app-navbar />
      <router-view />
    </div>
  </div>
</template>
<script>
import Overlay from "./components/Overlay";
import SideNavbar from "./components/SideNavbar";
import Navbar from "./components/Navbar";
export default {
  components: {
    appOverlay: Overlay,
    appSideNavbar: SideNavbar,
    appNavbar: Navbar
  }
};
</script>
<style></style>
