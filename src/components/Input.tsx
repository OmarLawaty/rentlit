import { Field, Input as ChakraInput, type InputProps as ChakraInputProps } from '@chakra-ui/react';

interface InputProps extends ChakraInputProps {
  label: string;
  containerProps?: Field.RootProps;
  errorText?: string;
  isInvalid?: boolean;
}

export const Input = ({ containerProps, label, errorText, ...props }: InputProps) => (
  <Field.Root display='flex' gap={['0.5', '1', '1.5', '2']} {...containerProps}>
    <Field.Label color='#D6E0FF' fontSize={['xs', 'sm', 'md']}>
      {label}
    </Field.Label>

    <ChakraInput size={['sm', 'md', 'lg']} {...props} />

    <Field.ErrorText fontSize={['2xs', 'xs', 'sm']}>{errorText}</Field.ErrorText>
  </Field.Root>
);
