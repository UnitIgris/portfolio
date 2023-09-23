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

const BelleEpoque = () => (
    <Layout title="BelleEpoque">
        <Container>
            <Title>Belle Epoque</Title>
            <p>
                Belle Epoque create meaningful visual identities,
                digital content, editorial material, and advertising
                characterized by creativity and simplicity. We immerse
                ourselves in your challenges, leveraging our knowledge
                and expertise to provide you with an informed solution.
            </p>
            <List ml={4} my={4}>
                <Center my={30}>
                    <Link
                        fontFamily="Poppins"
                        href='https://agence-belle-epoque.fr'
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
                        <Badge sx={{ backgroundColor: "#e6ce9a29", color: "#e6da9a" }}>Intership</Badge>
                        02.05.2022 - 15.07.2022
                    </p>
                    <p>
                        <Badge>Job</Badge>
                        React Developer
                    </p>
                    <p>
                        <Badge>Stack</Badge>React, Next
                    </p>
                </Box>
            </Stack>
            <Heading as="h4" fontSize={20} mt={8} mb={2}>
                Mission
            </Heading>
            <Box>
                I have experience in integrating components, developing onboarding
                flows, and creating multiple homepage layouts for an ongoing beta project.
            </Box>
            <Box mt={8}>
                <Image sx={{ borderRadius: 3 }} src="../images/belleEpoque/jealty-pc_1.png" alt="pc" />

            </Box>
        </Container>
    </Layout>
)

export default BelleEpoque
