<template>
    
    <div class='game'>
      <div class="game__field">
        <div id='club' v-on:click="putCoin" class='game__suit-area game__suit-area--clubs'></div>
        <div id='peak' v-on:click="putCoin" class='game__suit-area game__suit-area--peak'></div>
        <div id='heart' v-on:click="putCoin" class='game__suit-area game__suit-area--heart'></div>
        <div id='diamond' v-on:click="putCoin" class='game__suit-area game__suit-area--diamond'></div>
        <div id='crown' v-on:click="putCoin" class='game__suit-area game__suit-area--crown'></div>
        <div id='anchor' v-on:click="putCoin" class='game__suit-area game__suit-area--anchor'></div>
      </div>
      <div class="game__spec">
        <h3 class='game__name'>Корона и якорь</h3>
        <h4>Правила игры:</h4>
        <p class='game__description'>Ставьте от одного до трех дублонов на одно из шести полей на столе. Бросайте три кости. 
          Если рисунок на кости и на игральном поле совпадет - ставка этого поля удваивается, остальные монеты проиграны.
        </p>
        <p>У Вас {{ funds }} дублонов</p>
        <button v-on:click="rollDice" class="waves-effect waves-light btn">Бросить кости</button>
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

      
      
    }
  },

  methods: {
    putCoin: function(event) {
      this.handleClick(event, 'club');
      this.handleClick(event, 'peak');
      this.handleClick(event, 'heart');
      this.handleClick(event, 'diamond');
      this.handleClick(event, 'crown');
      this.handleClick(event, 'anchor');
    },

    handleClick: function (event, suit) {
      
      if (event.target.id == suit) {
        
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
    },


    rollDice: function () {
      this.diceState = {club: false,
                        diamond: false,
                        peak:false,
                        heart: false,
                        crown: false,
                        anchor: false
                        };

      for (let i = 0; i < 3; i++) {
        let vinSuit = this.diceSuits[Math.floor(Math.random()*this.diceSuits.length)];
        this.diceState[vinSuit] = true;
      };

      for (let suit in this.diceState) {
        console.log(this.diceState[suit]);
        console.log(this.bet[suit]);
        if (this.diceState[suit] == true) {
          this.funds += this.bet[suit] * 2;

        };
      };

      this.bet = {club: 0,
            diamond: 0,
            peak: 0,
            heart: 0,
            crown: 0,
            anchor: 0
            };

      let areas = document.querySelectorAll('.game__suit-area');
      console.log(areas)
      for (let area of areas) {
        
        area.classList.remove('game__clubs-area--one-coin');
        area.classList.remove('game__clubs-area--two-coins');
        area.classList.remove('game__clubs-area--three-coins');
      }
    }
  },

  mounted(){
    var elems = 'Game';
    console.log(elems);
  },
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
  position: relative;
}

.game__spec {
  height: 800px;
  width: 400px;
  background-image: url('../assets/paper_texture.jpg');
  padding: 10px;

}

.game__suit-area {
  position: absolute;
  cursor: pointer;
  width: 200px;
  height: 200px;
  background-image: none;
}

.game__suit-area--clubs {
  margin-top: 300px;
  margin-left: 40px;
}

.game__suit-area--peak {
  margin-top: 80px;
  margin-left: 170px;
}

.game__suit-area--heart {
  margin-top: 80px;
  margin-left: 435px;
}

.game__suit-area--diamond {
  margin-top: 300px;
  margin-left: 575px;
}

.game__suit-area--crown {
  margin-top: 520px;
  margin-left: 170px;
}

.game__suit-area--anchor {
  margin-top: 520px;
  margin-left: 435px;
}

.game__clubs-area--one-coin {
  background-image: url('../assets/one_coin.png');
}

.game__clubs-area--two-coins {
  background-image: url('../assets/two_coins.png');
}

.game__clubs-area--three-coins {
  background-image: url('../assets/three_coins.png');
}

.game__name {
  text-align: center;
  font-weight: bold;
  font-family: 'Pacifico', cursive;
  font-size: 55px;
}

.game__description {
  font-family: 'Pacifico', cursive;
  font-size: 25px;
  font-weight: normal;

}
</style>