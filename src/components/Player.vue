//Individual player/strip component

<template>
  <div>
   <div v-for="player in team" class="strip" >
     <div class="close">
       <div v-if="player.name"  v-on:click="remove(player)">X</div>
     </div>
     <svg class="shirt" width="40pt" height="30pt" viewBox="0 0 421.000000 295.000000"
          preserveAspectRatio="xMidYMid meet">
        <g transform="translate(0.000000,295.000000) scale(0.100000,-0.100000)"
           :style="{fill: player.shirt}" stroke="none">
          <path d="M505 2440 l-510 -510 345 -345 345 -345 151 151 c138 136 154 150
                173 139 l21 -11 0 -759 0 -760 1075 0 1075 0 0 760 0 759 21 11 c19 11 35 -3
                173 -139 l151 -151 345 345 345 345 -510 510 -510 510 -280 -3 -280 -2 -145
                -63 c-330 -144 -434 -143 -789 7 l-144 61 -271 0 -271 0 -510 -510z"/>
        </g>
      </svg>
      <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
           width="28pt" height="21pt" viewBox="0 0 290.000000 224.000000"
           preserveAspectRatio="xMidYMid meet">
        <g transform="translate(0.000000,224.000000) scale(0.100000,-0.100000)"
           :style="{fill: player.shorts}" stroke="none">
          <path d="M346 2163 c-5 -17 -19 -114 -32 -218 -3 -27 -8 -57 -9 -66 -2 -9 -6
                -40 -10 -69 -4 -29 -8 -61 -10 -70 -2 -9 -6 -41 -10 -70 -4 -29 -8 -61 -10
                -70 -2 -9 -6 -41 -10 -70 -4 -29 -8 -61 -10 -70 -2 -9 -6 -41 -10 -71 -3 -30
                -15 -110 -25 -179 -10 -69 -22 -149 -25 -179 -4 -30 -8 -61 -10 -70 -1 -9 -6
                -38 -9 -66 -7 -51 -14 -101 -21 -145 -2 -14 -7 -47 -11 -75 -3 -27 -8 -58 -10
                -69 -2 -10 -6 -44 -10 -75 -3 -31 -14 -107 -24 -169 l-17 -112 599 0 c470 0
                599 3 602 13 2 6 9 37 15 67 14 64 25 116 40 183 6 26 16 68 22 95 6 26 15 66
                20 90 5 23 13 61 19 85 5 23 14 67 21 97 18 86 33 125 52 128 19 4 29 -17 46
                -98 7 -30 16 -74 21 -97 16 -68 29 -130 39 -175 5 -24 14 -64 20 -90 22 -98
                30 -134 42 -188 6 -30 15 -66 19 -80 l7 -25 570 -3 570 -2 -17 112 c-10 62
                -21 138 -24 169 -4 31 -8 66 -10 76 -3 11 -7 44 -11 73 -4 29 -8 61 -10 70 -2
                9 -6 41 -10 70 -4 29 -8 61 -10 70 -2 9 -6 41 -10 70 -4 29 -8 61 -10 70 -2 9
                -6 41 -10 71 -3 30 -15 110 -25 179 -10 69 -22 149 -25 179 -4 30 -8 62 -10
                71 -2 9 -6 41 -10 70 -4 29 -8 61 -10 70 -2 9 -6 41 -10 70 -4 29 -8 60 -10
                69 -1 9 -6 39 -9 66 -27 198 -37 270 -42 288 -5 16 -66 17 -1089 17 -1023 0
                -1084 -1 -1089 -17z"/>
        </g>
      </svg>
      <div class="name">{{player.name}}</div>
      <div class="price">£{{player.price}}m</div>
    </div>
  </div>
</template>

<script>

export default {

  name: 'player',

  props: ['team'],

  methods: {

    remove (player){
      this.$emit('remove', player);
    }

  }
}

</script>

<style lang="scss" scoped>

@import '../assets/_variables.scss';

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

</style>
