<template>
    <div :class="[styles.wrapper]">
        <div :class="[styles.inner, {
       [ styles.error]: props.error
    }]">
         <textarea v-model="modelValue" :maxlength="props.maxLength" :rows="props.rows" :placeholder="props.placeholder" :class="styles.textarea" v-bind="$attrs" />
        </div>
        <div :class="styles.error" v-if="props.error">
           {{props.error}}
       </div>
   </div>
</template>


<script setup lang="ts">
import styles from './UITextareaBase.module.scss'

defineOptions({
    inheritAttrs: false,
  })

const modelValue = defineModel<string>()


const props = withDefaults(defineProps<{
    placeholder?: string,
    maxLength?: number | string,
    rows: number,
    error: string
}>(), {
    placeholder: '',
    maxLength: 500,
    rows: 5,
    error: ''
})
</script>