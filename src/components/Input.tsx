import { Field, Input as ChakraInput, type InputProps as ChakraInputProps } from '@chakra-ui/react';

interface InputProps extends ChakraInputProps {
  label: string;
  containerProps?: Field.RootProps;
  errorText?: string;
  isInvalid?: boolean;
}

export const Input = ({ containerProps, label, errorText, ...props }: InputProps) => (
  <Field.Root display='flex' gap='2' {...containerProps}>
    <Field.Label color='#D6E0FF' fontSize='md'>
      {label}
    </Field.Label>

    <ChakraInput {...props} />

    <Field.ErrorText fontSize='sm'>{errorText}</Field.ErrorText>
  </Field.Root>
);
