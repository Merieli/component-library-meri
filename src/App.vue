<script setup lang="ts">
import { Button, Input } from './ui';
import { useTheme } from './ui/useTheme';

const { loadTheme, setTheme } = useTheme();

let currentTheme = 'light';

const changeTheme = () => {
    if (currentTheme === 'light') {
        setTheme('dark');
        currentTheme = 'dark';
    } else {
        setTheme('light');
        currentTheme = 'light';
    }
};

setTheme('light');
</script>

<template>
    <div class="p-3 flex flex-col">
        <Button
            class="mb-3"
            text="Change theme"
            variant="primary"
            @click="changeTheme"
        ></Button>
        <Input
            field="password-01"
            label="Senha:"
            placeholder="Digite sua senha"
            variant="error"
            type-input="text"
            required
        />
    </div>
</template>

<style lang="postcss" scoped>
@import 'style.css';
</style>
