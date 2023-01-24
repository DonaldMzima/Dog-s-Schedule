import React from 'react'
import { Stack, Box, Container, Button, Text, Center } from '@chakra-ui/react'
import AddButton from '@/components/Modals/AddButton/Index'
import { useRecoilValue } from 'recoil'
import Nav from '@/components/UI/NavBar/Index'
import SvgComponent from '@/components/Svg/CalenderSvg/Index'
import { schedulesState } from '@/store/atoms'

const calender = () => {
  const dogSchedules = useRecoilValue(schedulesState)
  return (
    <Container
      maxW={'9xl'}
      height="999px"
      bgGradient={['linear(to-b, white, yellow)']}
    >
      <Nav />

      <Center width="2520px" height="250px">
        <Button boxSize="70px" bg="BLACK" pos="fixed">
          <AddButton />
        </Button>
      </Center>

      <div>
        {dogSchedules?.length > 0 ? (
          dogSchedules?.map((walkSchedules: any) => {
            console.log('data.value', dogSchedules)
            return (
              <div key={walkSchedules.Schedule}>
                <Box bg="#980c84" border="1px" borderColor="gray.200">
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
              </div>
            )
          })
        ) : (
          <>
            {' '}
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
          </>
        )}
      </div>
    </Container>
  )
}

export default calender
