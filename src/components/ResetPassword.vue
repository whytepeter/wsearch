<template>
  <form
    class="Reset-Password form-container text-base w-84 bg-transparent shadow-none"
  >
    <div class="logo w-40 mb-4">
      <img
        src="/logo-text.png"
        alt="wsearch logo"
        class="w-full object-contain"
      />
    </div>
    <div
      class="Email w-full text-secondary flex items-center justify-between mb-4 bg-gray-300 shadow focus-within:shadow-lg rounded"
    >
      <span class="mx-3 my-2">
        <i class="fas fa-envelope"></i>
      </span>
      <input
        type="text"
        id="email"
        name="email"
        placeholder="Email"
        v-model="user.email"
        class="w-full px-3 py-2 rounded border-2 border-gray-300 font-medium placeholder-gray-600 text-gray-700 focus:outline-none"
      />
    </div>

    <button
      class="btn btn-secondary mb-4 w-full font-medium text-gray-700 hover:text-gray-600 hover:shadow-lg shadow"
    >
      Reset Password
    </button>
  </form>
</template>
<script>
export default {
  name: "ResetPassword",
  data() {
    return {
      user: {
        email: "",
      },
    }
  },
}
</script>
