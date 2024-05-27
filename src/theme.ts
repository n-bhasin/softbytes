import {
  extendTheme,
  ThemeConfig,
  defineStyleConfig,
  defineStyle,
} from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "light",
};

const buttonxl = defineStyle({
  fontSize: "xl",
  px: "6",
  h: "14",
});
const customVariant = defineStyle((props) => {
  const { colorScheme: c } = props;

  return {
    bg: `white`,
    fontWeight: "500 !important",
    color: `${c}.100`,
    border: "1px solid",
    _dark: {
      bg: `${c}.100`,
      color: "gray.800",
    },
    _disabled: {
      pointerEvents: "none",
    },
    _hover: {
      fontWeight: "500 !important",
      transform: "scale(1.05, 1.05)",
      bg: ` ${c}.100`,
      color: "white",
      _dark: {
        bg: `${c}.50`,
      },
    },

    _active: {
      fontWeight: "500 !important",
      bg: `${c}.50`,
      transform: "scale(1, 1)",

      _dark: {
        bg: `${c}.400`,
      },
    },
  };
});
export const buttonTheme = defineStyleConfig({
  variants: {
    custom: customVariant,
  },
  sizes: { xl: buttonxl },
  defaultProps: {
    colorScheme: "themeOrange", // set the default color scheme to purple
  },
});
const headingCustomVariant = defineStyle({
  fontSize: [
    "28px !important",
    "32px !important",
    "36px !important",
    "42px !important",
  ],
  fontWeight: "500 !important",
  marginBottom: "1.5rem",
  color: "#f07f2f",
});

export const headingTheme = defineStyleConfig({
  variants: { custom: headingCustomVariant },
});
const theme = extendTheme({
  config,
  styles: {
    global: {
      body: {
        bg: "#ffffff",
        color: "#253644",
      },
      //   h1: {
      //     fontSize: [
      //       "28px !important",
      //       "32px !important",
      //       "36px !important",
      //       "48px !important",
      //     ],
      //     fontWeight: "500 !important",
      //     marginBottom: "1.5rem",
      //     color: "#f07f2f",
      //   },
    },
  },
  components: {
    Button: buttonTheme,
    Heading: headingTheme,
  },
  colors: {
    black: "#253644",
    gray: {
      10: "#fafafa",
      50: "#f9f9f9",
      100: "#ededed",
      200: "#d3d3d3",
      300: "#b3b3b3",
      400: "#a0a0a0",
      500: "898989",
      600: "#6c6c6c",
      700: "#202020",
      800: "#121212",
      900: "#111",
    },
    themeOrange: {
      50: "#f29d44",
      100: "#f07f2f",
    },
  },
});

export default theme;
