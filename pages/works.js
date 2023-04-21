import Section from '../components/section'
import {
  Container,
  Heading,
  SimpleGrid,
  Divider,
  Box,
  Text,
  LinkBox,
  LinkOverlay,
  Image,
} from '@chakra-ui/react'
import NextLink from 'next/link'
import Layout from '../components/layouts/article'

const WorkGridItem = ({ children, id, title, thumbnail }) => (
  <Box w="100%" textAlign="center">
    <LinkBox
      as={NextLink}
      href={`/works/${id}`}
      scroll={false}
      cursor="pointer"
    >
      <Image
        src={thumbnail}
        alt={title}
        className="grid-item-thumbnail"
        placeholder="blur"
      />
      <LinkOverlay as="div" href={`/works/${id}`}>
        <Text mt={2} fontSize={20}>
          {title}
        </Text>
      </LinkOverlay>
      <Text fontSize={14}>{children}</Text>
    </LinkBox>
  </Box>
)

const Works = () => {
  return (
    <Layout title={"Works"}>
      
      <Container marginTop={'80px'}>
        <Heading as={'h3'} fontSize={'20'} mb={4}>
          Works
        </Heading>
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            <WorkGridItem
              id="inkdrop"
              thumbnail={'./images/noon.jpg'}
              title="Inkdrop"
            >
              A Markdown note-taking app with 100+ plugins, cross-platform and
              encrypted data sync support
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem
              id="walknote"
              title="walknote"
              thumbnail={'./images/noon.jpg'}
            >
              Music recommendation app for iOS
            </WorkGridItem>
          </Section>

          <Section delay={0.1}>
            <WorkGridItem
              id="fourpainters"
              thumbnail={'./images/noon.jpg'}
              title="The four painters"
            >
              A video work generated with deep learning, imitating famous four
              painters like Van Gogh
            </WorkGridItem>
          </Section>
          <Section delay={0.1}>
            <WorkGridItem
              id="menkiki"
              thumbnail={'./images/noon.jpg'}
              title="Menkiki"
            >
              An app that suggests ramen(noodle) shops based on a given photo of
              the ramen you want to eat
            </WorkGridItem>
          </Section>
        </SimpleGrid>

        <Section delay={0.2}>
          <Divider my={6} />

          <Heading as="h3" fontSize={20} mb={4}>
            Collaborations
          </Heading>
        </Section>

        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section delay={0.3}>
            <WorkGridItem
              id="margelo"
              thumbnail={'./images/noon.jpg'}
              title="Margelo"
            >
              A website of the elite app development and contracting agency
              based in Austria
            </WorkGridItem>
          </Section>
          <Section delay={0.3}>
            <WorkGridItem
              id="modetokyo"
              thumbnail={'./images/noon.jpg'}
              title="mode.tokyo"
            >
              The mode magazine for understanding to personally enjoy Japan
            </WorkGridItem>
          </Section>
          <Section delay={0.3}>
            <WorkGridItem
              id="styly"
              thumbnail={'./images/noon.jpg'}
              title="Styly"
            >
              A VR Creative tools for fashion brands
            </WorkGridItem>
          </Section>
        </SimpleGrid>

        <Section delay={0.4}>
          <Divider my={6} />

          <Heading as="h3" fontSize={20} mb={4}>
            Old works
          </Heading>
        </Section>

        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section delay={0.5}>
            <WorkGridItem
              id="pichu2"
              thumbnail={'./images/noon.jpg'}
              title="Pichu*Pichu"
            >
              Twitter client app for iPhone Safari
            </WorkGridItem>
          </Section>
          <Section delay={0.5}>
            <WorkGridItem
              id="freedbtagger"
              thumbnail={'./images/noon.jpg'}
              title="freeDBTagger"
            >
              Automatic audio file tagging tool using FreeDB for Windows
            </WorkGridItem>
          </Section>
          <Section delay={0.6}>
            <WorkGridItem
              id="amembo"
              thumbnail={'./images/noon.jpg'}
              title="Amembo"
            >
              P2P private file sharing tool with MSN Messenger integration for
              Windows
            </WorkGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  )
}
export default Works
