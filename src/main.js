// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false;

//Data
const teams = [
  { name: 'Arsenal', code: 'ARS', shirt: '#FA0707', shorts: '#E4E4F0'},
  { name: 'Chelsea', code: 'CHE', shirt: '#10009E', shorts: '#10009E'},
  { name: 'Everton', code: 'EVE', shirt: '#0D0082', shorts: '#E4E4F0'},
  { name: 'Leicester City', code: 'LEI', shirt: '#1502BD', shorts: '#E4E4F0'},
  { name: 'Liverpool', code: 'LIV', shirt: '#ED0000', shorts: '#ED0000'},
  { name: 'Manchester City', code: 'MNC', shirt: '#88EBE9', shorts: '#E4E4F0'},
  { name: 'Manchester United', code: 'MNU', shirt: '#DB0000', shorts: '#040404'},
  { name: 'Tottenham Hotspur', code: 'TOT', shirt: '#E4E4F0', shorts: '#010963'},
  { name: 'Watford', code: 'WAT', shirt: '#E4F70A', shorts: '#050505'},
  { name: 'West Ham United', code: 'WHU', shirt: '#5C153A', shorts: '#E4E4F0'},
];

let playerList = [
  { name: "Cech", team: "ARS", price: 7.0, position: 'gk' },
  { name: "Courtois", team: "CHE", price: 8.0, position: 'gk' },
  { name: "Pickford", team: "EVE", price: 6.5, position: 'gk' },
  { name: "Schmeichel", team: "LEI", price: 6.5, position: 'gk' },
  { name: "Mignolet", team: "LIV", price: 7.0, position: 'gk' },
  { name: "Ederson", team: "MNC", price: 7.5, position: 'gk' },
  { name: "De Gea", team: "MNU", price: 8.0, position: 'gk' },
  { name: "Lloris", team: "TOT", price: 7.5, position: 'gk' },
  { name: "Gomes", team: "WAT", price: 6.0, position: 'gk' },
  { name: "Hart", team: "WHU", price: 6.5, position: 'gk' },
  { name: "Monreal", team: "ARS", price: 7.5, position: 'def' },
  { name: "David Luiz", team: "CHE", price: 8.5, position: 'def' },
  { name: "Keane", team: "EVE", price: 7.0, position: 'def' },
  { name: "Maguire", team: "LEI", price: 6.5, position: 'def' },
  { name: "Matip", team: "LIV", price: 7.5, position: 'def' },
  { name: "Stones", team: "MNC", price: 8.0, position: 'def' },
  { name: "Bailly", team: "MNU", price: 8.5, position: 'def' },
  { name: "Alderweireld", team: "TOT", price: 9.0, position: 'def' },
  { name: "Holebas", team: "WAT", price: 6.0, position: 'def' },
  { name: "Cresswell", team: "WHU", price: 6.5, position: 'def' },
  { name: "Ozil", team: "ARS", price: 11.0, position: 'mid' },
  { name: "Hazard", team: "CHE", price: 12.0, position: 'mid' },
  { name: "Rooney", team: "EVE", price: 9.0, position: 'mid' },
  { name: "Drinkwater", team: "LEI", price: 8.0, position: 'mid' },
  { name: "Coutinho", team: "LIV", price: 12.0, position: 'mid' },
  { name: "De Bruyne", team: "MNC", price: 11.5, position: 'mid' },
  { name: "Pogba", team: "MNU", price: 10.5, position: 'mid' },
  { name: "Eriksen", team: "TOT", price: 10.5, position: 'mid' },
  { name: "Capoue", team: "WAT", price: 8.0, position: 'mid' },
  { name: "Noble", team: "WHU", price: 7.5, position: 'mid' },
  { name: "Sanchez", team: "ARS", price: 13.0, position: 'att' },
  { name: "Morata", team: "CHE", price: 12.5, position: 'att' },
  { name: "Niasse", team: "EVE", price: 8.0, position: 'att' },
  { name: "Vardy", team: "LEI", price: 9.5, position: 'att' },
  { name: "Firmino", team: "LIV", price: 10.0, position: 'att' },
  { name: "Aguero", team: "MNC", price: 13.0, position: 'att' },
  { name: "Lukaku", team: "MNU", price: 12.5, position: 'att' },
  { name: "Kane", team: "TOT", price: 14.0, position: 'att' },
  { name: "Deeney", team: "WAT", price: 8.0, position: 'att' },
  { name: "Chicharito", team: "WHU", price: 8.5, position: 'att' },
];

const tempSquad = [
  { name: "", team: "", price: 0, position: "gk" },
  { name: "", team: "", price: 0, position: "def" },
  { name: "", team: "", price: 0, position: "def" },
  { name: "", team: "", price: 0, position: "def" },
  { name: "", team: "", price: 0, position: "def" },
  { name: "", team: "", price: 0, position: "mid" },
  { name: "", team: "", price: 0, position: "mid" },
  { name: "", team: "", price: 0, position: "mid" },
  { name: "", team: "", price: 0, position: "mid" },
  { name: "", team: "", price: 0, position: "att" },
  { name: "", team: "", price: 0, position: "att" }
];

//Add each teams colours to each player

playerList.forEach(player => {
  teams.forEach(team => {
    if(player.team === team.code){
      player.shirt = team.shirt
      player.shorts = team.shorts
    }
  })
});


/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: `<App v-on:delete="deletePlayer"
                   v-on:add="addPlayer"
                   :squad="squad"
                   :bank="bank"
                   :message="message"
                   :allplayers="allplayers">
              </App>`,
  components: { App },
  data: {
  squad: [...tempSquad],
  allplayers: [...playerList],
  bank: 100,
  message: '',
  limits: [
    { position: 'gk', limit: 1 },
    { position: 'def', limit: 4 },
    { position: 'mid', limit: 4 },
    { position: 'att', limit: 2 },
  ]
},

methods: {

  deletePlayer (player) {
    //find player in squad and remove
    let index;
    this.squad.forEach((el, i) => {
      if(el.name === player.name){
        index = i;
      }
    });
    this.$delete(this.squad, index);

    //Replace deleted player with placeholder
    let pos;
    this.limits.forEach(el => {
      if(el.position === player.position){
        pos = el.limit;
      }
    });
    let count = 0;
    this.squad.forEach(x => {
      if (x.position === player.position) {
        count++;
      }
    });
    if (count < pos) {
      this.$set(this.squad, this.squad.length,
               { name: "", team: "", price: 0, position: player.position });

    }
    this.bank += player.price;
    this.message = 'Player Removed';
  },

  addPlayer (player) {
    //Check if enough in bank
    if (this.bank - player.price >= 0) {

      //Check if player already selected
      let duplicate = false;
      this.squad.forEach(el => {
        if( el.name === player.name) {
          duplicate = true;
          this.message = 'Player already selected';
        }
      });

      //delete placeholder before adding new player
      if (!duplicate) {
        let index = -1;
        this.squad.forEach((el, i) => {
          if (el.position === player.position && el.name === "") {
              index = i
          }
        });
        if(index >= 0){
          this.$delete(this.squad, index)
        }

        //check if too many players in the same position
        let addToSquad = true;
        let pos;
        this.limits.forEach(el => {
          if (el.position === player.position) {
            pos = el.limit;
          }
        });
        let count = 0;
        this.squad.forEach(x => {
          if (x.position === player.position) {
            count++;
          }
        });
        if (count + 1 > pos) {
          addToSquad = false;
          this.message = 'Positions Full';
        }

        //If ok add player to squad
        if (addToSquad) {
          this.$set(this.squad, this.squad.length, player);
          this.bank -= player.price;
          this.message = 'Player Selected';
        }
      }
    } else {
        this.message = 'Not Enough in Bank';
      }
  }
}

});
