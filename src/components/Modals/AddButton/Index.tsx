/* eslint-disable react/no-unescaped-entities */
import { useState } from 'react'

import {
  Box,
  Container,
  Button,
  FormLabel,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Flex,
  useDisclosure,
  Input,
} from '@chakra-ui/react'
import { useForm } from 'react-hook-form'
import { AddIcon } from '@chakra-ui/icons'

export const AddButton = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

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
            <Box onClick={onOpen}>
              <AddIcon />
            </Box>
          </Flex>

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
                <Button
                  colorScheme="blue"
                  mr={2}
                  onClick={onClose}
                  type="submit"
                >
                  Add
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </Container>
      </form>
    </>
  )
}

export default AddButton
