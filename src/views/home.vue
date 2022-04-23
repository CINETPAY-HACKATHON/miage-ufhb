<template>
  <!-- Header-->
  <header class="header-home overflow-hidden">
    <div class="container px-4 px-lg-5">
      <div class="row">
        <div class="col-lg-7">
          <div class="header-home-left pt-5">
            <div class="text-start">
              <h4 class="fw-light">Vendre ses livres rapidement</h4>
              <h5 class="fw-light">Offrez une nouvelle vie à <span class="fw-bolder">vos livres</span></h5>
              <ul class="fw-light">
                <li>Prix fixe, paiement immédiat & sécurisé.</li>
                <li>Gain de temps : tous vos articles en un envoi !</li>
                <li>Simple et rapide avec notre application !</li>
              </ul>
              <p class="fw-light">
                Plus de 15 ans d'expérience dans le marché de l'occasion culturelle en Côte d'ivoirel
              </p>
            </div>
          </div>
        </div>
        <div class="col-lg-5 pt-5">
          <div class="header-home-right">
            <h5 class="title-top-img text-primary">Devenez un acteur de l'economie circulaire</h5>
            <img src="/assets/images/filleaveclivre.png" alt="">
          </div>
        </div>
      </div>
    </div>
  </header>


  <!-- section -->
  <div class="container mt-5">
    <div class="row">
      <div class="col-12 text-center">
        <h2>Le tout sur un seul site</h2>
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col-6 col-md-4 text-center">
        <img
            src="https://cdn-icons.flaticon.com/png/512/3852/premium/3852838.png?token=exp=1650719294~hmac=b999baef188e079edf331c19f9ca8d13"
            alt="" style="width: 100px">
        <h5>Livres</h5>
      </div>

      <div class="col-6 col-md-4 text-center">
        <img
            src="https://cdn-icons.flaticon.com/png/512/2353/premium/2353209.png?token=exp=1650719564~hmac=7be011c7d44052cb3e26caf8924c7f34"
            alt=""
            style="width: 100px">
        <h5>Livre audio</h5>
      </div>

      <div class="col-6 col-md-4 text-center">
        <img
            src="https://cdn-icons.flaticon.com/png/512/2787/premium/2787966.png?token=exp=1650719625~hmac=e09d5a66fccca2b7cfd42fe5c7abd284"
            alt=""
            style="width: 100px">
        <h5>Magazine</h5>
      </div>
    </div>
  </div>
  <!-- Section-->
  <div class="container mt-5">
    <div class="row col-lg-none ">
      <div v-for="p in produits" :key="p.id" class="col-6 col-lg-3">
        <div class="card_product">
          <div class="top"
               style="background-image: url('https://images-na.ssl-images-amazon.com/images/I/513wLys2kVL._SX403_BO1,204,203,200_.jpg')">
            <span class="flag"> New</span>
          </div>
          <div class="bottom text-center">
                    <span class="name d-inline-block text-truncate" style="max-width:100%;font-weight:bold">
                        {{ p.nom }}
                    </span>
            <div class="">
              <span class="current-price">{{ p.prix }} FCFA</span>
              <span class="old-price">100 FCFA</span>
            </div>
            <router-link to="#">
              <button @click="addPanier(p)">Ajouter au panier</button>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script lang="ts">
import {useAppStore} from "@/store/module/app";
import {computed, defineComponent, ref} from "vue";
import Swal from 'sweetalert2';
import 'sweetalert2/src/sweetalert2.scss';

export default defineComponent({
  name: "Home",
  setup() {
    const appStore = useAppStore();
    const produits = computed(() => appStore.getProduits);

    function addPanier(p: Object) {
      console.log(p);
      var info = {
        id_prod: p.id,
        nom_prod: p.nom,
        prix: p.prix,
        qte: 1
      };
      appStore.addPanier(info);
      alert('succes', 'produit bien ajouté au panier !');
    }

    function alert(type: any, msg: any) {
      Swal.fire({
        title: type.charAt(0).toUpperCase() + type.slice(1) + '!',
        text: msg,
        icon: type,
        confirmButtonText: 'ok'
      });
    }

    return {
      produits, alert,
      addPanier
    };
  }
});
</script>
