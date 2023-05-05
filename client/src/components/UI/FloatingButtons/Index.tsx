import React from 'react'
import AddModal from '@/components/Modals/AddButton/Index'
import { Box, Tooltip, Center, useMediaQuery } from '@chakra-ui/react'

const FloatingButtons = () => {
  const [isMobile] = useMediaQuery('(max-width: 768px)')
  return (
    <div>
      {isMobile ? (
        <>
          <Center width="180%" height="100px">
            <Tooltip hasArrow label="Add Schedules" bg="black">
              <Box pos="fixed">
                <AddModal />
              </Box>
            </Tooltip>
          </Center>
        </>
      ) : (
        <>
          <Center width="2520px" height="250px">
            <Tooltip hasArrow label="Add Schedules" bg="black">
              <Box pos="fixed">
                <AddModal />
              </Box>
            </Tooltip>
          </Center>
        </>
      )}
    </div>
  )
}

export default FloatingButtons
