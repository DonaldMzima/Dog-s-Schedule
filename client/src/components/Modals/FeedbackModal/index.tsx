import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from '@chakra-ui/react'
import React from 'react'

const FeedbackModal = () => {
  const {
    isOpen: isFeedbackModalOpen,

    onClose: closeFeedbackModal,
  } = useDisclosure()

  return (
    <>
      <Modal isOpen={isFeedbackModalOpen} onClose={closeFeedbackModal}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Feedback</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {/* Add your feedback form or content here */}
            Feedback form or content goes here.
          </ModalBody>
          <ModalFooter>
            <Button onClick={closeFeedbackModal}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default FeedbackModal
