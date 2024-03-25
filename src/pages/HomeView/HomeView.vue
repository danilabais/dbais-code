<template>
  <UIContainerBase :class="styles.wrapper" space>
    <NoteList />
  </UIContainerBase>
</template>

<script setup lang="ts">
import { UIContainerBase } from "@/UI";
import { NoteList } from "@/widgets";
import styles from "./HomeView.module.scss";
</script>
