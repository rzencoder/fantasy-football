//List component to display all players

<template>
  <div class="list">
    <h2 class="title">FANTASY FOOTBALL</h2>
    <div class="info">
      <div class="bank">Bank: £{{bank.toFixed(1)}}m</div>
      <div class="message">{{message}}</div>
    </div>
    <div class="list-container">
      <table>
        <tr class="table-heading">
          <th>Goalkeepers</th>
          <th>Team</th>
          <th>£</th>
        </tr>
        <tr v-for="player in this.gkList" >
          <td v-on:click="add(player)">{{player.name}}</td>
          <td>{{player.team}}</td>
          <td>{{player.price.toFixed(1)}}</td>
        </tr>
        <tr class="table-heading">
          <th>Defenders</th>
          <th>Team</th>
          <th>£</th>
        </tr>
        <tr v-for="player in this.defList" >
          <td v-on:click="add(player)">{{player.name}}</td>
          <td>{{player.team}}</td>
          <td>{{player.price.toFixed(1)}}</td>
        </tr>
        <tr class="table-heading">
          <th>Midfielders</th>
          <th>Team</th>
          <th>£</th>
        </tr>
        <tr v-for="player in this.midList" >
          <td v-on:click="add(player)">{{player.name}}</td>
          <td>{{player.team}}</td>
          <td>{{player.price.toFixed(1)}}</td>
        </tr>
        <tr class="table-heading">
          <th>Attackers</th>
          <th>Team</th>
          <th>£</th>
        </tr>
        <tr v-for="player in this.attList" >
          <td v-on:click="add(player)">{{player.name}}</td>
          <td>{{player.team}}</td>
          <td>{{player.price.toFixed(1)}}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>

export default {
  name: 'list',
  props: ['allplayers', 'bank', 'message'],

  //Split squad by position to then display
  data: function () {

    let gkList = [];
    let defList = [];
    let midList = [];
    let attList = [];

    this.allplayers.forEach(player => {

      switch(player.position){
        case 'gk':
          gkList.push(player);
          break;
        case 'def':
          defList.push(player);
          break;
        case 'mid':
          midList.push(player);
          break;
        case 'att':
          attList.push(player);
          break;
      }
    });

    return {
        gkList: gkList,
        defList: defList,
        midList: midList,
        attList: attList
      }

  },

  methods: {

    add (player) {
      this.$emit('addplay', player);
    }

  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

@import '../assets/_variables.scss';

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
  height: 400px;
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
