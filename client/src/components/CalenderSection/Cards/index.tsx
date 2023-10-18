/* eslint-disable react/no-unescaped-entities */
import React, { FC, useState } from 'react'
import {
  Flex,
  Center,
  Box,
  Stack,
  Button,
  Text,
  Checkbox,
  Icon,
} from '@chakra-ui/react'
import { FaUser, FaDog, FaCalendar, FaEdit, FaTrash } from 'react-icons/fa'
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

  return (
    <Flex>
      <Center>
        <Box
          borderRadius="20px"
          bg="white"
          color="black"
          borderColor="black.900"
          h={140}
          maxW={{ base: 680, sm: '200%', md: 850 }}
          w={{ base: 250, sm: '200%', md: 650 }}
          // boxShadow="0 0 2px 2px grey.100"
          boxShadow="lg"
          p={4}
          position="relative"
        >
          <Flex alignItems="center" ml={15}>
            <Checkbox
              // isChecked={isCompleted}
              onChange={() => setIsCompleted(!isCompleted)}
              size="lg"
              colorScheme="green"
              isDisabled={true} // Make the checkbox not clickable
            />
            <Text
              ml={2}
              fontSize="xl"
              fontWeight="bold"
              style={{ textDecoration: isCompleted ? 'line-through' : 'none' }}
            >
              Schedule
            </Text>
          </Flex>
          <Flex position="absolute" top={2} right={2} mr={15}>
            <DeleteModal schedulePayload={schedulePayload} />

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
              ml={2}
            >
              <Icon as={FaEdit} />
            </Button>
            <Button
              onClick={openDelModal}
              bg="grey"
              color="white"
              size="xs"
              ml={2}
            >
              <Icon as={FaTrash} />
            </Button>
          </Flex>

          <Stack
            color="#000000"
            spacing={{ base: 2, md: 2 }}
            p={{ base: 3, md: 4 }}
          >
            <Flex alignItems="center">
              <FaUser style={{ marginRight: '5px' }} />{' '}
              <Text>Person Responsible: {person}</Text>
            </Flex>
            <Flex alignItems="center" ml={400} mt={{ base: 0, md: -8 }}>
              <FaDog style={{ marginRight: '5px' }} />
              <Text>Dog's Name: {dog}</Text>
            </Flex>
            <Flex alignItems="center">
              <FaCalendar style={{ marginRight: '5px' }} />
              <Text>Date: {date}</Text>
            </Flex>
          </Stack>
        </Box>
      </Center>
    </Flex>
  )
}

export default WalkScheduleCard
