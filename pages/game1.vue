<script setup>
import { Application } from "vue3-pixi";
import { startPlayersPosition } from "@/consts/playersParams"
import { textInGame } from "@/consts/pixiStyles"
const gameParam = useGameHooks()
const knifes = ref([])
const playerOne = 'one'
const playerTwo = 'two'
const playerOneHighlighting = reactive({
  x: startPlayersPosition[playerOne].left,
  y:  startPlayersPosition[playerOne].top ,
})
const playerTwoHighlighting = reactive({
  x: startPlayersPosition[playerTwo].left,
  y:  startPlayersPosition[playerTwo].top,
})
function addKnife(position){
  knifes.value.push({
    id: +new Date(),
    top: position.top,
    left: position.left,
    contHeight: gameParam.containerHeight.value,
    contWidth: gameParam.containerWidth.value,
    skewX: position.skewX,
  })
}
function setHighlighting(position, player){
  if(player === playerOne){
    playerOneHighlighting.x = position.left
    playerOneHighlighting.y = position.top 
  } else {
    playerTwoHighlighting.x = position.left
    playerTwoHighlighting.y = position.top 
  }
}
// function clearKnife(id){
//   console.log('clear', id)
//   knifes.value = knifes.value.filter(item => item.id != id)
// }
</script>

<template>
  <Application 
    v-if="gameParam.containerHeight.value" 
    style="margin-top: 1vh;" 
    :width="gameParam.containerWidth.value" 
    :height="gameParam.containerHeight.value"
    >
    <text 
      :x="playerOneHighlighting.x" 
      :y="playerOneHighlighting.y" 
      :style="textInGame">
      1
    </text>
    <CharacterSprite 
      :canvasHeight="gameParam.containerHeight.value" 
      :canvasWidth="gameParam.containerWidth.value"
      :player="playerOne"
      @create-knife="(position)=>addKnife(position)" 
      @highlighting="(position)=>setHighlighting(position, playerOne)"
    />
    <text 
      :x="playerTwoHighlighting.x" 
      :y="playerTwoHighlighting.y" 
      :style="textInGame">
      2
    </text>
    <CharacterSprite 
      :canvasHeight="gameParam.containerHeight.value" 
      :canvasWidth="gameParam.containerWidth.value"
      :player="playerTwo"
      @create-knife="(position)=>addKnife(position)" 
      @highlighting="(position)=>setHighlighting(position, playerTwo)"
    />
    <template v-for="knife in knifes" :key="knife.id" >
      <KnifeSprite 
        v-if="knife"
        :knife="knife"/>
    </template>
  </Application>
</template>../consts/playersParams