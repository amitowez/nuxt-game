<script setup>
const props = defineProps({
    knife: Object
});
const emit = defineEmits(['clear-knife'])
const top = ref(props.knife.top)
const left = ref(props.knife.left)
const show = ref(true)
onMounted(()=>{
   const  interval =  setInterval(()=>{
        console.log(props.knife.id)
        if(props.knife.skewX === 0){
           if(left.value + 40 <= props.knife.contWidth){
                changeKnifePosition(30)
            } else {
                clearInterval(interval)
                show.value = false
            }
        } else {
            if(left.value - 40 >= 0){
                changeKnifePosition(-30)
            } else { 
                clearInterval(interval)
                show.value = false
            }
        }
    }, 200)
})

function changeKnifePosition(val){
    left.value += val
}
console.log(props.knife)

// 
</script>

<template>
    <sprite
        v-if="show"
        texture="/img/knife.png"
        :anchor="0.5" 
        :scale="0.05"
        :x="left" 
        :y="top"
        :rotation="props.knife.skewX ? 0.8 : 2.4"
        :skew-x="props.knife.skewX"
    />
  </template>