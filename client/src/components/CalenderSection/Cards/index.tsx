/* eslint-disable react/no-unescaped-entities */
import React, { FC, useState } from 'react'
import {
  Flex,
  Center,
  Box,
  Avatar,
  Stack,
  Button,
  Text,
} from '@chakra-ui/react'
import { FaUser, FaDog, FaCalendar } from 'react-icons/fa'
import DeleteModal from '@/components/Modals/DeleteModel'
import { Schedule } from 'utilis/https'
import {
  deleteScheduleModal,
  scheduleData,
  updateScheduleModal,
} from '@/store/atoms'
import { useRecoilState } from 'recoil'
import UpdateButton, { UpdateModal } from '@/components/Modals/UpdateButton'

type WalkScheduleCardProps = {
  /**
   *  walkSchedules is a collection of a schedule
   */
  walkSchedules: Schedule
}

const WalkScheduleCard: FC<WalkScheduleCardProps> = ({ walkSchedules }) => {
  const [schedulePayload, setSchedulePayload] = useRecoilState<null | Schedule>(
    scheduleData,
  )
  const [, setOpen] = useRecoilState(updateScheduleModal)

  const [_, setIsOpen] = useRecoilState(deleteScheduleModal)

  if (!walkSchedules) {
    // Handle the case where walkSchedules or attributes are undefined
    return null // or you can render an error message
  }

  const { date, dog, id, person } = walkSchedules

  const openDelModal = () => {
    setSchedulePayload(walkSchedules)
    setIsOpen(true)
  }

  const openUdateModal = () => {
    setOpen(true)
  }

  return (
    <Flex>
      <Center>
        <Box
          borderTopRadius="md"
          borderColor="black.900"
          bg="#D5FF95"
          h={140}
          maxW={{ base: 680, sm: '200%', md: 850 }}
          w={{ base: 250, sm: '200%', md: 650 }}
          boxShadow="0 0 6px 6px grey"
        >
          <Flex alignItems="center">
            <Avatar
              size="md"
              src="https://images.squarespace-cdn.com/content/v1/521e1d22e4b007ddd23fa56e/1378084877559-GB036YBRTCMVO13OWJH4/dog-walk.jpg?format=1000w"
              ml={2} // Add margin to move the avatar to the left
            />
            <Text ml={2} fontSize="xl" fontWeight="bold">
              Schedule
            </Text>
          </Flex>
          <Box textAlign={'right'}>
            <DeleteModal schedulePayload={schedulePayload} />
            <Button
              onClick={openDelModal}
              bg="grey"
              color="white"
              size="xs"
              ml={15}
            >
              Delete
            </Button>

            <UpdateButton
              attribute={{
                person: person,
                dog: dog,
                date: date,
              }}
              id={id}
            />
            <Button
              onClick={openUdateModal}
              bg="grey"
              color="white"
              size="xs"
              // Add margin to move the "Edit" button away from "Delete"
            >
              Edit
            </Button>
          </Box>

          <Stack
            // textAlign={'center'}
            color="#1f1f1a"
            spacing={{ base: 2, md: 2 }}
            py={{ base: 5, md: 4 }}
          >
            <Flex alignItems="center">
              <FaUser style={{ marginRight: '5px' }} />{' '}
              {/* Add the User icon */}
              <Text>Person Responsible: {person}</Text>
            </Flex>
            <Flex alignItems="center">
              <FaDog style={{ marginRight: '5px' }} /> {/* Add the Dog icon */}
              <Text>Dog's Name: {dog}</Text>
            </Flex>
            <Flex alignItems="center">
              <FaCalendar style={{ marginRight: '5px' }} />{' '}
              {/* Add the Calendar icon */}
              <Text>Date: {date}</Text>
            </Flex>
          </Stack>
        </Box>
      </Center>
    </Flex>
  )
}

export default WalkScheduleCard
