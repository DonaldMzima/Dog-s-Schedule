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
} from '@chakra-ui/react'
import { GrSearchAdvanced } from 'react-icons/gr'
import Nav from '@/components/UI/NavBar/Index'
import FloatingButtons from '@/components/UI/FloatingButtons/Index'
import NavigationBar from '@/components/UI/2ndNavBar/Index'
import Fuse from 'fuse.js'
import CalenderBody from '@/components/CalenderSection/Calender'
import { useQuery } from '@apollo/react-hooks'
import { GET_WALK_SCHEDULES, Schedule } from 'utilis/https'
import CustomSpinner from '../Spinner'
import WalkScheduleCard from '../Cards'

const MyCalender = () => {
  const [query, updateQuery] = useState('')
  const [isMobile] = useMediaQuery('(max-width: 768px)')
  const { data, loading } = useQuery<{ schedules: Schedule[] }>(
    GET_WALK_SCHEDULES,
    {
      fetchPolicy: 'network-only', // Change fetchPolicy to 'network-only'
      pollInterval: 500,
    },
  )

  if (loading) {
    return <CustomSpinner text={'Loading ...'} />
  }

  const fuse = new Fuse(data?.schedules || [], {
    keys: ['person', 'dog', 'date'], // Define which fields to search
    includeScore: true,
  })

  const results = fuse.search(query)

  // Filter the data based on search results
  const filteredSchedules = query
    ? results.map((result) => result.item)
    : data?.schedules || []

  function onSearch({ currentTarget }: any) {
    updateQuery(currentTarget.value)
  }

  return (
    <>
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

        <Center>
          <Box>
            <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
              {filteredSchedules.length > 0 ? (
                filteredSchedules.map((schedule: Schedule) => (
                  <WalkScheduleCard
                    key={schedule.id}
                    walkSchedules={schedule}
                  />
                ))
              ) : (
                <CalenderBody />
              )}
            </SimpleGrid>
          </Box>
        </Center>
      </Container>
      {isMobile && <NavigationBar />}
    </>
  )
}

export default MyCalender
