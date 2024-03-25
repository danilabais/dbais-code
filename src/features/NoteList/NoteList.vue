<template>
  <div :class="styles.wrapper">
    <div :class="styles.noOneYet" v-if="!noteStore.allNotes.length">
      no note has been created yet
    </div>
    <slot name="note" :note="note" v-for="note in noteStore.allNotes"  />
  </div>
</template>

<script setup lang="ts">
import styles from "./NoteList.module.scss";
import { useNoteStore } from "@/models";
const noteStore = useNoteStore();
</script>
