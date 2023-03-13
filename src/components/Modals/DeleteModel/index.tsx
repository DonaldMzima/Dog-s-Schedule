import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Box,
  useMediaQuery,
  useDisclosure,
} from '@chakra-ui/react'

import React from 'react'

const DeleteButton = () => {
  const [isMobile] = useMediaQuery('(max-width: 768px)')
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      {!isMobile ? (
        <Box marginTop="-45px" marginLeft="568px">
          <Button onClick={onOpen} bg="grey" color="white">
            delete
          </Button>
          <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
            <ModalOverlay
              bg="blackAlpha.300"
              backdropFilter="blur(10px) hue-rotate(90deg)"
            />
            <ModalContent bg="grey" color="white">
              <ModalHeader>delete</ModalHeader>
              <ModalCloseButton />
              <ModalBody pb={6}>Are you Sure?</ModalBody>

              <ModalFooter>
                <Button colorScheme="blue" mr={3}>
                  Yes
                </Button>
                <Button onClick={onClose}>NO</Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </Box>
      ) : (
        <Box marginTop="-45px" marginLeft="236px">
          <Button onClick={onOpen} bg="grey" color="white" size="xs">
            delete
          </Button>
          <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
            <ModalOverlay
              bg="blackAlpha.300"
              backdropFilter="blur(10px) hue-rotate(90deg)"
            />
            <ModalContent bg="grey" color="white">
              <ModalHeader>delete</ModalHeader>
              <ModalCloseButton />
              <ModalBody pb={6}>Are you Sure?</ModalBody>

              <ModalFooter>
                <Button colorScheme="blue" mr={3}>
                  Yes
                </Button>
                <Button onClick={onClose}>NO</Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </Box>
      )}
    </>
  )
}

export default DeleteButton
