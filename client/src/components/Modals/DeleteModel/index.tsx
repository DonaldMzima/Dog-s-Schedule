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
  useDisclosure,
} from '@chakra-ui/react'

import React from 'react'
import { DeleteSchedules } from 'utilis/https'
import { MyIdType } from 'utilis/types'

const DeleteButton = (props: MyIdType) => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Box mt={{ base: '-45', sm: '-45', md: '-45' }} marginLeft="248px">
        <Button onClick={onOpen} bg="grey" color="white" size="xs">
          delete
        </Button>
        <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
          <ModalOverlay
            bg="blackAlpha.300"
            backdropFilter="blur(10px) hue-rotate(90deg)"
          />
          <ModalContent bg="grey" color="white">
            <ModalHeader>delete</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>Are you Sure?</ModalBody>

            <ModalFooter>
              <Button
                type="submit"
                colorScheme="blue"
                mr={3}
                onClick={() => {
                  DeleteSchedules(props.id)
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

export default DeleteButton
