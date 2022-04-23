<template>

  <div class="text-top container-fluid p-0">
    <div class="bg-dark">
      <p class="text-white text-center p-1 p-lg-2">besoin d'aide pour commander ? <br class="d-sm-none"> Appelez le :
        <span class="text-orange"> <i class="fas fa-phone"></i> (+225) 07 08 86 37 19</span>
      </p>
    </div>
  </div>
  <div class="container-fluid p-0">
    <!-- header -->
    <div class="header">
      <div class="row align-items-center">
        <!-- logo -->
        <div class="col-4 col-lg-3 mt-1 order-1">
          <a href="#" class="logo">
            
            <img src="assets/images/logo.png"
                 onclick="window.location.href='/'"
                 class="img-fluid order-1 order-lg-0" alt="">
            <span class="order-0 order-lg-1" id="open-menu"><i class="fas fa-bars"></i></span>
          </a>
        </div>
        <!-- formulaire de recherche -->
        <div class="col order-3 order-lg-2">
          <form action="" class="search">
            <div class="input-group">
              <input name="q" value="" type="text" placeholder="rechercher un livre">
              <div class="input-group-append">
                <button class="btn" type="submit">
                  <i class="bi bi-search"></i>
                  <span>Recherche</span>
                </button>
              </div>
            </div>
          </form>
        </div>
        <!--  -->
        <div class="header-right order-2 order-lg-3 col-8 col-lg-4 text-right mt-3">
          <div class="d-inline-flex">
            <ul class="d-flex align-items-center">
              <li>
                <router-link
                tag="li"
                :to="{ name: 'home' }"
              >
                <a >Accueil</a>
              </router-link>
                
              </li>
              <li>
                <router-link
                tag="li"
                :to="{ name: 'apropos' }"
              >
                <a href="#" class="btn-card">
                  A propos de
                </a>
              </router-link>

              </li>
              <li class="col">
                <a href="#" class="btn-card">
                  <i class="bi bi-cart"></i>
                  <span class="total">5</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({});
</script>
