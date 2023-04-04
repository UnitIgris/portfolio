import { useMediaQuery, Image, Text, LinkBox, LinkOverlay, Card } from '@chakra-ui/react'

export const GridItem = ({ children, href, title, thumbnail }) => {
  const [isLargerThan480] = useMediaQuery('(min-width: 480px)')
  return (
    <Card
      variant={isLargerThan480 ? 'ghost' : 'ghostMobile'}
      w="100%"
      textAlign="center"
    >
      <LinkBox mb={3} cursor="pointer">
        <Image
          p={2}
          w={'100%'}
          borderRadius={4}
          src={thumbnail}
          alt={title}
          loading="lazy"
        />
        <LinkOverlay href={href}>
          <Text mt={2}>{title}</Text>
        </LinkOverlay>
        <Text fontSize={14}>{children}</Text>
      </LinkBox>
    </Card>
  )
}
