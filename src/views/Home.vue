<template>
  <div class="home">
    <h2> Опыт работы</h2>
    <EmploymentHistory />
    <h2> Образование</h2>

  </div>
</template>

<script>
// @ is an alias to /src
import EmploymentHistory from "@/components/EmploymentHistory"


export default {
  name: 'Home',
  components: {
    EmploymentHistory,
   
  },

  mounted(){
    var elems = document.querySelectorAll('.collapsible');
    Window.M.Collapsible.init(elems);
  }

};
</script>


<style lang="scss">


.home {
    display: flex;
    min-height: 100vh;
    flex-direction: column;
}


</style>