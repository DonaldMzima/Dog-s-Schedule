import React, { useState } from 'react'
import {
  VStack,
  Text,
  IconButton,
  Icon,
  Button,
  useColorModeValue,
  CloseButton,
  Flex,
  Image,
  useColorMode,
  Box,
} from '@chakra-ui/react'
import { FaUser, FaSignOutAlt, FaTimes, FaComment } from 'react-icons/fa'
import { BiDotsVertical } from 'react-icons/bi'
import { AiOutlineCheckSquare } from 'react-icons/ai'
import { useRouter } from 'next/navigation'
import { useRecoilState, useRecoilValue } from 'recoil'
import { showCompletedState, openFeedbackModal } from '@/store/atoms'
import { UserButton, useClerk } from '@clerk/nextjs'
import ProfileModal from '@/components/Modals/ProfileModal'
import FeedbackModal from '@/components/Modals/FeedbackModal'
import { FiMenu } from 'react-icons/fi'

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const [showCompleted, setShowCompleted] = useRecoilState(showCompletedState)
  const [Feedback, setFeedbackModal] = useRecoilState(openFeedbackModal)

  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false)
  const { signOut } = useClerk()
  const router = useRouter()
  const openProfileModal = () => {
    setIsProfileModalOpen(true)
  }

  const { colorMode } = useColorMode()

  const closeProfileModal = () => {
    setIsProfileModalOpen(false)
  }

  const Completedtasks = () => {
    setShowCompleted(!showCompleted)
  }

  const openFeedModal = () => {
    setFeedbackModal(true)
  }

  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <IconButton
        icon={isOpen ? <FiMenu /> : <BiDotsVertical size={24} />}
        aria-label="Toggle Sidebar"
        display={{ base: 'block', md: 'none' }}
        onClick={toggleSidebar}
        top="0%"
        variant={'unstyled'}
        color={'black'}
      />

      {/* <IconButton
        display={{ base: 'flex', md: 'none' }}
        onClick={onOpen}
        variant="outline"
        aria-label="open menu"
        icon={<FiMenu />}
      /> */}

      <Box
        transition="1s ease"
        borderRight="1px"
        w={{ base: 'full', md: 60 }}
        pos="fixed"
        h="full"
        as="nav"
        left={0}
        bottom={0}
        bg={useColorModeValue('white', 'gray.900')}
        color={useColorModeValue('#000000', 'white')}
        p={{ base: 2, md: 14 }}
        display={{ base: isOpen ? 'block' : 'none', md: 'block' }}
        boxShadow="lg"
        zIndex={1}
        borderColor={useColorModeValue('gray.200', 'gray.700')}
      >
        <Box>
          {colorMode === 'light' && (
            <Image
              mr={550}
              src="/dogwalkschedule.png"
              alt="DogWalkSchedule Logo"
            />
          )}
        </Box>

        <VStack spacing={5} alignItems="center">
          <UserButton afterSignOutUrl="/" />
        </VStack>

        <Box
          as="nav"
          style={{ textDecoration: 'none' }}
          _focus={{ boxShadow: 'none' }}
        >
          <VStack p="4" borderRadius="lg" cursor="pointer">
            <Button
              leftIcon={<Icon as={AiOutlineCheckSquare} boxSize={5} />}
              variant="ghost"
              pos="static"
              onClick={Completedtasks}
            >
              {showCompleted ? (
                <Text>Show All</Text>
              ) : (
                <Text>Completed Schedules</Text>
              )}
            </Button>
            <Button
              leftIcon={<Icon as={FaComment} boxSize={5} />}
              variant="ghost"
              onClick={openFeedModal}
            >
              Feedback
            </Button>
            <FeedbackModal
              isOpen={Feedback}
              onClose={() => setFeedbackModal(false)}
            />
            <Button
              leftIcon={<Icon as={FaSignOutAlt} boxSize={5} />}
              variant="ghost"
              mt="200%"
              onClick={() => signOut(() => router.push('/'))}
            >
              Sign out
            </Button>
          </VStack>
        </Box>
      </Box>
    </>
  )
}

export default Sidebar
