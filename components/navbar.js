import { forwardRef } from 'react'
import Logo from './logo'
import NextLink from 'next/link'
import { Container, Box, Link, Stack, Heading, Flex } from '@chakra-ui/react'

import { IoLogoGithub } from 'react-icons/io5'

const LinkItem = ({ href, path, target, children, ...props }) => {
  const active = path === href

  return (
    <Link
      as={NextLink}
      href={href}
      p={2}
      bg={active ? 'grassTeal' : undefined}
      color={active ? '#202023' : 'whiteAlpha.900'}
      target={target}
      {...props}
    >
      {children}
    </Link>
  )
}

const Navbar = (props) => {
  const { path } = props

  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg="#20202380"
      style={{ backdropFilter: 'blur(10px)' }}
      zIndex={1}
      {...props}
    >
      <Container
        display="flex"
        p={4}
        pt={5}
        maxW="100%"
        wrap="wrap"
        align="center"
        justify="space-between"
      >
        <Flex align="center" mr={5}>
          <Heading as="h1" size="lg" letterSpacing={'tighter'}>
            <Logo />
          </Heading>
        </Flex>

        <Stack
          fontFamily="Roboto Mono"
          direction={{ base: 'column', md: 'row' }}
          display={{ base: 'none', md: 'flex' }}
          width={{ base: 'full', md: 'auto' }}
          alignItems="flex-end"
          ms={5}
          flexGrow={1}
          mt={{ base: 4, md: 0 }}
        >
          <LinkItem href="/work" path={path}>
            Work
          </LinkItem>
          <LinkItem
            target="_blank"
            href="https://github.com/UnitIgris"
            path={path}
            display="inline-flex"
            alignItems="center"
            style={{ gap: 4 }}
            pl={2}
          >
            <IoLogoGithub />
            Source
          </LinkItem>
        </Stack>
      </Container>
    </Box>
  )
}

export default Navbar
