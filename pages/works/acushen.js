import {
    Container,
    Badge,
    Link,
    List,
    SimpleGrid,
    Heading,
    Center,
    Image,
    Box,
} from '@chakra-ui/react'
import { Title } from '../../components/work'
import Layout from '../../components/layouts/article'

const Acushen = () => (
    <Layout title="AcushenGwada">
        <Container>
            <Title>Acushen Gwada</Title>
            <p>
                Your well-being is their priority. Each session is tailored
                to meet your individual needs and guide you towards an optimal
                state of well-being using techniques proven over centuries.
            </p>
            <List ml={4} my={4}>
                <Center my={30}>
                    <Link
                        fontFamily="Poppins"
                        href='https://acushen-gwada.vercel.app'
                        sx={{ display: "flex", justifyContent: "center", py: "5px", borderRadius: 3, fontWeight: 600, color: 'white', background: '#292A30' }}
                        w={'100%'}
                    >
                        VISIT WEBSITE
                    </Link>
                </Center>
            </List>
            <Box fontFamily="Roboto Mono" sx={{ display: "flex", paddingLeft: "10px", borderLeft: "1px solid #343434" }} h="100%"  >
                <Box lineHeight={'1.5'}>
                    <p>
                        <Badge>Location</Badge>Paris,FR
                    </p>
                    <p>
                        <Badge>Date</Badge>19.09.2023 - 21.09.2023
                    </p>
                    <p>
                        <Badge>Jobs</Badge>Front-End Developer, Designer
                    </p>
                    <p>
                        <Badge>Stack</Badge>React, Next
                    </p>
                </Box>
            </Box>
            <Heading as="h4" fontSize={20} mt={8} mb={2}>
                Mission
            </Heading>
            <Box>
                Quickly create a website that stands out from the websites in the healthcare field.
            </Box>
            <Box mt={8}>
                <Image sx={{ borderRadius: 3 }} src="../images/acushen/acushen-pc.png" alt="pc" />
                <SimpleGrid mt={2} columns={[1, 2, 2]} gap={2}>
                    <Image sx={{ borderRadius: 3 }} src="../images/acushen/acushen-phone_1.png" alt="phone" />
                    <Image sx={{ borderRadius: 3 }} src="../images/acushen/acushen-phone_2.png" alt="phone" />
                </SimpleGrid>
            </Box>
        </Container>
    </Layout>
)

export default Acushen
