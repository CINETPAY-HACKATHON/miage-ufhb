<template>
  <!-- contenu -->
  <div class="container product">
    <!-- row -->
    <div class="row mt-md-5">
      <div class="col-md-1">
        <div id="product-imgs">
          <div class="product-preview">
            <img src="assets/images/image2.png" alt="">
          </div>
        </div>
      </div>

      <div class="col-md-6 col-12">
        <div id="product-main-img">
          <div class="product-preview">
            <img src="assets/images/image2.png" alt="" class="img-fluid">
          </div>
        </div>
      </div>

      <div class="col-md-5 col-12">
        <div class="product-details">
          <h2 class="product-name mt-5 mt-md-0">HE</h2>
          <h3 class="product-brand">Marque :
          </h3>
          <div>
            <h4 class="product-price">1000 FCFA</h4>
          </div>
          <form id="form" method="POST" style="border:none">
            <div class="row">
              <div class="col-6 col-md-6">
                <div class="control">
                  <label for="qte">Quantite : </label>
                  <select id="qte" name="qte" style="width:50px;">
                    <option value=""></option>
                  </select>
                </div>
              </div>
              <div class="col-12">
                <div class="mt-3 ">
                  <input type="hidden" name="code_produit" value="{{$produit->code}}">
                  <button type="submit" class="add-to-cart-btn"><i class="fa fa-shopping-cart"></i>
                    Ajouter au
                    panier
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      <!-- /Product details -->
    </div>
    <!-- /row -->
    <div class="row mt-5 product-detail-bottom">
      <div class="col-lg-7">
        <ul class="list-unstyled">
          <h6>INFORMATIONS ARTICLE</h6>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt quia sequi tenetur! Alias
            assumenda atque corporis dignissimos eaque exercitationem, ipsam ipsum mollitia nihil odio omnis
            quasi quisquam sed velit voluptates!
          </div>
        </ul>
      </div>

    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent, ref} from "vue";

export default defineComponent({
  name: "Home"
});
</script>
