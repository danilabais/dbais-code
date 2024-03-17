<template>
  <div :class="styles.wrapper">
    <UIContainerBase :class="styles.inner">
      <UILogoBase />
      <UIButtonBase> Exit </UIButtonBase>
    </UIContainerBase>
  </div>
</template>

<script setup lang="ts">
import styles from "./HeaderBase.module.scss";
import { UIContainerBase, UIButtonBase, UILogoBase } from "@/UI";
</script>
