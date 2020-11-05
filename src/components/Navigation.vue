<template>
  <nav>
    <div class="nav-wrapper">
      <a href="#" class="name">Клименко Денис</a>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li><router-link to="/">Резюме</router-link></li>
        <li><router-link to="/about">Портфолио</router-link></li>
        <li><router-link to="/game">Игра</router-link></li>
      </ul>
    </div>
  </nav>
</template>


<style lang="scss" scoped>

.nav {
  position: sticky;
  top: 0;
}

.name {
  font-size: 30px;
  margin-left: 10px;
}
</style>



