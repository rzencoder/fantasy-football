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

$main-font: 'Oxygen', sans-serif;
$heading-font: 'Graduate', sans-serif;
$main-text-color: #111;

body {
  background: linear-gradient(45deg, #2F0743, #41295a);
  font-family:  $main-font;
  color: white;
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

//Pitch

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

.strip {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
  > .shirt {
    margin-bottom: -7px;
  }
}

.name {
  text-align: center;
  background: #2F0743;
  padding: 3px;
  width: 90px;
  font-weight: 700;
}

.price {
  text-align: center;
  font-weight: 700;
  background: white;
  color: $main-text-color;
  padding: 3px;
  width: 90px;
}

.close {
  margin-bottom: 3px;
  display: flex;
  height: 20px;
  align-self: flex-end;
  > div {
    font-family: $heading-font;
    text-align: right;
    background: red;
    padding: 2px 5px;
    cursor: pointer;
    border-radius: 5px;
    &:hover {
      background: darken(red, 10%);
    }
  }
}

//List

.list {
  @media (max-width: 900px){
    margin-top: 100px;
  }
}

.title {
  font-size: 40px;
  margin-bottom: 20px;
  font-family: $heading-font;
  font-weight: 700;
}

.info {
  height: 60px;
  background: #BB9BB0;
  margin-bottom: 20px;
  padding: 5px;
  border: 3px solid $main-text-color;
  border-radius: 10px
}

.bank {
  font-size: 30px;
  margin-bottom: 10px;
  font-family: $heading-font;
  font-weight: 700;
  color: $main-text-color;
}

.message {
  color: $main-text-color;
  font-size: 20px;
  margin-bottom: 10px;
  font-family: $heading-font;
  font-weight: 700;
}

.list-container {
  height: 500px;
  overflow: auto;
  font-size: 20px;
}

td {
  padding: 5px 15px;
  font-weight: 700;
}

.table-heading:nth-of-type(n) {
  font-family: $heading-font;
  background: $main-text-color;
  font-size: 20px;
  font-weight: 700;
  > th {
    padding: 5px 15px;
    text-align: left;
    color: white;
    cursor: initial;
  }
}

tr:nth-of-type(n) {
  background: #7C3EA3;
  > td:first-child {
    width: 200px;
    cursor: pointer;
  }
}

tr:nth-of-type(2n) {
  background: #BB9BB0;
  color: $main-text-color;
}

</style>
