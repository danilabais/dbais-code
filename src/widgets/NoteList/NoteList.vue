<template>
  <div :class="styles.wrapper">
    <NoteBase v-for="note in noteStore.allNotes" :note="note"  :key="note.id"/>
  </div>
</template>

<script setup lang="ts">
import styles from "./NoteList.module.scss";
import { NoteBase } from "@/entities";
import { useNoteStore } from '@/models'
const noteStore = useNoteStore()
</script>
