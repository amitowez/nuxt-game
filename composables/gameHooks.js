import { onMounted } from "vue";

export const useGameHooks = ()=>{
    let containerHeight = ref();
    let containerWidth = ref();

    onMounted(() => {
        containerHeight.value =  Math.round((window.innerHeight / 100) * 89)
        containerWidth.value = Math.round((window.innerWidth / 100) * 99)
        console.log('init', containerHeight.value,containerWidth.value)
        function resize(){
            containerHeight.value = Math.round((window.innerHeight / 100) * 89)
            containerWidth.value = Math.round((window.innerWidth / 100) * 99)
            console.log('resize', containerHeight.value,containerWidth.value)
        }
        
        console.log(containerHeight.value, containerWidth.value)
        window.onresize = resize;
    })
    return {
        containerHeight,
        containerWidth,
    }
}