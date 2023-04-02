import {
  Box,
  Button,
  Heading,
  Link,
  List,
  ListItem,
  Accordion,
  SimpleGrid,
} from '@chakra-ui/react'
import NextLink from 'next/link'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import {
  CustomAccordion,
  CustomPannelEdu,
  CustomPannelExp,
} from '../components/accordion'
import { GridItem } from '../components/grid-item'
import {
  IoLogoGithub,
  IoLogoLinkedin,
  IoDownloadOutline,
  IoChevronForward,
} from 'react-icons/io5'

const Page = () => {
  return (
    <Layout>
      <Box
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
          {'FRONT END, APP DEVELOPER & DESIGNER'}
        </Heading>{' '}
        <Box pt={16} maxW="container.sm">
          <Section delay={0.1}>
            <Heading as="h3" variant="section-title">
              About
            </Heading>
            <Paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea&nbsp;
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
                target="_blank"
                href="./Lunion_Samuel_CV.pdf"
                scroll={false}
                rightIcon={<IoDownloadOutline />}
              >
                Curriculum Vitae
              </Button>
            </Box>
          </Section>

          <Section delay={0.3}>
            <Heading as="h3" variant="section-title">
              Me in accordion
            </Heading>
            <Box position="relative">
              <Accordion variant={'orange'} allowToggle>
                <CustomAccordion title={'Experience'}>
                  <CustomPannelExp
                    poste={'Software Engineer'}
                    link={'korper.io'}
                    content={
                      'Developing front-end solution on React/Next.js and Electron framework.'
                    }
                    tag={['Javascript', 'React', 'NextJS', 'Electron']}
                    src={'korper.png'}
                    Bottomdivider={true}
                  />
                  <CustomPannelExp
                    poste={'Web Developer'}
                    link={'agence-belle-epoque.fr'}
                    content={
                      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
                    }
                    tag={['TypeScript', 'React', 'NextJS', 'Firebase']}
                    src={'belleEpoque.jpg'}
                  />
                </CustomAccordion>
                <CustomAccordion title={'Education'}>
                  <CustomPannelEdu
                    dates={['2023', '2022']}
                    content={
                      "Bachelor's Degree in Web Development\n (3rd year)"
                    }
                    link={'Hetic'}
                    src={'hetic.png'}
                    Bottomdivider={true}
                  />
                  <CustomPannelEdu
                    dates={['2022', '2020']}
                    content={"Bachelor's Degree in Computer Science"}
                    link={'Paris DesCartes'}
                    src={'descartes.png'}
                    Bottomdivider={true}
                  />
                  <CustomPannelEdu
                    dates={['2020', '2016']}
                    content={'Baccalauréat Economique & Social'}
                    link={"Droits de l'Homme"}
                    src={'ddh.png'}
                  />
                </CustomAccordion>
              </Accordion>
            </Box>
          </Section>

          <Section delay={0.6}>
            <Heading as="h3" variant="section-title">
              Some projects
            </Heading>
            <SimpleGrid columns={[1, 2, 2]} gap={6}>
              <GridItem
                title="Dev is a fun thing"
                thumbnail={'./images/noon.jpg'}
                href="error"
              >
                This is a cool work
              </GridItem>
              <GridItem
                title="Dev is a fun thing"
                thumbnail={'./images/noon.jpg'}
                href="error"
              >
                This is a cool work
              </GridItem>
              <GridItem
                title="Dev is a fun thing"
                thumbnail={'./images/noon.jpg'}
                href="error"
              >
                This is a cool work
              </GridItem>
              <GridItem
                title="Dev is a fun thing"
                thumbnail={'./images/noon.jpg'}
                href="error"
              >
                This is a cool work
              </GridItem>
            </SimpleGrid>
            <Box align="center" my={4}>
              <Button
                variant="outline"
                as={NextLink}
                target="_blank"
                href="error"
                scroll={false}
                rightIcon={<IoChevronForward />}
              >
                See more
              </Button>
            </Box>
          </Section>

          <Section delay={0.6}>
            <Heading as="h3" variant="section-title">
              On the web
            </Heading>
            <List>
              <ListItem display={'flex'} flexDirection={'column'}>
                <Link href="https://github.com/UnitIgris" target="_blank">
                  <Button variant="ghost" leftIcon={<IoLogoGithub />}>
                    @UnitIgris
                  </Button>
                </Link>
                <Link
                  href="https://linkedin.com/in/samuel-lunion/"
                  target="_blank"
                >
                  <Button variant="ghost" leftIcon={<IoLogoLinkedin />}>
                    Samuel Luinon
                  </Button>
                </Link>
              </ListItem>
            </List>
          </Section>
        </Box>
      </Box>
    </Layout>
  )
}
export default Page
