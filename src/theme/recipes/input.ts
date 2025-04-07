import { defineRecipe } from '@chakra-ui/react';

export const inputRecipe = defineRecipe({
  base: {
    width: '100%',
    minWidth: '0',
    minH: '14',
    px: '5',
    py: '4',
    outline: '0',
    position: 'relative',
    appearance: 'none',
    textAlign: 'start',
    borderRadius: '5px',
    _disabled: {
      layerStyle: 'disabled',
    },
    minW: 'var(--input-height)',
    '--focus-color': 'colors.colorPalette.focusRing',
    '--error-color': 'colors.border.error',
    _invalid: {
      focusRingColor: 'var(--error-color)',
      borderColor: 'var(--error-color)',
    },
  },

  variants: {
    size: {
      '2xs': {
        textStyle: 'xs',
        px: '2',
        '--input-height': 'sizes.7',
      },
      xs: {
        textStyle: 'xs',
        px: '2',
        '--input-height': 'sizes.8',
      },
      sm: {
        textStyle: 'sm',
        px: '2.5',
        '--input-height': 'sizes.9',
      },
      md: {
        textStyle: 'sm',
        px: '3',
        '--input-height': 'sizes.10',
      },
      lg: {
        textStyle: 'md',
        px: '5',
        '--input-height': 'sizes.11',
      },
      xl: {
        textStyle: 'md',
        px: '4.5',
        '--input-height': 'sizes.12',
      },
      '2xl': {
        textStyle: 'lg',
        px: '5',
        '--input-height': 'sizes.16',
        color: 'white',
      },
    },

    variant: {
      primary: {
        bg: '#232839',
        focusVisibleRing: 'inside',
        focusRingColor: 'var(--focus-color)',
      },
    },
  },

  defaultVariants: {
    size: 'lg',
    variant: 'primary',
  },
});
