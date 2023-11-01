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
import { FaHome, FaUser, FaSignOutAlt, FaTimes } from 'react-icons/fa'
import { HiDotsVertical } from 'react-icons/hi'
import { BiComment } from 'react-icons/bi'
import { AiOutlineCheckSquare } from 'react-icons/ai'

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false)

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
        top={81}
        bottom={0}
        w="200px"
        bg={useColorModeValue('white', 'gray.900')}
        color={useColorModeValue('#000000', ' white')}
        p={14}
        display={{ base: isOpen ? 'block' : 'none', md: 'block' }}
        zIndex={1}
        boxShadow="lg"
      >
        <Text fontSize="xl">Dog Schedule</Text>

        <Spacer />
        <Button leftIcon={<Icon as={FaHome} />} variant="ghost">
          Home
        </Button>
        <Button leftIcon={<Icon as={FaUser} />} variant="ghost">
          Profile
        </Button>
        <Button leftIcon={<Icon as={AiOutlineCheckSquare} />} variant="ghost">
          Completed
        </Button>
        <Button leftIcon={<Icon as={BiComment} />} variant="ghost">
          Comments
        </Button>

        <Button
          leftIcon={<Icon as={FaSignOutAlt} />}
          variant="ghost"
          onClick={toggleLoginLogout}
          top={{ base: 100, md: 250 }}
        >
          {isLoggedIn ? 'Logout' : 'Login'}
        </Button>
      </Box>
    </>
  )
}

export default Sidebar
