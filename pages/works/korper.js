import {
  Container,
  Badge,
  Link,
  List,
  Stack,
  SimpleGrid,
  Divider,
  Heading,
  Center,
  Image,
  Box,
} from '@chakra-ui/react'
import { Title } from '../../components/work'
import Layout from '../../components/layouts/article'

const Korper = () => (
  <Layout title="Korper">
    <Container>
      <Title>Korper</Title>
      <p>
        Korper offers personalized fitness coaching at an affordable rate.
        Users select a qualified coach through the app, receiving customized
        workouts and regular check-ins. Since its 2022 launch, Korper has gained
        over a hundred members, showcasing its effectiveness. Korper aspires
        to be the top choice for European sports coaching.
      </p>
      <List ml={4} my={4}>
        <Center my={30}>
          <Link
            fontFamily="Poppins"
            href='https://korper.io'
            sx={{ display: "flex", justifyContent: "center", py: "5px", borderRadius: 3, fontWeight: 600, color: 'white', background: '#292A30' }}
            w={'100%'}
          >
            VISIT WEBSITE
          </Link>
        </Center>
      </List>
      <Stack fontFamily="Roboto Mono" direction="row" h="110px"  >
        <Divider orientation="vertical" /> {/*version desktop toolong */}
        <Box lineHeight={'1.5'}>
          <p>
            <Badge>Location</Badge>Paris,FR
          </p>
          <p>
            <Badge>Date</Badge>
            <Badge sx={{ backgroundColor: "#e6ce9a29", color: "#e6da9a" }}>Apprenticeship</Badge>
            02.01.2023 - 22.09.2023
          </p>
          <p>
            <Badge>Job</Badge>
            Web Developer
          </p>
          {/* <p>
            <Badge>Blogpost</Badge>
            <Link href="https://korper.io/blog">
              Korper's blog
              <ExternalLinkIcon mx="2px" />
            </Link>
          </p> */}
          <p>
            <Badge>Stack</Badge>React, Next, Ngnix, MongoDB, Node.js
          </p>
        </Box>
      </Stack>
      <Heading as="h4" fontSize={20} mt={8} mb={2}>
        Mission
      </Heading>
      <Box>
        I was tasked with creating a blog as well as an internal dashboard
        for article management, refactoring and developing the onboarding
        flow, developing and maintaining the internal platform for coaches,
        and testing the mobile application.
      </Box>
      <Box mt={8}>
        <Image sx={{ borderRadius: 3 }} src="../images/korper/korper-pc_1.png" alt="pc" />
        <Image mt={2} sx={{ borderRadius: 3 }} src="../images/korper/korper-pc_2.png" alt="pc" />
        <SimpleGrid columns={[1, 2, 2]} mt={2} gap={2}>
          <Image sx={{ borderRadius: 3 }} src="../images/korper/korper-phone_1.png" alt="phone" />
          <Image sx={{ borderRadius: 3 }} src="../images/korper/korper-phone_2.png" alt="phone" />
        </SimpleGrid>
      </Box>
    </Container>
  </Layout>
)

export default Korper
