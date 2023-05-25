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
  Box,
} from '@chakra-ui/react'
import { useForm } from 'react-hook-form'
import { AddIcon } from '@chakra-ui/icons'

import { useRecoilState } from 'recoil'
import { schedulesState } from '@/store/atoms'
import { CreateWalkSchedules, EditSchedules } from 'utilis/https'
import { useState } from 'react'

const schema = Yup.object({
  person: Yup.string().required(' name of a person '),
  dog: Yup.string().required('dogs name'),
})

type EditButtonType = {
  userData: any
  id?: string
  attribute: {
    person: string
    dog: string
    date: string
  }
}

export const UpdateButton = (props: EditButtonType) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [dogSchedules, setDogSchedules] = useRecoilState<any>(schedulesState)
  const [formData, setFormData] = useState({
    person: props.attribute?.person,
    dog: props.attribute?.dog,
    date: props.attribute?.date,
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      person: '',
      dog: '',
      date: '',
    },
  })

  const onSubmit = (data: { person: string; dog: string; date: string }) => {
    onClose()
    CreateWalkSchedules(data)

    // initial state and update it with the new data
    setDogSchedules(
      (previousState: { person: string; dog: string; date: string }[]) => [
        ...previousState,
        data,
      ],
    )
    console.log('this one here', dogSchedules)
  }
  return (
    <>
      <Box mt={{ base: '-26px', sm: '-26px', md: '-26px' }} marginLeft="208px">
        <Button onClick={onOpen} bg="grey" color="white" size="xs">
          Edit
        </Button>

        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent color="white">
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
                    value={formData.person}
                    onChange={(e) =>
                      setFormData({ ...formData, person: e.target.value })
                    }
                  />
                  {errors.person && <p>This field is required</p>}
                </FormLabel>
                <FormLabel>
                  <p>Dog's Name:</p>
                  <Input
                    type="text"
                    placeholder="Dog's Name..."
                    {...register('dog')}
                    value={formData.dog}
                    onChange={(e) =>
                      setFormData({ ...formData, dog: e.target.value })
                    }
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
                    onClick={() => EditSchedules(props.attribute)}
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
