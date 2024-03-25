<template>
    <div :class="styles.wrapper">
        <UIImageBase size="xs" :alt="props.name"  :src="props.image"/>
        <div :class="styles.name">
            {{ props.name }}
        </div>
    </div>
</template>

<script setup lang="ts">
import { UIImageBase } from '@/UI';
import styles from './UserProfileBase.module.scss'

const props = defineProps<{
    image: string,
    name: string
}>()
</script>


