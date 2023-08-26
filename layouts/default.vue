<template>
    <nav style="display:flex; gap:10px;">
        <NuxtLink to="/">Home</NuxtLink>
        <NuxtLink to="/movies">Movies</NuxtLink>

        <!-- external link -->
        <NuxtLink to="https://github.com/KartikMakhloga" target="_blank">GitHub</NuxtLink>
        <NuxtLink to="/login">LogIn</NuxtLink>
    </nav>
    <slot>
    </slot>
</template>