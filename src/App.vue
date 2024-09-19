<template>
  <div id="app">
    <h1>Product Cards</h1>
    <div class="product-list">
      <ProductCard
        v-for="(product, index) in products"
        :key="index"
        :product="product"
      />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import ProductCard from "./components/ProductCard.vue";

export default {
  name: "App",
  components: {
    ProductCard,
  },
  data() {
    return {
      products: [],
    };
  },
  created() {
    // Fetch products from the API when the component is created
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        this.products = response.data;
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  },
};
</script>

<style>
#app {
  text-align: center;
  margin-top: 40px;
}

.product-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 20px;
  padding: 20px;
}

@media (min-width: 600px) {
  .product-list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 20px;
  }
}
</style>
