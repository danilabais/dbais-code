<template>
  <UIButtonBase small danger @click="handleDelete"> delete </UIButtonBase>

  <TemplatePromise v-slot="{ resolve }">
    <UIModalPromise @close-modal="resolve({ status: false })">
      <div :class="styles.inner">
        <div :class="styles.title">Do you really want to delete this note?</div>
        <div :class="styles.btnWrapper">
          <UIButtonBase danger @click="resolve({ status: true })">
            Delete !
          </UIButtonBase>
          <UIButtonBase @click="resolve({ status: false })">
            cancel
          </UIButtonBase>
        </div>
      </div>
    </UIModalPromise>
  </TemplatePromise>
</template>

<script setup lang="ts">
import styles from "./NoteDelete.module.scss";
import { UIButtonBase, UIModalPromise } from "@/UI";
import { useNoteStore } from "@/models";
const noteStore = useNoteStore();
const props = defineProps<{
  noteId: number;
}>();

import { createTemplatePromise } from "@vueuse/core";

const TemplatePromise = createTemplatePromise<{ status: boolean }>();
import { useScrollLock } from "@vueuse/core";

const isWindowLock = useScrollLock(window, false);

const handleDelete = async () => {
  isWindowLock.value = true;
  const { status } = await TemplatePromise.start();
  if (status) {
    noteStore.deleteNote({ id: props.noteId });
  }
  isWindowLock.value = false;
};
</script>
