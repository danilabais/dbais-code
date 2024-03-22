import {defineStore} from 'pinia'
import { computed, ref } from 'vue'
import {note} from '@/types'

export const useNoteStore = defineStore('note', () => {
    const notes = ref<note[]>([
        {
            createdAt: 1711058066486,
            authorMail: 'da_buddha@bk.ru',
            text: 'Привет мирПривет мирПривет мирПривет мирПривет мирПривет мирПривет мирПривет мирПривет мирПривет мирПривет мирПривет мирПривет мирПривет мир',
            lastModification: 1711058066486,
            id: 1711058066486,
            title: "КУ!"
        }
    ])

   const allNotes = computed(()=>notes.value)
  
    return { allNotes }
  })