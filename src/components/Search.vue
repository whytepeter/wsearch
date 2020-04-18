<template>
  <div
    class=" transition duration-300 w-10/12 flex justify-between items-center flex-no-wrap mx-auto text-base text-gray-600  bg-gray-100 rounded-full border sm:border-2 border-gray-400 overflow-hidden focus-within:border-primary"
  >
    <input
      type="text"
      placeholder="Search by name"
      class="w-full bg-gray-100 py-2 px-5 font-semibold focus:outline-none"
    />
    <span
      class="transition duration-300 py-2 px-4 rounded-full hover:text-primary active:bg-gray-200"
    >
      <i class="fas fa-search"></i>
    </span>
  </div>
</template>
<script>
export default {
  name: "search"
}
</script>
