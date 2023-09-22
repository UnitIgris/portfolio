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
  Button,
} from '@chakra-ui/react'
import { Title, BadgeCustom, MediaBox } from '../../components/work'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'

const Work = () => (
  <Layout title="Korper">
    <Container>
      <Title>Korper</Title>

      <p>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
        illo inventore veritatis et quasi architecto beatae vitae dicta sunt
        explicabo.
      </p>
      <p>
        Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
        fugit,
      </p>
      <List ml={4} my={4}>
        <Center my={30}>
          <Link
            fontFamily="Poppins"
            href='https://korper.io'
            sx={{ display: "flex", justifyContent: "center", py: "5px", fontWeight: 600, color: 'white', background: '#292A30' }}
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
            <Badge>Date</Badge>02.01.2023 - 22.09.2023
          </p>
          <p>
            <Badge>Job</Badge>Web Developer
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

      <Heading as="h4" fontSize={16} mt={8} mb={2}>
        <Center>Media coverage</Center>
      </Heading>

      <Box>
        <MediaBox
          href={
            'https://www.francebleu.fr/emissions/la-nouvelle-eco-de-france-bleu-paris/le-couise-un-jeu-de-culture-francaise-a-offrir-a-noel-5426346'
          }
          title={'France Bleu'}
          article={"Korper, l'application de coaching sportif sur-mesure"}
        />
        <MediaBox
          href={
            'https://www.sportstrategies.com/korper-un-veritable-coach-sportif-dans-votre-poche/'
          }
          title={'SPORT STRATÉGIES'}
          article={'KORPER : UN VÉRITABLE COACH SPORTIF DANS VOTRE POCHE'}
        />
      </Box>

      <SimpleGrid mt={8} columns={2} gap={2}>
        <Image src="../images/noon.jpg" alt="zzz" />
        <Image src="../images/noon.jpg" alt="zzz" />
      </SimpleGrid>
      <Image src="../images/noon.jpg" alt="zzz" />
      <Image src="../images/noon.jpg" alt="zzz" />
      <Image src="../images/noon.jpg" alt="zzz" />
    </Container>
  </Layout>
)

export default Work
