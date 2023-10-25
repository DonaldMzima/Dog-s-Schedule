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
          <Box pos="fixed">
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
            <Box pos="fixed">
              <AddModal />
            </Box>
          </Tooltip>
        </Center>
      )}
    </div>
  )
}

export default FloatingButtons
