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
    <CharacterSprite 
      :canvasHeight="gameParam.containerHeight.value" 
      :canvasWidth="gameParam.containerWidth.value"
      @create-knife="(param)=>addKnife(param)" 
      />
    <template v-for="knife in knifes" :key="knife.id" >
      <KnifeSprite 
        v-if="knife"
        :knife="knife" 
        @clear-knife="clearKnife(knife.id)" />
    </template>

  </Application>
</template>