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
  Checkbox,
} from '@chakra-ui/react'
import { useForm } from 'react-hook-form'
import { AddIcon } from '@chakra-ui/icons'
import { EditSchedules } from 'utilis/https'
import { EditButtonType, UserDataTypes } from 'utilis/types'
import { useRecoilState, useRecoilValue } from 'recoil'
import { scheduleData, updateScheduleModal } from '@/store/atoms'

const schema = Yup.object({
  person: Yup.string().required(' name of a person '),
  dog: Yup.string().required('dogs name'),
})

export const UpdateModal = (props: EditButtonType) => {
  const [isOpen, setIsOpen] = useRecoilState(updateScheduleModal)

  const udatescheduleDataUse = useRecoilValue(scheduleData)
  const onClose = () => {
    setIsOpen(false)
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      person: props.attribute.person,
      dog: props.attribute.dog,
      date: props.attribute.date,
      isCompleted: props.attribute.isCompleted,
    },
  })

  const onSubmit = (data: UserDataTypes) => {
    onClose()
    EditSchedules(data, props.id)

    // initial state and update it with the new data
  }

  return (
    <>
      <Box mt={{ base: '-26px', sm: '-26px', md: '-26px' }} marginLeft="208px">
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>
              <AddIcon />
              Edit Schedule
              {udatescheduleDataUse?.person}
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
                <FormLabel>
                  <p>Is Completed:</p>
                  <Checkbox
                    defaultChecked={props.attribute.isCompleted}
                    {...register('isCompleted')}
                  />
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

export default UpdateModal
