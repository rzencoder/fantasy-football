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
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
