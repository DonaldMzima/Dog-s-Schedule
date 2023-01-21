/* eslint-disable react/no-unescaped-entities */
import { useState } from 'react'

import {
<<<<<<< Updated upstream
  Stack,
=======
  Box,
  Container,
>>>>>>> Stashed changes
  Button,
  FormLabel,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
<<<<<<< Updated upstream
  IconButton,
  useDisclosure,
  Input,
} from '@chakra-ui/react'
=======
  Flex,
  useDisclosure,
  Input,
} from '@chakra-ui/react'
import { useForm } from 'react-hook-form'
>>>>>>> Stashed changes
import { AddIcon } from '@chakra-ui/icons'

export const AddButton = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

<<<<<<< Updated upstream
  return (
    <>
      <div>
        <div>
          <Button onClick={onOpen}>
            <IconButton aria-label="Add to friends" icon={<AddIcon />} />
          </Button>
=======
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()
  const onSubmit = (data: any) => console.log(data)

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Container rounded="md">
          <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
            <Button onClick={onOpen}>
              <AddIcon />
            </Button>
          </Flex>
>>>>>>> Stashed changes

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
<<<<<<< Updated upstream
                  <Input type="text" placeholder="Person Walking the dog..." />
                </FormLabel>
                <FormLabel>
                  <p>Dog's Name:</p>
                  <Input type="text" placeholder="Dog's Name..." />
=======
                  <Input
                    type="text"
                    placeholder="Person Walking the dog..."
                    {...register('Person Walking the dog')}
                  />
                </FormLabel>
                <FormLabel>
                  <p>Dog's Name:</p>
                  <Input
                    type="text"
                    placeholder="Dog's Name..."
                    {...register('Dogs Name')}
                  />
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
                <Button colorScheme="blue" mr={3} onClick={onClose}>
=======
                <Button
                  colorScheme="blue"
                  mr={2}
                  onClick={onClose}
                  type="submit"
                >
>>>>>>> Stashed changes
                  Add
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
<<<<<<< Updated upstream
        </div>
      </div>
=======
        </Container>
      </form>
>>>>>>> Stashed changes
    </>
  )
}

export default AddButton
