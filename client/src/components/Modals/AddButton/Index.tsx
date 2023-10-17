/* eslint-disable react/no-unescaped-entities */

import * as Yup from 'yup'
import {
  Center,
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
  Circle,
} from '@chakra-ui/react'
import { useForm } from 'react-hook-form'
import { AddIcon } from '@chakra-ui/icons'
import { yupResolver } from '@hookform/resolvers/yup'
import { useRecoilState } from 'recoil'
import { schedulesState } from '@/store/atoms'
import { CreateWalkSchedules } from 'utilis/https'
import { FormType, UserDataTypes } from 'utilis/types'

export const AddModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [dogSchedules, setDogSchedules] = useRecoilState<any>(schedulesState)

  const schema = Yup.object().shape({
    person: Yup.string().required('Person Walking the dog is required'),
    dog: Yup.string().required("Dog's Name is required"),
    date: Yup.date().required('Date is required'),
  })

  const {
    handleSubmit,
    register,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })

  const onSubmit = (data: UserDataTypes) => {
    onClose()
    CreateWalkSchedules(data)

    setDogSchedules((previousState: UserDataTypes[]) => [
      ...previousState,
      data,
    ])
  }

  return (
    <>
      <Container rounded="md">
        <Circle
          size="65px"
          bg="grey"
          color="white"
          onClick={onOpen}
          left={0}
          right={0}
        >
          <AddIcon />
        </Circle>

        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent color="grey">
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
                    {...register('person')}
                    type="text"
                    placeholder="Person Walking the dog..."
                  />
                  {errors.person && (
                    <span style={{ color: 'red' }}>
                      {errors.person?.message}
                    </span>
                  )}
                </FormLabel>
                <FormLabel>
                  <p>Dog's Name:</p>
                  <Input
                    {...register('dog')}
                    type="text"
                    placeholder="Dog's Name..."
                  />
                  {errors.dog && (
                    <span style={{ color: 'red' }}>{errors.dog?.message}</span>
                  )}
                </FormLabel>
                <FormLabel>
                  <p>Date:</p>
                  <Input
                    {...register('date')}
                    placeholder="Select Date and Time"
                    size="md"
                    type="datetime-local"
                  />
                  {errors.date && (
                    <span style={{ color: 'red' }}>{errors.date.message}</span>
                  )}
                </FormLabel>
                <Center>
                  <Button
                    colorScheme="gray"
                    color="blackAlpha.900"
                    mr={2}
                    type="submit"
                  >
                    Add
                  </Button>
                </Center>
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
