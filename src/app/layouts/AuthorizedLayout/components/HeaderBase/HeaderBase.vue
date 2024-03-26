<template>
  <div :class="styles.wrapper">
    <UIContainerBase :class="styles.inner">
      <router-link :to="{ name: 'HomeView' }">
        <UILogoBase />
      </router-link>
      <div :class="styles.left">
        <router-link :to="{ name: 'ProfileView' }">
          <UserProfileBase :image="user.picture" :name="user.email" />
        </router-link>
        <UIButtonBase @click="handleExit"> Exit </UIButtonBase>
      </div>
    </UIContainerBase>
  </div>
  <div :class="styles.fixHeight" />
</template>

<script setup lang="ts">
import styles from "./HeaderBase.module.scss";
import { UIContainerBase, UIButtonBase, UILogoBase } from "@/UI";
import { useAuth } from "@/composables";
import { UserProfileBase } from "@/entities";

const { logout, user } = useAuth();

const handleExit = () => {
  logout();
};
</script>
