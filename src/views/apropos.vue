<template>
  <div class="container">
    <!-- section  -->
    <section class="row mb-5 pb-md-4 align-items-center">
      <div class="col-md-5">
        <div class="masthead-followup-icon d-inline-block mb-2 text-white bg-danger">

        </div>
        <h2 class="display-5 fw-normal">Miage c'est</h2>
        <p>Apropos</p>
      </div>
      <div class="col-md-7 ps-md-5">
        <img class="img-fluid mt-3 mx-auto" src="https://getbootstrap.com/docs/5.0/assets/img/bootstrap-themes.png"
             alt="Bootstrap Themes" width="700" height="500" loading="lazy">
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import {defineComponent, ref} from "vue";

export default defineComponent({
  name: "Home"
});
</script>