<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Cart from './components/Cart.vue';
import Flyout from './components/Flyout.vue';
import NavBar from './components/Navbar.vue';
</script>

<template>
    
    <NavBar />

    <div class="container">
        <RouterView />
    </div>
    
    <Flyout>
        <Cart />
    </Flyout>
</template>

<style scoped>
</style>