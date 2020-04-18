<template>
  <div class="home container mx-auto w-full h-full">
    <div class="search-container w-full py-3 sm:py-6 border-b border-gray-300">
      <app-search />
    </div>
    <div class="account-container w-full">
      <app-account-list />
    </div>
  </div>
</template>

<script>
import Search from "../components/Search";

import AccountList from "../components/AccountList";
export default {
  name: "Home",
  components: {
    appSearch: Search,
    appAccountList: AccountList
  }
};
</script>
