/* eslint-disable react/no-children-prop */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/rules-of-hooks */

import React, { useEffect, useState } from 'react'

import {
  SimpleGrid,
  Button,
  Stack,
  Box,
  Flex,
  Container,
  Center,
  useMediaQuery,
  ListIcon,
  List,
  Avatar,
  Input,
  InputGroup,
  InputLeftElement,
} from '@chakra-ui/react'
import { GrSearchAdvanced } from 'react-icons/gr'
import { useRecoilState, useRecoilValue } from 'recoil'
import { StorageState } from '@/store/atoms'
import Nav from '@/components/UI/NavBar/Index'
import Search from '@/components/CalenderSection/SearchFilter/Index'
import FloatingButtons from '@/components/UI/FloatingButtons/Index'
import { schedulesState } from '@/store/atoms'
import NavigationBar from '@/components/UI/2ndNavBar/Index'
import Fuse from 'fuse.js'
import CustomSpinner from '@/components/CalenderSection/spinner'

import { CheckIcon } from '@chakra-ui/icons'
import CalenderBody from '@/components/CalenderSection/Calender'
import { useQuery } from 'react-query'

import DeleteButton from '@/components/Modals/DeleteModel'
import { WalkSchedules } from 'utilis/https'

const MyCalender = () => {
  const [storage, setStorage] = useRecoilState<any>(StorageState)
  const [query, updateQuery] = useState('')

  const dogSchedules = useRecoilValue(schedulesState)
  const [walkSchedule, setWalkSchedule] = useState(dogSchedules)
  const [isMobile] = useMediaQuery('(max-width: 768px)')

  const { data, isLoading } = useQuery(['WalkSchedules '], () =>
    WalkSchedules(),
  )

  // useEffect(() => {
  //   localStorage.setItem('dogWalking', JSON.stringify(dogSchedules))
  // }, [dogSchedules])

  // useEffect(() => {
  //   localStorage.setItem('dogWalking', JSON.stringify(dogSchedules))
  // }, [dogSchedules])

  // useEffect(() => {
  //   const starage = JSON.parse(localStorage.getItem('dogWalking') || '')
  //   console.log('JJJ', starage)
  //   setWalkSchedule(starage)
  // }, [walkSchedule])

  if (isLoading) {
    return <CustomSpinner text={'Loading ...'} />
  }

  const fuse = new Fuse(data?.data.data, {
    keys: ['person', 'dog', 'date'],
    includeScore: true,
  })

  const results = fuse.search(query)

  // console.log('Item ', results)

  const dogSchedulesResults = query
    ? results.map((data) => data.item)
    : data?.data.data
  // console.log('check dogschedules', dogSchedulesResults)

  function onSearch({ currentTarget }: any) {
    updateQuery(currentTarget.value)
  }

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

        <Box width="100%" height="115px" marginTop="-30px" marginLeft="90px">
          <InputGroup>
            <InputLeftElement children={<GrSearchAdvanced size={'1em'} />} />
            <Input
              type="text"
              placeholder="search"
              id="query"
              value={query}
              onChange={onSearch}
              htmlSize={7}
              width="auto"
              boxShadow="0 0  6px grey"
            />
          </InputGroup>
        </Box>

        <div>
          <Center>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5}>
              {!isLoading && data?.data.data?.length > 0 ? (
                dogSchedulesResults?.map(
                  (walkSchedules: {
                    id: number
                    attributes: {
                      person: string
                      dog: string
                      date: string
                      createdAt: Date
                      publishedAt: Date
                      updatedAt: Date
                    }
                  }) => {
                    return (
                      <Flex>
                        <Center key={walkSchedules.id}>
                          <Box
                            borderTopRadius="md"
                            borderColor="black.900"
                            h={127}
                            maxW={680}
                            w={290}
                            boxShadow="0 0 6px 6px grey"
                          >
                            <Center>
                              <Avatar
                                size="md"
                                src="https://images.squarespace-cdn.com/content/v1/521e1d22e4b007ddd23fa56e/1378084877559-GB036YBRTCMVO13OWJH4/dog-walk.jpg?format=1000w"
                              />
                            </Center>
                            <Box>
                              <DeleteButton />
                            </Box>

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
                                  Person Responsible:{' '}
                                  {walkSchedules.attributes.person}
                                </p>
                                <p>
                                  <ListIcon
                                    as={CheckIcon}
                                    color="green.400"
                                    textAlign={'left'}
                                  />
                                  Dogs Name: {walkSchedules.attributes.dog}
                                </p>
                                <p>
                                  <ListIcon
                                    as={CheckIcon}
                                    color="green.400"
                                    textAlign={'left'}
                                  />
                                  Date: {walkSchedules.attributes.date}
                                </p>
                              </List>
                            </Stack>
                          </Box>
                        </Center>
                      </Flex>
                    )
                  },
                )
              ) : (
                <>
                  <CalenderBody />
                </>
              )}
            </SimpleGrid>
          </Center>
        </div>
      </Container>
      {isMobile && <NavigationBar />}
    </>
  )
}

export default MyCalender
