import React from 'react'
import { Center, Text, Container, Stack, Box } from '@chakra-ui/react'
import SvgComponent from '@/components/Svg/SettingsSvg/Index'
import Nav from '@/components/UI/NavBar/Index'

const settings = () => {
  return (
    <Container
      maxW={'9xl'}
      height="999px"
      bgGradient={[
        'linear(to-tr, white, white)',
        'linear(to-t, white, white)',

        'linear(to-b, white, yellow)',
      ]}
    >
      <Nav />
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
  )
}
export default settings
