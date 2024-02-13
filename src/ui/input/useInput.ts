import { reactive } from 'vue';
import { BaseInputProps } from './BaseInput.type';

export const useInput = (props: BaseInputProps) => {
    const classObject = reactive({
        'dy-input': true,
        'dy-input-bordered': true,
        'dy-input-primary': props.variant === 'primary',
        'dy-input-secondary': props.variant === 'secondary',
        'dy-input-accent': props.variant === 'accent',
        'dy-input-info': props.variant === 'info',
        'dy-input-success': props.variant === 'success',
        'dy-input-error': props.variant === 'error',
    });

    return {
        classObject,
    };
};
