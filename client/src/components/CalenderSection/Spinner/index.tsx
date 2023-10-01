import { Spinner, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { CustomSpinnerType } from 'utilis/types'

const CustomSpinner = ({ text }: CustomSpinnerType) => {
  return (
    <div>
      <Stack
        textAlign={'center'}
        align={'center'}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
        bg={'rgba(255, 255, 255, 0.8)'}
      >
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
        />
        <Text>{text}</Text>
      </Stack>
    </div>
  )
}

export default CustomSpinner
