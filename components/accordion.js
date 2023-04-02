import {
  Text,
  Box,
  Image,
  Divider,
  Tag,
  TagLabel,
  Link,
  useMediaQuery,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Icon,
  HStack,
  Grid,
} from '@chakra-ui/react'
import { LinkIcon } from '@chakra-ui/icons'
import { IoLocationSharp, IoPerson } from 'react-icons/io5'

export const CustomAccordion = ({ children, date, title }) => {
  const [isLargerThan445] = useMediaQuery('(min-width: 445px)')
  return (
    <AccordionItem my={4}>
      <AccordionButton>
        <Box display={'flex'} w={'100%'} justifyContent={'space-between'}>
          {isLargerThan445 ? (
            <>
              <Text variant={'text-poppins'}>{title}</Text>
              <Text variant={'text-poppins'}>{date}</Text>
            </>
          ) : (
            <Text variant={'text-poppins'}>{title}</Text>
          )}
        </Box>
        <AccordionIcon />
      </AccordionButton>

      <AccordionPanel mt={4}>{children}</AccordionPanel>
    </AccordionItem>
  )
}

export const CustomPannelExp = ({
  location,
  link,
  poste,
  Bottomdivider,
  content,
  tag,
  src,
}) => {
  const [isLargerThan430] = useMediaQuery('(min-width: 430px)')
  const [isLargerThan600] = useMediaQuery('(min-width: 600px)')
  const GridWrapper = ({ children }) => {
    return isLargerThan600 ? (
      <Grid templateColumns=" 75% 25%" gap={6}>
        {children}
        <Box alignItems={'center'} display={'flex'} pt={'10px'} maxW={'105px'}>
          <Image borderRadius={'12px'} maxW={'100%'} src={'images/' + src} />
        </Box>
      </Grid>
    ) : (
      <Box>{children}</Box>
    )
  }

  return (
    <>
      <GridWrapper>
        <Box pl={2}>
          <Box display={'flex'}>
            <Text
              mr={'10px'}
              fontSize={isLargerThan430 ? undefined : '14px'}
              variant={'text-roboto'}
            >
              {poste} @
            </Text>

            <Link
              href={`https://${link}`}
              target="_blank"
              fontSize={isLargerThan430 ? undefined : '14px'}
              variant={'text-roboto'}
            >
              {link}
            </Link>
          </Box>

          {/* <Box display={'flex'} alignItems={'center'} mt={'10px'}>
            <Icon as={IoLocationSharp} />
            <Text
              fontSize={isLargerThan430 ? undefined : '14px'}
              variant={'text-roboto'}
              pl={2}
            >
              {location}
            </Text>
          </Box> */}

          <Text my={'12px'}>{content}</Text>
          <HStack spacing={5} flexWrap="wrap">
            {tag?.map((tag) => (
              <Tag
                style={{ margin: ' 0px 5px 5px 0px' }}
                key={tag}
                size={'lg'}
                borderRadius="full"
                variant="solid"
                background="#654329"
              >
                <TagLabel overflow={'initial'}>{tag}</TagLabel>
              </Tag>
            ))}
          </HStack>
        </Box>
      </GridWrapper>
      {Bottomdivider ? (
        <Box justifyContent={'center'} display={'flex'}>
          <Divider w={'90%'} my={'15px'} />
        </Box>
      ) : null}
    </>
  )
}

export const CustomPannelEdu = ({
  dates,
  link,
  Bottomdivider,
  content,
  src,
}) => {
  const [isLargerThan430] = useMediaQuery('(min-width: 430px)')
  const [isLargerThan600] = useMediaQuery('(min-width: 600px)')
  const GridWrapper = ({ children }) => {
    return isLargerThan600 ? (
      <Grid templateColumns=" 20% 60% 16%" alignItems={'center'} gap={2}>
        {children}
        <Box alignItems={'center'} display={'flex'} pt={'10px'} maxW={'105px'}>
          <Image borderRadius={'12px'} maxW={'100%'} src={'images/' + src} />
        </Box>
      </Grid>
    ) : (
      <Box display={'flex'} alignItems={'center'}>
        {children}
      </Box>
    )
  }
  return (
    <>
      <GridWrapper>
        <Box
          borderRadius={'10px'}
          justifyContent={'center'}
          bgColor="#ffffff1a"
          textAlign={'center'}
          display={'flex'}
          lineHeight={'1.1'}
          w={'225px'}
          maxW={['100px', '110px', '125px']}
        >
          {dates ? (
            <Text
              my={3}
              fontWeight={600}
              borderRadius={'12px'}
              fontSize={'18px'}
              maxW={'100%'}
            >
              {dates[0]} <br /> {`-`} <br />
              {dates[1]}
            </Text>
          ) : (
            <Text borderRadius={'12px'} maxW={'100%'}>
              {'date1'} <br /> {`-`} <br />
              {'date2'}
            </Text>
          )}
        </Box>
        <Box pl={4}>
          <Text
            fontSize={isLargerThan430 ? undefined : '14px'}
            variant={'text-roboto'}
          >
            {content}
          </Text>
          <Box display={'flex'}>
            <Text
              color="linksColor"
              textUnderlineOffset={3}
              fontSize={isLargerThan430 ? undefined : '14px'}
              variant={'text-roboto'}
            >
              {link}
            </Text>
          </Box>
        </Box>
      </GridWrapper>
      {Bottomdivider ? (
        <Box justifyContent={'center'} display={'flex'}>
          <Divider w={'90%'} my={'15px'} />
        </Box>
      ) : null}
    </>
  )
}
