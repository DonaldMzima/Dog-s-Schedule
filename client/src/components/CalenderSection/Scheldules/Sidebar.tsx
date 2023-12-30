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
  HStack,
  Stack,
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
import { useRecoilState, useRecoilValue } from 'recoil'
import { showCompletedState, openFeedbackModal } from '@/store/atoms'
import { SignedOut, UserButton, UserProfile } from '@clerk/nextjs'
import ProfileModal from '@/components/Modals/ProfileModal'

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const [showCompleted, setShowCompleted] = useRecoilState(showCompletedState)
  const [FeedbackModal, setFeedbackModal] = useRecoilState(openFeedbackModal)

  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false)

  const openProfileModal = () => {
    setIsProfileModalOpen(true)
  }

  const closeProfileModal = () => {
    setIsProfileModalOpen(false)
  }

  const Completedtasks = () => {
    setShowCompleted(!showCompleted)
  }

  const openFeedModal = () => {
    setFeedbackModal(false)
  }
  // const {
  //   isOpen: isFeedbackModalOpen,
  //   onOpen: openFeedbackModal,
  //   onClose: closeFeedbackModal,
  // } = useDisclosure()

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
        p={{ base: 2, md: 14 }}
        display={{ base: isOpen ? 'block' : 'none', md: 'block' }}
        zIndex={1}
        boxShadow="lg"
      >
        <VStack spacing={8} alignItems="center">
          <UserButton afterSignOutUrl="/" />

          <Text fontSize="xl" ml={0}>
            User
          </Text>
        </VStack>
        <VStack spacing={8} alignItems="flex-start" left={0}>
          <Button
            leftIcon={<Icon as={FaUser} boxSize={5} />}
            variant="ghost"
            onClick={openProfileModal}
          >
            Profile
          </Button>

          <ProfileModal
            isOpen={isProfileModalOpen}
            onClose={closeProfileModal}
          />

          <Button
            leftIcon={<Icon as={AiOutlineCheckSquare} boxSize={5} />}
            variant="ghost"
            onClick={Completedtasks}
          >
            {showCompleted ? (
              <Text>Show All</Text>
            ) : (
              <Text>
                Completed <br />
                Tasks
              </Text>
            )}
          </Button>
          <Button
            leftIcon={<Icon as={FaComment} boxSize={5} />}
            variant="ghost"
            onClick={openFeedModal}
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
        <SignedOut />
      </Box>
    </>
  )
}

export default Sidebar
