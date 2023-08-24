<script setup>
const route = useRoute()
const { data } = useAsyncData(`/movies/$route.params.id`,() => {
    return $fetch(`http://www.omdbapi.com/?apikey=39716fd&i=${route.params.id}`)
})

</script>

<template>
    <div>
        <pre>{{ data }}</pre>
    </div>
</template>