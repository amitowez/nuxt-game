<script setup>
import { onMounted } from "vue";
import { Application } from "vue3-pixi";
let containerHeight;
let containerWidth;
let appl;

onMounted(() => {
    containerHeight =  ref(Math.round((window.innerHeight / 100) * 89))
    containerWidth = ref(Math.round((window.innerWidth / 100) * 99))
    console.log('init', containerHeight.value,containerWidth.value)
    function resize(){
        containerHeight.value = Math.round((window.innerHeight / 100) * 89)
        containerWidth.value = Math.round((window.innerWidth / 100) * 99)
        console.log('resize', containerHeight.value,containerWidth.value)
    }

    appl  = ref()
    console.log(appl)
    window.onresize = resize;
})


</script>

<template>
  <Application v-if="containerHeight"  ref="appl" style="margin-top: 1vh;" :width="containerWidth" :height="containerHeight">
    <text :anchor="10" x="30" y="30" :style="{ fill: 'white'}">
      Hello NuxtJS World
    </text>
    <CharacterSprite/>
  </Application>
</template>