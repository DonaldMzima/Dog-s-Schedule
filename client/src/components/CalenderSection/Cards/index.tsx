/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import { Flex, Center, Box, Avatar, Stack } from '@chakra-ui/react'
import DeleteButton from '@/components/Modals/DeleteModel'
import { UpdateButton } from '@/components/Modals/UpdateButton'
import { SchedulesTypes } from 'utilis/types'

const WalkScheduleCard = ({ walkSchedules }: SchedulesTypes | any) => {
  const { userData, id, attributes } = walkSchedules

  return (
    <Flex>
      <Center key={id}>
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
              userData={userData}
              attribute={{
                person: attributes.person,
                dog: attributes.dog,
                date: attributes.date,
                createdAt: attributes.createdAt,
                publishedAt: attributes.publishedAt,
                updatedAt: attributes.updatedAt,
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
            <p>Person Responsible: {attributes.person}</p>
            <p>Dog's Name: {attributes.dog}</p>
            <p>Date: {attributes.date}</p>
          </Stack>
        </Box>
      </Center>
    </Flex>
  )
}

export default WalkScheduleCard
