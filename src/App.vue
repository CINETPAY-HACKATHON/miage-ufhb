<template>
  <Menu></Menu>
  <router-view/>
  <Bottom></Bottom>
</template>

<script lang="ts">
import Menu from "@/components/header.vue";
import Bottom from "@/components/footer.vue";
import {defineComponent} from "vue";

export default defineComponent({
  name: "app",
  components: {
    Menu,
    Bottom
  }
});
</script>

<style lang="scss">
@import "@/assets/scss/style.scss";
</style>
