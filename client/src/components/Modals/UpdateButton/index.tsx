/* eslint-disable react/no-unescaped-entities */

import * as Yup from 'yup'
import {
  Center,
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
  Box,
} from '@chakra-ui/react'
import { useForm } from 'react-hook-form'
import { AddIcon } from '@chakra-ui/icons'
import { EditSchedules } from 'utilis/https'

const schema = Yup.object({
  person: Yup.string().required(' name of a person '),
  dog: Yup.string().required('dogs name'),
})

type EditButtonType = {
  userData: any
  id: number
  attribute: {
    person: string
    dog: string
    date: string
  }
}

export const UpdateButton = (props: EditButtonType) => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      person: props.attribute.person,
      dog: props.attribute.dog,
      date: props.attribute.date,
    },
  })

  const onSubmit = (data: { person: string; dog: string; date: string }) => {
    onClose()
    EditSchedules(data, props.id)

    // initial state and update it with the new data
  }

  return (
    <>
      <Box mt={{ base: '-26px', sm: '-26px', md: '-26px' }} marginLeft="208px">
        <Button onClick={onOpen} bg="grey" color="white" size="xs">
          Edit
        </Button>

        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>
              <AddIcon />
              Edit Schedule
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
                  {errors.person && <p>This field is required</p>}
                </FormLabel>
                <FormLabel>
                  <p>Dog's Name:</p>
                  <Input
                    type="text"
                    placeholder="Dog's Name..."
                    {...register('dog')}
                  />
                  {errors.dog && <p>This field is required</p>}
                </FormLabel>
                <FormLabel>
                  <p>Date:</p>
                  <Input
                    placeholder="Select Date and Time"
                    size="md"
                    type="datetime-local"
                    {...register('date')}
                    required
                  />
                  {errors.date && <p>This field is required</p>}
                </FormLabel>
                <Center>
                  <Button
                    colorScheme="gray"
                    color="blackAlpha.900"
                    mr={2}
                    type="submit"
                  >
                    Save Changes
                  </Button>
                </Center>
              </form>
            </ModalBody>

            <ModalFooter></ModalFooter>
          </ModalContent>
        </Modal>
      </Box>
    </>
  )
}

export default UpdateButton
