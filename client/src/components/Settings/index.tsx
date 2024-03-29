/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react'
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
  useColorModeValue,
  Center,
  Box,
  useMediaQuery,
} from '@chakra-ui/react'
import { DarkMode } from '../DarkMode'
import { MdSettings } from 'react-icons/md'

function SettingDrawer({ children, ...rest }: any) {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const [isMobile] = useMediaQuery('(max-width: 768px)')

  return (
    <>
      {isMobile ? (
        <Button
          onClick={onOpen}
          size="md"
          height="48px"
          width="100px"
          color={useColorModeValue('#000000', ' white')}
          bg={'transparent'}
        >
          <Box>
            <MdSettings size={'3em'} />
          </Box>
        </Button>
      ) : (
        <Button
          onClick={onOpen}
          size="md"
          height="48px"
          width="100px"
          color={useColorModeValue('#fafaf7', '#1f1f1a')}
          bg={useColorModeValue('#1f1f1a', ' #fafaf7')}
        >
          Settings
        </Button>
      )}
      <Drawer
        variant="alwaysOpen"
        {...rest}
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        trapFocus={false}
        closeOnOverlayClick={true}
        blockScrollOnMount={false}
      >
        <DrawerContent bg={useColorModeValue('white', 'gray.900')}>
          <DrawerCloseButton />
          <DrawerHeader>DarkMode</DrawerHeader>

          <DrawerBody>
            <DarkMode />
          </DrawerBody>

          <DrawerFooter>
            <Center>
              <Button variant="outline" mr={3} onClick={onClose}>
                Close
              </Button>
            </Center>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default SettingDrawer
