<script setup lang="ts">
import { useSession } from '@/model/session';
import { ref } from 'vue';
const session= useSession();
const isActive= ref(false);
</script>

<template>
    <div class="notifications">
<button class="button is-primary" @click="isActive=!isActive">
<span class="icon">
    <i class="fas fa-bell fa-lg"></i>
    </span>
</button>
    </div>
</template>


<style scoped>

</style>