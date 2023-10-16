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
  walkSchedules: Schedule
}

const WalkScheduleCard: FC<WalkScheduleCardProps> = ({ walkSchedules }) => {
  const [schedulePayload, setSchedulePayload] = useRecoilState<null | Schedule>(
    scheduleData,
  )
  const [, setOpen] = useRecoilState(updateScheduleModal)
  const [isCompleted, setIsCompleted] = useState(walkSchedules.isCompleted)

  const [_, setIsOpen] = useRecoilState(deleteScheduleModal)

  if (!walkSchedules) {
    return null
  }

  const { date, dog, id, person } = walkSchedules

  const openDelModal = () => {
    setSchedulePayload(walkSchedules)
    setIsOpen(true)
  }

  const openUdateModal = () => {
    setOpen(true)
  }

  const toggleCompletion = () => {
    // You can use an API call here to update the completion status in the database.
    // For this example, we will just toggle the state locally.
    setIsCompleted(!isCompleted)
  }

  return (
    <Flex>
      <Center>
        <Box
          borderTopRadius="md"
          borderColor="black.900"
          h={140}
          maxW={{ base: 680, sm: '200%', md: 850 }}
          w={{ base: 250, sm: '200%', md: 650 }}
          boxShadow="0 0 0px 2px grey"
        >
          <Flex alignItems="center">
            <Button
              onClick={() => setIsCompleted(!isCompleted)}
              bg={isCompleted ? 'green' : 'grey'}
              color="white"
              size="xs"
            >
              {isCompleted ? 'Mark Incomplete' : 'Mark Completed'}
            </Button>
            <Text ml={2} fontSize="xl" fontWeight="bold">
              Schedule
            </Text>
          </Flex>
          <Box textAlign={'right'}>
            <Flex>
              <DeleteModal schedulePayload={schedulePayload} ml={15} />
              <Button onClick={openDelModal} bg="grey" color="white" size="xs">
                Delete
              </Button>
              <UpdateButton
                attribute={{
                  person: person,
                  dog: dog,
                  date: date,
                  isCompleted: isCompleted,
                }}
                id={id}
              />
              <Button
                onClick={openUdateModal}
                bg="grey"
                color="white"
                size="xs"
              >
                Edit
              </Button>
            </Flex>
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
            <Flex alignItems="center" ml={400} mt={{ base: 0, md: -8 }}>
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
