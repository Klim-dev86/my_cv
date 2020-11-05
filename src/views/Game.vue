<template>
    
    <div class='game'>
      <div class="game__field">
        <div v-on:click="putCoin" class='game__clubs-area'></div>
      </div>
      <div class="game__spec">
       <p>У Вас {{ funds }} дублонов</p>
       <p>Буби {{ bet.clubs }} дублонов</p>
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
      maxBet: 3,
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
      doublonPath: {1: '../assets/one_dublon.png',
                    2: '../assets/two_dublons.png',
                    3: '../assets/three_dublons.png'}
      
      
    }
  },

  methods: {
    putCoin: function(event) {
      this.funds--;
 
      
      this.handleClick(event, 'game__clubs-area', this.bet.clubs);

    


      console.log(event.target);
      

    },

    handleClick: function (event, targetClass, suitBet) {
      // let elem = document.querySelector('.' + this.maxBet);
      if (event.target.classList == targetClass) {
        suitBet++;
        if(suitBet < this.maxBet) {
          // if (suitBet == 1) {
            

          // };
          
          
          
        


        }
        

      };


    },




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
  cursor: pointer;
  width: 200px;
  height: 200px;
  background-image: url('../assets/one_dublon.png');
  margin-top: 300px;
  margin-left: 40px;
}
</style>