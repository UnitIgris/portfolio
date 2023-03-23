import Link from 'next/link'
import Image from 'next/image'
import { Text } from '@chakra-ui/react'
import styled from '@emotion/styled'

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 20px;
  padding: 10px;

  img {
    transition: 200ms ease;
  }

  &:hover img {
    transform: rotate(20deg);
  }
`

const Logo = () => {
  return (
    <Link href="/" scroll={false}>
      <>
        <LogoBox>
          <Text color="#a48b77" fontFamily="Roboto Mono" fontSize={24}>
            LunionSam
          </Text>
          <Text color="#fbf8eb" fontFamily="Roboto Mono" fontSize={24}>
            .
          </Text>
          <Text color="#9c5b2b" fontFamily="Roboto Mono" fontSize={24}>
            _
          </Text>
        </LogoBox>
      </>
    </Link>
  )
}

export default Logo
