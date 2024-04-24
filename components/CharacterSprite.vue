<script setup>
import { reactive } from 'vue'
import { Loader } from 'vue3-pixi'
import {moveEvent} from "./moveFunctions/setPositionAndChangeAnim"


const resource = reactive({
  spritesheet: void 0,
  animation: void 0
});

const animPosition = reactive({
    top: 120,
    left: 120
})
window.addEventListener('keydown', event => {
    const keysMap = {37: 'left', 38: 'top', 39: 'right', 40: 'down'};
    console.log(resource)
    if(keysMap[event.keyCode]) {
        // console.log(`Нажата клавиша ${keysMap[event.keyCode]}. Отлично!`);
        moveEvent(animPosition, resource.animation, resource.spritesheet.animations, keysMap[event.keyCode])
        // resource.animation = resource.spritesheet.animations['adventurer-idle']
    }
});
function onResolved(sheet) {
  resource.spritesheet = sheet;
  console.log(sheet.animations)
  resource.animation = sheet.animations["adventurer-idle"];
}


function onChangeAnimation() {
  // const keys = Object.keys(resource.spritesheet.animations);
  // const randomIndex = Math.floor(Math.random() * keys.length);
  resource.animation =  resource.animation
}
</script>

<template>
  <Loader
    :resources="{ spritesheet: 'https://raw.githubusercontent.com/hairyf/vue3-pixi/main/docs/public/assets/adventurer-spritesheet.json' }"
    @resolved="onResolved($event.spritesheet)"
  >
    <animated-sprite
      :textures="resource.animation"
      playing
      :animation-speed="0.1"
      :anchor="0.5"
      :x="animPosition.left"
      :y="animPosition.top"
      :scale="1.4"
      @loop="onChangeAnimation"
    />
  </Loader>
</template>