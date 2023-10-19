import { Button, Flex, Link, Stack, useMediaQuery } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { SetStateAction, useState } from 'react'

const NavBar = () => {
  const [isMobile] = useMediaQuery('(max-width: 768px')
  const [activeButton, setActiveButton] = useState('')

  const router = useRouter()

  const handleButtonClick = (path: SetStateAction<string>) => {
    setActiveButton(path)
  }

  return (
    <Flex
      h={90}
      alignItems="center"
      justifyContent="center" // Center-align buttons
      bg={'white'}
      pos="fixed"
      top={0}
      left={0}
      right={0}
      px={4}
      boxShadow="md"
    >
      <Stack direction="row" spacing={250}>
        <Link href="/">
          <Button
            size="md"
            height="48px"
            width="100px"
            color="white"
            bg={router.pathname === '/' ? '#696969' : '#1f1f1a'}
            onClick={() => handleButtonClick('/')}
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
            bg={router.pathname === '/schedules' ? '#696969' : '#1f1f1a'}
            onClick={() => handleButtonClick('/schedules')}
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
            bg={router.pathname === '/settings' ? '#696969' : '#1f1f1a'}
            onClick={() => handleButtonClick('/settings')}
          >
            Settings
          </Button>
        </Link>
      </Stack>
    </Flex>
  )
}

export default NavBar
