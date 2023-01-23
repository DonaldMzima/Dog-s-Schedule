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
  const [modal, setModal] = useState<any>(true)

  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm()

  const onSubmit = (data: any) => {
    onOpen()
    setModal(data)
    console.log('check this', data)
  }

  return (
    <>
      <form>
        <Container rounded="md">
          <Box color="white" onClick={onOpen}>
            <AddIcon />
          </Box>

          <Modal isOpen={isOpen} onClose={onClose} data={modal}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>
                <AddIcon />
                Add Schedule
              </ModalHeader>
              <ModalCloseButton />
              <ModalBody>
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
              </ModalBody>

              <ModalFooter>
                <Button
                  colorScheme="blue"
                  mr={2}
                  onClick={onClose}
                  onSubmit={handleSubmit(onSubmit)}
                  type="submit"
                >
                  Add
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </Container>
      </form>
    </>
  )
}

export default AddButton
