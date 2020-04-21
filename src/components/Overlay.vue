<template>
  <transition
    :duration="500"
    enter-active-class="animated fadeIn"
    leave-active-class="animated fadeOut"
  >
    <div v-if="isOverlay" class="transition-opacity overlay w-full h-full inset-0 fixed z-40"></div>
  </transition>
</template>
<script>
import { mapMutations, mapGetters } from "vuex";
export default {
  methods: {
    ...mapMutations(["hideNav"])
  },
  computed: {
    ...mapGetters(["isOverlay"])
  }
};
</script>

