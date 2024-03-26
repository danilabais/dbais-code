<template>
  <Teleport to="body">
    <div v-if="modalValue" :class="styles.wrapper">
      <UIContainerBase>
        <div ref="modalBody" :class="styles.modalBody">
          <slot />
        </div>
      </UIContainerBase>

      <div :class="styles.outlet" />
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import {  ref } from "vue";
import styles from "./UIModalBase.module.scss";
import { UIContainerBase } from "@/UI";
import { onClickOutside, whenever } from "@vueuse/core";
import { logicNot } from "@vueuse/math";

const emit = defineEmits(["close"]);
const modalValue = defineModel<boolean>("isModalOpen", { required: true });

const modalBody = ref(null);


onClickOutside(modalBody, () => {
  modalValue.value = false;
});


whenever(logicNot(modalValue), () => emit("close"));
</script>
