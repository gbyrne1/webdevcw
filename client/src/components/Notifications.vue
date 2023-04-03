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
    <i class="fas fa-bell"></i>
    </span>
</button>
<div class="notification-list">
    <div class="notification">  
        <button class="delete"></button>
    </div>
</div>
    </div>
</template>


<style scoped>
.notifications {
    position: relative;
}
.notification-list {
    position: absolute;
    top: 100%;
    margin-top: 5px;
    right: 0;
    background-color: white;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-shadow: 0 2px 8px rgba(0,0,0,.26);
    width: 300px;
    max-height: 300px;
    overflow: auto;
    z-index: 100;
}
</style>