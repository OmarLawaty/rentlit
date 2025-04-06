import { createSystem, defaultConfig, defineConfig, type ThemingConfig } from '@chakra-ui/react';

const theme: ThemingConfig = {
  tokens: {
    fonts: {
      logo: { value: `'IBM Plex Serif', serif` },
    },
  },
};

const customConfig = defineConfig({ theme });

export const system = createSystem(defaultConfig, customConfig);
