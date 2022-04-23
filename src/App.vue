<template>
  <Menu></Menu>
  <router-view/>
</template>

<script lang="ts">
import Menu from "@/components/header.vue";
import {defineComponent} from "vue";

export default defineComponent({
  name: "app",
  components: {
    Menu
  }
})
</script>

<style lang="scss">
@import "@/assets/scss/style.scss";
</style>
