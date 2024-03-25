<template>
  <div :class="styles.wrapper">
    <div :class="styles.title">{{ note.title }}</div>
    <div :class="styles.body">
      <div :class="styles.date">
        {{ new Date(props.note.createdAt).toLocaleDateString() }} ({{
          props.note.authorMail
        }})
      </div>
      <div :class="styles.text">{{ props.note.text }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import styles from "./NoteBase.module.scss";
import type { note as noteType } from "@/types";

const props = defineProps<{
  note: noteType;
}>();
</script>
