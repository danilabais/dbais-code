<template>
  <div :class="styles.wrapper">
    <div v-if="!noteStore.allNotes.length" :class="styles.noOneYet">
      no note has been created yet
    </div>
    <slot v-for="note in notesSortedByLastModificationTime" name="note" :note="note" />
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import styles from "./NoteList.module.scss";
import { useNoteStore } from "@/models";
const noteStore = useNoteStore();

const notesSortedByLastModificationTime = computed(() => {
  return  [...noteStore.allNotes].sort((a, b) =>  b.lastModification - a.lastModification )
})
</script>
