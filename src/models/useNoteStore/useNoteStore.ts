import { defineStore } from "pinia";
import { computed } from "vue";
import { note } from "@/types";
import { useAuth } from "@/composables";
import { useStorage } from "@vueuse/core";
import { notes as notesFixtures } from "./fixtures";

type createNote = Pick<note, "authorMail" | "text">;
type editNote = Pick<note, "text" | "id">;
type deleteNote = Pick<note, "id">;

export const useNoteStore = defineStore("note", () => {
  const { user, userRole } = useAuth();
  const notes = useStorage<note[]>("notes", notesFixtures);

  const allNotes = computed(() => {
    if (userRole.value === "admin") {
      return notes.value;
    }
    if (!user.value) {
      return [];
    }

    const result = notes.value.filter((el) => {
      return el.authorMail === user.value.email;
    });

    return result;
  });

  const createNote = ({ authorMail, text }: createNote) => {
    notes.value.push({
      createdAt: +new Date(),
      authorMail,
      text,

      lastModification: +new Date(),
      id: +new Date(),
    });
  };
  const editNote = ({ text, id }: editNote) => {
    const finedNote = notes.value.find((el) => el.id === id);
    if (!finedNote) {
      return;
    }

    finedNote.text = text;
    finedNote.lastModification = +new Date();
  };

  const deleteNote = ({ id }: deleteNote) => {
    notes.value = notes.value.filter((note) => note.id !== id);
  };

  return { allNotes, createNote, deleteNote, editNote };
});
