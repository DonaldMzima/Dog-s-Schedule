import { Avatar, Box, Button, Flex, Link, Stack } from '@chakra-ui/react'
import { FaCalendar, FaHome } from 'react-icons/fa'

const NavBar = () => {
  return (
    <>
      <Box bg={'#709c84'} height={90} pos="fixed" width="100%" px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7}>
              <Link href="/">
                <Box height="14px" width="400px">
                  <Button
                    size="md"
                    height="48px"
                    width="100px"
                    bg="green.400"
                    _hover={{ border: '2px solid #709c84' }}
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
                    bg="green.400"
                    _hover={{ border: '2px solid #709c84' }}
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
                    bg="green.400"
                    _hover={{ border: '2px solid #709c84' }}
                  >
                    Settings
                  </Button>
                </Box>
              </Link>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  )
}

export default NavBar
