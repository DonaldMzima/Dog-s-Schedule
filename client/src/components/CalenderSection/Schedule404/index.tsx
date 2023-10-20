import { Stack, Center, Text, Box } from '@chakra-ui/react'
import React from 'react'
import SvgComponent from '../../Svg/CalenderSvg/Index'

const CalenderBody = ({ query }: string | any) => {
  return (
    <div>
      <Stack as={Box} textAlign={'center'}>
        {query.length > 0 ? (
          <Text> No results for: {query} </Text>
        ) : (
          <Text>
            Oops! <br /> No Walking Schedules{' '}
          </Text>
        )}
        <Center textAlign={'center'}>
          <SvgComponent />
        </Center>
      </Stack>
    </div>
  )
}

export default CalenderBody
