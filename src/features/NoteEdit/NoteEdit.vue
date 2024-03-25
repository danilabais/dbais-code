<template>
  <UIButtonBase small @click="isModalOpen = true"> edit </UIButtonBase>

  <UIModalBase v-model:isModalOpen="isModalOpen" @close="onCloseModal">
    <div :class="styles.wrapper">
      <div :class="styles.title">Edit note</div>

      <UITextareaBase
        v-model="noteText"
        placeholder="Text"
        :error="errors.noteText"
      />
      <UIButtonBase :class="styles.noteAdd" @click="handleEdit">
        Edit
      </UIButtonBase>
    </div>
  </UIModalBase>
</template>

<script setup lang="ts">
import styles from "./NoteEdit.module.scss";
import { useNoteStore } from "@/models";
import { UIModalBase, UIButtonBase, UITextareaBase } from "@/UI";
import { ref } from "vue";

const isModalOpen = ref(false);

const props = defineProps<{
  noteId: number;
  noteText: string;
}>();

const initialErrors = () => ({
  noteText: "",
});

const validate = () => {
  //simple validation, I'll include the library later
  let result = true;

  errors.value = initialErrors();

  if (!noteText.value) {
    errors.value.noteText = "Text is required!";
    result = false;
  }

  return {
    isValid: result,
  };
};

const noteStore = useNoteStore();
const noteText = ref(props.noteText);

const errors = ref(initialErrors());

const resetData = () => {
  noteText.value = props.noteText;
  errors.value = initialErrors();
};

const handleEdit = () => {
  const { isValid } = validate();

  if (!isValid) {
    return;
  }

  noteStore.editNote({
    id: props.noteId,
    text: noteText.value,
  });

  resetData();
  isModalOpen.value = false;
};
const onCloseModal = () => {
  resetData();
};
</script>
