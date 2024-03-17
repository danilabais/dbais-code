<template>
  <UIContainerBase :class="styles.wrapper">
    <UILogoBase />

    <UITextBase :class="styles.text">
      Приложение для заметок. Для того, чтобы начать пользоваться, авторизуйтесь
    </UITextBase>
    <UIButtonBase> Авторизоваться </UIButtonBase>
  </UIContainerBase>
</template>

<script setup lang="ts">
import styles from "./UnauthorizedLayout.module.scss";
import { UIContainerBase, UILogoBase, UITextBase, UIButtonBase } from "@/UI";
</script>
