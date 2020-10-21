<template>
  <div class="home">
    <h2> I'm Home vue</h2>
    <EmploymentHistory />

  </div>
</template>

<script>
// @ is an alias to /src
import EmploymentHistory from "@/components/EmploymentHistory"


export default {
  name: 'Home',
  components: {
    EmploymentHistory,
   
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