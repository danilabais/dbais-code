<template>
  <Teleport to="body">
    <div :class="styles.wrapper">
      <UIContainerBase>
        <div :class="styles.modalBody">
          <slot />
        </div>
      </UIContainerBase>

      <div :class="styles.outlet" @click.self="closeModal" />
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import styles from "./UIModalPromise.module.scss";
import { UIContainerBase } from "@/UI";

const emit = defineEmits(["closeModal"]);

const closeModal = () => {
  emit("closeModal");
};
</script>
