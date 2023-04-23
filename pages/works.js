import Section from '../components/section'
import { useLayoutEffect } from 'react'

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
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <Layout title={'Works'}>
      <Container marginTop={'80px'}>
        <Heading as={'h3'} variant="section-title" fontSize={'20'} mb={4}>
          Works
        </Heading>
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            <WorkGridItem
              id="korper"
              thumbnail={'./images/noon.jpg'}
              title="Korper"
            >
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium.
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem
              id="korper"
              thumbnail={'./images/noon.jpg'}
              title="Korper"
            >
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium.
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem
              id="korper"
              thumbnail={'./images/noon.jpg'}
              title="Korper"
            >
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium.
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem
              id="korper"
              thumbnail={'./images/noon.jpg'}
              title="Korper"
            >
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium.
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem
              id="korper"
              thumbnail={'./images/noon.jpg'}
              title="Korper"
            >
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium.
            </WorkGridItem>
          </Section>
        </SimpleGrid>

        <Section delay={0.4}>
          <Divider my={6} />

          <Heading as="h3" variant="section-title" fontSize={20} mb={4}>
            Old works
          </Heading>
        </Section>

        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            <WorkGridItem
              id="korper"
              thumbnail={'./images/noon.jpg'}
              title="Korper"
            >
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium.
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem
              id="korper"
              thumbnail={'./images/noon.jpg'}
              title="Korper"
            >
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium.
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem
              id="korper"
              thumbnail={'./images/noon.jpg'}
              title="Korper"
            >
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium.
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem
              id="korper"
              thumbnail={'./images/noon.jpg'}
              title="Korper"
            >
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium.
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem
              id="korper"
              thumbnail={'./images/noon.jpg'}
              title="Korper"
            >
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium.
            </WorkGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  )
}
export default Works
