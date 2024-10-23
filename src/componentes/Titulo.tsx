import { Text, ITextProps, useTheme } from "native-base";
import { ReactNode } from "react";

interface TituloProps extends ITextProps {
  children: ReactNode;
}

export function Titulo({ children, ...rest }: TituloProps) {
  const { fontConfig } = useTheme(); 

  return (
    <Text
      fontSize="2xl"
      fontWeight="bold"
      color="gray.500"
      textAlign="center"
      marginTop={5}
      fontFamily={fontConfig.Helvetica[100].normal} 
      {...rest}
    >
      {children}
    </Text>
  );
}
