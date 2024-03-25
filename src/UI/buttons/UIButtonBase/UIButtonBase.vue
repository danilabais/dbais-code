<template>
  <button
    :class="[
      styles.button,
      { [styles.small]: props.small },
      { [styles.danger]: props.danger },
    ]"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
import styles from "./UIButtonBase.module.scss";

const props = withDefaults(
  defineProps<{
    small: boolean;
    danger: boolean;
  }>(),
  {
    small: false,
    danger: false,
  },
);
</script>
