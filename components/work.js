import NextLink from 'next/link'
import { Heading, Box, Image, Link, Badge } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'

export const Title = ({ children }) => (
  <Box style={{ display: 'flex', flexDirection: 'column' }}>
    <Link as={NextLink} href="/works">
      Works
    </Link>

    <Heading
      display="inline-block"
      as="h3"
      fontSize={42}
      mb={4}
      style={{ display: 'flex', alignItems: 'baseline' }}
    >
      {children}
    </Heading>
  </Box>
)

export const WorkImage = ({ src, alt }) => (
  <Image borderRadius="lg" w="full" src={src} alt={alt} mb={4} />
)

export const BadgeCustom = ({ children }) => (
  <Badge colorScheme="green" borderRadius={4} px={2} py={'2px'} mr={2}>
    {children}
  </Badge>
)

export const MediaBox = ({ href, title, article }) => (
  <Box mb={3}>
    <Link href={href}>
      <BadgeCustom mr={2}>{title}</BadgeCustom>
      <p>
        {article}
        <ExternalLinkIcon mx="2px" />
      </p>
    </Link>
  </Box>
)
