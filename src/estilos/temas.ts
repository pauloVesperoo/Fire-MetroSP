import { extendTheme } from 'native-base';

export const TEMAS = extendTheme({
  colors: {
    gray: {
      300: '#8D8D99'
    },
    blue: {
      500: '#339CFF',
      800: '#001489'
    },
    white: '#FFF',
    black: '#000'
  },
  fontSizes: {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 20,
    xl: 24
  },
  fontConfig: {
    Helvetica: {
      100: {
        normal: 'Helvetica-Light',
        italic: 'Helvetica-LightItalic',
      },
      200: {
        normal: 'Helvetica-Regular',
        italic: 'Helvetica-RegularItalic',
      },
      300: {
        normal: 'Helvetica-Bold',
        italic: 'Helvetica-BoldItalic',
      },
    },
    Frutiger: {
      100: {
        normal: 'Frutiger-Light',
        italic: 'Frutiger-LightItalic',
      },
      200: {
        normal: 'Frutiger-Regular',
        italic: 'Frutiger-RegularItalic',
      },
      300: {
        normal: 'Frutiger-Bold',
        italic: 'Frutiger-BoldItalic',
      },
    },
  },
  fonts: {
    heading: 'Helvetica-Bold',
    body: 'Helvetica-Regular',
    signage: 'Frutiger-Bold',
  },
  textStyles: {
    CA: {
      textTransform: 'uppercase', // Caixa Alta
    },
    CB: {
      textTransform: 'lowercase', // Caixa Baixa
    },
    CAB: {
      textTransform: 'capitalize', // Caixa Alta e Baixa
    },
  }
});
