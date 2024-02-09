import React from 'react'
import * as Yup from 'yup'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  Input,
} from '@chakra-ui/react'
import { useForm } from 'react-hook-form'
import { CreateFeedback, FeedbackDataTypes } from 'utilis/https'
import { useUser } from '@clerk/nextjs'

import { yupResolver } from '@hookform/resolvers/yup'

const schema = Yup.object().shape({
  message: Yup.string().required('message is required'),
})

const FeedbackModal = ({ isOpen, onClose }: any) => {
  const { user } = useUser()
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })

  const onSubmit = async (data: FeedbackDataTypes | any) => {
    console.log('Feedback message:', data)
    // Reset message field after submission if needed
    setValue('message', '')
    onClose() // Close modal after submission
    const userEmail = user?.primaryEmailAddress?.emailAddress
    const newData = { ...data, userEmail }
    await CreateFeedback(newData)
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="lg">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Give us your Feedback</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Input
              {...register('message')}
              placeholder="Enter your feedback message..."
            />
            {errors.message && (
              <p style={{ color: 'red' }}>{errors.message.message}</p>
            )}

            <Button colorScheme="grey" bg="#1f1f1a" color="white" type="submit">
              Submit
            </Button>
            <Button variant="ghost" onClick={onClose}>
              Close
            </Button>
          </form>
        </ModalBody>
        <ModalFooter></ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default FeedbackModal
