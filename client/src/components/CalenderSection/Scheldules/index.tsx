/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from 'react'
import {
  SimpleGrid,
  Box,
  Center,
  Container,
  useMediaQuery,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
  useColorModeValue,
  Button,
} from '@chakra-ui/react'

import Nav from '@/components/UI/NavBar/Index'
import FloatingButtons from '@/components/UI/Buttons/Index'
import NavigationBar from '@/components/UI/2ndNavBar/Index'
import Fuse from 'fuse.js'
import CalenderBody from '@/components/CalenderSection/SearchhError'
import { useQuery } from '@apollo/react-hooks'
import { GET_WALK_SCHEDULES, Schedule } from 'utilis/https'
import CustomSpinner from '../Spinner'
import WalkScheduleCard from '../Cards'
import { FaSearch } from 'react-icons/fa'
import Sidebar from './Sidebar'
import { showCompletedState } from '@/store/atoms'
import { useRecoilState } from 'recoil'
import { useUser } from '@clerk/nextjs'

const Schedules = () => {
  const [query, updateQuery] = useState('')
  const [showCompleted, setShowCompleted] = useRecoilState(showCompletedState)
  const { user } = useUser()
  const userEmail = user?.primaryEmailAddress?.emailAddress

  const [isMobile] = useMediaQuery('(max-width: 768px)')
  const { data, loading } = useQuery<{ schedules: Schedule[] }>(
    GET_WALK_SCHEDULES,
    {
      fetchPolicy: 'network-only',
      pollInterval: 500,
      variables: { email: userEmail },
    },
  )

  // const handleSubmit = () => {
  //   if (data && data.schedules) {
  //     console.log('Schedules:', data.schedules)
  //   } else {
  //     // Handle the case when data is not available
  //     console.error('No data available')
  //   }
  // }

  if (loading) {
    return <CustomSpinner text={'Loading ...'} />
  }

  const fuse = new Fuse(data?.schedules || [], {
    keys: ['person', 'dog', 'date'],
    includeScore: true,
  })

  const results = fuse.search(query)

  // Filter the data based on search results
  const filteredSchedules = query
    ? results.map((result) => result.item)
    : data?.schedules || []

  //filterterdTask,use boolean,data?.schedules || []

  const filteredTask = showCompleted
    ? filteredSchedules.filter((schedule) => schedule.isCompleted)
    : filteredSchedules

  function onSearch({ currentTarget }: any) {
    updateQuery(currentTarget.value)
  }

  return (
    <>
      {!isMobile && <Nav />}
      <Container
        maxW={'100%'}
        minHeight="100vh"
        bottom={0}
        bgGradient={useColorModeValue(
          ['linear(to-b, white, yellow)'],
          ['linear(to-b, white, gray.900)'],
        )}
      >
        <FloatingButtons />

        <Box
          pos="fixed"
          zIndex={1}
          justifyContent="center"
          mt={{ base: -70, sm: -70, md: -90, lg: -155 }}
          ml={{ base: 65, sm: 250, md: -80, lg: 520 }}
        >
          <InputGroup left={0} right={0}>
            <Input
              type="text"
              placeholder="search"
              id="query"
              boxShadow="md"
              value={query}
              onChange={onSearch}
              width={{ base: 170, sm: 170, md: 300 }}
              border={useColorModeValue(
                '2px solid #1f1f1a',
                '1px solid #27271c',
              )}
              _placeholder={{ color: 'black' }}
            />
            <InputLeftElement pointerEvents="none" color={'black'}>
              <FaSearch />
            </InputLeftElement>
          </InputGroup>
        </Box>
        <Sidebar />
        <Center>
          <Box>
            <Text fontWeight="bold">
              {showCompleted ? 'Show All' : 'CompletedTasks '}
            </Text>

            <SimpleGrid columns={{ base: 1, sm: 2, md: 1 }} spacing={8}>
              {filteredTask.length > 0 ? (
                filteredTask.map((schedule: Schedule) => (
                  <WalkScheduleCard
                    key={schedule.id}
                    walkSchedules={schedule}
                  />
                ))
              ) : (
                <CalenderBody query={query} />
              )}
            </SimpleGrid>
          </Box>
        </Center>
        {isMobile && <NavigationBar />}
      </Container>
    </>
  )
}

export default Schedules
