/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react'
import {
  Stack,
  Box,
  Tooltip,
  Container,
  Center,
  useMediaQuery,
} from '@chakra-ui/react'
import AddButton from '@/components/Modals/AddButton/Index'
import { useRecoilValue } from 'recoil'
import Nav from '@/components/UI/NavBar/Index'
import CalenderBody from '@/components/CalenderSection/Calender/Index'
import NavigationBar from '@/components/UI/2ndNavBar/Index'
import { schedulesState } from '@/store/atoms'

const calender = () => {
  const dogSchedules = useRecoilValue(schedulesState)
  const [isMobile] = useMediaQuery('(max-width: 768px)')
  return (
    <>
      {/* {!isMobile ?   <Nav /> : null } */}
      {!isMobile && <Nav />}
      <Container
        maxW={'100%'}
        minHeight="100vh"
        bgGradient={['linear(to-b, white, yellow)']}
      >
        <Center width="2520px" height="250px">
          <Tooltip hasArrow label="Add Schedules" bg="#FFFF00">
            <Box pos="fixed">
              <AddButton />
            </Box>
          </Tooltip>
        </Center>

        <div>
          {dogSchedules?.length > 0 ? (
            dogSchedules?.map((walkSchedules: any) => {
              return (
                <Center key={walkSchedules.Schedule}>
                  <Box
                    bg="#980c84"
                    border="1px"
                    borderColor="gray.200"
                    h={200}
                    w={400}
                  >
                    <Stack
                      textAlign={'center'}
                      align={'center'}
                      spacing={{ base: 8, md: 10 }}
                      py={{ base: 20, md: 28 }}
                    >
                      <div>
                        <p>{walkSchedules.person}</p>
                        <p>{walkSchedules.dog}</p>
                        <p>{walkSchedules.date}</p>
                      </div>
                    </Stack>
                  </Box>
                  <Box mb={4} />
                </Center>
              )
            })
          ) : (
            <>
              <CalenderBody />
            </>
          )}
        </div>
      </Container>
      <Box>{isMobile && <NavigationBar />}</Box>
    </>
  )
}

export default calender
