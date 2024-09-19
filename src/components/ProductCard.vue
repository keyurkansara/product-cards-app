<template>
  <div class="product-card">
    <h3 v-color="'red'">{{ product.title }}</h3>
    <img :src="product.image" :alt="product.title" />
    <p>{{ product.price | currencyFilter }}</p>
    <p>{{ product.description }}</p>
  </div>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.product-card {
  border: 1px solid #ddd;
  padding: 16px;
  border-radius: 8px;
  text-align: center;
}

.product-card img {
  max-width: 100px;
  margin-bottom: 8px;
}

.product-card h3 {
  font-size: 1.25rem;
  margin-bottom: 8px;
}

.product-card p {
  font-size: 1rem;
  color: #333;
}
</style>
