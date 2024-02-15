import SettingDrawer from '@/components/Settings'
import {
  Box,
  Button,
  Center,
  Flex,
  Image,
  Link,
  Stack,
  useColorMode,
  useColorModeValue,
  useMediaQuery,
} from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { SetStateAction, useState } from 'react'

const NavBar = () => {
  const [isMobile] = useMediaQuery('(max-width: 768px)')
  const [activeButton, setActiveButton] = useState('')

  const router = useRouter()
  const { colorMode } = useColorMode()

  const handleButtonClick = (path: SetStateAction<string>) => {
    setActiveButton(path)
  }

  return (
    <>
      <Box
        h={90}
        bg={useColorModeValue('white', 'gray.900')}
        pos="fixed"
        top={0}
        zIndex={1}
        left={0}
        right={0}
        px={4}
        boxShadow="md"
        alignItems="center"
        justifyContent="center"
      >
        {/* Logo */}
        {colorMode === 'light' && (
          <Image
            src="/dogwalkschedule.png"
            alt="DogWalkSchedule Logo"
            height="30px"
            pos="absolute"
            mr={{ base: 1000, sm: 1200, md: 1400, lg: 1400 }}
            display="flex"
            mt={29}
          />
        )}
        <Center>
          <Stack
            direction="row"
            spacing={250}
            alignItems="center"
            justify="center"
            mt={17}
          >
            <Link href="/">
              <Button
                size="md"
                height="48px"
                width="100px"
                border={useColorModeValue(
                  '2px solid #1f1f1a',
                  '1px solid #fafaf7',
                )}
                color={useColorModeValue(
                  router.pathname === '/' ? '#1f1f1a' : 'white',
                  router.pathname === '/' ? 'white' : 'gray.900',
                )}
                bg={useColorModeValue(
                  router.pathname === '/' ? '#fafaf7' : '#1f1f1a',
                  router.pathname === '/' ? 'gray.900' : '#fafaf7',
                )}
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
                border={useColorModeValue(
                  '2px solid #1f1f1a',
                  '1px solid #fafaf7',
                )}
                color={useColorModeValue(
                  router.pathname === '/schedules' ? '#1f1f1a' : 'white',
                  router.pathname === '/schedules' ? 'white' : 'gray.900',
                )}
                bg={useColorModeValue(
                  router.pathname === '/schedules' ? '#fafaf7' : '#1f1f1a',
                  router.pathname === '/schedules' ? 'gray.900' : '#fafaf7',
                )}
                onClick={() => handleButtonClick('/schedules')}
              >
                Schedules
              </Button>
            </Link>
            <SettingDrawer />
          </Stack>
        </Center>
      </Box>
    </>
  )
}

export default NavBar
