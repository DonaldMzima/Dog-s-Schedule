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
import DelSvg from '@/components/Svg/DeleteSvg'

const DeleteModal = ({ schedulePayload }: any) => {
  const [isOpen, setIsOpen] = useRecoilState(deleteScheduleModal)
  const scheduleDataUse = useRecoilValue(scheduleData)
  const onClose = () => {
    setIsOpen(false)
  }

  return (
    <>
      <Box
        mt={{ base: '-45', sm: '-45' }}
        marginLeft={{ base: 0, sm: 0, md: '48px' }}
      >
        <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
          <ModalOverlay bg="blackAlpha.300" />
          <ModalContent
            color="black"
            bg="white"
            borderRadius="10px"
            boxShadow="0 4px 6px rgba(0, 0, 0, 0.1)"
            maxW={{ base: '80%', sm: '50%', md: '40%' }} // Adjusted width for mobile view
          >
            <ModalHeader
              bg="grey"
              color="white"
              p={4}
              borderRadius="10px 10px 0 0"
              fontWeight="bold"
            >
              Delete {scheduleDataUse?.person}
              {scheduleDataUse?.date}
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={4}>
              Are you Sure?
              <DelSvg />
            </ModalBody>

            <ModalFooter>
              <Button
                bg="grey"
                color="white"
                mr={3}
                onClick={() => {
                  if (scheduleDataUse) {
                    DeleteSchedules(scheduleDataUse.id as any)
                    onClose()
                  }
                }}
              >
                Yes
              </Button>

              <Button
                type="submit"
                colorScheme="red"
                color="white"
                onClick={onClose}
              >
                NO
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Box>
    </>
  )
}

export default DeleteModal
