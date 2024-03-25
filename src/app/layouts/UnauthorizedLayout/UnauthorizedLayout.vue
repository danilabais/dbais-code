<template>
  <UIContainerBase :class="styles.wrapper">
    <UILogoBase />

    <UITextBase :class="styles.text">
      Приложение для заметок. Для того, чтобы начать пользоваться, авторизуйтесь
    </UITextBase>

    <UIButtonBase @click="handleAuth"> Авторизоваться </UIButtonBase>
    <UIButtonBase @click="handleAdmin"> Авторизоваться как админ </UIButtonBase>
    <UIButtonBase @click="handleAuthQuest">
      Авторизоваться как гость
    </UIButtonBase>
  </UIContainerBase>
</template>

<script setup lang="ts">
import styles from "./UnauthorizedLayout.module.scss";
import { UIContainerBase, UILogoBase, UITextBase, UIButtonBase } from "@/UI";
import { useAuth } from "@/composables";
const { login, loginAsQuest } = useAuth();
const handleAuth = () => {
  login({ userRole: "common" });
};
const handleAdmin = () => {
  login({ userRole: "admin" });
};
const handleAuthQuest = () => {
  loginAsQuest();
};
</script>
