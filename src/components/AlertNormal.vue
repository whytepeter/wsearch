<template>
  <div class="Alert-container w-full fixed inset-0 pointer-events-none z-50 opacity-75">
    <div
      @load="alertType"
      :class="[ isAlert ? fadeIn : fadeOut, type]"
      class="Alert-Normal w-64 mx-auto mt-20 py-2 px-4 rounded-md pointer-events-auto text-white text-center"
    >
      <slot class="Message"></slot>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    mode: {
      type: String,
      default: "success"
    }
  },
  data() {
    return {
      type: "",
      fadeIn: "animated fadeInDown slow",

      isAlert: true
    };
  },
  methods: {
    alertType() {
      if (this.mode === "success") {
        this.type = "bg-primary ";
      } else if (this.mode === "danger") {
        this.type = "bg-red-600 ";
      }
      setTimeout(() => {
        this.fadeIn = "animated fadeOut";
      }, 5000);
    }
  },
  mounted() {
    this.alertType();
  }
};
</script>