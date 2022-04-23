<template>
 


    <!-- Core theme CSS (includes Bootstrap)-->


    <div class="home-page">
    <link href="/styles.css" rel="stylesheet" />
       
        <div  id="bg-image">
            
        </div>
        <div id="home-content">
            <!-- <a class="btn m-2" aria-current="page" href="/">
                <i class="bi bi-arrow-left-square"></i> retour a la boutique
            </a> -->
            <div class="" style="padding: 55px 25px;">
                

                <h1 >MIAGE-GI FHB </h1>
                <p>
                    L’université Félix Houphouët-Boigny est une université ivoirienne, située dans la commune de Cocody.
                    elle possede en son sein plusieurs facultés dont la faculté dont l'UFR Mathématiques & Informatiques.
                    Pour mieux repondre aux besoins des entreprises, elle decide de creer des filieres professionnelles. elles cree ainsi le Parcours MIAGE et ACTUARIAT. <br>
                    <a href="https://univ-fhb.edu.ci/" class="btn btn-outline-dark mt-2">EN SAVOIR PLUS </a>
                </p>
                <br>


                <h3>Nos filieres</h3>
                <div class="row gx-4 gx-lg-1 row-cols-md-3 ">
                        <div class="col mb-5">
                            <div class="card h-100">
                              <img
                                class="card-img-top"
                                src="/assets/miage.jpg"
                                alt="..."
                              />
                              <!-- Product details-->
                              <div class="card-body p-2">
                                <div class="">
                                  <h6 class="fw-bolder">MIAGE</h6>
                                  Méthodes Informatiques Appliquées à la Gestion des Entreprises.
                                  
                                  <br><a class="btn btn-light " href="#">En savoir plus</a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="col mb-5">
                            <div class="card h-100">
                              <img
                                class="card-img-top"
                                src="assets/actuariat.jpg"
                                alt="..."
                              />
                              <!-- Product details-->
                              <div class="card-body p-2">
                                <div class="">
                                  <h6 class="fw-bolder">ACTUARIAT</h6>
                                  Forme aux metiers de l' assurance.
                                  <br><a class="btn btn-light" href="#">En savoir plus</a>
                                </div>
                              </div>
                            </div>
                          </div>
                          
                </div>
                
                <br>
                <h3>Admissions</h3>
                <p>
                   Apres l' obtention du baccalaureat ou d'un diplome de niveau Bac + 2 (Licence 2, DUT, BTS), l'admission en Licence MIAGE est prononcée par une commission de recrutement après examen d’un dossier et entretien éventuel.
                </p>

                
                

    
            </div>
            
    
    
        </div>
    
    </div>


  
    <!-- Section-->
    <section class="py-5">
      <div class="container">
        
      </div>
    </section>
    <!-- Footer-->



</template>

<script lang="ts">
import {defineComponent, ref} from "vue";

export default defineComponent({
  name: "Home"
});
</script>
