<template>
  <div class="home">
    <h2> Опыт работы</h2>
    <EmploymentHistory />
    <h2> Образование</h2>
    <Education />

  </div>
</template>

<script>
// @ is an alias to /src
import EmploymentHistory from "@/components/EmploymentHistory"
import Education from "@/components/Education"



export default {
  name: 'Home',
  components: {
    EmploymentHistory,
    Education
   
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