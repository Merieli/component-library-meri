<script setup lang="ts">
import { reactive } from 'vue';
import { BaseButtonProps } from './BaseButton.type';

const props = withDefaults(defineProps<BaseButtonProps>(), {
    type: 'button',
    variant: 'primary',
});

/** Always create all classes without using concatenation with prop
 * @see {@link https://daisyui.com/blog/most-common-mistake-when-using-tailwind-css/} */
const classObject = reactive({
    'dy-btn': true,
    'dy-btn-neutral': props.variant === 'neutral',
    'dy-btn-primary': props.variant === 'primary',
    'dy-btn-secondary': props.variant === 'secondary',
    'dy-btn-accent': props.variant === 'accent',
    'dy-btn-ghost': props.variant === 'ghost',
    'dy-btn-link': props.variant === 'link',
});
</script>

<template>
    <button class="button" :class="classObject" :type="type">
        {{ text }}
        <slot v-if="!text" />
    </button>
</template>

<style scoped>
@import '@/style.css';
</style>

<style lang="postcss" scoped>
.button {
    @apply font-sans text-sm;
}
</style>
