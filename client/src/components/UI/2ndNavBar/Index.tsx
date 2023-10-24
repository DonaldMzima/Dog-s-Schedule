import { Box, Flex, Link, Stack, Center } from '@chakra-ui/react'
import { RiHome4Fill } from 'react-icons/ri'
import { BsCalendarPlus } from 'react-icons/bs'
import { MdSettings } from 'react-icons/md'
import { useRouter } from 'next/router' // Import the router from Next.js
import SettingDrawer from '@/components/Settings'

const NavigationBar = () => {
  const router = useRouter() // Get the router object

  return (
    <>
      <Flex bg="yellow" zIndex={1} height={100}>
        <Center>
          <Stack
            direction={'row'}
            zIndex={1}
            color="black"
            spacing={{ base: 20, sm: 155 }}
            ml={{ base: 25, sm: 50 }}
            mt={{ base: -150, sm: -120 }}
          >
            <Link
              href="/"
              borderBottom={
                router.pathname === '/' ? '2px solid black' : 'none'
              }
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
                <BsCalendarPlus size={'3em'} />
              </Box>
            </Link>
            <SettingDrawer />
          </Stack>
        </Center>
      </Flex>
    </>
  )
}

export default NavigationBar
