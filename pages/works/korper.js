import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  SimpleGrid,
  UnorderedList,
  Heading,
  Center,
  Image,
  Box,
} from '@chakra-ui/react'
import { Title, BadgeCustom } from '../../components/work'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'

const Work = () => (
  <Layout title="Korper">
    <Container>
      <Title>
        Korper <Badge>2011-2016</Badge>
      </Title>
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
        <ListItem>
          <BadgeCustom>Platform</BadgeCustom>
          <span>Desktop</span>
        </ListItem>
        <ListItem>
          <BadgeCustom>Blogpost</BadgeCustom>
          <Link href="https://https://korper.io/blog">
            Korper's blog
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <BadgeCustom>Stack</BadgeCustom>
          <span>React, Next.js, Ngnix, JSS, Emotion, MUI</span>
        </ListItem>
      </List>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>Media coverage</Center>
      </Heading>

      <UnorderedList my={4}>
        <ListItem>
          <Link href="">
            <Badge mr={2}>Online article</Badge>
            qui ratione voluptatem sequi nesciunt. Neque porro quisquam est
            voluptas nulla pariatur
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Link href="">
            <Badge mr={2}>Online article</Badge>
            qui ratione voluptatem sequi nesciunt. Neque porro quisquam est
            voluptas nulla pariatur
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Link href="">
            <Badge mr={2}>Online article</Badge>
            qui ratione voluptatem sequi nesciunt. Neque porro quisquam est
            voluptas nulla pariatur
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Link href="">
            <Badge mr={2}>Online article</Badge>
            qui ratione voluptatem sequi nesciunt. Neque porro quisquam est
            voluptas nulla pariatur
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </UnorderedList>

      <SimpleGrid columns={2} gap={2}>
        <Image src="../images/noon.jpg" alt="walknote" />
        <Image src="../images/noon.jpg" alt="walknote" />
      </SimpleGrid>
      <Image src="../images/noon.jpg" alt="walknote" />
      <Image src="../images/noon.jpg" alt="walknote" />
      <Image src="../images/noon.jpg" alt="walknote" />
    </Container>
  </Layout>
)

export default Work
