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
      zIndex={1}
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
            border="2px solid #1f1f1a"
            color={router.pathname === '/' ? '#1f1f1a' : 'white'}
            bg={router.pathname === '/' ? '#fafaf7' : '#1f1f1a'}
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
            border="2px solid #1f1f1a"
            color={router.pathname === '/schedules' ? '#1f1f1a' : 'white'}
            bg={router.pathname === '/schedules' ? '#fafaf7' : '#1f1f1a'}
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
            border="2px solid #1f1f1a"
            color={router.pathname === '/settings' ? '#1f1f1a' : 'white'}
            bg={router.pathname === '/settings' ? '#fafaf7' : '#1f1f1a'}
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
