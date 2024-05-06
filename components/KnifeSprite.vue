<script setup>
const props = defineProps({
    knife: Object
});
const top = ref(props.knife.top)
const left = ref(props.knife.left)
onMounted(()=>{
   const  interval =  setInterval(()=>{
        // console.log(props.knife.id)
        if(props.knife.skewX === 0){
           if(left.value + 40 <= props.knife.contWidth+60){
                changeKnifePosition(30)
            } else {
                clearInterval(interval)
            }
        } else {
            if(left.value - 40 >= -60){
                changeKnifePosition(-30)
            } else { 
                clearInterval(interval)
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
        texture="/img/knife.png"
        :anchor="0.5" 
        :scale="0.05"
        :x="left" 
        :y="top"
        :rotation="props.knife.skewX ? 0.8 : 2.4"
        :skew-x="props.knife.skewX"
    />
  </template>