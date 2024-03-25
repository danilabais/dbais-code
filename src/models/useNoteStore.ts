import { defineStore } from "pinia";
import { computed } from "vue";
import { note } from "@/types";
import { useAuth } from "@/composables";
import { useStorage } from "@vueuse/core";

type createNote = Pick<note, "authorMail" | "text" | "title">;

export const useNoteStore = defineStore("note", () => {
  const { user, userRole } = useAuth();
  const notes = useStorage<note[]>("notes", [
    {
      createdAt: 1711058066486,
      authorMail: "da_buddha@bk.ru",
      text: "Привет мирПривет мирПривет мирПривет мирПривет мирПривет мирПривет мирПривет мирПривет мирПривет мирПривет мирПривет мирПривет мирПривет мир",
      lastModification: 1711058066486,
      id: 1711058066486,
      title: "КУ!",
    },
  ]);

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

  const createNote = ({ authorMail, text, title }: createNote) => {
    notes.value.push({
      createdAt: +new Date(),
      authorMail,
      text,
      title,
      lastModification: +new Date(),
      id: +new Date(),
    });
  };

  return { allNotes, createNote };
});
