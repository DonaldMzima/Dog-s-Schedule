/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react'
import { Stack, Box, Container, Center, useMediaQuery } from '@chakra-ui/react'
import { useRecoilValue } from 'recoil'
import Nav from '@/components/UI/NavBar/Index'
import CalenderBody from '@/components/CalenderSection/Calender/Index'
import NavigationBar from '@/components/UI/2ndNavBar/Index'
import FloatingButtons from '@/components/UI/FloatingButtons/Index'
import { schedulesState } from '@/store/atoms'
import SvgComponent from '@/components/Svg/HomeSvg'

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
        <FloatingButtons />

        <div>
          {dogSchedules?.length > 0 ? (
            dogSchedules?.map((walkSchedules: any) => {
              return (
                <Center key={walkSchedules.Schedule}>
                  <SvgComponent width={100} />
                  <Box
                    bg="#1f1f1a"
                    borderTopRadius="md"
                    borderColor="gray.200"
                    h={200}
                    w={200}
                  >
                    <Stack
                      textAlign={'center'}
                      color="white"
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
      <div>{isMobile && <NavigationBar />}</div>
    </>
  )
}

export default calender
