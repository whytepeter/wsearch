<template>
  <div
    class="container-full py-6 flex items-center justify-center h-screen text-2xl text-white bg-primary"
  >
    <app-sign-in />
  </div>
</template>
<script>
import SignIn from "../components/SignIn";
// import SignUp from "../components/SignUp";
export default {
  data() {
    return {
      component: "appSignIn"
    };
  },
  components: {
    appSignIn: SignIn
    // appSignUp: SignUp
  }
};
</script>
