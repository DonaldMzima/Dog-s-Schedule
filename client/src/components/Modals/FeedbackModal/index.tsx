import React, { useState } from 'react'
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

const FeedbackModal = ({ isOpen, onClose }: any) => {
  const [message, setMessage] = useState('')

  const handleMessageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value)
  }

  const handleSubmit = () => {
    // Handle submission of feedback message
    console.log('Feedback message:', message)
    // Reset message field after submission if needed
    setMessage('')
    onClose() // Close modal after submission
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="lg">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Feedback Modal</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          {/* Input field for feedback message */}
          <Input
            value={message}
            onChange={handleMessageChange}
            placeholder="Enter your feedback message..."
          />
        </ModalBody>
        <ModalFooter>
          <Button bg="#1f1f1a" color="white" mr={3} onClick={handleSubmit}>
            Submit
          </Button>
          <Button variant="ghost" onClick={onClose}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default FeedbackModal
