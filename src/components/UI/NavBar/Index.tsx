import {
  Avatar,
  Box,
  Button,
  Flex,
  Link,
  Stack,
  Center,
} from '@chakra-ui/react'
import { useMediaQuery } from '@chakra-ui/react'
import { FaCalendar, FaHome } from 'react-icons/fa'

const NavBar = () => {
  const [isLargerThanHD, isDisplayingInBrowser] = useMediaQuery([
    '(min-width: 360px)',
    '(display-mode: browser)',
  ])

  function determineText() {
    if (isLargerThanHD) {
      return `high resolution you got there ${
        isDisplayingInBrowser ? 'in your browser' : 'on your screen'
      }`
    }

    return isDisplayingInBrowser
      ? 'rendering in a browser'
      : 'rendering on something else, e.g. PWA'
  }

  return (
    <>
      <Box bg={'#f8f9eb'} height={90} pos="fixed" width="100%" px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Flex alignItems={'center'}>
            <Stack direction={'row'}>
              <Center width="1690px">
                <Link href="/">
                  <Box height="14px" width="400px">
                    <Button
                      size="md"
                      height="48px"
                      width="100px"
                      color="white"
                      bg="#1f1f1a"
                      _hover={{ border: '2px solid white' }}
                    >
                      Home
                    </Button>
                  </Box>
                </Link>
                <Link href="/calender">
                  <Box height="14px" width="400px">
                    <Button
                      size="md"
                      height="48px"
                      width="100px"
                      color="white"
                      bg="#1f1f1a"
                      _hover={{ border: '2px solid white' }}
                    >
                      Calender
                    </Button>
                  </Box>
                </Link>
                <Link href="/calender">
                  <Box height="14px" width="400px">
                    <Button
                      size="md"
                      height="48px"
                      width="100px"
                      color="white"
                      bg="#1f1f1a"
                      _hover={{ border: '2px solid white' }}
                    >
                      Settings
                    </Button>
                  </Box>
                </Link>
              </Center>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  )
}

export default NavBar
