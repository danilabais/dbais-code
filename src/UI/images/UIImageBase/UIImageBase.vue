<template>
  <div :class="[styles.wrapper, styles[props.size]]">
    <UILoaderBase data-test="loader" v-if="isLoading" />
    <img data-test="photo" v-else  :class="styles.image" :src="props.src" :alt="props.alt" />
  </div>
</template>

<script setup lang="ts">
import { UILoaderBase } from "@/UI";
import { useImage } from "@vueuse/core";

type imageSizes = "xs" | "xl";

const props = withDefaults(
  defineProps<{
    src: string;
    size?: imageSizes;
    alt: string;
  }>(),
  {
    size: "xs",
  },
);

const { isLoading } = useImage({ src: props.src });
</script>

<style lang="scss" module="styles">
@import './UIImageBase.module.scss';
</style>
