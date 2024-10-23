import { Button, IButtonProps, useTheme } from "native-base";
import { ReactNode } from "react";

interface BotaoProps extends IButtonProps {
  children: ReactNode;
}

export function Botao({ children, ...rest }: BotaoProps) {
  const { fontConfig } = useTheme(); 

  return (
    <Button
      w="100%"
      bg="blue.800"
      mt={10}
      borderRadius="lg"
      fontFamily={fontConfig.Helvetica[100].normal} 
      {...rest}
    >
      {children}
    </Button>
  );
}
