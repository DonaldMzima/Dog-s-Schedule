import { Box, Link, Stack, Center, useColorModeValue } from '@chakra-ui/react'
import { RiHome4Fill } from 'react-icons/ri'
import { FaRegCalendarCheck } from 'react-icons/fa'
import { useRouter } from 'next/router'
import SettingDrawer from '@/components/Settings'

const NavigationBar = () => {
  const router = useRouter()

  return (
    <Box position="fixed" bottom={-50} width="100%" zIndex={1} boxShadow="lg">
      <Center>
        <Stack
          direction={'row'}
          color={useColorModeValue('#000000', ' white')}
          spacing={{ base: 20, sm: 155 }}
          ml={{ base: 25, sm: 50 }}
          mt={{ base: -150, sm: -150 }}
          bg={useColorModeValue(' yellow', 'transparent')}
        >
          <Link
            href="/"
            borderBottom={router.pathname === '/' ? '2px solid black' : 'none'}
          >
            <Box mb={4}>
              <RiHome4Fill size={'3em'} />
            </Box>
          </Link>
          <Link
            href="/schedules"
            borderBottom={
              router.pathname === '/schedules' ? '2px solid black' : 'none'
            }
          >
            <Box mb={4}>
              <FaRegCalendarCheck size={'3em'} />
            </Box>
          </Link>
          <SettingDrawer />
        </Stack>
      </Center>
    </Box>
  )
}

export default NavigationBar
