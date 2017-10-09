// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import { teams, playerList, tempSquad } from './assets/data.js'

Vue.config.productionTip = false;

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
