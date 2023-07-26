/* eslint-disable react/no-unescaped-entities */

import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
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

import { useRecoilState } from 'recoil'
import { schedulesState } from '@/store/atoms'
import { CreateWalkSchedules } from 'utilis/https'
import { FormType, UserDataTypes } from 'utilis/types'

// const schema = Yup.object().shape({
//   person: Yup.string().required('Person Walking the dog is required'),
//   dog: Yup.string().required("Dog's Name is required"),
//   date: Yup.string().required('Date is required'),
// })

export const AddModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [dogSchedules, setDogSchedules] = useRecoilState<any>(schedulesState)

  const form = useForm<FormType>()
  const { register, control, handleSubmit, formState } = form
  const { errors } = formState

  const onSubmit = (data: UserDataTypes) => {
    onClose()
    CreateWalkSchedules(data)

    // initial state and update it with the new data
    setDogSchedules((previousState: UserDataTypes[]) => [
      ...previousState,
      data,
    ])
    console.log('this one here', dogSchedules)
  }
  return (
    <>
      <Container rounded="md">
        <Circle size="65px" bg="grey" color="white" onClick={onOpen}>
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
                    type="text"
                    placeholder="Person Walking the dog..."
                    {...register('person', {
                      required: 'required ',
                    })}
                  />
                  <p>{errors.person?.message}</p>
                </FormLabel>
                <FormLabel>
                  <p>Dog's Name:</p>
                  <Input
                    type="text"
                    placeholder="Dog's Name..."
                    {...register('dog', {
                      required: 'Dog Name is required ',
                    })}
                  />
                  <p>{errors.dog?.message}</p>
                </FormLabel>
                <FormLabel>
                  <p>Date:</p>
                  <Input
                    placeholder="Select Date and Time"
                    size="md"
                    type="datetime-local"
                    {...register('date', {
                      required: 'date is required ',
                    })}
                  />
                  <p>{errors.date?.message}</p>
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
