<script setup>
const isLoggedIn = useIsLoggedIn();
</script>

<template>
    <nav style="display:flex; gap:10px;">
        <NuxtLink to="/">Home</NuxtLink>
        <NuxtLink to="/movies">Movies</NuxtLink>

        <!-- external link -->
        <NuxtLink to="https://github.com/KartikMakhloga" target="_blank">GitHub</NuxtLink>
        <NuxtLink v-if="!isLoggedIn" to="/login">LogIn</NuxtLink>
        <a href="#" v-else @click.prevent="isLoggedIn = false">LogOut</a>
    </nav>
    <slot>
    </slot>
</template>