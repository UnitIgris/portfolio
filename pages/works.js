import Section from '../components/section'
import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import { GridItem } from '../components/grid-item'
import Layout from '../components/layouts/article'

const Works = () => {
  return (
    <Layout title={'Works'}>
      <Container marginTop={'80px'}>
        <Heading as={'h3'} variant="section-title" fontSize={'20'} mb={4}>
          Works
        </Heading>
        <SimpleGrid columns={[1, 1, 2]} gap={1}>
          <Section>
            <GridItem
              id="korper"
              thumbnail={'./images/noon.jpg'}
              title="Korper"
            >
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium.
            </GridItem>
          </Section>
          <Section>
            <GridItem
              id="korper"
              thumbnail={'./images/noon.jpg'}
              title="Korper"
            >
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium.
            </GridItem>
          </Section>
          <Section>
            <GridItem
              id="korper"
              thumbnail={'./images/noon.jpg'}
              title="Korper"
            >
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium.
            </GridItem>
          </Section>
          <Section>
            <GridItem
              id="korper"
              thumbnail={'./images/noon.jpg'}
              title="Korper"
            >
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium.
            </GridItem>
          </Section>
          <Section>
            <GridItem
              id="korper"
              thumbnail={'./images/noon.jpg'}
              title="Korper"
            >
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium.
            </GridItem>
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
            <GridItem
              id="korper"
              thumbnail={'./images/noon.jpg'}
              title="Korper"
            >
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium.
            </GridItem>
          </Section>
          <Section>
            <GridItem
              id="korper"
              thumbnail={'./images/noon.jpg'}
              title="Korper"
            >
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium.
            </GridItem>
          </Section>
          <Section>
            <GridItem
              id="korper"
              thumbnail={'./images/noon.jpg'}
              title="Korper"
            >
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium.
            </GridItem>
          </Section>
          <Section>
            <GridItem
              id="korper"
              thumbnail={'./images/noon.jpg'}
              title="Korper"
            >
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium.
            </GridItem>
          </Section>
          <Section>
            <GridItem
              id="korper"
              thumbnail={'./images/noon.jpg'}
              title="Korper"
            >
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium.
            </GridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  )
}
export default Works
