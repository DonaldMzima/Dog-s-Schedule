import React from 'react'
import { Stack, Box, Container, Button, Text, Center } from '@chakra-ui/react'
import AddButton from '@/components/Modals/AddButton/Index'
import SvgComponent from '@/components/Svg/CalenderSvg/Index'

const calender = () => {
  return (
    <Container
      maxW={'9xl'}
      height="999px"
      bgGradient={['linear(to-b, white, yellow)']}
    >
      <Button>
        <AddButton />
      </Button>
      <Stack
        as={Box}
        textAlign={'center'}
        spacing={{ base: 8, md: 14 }}
        py={{ base: 20, md: 36 }}
      >
        <Text>
          Oops! <br />
          No Walking Schedule
        </Text>
        <Center textAlign={'center'}>
          <SvgComponent />
        </Center>
      </Stack>
    </Container>
  )
}

export default calender
