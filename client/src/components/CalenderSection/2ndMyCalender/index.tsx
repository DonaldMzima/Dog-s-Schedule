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
import { useRecoilValue } from 'recoil'
import Nav from '@/components/UI/NavBar/Index'
import FloatingButtons from '@/components/UI/FloatingButtons/Index'
import { schedulesState } from '@/store/atoms'
import NavigationBar from '@/components/UI/2ndNavBar/Index'
import Fuse from 'fuse.js'
import CalenderBody from '@/components/CalenderSection/Calender'
import { useQuery } from 'react-query'
import { Schedule, WalkSchedules } from 'utilis/https'
import CustomSpinner from '../Spinner'
import WalkScheduleCard from '../Cards'
import { MyIdType } from 'utilis/types'

const MyCalender = () => {
  const [query, updateQuery] = useState('')

  const dogSchedules = useRecoilValue(schedulesState)
  const [walkSchedule, setWalkSchedule] = useState(dogSchedules)
  const [isMobile] = useMediaQuery('(max-width: 768px)')

  const { data, isLoading } = useQuery<Schedule[] | undefined>(
    ['WalkSchedules'],
    () => WalkSchedules(),
    {
      retry: 3,
      refetchInterval: 1000, // Refetch data every 1 second
    },
  )

  if (isLoading) {
    return <CustomSpinner text={'Loading ...'} />
  }

  const fuse = new Fuse(data as Schedule[], {
    keys: ['person', 'dog', 'date'],
    includeScore: true,
  })
  console.log('data', data)

  const results = fuse.search(query)

  const dogSchedulesResults = query ? results.map((data) => data.item) : data

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
              {!isLoading && data && data?.length > 0 ? (
                dogSchedulesResults?.map((walkSchedules) => (
                  <WalkScheduleCard
                    key={walkSchedules.id}
                    walkSchedules={walkSchedules}
                  />
                ))
              ) : (
                <>
                  <CalenderBody />
                </>
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
