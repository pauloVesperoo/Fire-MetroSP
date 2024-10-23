import { FormControl, Input, IInputProps, useTheme } from "native-base";

interface EntradaTextoProps extends IInputProps {
  label: string;
}

export function EntradaTexto({ label, ...rest }: EntradaTextoProps) {
  const { fontConfig } = useTheme(); 

  return (
    <FormControl mt={3}>
      <FormControl.Label>{label}</FormControl.Label>
      <Input
        size="lg"
        w="100%"
        borderRadius="lg"
        backgroundColor="gray.100"
        shadow={3}
        fontFamily={fontConfig.Helvetica[100].normal} 
        {...rest}
      />
    </FormControl>
  );
}
