<template>
    <button :class="style.btn">
        <slot />
    </button>
</template>

<script setup lang="ts">
import style from './UIUnstyleButton.module.scss'

</script>