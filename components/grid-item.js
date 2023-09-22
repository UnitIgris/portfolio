import {
  useMediaQuery,
  Image,
  Text,
  LinkBox,
  LinkOverlay,
  Card,
  Box,
} from '@chakra-ui/react'
import NextLink from 'next/link'
import styled from '@emotion/styled'
const CardWrap = styled.div`
CardWrap:hover .info, CardWrap:focus .info, CardWrap:focus-within .info {
  opacity: 1;
  visibility: visible;
`
const CardInfo = styled.div`
opacity: 0;
visibility: hidden;
transition-property: opacity, visibility;
transition-duration: 200ms;
display: flex;
flex-direction: column;
justify-content: end;
position: absolute;
width: 100%;
left: 0;
bottom: 0;
color: #e1e1e1;
height: 60%;
background: linear-gradient(to bottom, transparent, #121214 85%);
`

export const GridItem = ({ children, id, title, thumbnail }) => {
  const [isLargerThan480] = useMediaQuery('(min-width: 480px)')
  return (
    <Card
      variant={"steam"}
      w="100%"
      textAlign="center"
    >
      <LinkBox
        as={NextLink}
        href={`/works/${id}`}
        scroll={false}
        cursor="pointer"
      >
        <Image

          w={'100%'}
          borderRadius={1}
          src={thumbnail}
          alt={title}
          loading="lazy"
          placeholder="blur"
        />
        <Box sx={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          padding: '20px',
          paddingBottom: '10px',
          fontSize: '20px',
          display: 'none',
          color: '#fff',
          transform: 'translateY(100%)',
          transition: '0.3s'
        }} >
          <Text mt={2} fontSize={20}>
            {title}
          </Text>

          
        </Box>

      </LinkBox>
    </Card>
  )
}
