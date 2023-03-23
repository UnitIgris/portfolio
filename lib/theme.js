import { extendTheme } from '@chakra-ui/react'


const styles = {
  global:({
    body: {
      bg: '#202023',
    },
  }),
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
        letterSpacing:'2.2px',
        color:'#ffffffb3'
        
      },
    },
  },
  Link: {
    baseStyle:({
      color: 'orange.300',
      textUnderlineOffset: 3,
    }),
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

const theme = extendTheme({ config, styles, components, fonts, colors,colorScheme })
export default theme
