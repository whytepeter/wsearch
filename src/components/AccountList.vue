<template>
  <div class="account-container w-full mx-auto py-4">
    <app-account v-for="account in accounts" :key="account.id" :account="account" />
  </div>
</template>
<script>
import Account from "./Account";
import { mapGetters } from "vuex";
export default {
  name: "AccountList",
  computed: {
    ...mapGetters({
      accounts: "getAccounts"
    })
  },
  components: {
    appAccount: Account
  }
};
</script>
