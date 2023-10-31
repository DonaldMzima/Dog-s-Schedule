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
        top={81}
        w="200px"
        bg={useColorModeValue('white', 'gray.900')}
        color="white"
        p={14}
        display={{ base: isOpen ? 'block' : 'none', md: 'block' }}
        zIndex={1}
        boxShadow="lg"
      >
        <VStack align="start" spacing={4}>
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
