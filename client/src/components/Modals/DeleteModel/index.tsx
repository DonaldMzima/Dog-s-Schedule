import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Box,
  Text,
  Center, // Import Text component for responsive typography
} from '@chakra-ui/react'
import React from 'react'
import { DeleteSchedules } from 'utilis/https'
import { deleteScheduleModal, scheduleData } from '@/store/atoms'
import { useRecoilState, useRecoilValue } from 'recoil'
import DelSvg from '@/components/Svg/DeleteSvg'

const DeleteModal = ({ schedulePayload }: any) => {
  const [isOpen, setIsOpen] = useRecoilState(deleteScheduleModal)
  const scheduleDataUse = useRecoilValue(scheduleData)
  const onClose = () => {
    setIsOpen(false)
  }

  return (
    <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
      <ModalOverlay bg="blackAlpha.300" />
      <ModalContent
        color="black"
        bg="white"
        borderRadius="10px"
        boxShadow="0 4px 6px rgba(0, 0, 0, 0.1)"
        maxW={{ base: '50%', sm: '30%', md: '30%' }}
      >
        <ModalHeader
          bg="#1f1f1a"
          color="white"
          p={4}
          borderRadius="10px 10px 0 0"
          fontWeight="bold"
        >
          <Text fontSize={{ base: 'sm', md: 'md' }}>
            Delete {scheduleDataUse?.person}
            {scheduleDataUse?.date}
          </Text>
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={2} pt={2}>
          <Center>
            <Text fontSize={{ base: 'md', md: 'lg' }}>Are you Sure?</Text>
            <DelSvg />
          </Center>
        </ModalBody>

        <ModalFooter pb={4} pt={2}>
          <Button
            bg="#1f1f1a"
            color="white"
            mr={3}
            onClick={() => {
              if (scheduleDataUse) {
                DeleteSchedules(scheduleDataUse.id as any)
                onClose()
              }
            }}
          >
            <Text fontSize={{ base: 'sm', md: 'md' }}>Yes</Text>
          </Button>
          <Button
            type="submit"
            colorScheme="red"
            color="white"
            onClick={onClose}
          >
            <Text fontSize={{ base: 'sm', md: 'md' }}>NO</Text>
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default DeleteModal
