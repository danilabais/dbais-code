<template>
  <div :class="styles.wrapper">
    <UIContainerBase :class="styles.inner">
      <UILogoBase /> {{ new Date().getFullYear() }}
    </UIContainerBase>
  </div>
</template>

<script setup lang="ts">
import styles from "./FooterBase.module.scss";
import { UIContainerBase, UILogoBase } from "@/UI";
</script>
