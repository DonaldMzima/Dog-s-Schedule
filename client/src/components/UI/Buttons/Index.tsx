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
          <Box zIndex={1} right="0%" pos={'fixed'}>
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
              zIndex={1}
              pos={'fixed'}
              right={{
                base: '15%',
                sm: '10%',
                md: '2%',
                lg: '20%',
                xl: '22%',
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
