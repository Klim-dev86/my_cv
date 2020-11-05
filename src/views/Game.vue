<template>
    
    <div class='game'>
      <div class="game__field">
        <div v-on:click="putCoin" class='game__clubs-area'></div>
      </div>
      <div class="game__spec">
       <p>У Вас {{ funds }} дублонов</p>
      </div>
    </div>
</template>


<script>
// @ is an alias to /src


export default {
  name: 'Game',
  data(){
    return {
      funds: 50,
      bet: {clubs: 0,
            diamonds: 0,
            peaks: 0,
            hearts: 0,
            crown: 0,
            anchor: 0},
      dice: {clubs: false,
             diamonds: false,
             peaks:false,
             hearts: false,
             crown: false,
             anchor: false},
      
      
    }
  },

  methods: {
    putCoin() {
      this.funds--;
      console.log(this);
      

    }


  },




  mounted(){
    var elems = 'Game';
    console.log(elems);
  }


}
</script>





<style lang="scss">

.game {
  display: flex;

}

.game__field {
  height: 800px;
  width: 800px;
  background-image: url('../assets/table.png');
  background-size: cover;
}

.game__spec {
  height: 800px;
  width: 400px;
  background-color: #fff;

}

.game__clubs-area {
  width: 200px;
  height: 200px;
  background: #000;
  margin-top: 300px;
  margin-left: 40px;
}
</style>