<template>
    
    <Teleport to="body">
        <UITransitionBase>
            <div :class="styles.wrapper" v-if="true">
                <div :class="styles.outlet"/>
                <UIContainerBase>
                   
                    <div :class="styles.modalBody" ref="modalBody" >
                        {{ value }}
                        <slot/>
                    </div>
                </UIContainerBase>
            </div>
        </UITransitionBase>
    </Teleport>
</template>

<script setup lang="ts">
import {defineModel, ref} from 'vue'
import styles from './UIModalBase.module.scss'
import { UITransitionBase, UIContainerBase } from '@/UI'
import { onClickOutside } from '@vueuse/core'

const value = defineModel<boolean>('isOpen')

const modalBody = ref(null)

onClickOutside(modalBody, () => {
    value.value = false
})
</script>

