import {
  useMediaQuery,
  Image,
  Text,
  LinkBox,
  LinkOverlay,
  Card,
} from '@chakra-ui/react'
import NextLink from 'next/link'

export const GridItem = ({ children, id, title, thumbnail }) => {
  const [isLargerThan480] = useMediaQuery('(min-width: 480px)')
  return (
    <Card
      variant={isLargerThan480 ? 'ghost' : 'ghostMobile'}
      w="100%"
      textAlign="center"
    >
      <LinkBox
        mb={3}
        as={NextLink}
        href={`/works/${id}`}
        scroll={false}
        cursor="pointer"
      >
        <Image
          p={2}
          w={'100%'}
          borderRadius={4}
          src={thumbnail}
          alt={title}
          loading="lazy"
          placeholder="blur"
        />

        <Text mt={2} fontSize={20}>
          {title}
        </Text>

        <Text fontSize={14}>{children}</Text>
      </LinkBox>
    </Card>
  )
}
