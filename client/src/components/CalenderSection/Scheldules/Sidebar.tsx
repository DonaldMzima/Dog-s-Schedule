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
import { BiDotsVertical } from 'react-icons/bi'
import { AiOutlineCheckSquare } from 'react-icons/ai'
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
import { showCompletedState } from '@/store/atoms'

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const [showCompleted, setShowCompleted] = useRecoilState(showCompletedState)

  const Completedtasks = () => {
    setShowCompleted(!showCompleted)
  }
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
        icon={isOpen ? <FaTimes /> : <BiDotsVertical size={24} />}
        aria-label="Toggle Sidebar"
        display={{ base: 'block', md: 'none' }}
        onClick={toggleSidebar}
        top="-70px"
        variant={'unstyled'}
        color={'black'}
        // pos="fixed"
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
            onClick={Completedtasks}
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

      <Modal
        isOpen={isFeedbackModalOpen}
        onClose={closeFeedbackModal}
        size={{ base: 'xs', md: 'sm' }}
      >
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
