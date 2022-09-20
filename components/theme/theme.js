/**
 * Darkmode: https://github.com/chakra-ui/chakra-ui/discussions/5377
 * How to override dark mode default color? #5377
 *
 * https://github.com/chakra-ui/chakra-ui/tree/main/packages/theme/src/foundations
 *
 * https://chakra-ui.com/docs/styled-system/features/global-styles
 *
 * https://chakra-ui.com/docs/styled-system/theming/component-style
 */
import { ChakraTheme, extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

import Button from './button.theme';

const theme = extendTheme({
  config: {
    initialColorMode: 'light',
    useSystemColorMode: true,
  },
  styles: {
    global: (props) => ({
      body: {
        bg: mode('light.primary', 'dark.primary')(props),
      },
    }),
  },
  colors: {
    dark: {
      primary: '#171619',
      primaryOPacity: 'rgba(23, 22, 25, 0.8)',
    },
    light: {
      primary: '#FAFAFA',
      secondary: '#E5E5E5',
    },
    brand: {
      DEFAULT: '#9632E4', // primary
      primary: '#9632E4',
      secondary: '#D536E5',
      border: 'rgba(213, 54, 229, 0.4)',
      socialBtn: '#231C32',
      profileShadow: '0px 8px 100px rgba(0, 0, 0, 0.8)',
      'primary-light': '#A72EE3',
    },
  },
  components: {
    Button,
  },
  fonts: {
    body: '"Noir Pro", system-ui, sans-serif',
    heading: '"Noir Pro", sans-serif',
    mono: 'Menlo, monospace',
    brand: '"Noir Pro", sans-serif',
  },
  fontSizes: {
    headline: '66px',
    navbar: '20px',
    heading: '60px',
    large: '80px',
  },
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
    '3xl': '1920px',
    '4xl': '2560px',
    '5xl': '3840px',
  },
});

export default theme;
