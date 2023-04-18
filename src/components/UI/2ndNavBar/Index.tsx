import {
  Text,
  Box,
  Button,
  Flex,
  Link,
  Stack,
  Center,
  useMediaQuery,
} from '@chakra-ui/react'

import { RiHome4Fill } from 'react-icons/ri'
import { BsCalendarPlus } from 'react-icons/bs'
import { MdSettings } from 'react-icons/md'

const NavigationBar = () => {
  return (
    <>
      <Flex h={9} bg="yellow" height={90} pos="fixed">
        <Center>
          <Stack
            direction={'row'}
            color="black"
            spacing={{ base: 20, sm: 155 }}
            ml={{ base: 25, sm: 50 }}
            mt={{ base: -150, sm: -120 }}
          >
            <Link href="/">
              <Box mb={4}>
                <RiHome4Fill size={'3em'} />
              </Box>
            </Link>
            <Link href="/calender">
              <Box mb={4}>
                <BsCalendarPlus size={'3em'} />
              </Box>
            </Link>
            <Link href="/settings">
              <Box mb={4}>
                <MdSettings size={'3em'} />
              </Box>
            </Link>
          </Stack>
        </Center>
      </Flex>
    </>
  )
}

export default NavigationBar
