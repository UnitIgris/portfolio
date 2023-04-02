import { Box, Image, Text, LinkBox, LinkOverlay, Card } from '@chakra-ui/react'

export const GridItem = ({ children, href, title, thumbnail }) => (
  <Card variant={"ghost"} w="100%" textAlign="center">
    <LinkBox cursor="pointer">
      <Image borderRadius={12} src={thumbnail} alt={title} loading="lazy" />
      <LinkOverlay href={href}>
        <Text mt={2}>{title}</Text>
      </LinkOverlay>
      <Text fontSize={14}>{children}</Text>
    </LinkBox>
  </Card>
)
