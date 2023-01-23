/* eslint-disable react/no-unescaped-entities */
import { useState } from 'react'
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
  Flex,
  useDisclosure,
  Input,
} from '@chakra-ui/react'
import { useForm } from 'react-hook-form'
import { AddIcon } from '@chakra-ui/icons'
import Nav from '@/components/UI/NavBar/Index'

const schema = Yup.object({
  person: Yup.string().required(' name of a person '),
  dog: Yup.string().required('dogs name'),
  date: Yup.number().positive().integer().required('enter your age'),
})

export const AddButton = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [dogSchedules, setDogSchedules] = useState<any>([])

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm(schema)

  const onSubmit = (data: any) => {
    onClose()
    // dogSchedules.push(data)

    //was updating data using useState
    //previousState it is a data coming from our initial state,using spread operator was
    //taking all the data from the initial state and update it with the new data
    setDogSchedules((previousState: any) => [...previousState, data])
  }
  console.log('checking dogSchedule data', dogSchedules)
  return (
    <>
      <Container rounded="md">
        <Box color="white" onClick={onOpen}>
          <AddIcon />
        </Box>

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
                  />
                </FormLabel>
                <FormLabel>
                  <p>Dog's Name:</p>
                  <Input
                    type="text"
                    placeholder="Dog's Name..."
                    {...register('dog')}
                  />
                </FormLabel>
                <FormLabel>
                  <p>Date:</p>
                  <Input
                    placeholder="Select Date and Time"
                    size="md"
                    type="datetime-local"
                    {...register('date')}
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

export default AddButton
