<template>
    
    <Teleport to="body">
        <UITransitionBase>
            <div :class="styles.wrapper" v-if="modalValue">
                <UIContainerBase>
                   
                   <div :class="styles.modalBody" ref="modalBody" >
                       <slot/>
                   </div>
               </UIContainerBase>

                <div :class="styles.outlet"/>
               
            </div>
        </UITransitionBase>
    </Teleport>
</template>

<script setup lang="ts">
import { ref} from 'vue'
import styles from './UIModalBase.module.scss'
import { UITransitionBase, UIContainerBase } from '@/UI'
import { onClickOutside, whenever } from '@vueuse/core'
import { logicNot } from '@vueuse/math'

const emit = defineEmits(['close'])
const modalValue = defineModel<boolean>('isModalOpen')

const modalBody = ref(null)

onClickOutside(modalBody, () => {
    modalValue.value = false
})
whenever(logicNot(modalValue), () => emit('close'))
</script>

