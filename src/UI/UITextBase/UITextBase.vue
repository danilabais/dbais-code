<template>
  <p :class="styles.text">
    <slot />
  </p>
</template>

<script setup lang="ts">
import styles from "./UITextBase.module.scss";
</script>
