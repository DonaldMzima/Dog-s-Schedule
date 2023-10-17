import {
  Box,
  Button,
  Flex,
  Link,
  Stack,
  Center,
  useMediaQuery,
} from '@chakra-ui/react'

import { RiHome4Fill } from 'react-icons/ri'

const NavBar = () => {
  const [isMobile] = useMediaQuery('(max-width: 768px)')
  return (
    <>
      <Box bg={'#f8f9eb'} height={90} pos="fixed" width="100%" px={4}>
        <Flex
          h={16}
          alignItems={'center'}
          justifyContent={'space-between'}
          marginRight={100}
        >
          <Stack direction={'row'}>
            <Center width="1690px">
              <Link href="/">
                <Box height="14px" width="400px">
                  {isMobile ? (
                    <>
                      <RiHome4Fill />
                    </>
                  ) : (
                    <>
                      <Button
                        size="md"
                        height="48px"
                        width="100px"
                        color="white"
                        bg={'#1f1f1a'}
                        _hover={{ border: '2px solid white' }}
                      >
                        Home
                      </Button>
                    </>
                  )}
                </Box>
              </Link>
              <Link href="/calender">
                <Box height="14px" width="400px">
                  {isMobile ? (
                    <>
                      <RiHome4Fill />
                    </>
                  ) : (
                    <>
                      <Button
                        size="md"
                        height="48px"
                        width="100px"
                        color="white"
                        bg="#1f1f1a"
                        _hover={{ border: '2px solid white' }}
                      >
                        Schedules
                      </Button>
                    </>
                  )}
                </Box>
              </Link>
              <Link href="/settings">
                <Box height="14px" width="400px">
                  {isMobile ? (
                    <>
                      <RiHome4Fill />
                    </>
                  ) : (
                    <>
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
                    </>
                  )}
                </Box>
              </Link>
            </Center>
          </Stack>
        </Flex>
      </Box>
    </>
  )
}

export default NavBar
