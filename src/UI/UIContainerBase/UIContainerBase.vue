<template>
  <div :class="[styles.wrapper, { [styles.space]: props.space }]">
    <slot />
  </div>
</template>

<script setup lang="ts">
import styles from "./UIContainerBase.module.scss";

const props = withDefaults(
  defineProps<{
    space: boolean;
  }>(),
  {
    space: false,
  },
);
</script>
