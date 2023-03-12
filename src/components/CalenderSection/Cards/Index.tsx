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
  ) /* eslint-disable react/no-children-prop */
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

  import { CheckIcon } from '@chakra-ui/icons'
  import CalenderBody from '@/components/CalenderSection/Calender'
  import { useQuery } from 'react-query'

  import DeleteButton from '@/components/Modals/DeleteModel'
  import { WalkSchedules } from 'utilis/https'

  const Calender = () => {
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
      return <p>Loading...</p>
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

          <Box pos="fixed" width="100%" height="115px">
            <Stack size={5}>
              <InputGroup>
                <InputLeftElement
                  children={<GrSearchAdvanced size={'1em'} />}
                />
                <Input
                  type="text"
                  id="query"
                  value={query}
                  onChange={onSearch}
                  htmlSize={7}
                  width="auto"
                />
              </InputGroup>
            </Stack>
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
                        <Center key={walkSchedules.id}>
                          <Box>
                            <DeleteButton />
                          </Box>
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

  export default Calender
}

export default Calender
