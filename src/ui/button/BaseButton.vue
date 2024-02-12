<script setup lang="ts">
import { reactive, ref } from 'vue';

interface BaseButtonProps {
    text?: string;
    type?: 'button' | 'submit';
    variant?: 'neutral' | 'primary' | 'secondary' | 'accent' | 'ghost' | 'link';
}

const props = withDefaults(defineProps<BaseButtonProps>(), {
    type: 'button',
    variant: 'primary',
});

/** Always create all classes without using concatenation with prop
 * @see {@link https://daisyui.com/blog/most-common-mistake-when-using-tailwind-css/} */
const classObject = reactive({
    'btn-neutral': props.variant === 'neutral',
    'btn-primary': props.variant === 'primary',
    'btn-secondary': props.variant === 'secondary',
    'btn-accent': props.variant === 'accent',
    'btn-ghost': props.variant === 'ghost',
    'btn-link': props.variant === 'link',
});
</script>

<template>
    <button data-theme="cupcake" class="btn" :class="classObject" :type="props.type">
        {{ props.text }}
        <slot v-if="!props.text" />
    </button>
</template>

<style scoped>
@import '@/style.css';
</style>

<style lang="postcss" scoped></style>
