import { createSystem, defaultBaseConfig, defineConfig } from '@chakra-ui/react';

const themeConfig = defineConfig({
  preflight: true,
  theme: {
    tokens: {
      fonts: {
        logo: { value: `'IBM Plex Serif', serif` },
      },
    },
  },
});

export const system = createSystem(defaultBaseConfig, themeConfig);
