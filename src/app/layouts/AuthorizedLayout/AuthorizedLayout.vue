<template>
  <HeaderBase />
  <div :class="styles.test">
    <slot />
  </div>
  <FooterBase />
</template>

<script setup lang="ts">
import { HeaderBase, FooterBase } from "./components";
import styles from './AuthorizedLayout.module.scss'
</script>
