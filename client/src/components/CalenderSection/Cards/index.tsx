/* eslint-disable react-hooks/rules-of-hooks */
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
  useColorModeValue,
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
import UpdateButton, { UpdateModal } from '@/components/Modals/UpdateModal'

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

  const openUpdateModal = () => {
    setSchedulePayload(walkSchedules)
    setOpen(true)
  }

  const openUdateModal = (e: any) => {
    if (
      !e.target.classList.contains('delete-modal-button') &&
      !e.target.closest('.delete-modal-button')
    ) {
      openUpdateModal()
    }
  }

  const handleIsCompletedToggle = () => {
    setIsCompleted(!isCompleted)
  }

  return (
    <Flex>
      <Center>
        <Box
          borderRadius="20px"
          bg={useColorModeValue('white', ' gray.700')}
          color="black"
          borderColor="black.900"
          h={140}
          maxW={{ base: 680, sm: '200%', md: 850 }}
          w={{ base: 250, sm: '200%', md: 650 }}
          boxShadow="lg"
          p={4}
          position="relative"
          onClick={openUdateModal}
          style={{ cursor: 'pointer' }}
        >
          <Flex alignItems="center" ml={15}>
            <Checkbox
              isChecked={isCompleted}
              onChange={handleIsCompletedToggle}
              size="lg"
              colorScheme="black"
              isDisabled={true}
              border="black"
              bg={'black'}
            />
            <Text
              ml={2}
              fontSize={{ base: 'sm', md: 'xl' }}
              color={useColorModeValue('#000000', ' white')}
              fontWeight="bold"
              style={{ textDecoration: isCompleted ? 'line-through' : 'none' }}
            >
              Schedule
            </Text>
          </Flex>
          <Flex position="absolute" top={2} right={2} mr={15}>
            <DeleteModal />

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
              bg={useColorModeValue('#1f1f1a', ' gray.900')}
              color="white"
              size="xs"
              ml={2}
            >
              <Icon as={FaEdit} />
            </Button>
            <Button
              onClick={openDelModal}
              className="delete-modal-button" // Add a class for the DeleteModal's button
              bg={useColorModeValue('#1f1f1a', ' gray.900')}
              color="white"
              size="xs"
              ml={2}
            >
              <Icon as={FaTrash} />
            </Button>
          </Flex>
          <Stack
            color={useColorModeValue('#000000', ' white')}
            spacing={{ base: 2, md: 2 }}
            p={{ base: 3, md: 4 }}
          >
            <Flex
              alignItems="center"
              justifyContent={{ base: 'center', md: 'flex-start' }}
            >
              <FaUser style={{ marginRight: '5px' }} />
              <Text fontSize={{ base: 'xs', md: 'md' }}>
                Person Responsible: {person}
              </Text>
            </Flex>
            <Flex
              alignItems="center"
              justifyContent={{ base: 'center', md: 'flex-start' }}
              ml={{ base: 0, md: 400 }}
              mt={{ base: 0, md: -8 }}
            >
              <FaDog style={{ marginRight: '5px' }} />
              <Text fontSize={{ base: 'xs', md: 'md' }}>Dog's Name: {dog}</Text>
            </Flex>
            <Flex
              alignItems="center"
              justifyContent={{ base: 'center', md: 'flex-start' }}
            >
              <FaCalendar style={{ marginRight: '5px' }} />
              <Text fontSize={{ base: 'xs', md: 'md' }}>Date: {date}</Text>
            </Flex>
          </Stack>
        </Box>
      </Center>
    </Flex>
  )
}

export default WalkScheduleCard
