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
      <Flex h={9} bg="yellow" height={90} pos="fixed">
        <Center>
          <Stack
            direction={'row'}
            spacing={20}

            marginBottom={180}

           

            marginLeft={25}
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
