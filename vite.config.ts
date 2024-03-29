import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
    plugins: [vue()],
    build: {
        lib: {
            entry: resolve(__dirname, 'src/ui/index.ts'),
            name: 'component-library-meri',
            fileName: 'component-library-meri',
            formats: ['es', 'umd'],
        },
        rollupOptions: {
            external: ['vue'],
            output: {
                globals: {
                    vue: 'Vue',
                    tailwindcss: 'tailwindcss',
                    daisyui: 'daisyui',
                },
            },
        },
    },
    resolve: {
        alias: {
            '@': resolve(__dirname, './src'),
            '@assets': resolve(__dirname, './src/assets'),
            '@components': resolve(__dirname, './src/components'),
            '@views': resolve(__dirname, './src/views'),
            '@composable': resolve(__dirname, './src/composable'),
            '@domain': resolve(__dirname, './src/domain'),
            '@http': resolve(__dirname, './src/infrastructure/http'),
            '@store': resolve(__dirname, './src/infrastructure/store'),
            'test': resolve(__dirname, './test/unit'),
        },
    },
});
