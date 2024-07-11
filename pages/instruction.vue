<script setup>
import { movePlayers } from '@/consts/playersParams'
</script>

<template>
    <div class="instruction-container">
        <div  v-for="(player, key, index) in movePlayers" >
            <h3 class="instruction-description">{{ 'Falling for the player - ' + index + ' (If the regime provides for)' }}</h3>
            <InstructionControlsKeyboard 
                :player="player" 
                :playerNum="index+1" 
            />
        </div>

    </div>
</template>

