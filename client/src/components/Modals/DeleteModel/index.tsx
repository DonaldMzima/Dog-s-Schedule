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
} from '@chakra-ui/react'
import React from 'react'
import { DeleteSchedules } from 'utilis/https'
import { deleteScheduleModal, scheduleData } from '@/store/atoms'
import { useRecoilState, useRecoilValue } from 'recoil'
const DeleteModal = ({ schedulePayload }: any) => {
  const [isOpen, setIsOpen] = useRecoilState(deleteScheduleModal)
  const scheduleDataUse = useRecoilValue(scheduleData)
  const onClose = () => {
    setIsOpen(false)
  }
  console.log('schedulePayload ', schedulePayload)
  return (
    <>
      <Box mt={{ base: '-45', sm: '-45', md: '-45' }} marginLeft="248px">
        <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
          <ModalOverlay
            bg="blackAlpha.300"
            backdropFilter="blur(10px) hue-rotate(90deg)"
          />
          <ModalContent bg="grey" color="white">
            <ModalHeader>
              Delete {scheduleDataUse?.person}
              {scheduleDataUse?.date}
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>Are you Sure?</ModalBody>

            <ModalFooter>
              <Button
                type="submit"
                colorScheme="blue"
                mr={3}
                onClick={() => {
                  DeleteSchedules(scheduleDataUse.id as any)
                  onClose()
                }}
              >
                Yes
              </Button>

              <Button onClick={onClose}>NO</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Box>
    </>
  )
}

export default DeleteModal
