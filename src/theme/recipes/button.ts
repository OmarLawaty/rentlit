import { defineRecipe } from '@chakra-ui/react';

export const buttonRecipe = defineRecipe({
  base: {
    width: '100%',
    padding: '0.5rem',
    display: 'flex',
    gap: '1.5rem',
    appearance: 'none',
    alignItems: 'center',
    justifyContent: 'center',
    userSelect: 'none',
    position: 'relative',
    rounded: '0.375rem',
    whiteSpace: 'nowrap',
    verticalAlign: 'middle',
    borderWidth: '1px',
    borderColor: 'transparent',
    cursor: 'pointer',
    flexShrink: '0',
    outline: '0',
    lineHeight: '1.2',
    isolation: 'isolate',
    fontWeight: 'medium',
    transitionProperty: 'common',
    transitionDuration: 'moderate',
    focusVisibleRing: 'outside',
    transition: 'all 0.2s ease-in-out',
    pos: 'relative',
    _disabled: {
      cursor: 'not-allowed',
    },
    _icon: {
      flexShrink: '0',
    },
  },
  variants: {
    size: {
      sm: {
        minH: 12,
        gap: 1,
        fontSize: 'larger',
      },
      md: {
        minH: '3.375rem',
        gap: 1.5,
        fontSize: 'larger',
      },
      lg: {
        minH: 14,
        gap: 2,
        fontSize: '2xl',
      },
    },
    variant: {
      primary: {
        bg: '#E7C9A5',
        color: '#14171C',
        _hover: {
          boxShadow: 'inset 0px 0px 10px 4px rgba(16, 16, 16, 0.25)',
        },
        _active: {
          bg: '#c9a881',
        },
      },
      secondary: {
        bg: '#232839',
        color: '#D6E0FF',
        _hover: {
          boxShadow: 'inset 0px 0px 10px 4px rgba(51, 51, 160, 0.66)',
        },
        _active: {
          bg: '#171b29',
        },
      },
    },
  },
  defaultVariants: {
    size: 'md',
    variant: 'primary',
  },
});
