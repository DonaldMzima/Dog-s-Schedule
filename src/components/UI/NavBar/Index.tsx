import { Avatar, Box, Button, Flex, Link, Stack } from '@chakra-ui/react'

const NavBar = () => {
  return (
    <>
      <Box bg={'#709c84'} height={90} pos="fixed" width="100%" px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7}>
              <Link href="/">
                <Button
                  size="md"
                  height="48px"
                  width="100px"
                  bg="green.400"
                  _hover={{ border: '2px solid #709c84' }}
                >
                  HOME
                </Button>
              </Link>
              <Link href="/">
                <Button
                  size="md"
                  height="48px"
                  width="100px"
                  bg="green.400"
                  _hover={{ border: '2px solid #709c84' }}
                >
                  HOME
                </Button>
              </Link>
              <Link href="/">
                <Button
                  size="md"
                  height="48px"
                  width="100px"
                  bg="green.400"
                  _hover={{ border: '2px solid #709c84' }}
                >
                  HOME
                </Button>
              </Link>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  )
}

export default NavBar
