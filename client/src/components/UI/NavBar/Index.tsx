import { Box, Button, Flex, Link, Stack, useMediaQuery } from '@chakra-ui/react'

import { RiHome4Fill } from 'react-icons/ri'

const NavBar = () => {
  const [isMobile] = useMediaQuery('(max-width: 768px')

  return (
    <Flex
      h={90}
      alignItems="center"
      justifyContent="center" // Center-align buttons
      bg={'transparent'}
      pos="fixed"
      top={0}
      left={0}
      right={0}
      px={4}
    >
      <Stack direction="row" spacing={250}>
        <Link href="/">
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
        </Link>
        <Link href="/schedules">
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
        </Link>
        <Link href="/settings">
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
        </Link>
      </Stack>
    </Flex>
  )
}

export default NavBar
