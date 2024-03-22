<template>
  <UIContainerBase space>
    <NoteList />
  </UIContainerBase>

  <NoteAdd />
</template>

<script setup lang="ts">
import { UIContainerBase } from "@/UI";

import { NoteList,NoteAdd } from "@/widgets";
</script>
