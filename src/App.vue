//Main app component

<template>
  <div class="container">
    <div class="team-container">
      <div class="pitch">
        <div class="gk">
          <player :team="getGk" v-on:remove="removePlayer"></player>
        </div>
        <div class="def">
          <player :team="getDef" v-on:remove="removePlayer"></player>
        </div>
        <div class="mid">
          <player :team="getMid" v-on:remove="removePlayer"></player>
        </div>
        <div class="att">
          <player :team="getAtt" v-on:remove="removePlayer"></player>
        </div>
        <div class="pitch-display"></div>
      </div>
    </div>
    <list :allplayers="allplayers" v-on:addplay="addNewPlayer" :bank="bank" :message="message"></list>
  </div>
</template>

<script>

import List from './components/List';
import Player from './components/Player';

export default {

  name: 'app',

  components: {
    'player': Player,
    'list': List
  },

  props: ['squad', 'allplayers', 'bank', 'message'],

  computed: {

    getGk () {
      return this.squad.filter(player => player.position === 'gk');
    },

    getDef () {
      return this.squad.filter(player => player.position === 'def');
    },

    getMid () {
      return this.squad.filter(player => player.position === 'mid');
    },

    getAtt () {
      return this.squad.filter(player => player.position === 'att');
    }

  },

  methods: {

    addNewPlayer(player){
      this.$emit('add', player);
    },

    removePlayer(player){
      this.$emit('delete', player);
    }

  },
}
</script>

<style lang="scss">

//General Rules
@import './assets/_reset.scss';
@import './assets/_variables.scss';

body {
  background: linear-gradient(45deg, #2F0743, #41295a);
  font-family:  $main-font;
  color: white;
  height: 100vh;
}

.container {
  display: flex;
  width: 80%;
  @media (max-width: 1200px){
    width: 100%;
  }
  @media (max-width: 900px){
    flex-direction: column;
    align-items: center;
  }
  justify-content: space-around;
  margin: 20px auto;
}

.pitch {
  width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  > div > div {
    display: flex;
  }
}

.pitch-display {
  position: absolute;
  z-index: -1;
  border-bottom: 600px solid #3B9131;
	border-left: 80px solid transparent;
	border-right: 80px solid transparent;
	height: 0;
	width: 400px;
}

</style>
