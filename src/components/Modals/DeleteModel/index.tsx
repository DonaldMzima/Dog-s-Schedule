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
import { DeleteSchedules } from 'utilis/https'

type DeleteButtonType = {
  id: number
}

const DeleteButton = (props: DeleteButtonType) => {
  const [isMobile] = useMediaQuery('(max-width: 768px)')
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      {!isMobile ? (
        <Box mt={{ base: '-45', sm: '-45', md: '-45' }} marginLeft="214px">
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
                <Button
                  type="submit"
                  colorScheme="blue"
                  mr={3}
                  onClick={() => DeleteSchedules(props.id)}
                >
                  Yes
                </Button>

                <Button onClick={onClose}>NO</Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </Box>
      ) : (
        <Box marginTop="-45px" marginLeft="196px">
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
                <Button
                  colorScheme="blue"
                  mr={3}
                  onClick={() => DeleteSchedules(props.id)}
                >
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
