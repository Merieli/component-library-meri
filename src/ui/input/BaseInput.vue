<script setup lang="ts">
import { BaseInputProps } from './BaseInput.type';
import { useInput } from './useInput';

const props = withDefaults(defineProps<BaseInputProps>(), {
    variant: 'primary',
    placeholder: 'Digite algo',
    typeInput: 'text',
});

const { classObject } = useInput(props);
</script>

<template>
    <div class="input">
        <label v-if="label" class="input__label" :for="field">
            {{ label }}
        </label>
        <input
            v-bind="$attrs"
            :id="field"
            :name="field"
            :type="typeInput"
            :placeholder="placeholder"
            class="input__main"
            :class="classObject"
        />
    </div>
</template>

<style scoped>
@import '@/style.css';
</style>

<style lang="postcss" scoped>
.input {
    @apply font-sans flex flex-col md:flex-row md:justify-start md:items-center;

    &__label {
        @apply mr-3;
    }

    &__main {
        @apply w-full max-w-xs mt-3 md:mt-0;
    }
}
</style>
