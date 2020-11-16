<template>

  <div id="app">
    <main>
      <Header class='header' />
      <Navigation class="nav" />
      <main>
             
        <router-view />
  
      </main>
  
      <Footer />
    </main>
  </div>
</template>


<script>
import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";


export default {
  name: 'app',
 
  components:{
    Header,
    Navigation,
    Footer

  },

  
}




</script>



<style lang="scss">

@import '~materialize-css/dist/css/materialize.min.css';

#app {
  background-image: url('../src/assets/main-bgrnd.png');
  display: flex;
  justify-content: center;
}

main {
  background: rgb(180, 180, 180);
  width: 1200px;
  margin-left: auto;
  margin-right: auto;
  // justify-content: center;
}


.header {
  background: linear-gradient(135deg, rgb(92, 92, 92), rgb(190, 190, 190) 60%, rgb(43, 43, 43));
  height: 30vh;
  display: flex;
  padding: 10px;


}


.nav {
  position: sticky;
  top: 0;
  z-index: 10;
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
