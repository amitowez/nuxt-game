<script setup>
import { getKeysToButton } from '@/consts/keyboardMap'
const props = defineProps({
    player: Object,
})
const keys = getKeysToButton(props.player)
</script>

<template>
    <div class="game-control-container">
        <div class="game-control-move">
            <div style="display: flex; justify-content: center;">
                <InstructionControlKey :value="keys['up']" />
            </div>
            <div style="display: flex;">
                <InstructionControlKey :value="keys['right']" />
                <InstructionControlKey :value="keys['down']" />
                <InstructionControlKey :value="keys['left']" />
            </div>
        </div>
        <InstructionControlKey :value="keys['atack']" />
    </div>
</template>