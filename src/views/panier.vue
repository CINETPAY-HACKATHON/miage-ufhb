<template>
  <section class="section-content d-none d-lg-block bg padding-y border-top">
    <div class="container" style=" margin-top:80px;">
      <center>
        <p class="h3" style="color: #888;font-weight:bold;">VOTRE PANIER </p>
      </center>
      <br>
      <div class="row">
        <main class="col-sm-9">

          <div class="card">
            <table class="table table-hover shopping-cart-wrap">
              <thead class="text-muted">
              <tr>
                <th scope="col" width="2"></th>

                <th scope="col" width="100">IMAGE</th>
                <th scope="col" width="150">PRODUIT</th>
                <th scope="col" width="150">PRIX</th>
                <th scope="col" width="80">QUANTITE</th>
                <th scope="col" width="150" class="text-right">TOTAL</th>
              </tr>
              </thead>
              <tbody>
              <tr v-for="(p,i) in panier" :key="p.id">
                <td class="text-right">

                    <button @click="remove(i)" class="btn btn-outline-danger">×</button>
              
                </td>
                <td>
                  <div class="img-wrap"><img src=""
                                             class="img-thumbnail img-sm" width="100"></div>
                </td>

                <td>
                    <h6 class="text-truncate title  mt-3" style="font-size: 20px;">
                    {{p.nom_prod}}
                  </h6>
                
                </td>
                <td>
                  <div class="price-wrap mt-4">
                    <p class="price" style="color:black;font-weight:bold ">
                      {{parseInt(p.prix)}} FCFA</p>

                  </div>
                </td>
                <td>

                  
                  <div class="mt-3 border rounded-pill w-xl-80 px-3 border-color-1"
                       style="width: 110px">
                    <div class="js-quantity row align-items-center">
                      <div class="col">
                        {{p.qte}}
                      </div>
                      <div class="col-auto">
                        <a style="cursor:pointer" @click="changeQte(i,p.qte+1)">+</a>
&nbsp;&nbsp;&nbsp;
                        <a style="cursor:pointer" @click="changeQte(i,p.qte-1)">-</a>
                      </div>
                    </div>
                  </div>

                </td>
                <td>
                  <div class="price-wrap mt-4">

                    <p class="price text-right"
                       style="color:black;font-weight:bold ">  {{parseInt(p.prix)* p.qte}}                  FCFA</p>

                  </div> <!-- price-wrap .// -->
                </td>

              </tr>

              </tbody>
            </table>
            <div class="card-body border-top">
              <a @click="achat" class="btn btn-light float-md-right"
                 style="font-weight:bold;font-size:18px"> Finaliser la commande &nbsp;<i
                  class="fa fa-chevron-right" style="color: #002687"></i> </a>
              
                <router-link
                tag="li"
                :to="{ name: 'home' }"
              >
              <a class="btn btn-light"
                 style="font-weight:bold;font-size:18px"> <i class="fa fa-chevron-left"
                                                             style="color: #002687"></i> &nbsp;Continuer
                ses achats </a>
                </router-link>
            </div>
          </div> <!-- card.// -->
          <div class="alert alert-success mt-3 p-1 pl-5 ">
            <p class="icontext" style="font-weight: bold"><i class="icon text-success fa fa-truck"></i>&nbsp;Livraison
              gratuite & rapide</p>
          </div>
        </main> <!-- col.// -->
        <aside class="col-md-3">

          <div class="card">
            <div class="card-body">
              <!-- <dl class="row row-cols-2">
                <dt class="text-left">SOUS TOTAL :</dt>
                <dd class="text-right"
                    style="width:55%;margin-left:-20px;font-weight:bold;color: #000">
                  Fcfa
                </dd>
              </dl> -->

              <dl class="row row-cols-2 dlist-align">
                <dt class="text-left">TOTAL :</dt>
                <dd class="text-right"
                    style="width:55%;margin-left:-20px;font-weight:bold;color: red">
                  {{appStore.getSommeTotal()}} FCFA
                </dd>
              </dl>

              <hr>


            </div> <!-- card-body.// -->
          </div>  <!-- card .// -->
        </aside>
      </div>

    </div> <!-- container .//  -->
  </section>
  <hr>
  <section class="mb-4 d-lg-none">

    <div class="mt-3 col-sm-12" style="background: white">

      <center style="font-size: 18px">
        <span class="text-left" style="font-weight: bold">sous total :</span>
        <span class="text-right" style="font-weight: bold;color:black">100</span> Fcfa
      </center>

      <center style="font-size: 18px">
        <span class="text-left" style="font-weight: bold">Total :</span>
        <span class="text-right" style="font-weight: bold;color:red">100</span> Fcfa
      </center>


      <center class="mt-2">
        <a href="" class="btn btn-outline-dark "
           style="font-weight:bold;font-size:18px;">
          Finaliser la commande &nbsp;<i class="fa fa-chevron-right" style="color: red"></i> </a>
        <a href="" class="btn btn-outline-dark mt-2"
           style="font-weight:bold;font-size:18px;">
          <i class="fa fa-chevron-left" style="color: red"></i> &nbsp;Continuer ses achats </a>
      </center>
    </div>
  </section>

  <div class="container">
    <!-- section  -->
    <section class="row mb-5 pb-md-4 align-items-center">
      <div class="col-md-5">
        <div class="masthead-followup-icon d-inline-block mb-2 text-white bg-danger">

        </div>
        <h2 class="display-5 fw-normal">Panier</h2>
        <!-- {{panier}} -->
        <!-- <div v-for="(p,i) in panier" :key="p.id">
          <p>
         titre : {{p.nom_prod}} <br>
          prix : {{p.prix}} <br>
          qte : {{p.qte}} <br>
          detail : {{p.detail}} <br>
          <button @click="changeQte(i,p.qte+1)">+</button>
          <button @click="changeQte(i,p.qte-1)">-</button> <br>
          <button @click="remove(i)">supprimer du panier</button>
        </p>
        </div> -->
       
    
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
    // console.log(appStore.getSommeTotal())
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
    achat,panier,remove,changeQte,appStore
  }
  
  },
  
});
</script>
