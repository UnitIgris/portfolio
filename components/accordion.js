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
import { IoLocationSharp } from 'react-icons/io5'

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

export const CustomPannel = ({
  location,
  link,
  Bottomdivider,
  content,
  tag,
  src,
}) => {
  const [isLargerThan430] = useMediaQuery('(min-width: 430px)')
  const [isLargerThan600] = useMediaQuery('(min-width: 600px)')
  const GridWrapper = ({ children }) => {
    console.log(src)
    return isLargerThan600 ? (
      <Grid templateColumns=" 75% 25%" gap={6}>
        {children}
        <Box alignItems={'center'} display={'flex'} pt={'10px'} maxW={'105px'}>
          <Image borderRadius={"12px"} maxW={'100%'} src={'images/' + src} />
        </Box>
      </Grid>
    ) : (
      <Box>{children}</Box>
    )
  }

  return (
    <>
      <GridWrapper>
        <Box>
          <Box display={'flex'}>
            <Box display={'flex'} alignItems={'center'} mr={'10px'}>
              <Icon as={IoLocationSharp} />
              <Text
                fontSize={isLargerThan430 ? undefined : '12px'}
                variant={'text-roboto'}
                pl={2}
              >
                {location}
              </Text>
            </Box>
            <Box display={'flex'} alignItems={'center'} mx={'10px'}>
              <LinkIcon color={'linksColor'} />

              <Link
                fontSize={isLargerThan430 ? undefined : '12px'}
                variant={'text-roboto'}
                pl={2}
              >
                {link}
              </Link>
            </Box>
          </Box>
          <Text my={'12px'}>{content}</Text>
          <HStack spacing={2}>
            {tag?.map((tag) => (
              <Tag
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
