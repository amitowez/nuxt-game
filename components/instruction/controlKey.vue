<script setup>
const props = defineProps({
   value: Object
})
</script>

<template>
    <div class="centried" style="flex-direction: column">
        <p class="instruction-text"> {{ props.value.description }}</p>
        <div  class="centried programm-btn"> {{ props.value.button }} </div> 
    </div>
</template>