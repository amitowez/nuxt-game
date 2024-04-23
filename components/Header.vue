<template>
    <div class="header" >
        <div class="programm-btn centried" v-for="(rout,index) in nav" @click="GoToPath(rout.to)" :key="index">
            {{ rout.label }}
        </div>
    </div>
</template>
<script setup>
const router = useRouter()
const nav = [
  { label: 'Инструкция', to: '/instruction' },
  { label: 'Игра', to: '/game' },
]
function GoToPath(path){
    router.push(path)
}
</script>

<style lang="scss" scoped>
@import '@/assets/style/style.scss';
.header{
    width: 99vw;
    height: 7vh;
    border: $border;
    border-radius: $border-radius-big;
    display: flex;
    align-items: center;
    justify-content: flex-start;
}
</style>