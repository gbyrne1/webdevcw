
<script setup lang="ts">
import { useCart } from '@/model/cart';
const cart=useCart();
</script>

<template>
    <div>
        <div class="Cart">
            <h1 class="title">Cart
                <small>
                    $Price
                    ({{ cart.length }}items)
                </small>
            </h1>
            <p>{{ cart.length }}</p>
            <div class="cart-item" v-for="item in cart">
                <p>{{ item.product.title }}</p>
                <p>{{ item.product.price }}</p>
                <p>{{ item.quanity }}</p>
            </div>
        </div>

    </div>
</template>

<style scoped>

.Cart {
    display: flex;
    margin: 5px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background-color: #f5f5f5;
}
.cart-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background-color: #f5f5f5;
}
.cart-item img{
    width: 100px;
    height: 100px;}
</style>