<template>
  <div class="container">
    <!-- section  -->
    <section class="row mb-5 pb-md-4 align-items-center">
      <div class="col-md-5">
        <div class="masthead-followup-icon d-inline-block mb-2 text-white bg-danger">

        </div>
        <h2 class="display-5 fw-normal">Hello</h2>
        <div v-for="p in produits" :key="p.id">
          <p>
         titre : {{p.nom}} <br>
          prix : {{p.prix}} <br>
          <!-- detail : {{p.detail}} <br> -->
          <button @click="addPanier(p)">ajouter au panier</button>
        </p>
        </div>
        
      </div>
      <div class="col-md-7 ps-md-5">
        <img class="img-fluid mt-3 mx-auto" src="https://getbootstrap.com/docs/5.0/assets/img/bootstrap-themes.png"
             alt="Bootstrap Themes" width="700" height="500" loading="lazy">
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { useAppStore } from "@/store/module/app";
import {computed, defineComponent, ref} from "vue";
import Swal from 'sweetalert2'
import 'sweetalert2/src/sweetalert2.scss'

export default defineComponent({
  name: "Home",
  setup(){
    const appStore = useAppStore();
  const produits = computed(() => appStore.getProduits);
function addPanier(p : Object){
  console.log(p)
  var info ={
    id_prod : p.id,
    nom_prod : p.nom,
    prix: p.prix,
    qte : 1
  }
  appStore.addPanier(info);
  alert('succes','produit bien ajouté au panier !')
}
function alert(type:any,msg:any){
Swal.fire({
  title: type.charAt(0).toUpperCase() + type.slice(1)+'!',
  text: msg,
  icon: type,
  confirmButtonText: 'ok'
})
}
return{
  produits,alert,
  addPanier
}
  }
});
</script>