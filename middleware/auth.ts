// middleware can be defined as a three different way-
// 1- inline route middleware
// 2- named route middleware
// 3- global route middleware (just by adding .global in the file name)

export default defineNuxtRouteMiddleware((to, from) => {
    let userIsLoggedIn = true;
    if(!userIsLoggedIn){
       return navigateTo("/login");
    }
})
