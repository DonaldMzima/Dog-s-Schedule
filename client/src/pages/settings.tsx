import React, { useState } from 'react'
import WalkScheduleCard from '@/components/CalenderSection/Cards'
import { Schedule } from 'utilis/https'
import { SimpleGrid } from '@chakra-ui/react'
import CalenderBody from '@/components/CalenderSection/Schedule404'

const FilteredWalkScheduleCard = ({
  walkSchedulesList,
}: {
  walkSchedulesList: Schedule[] | undefined
}) => {
  const [query, _] = useState('')
  // Check if walkSchedulesList is defined before filtering
  const filteredWalkSchedules = walkSchedulesList
    ? walkSchedulesList.filter((schedule) => !schedule.isCompleted)
    : []

  return (
    <div>
      <SimpleGrid columns={{ base: 1, sm: 2, md: 1 }} spacing={8}>
        {filteredWalkSchedules.length > 0 ? (
          filteredWalkSchedules.map((schedule: Schedule) => (
            <WalkScheduleCard key={schedule.id} walkSchedules={schedule} />
          ))
        ) : (
          <CalenderBody query={query} />
        )}
      </SimpleGrid>
    </div>
  )
}

export default FilteredWalkScheduleCard
