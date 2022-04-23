<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 mx-auto mt-5 mb-5">
        <div class="payment">
          <div class="payment_header">
            <div class="check">
              <i class="bi bi-check-circle"></i>
            </div>
          </div>
          <div class="content">
            <h1>Paiement effectué avec succès !</h1>
            <p>Vous recevrez bientôt un mail concernant les dernières étapes à suivre pour recevoir votre commande </p>
            <router-link to="/">Retourner sur la page d'accueil</router-link>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<style>
.payment {
  border: 1px solid #f2f2f2;
  height: 280px;
  border-radius: 20px;
  background: #fff;
  margin-bottom: 5rem;
}

.payment_header {
  background: rgba(255, 102, 0, 1);
  padding: 20px;
  border-radius: 20px 20px 0 0;

}

.check {
  margin: 0 auto;
  width: 50px;
  height: 50px;
  border-radius: 100%;
  background: #fff;
  text-align: center;
}

.check i {
  vertical-align: middle;
  line-height: 50px;
  font-size: 30px;
}

.content {
  text-align: center;
}

.content h1 {
  font-size: 25px;
  padding-top: 25px;
}

.content a {
  width: 200px;
  height: 35px;
  color: #fff;
  border-radius: 30px;
  padding: 5px 10px;
  background: rgba(255, 102, 0, 1);
  transition: all ease-in-out 0.3s;
}

.content a:hover {
  text-decoration: none;
  background: #000;
}

</style>
<script lang="ts">
import {defineComponent, ref} from "vue";

export default defineComponent({
  name: "success"
});
</script>
