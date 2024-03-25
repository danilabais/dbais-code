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
import { ref, watch } from "vue";
import styles from "./UIModalBase.module.scss";
import { UIContainerBase } from "@/UI";
import { onClickOutside, whenever } from "@vueuse/core";
import { logicNot } from "@vueuse/math";

const emit = defineEmits(["close"]);
const modalValue = defineModel<boolean>("isModalOpen", { required: true });
import { useScrollLock } from "@vueuse/core";

const modalBody = ref(null);

const isWindowLock = useScrollLock(window, false);

onClickOutside(modalBody, () => {
  modalValue.value = false;
});

watch(modalValue, (value) => {
  isWindowLock.value = value;
});
whenever(logicNot(modalValue), () => emit("close"));
</script>
