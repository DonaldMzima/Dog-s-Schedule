/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from 'react'
import {
  SimpleGrid,
  Stack,
  Box,
  Container,
  Center,
  useMediaQuery,
  ListIcon,
  List,
  Avatar,
} from '@chakra-ui/react'
import { useRecoilState, useRecoilValue } from 'recoil'
import { StorageState } from '@/store/atoms'
import Nav from '@/components/UI/NavBar/Index'

import FloatingButtons from '@/components/UI/FloatingButtons/Index'
import { schedulesState } from '@/store/atoms'
import NavigationBar from '@/components/UI/2ndNavBar/Index'

import { CheckIcon } from '@chakra-ui/icons'
import CalenderBody from '@/components/CalenderSection/Calender'

const Calender = () => {
  const [storage, setStorage] = useRecoilState<any>(StorageState)
  const dogSchedules = useRecoilValue(schedulesState)
  const [walkSchedule, setWalkSchedule] = useState(dogSchedules)
  const [isMobile] = useMediaQuery('(max-width: 768px)')

  useEffect(() => {
    localStorage.setItem('dogWalking', JSON.stringify(dogSchedules))
  }, [dogSchedules])

  useEffect(() => {
    const starage = JSON.parse(localStorage.getItem('dogWalking') || '')
    console.log('JJJ', starage)
    setWalkSchedule(starage)
  }, [walkSchedule])

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
          <Center>
            {dogSchedules?.length > 0 ? (
              dogSchedules?.map((walkSchedules: any) => {
                return (
                  <Center key={walkSchedules.Schedule}>
                    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5}>
                      <Box
                        bg=" gray.200 "
                        borderTopRadius="md"
                        borderColor="black.900"
                        h={127}
                        maxW={680}
                        w={650}
                        boxShadow="0 0 6px 6px grey"
                      >
                        <Center>
                          <Avatar
                            size="md"
                            src="https://www.thedrakecenter.com/cdn-cgi/mirage/00ce58fde158f2328addee1b2c1357c828913618b5914efa4c344929b818cb9a/1280/https://www.thedrakecenter.com//cdn-cgi/image/q=80,f=auto,metadata=none/sites/default/files/u44/4D912606-4FB8-4A1C-B431-2F753DD0CE42.jpeg"
                          />
                        </Center>

                        <Stack
                          textAlign={'center'}
                          color="#1f1f1a"
                          // spacing={{ base: 0, md: 0 }}
                          // py={{ base: 0, md: 0 }}
                        >
                          <List>
                            <p>
                              <ListIcon
                                as={CheckIcon}
                                color="green.400"
                                textAlign={'left'}
                              />
                              Person Responsible: {walkSchedules.person}
                            </p>
                            <p>
                              <ListIcon
                                as={CheckIcon}
                                color="green.400"
                                textAlign={'left'}
                              />
                              Dogs Name: {walkSchedules.dog}
                            </p>
                            <p>
                              <ListIcon
                                as={CheckIcon}
                                color="green.400"
                                textAlign={'left'}
                              />
                              Date: {walkSchedules.date}
                            </p>
                          </List>
                        </Stack>
                      </Box>
                    </SimpleGrid>
                  </Center>
                )
              })
            ) : (
              <>
                <CalenderBody />
              </>
            )}
          </Center>
        </div>
      </Container>
      {isMobile && <NavigationBar />}
    </>
  )
}

export default Calender
