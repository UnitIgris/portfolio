import Section from '../components/section'
import { Container, Heading, SimpleGrid, Divider, Center, Text } from '@chakra-ui/react'
import { GridItem } from '../components/grid-item'
import Layout from '../components/layouts/article'

const Works = () => {
  return (
    <Layout title={'Works'}>
      <Container className='work-container' marginTop={'80px'}>
        <Heading as={'h3'} variant="section-title" fontSize={'20'} mb={4}>
          Works
        </Heading>
        <SimpleGrid columns={[2, 2, 3]} gap={3}>
          <Section>
            <GridItem
              id="korper"
              thumbnail={'./images/project/card/korper.png'}
              title="Korper"
            >
            </GridItem>
          </Section>
          <Section>
            <GridItem
              id="belleEpoque"
              thumbnail={'./images/project/card/belleEpoque.png'}
              title="Belle Epoque"
              dark
            >
            </GridItem>
          </Section>
          <Section>
            <GridItem
              id="acushen"
              thumbnail={'./images/project/card/acushen.png'}
              title="Acushen Gwada"

            >
            </GridItem>
          </Section>
        </SimpleGrid>

        <Section delay={0.4}>
          <Divider my={6} />

          <Heading as="h3" variant="section-title" fontSize={20} mb={4}>
            Old works
          </Heading>
        </Section>


        <Section as="h3" fontSize={20} mb={4}>
          <Center>On going</Center>
        </Section>
        {/*  <SimpleGrid columns={[2, 2, 3]} gap={6}><Section>
            <GridItem
              id="acushen"
              thumbnail={'./images/project/card/acushen.png'}
              title="Acushen Gwada"
            >
            </GridItem>
          </Section></SimpleGrid> */}

      </Container>
    </Layout>
  )
}
export default Works
