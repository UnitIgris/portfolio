import NextLink from 'next/link'
import { Container, Box } from '@chakra-ui/react'
import Layout from '../components/layouts/article'

const Page = () => {
  return (
    <Layout>
      <Container>
        <Box borderRadius="lg" bg="whiteAlpha.200" p={3} mb={6} align="center">
          Bonjour, je suis étudiant en 3 ème année de Dev. web a Paris!
        </Box>
      </Container>
    </Layout>
  )
}
export default Page
