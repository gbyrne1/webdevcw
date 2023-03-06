<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import type FlyoutVue from './components/Flyout.vue';
import NavBar from './components/Navbar.vue';
</script>
    
<template>
    <NavBar />

    <div class="container">
        <RouterView />
    </div>
    <Flyout>
        <h1>Cart</h1>
        
        <h2>Checkout</h2>
    </Flyout>/>

</template>

<style scoped>
</style>