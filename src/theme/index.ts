import { createSystem, defaultBaseConfig, defineConfig } from '@chakra-ui/react';

import { recipes } from './recipes';

const themeConfig = defineConfig({
  preflight: true,
  theme: {
    recipes,
    tokens: {
      fonts: {
        logo: { value: `'IBM Plex Serif', serif` },
      },
    },
  },
});

export const system = createSystem(defaultBaseConfig, themeConfig);
