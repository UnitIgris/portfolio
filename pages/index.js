import { Container, Box, flexbox, Heading, Text } from '@chakra-ui/react'
import Layout from '../components/layouts/article'

const Page = () => {
  return (
    <Layout>
      <Container
        display={'flex'}
        justifyItems={'center'}
        alignItems={'center'}
        maxW="none"
        flexDirection={'column'}
      >
        <Heading
          variant={'heading-title'}
          borderRadius="lg"
          fontSize={[26, 46, 82]}
          fontWeight={600}
          p={3}
          mb={[0,2,6]}
          align="center"
        >
          LUNION SAMUEL
        </Heading>
        <Heading
          variant={'heading-title'}
          fontWeight={500}
          fontSize={[14, 14, 22]}
          textAlign= "center"
        >
          FRONT END, APP DEVELOPER & DESIGNER
        </Heading>
      </Container>
    </Layout>
  )
}
export default Page
