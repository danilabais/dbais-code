<template>
  <div :class="styles.wrapperd">
    <div
      :class="[
        styles.inner,
        {
          [styles[error]]: props.error,
        },
      ]"
    >
      <input
        v-model="modelValue"
        :maxlength="props.maxLength"
        :placeholder="props.placeholder"
        :class="styles.input"
        v-bind="$attrs"
      />
    </div>
    <div v-if="props.error" :class="styles.error">
      {{ props.error }}
    </div>
  </div>
</template>

<script setup lang="ts">


defineOptions({
  inheritAttrs: false,
});

const modelValue = defineModel<string>();

const props = withDefaults(
  defineProps<{
    placeholder?: string;
    maxLength?: number | string;
    error?: string;
  }>(),
  {
    placeholder: "",
    maxLength: 500,
    error: "",
  },
);
</script>

<style lang="scss" module="styles">
@import './UIInputBase.module.scss';
</style>
