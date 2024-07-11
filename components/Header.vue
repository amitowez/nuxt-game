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
  { label: 'instruction', to: '/instruction' },
  { label: '1 vs 1', to: '/game1' },
]
function GoToPath(path){
    router.push(path)
}
</script>
