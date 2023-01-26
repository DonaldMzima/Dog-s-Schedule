/* eslint-disable react/no-unescaped-entities */
import { useState } from 'react'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'
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
  useDisclosure,
  Input,
  Square,
} from '@chakra-ui/react'
import { useForm } from 'react-hook-form'
import { AddIcon } from '@chakra-ui/icons'

import { useRecoilState } from 'recoil'
import { schedulesState } from '@/store/atoms'

const schema = Yup.object({
  person: Yup.string().required(' name of a person '),
  dog: Yup.string().required('dogs name'),
})

export const AddModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [dogSchedules, setDogSchedules] = useRecoilState<any>(schedulesState)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data: any) => {
    onClose()

    // initial state and update it with the new data
    setDogSchedules((previousState: any) => [...previousState, data])
  }
  return (
    <>
      <Container rounded="md">
        <Square size="65px" bg="#1f1f1a" color="white" onClick={onOpen}>
          <AddIcon />
        </Square>

        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>
              <AddIcon />
              Add Schedule
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <form onSubmit={handleSubmit(onSubmit)}>
                <FormLabel>
                  <p>Person Walking the dog:</p>
                  <Input
                    type="text"
                    placeholder="Person Walking the dog..."
                    {...register('person')}
                    required
                  />
                </FormLabel>
                <FormLabel>
                  <p>Dog's Name:</p>
                  <Input
                    type="text"
                    placeholder="Dog's Name..."
                    {...register('dog')}
                    required
                  />
                </FormLabel>
                <FormLabel>
                  <p>Date:</p>
                  <Input
                    placeholder="Select Date and Time"
                    size="md"
                    type="datetime-local"
                    requred
                  />
                </FormLabel>
                <Button colorScheme="blue" mr={2} type="submit">
                  Add
                </Button>
              </form>
            </ModalBody>

            <ModalFooter></ModalFooter>
          </ModalContent>
        </Modal>
      </Container>
    </>
  )
}

export default AddModal
