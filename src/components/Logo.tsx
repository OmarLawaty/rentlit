import { Flex, Text, type FlexProps, type IconProps, type TextProps } from '@chakra-ui/react';

import { LogoIcon } from '@/assets';

type FullLogoProps = {
  variant?: 'full';
  textProps?: TextProps;
};

type IconLogoProps = {
  variant?: 'icon';
};

type LogoProps = FlexProps & {
  logoProps?: IconProps;
} & (FullLogoProps | IconLogoProps);

export const Logo = ({ variant = 'full', logoProps, ...props }: LogoProps) => (
  <Flex align='center' w='fit' gap='1.5' userSelect='none' {...props}>
    <LogoIcon {...logoProps} />

    {variant === 'full' && (
      <Text
        fontFamily='logo'
        lineHeight='shorter'
        fontSize='3xl'
        color='white'
        {...('textProps' in props && props.textProps)}
      >
        RentLit
      </Text>
    )}
  </Flex>
);
