/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react'
import AddModal from '@/components/Modals/AddModal/Index'
import {
  Box,
  Tooltip,
  Center,
  useMediaQuery,
  useColorModeValue,
} from '@chakra-ui/react'

const FloatingButtons = () => {
  const [isMobile] = useMediaQuery('(max-width: 768px)')
  return (
    <div>
      {isMobile ? (
        <Center
          width={{ base: '100%', md: '180%' }}
          height={{ base: '100px', md: '250px' }}
        >
          <Box pos="absolute" right="0%">
            <AddModal />
          </Box>
        </Center>
      ) : (
        <Center
          width={{ base: '100%', md: '2520px' }}
          height={{ base: '100px', md: '250px' }}
        >
          <Tooltip
            hasArrow
            label="Add Schedules"
            color="white"
            bg={useColorModeValue('black', 'gray.900')}
          >
            <Box
              pos="absolute"
              right={{
                base: '15%',
                sm: '10%',
                md: '2%',
                lg: '20%',
                xl: '32%',
              }}
            >
              <AddModal />
            </Box>
          </Tooltip>
        </Center>
      )}
    </div>
  )
}

export default FloatingButtons
