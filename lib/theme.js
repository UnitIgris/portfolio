import { extendTheme } from '@chakra-ui/react'

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
        textDecoration: 'underline',
        fontSize: 20,
        textUnderlineOffset: 6,
        textDecorationColor: '#525252',
        textDecorationThickness: 4,
        marginTop: 3,
        marginBottom: 4,
      },
      'heading-title': {
        letterSpacing: '2.2px',
        color: '#ffffffb3',
      },
    },
  },
  Link: {
    baseStyle: {
      color: 'white.400',
      textUnderlineOffset: 3,
    },
  },
  Accordion: {
    variants: {
      blue: {
        button: {
          bg: 'teal.300',
          borderRadius: '6px',
          _hover: {
            bg: '#27968b',
          },
        },
        panel: {
          bg: 'teal.700',
          p: '15px',
          borderRadius: '6px',
        },
      },
      purple: {
        button: {
          bg: '#740cdc',
          borderRadius: '6px',
          _hover: {
            bg: '#490C86DE',
          },
        },
        panel: {
          bg: '#241d41',
          p: '15px',
          borderRadius: '6px',
        },
      },
      green: {
        button: {
          bg: '#2e8441',
          borderRadius: '6px',
          _hover: {
            bg: '#226230',
          },
        },
        panel: {
          bg: '#13351a',
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
