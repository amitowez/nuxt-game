<script setup>
import { reactive } from 'vue'
import { Loader } from 'vue3-pixi'
import {moveEvent} from "./moveFunctions/setPositionAndChangeAnim"

const keysMap = {37: 'left', 38: 'top', 39: 'right', 40: 'down'};
const resource = reactive({
  spritesheet: void 0,
  animation: void 0
});

const animPosition = reactive({
    top: 120,
    left: 120,
    rotate: 0,
    skewX: 0
})
let activeAnim = ref({})
window.addEventListener('keydown', event => {
    if(keysMap[event.keyCode]) {
        // console.log(`Нажата клавиша ${keysMap[event.keyCode]}. Отлично!`);
        moveEvent(animPosition, activeAnim, resource.spritesheet.animations, keysMap[event.keyCode])
        console.log(activeAnim.value)
        resource.animation = activeAnim.value
    }
});
window.addEventListener('keyup', event => {
    if(keysMap[event.keyCode]) {
        resource.animation = resource.spritesheet.animations["adventurer-idle"]
        if(keysMap[event.keyCode] === 'right'){
          animPosition.rotate = 0
          animPosition.skewX = 0
        }

    }
});
function onResolved(sheet) {
  resource.spritesheet = sheet;
  console.log(sheet.animations)
  resource.animation = sheet.animations["adventurer-idle"];
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
      :rotation="animPosition.rotate"
      :skew-x="animPosition.skewX"

      :loop="true"
    />
  </Loader>
</template>