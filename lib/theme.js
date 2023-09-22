import { border, extendTheme } from '@chakra-ui/react'

const styles = {
  global: {
    body: {
      bg: '#202023',
    },
  },
}

const components = {
  Heading: {
    variants: {
      'section-title': {
        textDecoration: 'none',
        width: 'fit-content',

        background:
          'repeating-linear-gradient( 90deg, #767676 0px, transparent 1px ) repeat-x 0 100%/2px 0.67em',
        fontSize: 20,
        textUnderlineOffset: 6,
        // textDecorationColor: '#525252',
        // textDecorationThickness: 4,
        marginTop: 3,
        marginBottom: 4,
        fontWeight: 600,
      },
      'heading-title': {
        letterSpacing: '2.2px',
        color: '#ffffffb3',
      },
    },
  },
  Text: {
    variants: {
      'text-poppins': {
        fontWeight: 500,
        fontFamily: "'Poppins' , sans-serif",
      },
      'text-roboto': {
        fontWeight: 400,
        fontFamily: 'Roboto Mono',
      },
    },
  },
  Link: {
    baseStyle: {
      color: 'linksColor',
      textUnderlineOffset: 3,
    },
  },
  Badge: {
    baseStyle: {
      mr: '6px',
    },
  },
  Card: {
    variants: {
      steam: {
        container: {
          bg: 'transparent',
          transition: 'all .4s',
          boxShadow: "0 5px 10px rgba(0,0,0,0.8)",
          borderWidth: '0px',
          borderColor: 'transparent',

          _hover: {
            boxShadow: "0 8px 16px 3px rgba(0,0,0,0.6)",
            transform: "translateY(-3px) scale(1.05) rotateX(15deg)"
          },
        },
      },

    },
  },

  Accordion: {
    variants: {
      orange: {
        button: {
          bg: '#A85E0D',
          borderRadius: '6px',
          _hover: {
            bg: '#CC7C2F',
          },
        },
        panel: {
          bg: '#652600b8',
          p: '15px',
          borderRadius: '6px',
        },
      },
    },
    baseStyle: {
      button: {
        bg: '#a36418',
        borderRadius: '6px',
        _hover: {
          bg: '#623c0f',
        },
      },
      panel: {
        bg: '#3f2d1c',
        p: '15px',
        borderRadius: '6px',
      },

      container: {
        border: 'none',
      },
    },
  },
}

const fonts = {
  heading: "'Poppins' , sans-serif",
}
const colorScheme = {
  orangeRoom: '#d4b693',
}
const colors = {
  orangeRoom: '#d4b693',
  linksColor: '#FFD281',
}

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: true,
}

const theme = extendTheme({
  config,
  styles,
  components,
  fonts,
  colors,
  colorScheme,
})
export default theme
