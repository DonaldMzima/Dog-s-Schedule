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

import { RiHome4Fill } from 'react-icons/Ri'
import { BsCalendarPlus } from 'react-icons/Bs'
import { MdSettings } from 'react-icons/Md'

const NavigationBar = () => {
  return (
    <>
      <Flex h={16} bg={'#FFFFE5'} height={90} pos="fixed" w="100%">
        <Center mb={4}>
          <Stack direction={'row'} spacing={{ base: 8, md: 10 }}>
            <Link href="/">
              <Box>
                <RiHome4Fill />
              </Box>
            </Link>
            <Link href="/calender">
              <Box>
                <BsCalendarPlus />
              </Box>
            </Link>
            <Link href="/settings">
              <Box>
                <MdSettings />
              </Box>
            </Link>
          </Stack>
        </Center>
      </Flex>
    </>
  )
}

export default NavigationBar
