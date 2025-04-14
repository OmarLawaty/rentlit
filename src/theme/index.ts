import { createSystem, defineConfig, defaultConfig } from '@chakra-ui/react';

import { recipes } from './recipes';

const themeConfig = defineConfig({
  preflight: true,
  theme: {
    recipes,
    tokens: {
      fontSizes: {
        '3xl': {
          value: '1.75rem',
        },
      },

      fonts: {
        logo: { value: `'IBM Plex Serif', serif` },
        body: { value: `'IBM Plex Sans', sans-serif` },
        bookRequest: { value: `'Bebas Neue', sans-serif` },
      },
    },
  },
});

export const system = createSystem(defaultConfig, themeConfig);
