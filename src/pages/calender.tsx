/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect } from 'react'
import {
  SimpleGrid,
  Stack,
  Box,
  Container,
  Center,
  useMediaQuery,
  Img,
  ListIcon,
  List,
  Avatar,
  Spacer,
} from '@chakra-ui/react'
import { useRecoilState, useRecoilValue } from 'recoil'
import { StorageState } from '@/store/atoms'
import Nav from '@/components/UI/NavBar/Index'
import CalenderBody from '@/components/CalenderSection/Calender/Index'
import NavigationBar from '@/components/UI/2ndNavBar/Index'
import FloatingButtons from '@/components/UI/FloatingButtons/Index'
import { schedulesState } from '@/store/atoms'
import SvgComponent from '@/components/Svg/HomeSvg'
import { CheckIcon } from '@chakra-ui/icons'

const calender = () => {
  const [storage, setStorage] = useRecoilState<any>(StorageState)
  const dogSchedules = useRecoilValue(schedulesState)
  const [isMobile] = useMediaQuery('(max-width: 768px)')

  // useEffect(() => {
  //   localStorage.setItem('storage', JSON.stringify(storage))
  // }, [storage])

  // useEffect(() => {
  //   const storage = JSON.parse(localStorage.getItem('storage'))
  //   if (storage) {
  //     setStorage(storage)
  //   }
  // }, [storage])

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
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5}>
              {dogSchedules?.length > 0 ? (
                dogSchedules?.map((walkSchedules: any) => {
                  return (
                    <Center key={walkSchedules.Schedule}>
                      <Box
                        bg=" #434343 "
                        borderTopRadius="md"
                        borderColor="gray.200"
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
                              Dogs's Name: {walkSchedules.dog}
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
                    </Center>
                  )
                })
              ) : (
                <>
                  <CalenderBody />
                </>
              )}
            </SimpleGrid>
          </Center>
        </div>
      </Container>
      <div>{isMobile && <NavigationBar />}</div>
    </>
  )
}

export default calender
