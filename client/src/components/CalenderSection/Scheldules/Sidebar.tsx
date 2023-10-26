import React, { useState } from 'react'
import { Box, VStack, Text, IconButton, Icon, Spacer } from '@chakra-ui/react'
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
        pos="fixed"
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
        <VStack align="start" spacing={4}>
          <Text fontSize="xl">My Sidebar</Text>
          <IconButton
            icon={<Icon as={FaHome} />}
            aria-label="Home"
            variant="ghost"
          />
          <IconButton
            icon={<Icon as={FaUser} />}
            aria-label="Profile"
            variant="ghost"
          />
          <IconButton
            icon={<Icon as={FaCog} />}
            aria-label="Settings"
            variant="ghost"
          />
        </VStack>
        <Spacer />
        <IconButton
          icon={<Icon as={FaSignOutAlt} />}
          aria-label="Logout"
          variant="ghost"
        />
      </Box>
    </>
  )
}

export default Sidebar
