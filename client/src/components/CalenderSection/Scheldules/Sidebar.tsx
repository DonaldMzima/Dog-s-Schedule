import React, { ChangeEvent, useState } from 'react'
import {
  Box,
  VStack,
  Text,
  IconButton,
  Icon,
  Spacer,
  Button,
  useColorModeValue,
  Textarea,
} from '@chakra-ui/react'
import {
  FaHome,
  FaUser,
  FaSignOutAlt,
  FaTimes,
  FaComment, // Added the FaComment icon
} from 'react-icons/fa'
import { HiDotsVertical } from 'react-icons/hi'
// import { BiComment } from 'react-icons/bi'
import { AiOutlineCheckSquare } from 'react-icons/ai'
import Link from 'next/link'
import {
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
} from '@chakra-ui/react'

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const {
    isOpen: isFeedbackModalOpen,
    onOpen: openFeedbackModal,
    onClose: closeFeedbackModal,
  } = useDisclosure()

  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }

  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const toggleLoginLogout = () => {
    setIsLoggedIn(!isLoggedIn)
  }

  return (
    <>
      <IconButton
        icon={isOpen ? <Icon as={FaTimes} /> : <HiDotsVertical />}
        aria-label="Toggle Sidebar"
        display={{ base: 'block', md: 'none' }}
        onClick={toggleSidebar}
        top="20px"
        left="20px"
      />
      <Box
        as="nav"
        pos="fixed"
        left={0}
        top={90}
        bottom={0}
        w="200px"
        bg={useColorModeValue('white', 'gray.900')}
        color={useColorModeValue('#000000', 'white')}
        p={14}
        display={{ base: isOpen ? 'block' : 'none', md: 'block' }}
        zIndex={1}
        boxShadow="lg"
      >
        <Text fontSize="xl">Dog Schedule</Text>

        <Spacer />

        <Button leftIcon={<Icon as={FaUser} boxSize={5} />} variant="ghost">
          Profile
        </Button>
        <Link href="/settings">
          <Button
            leftIcon={<Icon as={AiOutlineCheckSquare} boxSize={5} />}
            variant="ghost"
          >
            Completed
          </Button>
        </Link>
        <Button
          leftIcon={<Icon as={FaComment} boxSize={5} />} // Use the FaComment icon
          variant="ghost"
          onClick={openFeedbackModal} // Open the Feedback modal
        >
          Feedback
        </Button>

        <Button
          leftIcon={<Icon as={FaSignOutAlt} boxSize={5} />}
          variant="ghost"
          onClick={toggleLoginLogout}
          top={{ base: 100, md: 250 }}
        >
          {isLoggedIn ? 'Logout' : 'Login'}
        </Button>
      </Box>

      <Modal isOpen={isFeedbackModalOpen} onClose={closeFeedbackModal}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Feedback</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Textarea
              placeholder="Add your comments here..."
              size="lg" // You can adjust the size as needed
            />
          </ModalBody>
          <ModalFooter>
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
                submitt
              </Button>
              <Button onClick={closeFeedbackModal}>Close</Button>
            </Box>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default Sidebar
