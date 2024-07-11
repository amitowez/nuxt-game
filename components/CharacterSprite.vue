<script setup>
// import { reactive } from 'vue'
import { Loader } from 'vue3-pixi'
import {moveEvent} from "./moveFunctions/setPositionAndChangeAnim"
import { movePlayers, startPlayersPosition } from '@/consts/playersParams'
const props = defineProps({
  canvasHeight: Number,
  canvasWidth: Number,
  player: String
});
const emit = defineEmits(['create-knife','highlighting'])
const keysMap = movePlayers[props.player]
const resource = reactive({
  spritesheet: void 0,
  animation: void 0
});
window.addEventListener('keydown', event => {
  keydown(keysMap[event.keyCode])
});
window.addEventListener('keyup', event => {
  console.log(event.keyCode)
  keyup(keysMap[event.keyCode])
});
const animPosition = reactive({...startPlayersPosition[props.player]})
let activeAnim = ref({})
let spaceDown = ref(false)
function keydown(code){
  if(code && !spaceDown.value) {
      if(code === 'atack'){
        spaceDown.value = true
        setTimeout(()=>{
          if(spaceDown.value) keyup(code)
        }, 700)
      }
      moveEvent(animPosition, activeAnim, resource.spritesheet.animations,code,props.canvasHeight, props.canvasWidth)
      emit('highlighting', animPosition)
      resource.animation = activeAnim.value
    }
}
function keyup(code){
  if(code) {
    if(code != 'atack'){
      resource.animation = resource.spritesheet.animations["adventurer-idle"]
      if(code === 'right'){
        animPosition.rotate = 0
        animPosition.skewX = 0
      }
    } else {
      emit('create-knife', animPosition)
      spaceDown.value = false
      resource.animation = resource.spritesheet.animations["adventurer-idle"]
    }
  }
}
function onResolved(sheet) {
  resource.spritesheet = sheet;
  // console.log(sheet.animations)
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
</template>../consts/playersParams