<template>
    <div :class="styles.wrapper">
        <div :class="[styles.inner, {
       [ styles.error]: props.error
    }]">
            <input v-model="modelValue" :maxlength="props.maxLength" :placeholder="props.placeholder" :class="styles.input" v-bind="$attrs" />
        </div>
        <div :class="styles.error" v-if="props.error" >
            {{props.error}}
        </div>
    </div>
</template>



<script setup lang="ts">
import styles from './UIInputBase.module.scss'

defineOptions({
    inheritAttrs: false,
  })

const modelValue = defineModel<string>()

const props = withDefaults(defineProps<{
    placeholder?: string,
    maxLength?: number | string,
    error: string
}>(), {
    placeholder: '',
    maxLength: 500,
    error: ''
})

</script>