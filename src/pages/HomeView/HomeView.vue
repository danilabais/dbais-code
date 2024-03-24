<template>
  <UIContainerBase :class="styles.wrapper" space>
     <NoteList />
     <NoteAdd />
  </UIContainerBase>


</template>

<script setup lang="ts">
import { UIContainerBase } from "@/UI";
import { NoteList, NoteAdd } from "@/features";
import styles from './HomeView.module.scss'

</script>
