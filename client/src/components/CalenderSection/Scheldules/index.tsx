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
  Flex,
  useColorModeValue,
} from '@chakra-ui/react'

import Nav from '@/components/UI/NavBar/Index'
import FloatingButtons from '@/components/UI/FloatingButtons/Index'
import NavigationBar from '@/components/UI/2ndNavBar/Index'
import Fuse from 'fuse.js'
import CalenderBody from '@/components/CalenderSection/SearchhError'
import { useQuery } from '@apollo/react-hooks'
import { GET_WALK_SCHEDULES, Schedule } from 'utilis/https'
import CustomSpinner from '../Spinner'
import WalkScheduleCard from '../Cards'
import { FaSearch } from 'react-icons/fa'

const Schedules = () => {
  const [query, updateQuery] = useState('')
  const [isMobile] = useMediaQuery('(max-width: 768px)')
  const { data, loading } = useQuery<{ schedules: Schedule[] }>(
    GET_WALK_SCHEDULES,
    {
      fetchPolicy: 'network-only',
      pollInterval: 500,
    },
  )

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

  function onSearch({ currentTarget }: any) {
    updateQuery(currentTarget.value)
  }

  return (
    <>
      {!isMobile && <Nav />}
      <Container
        maxW={'100%'}
        minHeight="100vh"
        bgGradient={useColorModeValue(
          ['linear(to-b, white, yellow)'],
          ['linear(to-b, white, gray.900)'],
        )}
      >
        <FloatingButtons />

        <Flex
          pos="fixed"
          justifyContent="center"
          width="100%"
          height="115px"
          left={0}
          zIndex={1}
          right={0}
          mt={{ base: -70, sm: -70, md: -80, lg: -100 }}
          ml={{ base: 65, sm: 250, md: -80, lg: 520 }}
        >
          <InputGroup>
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
        </Flex>

        <Center>
          <Box>
            <SimpleGrid columns={{ base: 1, sm: 2, md: 1 }} spacing={8}>
              {filteredSchedules.length > 0 ? (
                filteredSchedules.map((schedule: Schedule) => (
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
      </Container>
      {isMobile && <NavigationBar />}
    </>
  )
}

export default Schedules
