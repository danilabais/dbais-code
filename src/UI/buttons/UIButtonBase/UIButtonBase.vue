<template>
  <button :class="styles.button">
    <slot />
  </button>
</template>

<script setup lang="ts">
import styles from "./UIButtonBase.module.scss";
</script>
