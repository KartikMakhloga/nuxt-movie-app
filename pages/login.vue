<script setup>
definePageMeta({
    layout: "plain"
})
</script>

<template>
    <form>
        <h1>Login Form</h1>
        <label>
            Username
            <input type="text" />
        </label>
        <label>
            Password
            <input type="password" />
        </label>
    </form>
    <div style="margin-top: 30px;">
        <NuxtLink to="/">Back to Home</NuxtLink>
    </div>
</template>