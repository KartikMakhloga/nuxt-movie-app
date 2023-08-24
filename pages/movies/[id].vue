<script setup>
const route = useRoute()
const { data,error } = await useFetch(`http://www.omdbapi.com/?apikey=39716fd&i=${route.params.id}`, {
    pick: ["Plot", "Title","Error"],
    key: `/movies/$route.params.id`,
})

if(error.value){
  //we can handle error here 
}

if (data.value.Error === "Incorrect IMDb ID.") {
            showError({ statusCode: 404, statusMessage: "Page Not Found" })
        }
</script>

<template>
    <div>
        <pre>{{ data }}</pre>
    </div>
</template>