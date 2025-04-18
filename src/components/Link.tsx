'use client';

import type { ComponentProps } from 'react';
import NextLink from 'next/link';
import { chakra } from '@chakra-ui/react';

import { getSearchParams } from '@/utils/helpers';

const forwardProps = ['href', 'prefetch', 'target', 'children'] as const satisfies (keyof NextLinkProps)[];
type ForwardProp = (typeof forwardProps)[number];

const ChakraNextLink = chakra(
  NextLink,
  {},
  {
    shouldForwardProp: prop => forwardProps.includes(prop as ForwardProp),
  }
);
type NextLinkProps = ComponentProps<typeof NextLink>;
type ChakraNextLinkProps = ComponentProps<typeof ChakraNextLink>;

interface LinkProps extends Omit<ChakraNextLinkProps, ForwardProp>, Pick<NextLinkProps, ForwardProp> {
  keepSearchParams?: boolean;
}

export const Link = ({ keepSearchParams, ...props }: LinkProps) => {
  const searchParams = getSearchParams();

  const href = keepSearchParams ? `${props.href}?${searchParams}` : props.href;

  return <ChakraNextLink {...props} href={href} />;
};
