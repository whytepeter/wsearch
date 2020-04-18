<template>
  <div
    class="Account box-border w-full flex justify-between items-center text-gray-700 font-medium py-2 px-2 sm:px-4 mx-auto sm:w-11/12 odd:bg-gray-200 border-b border-gray-200"
  >
    <div class="bank box-border max-w-20 rounded-sm overflow-hidden">
      <img :src="account.bank" class="w-full object-cover" />
    </div>
    <div
      class="account-details box-border px-2 pr-1 sm:px-10 w-5/1 sm:w-8/12 block sm:flex justify-between items-center"
    >
      <div
        class="acc-name box-border truncate text-base text-gray-600 sm:text-gray-700 sm:text-xl capitalize w-48 sm:w-full"
      >{{ account.accountName }}</div>
      <div class="acc-number text-lg sm:text-xl font-semibold">{{ account.accountNumber }}</div>
    </div>
    <div class="options relative flex justify-between items-center flex-no-wrap">
      <span
        @click="isOption = !isOption"
        class="option transition duration-300 block sm:hidden cursor-pointer transform active:scale-110 py-2 px-4 hover:bg-gray-300 rounded-full focus:outline-none"
      >
        <i class="fas fa-ellipsis-v"></i>
      </span>
      <div @click="isOption = false" v-if="isOption" class="fixed inset-0 bg-transparent"></div>
      <div
        :class="[isOption ? show : hide]"
        class="Edit transition-all duration-300 ease-in-out w-auto sm:visible top-0 left-0 -ml-16 sm:ml-0 rounded-md sm:rounded-none shadow-md sm:shadow-none flex flex-col absolute bg-white sm:bg-transparent sm:relative sm:flex-row overflow-hidden"
      >
        <div
          @click="isOption = false"
          class="edit-container flex cursor-pointer sm:cursor-default w-full justify-start items-center px-2 pr-3 sm:px-0 hover:bg-gray-100 sm:hover:bg-transparent"
        >
          <span
            class="edit-btn transition duration-300 cursor-pointer transform active:scale-110 py-2 px-3 sm:hover:bg-gray-300 rounded-full sm:mx-2 focus:outline-none"
          >
            <i class="far fa-edit"></i>
          </span>
          <p class="block sm:hidden">Edit</p>
        </div>
        <div
          @click="isOption = false"
          class="delete-container flex cursor-pointer sm:cursor-default w-full justify-start items-center px-2 pr-3 sm:px-0 hover:bg-gray-100 sm:hover:bg-transparent"
        >
          <span
            class="delete-btn transition duration-300 cursor-pointer transform active:scale-110 py-2 px-3 sm:hover:bg-gray-300 rounded-full sm:mx-2 focus:outline-none"
          >
            <i class="fas fa-trash"></i>
          </span>
          <p class="block sm:hidden">Delete</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["account"],
  data() {
    return {
      isOption: false,
      show: "visible",
      hide: "invisible"
    };
  }
};
</script>
