<script setup>
const isLoggedIn = useIsLoggedIn();
definePageMeta({
    layout: "plain"
})

function login(){
  isLoggedIn.value = true;
  useRouter().push("/")
}
</script>

<template>
    <form @submit.prevent="login">
        <h1>Login Form</h1>
        <label>
            Username
            <input type="text" />
        </label>
        <label>
            Password
            <input type="password" />
        </label>
        <button>Login</button>
    </form>
    <div style="margin-top: 30px;">
        <NuxtLink to="/">Back to Home</NuxtLink>
    </div>
</template>