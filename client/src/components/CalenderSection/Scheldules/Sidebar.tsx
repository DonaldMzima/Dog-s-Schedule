import React, { useState } from 'react'
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
  Avatar,
} from '@chakra-ui/react'
import { FaUser, FaSignOutAlt, FaTimes, FaComment } from 'react-icons/fa'
import { HiDotsVertical } from 'react-icons/hi'
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
import { useRecoilState } from 'recoil'
import { showCompletedState } from '@/store/atoms' // Import the Recoil atom

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const [showCompleted, setShowCompleted] = useRecoilState(showCompletedState)

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
        bg={useColorModeValue('white', ' gray.700')}
        color={useColorModeValue('#000000', 'white')}
        p={14}
        display={{ base: isOpen ? 'block' : 'none', md: 'block' }}
        zIndex={1}
        boxShadow="lg"
      >
        <VStack spacing={8} alignItems="center">
          <VStack spacing={2} alignItems="center">
            <Avatar size="lg" icon={<FaUser />} />
            <Text fontSize="xl">User</Text>
          </VStack>
          <Button leftIcon={<Icon as={FaUser} boxSize={5} />} variant="ghost">
            Profile
          </Button>

          <Button
            leftIcon={<Icon as={AiOutlineCheckSquare} boxSize={5} />}
            variant="ghost"
            onClick={() => setShowCompleted(!showCompleted)} // Call the function from props
          >
            {showCompleted ? 'Show All' : 'CompletedTasks'}
          </Button>

          <Button
            leftIcon={<Icon as={FaComment} boxSize={5} />}
            variant="ghost"
            onClick={openFeedbackModal}
          >
            Feedback
          </Button>

          <Button
            leftIcon={<Icon as={FaSignOutAlt} boxSize={5} />}
            variant="ghost"
            onClick={toggleLoginLogout}
          >
            {isLoggedIn ? 'Logout' : 'Login'}
          </Button>
        </VStack>
      </Box>

      <Modal isOpen={isFeedbackModalOpen} onClose={closeFeedbackModal}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Feedback</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Textarea placeholder="Add your comments here..." size="lg" />
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
                Submit
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
