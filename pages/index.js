import {
  Container,
  Box,
  Button,
  Heading,
  Link,
  List,
  ListItem,
} from '@chakra-ui/react'
import NextLink from 'next/link'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import CustomAccordion from "../components/accordion"

import { ChevronRightIcon } from '@chakra-ui/icons'

import { IoLogoGithub } from 'react-icons/io5'

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
          fontSize={[32, 46, 82]}
          fontWeight={600}
          p={3}
          mb={[0, 2, 6]}
          align="center"
        >
          LUNION SAMUEL
        </Heading>
        <Heading
          variant={'heading-title'}
          fontWeight={500}
          fontSize={[14, 14, 22]}
          textAlign="center"
        >
          FRONT END, APP DEVELOPER & DESIGNER
        </Heading>{' '}
        <Container pt={16} maxW="container.sm">
          <Section delay={0.1}>
            <Heading as="h3" variant="section-title">
              About
            </Heading>
            <Paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea{' '}
              <Link as={NextLink} href="" passHref scroll={false}>
                commodo
              </Link>
              . Consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
              occaecat cupidatat non proident, sunt in &quot;
              <Link as={NextLink} href="" passHref target="_blank">
                culpa
              </Link>
              &quot; qui officia deserunt mollit anim id est laborum.
            </Paragraph>
            <Box align="center" my={4}>
              <Button
                as={NextLink}
                href="/works"
                scroll={false}
                rightIcon={<ChevronRightIcon />}
              >
                My portfolio
              </Button>
            </Box>
          </Section>

          <Section delay={0.3}>
            <Heading as="h3" variant="section-title">
              Me in accordion
            </Heading>
            <CustomAccordion />
          </Section>

          <Section delay={0.6}>
            <Heading as="h3" variant="section-title">
              Some projects
            </Heading>
           
          </Section>

          <Section delay={0.6}>
            <Heading as="h3" variant="section-title">
              On the web
            </Heading>
            <List>
              <ListItem>
                <Link href="https://github.com/UnitIgris" target="_blank">
                  <Button variant="ghost" leftIcon={<IoLogoGithub />}>
                    @UnitIgris
                  </Button>
                </Link>
              </ListItem>
            </List>
          </Section>
        </Container>
      </Container>
    </Layout>
  )
}
export default Page
