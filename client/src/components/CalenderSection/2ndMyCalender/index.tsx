/* eslint-disable react/jsx-key */
/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from 'react'
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
import { CheckIcon, InfoIcon } from '@chakra-ui/icons'
import CalenderBody from '@/components/CalenderSection/Calender'
import { useQuery } from 'react-query'
import DeleteButton from '@/components/Modals/DeleteModel'
import { WalkSchedules } from 'utilis/https'
import EditButton from '@/components/Modals/EditButton'
import { UpdateButton } from '@/components/Modals/UpdateButton'
import axios from 'axios'
import CustomSpinner from '../Spinner'

interface Schedule {
  id: number
  person: string
  dog: string
  date: string
}

const SecondMyCalender = () => {
  const [storage, setStorage] = useRecoilState<any>(StorageState)
  const [query, updateQuery] = useState('')

  const dogSchedules = useRecoilValue(schedulesState)
  const [walkSchedule, setWalkSchedule] = useState(dogSchedules)
  const [isMobile] = useMediaQuery('(max-width: 768px)')

  const { data, isLoading } = useQuery(['WalkSchedules '], () =>
    WalkSchedules(),
  )

  if (isLoading) {
    return <CustomSpinner text={'Loading ...'} />
  }

  const fuse = new Fuse(data?.data.data, {
    keys: ['person', 'dog', 'date'],
    includeScore: true,
  })

  const results = fuse.search(query)

  const dogSchedulesResults = query
    ? results.map((data) => data.item)
    : data?.data.data

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

        <Box
          pos="fixed"
          width="100%"
          height="115px"
          mt={{ base: -70, sm: -70, md: -80, lg: -100 }}
          ml={{ base: 65, sm: 250, md: -80, lg: 622 }}
        >
          <InputGroup>
            <InputLeftElement />
            <GrSearchAdvanced size={'1em'} />
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
            <Box>
              <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
                {!isLoading && data?.data.data?.length > 0 ? (
                  dogSchedulesResults?.map(
                    (walkSchedules: {
                      userData: any
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
                      console.log('duserData', walkSchedules)
                      return (
                        <Flex>
                          <Center key={walkSchedules.id}>
                            <Box
                              borderTopRadius="md"
                              borderColor="black.900"
                              bg="#D5FF95"
                              h={140}
                              maxW={{ base: 680, sm: '200%', md: 300 }}
                              w={{ base: 250, sm: '200%', md: 650 }}
                              boxShadow="0 0 6px 6px grey"
                            >
                              <Center>
                                <Avatar
                                  size="md"
                                  src="https://images.squarespace-cdn.com/content/v1/521e1d22e4b007ddd23fa56e/1378084877559-GB036YBRTCMVO13OWJH4/dog-walk.jpg?format=1000w"
                                />
                              </Center>
                              <Box>
                                <DeleteButton id={walkSchedules.id} />
                                <UpdateButton
                                  userData={walkSchedules.userData}
                                  attribute={{
                                    person: '',
                                    dog: '',
                                    date: '',
                                  }}
                                />
                              </Box>

                              <Stack
                                // mt={{ base: 5, sm: 5, md: 2 }}
                                textAlign={'center'}
                                color="#1f1f1a"
                                spacing={{ base: 2, md: 2 }}
                                py={{ base: 5, md: 1 }}
                              >
                                <p>
                                  Person Responsible:{' '}
                                  {walkSchedules.attributes.person}
                                </p>
                                <p>Dogs Name: {walkSchedules.attributes.dog}</p>
                                <p>Date: {walkSchedules.attributes.date}</p>
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
            </Box>
          </Center>
        </div>
      </Container>
      {isMobile && <NavigationBar />}
    </>
  )
}

export default SecondMyCalender
