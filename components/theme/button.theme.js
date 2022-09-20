/**
 * https://chakra-ui.com/docs/styled-system/theming/component-style
 */
import { ComponentStyleConfig } from '@chakra-ui/react';
import { mode, darken, whiten } from '@chakra-ui/theme-tools';

const ButtonTheme = {
  // Styles for the base style
  baseStyle: {
    _disabled: {
      _hover: {
        bg: 'brand.primary',
        opacity: 1,
      },
    },
  },
  // Styles for the size variations
  sizes: {},

  variants: {
    primary: (props) => ({
      bg: 'brand.primary',
      color: 'white',
      _hover: {
        bg: mode(
          darken('brand.primary', 10),
          whiten('brand.primary', 10)
        )(props),
        // boxShadow: 'md'
      },
      _disabled: {
        bg: 'brand.primary',
        _hover: {
          bg: 'brand.primary',
          opacity: 1,
        },
      },
    }),
  },
  // The default `size` or `variant` values
  defaultProps: {
    variant: 'primary',
    // size: 'md',
  },
};
export default ButtonTheme;
