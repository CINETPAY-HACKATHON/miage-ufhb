<template>
  <!-- jumbotron -->
  <div class="jumbotron">
    <div class="row h-100">
      <img src="assets/images/DSC_0288.JPG" alt="">
      <div class="introduction">
        <h1 class="display-2">A propos de nous</h1>
      </div>
    </div>
  </div>


  <!-- Section-->
  <section class="mt-5">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <p class="fw-light">
            Au centre de Paris, une université scientifique pluridisciplinaire vous propose une formation,
            faisant partie du réseau MIAGE, avec des enseignements de qualité et une excellence reconnue.

            Le master MIAGE est à vocation professionnelle et fait partie du réseau des MIAGE de France. Il
            allie une double compétence en informatique et en gestion.
          </p>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <h1>Atouts et points forts</h1>
          <h2 class="fw-light">Trois types de formations sont proposés à l’UFR :</h2>
          <ul>
            <li> Formation en apprentissage (FA)</li>
            <li> Formation initiale et continue (FIC)</li>
          </ul>

          <p class="fw-light">
            Le centre de formation en apprentissage (CFA), et l’association pour la formation d’Informaticiens
            par
            apprentissage (AFIA) nous accompagne dans la FA, d’une part dans la recherche d’entreprises pouvant
            accueillir nos étudiants et d’autre part dans le suivi des apprentis dans leurs missions. Le taux
            d’insertion est de 100%. <br>

            Le service commun de formation continue (SCFC) de notre université est chargé d’organiser, de
            coordonner
            et
            de gérer les contrats de professionnalisation et la validations d’acquis et de l’expérience (VAE)
            pour
            la
            formation continue. <br>

            ​Le master fait intervenir des enseignants-chercheurs, aussi bien en informatique du laboratoire
            d’informatique de paris Descartes (LIPADE) qu’en gestion du laboratoire interdisciplinaire de
            recherche
            appliquée en économie de la santé (LIRAES) et de nombreux experts professionnels extérieurs.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import {defineComponent, ref} from "vue";

export default defineComponent({
  name: "Home"
});
</script>
