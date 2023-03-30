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

function FlexText(date, title) {
  const [isLargerThan400] = useMediaQuery('(min-width: 445px)')

  return isLargerThan400 ? (
    <>
      <Text variant={'text-poppins'}>{title}</Text>
      <Text variant={'text-poppins'}>{date}</Text>
    </>
  ) : (
    <Text variant={'text-poppins'}>{title}</Text>
  )
}
export const CustomAccordion = ({ children, date, title }) => {
  return (
    <AccordionItem m={4}>
      <AccordionButton>
        <Box display={'flex'} w={'100%'} justifyContent={'space-between'}>
          {FlexText(date, title)}
        </Box>
        <AccordionIcon />
      </AccordionButton>

      <AccordionPanel mt={4}>{children}</AccordionPanel>
    </AccordionItem>
  )
}
function FlexPannel(location, link, content, tag) {
  const [isLargerThan400] = useMediaQuery('(min-width: 445px)')

  return isLargerThan400 ? (
    <Grid templateColumns='repeat(2, 370px)' gap={6}>
      <Box>
        <Box display={'flex'}>
          <Box display={'flex'} alignItems={'center'} mr={'10px'}>
            <Icon as={IoLocationSharp} />
            <Text variant={'text-roboto'} pl={2}>
              {location}
            </Text>
          </Box>
          <Box display={'flex'} alignItems={'center'} mx={'10px'}>
            <LinkIcon color={"linksColor"} />
            <Link variant={'text-roboto'} pl={2}>
              {link}
            </Link>
          </Box>
        </Box>
        <Text my={'12px'}>{content}</Text>
        <HStack spacing={2}>
          <Tag
            size={'lg'}
            borderRadius="full"
            variant="solid"
            background="#654329"
          >
            <TagLabel overflow={'initial'}>{tag}</TagLabel>
          </Tag>
          <Tag
            size={'lg'}
            borderRadius="full"
            variant="solid"
            background="#654329"
          >
            <TagLabel overflow={'initial'}>{tag}</TagLabel>
          </Tag>
        </HStack>
      </Box>
      <Box p={'10px'}>
        <Image width={'105px'} maxW={'100%'} src="images/no-result.png" />
      </Box>
    </Grid>
  ) : (
    <Box display={'flex'}>
      <Box>
        <Box display={'flex'} flexDirection={'column'}>
          <Box display={'flex'} alignItems={'center'}>
            <Icon as={IoLocationSharp} />
            <Text variant={'text-roboto'} pl={2}>
              {location}
            </Text>
          </Box>
          <Box display={'flex'} alignItems={'center'} mt={'10px'}>
            <LinkIcon color={"linksColor"}/>
            <Link fontSize={'xs'} variant={'text-roboto'} pl={2}>
              {link}
            </Link>
          </Box>
        </Box>
        <Text my={'12px'}>{content}</Text>
        <HStack spacing={2}>
          <Tag
            size={'lg'}
            borderRadius="full"
            variant="solid"
            background="#654329"
          >
            <TagLabel overflow={'initial'}>{tag}</TagLabel>
          </Tag>
          <Tag
            size={'lg'}
            borderRadius="full"
            variant="solid"
            background="#654329"
          >
            <TagLabel overflow={'initial'}>{tag}</TagLabel>
          </Tag>
        </HStack>
      </Box>
    </Box>
  )
}

export const CustomPannel = ({
  location,
  link,
  Bottomdivider,
  content,
  tag,
}) => {
  return (
    <>
      {FlexPannel(location, link, content, tag)}
      {Bottomdivider ? (
        <Box justifyContent={'center'} display={'flex'}>
          <Divider w={'90%'} my={'15px'} />
        </Box>
      ) : null}
    </>
  )
}
