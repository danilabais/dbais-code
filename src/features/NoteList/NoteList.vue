<template>
  <div :class="styles.wrapper">
    <div v-if="!noteStore.allNotes.length" :class="styles.noOneYet">
      no note has been created yet
    </div>
    <slot v-for="note in noteStore.allNotes" name="note" :note="note" />
  </div>
</template>

<script setup lang="ts">
import styles from "./NoteList.module.scss";
import { useNoteStore } from "@/models";
const noteStore = useNoteStore();
</script>
