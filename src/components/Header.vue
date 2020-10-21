<template>
    <header class='header'>
        <div class='header-photo'>Фотография</div>
        <div class='header-info'>Данные</div>
        <div class='header-nav'>
            <router-link to="/">Home</router-link> |
            <router-link to="/about">About</router-link>
        </div>
    </header>
</template>


<style lang="scss">

.header {
  background: #3d67b6;
  height: 20vh;
}

</style>