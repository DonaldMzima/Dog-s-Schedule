import {
  
  Button,
  FormLabel,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,

  Center,
  Input,
  Text,
} from '@chakra-ui/react'
import React from 'react'

const AddModal = (props: any) => {
  return (
    <div>
      <Modal
        isCentered
        onClose={props.onClose}
        isOpen={props.isOpen}
        motionPreset="slideInBottom"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Submitted</ModalHeader>
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
            <Text>{props.data}</Text>
            <Text>{props.data}</Text>
            <Text>{props.data}</Text>
            <Text>{props.data}</Text>
          </ModalBody>

          <ModalFooter>
            <Center>
            <Button
              colorScheme="blue"
              mr={2}
              onClick={props.onClose}
              type="submit"
            >
              Add
            </Button>
            </Center>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  )
}

export default AddModal
