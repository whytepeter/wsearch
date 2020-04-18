<template>
  <div class="home container mx-auto w-full h-full relative py-12">
    <div
      class="search-container w-full bg-white py-3 sm:py-6 border-b border-gray-300 fixed top-0 left-0 mt-12 xl:pl-72 z-20"
    >
      <app-search />
    </div>
    <div class="account-container w-full relative mt-16 sm:mt-24 z-10">
      <app-account-list />
      <app-search-display class="hidden" />
      <button
        class="btn btn-primary text-2xl w-16 h-16 py-2 px-4 rounded-full focus:outline-none shadow-mg hover:shadow-lg fixed bottom-0 right-0 mb-6 mr-6 sm:mb-10 sm:mr-10 z-30"
      >+</button>
    </div>
  </div>
</template>

<script>
import Search from "../components/Search";
import SearchDisplay from "../components/SearchDisplay";

import AccountList from "../components/AccountList";
export default {
  name: "Home",
  components: {
    appSearch: Search,
    appSearchDisplay: SearchDisplay,
    appAccountList: AccountList
  }
};
</script>

