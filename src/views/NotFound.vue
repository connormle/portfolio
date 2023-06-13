<template>
    <div class="wrapper">
    <h1>404</h1>
    <p>Page Not Found</p>
   <router-link class="link" to="/about"> Go back to Home Page</router-link>
    </div>
</template>
<style scoped>
body {
text-align: center;
}
.link {
    text-align: center;
}
.wrapper {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}
h1 {
    font-size: 10vh;
}
</style>