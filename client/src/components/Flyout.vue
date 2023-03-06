

<script setup lang="ts">

</script>

<template>
    <div class="Flyout">
        Flyout
        <slot/>
    </div>
</template>

<style scoped>

.flyout {
    position: fixed;
    top: 52px;
    right: -18rem;
    width: 20rem;
    height: clac(100vh-52px);
    background-color: white;
    border: 1px solid black;
    border-radius: 5px;
    padding: 1rem;
    transform: right 0.5s ease-in-out;
}
flyout:hover{
    right:0;
}
</style>