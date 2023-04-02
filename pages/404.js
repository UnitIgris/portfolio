import NextLink from 'next/link'
import {
  Box,
  Heading,
  Text,
  Container,
  Divider,
  Button,
} from '@chakra-ui/react'

const NotFound = () => {
  return (
    <Container style={{ position: 'relative' }} pt={[14, 28]}>
      <Heading as="h1">Not found</Heading>
      <Text fontFamily="Roboto Mono">
        The page you're looking for was not found.
      </Text>
      <Divider my={6} />
      <Box align="center">
        <Button
          fontFamily="Roboto Mono"
          fontWeight={600}
          as={NextLink}
          href="/"
          color={'black'}
          bg="linksColor"
        >
          Return to home
        </Button>
      </Box>
    </Container>
  )
}

export default NotFound
