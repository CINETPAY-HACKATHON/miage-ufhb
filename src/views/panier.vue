<template>
  <div class="container">
    <!-- section  -->
    <section class="row mb-5 pb-md-4 align-items-center">
      <div class="col-md-5">
        <div class="masthead-followup-icon d-inline-block mb-2 text-white bg-danger">

        </div>
        <h2 class="display-5 fw-normal">Panier</h2>
        <!-- {{panier}} -->
        <div v-for="(p,i) in panier" :key="p.id">
          <p>
         titre : {{p.nom_prod}} <br>
          prix : {{p.prix}} <br>
          qte : {{p.qte}} <br>
          <!-- detail : {{p.detail}} <br> -->
          <button @click="changeQte(i,p.qte+1)">+</button>
          <button @click="changeQte(i,p.qte-1)">-</button> <br>
          <button @click="remove(i)">supprimer du panier</button>
        </p>
        </div>
        <button style="background-color:white;" @click="achat">payer</button>
    
      </div>
      <div class="col-md-7 ps-md-5">
        <img class="img-fluid mt-3 mx-auto" src="https://getbootstrap.com/docs/5.0/assets/img/bootstrap-themes.png"
             alt="Bootstrap Themes" width="700" height="500" loading="lazy">
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import router from "@/router";
import { useAppStore } from "@/store/module/app";
import {defineComponent, ref,onMounted, computed} from "vue";
import Swal from 'sweetalert2'
import 'sweetalert2/src/sweetalert2.scss'
export default defineComponent({
  name: "Home",

  setup(){
    const appStore = useAppStore();
  const panier = computed(() => appStore.getPanier);
  
  function remove(i:any){
    appStore.removePanier(i);
  }
  function changeQte(i:any,qte:any){
    if(qte==0) remove(i)
    else{
      appStore.changeQte(i,qte);
    //console.log(appStore.getSommeTotal())
    }
  }
  
  function achat(){
     CinetPay.setConfig({
                apikey: "20816034206262c82a727fe0.78787435",//   YOUR APIKEY
                site_id: 640649,//YOUR_SITE_ID
               
                mode: 'PRODUCTION'
            });
            CinetPay.getCheckout({
                transaction_id: Math.floor(Math.random() * 100000000).toString(),
                amount: 100,
                currency: 'XOF',
                channels: 'ALL',
                description: 'Test de paiement',   
                 //Fournir ces variables pour le paiements par carte bancaire
                customer_name:"Joe",//Le nom du client
                customer_surname:"Down",//Le prenom du client
                customer_email: "down@test.com",//l'email du client
                customer_phone_number: "088767611",//l'email du client
                customer_address : "BP 0024",//addresse du client
                customer_city: "Antananarivo",// La ville du client
                customer_country : "CM",// le code ISO du pays
                customer_state : "CM",// le code ISO l'état
                customer_zip_code : "06510", // code postal

            });
            CinetPay.waitResponse(function(data) {
              
                if (data.status == "REFUSED") {
                 
                 window.location.href="/echec";
               
                    
                } else if (data.status == "ACCEPTED") {
                    // if (alert("Votre paiement a été effectué avec succès")) {
                    //     window.location.reload();
                    // }
                    window.location.href="/succes";
                }
            });
            CinetPay.onError(function(data) {
                console.log(data);
            });
    };

     onMounted(async () => {
       let externalScript = document.createElement('script')
    externalScript.setAttribute('src', 'https://cdn.cinetpay.com/seamless/main.js')
    document.head.appendChild(externalScript)
    
     /* 
      const plugin = document.createElement("script");
      plugin.setAttribute("src", "https://cdn.cinetpay.com/seamless/main.js");
      plugin.async = true;
*/
     })
  return {
    achat,panier,remove,changeQte
  }
  
  },
  
});
</script>