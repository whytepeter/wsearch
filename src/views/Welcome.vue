<template>
  <div
    class="container-full py-6 flex items-center justify-center h-screen text-2xl text-white bg-primary"
  >
    <keep-alive>
      <component :is="show"></component>
    </keep-alive>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";
export default {
  data() {
    return {
      component: "appSignIn"
    };
  },
  components: {
    appSignIn: SignIn,
    appSignUp: SignUp
  },
  computed: {
    ...mapGetters(["show"])
  }
};
</script>
