<template>
  <UIButtonBase @click="isModalOpen = true"> Add note </UIButtonBase>

  <UIModalBase v-model:isModalOpen="isModalOpen" @close="onCloseModal">
    <div :class="styles.wrapper">
      <div :class="styles.title">Create note</div>

      <UITextareaBase
        v-model="noteText"
        placeholder="Text"
        :error="errors.noteText"
      />
      <UIButtonBase :class="styles.noteAdd" @click="handleCreate">
        Create
      </UIButtonBase>
    </div>
  </UIModalBase>
</template>

<script setup lang="ts">
import styles from "./NoteAdd.module.scss";
import { useNoteStore } from "@/models";
import { UIModalBase, UIButtonBase, UITextareaBase } from "@/UI";
import { ref } from "vue";
import { useAuth } from "@/composables";

const { user } = useAuth();

const isModalOpen = ref(false);

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

  if (noteStore.allNotes.find((el) => el.text === noteText.value)) {
    alert("A user cannot have two notes with identical text.");

    result = false;
  }

  return {
    isValid: result,
  };
};

const noteStore = useNoteStore();
const noteText = ref("");

const errors = ref(initialErrors());

const resetData = () => {
  noteText.value = "";
  errors.value = initialErrors();
};

const handleCreate = () => {
  const { isValid } = validate();

  if (!isValid) {
    return;
  }

  noteStore.createNote({
    text: noteText.value,
    authorMail: user.value.email,
  });

  resetData();
  isModalOpen.value = false;
};
const onCloseModal = () => {
  resetData();
};
</script>
