<template>
    
    <UIModalBase v-model:isOpen="isModalOpen">
        <div :class="styles.wrapper">
            test
        </div>
    </UIModalBase>
</template>

<script setup lang="ts">
import styles from './NoteAdd.module.scss'
import { UIModalBase } from '@/UI'
import { ref } from 'vue'
const isModalOpen = ref(true)


</script>