/* eslint-disable react/no-unescaped-entities */
import React, { FC } from 'react'
import { Flex, Center, Box, Avatar, Stack } from '@chakra-ui/react'
import DeleteButton from '@/components/Modals/DeleteModel'
import { UpdateButton } from '@/components/Modals/UpdateButton'
import { Schedule } from 'utilis/https'

type WalkScheduleCardProps = {
  /**
   *  walkSchedules is collection of a scheule
   */
  walkSchedules: Schedule
}
const WalkScheduleCard: FC<WalkScheduleCardProps> = ({ walkSchedules }) => {
  if (!walkSchedules) {
    // Handle the case where walkSchedules or attributes are undefined
    return null // or you can render an error message
  }

  const { date, dog, id, person } = walkSchedules

  return (
    <Flex>
      <Center>
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
            <DeleteButton id={id} />
            <UpdateButton
              // userData={userData}
              attribute={{
                person: person,
                dog: dog,
                date: date,
                // createdAt: createdAt,
                // publishedAt: publishedAt,
                // updatedAt: updatedAt,
              }}
              id={id}
            />
          </Box>

          <Stack
            textAlign={'center'}
            color="#1f1f1a"
            spacing={{ base: 2, md: 2 }}
            py={{ base: 5, md: 1 }}
          >
            <p>Person Responsible: {person}</p>
            <p>Dog's Name: {dog}</p>
            <p>Date: {date}</p>
          </Stack>
        </Box>
      </Center>
    </Flex>
  )
}

export default WalkScheduleCard
