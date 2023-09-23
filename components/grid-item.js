import {
  Image,
  Text,
  LinkBox,
  Card,
} from '@chakra-ui/react'
import NextLink from 'next/link'

export const GridItem = ({ dark,mobileoff, id, title, thumbnail }) => {
  return (
    <Card className={`grid-item-wrapper ${mobileoff ? "mobileOff":"" } `}>
      <LinkBox
        as={NextLink}
        href={`/works/${id}`}
        scroll={false}
        cursor="pointer"
      >
        <Image
          src={thumbnail}
          alt={title}
          loading="lazy"
          placeholder="blur"
        />
        <Text className='grid-item-text' color={dark ? "black" : "white"}>
          {title}
        </Text>
      </LinkBox>
    </Card>
  )
}
