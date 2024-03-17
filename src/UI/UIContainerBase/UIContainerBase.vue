<template>
  <div :class="styles.wrapper">
    <slot />
  </div>
</template>

<script setup lang="ts">
import styles from "./UIContainerBase.module.scss";
</script>
