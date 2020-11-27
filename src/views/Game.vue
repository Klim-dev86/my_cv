<template>
    
    <div class='game'>
      <div class="game__field">
        <div id='club' @click="handleClick( 'club' )" class='game__suit-area game__suit-area--clubs'></div>
        <div id='peak' @click="handleClick( 'peak' )" class='game__suit-area game__suit-area--peak'></div>
        <div id='heart' @click="handleClick( 'heart' )" class='game__suit-area game__suit-area--heart'></div>
        <div id='diamond' @click="handleClick( 'diamond' )" class='game__suit-area game__suit-area--diamond'></div>
        <div id='crown' @click="handleClick( 'crown' )" class='game__suit-area game__suit-area--crown'></div>
        <div id='anchor' @click="handleClick( 'anchor' )" class='game__suit-area game__suit-area--anchor'></div>
        <div class='game__massege-area'> Вы выиграли  {{ roundGain }} </div>
      </div>
      <div class='game__spec'>
        <h3 class='game__name'>Корона и якорь</h3>
        <h4 class='game__rule-title'>Правила игры:</h4>
        <p class='game__description'>Ставьте от одного до трех дублонов на одно из шести полей на столе. Бросайте три кости. 
          Если рисунок на кости и на игральном поле совпадет - ставка этого поля удваивается, остальные монеты будут проиграны.
        </p>
        <p class="game__bank-state-info">Дублонов у вас в кармане: {{ funds }}</p>
        <button v-on:click="rollDice" class="game__roll-dice-button waves-effect waves-light btn">Бросить кости</button>
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
      bet: {club: 0,
            diamond: 0,
            peak: 0,
            heart: 0,
            crown: 0,
            anchor: 0
            },
      diceSuits: [
            'club',
            'diamond',
            'peak',
            'heart',
            'crown',
            'anchor'
            ],
      diceState: {club: false,
            diamond: false,
            peak:false,
            heart: false,
            crown: false,
            anchor: false
            },
      message: 'Вы выиграли ',
      roundGain: 0

      
      
    }
  },

  methods: {
    
    handleClick (suit) {  
      
      if (this.bet[suit] < this.maxBet){                                   
        if (this.bet[suit] < this.maxBet){                                   
      if (this.bet[suit] < this.maxBet){                                   
        this.funds--;
        this.bet[suit] ++;
        let elem = document.getElementById(suit);
        
        if (this.bet[suit] == 1) {
          elem.classList.add('game__clubs-area--one-coin');
         
        } else if (this.bet[suit] == 2) {
          elem.classList.remove('game__clubs-area--one-coin');
          elem.classList.add('game__clubs-area--two-coins');

        } else if (this.bet[suit] == 3) {
          elem.classList.remove('game__clubs-area--two-coins');
          elem.classList.add('game__clubs-area--three-coins');
        };          
          };          
        };          
      };
    },

    clearTable () {

      this.bet = {
        club: 0,
        diamond: 0,
        peak: 0,
        heart: 0,
        crown: 0,
        anchor: 0
      };

      this.diceState = {
        club: false,
        diamond: false,
        peak:false,
        heart: false,
        crown: false,
        anchor: false
      };

      let areas = document.querySelectorAll('.game__suit-area');
      console.log(areas)

      for (let area of areas) {
        
        area.classList.remove('game__clubs-area--one-coin');
        area.classList.remove('game__clubs-area--two-coins');
        area.classList.remove('game__clubs-area--three-coins');
      };
    },

    rollDice () {

      this.roundGain = 0

      for (let i = 0; i < 3; i++) {
        let vinSuit = this.diceSuits[Math.floor(Math.random()*this.diceSuits.length)];
        this.diceState[vinSuit] = true;
      };

      for (let suit in this.diceState) {
        console.log(this.diceState[suit]);
        console.log(this.bet[suit]);
        if (this.diceState[suit] == true) {
          this.funds += this.bet[suit] * 2;
          this.roundGain += this.bet[suit] * 2;

        };
      };


      let resultMassege = document.querySelector('.game__massege-area');
      resultMassege.classList.toggle('game__massege-area--show')
      setTimeout(() => resultMassege.classList.toggle('game__massege-area--show'), 2000)

      this.clearTable ()

    },
  



    mounted(){
      var elems = 'Game';
      console.log(elems);
    }
  }
}

</script>


<style lang="scss">

.game {
  display: flex;

  &__field {
    height: 800px;
    width: 800px;
    background-image: url('../assets/table.png');
    background-size: cover;
    position: relative;
  };

  &__spec {
    position: relative;
    height: 800px;
    width: 400px;
    background-image: url('../assets/paper_texture.jpg');
    padding: 10px;
  };

  &__suit-area {
    position: absolute;
    cursor: pointer;
    width: 200px;
    height: 200px;
    background-image: none;

    &--clubs {
      margin-top: 300px;
      margin-left: 40px;
    };

    &--peak {
      margin-top: 80px;
      margin-left: 170px;
    };

    &--heart {
      margin-top: 80px;
      margin-left: 435px;
    };

    &--diamond {
      margin-top: 300px;
      margin-left: 575px;
    };

    &--crown {
      margin-top: 520px;
      margin-left: 170px;
    };

    &--anchor {
      margin-top: 520px;
      margin-left: 435px;
    };
  };

  &__clubs-area--one-coin {
    background-image: url('../assets/one_coin.png');
  };

  &__clubs-area--two-coins {
    background-image: url('../assets/two_coins.png');
  };

  &__clubs-area--three-coins {
    background-image: url('../assets/three_coins.png');
  };

  &__name {
    text-align: center;
    font-weight: bold;
    font-family: 'Pacifico', cursive;
    font-size: 55px;
  };

  &__rule-title {
    font-family: 'Pacifico', cursive;
  };

  &__description {
    text-align: justify;
    font-family: 'Pacifico', cursive;
    font-size: 25px;
    font-weight: normal;
  };

  &__bank-state-info {
    font-size: 28px;
    font-family: 'Pacifico', cursive;
    position: absolute;
    top: auto;
    bottom: 50px;
  };

  &__roll-dice-button {
    position: absolute;
    top: auto;
    bottom: 10px;
  };

  &__massege-area {
    position: absolute;
    text-align: center;
	  top: 0;
	  bottom: 0;
	  left: 0;
	  right: 0;
	  margin: auto;
	  width: 400px;
	  height: 210px;
    background: rgb(255, 255, 255);
    opacity: 0;
    transition: opacity 2s;

    &--show {
      opacity: 1;
      transition: opacity 2s;
    };
  };

  &__massedge-text {
    top: 0;
	  bottom: 0;
	  left: 0;
	  right: 0;
	  margin: auto;
  };

};

</style>