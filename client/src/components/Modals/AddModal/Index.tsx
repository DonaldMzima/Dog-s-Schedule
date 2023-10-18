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
      <Container>
        <Circle
          size={{ base: '50px', md: '65px' }} // Adjust the size as needed
          bg="grey"
          color="white"
          onClick={onOpen}
          position={{ base: 'fixed', md: 'static' }} // Adjust the position as needed
          bottom={0} // Adjust the position as needed
          right={{ base: 8, md: 'auto' }} // Adjust the position as needed
          top={{ base: 8, md: 'auto' }}
        >
          <AddIcon />
        </Circle>

        <Modal
          isOpen={isOpen}
          onClose={onClose}
          size={{ base: 'xs', md: 'sm' }}
        >
          <ModalOverlay />
          <ModalContent
            color="black"
            bg="white"
            borderRadius="10px"
            boxShadow="0 4px 6px rgba(0, 0, 0, 0.1)"
          >
            <ModalHeader
              bg="grey"
              color="white"
              p={4}
              borderRadius="10px 10px 0 0"
              fontWeight="bold"
            >
              Add Schedule
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody p={4}>
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
                    colorScheme="grey"
                    bg="grey"
                    color="white"
                    mt={4}
                    type="submit"
                  >
                    Add
                  </Button>
                </Center>
              </form>
            </ModalBody>
            <ModalFooter />
          </ModalContent>
        </Modal>
      </Container>
    </>
  )
}

export default AddModal
