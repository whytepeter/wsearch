<template>
  <div class="SigIn form-container text-base w-84 bg-transparent shadow-none">
    <div class="logo w-40 mb-4">
      <img src="/logo-text.png" alt="wsearch logo" class="w-full object-contain" />
    </div>
    <div
      class="Email w-full text-secondary flex items-center justify-between mb-4 bg-gray-300 shadow focus-within:shadow-lg rounded"
    >
      <span class="mx-3 my-2">
        <i class="fas fa-user"></i>
      </span>
      <input
        type="text"
        placeholder="Email"
        class="w-full px-3 py-2 rounded border-2 border-gray-300 font-medium placeholder-gray-600 text-gray-600 focus:outline-none"
      />
    </div>
    <div
      class="Password w-full text-secondary flex items-center justify-between mb-4 bg-gray-300 shadow focus-within:shadow-lg rounded"
    >
      <span @click="isLock = !isLock" class="mx-3 my-2">
        <i :class="[isLock ? lock : unlock]"></i>
      </span>
      <input
        :type="[isLock ? type1 : type2]"
        placeholder="Password"
        class="w-full px-3 py-2 rounded border-2 border-gray-300 font-medium placeholder-gray-600 text-gray-600 focus:outline-none"
      />
    </div>

    <button
      class="btn btn-secondary mb-4 w-full font-medium text-gray-700 hover:text-gray-600 hover:shadow-lg shadow"
    >login</button>
    <span
      class="Forgot-Password cursor-pointer mb-2 mr-2 text-sm s text-green-200 font-medium hover:underline"
    >Forgot Passowrd</span>
    <div class="text-center text-secondary">
      Don't have an account
      <span
        class="transition duration-300 font-medium cursor-pointer text-green-200 hover:underline"
      >Sign Up</span>
    </div>

    <div class="Privacy my-6 text-center text-xs text-secondary">
      By Signing up, you agree to our
      <span
        class="transition duration-300 mb-6 font-medium cursor-pointer text-green-200 hover:underline"
      >Privary Policy</span> and
      <span
        class="transition duration-300 mb-6 font-medium cursor-pointer text-green-200 hover:underline"
      >Terms of Use.</span>
    </div>
  </div>
</template>
<script>
export default {
  name: "SignIn",
  data() {
    return {
      isLock: true,
      type1: "password",
      type2: "text",
      lock: "fas fa-lock",
      unlock: "fas fa-unlock"
    };
  }
};
</script>