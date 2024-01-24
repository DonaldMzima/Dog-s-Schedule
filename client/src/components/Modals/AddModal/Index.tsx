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
  Flex,
  useColorModeValue,
} from '@chakra-ui/react'
import { useForm } from 'react-hook-form'
import { AddIcon } from '@chakra-ui/icons'
import { yupResolver } from '@hookform/resolvers/yup'
import { useRecoilState } from 'recoil'
import { schedulesState } from '@/store/atoms'
import { CreateWalkSchedules } from 'utilis/https'
import { UserDataTypes } from 'utilis/types'
import { useUser } from '@clerk/nextjs'

const schema = Yup.object().shape({
  person: Yup.string().required('Person Walking the dog is required'),
  dog: Yup.string().required("Dog's Name is required"),
  date: Yup.date().required('Date is required'),
})

export const AddModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [dogSchedules, setDogSchedules] = useRecoilState<any>(schedulesState)
  const { isSignedIn, user } = useUser()
  console.log('user', user?.primaryEmailAddress?.emailAddress)
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })

  const onSubmit = (data: UserDataTypes) => {
    onClose()

    // Access user's email using useUser hook
    const userEmail = user?.primaryEmailAddress?.emailAddress

    // Add the email key to the data object
    const newData = { ...data, email: userEmail }

    // Create the schedule with the updated data
    CreateWalkSchedules(newData)

    // Update the dogSchedules state with the new schedule
    setDogSchedules((previousState: UserDataTypes[]) => [
      ...previousState,
      newData,
    ])
  }

  return (
    <>
      <Container>
        <Flex zIndex={1}>
          <Circle
            size={{ base: '50px', md: '65px' }}
            bg={useColorModeValue('black', 'gray.900')}
            color="white"
            onClick={onOpen}
            position={{ base: 'fixed', md: 'static' }}
            bottom={0}
            right={{ base: 8, md: 'auto' }}
            top={{ base: 8, md: 'auto' }}
            cursor="pointer"
          >
            <AddIcon />
          </Circle>
        </Flex>
        <Modal
          isOpen={isOpen}
          onClose={onClose}
          size={{ base: 'xs', md: 'sm' }}
        >
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
                      Add
                    </Button>
                    <Button
                      bg="#1f1f1a"
                      color="white"
                      onClick={onClose} // Close the modal without adding schedules
                    >
                      Cancel
                    </Button>
                  </Box>
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
