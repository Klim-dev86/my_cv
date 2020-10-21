<template>

  <div id="app">
    <header>
      <Header />
      <Navigation />
    </header>

    <main>
           
      <router-view />

    </main>

    <Footer />

  </div>
</template>


<script>
import Header from "@/components/Header"
import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"

export default {
  name: 'app',
  components:{
    Header,
    Navigation,
    Footer

    }
  }
</script>



<style lang="scss">

@import '~materialize-css/dist/css/materialize.min.css';

#app {
  background: #42b983;
  height: 100vh;
}

body {
    display: flex;
    min-height: 100vh;
    flex-direction: column;
}

main {
    flex: 1 0 auto;
}

// #nav {
//   padding: 30px;

//   a {
//     font-weight: bold;
//     color: #2c3e50;

//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// }

</style>
