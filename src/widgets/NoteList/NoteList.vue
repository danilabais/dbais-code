<template>
  <NoteList>
    <template #note="{ note }">
      <NoteBase :key="note.id" :note="note">
        <template #controls>
          <NoteEdit
            v-if="isShowEditBtn({ email: note.authorMail })"
            :note-text="note.text"
            :note-id="note.id"
          />
          <NoteDelete :note-id="note.id" />
        </template>
      </NoteBase>
    </template>
  </NoteList>
  <NoteAdd />
</template>

<script setup lang="ts">
import { NoteList, NoteAdd, NoteDelete, NoteEdit } from "@/features";
import { NoteBase } from "@/entities";
import { useAuth } from "@/composables";
const { userRole, user } = useAuth();

const isShowEditBtn = ({ email }: { email: string }) => {
  if (userRole.value === "admin" && email === user.value.email) {
    return true;
  }
  if (email === user.value.email) {
    return true;
  }
  return false;
};
</script>
