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
  useColorModeValue,
  Flex,
} from '@chakra-ui/react'
import { useForm } from 'react-hook-form'

import { EditSchedules } from 'utilis/https'
import { EditButtonType, UserDataTypes } from 'utilis/types'
import { useRecoilState, useRecoilValue } from 'recoil'
import { scheduleData, updateScheduleModal } from '@/store/atoms'
import { yupResolver } from '@hookform/resolvers/yup'

const schema = Yup.object().shape({
  person: Yup.string().required('Name of a person is required'),
  dog: Yup.string().required("Dog's name is required"),
  date: Yup.date().required('Date is required'),
  isCompleted: Yup.boolean(),
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
      date: new Date(props.attribute.date),
      isCompleted: props.attribute.isCompleted,
    },
    resolver: yupResolver(schema),
  })

  const onSubmit = (data: UserDataTypes) => {
    onClose()
    EditSchedules(data, props.id)
  }

  return (
    <Box mt={{ base: '-26px', sm: '-26px', md: '-26px' }} marginLeft="208px">
      <Modal isOpen={isOpen} onClose={onClose} size={{ base: 'xs', md: 'sm' }}>
        <ModalOverlay />
        <ModalContent
          color={useColorModeValue('#000000', ' white')}
          bg={useColorModeValue('white', ' gray.700')}
          borderRadius="10px"
          boxShadow="0 4px 6px rgba(0, 0, 0, 0.1)"
        >
          <ModalHeader
            bg="#1f1f1a"
            color="white"
            p={4}
            borderRadius="10px 10px 0 0"
            fontWeight="bold"
          >
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
                {errors.person && (
                  <p style={{ color: 'red' }}>{errors.person.message}</p>
                )}
              </FormLabel>
              <FormLabel>
                <p>Dog's Name:</p>
                <Input
                  type="text"
                  placeholder="Dog's Name..."
                  {...register('dog')}
                />
                {errors.dog && (
                  <p style={{ color: 'red' }}>{errors.dog.message}</p>
                )}
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
                {errors.date && (
                  <p style={{ color: 'red' }}>{errors.date.message}</p>
                )}
              </FormLabel>
              <FormLabel>
                <Flex align="center">
                  <Checkbox
                    defaultChecked={props.attribute.isCompleted}
                    {...register('isCompleted')}
                    border="black"
                  />
                  <Box ml="2">
                    {register('isCompleted')
                      ? 'Complete Task'
                      : 'Do Not Complete Task'}
                  </Box>
                </Flex>
              </FormLabel>

              <Center>
                <Box
                  mt={4}
                  display="flex"
                  justifyContent="space-between"
                  width="100%"
                >
                  <Button
                    colorScheme="grey"
                    bg="#1f1f1a"
                    color="white"
                    type="submit"
                  >
                    Save Changes
                  </Button>
                  <Button
                    type="submit"
                    bg="#1f1f1a"
                    color="white"
                    onClick={onClose}
                  >
                    Cancel
                  </Button>
                </Box>
              </Center>
            </form>
          </ModalBody>

          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  )
}

export default UpdateModal
