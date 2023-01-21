/* eslint-disable react/no-unescaped-entities */
import { useState } from 'react'

import {
  Stack,
  Button,
  FormLabel,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  IconButton,
  useDisclosure,
  Input,
} from '@chakra-ui/react'
import { AddIcon } from '@chakra-ui/icons'

export const AddButton = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <div>
        <div>
          <Button onClick={onOpen}>
            <IconButton aria-label="Add to friends" icon={<AddIcon />} />
          </Button>

          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>
                <AddIcon />
                Add Schedule
              </ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <FormLabel>
                  <p>Person Walking the dog:</p>
                  <Input type="text" placeholder="Person Walking the dog..." />
                </FormLabel>
                <FormLabel>
                  <p>Dog's Name:</p>
                  <Input type="text" placeholder="Dog's Name..." />
                </FormLabel>
                <FormLabel>
                  <p>Date:</p>
                  <Input
                    placeholder="Select Date and Time"
                    size="md"
                    type="datetime-local"
                  />
                </FormLabel>
              </ModalBody>

              <ModalFooter>
                <Button colorScheme="blue" mr={3} onClick={onClose}>
                  Add
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </div>
      </div>
    </>
  )
}

export default AddButton
