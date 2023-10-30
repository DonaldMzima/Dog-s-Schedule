import React, { useState } from 'react'
import {
  Box,
  VStack,
  Text,
  IconButton,
  Icon,
  Spacer,
  Button,
} from '@chakra-ui/react'
import {
  FaHome,
  FaUser,
  FaCog,
  FaSignOutAlt,
  FaBars,
  FaTimes,
} from 'react-icons/fa'
import { HiDotsVertical } from 'react-icons/hi'

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleSidebar = () => {
    setIsOpen(!isOpen)
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
        top={0}
        h="100%"
        w="200px"
        bg="gray.800"
        color="white"
        p={4}
        display={{ base: isOpen ? 'block' : 'none', md: 'block' }}
      >
        <VStack align="start" spacing={4} mb={600}>
          <Text fontSize="xl">My Sidebar</Text>
        </VStack>
        <Spacer />
        <Button
          leftIcon={<Icon as={FaHome} />}
          variant="ghost"
          color="gray.400"
        >
          Home
        </Button>
        <Button
          leftIcon={<Icon as={FaUser} />}
          variant="ghost"
          color="gray.400"
        >
          Profile
        </Button>
        <Button
          leftIcon={<Icon as={FaSignOutAlt} />}
          variant="ghost"
          color="gray.400"
        >
          Completed
        </Button>
        <Button leftIcon={<Icon as={FaCog} />} variant="ghost" color="gray.400">
          Settings
        </Button>
        <Button
          leftIcon={<Icon as={FaSignOutAlt} />}
          variant="ghost"
          color="gray.400"
          onClick={() => {
            // Handle the logout action here
          }}
        >
          Logout
        </Button>
        <Button
          leftIcon={<Icon as={FaSignOutAlt} />}
          variant="ghost"
          color="gray.400"
        >
          Login
        </Button>
      </Box>
    </>
  )
}

export default Sidebar
