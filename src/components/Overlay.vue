<template>
  <div
    v-if="isOverlay"
    @click="hideNav"
    class="transition-opacity  opacity-0 w-full h-full inset-0 fixed bg-black opacity-25 z-10"
  ></div>
</template>
<script>
import { mapMutations, mapGetters } from "vuex"
export default {
  methods: {
    ...mapMutations(["hideNav"])
  },
  computed: {
    ...mapGetters(["isOverlay"])
  }
}
</script>
