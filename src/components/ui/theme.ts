import { createSystem, defaultConfig, defineConfig, type ThemingConfig } from '@chakra-ui/react';

const theme: ThemingConfig = {
  tokens: {},
};

const customConfig = defineConfig({ theme });

export const system = createSystem(defaultConfig, customConfig);
