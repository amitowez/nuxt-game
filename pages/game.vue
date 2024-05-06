<script setup>
import { Application } from "vue3-pixi";
const gameParam = useGameHooks()
const knifes = ref([])

function addKnife(param){
  console.log(param)
  knifes.value.push({
    id: +new Date(),
    top: param.top,
    left: param.left,
    contHeight: gameParam.containerHeight.value,
    contWidth: gameParam.containerWidth.value,
    skewX: param.skewX,
  })
}
function clearKnife(id){
  console.log('clear', id)
  knifes.value = knifes.value.filter(item => item.id != id)

}
</script>

<template>
  <Application 
    v-if="gameParam.containerHeight.value" 
    style="margin-top: 1vh;" 
    :width="gameParam.containerWidth.value" 
    :height="gameParam.containerHeight.value"
    >
    <text :x="0" :y="0" :style="{
      fontFamily: 'Arial',
      fontSize: 36,
      fontStyle: 'italic',
      fontWeight: 'bold',
      fill: ['#ffffff'], // gradient
      stroke: '#4a1850',
      strokeThickness: 5,
 
      }">
      Basic text in pixi
    </text>
    <CharacterSprite 
      :canvasHeight="gameParam.containerHeight.value" 
      :canvasWidth="gameParam.containerWidth.value"
      @create-knife="(param)=>addKnife(param)" 
      />
    <template v-for="knife in knifes" :key="knife.id" >
      <KnifeSprite 
        v-if="knife"
        :knife="knife"/>
    </template>

  </Application>
</template>