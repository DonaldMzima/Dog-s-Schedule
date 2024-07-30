import React from 'react'
import {
  VStack,
  Text,
  IconButton,
  Icon,
  Button,
  useColorModeValue,
  Image,
  useColorMode,
  Box,
} from '@chakra-ui/react'
import { FaSignOutAlt, FaComment } from 'react-icons/fa'
import { BiDotsVertical } from 'react-icons/bi'
import { AiOutlineCheckSquare } from 'react-icons/ai'
import { useRouter } from 'next/navigation'
import { useRecoilState } from 'recoil'
import { UserButton } from '@clerk/nextjs'

import FeedbackModal from '@/components/Modals/FeedbackModal'
import { FiMenu } from 'react-icons/fi'
import useSidebar from '@/hooks/useSidebar'

const Sidebar = () => {
  const {
    isOpen,
    showCompleted,
    Feedback,
    colorMode,
    toggleSidebar,
    openProfileModal,
    Completedtasks,
    openFeedModal,
    handleSignOut,
    setFeedbackModal,
  } = useSidebar()

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
              onClick={handleSignOut}
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
