import { Stack, Center, Text, Box } from '@chakra-ui/react'
import React from 'react'
import SvgComponent from '../../Svg/CalenderSvg/Index'

const CalenderBody = () => {
  return (
    <div>
      <Stack as={Box} textAlign={'center'}>
        <Text>
          Oops! <br />
          No Walking Schedule
        </Text>
        <Center textAlign={'center'}>
          <SvgComponent />
        </Center>
      </Stack>
    </div>
  )
}

export default CalenderBody
