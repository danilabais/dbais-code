<template>
  <div :class="styles.wrapper">
    <div :class="styles.header">
      <slot name="controls" />
      <div :class="styles.date">
        {{ lastTimeEdited }}
        ({{ props.note.authorMail }})
      </div>
    </div>

    <div :class="styles.text">{{ props.note.text }}</div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import styles from "./NoteBase.module.scss";
import type { note as noteType } from "@/types";

const props = defineProps<{
  note: noteType;
}>();

const lastTimeEdited = computed(() => {
  if (props.note.lastModification > props.note.createdAt) {
    return `edited: ${new Date(props.note.lastModification).toLocaleDateString()}`;
  }

  return new Date(props.note.createdAt).toLocaleDateString();
});
</script>
