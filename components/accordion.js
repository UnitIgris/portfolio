import {
  Text,
  Box,
  Image,
  Divider,
  Tag,
  TagLabel,
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Icon,
  HStack,
} from '@chakra-ui/react'
import { LinkIcon } from '@chakra-ui/icons'
import { IoLocationSharp } from 'react-icons/io5'

export const CustomAccordion = ({ children, date, title }) => {
  return (
    <AccordionItem m={4}>
      <AccordionButton>
        <Box display={'flex'} w={'100%'} justifyContent={'space-between'}>
          <Text variant={'text-poppins'}>{title}</Text>
          <Text variant={'text-poppins'}>{date}</Text>
        </Box>
        <AccordionIcon />
      </AccordionButton>

      <AccordionPanel mt={4}>{children}</AccordionPanel>
    </AccordionItem>
  )
}
export const CustomPannel = ({ location, link, Bottomdivider }) => {
  return (
    <>
      <Box display={'flex'}>
        <Box>
          <Box display={'flex'}>
            <Box display={'flex'} alignItems={'center'} mr={'10px'}>
              <Icon as={IoLocationSharp} />
              <Text variant={'text-roboto'} pl={2}>
                {location}
              </Text>
            </Box>
            <Box display={'flex'} alignItems={'center'} mx={'10px'}>
              <LinkIcon />{' '}
              <Text variant={'text-roboto'} pl={2}>
                {link}
              </Text>
            </Box>
          </Box>{' '}
          <Box my={'12px'}>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur.
          </Box>{' '}
          <HStack spacing={2}>
            <Tag
              size={'lg'}
              borderRadius="full"
              variant="solid"
              background="#654329"
            >
              <TagLabel overflow={'initial'}>Tag</TagLabel>
            </Tag>
            <Tag
              size={'lg'}
              borderRadius="full"
              variant="solid"
              background="#654329"
            >
              <TagLabel overflow={'initial'}>Tag</TagLabel>
            </Tag>
          </HStack>
        </Box>
        <Box p={'10px'}>
          <Image width={'105px'} maxW={'100%'} src="images/no-result.png" />
        </Box>
      </Box>
      {Bottomdivider ? (
        <Box justifyContent={'center'} display={'flex'}>
          <Divider w={'90%'} my={'15px'} />
        </Box>
      ) : null}
    </>
  )
}
