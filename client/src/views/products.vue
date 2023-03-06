
<script setup lang="ts">
import { ref } from 'vue';
import { getProducts, type Product } from '../model/products';
const products = ref(getProducts());
</script>



<template>
    <div>
        <h1 class="title">
            These will be the products
        </h1>
        <h2 class="subtitle">
            If you got here then you are logged in
        </h2>

        <div v-for="product in products" :key="product.id">
            <img :src="product.thumbnail" :alt="product.title"/>
            <h3>{{ product.title }}</h3>
            <p>{{ product.description }}</p>
            <p>{{ product.price }}</p>
            </div>
    </div>
</template>


<style scoped>

.product-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    background-color: aliceblue;
}

.product{
    width: 10rem;
    margin: 1rem;
    padding: 1rem;
    border: 1px solid black;
    border-radius: 5px;
    background-color: white;
}

</style>