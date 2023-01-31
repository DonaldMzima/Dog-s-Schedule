import React from 'react'
import {
  Center,
  Text,
  Container,
  Stack,
  Box,
  useMediaQuery,
} from '@chakra-ui/react'
import SvgComponent from '@/components/Svg/SettingsSvg/Index'
import Nav from '@/components/UI/NavBar/Index'
import NavigationBar from '@/components/UI/2ndNavBar/Index'

const Settings = () => {
  const [isMobile] = useMediaQuery('(max-width: 768px)')
  return (
    <>
      {!isMobile && <Nav />}
      <Container
        maxW={'100%'}
        minHeight="100vh"
        bgGradient={['linear(to-b, white, yellow)']}
      >
        <Stack
          as={Box}
          textAlign={'center'}
          spacing={{ base: 8, md: 14 }}
          py={{ base: 20, md: 36 }}
        >
          <Text>
            Contant <br />
            Coming soon...
          </Text>
          <Center textAlign={'center'}>
            <SvgComponent />
          </Center>
        </Stack>
      </Container>
      {isMobile && <NavigationBar />}
    </>
  )
}
export default Settings
